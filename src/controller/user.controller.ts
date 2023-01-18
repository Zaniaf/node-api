import { Request, Response } from 'express';
import { omit } from 'lodash';
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';
import logger from '../utils/logger';

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    // call create user service
    const user = await createUser(req.body);
    //return res.send(omit(user.toJSON(), "password"));  -> This gives an error
    return res.send(user);
  
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message); // 409 means conflict
  }
}
