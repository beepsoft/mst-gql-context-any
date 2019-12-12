/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * choices_min_fieldsBase
 * auto generated base class for the model choices_min_fieldsModel.
 */
export const choices_min_fieldsModelBase = ModelBase
  .named('choices_min_fields')
  .props({
    __typename: types.optional(types.literal("choices_min_fields"), "choices_min_fields"),
    id: types.union(types.undefined, types.null, types.frozen()),
    poll_id: types.union(types.undefined, types.null, types.frozen()),
    text: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class choices_min_fieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get poll_id() { return this.__attr(`poll_id`) }
  get text() { return this.__attr(`text`) }
}
export function selectFromchoices_min_fields() {
  return new choices_min_fieldsModelSelector()
}

export const choices_min_fieldsModelPrimitives = selectFromchoices_min_fields().poll_id.text
