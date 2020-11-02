import { Todo } from "@shellfish/models"

import { thunkFactory } from "../utils/thunk-factory"

export const todoThunks = {
  ...thunkFactory<Todo>("/todos"),
}
