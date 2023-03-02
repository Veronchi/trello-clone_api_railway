import express from "express";
import cors from "cors";
import sequelize from "./db";
import path from "node:path";
import errorHadler from './middleware/ErrorHandlingMiddleware';
import userRoute from "./resource/user/user.routes";
import boardRoute from "./resource/board/board.routes";
import columnRoute from "./resource/column/column.routes";
import rowRoute from "./resource/row/row.routes";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use('/api/user', userRoute);
app.use('/api/board', boardRoute);
app.use('/api/column', columnRoute);
app.use('/api/row', rowRoute);

app.use(errorHadler);

sequelize
  .sync()
  .then((data) => {
    // sequelize.drop().then((data) => {
    //     console.log("Done");
    // })
    app.listen(port, () => {
      console.log(`server started on port ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
