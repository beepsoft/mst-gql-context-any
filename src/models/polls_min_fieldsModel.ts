import { Instance } from "mobx-state-tree"
import { polls_min_fieldsModelBase } from "./polls_min_fieldsModel.base"

/* The TypeScript type of an instance of polls_min_fieldsModel */
export interface polls_min_fieldsModelType extends Instance<typeof polls_min_fieldsModel.Type> {}

/* A graphql query fragment builders for polls_min_fieldsModel */
export { selectFrompolls_min_fields, polls_min_fieldsModelPrimitives, polls_min_fieldsModelSelector } from "./polls_min_fieldsModel.base"

/**
 * polls_min_fieldsModel
 */
export const polls_min_fieldsModel = polls_min_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
