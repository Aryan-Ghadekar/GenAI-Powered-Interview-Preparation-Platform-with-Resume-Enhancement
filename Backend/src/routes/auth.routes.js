const express = require('express');
const authController = require('../controllers/auth.controller');
const { authUser } = require('../middlewares/auth.middleware');

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public   
 */

authRouter.post("/register", authController.registerUserController);

/**
 * @route POST /api/auth/login
 * @description Login a user
 * @access Public   
 */

authRouter.post("/login", authController.loginUserController);

/**
 * @route POST /api/auth/logout
 * @description Logout a user - clear token from user cookie and add the token to blacklist
 * @access Public   
 */

authRouter.get("/logout", authController.logoutUserController);

/**
 * @route GET /api/auth/get-me
 * @description Get the current logged in user details
 * @access Private
 */


authRouter.get("/get-me", authUser, authController.getMeController);

module.exports = authRouter;