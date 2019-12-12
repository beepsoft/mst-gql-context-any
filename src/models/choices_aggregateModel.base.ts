/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { choicesModel, choicesModelType } from "./choicesModel"
import { choicesModelSelector } from "./choicesModel.base"
import { choices_aggregate_fieldsModel, choices_aggregate_fieldsModelType } from "./choices_aggregate_fieldsModel"
import { choices_aggregate_fieldsModelSelector } from "./choices_aggregate_fieldsModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  nodes: IObservableArray<choicesModelType>;
}

/**
 * choices_aggregateBase
 * auto generated base class for the model choices_aggregateModel.
 */
export const choices_aggregateModelBase = withTypedRefs<Refs>()(ModelBase
  .named('choices_aggregate')
  .props({
    __typename: types.optional(types.literal("choices_aggregate"), "choices_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => choices_aggregate_fieldsModel)),
    nodes: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => choicesModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class choices_aggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | choices_aggregate_fieldsModelSelector | ((selector: choices_aggregate_fieldsModelSelector) => choices_aggregate_fieldsModelSelector)) { return this.__child(`aggregate`, choices_aggregate_fieldsModelSelector, builder) }
  nodes(builder?: string | choicesModelSelector | ((selector: choicesModelSelector) => choicesModelSelector)) { return this.__child(`nodes`, choicesModelSelector, builder) }
}
export function selectFromchoices_aggregate() {
  return new choices_aggregateModelSelector()
}

export const choices_aggregateModelPrimitives = selectFromchoices_aggregate()
