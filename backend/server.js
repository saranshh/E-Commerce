require("dotenv").config();
const app = require("./app");
const cloudinary = require("cloudinary");
const { path } = require("./app");
const connectDatabase = require("./config/database")

//Handling Uncaught Error
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
})

//Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
// }

//Connecting to database
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`) 
})

//Unhandled Promise Rejection
process.on("unhandledRejection", err=> {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);

    server.close(()=> {
        process.exit(1);
    });
})