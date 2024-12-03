const express = require("express");
const {
  createCar,
  getAllCars,
  getCarByID,
  deleteCar,
} = require("../controllers/carController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getAllCars);
router.get("/:id", async (req, res) => {});
router.post("/", authMiddleware, createCar);
router.delete("/:id", authMiddleware, deleteCar);

module.exports = router;
