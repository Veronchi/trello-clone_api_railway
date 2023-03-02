import { Model, Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  login: string;
  password: string;
  email: string;
  role: string;
  avatar?: string;
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
  UserAttributes {
      createdAt?: Date;
      updatedAt?: Date;
  }

export interface IUser {
  id: number;
  login: string;
  email: string;
  password: string;
  role: string;
  avatar?: string;
}

export interface IUserId {
  userID: string
}

interface BoardAttributes {
  id: number;
  title: string;
  background: string;
  UserId?: string;
}

type BoardCreationAttributes = Optional<BoardAttributes, 'id'>

export interface BoardInstance 
  extends Model<BoardAttributes, BoardCreationAttributes>, 
  UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IBoard {
  id: number;
  title: string;
  background: string;
  UserId: string;
}

export interface IBoardId {
   boardID: string
}

interface ColumnAttributes {
  id: number;
  title: string;
  order?: number;
  BoardId?: string;
  UserId?: string;
}

type ColumnCreationAttributes = Optional<ColumnAttributes, 'id'>

export interface ColumnInstance 
  extends Model<ColumnAttributes, ColumnCreationAttributes>, 
  UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IColumn {
  id: number;
  title: string;
  order?: number;
  BoardId: string;
}

interface RowAttributes {
  id: number;
  text: string;
  cover?: string;
  opacity?: boolean
  ColumnId?: string;
  BoardId?: string;
  UserId?: string;
}

type RowCreationAttributes = Optional<RowAttributes, 'id'>

export interface RowInstance 
  extends Model<RowAttributes, RowCreationAttributes>, 
  UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IRow {
  id: number;
  text: string;
  cover?: string;
  opacity?: boolean
  ColumnId: string;
  BoardId: string;
}

export interface IColumnId {
  data: {
   columnID: string 
  }
}