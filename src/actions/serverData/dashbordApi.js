"use server";

import { collections, dbConnect } from "@/lib/databaseConnect";
import { ObjectId } from "mongodb";

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

// My Services Booking  Update
export const updateMyBooking = async (id) => {
  try {
    // 2. Prepare query & update
    const query = { _id: new ObjectId(id) };
    const update = {
      $set: {
        status: "confirmed",
        updatedAt: new Date().toISOString(),
      },
    };
    // 3. Update database
    const result = await dbConnect(collections.BOOKING).updateOne(
      query,
      update,
    );

    // 4. Handle not found case
    if (result.matchedCount === 0) {
      return {
        success: false,
        message: "Booking not found",
      };
    }

    return {
      success: true,
      message: "Booking confirmed successfully",
      result,
    };
  } catch (error) {
    console.error("Update Booking Error:", error);

    return {
      success: false,
      message: "Failed to update booking",
    };
  }
};

export const deleteMyBooking = async (id) => {
  try {
    // 1. Prepare query
    const query = { _id: new ObjectId(id) };

    // 2. Delete from database
    const result = await dbConnect(collections.BOOKING).deleteOne(query);

    // 3. Handle not found case
    if (result.deletedCount === 0) {
      return {
        success: false,
        message: "Booking not found",
      };
    }
    return {
      success: true,
      message: "Booking deleted successfully",
      result,
    };
  } catch (error) {
    console.error("Delete Booking Error:", error);

    return {
      success: false,
      message: "Failed to delete booking",
    };
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
