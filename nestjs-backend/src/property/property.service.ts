import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Property } from './property.schema';
import { Model } from 'mongoose';
import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropertyService {

  constructor(
    @InjectModel(Property.name)
    private propertyModel: Model<Property>
  ) {}

  create(dto: CreatePropertyDto){
    return this.propertyModel.create(dto);
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

  update(id: string, dto: CreatePropertyDto) {
    return this.propertyModel.findByIdAndUpdate(id, dto, { new: true, });
  }
}
