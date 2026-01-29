import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService
  ) {}
async signupUser (data: any) {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = new this.userModel({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    role: 'user',
  });

  await user.save();
  return {message: 'User Signup Successfully'};
 } 

 async signupAdmin(data: any) {
  if(data.adminKey !== process.env.ADMIN_KEY) {
    throw new UnauthorizedException('invalid Admin Key');
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const admin = new this.userModel({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    role: 'admin',
  });

  await admin.save();
  return {message: 'Admin signup Successfully'};
 }

 async login(email: string, password: string, role?: string){
  const user = await this.userModel.findOne({email});
  if(!user){
     throw new UnauthorizedException('Invalid Credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) throw new UnauthorizedException("Invalid credentials");


  if(role === 'admin'){
    if(user.role !== 'admin'){
      throw new UnauthorizedException(
        'Only admin can login here'
      );
    }
  }

  if(!role){
    if(user.role === 'admin'){
      throw new UnauthorizedException(
        'Admin must login from admin panel'
      );
    }
  }

  // if(role && user.role !== role)
  //   throw new UnauthorizedException('unauthorized');

  // 
  const token = this.jwtService.sign({id: user._id, role: user.role });

  return{
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
 }
}


