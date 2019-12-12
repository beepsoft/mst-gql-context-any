import { Instance } from "mobx-state-tree"
import { choices_sum_fieldsModelBase } from "./choices_sum_fieldsModel.base"

/* The TypeScript type of an instance of choices_sum_fieldsModel */
export interface choices_sum_fieldsModelType extends Instance<typeof choices_sum_fieldsModel.Type> {}

/* A graphql query fragment builders for choices_sum_fieldsModel */
export { selectFromchoices_sum_fields, choices_sum_fieldsModelPrimitives, choices_sum_fieldsModelSelector } from "./choices_sum_fieldsModel.base"

/**
 * choices_sum_fieldsModel
 */
export const choices_sum_fieldsModel = choices_sum_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
