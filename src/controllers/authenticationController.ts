import express from 'express';
import { UserModel } from '../models/userModel';

const authenticationController = {
  register: async (req: express.Request, res: express.Response) => {
    const { email, password, firstname, lastname } = req.body;
    if (!email || !password || !lastname || !firstname)
      return res.status(400).json({
        sucess: false,
        mes: 'Missing inputs',
      });

    const user = await UserModel.findOne({ email });
    if (user) throw new Error('User has existed');
    else {
      const newUser = await UserModel.create(req.body);
      return res.status(200).json({
        sucess: newUser ? true : false,
        mes: newUser ? 'Register is successfully. Please go login~' : 'Something went wrong',
      });
    }
  },
};
export default authenticationController;
