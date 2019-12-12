/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * polls_min_fieldsBase
 * auto generated base class for the model polls_min_fieldsModel.
 */
export const polls_min_fieldsModelBase = ModelBase
  .named('polls_min_fields')
  .props({
    __typename: types.optional(types.literal("polls_min_fields"), "polls_min_fields"),
    created_by: types.union(types.undefined, types.null, types.frozen()),
    foo: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.frozen()),
    ize: types.union(types.undefined, types.null, types.string),
    question: types.union(types.undefined, types.null, types.string),
    updated_by: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class polls_min_fieldsModelSelector extends QueryBuilder {
  get created_by() { return this.__attr(`created_by`) }
  get foo() { return this.__attr(`foo`) }
  get id() { return this.__attr(`id`) }
  get ize() { return this.__attr(`ize`) }
  get question() { return this.__attr(`question`) }
  get updated_by() { return this.__attr(`updated_by`) }
}
export function selectFrompolls_min_fields() {
  return new polls_min_fieldsModelSelector()
}

export const polls_min_fieldsModelPrimitives = selectFrompolls_min_fields().created_by.foo.ize.question.updated_by
