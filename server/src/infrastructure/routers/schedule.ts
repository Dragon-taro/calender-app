import Router from "express-promise-router";
import ScheduleController from "../../controllers/schedule";
import DB from "../db/handler";

const scheduleRouter = (db: DB) => {
  const router = Router();
  const scheduleController = new ScheduleController(db);

  router.get("/", scheduleController.index);
  router.post("/", scheduleController.create);
  router.get("/:id", scheduleController.show);
  router.delete("/:id", scheduleController.delete);
  router.post("/create-test-data", scheduleController.createTestData);

  return router;
};

export default scheduleRouter;
