import formidable from "formidable";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(400).json({ message: "Method not allowed" });
    return;
  }
  const form = request.body;
  console.log(request.body);

  // const file = files.file[0];
  // const { newFilename, filepath } = file;

  // now we have the information about the image, we can send it to cloudinary

  // const result = await cloudinary.v2.uploader.destroy();

  // response.status(200).json(result.secure_url);
  response.status(200).json();
}
