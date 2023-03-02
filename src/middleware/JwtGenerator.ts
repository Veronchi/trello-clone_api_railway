import Jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

function generateJwt(UserId: number, email: string, role: string): string {
  return Jwt.sign({ UserId, email, role }, process.env.JWTSALT, {
    expiresIn: "12h",
  });
}

export default generateJwt;
