/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { pollsModel, pollsModelType } from "./pollsModel"
import { pollsModelSelector } from "./pollsModel.base"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  poll: pollsModelType;
}

/**
 * choicesBase
 * auto generated base class for the model choicesModel.
 */
export const choicesModelBase = withTypedRefs<Refs>()(ModelBase
  .named('choices')
  .props({
    __typename: types.optional(types.literal("choices"), "choices"),
    id: types.identifier,
    poll: types.union(types.undefined, MSTGQLRef(types.late((): any => pollsModel))),
    poll_id: types.union(types.undefined, types.frozen()),
    text: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class choicesModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get poll_id() { return this.__attr(`poll_id`) }
  get text() { return this.__attr(`text`) }
  poll(builder?: string | pollsModelSelector | ((selector: pollsModelSelector) => pollsModelSelector)) { return this.__child(`poll`, pollsModelSelector, builder) }
}
export function selectFromchoices() {
  return new choicesModelSelector()
}

export const choicesModelPrimitives = selectFromchoices().poll_id.text
