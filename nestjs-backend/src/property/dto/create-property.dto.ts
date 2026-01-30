import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";



export class CreatePropertyDto {

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  location: string;

  @IsArray()
  // @IsOptional()
  @IsNotEmpty()
  images?: string[];

  @IsString()
  @IsNotEmpty()
  type: 'rent' | 'sale';

  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean;

  @IsOptional()
  coordinates?: {lat: number, lng: number};
}