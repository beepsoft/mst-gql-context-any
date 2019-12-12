import { Instance } from "mobx-state-tree"
import { choices_aggregateModelBase } from "./choices_aggregateModel.base"

/* The TypeScript type of an instance of choices_aggregateModel */
export interface choices_aggregateModelType extends Instance<typeof choices_aggregateModel.Type> {}

/* A graphql query fragment builders for choices_aggregateModel */
export { selectFromchoices_aggregate, choices_aggregateModelPrimitives, choices_aggregateModelSelector } from "./choices_aggregateModel.base"

/**
 * choices_aggregateModel
 */
export const choices_aggregateModel = choices_aggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
