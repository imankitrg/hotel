const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "doyf9cqxa",
  api_key: "827758134427451",
  api_secret: "CS4TbXPqdInF1R1LhIGbQVsDbxo",
});

// console.log("CLOUD:", process.env.CLOUD_NAME);
// console.log("KEY:", process.env.CLOUDINARY_API_KEY);
// console.log("SECRET:", process.env.CLOUDINARY_API_SECRET);

module.exports = cloudinary;