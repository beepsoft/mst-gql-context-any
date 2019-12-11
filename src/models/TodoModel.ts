import { Instance } from "mobx-state-tree"
import { TodoModelBase } from "./TodoModel.base"

/* The TypeScript type of an instance of TodoModel */
export interface TodoModelType extends Instance<typeof TodoModel.Type> {}

/* A graphql query fragment builders for TodoModel */
export { selectFromTodo, todoModelPrimitives, TodoModelSelector } from "./TodoModel.base"

/**
 * TodoModel
 */
export const TodoModel = TodoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
