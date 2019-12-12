/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { choices_avg_fieldsModel, choices_avg_fieldsModelType } from "./choices_avg_fieldsModel"
import { choices_avg_fieldsModelSelector } from "./choices_avg_fieldsModel.base"
import { choices_max_fieldsModel, choices_max_fieldsModelType } from "./choices_max_fieldsModel"
import { choices_max_fieldsModelSelector } from "./choices_max_fieldsModel.base"
import { choices_min_fieldsModel, choices_min_fieldsModelType } from "./choices_min_fieldsModel"
import { choices_min_fieldsModelSelector } from "./choices_min_fieldsModel.base"
import { choices_stddev_fieldsModel, choices_stddev_fieldsModelType } from "./choices_stddev_fieldsModel"
import { choices_stddev_fieldsModelSelector } from "./choices_stddev_fieldsModel.base"
import { choices_stddev_pop_fieldsModel, choices_stddev_pop_fieldsModelType } from "./choices_stddev_pop_fieldsModel"
import { choices_stddev_pop_fieldsModelSelector } from "./choices_stddev_pop_fieldsModel.base"
import { choices_stddev_samp_fieldsModel, choices_stddev_samp_fieldsModelType } from "./choices_stddev_samp_fieldsModel"
import { choices_stddev_samp_fieldsModelSelector } from "./choices_stddev_samp_fieldsModel.base"
import { choices_sum_fieldsModel, choices_sum_fieldsModelType } from "./choices_sum_fieldsModel"
import { choices_sum_fieldsModelSelector } from "./choices_sum_fieldsModel.base"
import { choices_var_pop_fieldsModel, choices_var_pop_fieldsModelType } from "./choices_var_pop_fieldsModel"
import { choices_var_pop_fieldsModelSelector } from "./choices_var_pop_fieldsModel.base"
import { choices_var_samp_fieldsModel, choices_var_samp_fieldsModelType } from "./choices_var_samp_fieldsModel"
import { choices_var_samp_fieldsModelSelector } from "./choices_var_samp_fieldsModel.base"
import { choices_variance_fieldsModel, choices_variance_fieldsModelType } from "./choices_variance_fieldsModel"
import { choices_variance_fieldsModelSelector } from "./choices_variance_fieldsModel.base"
import { RootStoreType } from "./index"


/**
 * choices_aggregate_fieldsBase
 * auto generated base class for the model choices_aggregate_fieldsModel.
 */
export const choices_aggregate_fieldsModelBase = ModelBase
  .named('choices_aggregate_fields')
  .props({
    __typename: types.optional(types.literal("choices_aggregate_fields"), "choices_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => choices_avg_fieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => choices_max_fieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => choices_min_fieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => choices_stddev_fieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => choices_stddev_pop_fieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => choices_stddev_samp_fieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => choices_sum_fieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => choices_var_pop_fieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => choices_var_samp_fieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => choices_variance_fieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class choices_aggregate_fieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | choices_avg_fieldsModelSelector | ((selector: choices_avg_fieldsModelSelector) => choices_avg_fieldsModelSelector)) { return this.__child(`avg`, choices_avg_fieldsModelSelector, builder) }
  max(builder?: string | choices_max_fieldsModelSelector | ((selector: choices_max_fieldsModelSelector) => choices_max_fieldsModelSelector)) { return this.__child(`max`, choices_max_fieldsModelSelector, builder) }
  min(builder?: string | choices_min_fieldsModelSelector | ((selector: choices_min_fieldsModelSelector) => choices_min_fieldsModelSelector)) { return this.__child(`min`, choices_min_fieldsModelSelector, builder) }
  stddev(builder?: string | choices_stddev_fieldsModelSelector | ((selector: choices_stddev_fieldsModelSelector) => choices_stddev_fieldsModelSelector)) { return this.__child(`stddev`, choices_stddev_fieldsModelSelector, builder) }
  stddev_pop(builder?: string | choices_stddev_pop_fieldsModelSelector | ((selector: choices_stddev_pop_fieldsModelSelector) => choices_stddev_pop_fieldsModelSelector)) { return this.__child(`stddev_pop`, choices_stddev_pop_fieldsModelSelector, builder) }
  stddev_samp(builder?: string | choices_stddev_samp_fieldsModelSelector | ((selector: choices_stddev_samp_fieldsModelSelector) => choices_stddev_samp_fieldsModelSelector)) { return this.__child(`stddev_samp`, choices_stddev_samp_fieldsModelSelector, builder) }
  sum(builder?: string | choices_sum_fieldsModelSelector | ((selector: choices_sum_fieldsModelSelector) => choices_sum_fieldsModelSelector)) { return this.__child(`sum`, choices_sum_fieldsModelSelector, builder) }
  var_pop(builder?: string | choices_var_pop_fieldsModelSelector | ((selector: choices_var_pop_fieldsModelSelector) => choices_var_pop_fieldsModelSelector)) { return this.__child(`var_pop`, choices_var_pop_fieldsModelSelector, builder) }
  var_samp(builder?: string | choices_var_samp_fieldsModelSelector | ((selector: choices_var_samp_fieldsModelSelector) => choices_var_samp_fieldsModelSelector)) { return this.__child(`var_samp`, choices_var_samp_fieldsModelSelector, builder) }
  variance(builder?: string | choices_variance_fieldsModelSelector | ((selector: choices_variance_fieldsModelSelector) => choices_variance_fieldsModelSelector)) { return this.__child(`variance`, choices_variance_fieldsModelSelector, builder) }
}
export function selectFromchoices_aggregate_fields() {
  return new choices_aggregate_fieldsModelSelector()
}

export const choices_aggregate_fieldsModelPrimitives = selectFromchoices_aggregate_fields().count
