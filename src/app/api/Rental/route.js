import data from "../../Data/rental.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(data);
}
