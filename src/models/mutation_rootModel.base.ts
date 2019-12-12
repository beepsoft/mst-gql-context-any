/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { choices_mutation_responseModel, choices_mutation_responseModelType } from "./choices_mutation_responseModel"
import { choices_mutation_responseModelSelector } from "./choices_mutation_responseModel.base"
import { RootStoreType } from "./index"
import { polls_mutation_responseModel, polls_mutation_responseModelType } from "./polls_mutation_responseModel"
import { polls_mutation_responseModelSelector } from "./polls_mutation_responseModel.base"


/**
 * mutation_rootBase
 * auto generated base class for the model mutation_rootModel.
 */
export const mutation_rootModelBase = ModelBase
  .named('mutation_root')
  .props({
    __typename: types.optional(types.literal("mutation_root"), "mutation_root"),
    delete_choices: types.union(types.undefined, types.null, types.late((): any => choices_mutation_responseModel)),
    delete_polls: types.union(types.undefined, types.null, types.late((): any => polls_mutation_responseModel)),
    insert_choices: types.union(types.undefined, types.null, types.late((): any => choices_mutation_responseModel)),
    insert_polls: types.union(types.undefined, types.null, types.late((): any => polls_mutation_responseModel)),
    update_choices: types.union(types.undefined, types.null, types.late((): any => choices_mutation_responseModel)),
    update_polls: types.union(types.undefined, types.null, types.late((): any => polls_mutation_responseModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class mutation_rootModelSelector extends QueryBuilder {
  delete_choices(builder?: string | choices_mutation_responseModelSelector | ((selector: choices_mutation_responseModelSelector) => choices_mutation_responseModelSelector)) { return this.__child(`delete_choices`, choices_mutation_responseModelSelector, builder) }
  delete_polls(builder?: string | polls_mutation_responseModelSelector | ((selector: polls_mutation_responseModelSelector) => polls_mutation_responseModelSelector)) { return this.__child(`delete_polls`, polls_mutation_responseModelSelector, builder) }
  insert_choices(builder?: string | choices_mutation_responseModelSelector | ((selector: choices_mutation_responseModelSelector) => choices_mutation_responseModelSelector)) { return this.__child(`insert_choices`, choices_mutation_responseModelSelector, builder) }
  insert_polls(builder?: string | polls_mutation_responseModelSelector | ((selector: polls_mutation_responseModelSelector) => polls_mutation_responseModelSelector)) { return this.__child(`insert_polls`, polls_mutation_responseModelSelector, builder) }
  update_choices(builder?: string | choices_mutation_responseModelSelector | ((selector: choices_mutation_responseModelSelector) => choices_mutation_responseModelSelector)) { return this.__child(`update_choices`, choices_mutation_responseModelSelector, builder) }
  update_polls(builder?: string | polls_mutation_responseModelSelector | ((selector: polls_mutation_responseModelSelector) => polls_mutation_responseModelSelector)) { return this.__child(`update_polls`, polls_mutation_responseModelSelector, builder) }
}
export function selectFrommutation_root() {
  return new mutation_rootModelSelector()
}

export const mutation_rootModelPrimitives = selectFrommutation_root()
