import { Instance } from "mobx-state-tree"
import { choices_avg_fieldsModelBase } from "./choices_avg_fieldsModel.base"

/* The TypeScript type of an instance of choices_avg_fieldsModel */
export interface choices_avg_fieldsModelType extends Instance<typeof choices_avg_fieldsModel.Type> {}

/* A graphql query fragment builders for choices_avg_fieldsModel */
export { selectFromchoices_avg_fields, choices_avg_fieldsModelPrimitives, choices_avg_fieldsModelSelector } from "./choices_avg_fieldsModel.base"

/**
 * choices_avg_fieldsModel
 */
export const choices_avg_fieldsModel = choices_avg_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
