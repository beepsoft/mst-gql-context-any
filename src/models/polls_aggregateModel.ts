import { Instance } from "mobx-state-tree"
import { polls_aggregateModelBase } from "./polls_aggregateModel.base"

/* The TypeScript type of an instance of polls_aggregateModel */
export interface polls_aggregateModelType extends Instance<typeof polls_aggregateModel.Type> {}

/* A graphql query fragment builders for polls_aggregateModel */
export { selectFrompolls_aggregate, polls_aggregateModelPrimitives, polls_aggregateModelSelector } from "./polls_aggregateModel.base"

/**
 * polls_aggregateModel
 */
export const polls_aggregateModel = polls_aggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
