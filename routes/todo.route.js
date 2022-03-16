import express from "express";
import { readAllTodoData, createTodoData } from "../controllers/todo.controller.js";

export const todoRouter = express.Router();

todoRouter.get("/", (req, res) => readAllTodoData(req, res));
todoRouter.post("/", (req, res) => createTodoData(req, res));