import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type Document = HydratedDocument<Property>;

@Schema({timestamps: true})

export class Property {

  @Prop({ required: true })
  title: string;

  @Prop({required: true})
  description: string;

  @Prop({required: true})
  price: number;

  @Prop({required: true})
  location: string;

  
  @Prop({type:[String],default: [] })
  images: string[];


  @Prop({enum: ['rent', 'sale'], required: true })
  type: 'rent' | 'sale';

  @Prop({ required: true, enum: ['apartment', 'villa', 'house'] })
   category: 'apartment' | 'villa' | 'house';

  @Prop({ required: true })
  bedrooms: number;


  @Prop({default: false})
  isFeatured: boolean;

  @Prop({default: true })
  isActive: boolean;

  // Google Map
  @Prop({
    type:   {lat: Number, lng: Number},
  
    required: false ,
  })
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const PropertySchema = SchemaFactory.createForClass(Property);