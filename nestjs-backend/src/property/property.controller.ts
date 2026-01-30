import { Controller, Post, Body, UseGuards, UseInterceptors, UploadedFiles, Get, Param, Delete, Put } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorators';
import { PropertyService } from './property.service';
import { multerConfig } from './multer.config';
import { UpdatePropertyDto } from './dto/update-property.dto';

 


@Controller('property')

export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}


  

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post()
  @UseInterceptors(FilesInterceptor('images', 5, {storage: multerConfig.Storage,}))
  create(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body: any,
  ) {
    const imagePaths = files.map(
      file => `/uploads/properties/${file.filename}`,
    );

    return this.propertyService.create({
      ...body,
      images: imagePaths,
      coordinates: body.coordinates,
    });
    
  }
  

  @Get()
  getPublicProperty() {
    return this.propertyService.findAll();
  }

  @Get(':id/public')
  getOnePublic(@Param('id') id: string) {
    return this.propertyService.findOne(id);
  }

  // Admin property list (Admin only)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('admin')
  getAllAdmin() {
    return this.propertyService.findAll();
  }

  // Get single property (Admin only)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.propertyService.findOne(id);
  }

  // Update property (Admin only)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Put(':id')
  update(@Param('id') id: string,
   @Body() dto: UpdatePropertyDto,) {
    return this.propertyService.update(id, {
      ...dto, coordinates: dto.coordinates,
    });
  }

  // Delete property (Admin only)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.propertyService.delete(id);
  }


  // Dashboard
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('admin/stats')
  getDashboardStats(){
    return this.propertyService.getDashboardStats();
  }
}