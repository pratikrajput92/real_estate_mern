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
  type: string;

  @Prop({default: false})
  isFeatured: boolean;

  @Prop({default: true })
  isActive: boolean;

  // Google Map
  @Prop({
    type:   {lat: Number, lng: Number},
    default: {lat: 0, lng: 0},
  })
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const PropertySchema = SchemaFactory.createForClass(Property);