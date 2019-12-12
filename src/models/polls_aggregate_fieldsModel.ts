import { Instance } from "mobx-state-tree"
import { polls_aggregate_fieldsModelBase } from "./polls_aggregate_fieldsModel.base"

/* The TypeScript type of an instance of polls_aggregate_fieldsModel */
export interface polls_aggregate_fieldsModelType extends Instance<typeof polls_aggregate_fieldsModel.Type> {}

/* A graphql query fragment builders for polls_aggregate_fieldsModel */
export { selectFrompolls_aggregate_fields, polls_aggregate_fieldsModelPrimitives, polls_aggregate_fieldsModelSelector } from "./polls_aggregate_fieldsModel.base"

/**
 * polls_aggregate_fieldsModel
 */
export const polls_aggregate_fieldsModel = polls_aggregate_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
