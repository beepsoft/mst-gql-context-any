import { Instance } from "mobx-state-tree"
import { polls_avg_fieldsModelBase } from "./polls_avg_fieldsModel.base"

/* The TypeScript type of an instance of polls_avg_fieldsModel */
export interface polls_avg_fieldsModelType extends Instance<typeof polls_avg_fieldsModel.Type> {}

/* A graphql query fragment builders for polls_avg_fieldsModel */
export { selectFrompolls_avg_fields, polls_avg_fieldsModelPrimitives, polls_avg_fieldsModelSelector } from "./polls_avg_fieldsModel.base"

/**
 * polls_avg_fieldsModel
 */
export const polls_avg_fieldsModel = polls_avg_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
