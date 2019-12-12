import { Instance } from "mobx-state-tree"
import { choices_variance_fieldsModelBase } from "./choices_variance_fieldsModel.base"

/* The TypeScript type of an instance of choices_variance_fieldsModel */
export interface choices_variance_fieldsModelType extends Instance<typeof choices_variance_fieldsModel.Type> {}

/* A graphql query fragment builders for choices_variance_fieldsModel */
export { selectFromchoices_variance_fields, choices_variance_fieldsModelPrimitives, choices_variance_fieldsModelSelector } from "./choices_variance_fieldsModel.base"

/**
 * choices_variance_fieldsModel
 */
export const choices_variance_fieldsModel = choices_variance_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
