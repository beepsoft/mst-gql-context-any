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
import { polls_aggregate_fieldsModel, polls_aggregate_fieldsModelType } from "./polls_aggregate_fieldsModel"
import { polls_aggregate_fieldsModelSelector } from "./polls_aggregate_fieldsModel.base"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  nodes: IObservableArray<pollsModelType>;
}

/**
 * polls_aggregateBase
 * auto generated base class for the model polls_aggregateModel.
 */
export const polls_aggregateModelBase = withTypedRefs<Refs>()(ModelBase
  .named('polls_aggregate')
  .props({
    __typename: types.optional(types.literal("polls_aggregate"), "polls_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => polls_aggregate_fieldsModel)),
    nodes: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => pollsModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class polls_aggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | polls_aggregate_fieldsModelSelector | ((selector: polls_aggregate_fieldsModelSelector) => polls_aggregate_fieldsModelSelector)) { return this.__child(`aggregate`, polls_aggregate_fieldsModelSelector, builder) }
  nodes(builder?: string | pollsModelSelector | ((selector: pollsModelSelector) => pollsModelSelector)) { return this.__child(`nodes`, pollsModelSelector, builder) }
}
export function selectFrompolls_aggregate() {
  return new polls_aggregateModelSelector()
}

export const polls_aggregateModelPrimitives = selectFrompolls_aggregate()
