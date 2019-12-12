import { Instance } from "mobx-state-tree"
import { polls_mutation_responseModelBase } from "./polls_mutation_responseModel.base"

/* The TypeScript type of an instance of polls_mutation_responseModel */
export interface polls_mutation_responseModelType extends Instance<typeof polls_mutation_responseModel.Type> {}

/* A graphql query fragment builders for polls_mutation_responseModel */
export { selectFrompolls_mutation_response, polls_mutation_responseModelPrimitives, polls_mutation_responseModelSelector } from "./polls_mutation_responseModel.base"

/**
 * polls_mutation_responseModel
 */
export const polls_mutation_responseModel = polls_mutation_responseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
