"use server";
import axios from "axios";

const image_hosting_key = "a6c948ab64f7987bbf9e5477cde3a1cb";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const { data } = await axios.post(image_hosting_api, formData);

  return data.data.display_url;
};
