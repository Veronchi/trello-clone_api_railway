import Jwt from "jsonwebtoken";

function generateJwt(UserId: number, email: string, role: string): string {
  return Jwt.sign({ UserId, email, role }, "random_secret_key6", {
    expiresIn: "12h",
  });
}

export default generateJwt;
