// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: NextRequest) {
   
  try {
    await connectToDatabase(); // Connect to MongoDB

    const { username, password ,email } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username,email, password: hashedPassword });
    await newUser.save();
    
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
    
  } catch (error) {
    return NextResponse.json({ error: 'Signup failed' }, { status: 500 });
    console.log(error)
  }
}

