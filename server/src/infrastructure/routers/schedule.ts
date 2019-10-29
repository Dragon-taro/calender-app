import { Router } from "express";
import ScheduleController from "../../controllers/schedule";
import DB from "../db/handler";

const scheduleRouter = (db: DB) => {
  const router = Router();
  const scheduleController = new ScheduleController(db);

  router.get("/", scheduleController.index);

  return router;
};

export default scheduleRouter;
