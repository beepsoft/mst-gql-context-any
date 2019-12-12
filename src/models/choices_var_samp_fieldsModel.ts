import { Instance } from "mobx-state-tree"
import { choices_var_samp_fieldsModelBase } from "./choices_var_samp_fieldsModel.base"

/* The TypeScript type of an instance of choices_var_samp_fieldsModel */
export interface choices_var_samp_fieldsModelType extends Instance<typeof choices_var_samp_fieldsModel.Type> {}

/* A graphql query fragment builders for choices_var_samp_fieldsModel */
export { selectFromchoices_var_samp_fields, choices_var_samp_fieldsModelPrimitives, choices_var_samp_fieldsModelSelector } from "./choices_var_samp_fieldsModel.base"

/**
 * choices_var_samp_fieldsModel
 */
export const choices_var_samp_fieldsModel = choices_var_samp_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
