/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * polls_sum_fieldsBase
 * auto generated base class for the model polls_sum_fieldsModel.
 */
export const polls_sum_fieldsModelBase = ModelBase
  .named('polls_sum_fields')
  .props({
    __typename: types.optional(types.literal("polls_sum_fields"), "polls_sum_fields"),
    created_by: types.union(types.undefined, types.null, types.frozen()),
    id: types.union(types.undefined, types.null, types.frozen()),
    updated_by: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class polls_sum_fieldsModelSelector extends QueryBuilder {
  get created_by() { return this.__attr(`created_by`) }
  get id() { return this.__attr(`id`) }
  get updated_by() { return this.__attr(`updated_by`) }
}
export function selectFrompolls_sum_fields() {
  return new polls_sum_fieldsModelSelector()
}

export const polls_sum_fieldsModelPrimitives = selectFrompolls_sum_fields().created_by.updated_by
