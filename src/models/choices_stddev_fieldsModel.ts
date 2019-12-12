import { Instance } from "mobx-state-tree"
import { choices_stddev_fieldsModelBase } from "./choices_stddev_fieldsModel.base"

/* The TypeScript type of an instance of choices_stddev_fieldsModel */
export interface choices_stddev_fieldsModelType extends Instance<typeof choices_stddev_fieldsModel.Type> {}

/* A graphql query fragment builders for choices_stddev_fieldsModel */
export { selectFromchoices_stddev_fields, choices_stddev_fieldsModelPrimitives, choices_stddev_fieldsModelSelector } from "./choices_stddev_fieldsModel.base"

/**
 * choices_stddev_fieldsModel
 */
export const choices_stddev_fieldsModel = choices_stddev_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
