import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you would normally save to MongoDB
    console.log("New Event Registration:", body);

    // Mock success response
    return NextResponse.json({ 
      success: true, 
      message: "Registration successful",
      data: body 
    });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Registration failed" 
    }, { status: 500 });
  }
}
