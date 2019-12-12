import { Instance } from "mobx-state-tree"
import { polls_stddev_fieldsModelBase } from "./polls_stddev_fieldsModel.base"

/* The TypeScript type of an instance of polls_stddev_fieldsModel */
export interface polls_stddev_fieldsModelType extends Instance<typeof polls_stddev_fieldsModel.Type> {}

/* A graphql query fragment builders for polls_stddev_fieldsModel */
export { selectFrompolls_stddev_fields, polls_stddev_fieldsModelPrimitives, polls_stddev_fieldsModelSelector } from "./polls_stddev_fieldsModel.base"

/**
 * polls_stddev_fieldsModel
 */
export const polls_stddev_fieldsModel = polls_stddev_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
