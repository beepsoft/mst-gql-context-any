/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * choices_avg_fieldsBase
 * auto generated base class for the model choices_avg_fieldsModel.
 */
export const choices_avg_fieldsModelBase = ModelBase
  .named('choices_avg_fields')
  .props({
    __typename: types.optional(types.literal("choices_avg_fields"), "choices_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    poll_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class choices_avg_fieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get poll_id() { return this.__attr(`poll_id`) }
}
export function selectFromchoices_avg_fields() {
  return new choices_avg_fieldsModelSelector()
}

export const choices_avg_fieldsModelPrimitives = selectFromchoices_avg_fields().poll_id
