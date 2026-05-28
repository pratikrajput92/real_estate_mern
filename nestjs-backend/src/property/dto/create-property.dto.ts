import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

class coordinatesDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;
}

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
  @IsOptional()
  @IsNotEmpty()
  images?: string[];

  @IsIn(['rent', 'sale'])
  type: 'rent' | 'sale';

 

  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean;

  @IsString()
  @IsIn(['apartment','villa','house'])
  category: 'apartment' | 'villa' | 'house';

  @IsNumber()
  bedrooms: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => coordinatesDto)
  coordinates? :coordinatesDto;
  
}