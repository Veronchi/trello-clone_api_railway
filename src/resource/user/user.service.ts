import express from 'express';
import { User } from "../common/models";
import bcrypt from "bcrypt";
import generateJwt from "../../middleware/JwtGenerator";
import ApiError from "../../error/ApiError";
import { IUser, UserInstance } from "../../interface";


async function registration(userData: IUser): Promise<string> {
  const { login, email, password, role } = userData;

  if (!login || !password || !email) {
    throw ApiError.badRequest("login, email or password not entered");
  }

  const condidateEmail = await User.findOne({ where: { email } });
  const condidateLogin = await User.findOne({ where: { login } });

  if (condidateEmail || condidateLogin) {
    throw ApiError.badRequest(
      "user with such login or email address already exists"
    );
  }

  const hashPassword = await bcrypt.hash(password, 5);
  const user: UserInstance = await User.create({
    login,
    email,
    role,
    password: hashPassword,
  });

  const token = generateJwt(user.id, user.email, user.role);

  return token;
}

async function login(userData: IUser): Promise<string> {
  const { login, password } = userData;
  const user = await User.findOne({ where: { login } });
  
  if (!user) {
    throw ApiError.badRequest("User is not found");
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    throw ApiError.badRequest("Invalid password or login");
  }

  return generateJwt(user.id, user.email, user.role);
}

async function getUser(res: express.Response): Promise<UserInstance> {
  const { UserId } = res.locals.decode;
  
  const user = await User.findOne({ 
    where: {
      id: UserId
    } 
  })

  return user as UserInstance;
}

async function check(userData: IUser): Promise<string> {
  const token = generateJwt(userData.id, userData.email, userData.role);

  return token;
}

async function update(userData: IUser): Promise<[affectedCount: number]> {
  return await User.update(userData, {
    where: {
      id: userData.id,
    },
  });
}

async function remove(userData: IUser): Promise<number> {
  return await User.destroy({
    where: {
      id: userData.id,
    },
  });
}

export { registration, login, getUser, check, update, remove };
