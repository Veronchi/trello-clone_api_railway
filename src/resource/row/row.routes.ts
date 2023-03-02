import Express from "express";
import * as RowService from "./row.service";
import authMiddleware from "../../middleware/authMiddleware";

const router = Express.Router();

router.post("/createRow", authMiddleware, async (req, res, next) => {
  try {
    const result = await RowService.createRow(req.body, res);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/rows", authMiddleware, async (req, res, next) => {
  try {
    const data = await RowService.getAllRowsByColumn(req);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/rowsByBoardId", authMiddleware, async (req, res, next) => {
  try {
    const data = await RowService.getAllRowsByBoard(req);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/", authMiddleware, async (req, res, next) => {
  try {
    const updColumn = await RowService.update(req.body);
    res.json(updColumn);
  } catch (error) {
    next(error);
  }
});

router.delete("/", authMiddleware, async (req, res, next) => {
  try {
    const column = await RowService.remove(req);
    res.json(column);
  } catch (error) {
    next(error);
  }
});

export default router;
