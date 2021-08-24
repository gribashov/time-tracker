const router = require("express").Router();

const userController = require("../controllers/userController");

router.post("/registration", userController.registration);

router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);

module.exports = router;
