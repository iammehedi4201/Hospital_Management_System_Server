import { NextFunction, Request, RequestHandler, Response } from 'express';

const CatchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

export default CatchAsync;

/**
 * catchAsync(async (req,res,next)=>{
 *     console.log("Hello There It's Mehedi Hasan")
 * })
 * -----------------------------------
 * CatchAsync=(async (req,res,next)=>{
 *     console.log("Hello There It's Mehedi Hasan")
 * })=>{
 *  return async (req,res,next)=>{
 *    Promise.resolve(
 *           async (req,res,next)=>{
 *           console.log("Hello There It's Mehedi Hasan")
 *                                  }
 * ).catch((err) => next(err));
 *
 * }
 * }
 */
