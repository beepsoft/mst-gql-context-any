import { Instance } from "mobx-state-tree"
import { choices_mutation_responseModelBase } from "./choices_mutation_responseModel.base"

/* The TypeScript type of an instance of choices_mutation_responseModel */
export interface choices_mutation_responseModelType extends Instance<typeof choices_mutation_responseModel.Type> {}

/* A graphql query fragment builders for choices_mutation_responseModel */
export { selectFromchoices_mutation_response, choices_mutation_responseModelPrimitives, choices_mutation_responseModelSelector } from "./choices_mutation_responseModel.base"

/**
 * choices_mutation_responseModel
 */
export const choices_mutation_responseModel = choices_mutation_responseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
