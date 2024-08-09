import Checkout from "../../model/Checkout";
import { connectDb } from "@/app/utils/connectdb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDb();

    const body = await req.json();
    const { name, email, phoneNumber, address, adharCard, panCard } = body;

    // Validate request body
    if (!name || !email || !phoneNumber || !address || !adharCard || !panCard) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Create new checkout entry
    const checkout = new Checkout({
      name,
      email,
      phoneNumber,
      address,
      adharCard,
      panCard,
    });

    await checkout.save();

    return NextResponse.json({ message: "Details created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating details:", error);
    return NextResponse.json(
      { message: "Failed to create details" },
      { status: 500 }
    );
  }
};
