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


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  choices: IObservableArray<choicesModelType>;
}

/**
 * pollsBase
 * auto generated base class for the model pollsModel.
 */
export const pollsModelBase = withTypedRefs<Refs>()(ModelBase
  .named('polls')
  .props({
    __typename: types.optional(types.literal("polls"), "polls"),
    choices: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => choicesModel)))),
    choices_aggregate: types.union(types.undefined, types.late((): any => choices_aggregateModel)),
    created_at: types.union(types.undefined, types.null, types.frozen()),
    created_by: types.union(types.undefined, types.null, types.frozen()),
    expiration_date_time: types.union(types.undefined, types.frozen()),
    foo: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    ize: types.union(types.undefined, types.null, types.string),
    question: types.union(types.undefined, types.null, types.string),
    updated_at: types.union(types.undefined, types.null, types.frozen()),
    updated_by: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class pollsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get created_by() { return this.__attr(`created_by`) }
  get expiration_date_time() { return this.__attr(`expiration_date_time`) }
  get foo() { return this.__attr(`foo`) }
  get id() { return this.__attr(`id`) }
  get ize() { return this.__attr(`ize`) }
  get question() { return this.__attr(`question`) }
  get updated_at() { return this.__attr(`updated_at`) }
  get updated_by() { return this.__attr(`updated_by`) }
  choices(builder?: string | choicesModelSelector | ((selector: choicesModelSelector) => choicesModelSelector)) { return this.__child(`choices`, choicesModelSelector, builder) }
  choices_aggregate(builder?: string | choices_aggregateModelSelector | ((selector: choices_aggregateModelSelector) => choices_aggregateModelSelector)) { return this.__child(`choices_aggregate`, choices_aggregateModelSelector, builder) }
}
export function selectFrompolls() {
  return new pollsModelSelector()
}

export const pollsModelPrimitives = selectFrompolls().created_at.created_by.expiration_date_time.foo.ize.question.updated_at.updated_by
