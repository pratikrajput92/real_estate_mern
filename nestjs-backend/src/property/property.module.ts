import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Property, PropertySchema } from './property.schema';
import { User, UserSchema } from 'src/auth/models/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Property.name, schema: PropertySchema},]),
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),

  ],
  controllers: [PropertyController],
  providers: [PropertyService]
})
export class PropertyModule {}
