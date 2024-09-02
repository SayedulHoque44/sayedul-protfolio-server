
import catchAsync from "../../utils/catchAsync";
import { UserModel } from "./user.model";



export const loginUser = catchAsync(async (req, res) => {
    const {email,password}= req.body

    const user = await UserModel.findOne({
        email:email
    })

    if(!user){
        throw new Error("User Not Found")
    }

    if( password !== user.password ){
      throw new Error("Password didn't match!")
    }

    res.send({
      statusCode: 201,
      success: true,
      message: "Login Success",
      data: user,
    });
  });


  export const UpdateUser = catchAsync(async (req,res) => {
    const {body,params} = req

    const user = await UserModel.findByIdAndUpdate(params.id,body,{new:true})

    res.send({
      statusCode: 201,
      success: true,
      message: "User Updated Success",
      data: user,
    });
  })

  export const getMyProfile = catchAsync(async (req,res) => {
    // const {body,params} = req

    const user = await UserModel.findById("6696b69e28e9ecd8b5ea8a1e").select('-password');

    res.send({
      statusCode: 201,
      success: true,
      message: "User Retrive Success",
      data: user,
    });
  })



