// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET || `vijay123`;

export async function POST(req: NextRequest) {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    const { email, password } = await req.json();

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 400 });
    }

    // Validate password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Create a JWT token
    const token = jwt.sign({email:email}, JWT_SECRET, { expiresIn: '1h' });

    // Set token in HTTP-only cookie
    const cookie = serialize('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 600, // 10min 60 *10
      secure: process.env.NODE_ENV === 'production', // Ensure this is secure in production
      sameSite: 'strict', // Prevent CSRF attacks
    });

    // Return response with cookie
    return new NextResponse(JSON.stringify({ message: 'Login successful' }), {
      headers: { 'Set-Cookie': cookie },
    });

  } catch (error) {
    console.error('Login error:', error); // Log the error before responding
    return NextResponse.json({ error: 'Login failed. Please try again later.' }, { status: 500 });
  }
}
