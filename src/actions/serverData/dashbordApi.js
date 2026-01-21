"use server";

import { collections, dbConnect } from "@/lib/databaseConnect";

export const myAllBookings = async (email) => {
  try {
    const result = await dbConnect(collections.BOOKING)
      .find({ "user.email": email })
      .toArray();

    return result.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};

export const myCaregiverBookings = async (email) => {
  try {
    const result = await dbConnect(collections.BOOKINGCAREGIVERS)
      .find({ bookerEmail: email })
      .toArray();

    return result.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching caregiver bookings:", error);
    return [];
  }
};
