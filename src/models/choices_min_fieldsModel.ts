import { Instance } from "mobx-state-tree"
import { choices_min_fieldsModelBase } from "./choices_min_fieldsModel.base"

/* The TypeScript type of an instance of choices_min_fieldsModel */
export interface choices_min_fieldsModelType extends Instance<typeof choices_min_fieldsModel.Type> {}

/* A graphql query fragment builders for choices_min_fieldsModel */
export { selectFromchoices_min_fields, choices_min_fieldsModelPrimitives, choices_min_fieldsModelSelector } from "./choices_min_fieldsModel.base"

/**
 * choices_min_fieldsModel
 */
export const choices_min_fieldsModel = choices_min_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
