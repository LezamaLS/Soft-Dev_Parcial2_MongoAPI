const express = require("express")
const router = express.Router()
const tareaController = require("../controllers/tarea-controller")

router.post("/", tareaController.createTarea)
router.put("/:id", tareaController.updateTarea)
router.delete("/:id", tareaController.deleteTarea)
router.get("/", tareaController.findAllTareas)

module.exports = router