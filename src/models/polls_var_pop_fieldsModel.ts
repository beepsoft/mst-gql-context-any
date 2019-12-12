import { Instance } from "mobx-state-tree"
import { polls_var_pop_fieldsModelBase } from "./polls_var_pop_fieldsModel.base"

/* The TypeScript type of an instance of polls_var_pop_fieldsModel */
export interface polls_var_pop_fieldsModelType extends Instance<typeof polls_var_pop_fieldsModel.Type> {}

/* A graphql query fragment builders for polls_var_pop_fieldsModel */
export { selectFrompolls_var_pop_fields, polls_var_pop_fieldsModelPrimitives, polls_var_pop_fieldsModelSelector } from "./polls_var_pop_fieldsModel.base"

/**
 * polls_var_pop_fieldsModel
 */
export const polls_var_pop_fieldsModel = polls_var_pop_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
