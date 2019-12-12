/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { choicesModel, choicesModelType } from "./choicesModel"
import { choicesModelSelector } from "./choicesModel.base"
import { choices_aggregateModel, choices_aggregateModelType } from "./choices_aggregateModel"
import { choices_aggregateModelSelector } from "./choices_aggregateModel.base"
import { RootStoreType } from "./index"
import { pollsModel, pollsModelType } from "./pollsModel"
import { pollsModelSelector } from "./pollsModel.base"
import { polls_aggregateModel, polls_aggregateModelType } from "./polls_aggregateModel"
import { polls_aggregateModelSelector } from "./polls_aggregateModel.base"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  choices: IObservableArray<choicesModelType>;
  choices_by_pk: choicesModelType;
  polls: IObservableArray<pollsModelType>;
  polls_by_pk: pollsModelType;
}

/**
 * query_rootBase
 * auto generated base class for the model query_rootModel.
 */
export const query_rootModelBase = withTypedRefs<Refs>()(ModelBase
  .named('query_root')
  .props({
    __typename: types.optional(types.literal("query_root"), "query_root"),
    choices: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => choicesModel)))),
    choices_aggregate: types.union(types.undefined, types.late((): any => choices_aggregateModel)),
    choices_by_pk: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => choicesModel))),
    polls: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => pollsModel)))),
    polls_aggregate: types.union(types.undefined, types.late((): any => polls_aggregateModel)),
    polls_by_pk: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => pollsModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class query_rootModelSelector extends QueryBuilder {
  choices(builder?: string | choicesModelSelector | ((selector: choicesModelSelector) => choicesModelSelector)) { return this.__child(`choices`, choicesModelSelector, builder) }
  choices_aggregate(builder?: string | choices_aggregateModelSelector | ((selector: choices_aggregateModelSelector) => choices_aggregateModelSelector)) { return this.__child(`choices_aggregate`, choices_aggregateModelSelector, builder) }
  choices_by_pk(builder?: string | choicesModelSelector | ((selector: choicesModelSelector) => choicesModelSelector)) { return this.__child(`choices_by_pk`, choicesModelSelector, builder) }
  polls(builder?: string | pollsModelSelector | ((selector: pollsModelSelector) => pollsModelSelector)) { return this.__child(`polls`, pollsModelSelector, builder) }
  polls_aggregate(builder?: string | polls_aggregateModelSelector | ((selector: polls_aggregateModelSelector) => polls_aggregateModelSelector)) { return this.__child(`polls_aggregate`, polls_aggregateModelSelector, builder) }
  polls_by_pk(builder?: string | pollsModelSelector | ((selector: pollsModelSelector) => pollsModelSelector)) { return this.__child(`polls_by_pk`, pollsModelSelector, builder) }
}
export function selectFromquery_root() {
  return new query_rootModelSelector()
}

export const query_rootModelPrimitives = selectFromquery_root()
