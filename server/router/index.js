// import router from express
const Router = require("express");
const userController = require("../controllers/user-controller");
// router example
const router = new Router();

// model ->  endpoint + fun

// all routers
router.post("/registration", userController.registration);
router.post("/login", userController.login);
// refresh token if token is dead
router.get("/refresh", userController.refresh);
// test endpoint
router.get("/users", userController.getUsers);

module.exports = router;
