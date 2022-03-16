import express from "express";
import { readAllTodoData, readTodayTodoData, createTodoData } from "../controllers/todo.controller.js";

export const todoRouter = express.Router();

// get all todo data
todoRouter.get("/", (req, res) => readAllTodoData(req, res));
// get todos with deadlines of the date on or before today
todoRouter.get("/today", (req, res) => readTodayTodoData(req, res));
// create a new todo
todoRouter.post("/", (req, res) => createTodoData(req, res));