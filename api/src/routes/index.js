import express from "express";
import productsRouter from "./products.js";
import usersRouter from "./users.js";

const router = express.Router();

router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.get("/", (req, res) => res.end("Hello World!"));

export default router;
