/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { pollsModel, pollsModelType } from "./pollsModel"
import { pollsModelSelector } from "./pollsModel.base"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  returning: IObservableArray<pollsModelType>;
}

/**
 * polls_mutation_responseBase
 * auto generated base class for the model polls_mutation_responseModel.
 */
export const polls_mutation_responseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('polls_mutation_response')
  .props({
    __typename: types.optional(types.literal("polls_mutation_response"), "polls_mutation_response"),
    affected_rows: types.union(types.undefined, types.integer),
    returning: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => pollsModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class polls_mutation_responseModelSelector extends QueryBuilder {
  get affected_rows() { return this.__attr(`affected_rows`) }
  returning(builder?: string | pollsModelSelector | ((selector: pollsModelSelector) => pollsModelSelector)) { return this.__child(`returning`, pollsModelSelector, builder) }
}
export function selectFrompolls_mutation_response() {
  return new polls_mutation_responseModelSelector()
}

export const polls_mutation_responseModelPrimitives = selectFrompolls_mutation_response().affected_rows
