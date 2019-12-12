/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * choices_stddev_samp_fieldsBase
 * auto generated base class for the model choices_stddev_samp_fieldsModel.
 */
export const choices_stddev_samp_fieldsModelBase = ModelBase
  .named('choices_stddev_samp_fields')
  .props({
    __typename: types.optional(types.literal("choices_stddev_samp_fields"), "choices_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    poll_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class choices_stddev_samp_fieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get poll_id() { return this.__attr(`poll_id`) }
}
export function selectFromchoices_stddev_samp_fields() {
  return new choices_stddev_samp_fieldsModelSelector()
}

export const choices_stddev_samp_fieldsModelPrimitives = selectFromchoices_stddev_samp_fields().poll_id
