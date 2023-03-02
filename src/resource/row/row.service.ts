import { Row } from "../common/models";
import { RowInstance, IRow } from "../../interface";
import ApiError from "../../error/ApiError";
import express, { Request } from "express";

async function createRow(rowData: IRow, res: express.Response): Promise<RowInstance> {
  const { UserId } = res.locals.decode;
  const {text, ColumnId, BoardId} = rowData;

  if (!text || !ColumnId) {
    throw ApiError.badRequest("text or columnId not entered");
  }
  
  const row = await Row.create({text, ColumnId, BoardId, UserId});

  return row;
}

async function getAllRowsByColumn(req: Request): Promise<Array<RowInstance>> {
  const { query } = req;
  const rows = await Row.findAll({ 
    where: {
      ColumnId: query.columnID as string
    } 
  })

  return rows;
}

async function getAllRowsByBoard(req: Request): Promise<Array<RowInstance>> {
  const { query } = req;
  const rows = await Row.findAll({ 
    where: {
      BoardId: query.boardId as string
    } 
  })

  return rows;
}

async function update(rowData: IRow): Promise<[affectedCount: number]> {
  return await Row.update(rowData, {
    where: {
      id: rowData.id,
    },
  });
}

async function remove(req: Request): Promise<number> {
  const {query} = req;

  return await Row.destroy({
    where: {
      id: query.id as string,
    },
  });
}

export { createRow, getAllRowsByColumn, getAllRowsByBoard, update, remove };
