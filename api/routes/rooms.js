import express from "express";
import { createRoom, getRooms, updateRoom, getRoom, deleteRoom, updateRoomAvailability } from "../controllers/Room.js";
import Room from "../models/Room.js"
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/:hotelid", verifyAdmin,  createRoom)

// UPDADE
router.put("/:id", verifyAdmin,  updateRoom)
router.put("/availability/:id", updateRoomAvailability)

// DELETE
router.delete("/:id/:hotelid", verifyAdmin,  deleteRoom)

// GET
router.get("/:id", getRoom)

// GET ALL
router.get("/", getRooms)
export default router