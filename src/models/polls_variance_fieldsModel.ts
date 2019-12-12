import { Instance } from "mobx-state-tree"
import { polls_variance_fieldsModelBase } from "./polls_variance_fieldsModel.base"

/* The TypeScript type of an instance of polls_variance_fieldsModel */
export interface polls_variance_fieldsModelType extends Instance<typeof polls_variance_fieldsModel.Type> {}

/* A graphql query fragment builders for polls_variance_fieldsModel */
export { selectFrompolls_variance_fields, polls_variance_fieldsModelPrimitives, polls_variance_fieldsModelSelector } from "./polls_variance_fieldsModel.base"

/**
 * polls_variance_fieldsModel
 */
export const polls_variance_fieldsModel = polls_variance_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
