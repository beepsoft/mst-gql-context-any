/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * choices_sum_fieldsBase
 * auto generated base class for the model choices_sum_fieldsModel.
 */
export const choices_sum_fieldsModelBase = ModelBase
  .named('choices_sum_fields')
  .props({
    __typename: types.optional(types.literal("choices_sum_fields"), "choices_sum_fields"),
    id: types.union(types.undefined, types.null, types.frozen()),
    poll_id: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class choices_sum_fieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get poll_id() { return this.__attr(`poll_id`) }
}
export function selectFromchoices_sum_fields() {
  return new choices_sum_fieldsModelSelector()
}

export const choices_sum_fieldsModelPrimitives = selectFromchoices_sum_fields().poll_id
