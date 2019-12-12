/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * choices_var_pop_fieldsBase
 * auto generated base class for the model choices_var_pop_fieldsModel.
 */
export const choices_var_pop_fieldsModelBase = ModelBase
  .named('choices_var_pop_fields')
  .props({
    __typename: types.optional(types.literal("choices_var_pop_fields"), "choices_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    poll_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class choices_var_pop_fieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get poll_id() { return this.__attr(`poll_id`) }
}
export function selectFromchoices_var_pop_fields() {
  return new choices_var_pop_fieldsModelSelector()
}

export const choices_var_pop_fieldsModelPrimitives = selectFromchoices_var_pop_fields().poll_id
