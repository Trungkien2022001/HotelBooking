import express from "express"
import { createHotel, getHotels, updateHotel, getHotel, deleteHotel, countByCity, countByType, getHotelRooms } from "../controllers/hotel.js"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

// CREATE
router.post("/", verifyAdmin, createHotel)

// UPDADE
router.put("/:id", verifyAdmin, updateHotel)

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

// GET
router.get("/find/:id", getHotel)

// GET ALL
router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)
export default router