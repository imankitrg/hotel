const express = require("express");
const connectdb = require("./config/db");
const person = require("./models/person");
const menuItem = require("./models/menu");
const PERSONROUTER = require("./routes/person_routes");
const MENUROUTER = require("./routes/menu_routes");
const AUTHENTICATION = require("./routes/auth_routes");
const ORDERROUTER = require("./routes/order_routes");
const CREATEROOM = require("./routes/room_routes");
const BOOKINGROOM = require("./routes/booking_routes");

const app = express(); // Create an instance of the Express application

const cors = require("cors"); // Import the CORS middleware

require("dotenv").config(); // Load environment variables from a .env file into process.env

app.use(express.json()); // Middleware to parse incoming JSON requests

// const app = express();

app.use(cors());

// app.use(cors({
//   origin: 'https://foodbite-dusky.vercel.app',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// }));

// app.options('/*', cors());// 👈 ye preflight fix karega

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://foodbite-dusky.vercel.app"
  ]
}));
// app.use(express.json());

app.use("/person", PERSONROUTER);
app.use("/menu", MENUROUTER);
app.use("/auth", AUTHENTICATION);
app.use("/order", ORDERROUTER);
app.use("/room", CREATEROOM);
app.use("/booking", BOOKINGROOM);

app.use("/", (req, res) => {
  res.status(404).send({
    status: "not found",
    code: 404,
  });
});
connectdb();

app.listen(process.env.PORT, () => {
  console.log("listening on " + process.env.PORT);
});
