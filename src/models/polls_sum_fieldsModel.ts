import { Instance } from "mobx-state-tree"
import { polls_sum_fieldsModelBase } from "./polls_sum_fieldsModel.base"

/* The TypeScript type of an instance of polls_sum_fieldsModel */
export interface polls_sum_fieldsModelType extends Instance<typeof polls_sum_fieldsModel.Type> {}

/* A graphql query fragment builders for polls_sum_fieldsModel */
export { selectFrompolls_sum_fields, polls_sum_fieldsModelPrimitives, polls_sum_fieldsModelSelector } from "./polls_sum_fieldsModel.base"

/**
 * polls_sum_fieldsModel
 */
export const polls_sum_fieldsModel = polls_sum_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
