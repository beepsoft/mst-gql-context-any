import { Instance } from "mobx-state-tree"
import { choices_max_fieldsModelBase } from "./choices_max_fieldsModel.base"

/* The TypeScript type of an instance of choices_max_fieldsModel */
export interface choices_max_fieldsModelType extends Instance<typeof choices_max_fieldsModel.Type> {}

/* A graphql query fragment builders for choices_max_fieldsModel */
export { selectFromchoices_max_fields, choices_max_fieldsModelPrimitives, choices_max_fieldsModelSelector } from "./choices_max_fieldsModel.base"

/**
 * choices_max_fieldsModel
 */
export const choices_max_fieldsModel = choices_max_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
