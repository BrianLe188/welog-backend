import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { validateRequest } from "../../shared/validates";
import { registerAndLoginSchema } from "../../shared/validates/AuthValidate";

const router = Router();
const authController = new AuthController();

router.get(
    "/login",
    validateRequest(registerAndLoginSchema, "query"),
    authController.login,
);
router.post(
    "/register",
    validateRequest(registerAndLoginSchema, "body"),
    authController.register,
);

export default router;
