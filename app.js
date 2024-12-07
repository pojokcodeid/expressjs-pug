import express from "express";
import path from "path";
import session from "express-session";
import { fileURLToPath } from "url";
import userRoutes from "./src/routes/userRoutes.js";
import connectDB from "./src/database/connection.js";
import { flash } from "./src/middleware/flash.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB(); // Menghubungkan ke MongoDB

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/views"));

// Middleware untuk melayani file statis dari folder public
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Konfigurasi session
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware untuk flash messages
app.use(flash);

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
