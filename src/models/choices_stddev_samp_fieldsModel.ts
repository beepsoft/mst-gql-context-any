import { Instance } from "mobx-state-tree"
import { choices_stddev_samp_fieldsModelBase } from "./choices_stddev_samp_fieldsModel.base"

/* The TypeScript type of an instance of choices_stddev_samp_fieldsModel */
export interface choices_stddev_samp_fieldsModelType extends Instance<typeof choices_stddev_samp_fieldsModel.Type> {}

/* A graphql query fragment builders for choices_stddev_samp_fieldsModel */
export { selectFromchoices_stddev_samp_fields, choices_stddev_samp_fieldsModelPrimitives, choices_stddev_samp_fieldsModelSelector } from "./choices_stddev_samp_fieldsModel.base"

/**
 * choices_stddev_samp_fieldsModel
 */
export const choices_stddev_samp_fieldsModel = choices_stddev_samp_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
