import { NextResponse } from "next/server";
import data from "../../../Data/rental.json";

export const GET = async (req, { params }) => {
  try {
    const { id } = params; // Extract id from params
    console.log("Requested id:", id); // Use the correct variable name

    // Find the property by ID
    const filterData = data.find((item) => item.id === id);

    // Return the filtered data as JSON
    if (filterData) {
      return NextResponse.json(filterData);
    } else {
      // Handle case where no data is found
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    // Handle errors and return an appropriate response
    console.error("Error fetching property data:", error);
    return NextResponse.json(
      { error: "Failed to fetch property data" },
      { status: 500 }
    );
  }
};
