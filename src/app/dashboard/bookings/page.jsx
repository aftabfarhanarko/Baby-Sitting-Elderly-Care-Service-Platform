import React, { use } from "react";
import BookingsContent from "@/components/dashboard/BookingsContent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { myAllBookings, myCaregiverBookings } from "@/actions/serverData/dashbordApi";

const BookingsPage = async () => {
  const { user } = await getServerSession(authOptions);
  // console.log("UUU", user?.email);
  const allBookig = await myAllBookings(user?.email);
  const caregiverBookings = await myCaregiverBookings(user?.email);
  // console.log("My Booking", allBookig);

  return <BookingsContent allBookig={allBookig} caregiverBookings={caregiverBookings}/>;
};

export default BookingsPage;
