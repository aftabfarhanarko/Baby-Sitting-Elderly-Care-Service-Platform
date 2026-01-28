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
// My Services Booking  Deleted
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

export const getAllUsers = async () => {
  try {
    const result = await dbConnect(collections.USER).find({}).toArray();
    return result.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// Update User Role
export const updateUserRole = async (id, role) => {
  try {
    const query = { _id: new ObjectId(id) };
    const update = {
      $set: {
        role: role,
        updatedAt: new Date().toISOString(),
      },
    };
    const result = await dbConnect(collections.USER).updateOne(query, update);
    
    if (result.matchedCount === 0) {
      return { success: false, message: "User not found" };
    }
    
    return { success: true, message: "User role updated successfully" };
  } catch (error) {
    console.error("Update Role Error:", error);
    return { success: false, message: "Failed to update role" };
  }
};

// Delete User
export const deleteUser = async (id) => {
  try {
    const query = { _id: new ObjectId(id) };
    const result = await dbConnect(collections.USER).deleteOne(query);
    
    if (result.deletedCount === 0) {
      return { success: false, message: "User not found" };
    }
    
    return { success: true, message: "User deleted successfully" };
  } catch (error) {
    console.error("Delete User Error:", error);
    return { success: false, message: "Failed to delete user" };
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

// Favorite Caregivers  Update
export const updateCaregivers = async (id) => {
  try {
    // 2. Prepare query & update
    const query = { _id: new ObjectId(id) };
    const update = {
      $set: {
        state: "confirmed",
        updatedAt: new Date().toISOString(),
      },
    };
    // 3. Update database
    const result = await dbConnect(collections.BOOKINGCAREGIVERS).updateOne(
      query,
      update,
    );

    // 4. Handle not found case
    if (result.matchedCount === 0) {
      return {
        success: false,
        message: "Caregivers  not found",
      };
    }

    return {
      success: true,
      message: "Caregivers  confirmed successfully",
      result,
    };
  } catch (error) {
    console.error("Update Caregivers  Error:", error);

    return {
      success: false,
      message: "Failed to update Caregivers ",
    };
  }
};

export const deleteCaregivers = async (id) => {
  try {
    // 1. Prepare query
    const query = { _id: new ObjectId(id) };

    // 2. Delete from database
    const result = await dbConnect(collections.BOOKINGCAREGIVERS).deleteOne(
      query,
    );

    // 3. Handle not found case
    if (result.deletedCount === 0) {
      return {
        success: false,
        message: "Caregivers not found",
      };
    }

    return {
      success: true,
      message: "Caregivers deleted successfully",
      result,
    };
  } catch (error) {
    console.error("Delete Caregivers Error:", error);

    return {
      success: false,
      message: "Failed to delete Caregivers",
    };
  }
};

// Current User Data SHow And Updeat
export const getCurrentUser = async (email) => {
  try {
    if (!email) {
      return {
        success: false,
        message: "Email is required",
      };
    }

    const user = await dbConnect(collections.USER).findOne({ email });

    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }

    // Convert _id to string
    const safeUser = {
      ...user,
      _id: user._id.toString(),
    };

    return {
      success: true,
      user: safeUser,
    };
  } catch (error) {
    console.error("Get Current User Error:", error);
    return {
      success: false,
      message: "Failed to get user",
    };
  }
};

export const updateCurrentUser = async (id, updateData) => {
  try {
    if (!id) {
      return {
        success: false,
        message: "User ID is required",
      };
    }

    const { _id, email, createdAt, ...safeUpdateData } = updateData;

    if (Object.keys(safeUpdateData).length === 0) {
      return {
        success: false,
        message: "No fields to update",
      };
    }

    const query = { _id: new ObjectId(id) };

    const update = {
      $set: {
        ...safeUpdateData,
        updatedAt: new Date().toISOString(),
      },
    };

    const result = await dbConnect(collections.USER).updateOne(query, update);

    if (result.matchedCount === 0) {
      return {
        success: false,
        message: "User not found",
      };
    }

    return {
      success: true,
      message: "User updated successfully",
      result,
    };
  } catch (error) {
    console.error("Update Current User Error:", error);
    return {
      success: false,
      message: "Failed to update user",
    };
  }
};

// My Add Caregivers
export const createMyCaregiver = async (caregiverData) => {
  try {
    const result = await dbConnect(collections.CAREGIVERS).insertOne({
      ...caregiverData,
      createdAt: new Date().toISOString(),
    });

    if (!result.insertedId) {
      return { success: false, message: "Failed to create caregiver" };
    }

    return {
      success: true,
      message: "Caregiver created successfully",
      insertedId: result.insertedId,
    };
  } catch (error) {
    console.error("Error creating caregiver:", error);
    return { success: false, message: "Failed to create caregiver" };
  }
};

export const getMyAddcaregivers = async (email) => {
  try {
    const result = await dbConnect(collections.CAREGIVERS)
      .find({ publishEmail: email })
      .toArray();

    return result.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching caregivers by email:", error);
    // Optional: throw error to be handled by caller
    throw error;
  }
};

export const updateMyCaregiver = async (id, updateData) => {
  try {
    const { _id, ...safeUpdateData } = updateData;
    const query = { _id: new ObjectId(id) };
    const update = {
      $set: {
        ...safeUpdateData,
        updatedAt: new Date().toISOString(),
      },
    };

    const result = await dbConnect(collections.CAREGIVERS).updateOne(
      query,
      update,
    );

    if (result.matchedCount === 0) {
      return { success: false, message: "Caregiver not found" };
    }

    return { success: true, message: "Caregiver updated successfully" };
  } catch (error) {
    console.error("Error updating caregiver:", error);
    return { success: false, message: "Failed to update caregiver" };
  }
};

export const deleteMyCaregiver = async (id) => {
  try {
    const query = { _id: new ObjectId(id) };
    const result = await dbConnect(collections.CAREGIVERS).deleteOne(query);

    if (result.deletedCount === 0) {
      return { success: false, message: "Caregiver not found" };
    }

    return { success: true, message: "Caregiver deleted successfully" };
  } catch (error) {
    console.error("Error deleting caregiver:", error);
    return { success: false, message: "Failed to delete caregiver" };
  }
};

// My Services Functions
export const getMyServices = async (email) => {
  try {
    const result = await dbConnect(collections.SERVICES)
      .find({ "contactInfo.email": email })
      .toArray();

    return result.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching services by email:", error);
    return [];
  }
};

export const createMyService = async (serviceData) => {
  try {
    const result = await dbConnect(collections.SERVICES).insertOne({
      ...serviceData,
      createdAt: new Date().toISOString(),
    });

    if (!result.insertedId) {
      return { success: false, message: "Failed to create service" };
    }

    return {
      success: true,
      message: "Service created successfully",
      insertedId: result.insertedId,
    };
  } catch (error) {
    console.error("Error creating service:", error);
    return { success: false, message: "Failed to create service" };
  }
};

export const updateMyService = async (id, updateData) => {
  try {
    const { _id, ...safeUpdateData } = updateData;
    const query = { _id: new ObjectId(id) };
    const update = {
      $set: {
        ...safeUpdateData,
        updatedAt: new Date().toISOString(),
      },
    };

    const result = await dbConnect(collections.SERVICES).updateOne(
      query,
      update,
    );

    if (result.matchedCount === 0) {
      return { success: false, message: "Service not found" };
    }

    return { success: true, message: "Service updated successfully" };
  } catch (error) {
    console.error("Error updating service:", error);
    return { success: false, message: "Failed to update service" };
  }
};

export const deleteMyService = async (id) => {
  try {
    const query = { _id: new ObjectId(id) };
    const result = await dbConnect(collections.SERVICES).deleteOne(query);

    if (result.deletedCount === 0) {
      return { success: false, message: "Service not found" };
    }

    return { success: true, message: "Service deleted successfully" };
  } catch (error) {
    console.error("Error deleting service:", error);
    return { success: false, message: "Failed to delete service" };
  }
};

// Contact Messaage Data
export const getMessagesData = async () => {
  try {
    const result = await dbConnect(collections.FROMDATA).find().toArray();

    return result.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching messages data:", error);
    return [];
  }
};

// Earning Chart Data Get Pipeline

export const getEarningsData = async (email) => {
  try {
    if (!email) return { error: "No email provided" };

    // 1. Get User's Services IDs (provider)
    const myServices = await dbConnect(collections.SERVICES)
      .find({ "contactInfo.email": email })
      .project({ _id: 1 })
      .toArray();
    
    const myServiceIds = myServices.map(s => s._id.toString());

    // 2. Get User's Caregivers IDs (provider)
    const myCaregivers = await dbConnect(collections.CAREGIVERS)
      .find({ publishEmail: email })
      .project({ _id: 1 })
      .toArray();
    
    const myCaregiverIds = myCaregivers.map(c => c._id.toString());

    // 3. Aggregate Service Bookings (Earnings)
    const servicePipeline = [
      { $match: { serviceId: { $in: myServiceIds } } },
      {
        $facet: {
          monthly: [
            {
              $project: {
                month: { $month: { $toDate: "$createdAt" } },
                cost: { $toDouble: "$financials.totalCost" }
              }
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: "$cost" }
              }
            }
          ],
          recent: [
            { $sort: { createdAt: -1 } },
            { $limit: 5 }
          ]
        }
      }
    ];

    const serviceResults = await dbConnect(collections.BOOKING).aggregate(servicePipeline).toArray();
    const serviceData = serviceResults[0] || { monthly: [], recent: [] };

    // 4. Aggregate Caregiver Bookings (Earnings)
    const caregiverPipeline = [
      { $match: { caregiverId: { $in: myCaregiverIds } } },
      {
        $facet: {
          monthly: [
            {
              $project: {
                month: { $month: { $toDate: "$createdAt" } },
                cost: { $toDouble: "$totalCost" }
              }
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: "$cost" }
              }
            }
          ],
          recent: [
            { $sort: { createdAt: -1 } },
            { $limit: 5 }
          ]
        }
      }
    ];

    const caregiverResults = await dbConnect(collections.BOOKINGCAREGIVERS).aggregate(caregiverPipeline).toArray();
    const caregiverData = caregiverResults[0] || { monthly: [], recent: [] };

    // Helper to format chart data
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formatChartData = (data) => {
       const map = {};
       monthNames.forEach((m, i) => map[i + 1] = 0);
       data.forEach(d => {
         if (d._id) map[d._id] = d.total;
       });
       return monthNames.map((m, i) => ({ month: m, amount: map[i + 1] }));
    };

    return {
      serviceChartData: formatChartData(serviceData.monthly),
      caregiverChartData: formatChartData(caregiverData.monthly),
      recentServices: serviceData.recent.map(item => ({ ...item, _id: item._id.toString() })),
      recentCaregivers: caregiverData.recent.map(item => ({ ...item, _id: item._id.toString() }))
    };

  } catch (error) {
    console.error("Error in getEarningsData:", error);
    return {
      serviceChartData: [],
      caregiverChartData: [],
      recentServices: [],
      recentCaregivers: []
    };
  }
};
