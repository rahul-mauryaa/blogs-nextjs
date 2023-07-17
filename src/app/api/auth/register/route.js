import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  // const newUser = new User({
  //   name,
  //   email,
  //   password: hashedPassword,
  // });
  // console.log(newUser, "newUser");

  const data = {
    name,
    email,
    password: hashedPassword,
  };

  try {
    const user = await User.create(data);

    if (!user) {
      console.log(`>>> not created`);
    }

    // await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
      data: user,
    });
  } catch (err) {
    console.log(">>>", err.stack);
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
