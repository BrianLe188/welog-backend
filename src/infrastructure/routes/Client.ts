import { Router } from "express";
import authRoute from "./AuthRoute";
import todoRoute from "./TodoRoute";
import timelineRoute from "./TimelineRoute";

const router = Router();

router.use("/auth", authRoute);
router.use("/todos", todoRoute);
router.use("/timelines", timelineRoute);

export default router;
