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

  async create(dto: CreatePropertyDto){
    const coords = await this.getCoordinates(dto.location);

    return this.propertyModel.create({
      ...dto,
      coordinates: coords,
    });
  }

  async findAll(){
    return await this.propertyModel.find();
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
    updateData.coordinates = coords;
  }

  return this.propertyModel.findByIdAndUpdate(
    id,
    updateData,
    { new: true }
  );
}



   // Google Map

   private async getCoordinates(location: string){
    
    try {
      const apiKey = process.env.GOOGLE_MAPS_API_KEY;
       if (!apiKey) {
      console.log("❌ GOOGLE MAP API KEY MISSING");
      return { lat: 0, lng: 0 };
    }

      const res = await axios.get( `https://maps.googleapis.com/maps/api/geocode/json`, {params: {address: location, key: apiKey}});
      console.log("GOOGLE MAPS RESPONSE", res.data);

      console.log("API KEY:", process.env.GOOGLE_MAPS_API_KEY);
      console.log("LOCATION:", location);
      console.log("GOOGLE RESPONSE:", res.data);

      if(res.data.status === 'OK'&& res.data.results.length>0){
        const {lat, lng} = res.data.results[0].geometry.location;
        return {lat, lng};
      }

     

    } catch (error) {
       console.error("Geocoding failed", error);
    }
    return {lat: 0, lng: 0};
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
