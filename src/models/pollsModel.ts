import { Instance } from "mobx-state-tree"
import { pollsModelBase } from "./pollsModel.base"

/* The TypeScript type of an instance of pollsModel */
export interface pollsModelType extends Instance<typeof pollsModel.Type> {}

/* A graphql query fragment builders for pollsModel */
export { selectFrompolls, pollsModelPrimitives, pollsModelSelector } from "./pollsModel.base"

/**
 * pollsModel
 */
export const pollsModel = pollsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
