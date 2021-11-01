import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from "mongoose";
import { User, UserDocument } from "./user.schema";


@Injectable()
export class UserRepository{
    constructor(
        @InjectModel(User.name) private readonly userModel:Model<UserDocument>
    ){}
}