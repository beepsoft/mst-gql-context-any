/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * polls_stddev_fieldsBase
 * auto generated base class for the model polls_stddev_fieldsModel.
 */
export const polls_stddev_fieldsModelBase = ModelBase
  .named('polls_stddev_fields')
  .props({
    __typename: types.optional(types.literal("polls_stddev_fields"), "polls_stddev_fields"),
    created_by: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    updated_by: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class polls_stddev_fieldsModelSelector extends QueryBuilder {
  get created_by() { return this.__attr(`created_by`) }
  get id() { return this.__attr(`id`) }
  get updated_by() { return this.__attr(`updated_by`) }
}
export function selectFrompolls_stddev_fields() {
  return new polls_stddev_fieldsModelSelector()
}

export const polls_stddev_fieldsModelPrimitives = selectFrompolls_stddev_fields().created_by.updated_by
