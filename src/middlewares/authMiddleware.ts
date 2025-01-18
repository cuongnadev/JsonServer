import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (token === "Bearer my-secret-token") {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};
