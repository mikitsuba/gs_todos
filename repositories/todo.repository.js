import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

export const findAll = async () => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .select()
        .order("deadline", { ascending: true })
        .order("todo", { ascending: true });
      return data;
    } catch (e) {
      throw Error("Error while getting Todo Data");
    }
  };

export const store = async ({ params }) => {
  try {
    const { data, error } = await supabase.from("todos").insert([
      {
        ...params,
        is_done: false,
      },
    ]);
    return data;
  } catch (e) {
    throw Error("Error while store Todo Data");
  }
};
