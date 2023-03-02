import Express from "express";
import * as columnService from "./column.service";
import authMiddleware from "../../middleware/authMiddleware";

const router = Express.Router();

router.post("/createColumn", authMiddleware, async (req, res, next) => {
  try {
    const result = await columnService.createColumn(req.body, res);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/columns",  authMiddleware, async (req, res, next) => {
  try {
    const data = await columnService.getAllColumns(req);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/",  authMiddleware, async (req, res, next) => {
  try {
    const updColumn = await columnService.update(req.body);
    res.json(updColumn);
  } catch (error) {
    next(error);
  }
});

router.delete("/",  authMiddleware, async (req, res, next) => {
  try {
    const column = await columnService.remove(req);
    res.json(column);
  } catch (error) {
    next(error);
  }
});

export default router;
