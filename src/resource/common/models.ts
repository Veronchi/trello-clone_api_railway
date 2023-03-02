import { DataTypes } from 'sequelize';
import { BoardInstance, ColumnInstance, RowInstance, UserInstance } from '../../interface';
import sequelize from "../../db";

const User = sequelize.define<UserInstance>("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue: "",
    allowNull: true,
  },
});

User.prototype.toJSON =  function (): UserInstance {
  const values = Object.assign({}, this.get());

  delete values.password;
  return values;
}

const Board = sequelize.define<BoardInstance>("Board", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  background: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

const Column = sequelize.define<ColumnInstance>("Column", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: false,
  }
});

const Row = sequelize.define<RowInstance>("Row", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  cover: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  opacity: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true,
    unique: false,
  }
});

User.hasMany(Board, {
  onDelete: 'CASCADE'
});
Board.belongsTo(User);

User.hasMany(Column);
Column.belongsTo(User);

User.hasMany(Row);
Row.belongsTo(User);

Board.hasMany(Column, {
  onDelete: 'CASCADE'
});
Column.belongsTo(Board);

Board.hasMany(Row);
Row.belongsTo(Board)

Column.hasMany(Row, {
  onDelete: 'CASCADE'
});
Row.belongsTo(Column);

export { User, Board, Column, Row };
