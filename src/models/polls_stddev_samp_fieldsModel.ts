import { Instance } from "mobx-state-tree"
import { polls_stddev_samp_fieldsModelBase } from "./polls_stddev_samp_fieldsModel.base"

/* The TypeScript type of an instance of polls_stddev_samp_fieldsModel */
export interface polls_stddev_samp_fieldsModelType extends Instance<typeof polls_stddev_samp_fieldsModel.Type> {}

/* A graphql query fragment builders for polls_stddev_samp_fieldsModel */
export { selectFrompolls_stddev_samp_fields, polls_stddev_samp_fieldsModelPrimitives, polls_stddev_samp_fieldsModelSelector } from "./polls_stddev_samp_fieldsModel.base"

/**
 * polls_stddev_samp_fieldsModel
 */
export const polls_stddev_samp_fieldsModel = polls_stddev_samp_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
