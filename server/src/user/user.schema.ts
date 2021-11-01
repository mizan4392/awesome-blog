import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'
export type UserDocument = User & Document

@Schema()
export class User{

    @Prop({
        required:true,
        unique:true,
        type:String
    })
    userName:string;

    @Prop({
        required:true,
        unique:true,
        type:String
    })
    email:string;

    @Prop({
        required:true,
        type:String
    })
    password:string;

    @Prop({
        type:String,
        default:""
    })
    photo:string;

    @Prop({
        default:Date.now
    })
    createdAt:string
}

export const UserSchema = SchemaFactory.createForClass(User);