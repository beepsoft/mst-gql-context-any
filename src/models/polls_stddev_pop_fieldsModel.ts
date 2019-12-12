import { Instance } from "mobx-state-tree"
import { polls_stddev_pop_fieldsModelBase } from "./polls_stddev_pop_fieldsModel.base"

/* The TypeScript type of an instance of polls_stddev_pop_fieldsModel */
export interface polls_stddev_pop_fieldsModelType extends Instance<typeof polls_stddev_pop_fieldsModel.Type> {}

/* A graphql query fragment builders for polls_stddev_pop_fieldsModel */
export { selectFrompolls_stddev_pop_fields, polls_stddev_pop_fieldsModelPrimitives, polls_stddev_pop_fieldsModelSelector } from "./polls_stddev_pop_fieldsModel.base"

/**
 * polls_stddev_pop_fieldsModel
 */
export const polls_stddev_pop_fieldsModel = polls_stddev_pop_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
