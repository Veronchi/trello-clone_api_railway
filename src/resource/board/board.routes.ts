import Express from "express";
import authMiddleware from "../../middleware/authMiddleware";
import * as boardService from "./board.service";

const router = Express.Router();

router.post("/createBoard", authMiddleware, async (req, res, next) => {
  try {
    const result = await boardService.createBoard(req.body, res);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/boards", authMiddleware, async (req, res, next) => {
  try {
    res.json(await boardService.getAllBoards(res));
  } catch (error) {
    next(error);
  }
});

router.put("/", authMiddleware, async (req, res, next) => {
  try {
    const updBoard = await boardService.update(req.body);
    res.json(updBoard);
  } catch (error) {
    next(error);
  }
});

router.delete("/", authMiddleware, async (req, res, next) => {
  try {
    const board = await boardService.remove(req);
    res.json(board);
  } catch (error) {
    next(error);
  }
});

export default router;
