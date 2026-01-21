// "use server";

// import { collections, dbConnect } from "@/lib/databaseConnect";
// import bcrypt from "bcryptjs";

// export const savedUserData = async (submitData) => {
//   console.log("Saaved Darta", submitData);

//   try {
//     // 1️⃣ Required field validation
//     if (!submitData?.name || !submitData?.email || !submitData?.password) {
//       return {
//         success: false,
//         message: "Name, email and password are required",
//       };
//     }

//     const userCollection = dbConnect(collections.USER);

//     // 2️⃣ Check existing user by email
//     const isExisted = await userCollection.findOne({
//       email: submitData.email,
//     });

//     if (isExisted) {
//       return {
//         success: false,
//         message: "User already exists with this email Please Login",
//       };
//     }

//     // 3️⃣ Hash password (security)
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(submitData.password, salt);

//     // 4️⃣ Prepare final user object
//     const userData = {
//       name: submitData.name,
//       email: submitData.email,
//       contact: submitData.contact || "",
//       nidNumber: submitData.nidNumber || "",
//       password: hashedPassword,
//       profileImage: submitData.profileImage || "",
//       role: submitData.role || "user",
//       createdAt: submitData.createdAt || new Date().toISOString(),
//     };

//     // 5️⃣ Save to database
//     const result = await userCollection.insertOne(userData);

//     // 6️⃣ Success response
//     return {
//       success: true,
//       message: "User registered successfully",
//       userId: result.insertedId.toString(),
//     };
//   } catch (error) {
//     console.error("Save User Error:", error);

//     return {
//       success: false,
//       message: "Something went wrong. Please try again later",
//     };
//   }
// };
