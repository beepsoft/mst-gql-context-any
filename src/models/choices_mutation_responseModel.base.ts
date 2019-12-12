/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { choicesModel, choicesModelType } from "./choicesModel"
import { choicesModelSelector } from "./choicesModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  returning: IObservableArray<choicesModelType>;
}

/**
 * choices_mutation_responseBase
 * auto generated base class for the model choices_mutation_responseModel.
 */
export const choices_mutation_responseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('choices_mutation_response')
  .props({
    __typename: types.optional(types.literal("choices_mutation_response"), "choices_mutation_response"),
    affected_rows: types.union(types.undefined, types.integer),
    returning: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => choicesModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class choices_mutation_responseModelSelector extends QueryBuilder {
  get affected_rows() { return this.__attr(`affected_rows`) }
  returning(builder?: string | choicesModelSelector | ((selector: choicesModelSelector) => choicesModelSelector)) { return this.__child(`returning`, choicesModelSelector, builder) }
}
export function selectFromchoices_mutation_response() {
  return new choices_mutation_responseModelSelector()
}

export const choices_mutation_responseModelPrimitives = selectFromchoices_mutation_response().affected_rows
