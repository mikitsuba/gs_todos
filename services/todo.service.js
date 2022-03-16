import { findAll, store } from "../repositories/todo.repository.js";

export const getAllTodoData = async () => {
  try {
    return await findAll();
  } catch (e) {
    throw Error("Error while getting All Todo Data");
  }
};

export const insertTodoData = async ({ params }) => {
    try {
      return await store({ params });
    } catch (e) {
      throw Error("Error while posting Todo Data");
    }
};