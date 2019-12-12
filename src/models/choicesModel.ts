import { Instance } from "mobx-state-tree"
import { choicesModelBase } from "./choicesModel.base"

/* The TypeScript type of an instance of choicesModel */
export interface choicesModelType extends Instance<typeof choicesModel.Type> {}

/* A graphql query fragment builders for choicesModel */
export { selectFromchoices, choicesModelPrimitives, choicesModelSelector } from "./choicesModel.base"

/**
 * choicesModel
 */
export const choicesModel = choicesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
