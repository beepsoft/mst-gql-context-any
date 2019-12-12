import { Instance } from "mobx-state-tree"
import { choices_aggregate_fieldsModelBase } from "./choices_aggregate_fieldsModel.base"

/* The TypeScript type of an instance of choices_aggregate_fieldsModel */
export interface choices_aggregate_fieldsModelType extends Instance<typeof choices_aggregate_fieldsModel.Type> {}

/* A graphql query fragment builders for choices_aggregate_fieldsModel */
export { selectFromchoices_aggregate_fields, choices_aggregate_fieldsModelPrimitives, choices_aggregate_fieldsModelSelector } from "./choices_aggregate_fieldsModel.base"

/**
 * choices_aggregate_fieldsModel
 */
export const choices_aggregate_fieldsModel = choices_aggregate_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
