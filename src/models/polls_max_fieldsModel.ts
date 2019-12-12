import { Instance } from "mobx-state-tree"
import { polls_max_fieldsModelBase } from "./polls_max_fieldsModel.base"

/* The TypeScript type of an instance of polls_max_fieldsModel */
export interface polls_max_fieldsModelType extends Instance<typeof polls_max_fieldsModel.Type> {}

/* A graphql query fragment builders for polls_max_fieldsModel */
export { selectFrompolls_max_fields, polls_max_fieldsModelPrimitives, polls_max_fieldsModelSelector } from "./polls_max_fieldsModel.base"

/**
 * polls_max_fieldsModel
 */
export const polls_max_fieldsModel = polls_max_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
