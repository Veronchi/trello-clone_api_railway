import { JwtPayload } from "jsonwebtoken"
import { Board, User } from "../resource/common/models"

declare global{
    namespace Express {
        interface Request {
            locals: {
                user: typeof User | JwtPayload;
                board: typeof Board | JwtPayload;
                decode: JwtPayload;
            }
        }
    }
}

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PGDATABASE: string;
        PGUSER: string;
        PGPASSWORD: string;
        PGHOST: string;
        PGPORT: number;
        JWTSALT: string;
      }
    }
  }