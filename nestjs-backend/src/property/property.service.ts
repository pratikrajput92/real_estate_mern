import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Property } from './property.schema';
import { Model } from 'mongoose';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { User } from 'src/auth/models/user.schema';
import axios from 'axios';

@Injectable()
export class PropertyService {

  constructor(
    @InjectModel(User.name)private userModel: Model<User>,
    @InjectModel(Property.name)private propertyModel: Model<Property>,
    
  ) {}

    async create(dto: CreatePropertyDto) {
    const coords = await this.getCoordinates(dto.location);

        const propertyData: any = {
          ...dto,
        };

        if (coords && coords.lat && coords.lng) {
          propertyData.coordinates = coords;
        }

        return this.propertyModel.create(propertyData);
      }



  async findAll(filters: any = {}){
    const mongoQuery : any = {}; 

    if(filters.category && filters.category !== "all"){
      mongoQuery.category = filters.category;
    }
     
    if(filters.location) {
      mongoQuery.location = {
        $regex: filters.location,
        $options: "i",
      };
    }

    if(filters.minPrice || filters.maxPrice){
      mongoQuery.price = {};
      
      if(filters.minPrice){
        mongoQuery.price.$gte = Number(filters.minPrice);
      }

      if(filters.maxPrice){
        mongoQuery.price.$lte = Number(filters.maxPrice);
      }
    }

      if(filters.bedrooms){
        mongoQuery.bedrooms = Number(filters.bedrooms);
      }
    
    return this.propertyModel.find(mongoQuery);

   }

  findOne(id: string){
    return this.propertyModel.findById(id);
  }

  delete(id: string){
    return this.propertyModel.findByIdAndDelete(id);
  }

 async update(id: string, dto: UpdatePropertyDto) {
  const updateData: any = { ...dto };

      if (dto.location) {
        const coords = await this.getCoordinates(dto.location);

        if (coords && coords.lat && coords.lng) {
          updateData.coordinates = coords;
        } else {
          updateData.$unset = { coordinates: "" };
        }
      }

      return this.propertyModel.findByIdAndUpdate(id, updateData, { new: true });
    }




   // Google Map

   private async getCoordinates(location: string) {
    try {
      const res = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: location,
            format: "json",
            limit: 1,
          },
          headers: {
            "User-Agent": "real-estate-app", 
          },
        }
      );

      if (!res.data || res.data.length === 0) {
        return null;
      }

      return {
        lat: parseFloat(res.data[0].lat),
        lng: parseFloat(res.data[0].lon),
      };
    } catch (error) {
      console.error("OSM Geocoding failed", error.message);
      return null;
    }
  }

    async getDashboardStats() {
      const users = await this.userModel.countDocuments();
      const totalProperties = await this.propertyModel.countDocuments();
      const sold = await this.propertyModel.countDocuments({
        type: 'sale',
      });



      return {
        users,
        totalProperties,
        sold,
      };
    }

}
