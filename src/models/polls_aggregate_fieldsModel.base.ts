/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { polls_avg_fieldsModel, polls_avg_fieldsModelType } from "./polls_avg_fieldsModel"
import { polls_avg_fieldsModelSelector } from "./polls_avg_fieldsModel.base"
import { polls_max_fieldsModel, polls_max_fieldsModelType } from "./polls_max_fieldsModel"
import { polls_max_fieldsModelSelector } from "./polls_max_fieldsModel.base"
import { polls_min_fieldsModel, polls_min_fieldsModelType } from "./polls_min_fieldsModel"
import { polls_min_fieldsModelSelector } from "./polls_min_fieldsModel.base"
import { polls_stddev_fieldsModel, polls_stddev_fieldsModelType } from "./polls_stddev_fieldsModel"
import { polls_stddev_fieldsModelSelector } from "./polls_stddev_fieldsModel.base"
import { polls_stddev_pop_fieldsModel, polls_stddev_pop_fieldsModelType } from "./polls_stddev_pop_fieldsModel"
import { polls_stddev_pop_fieldsModelSelector } from "./polls_stddev_pop_fieldsModel.base"
import { polls_stddev_samp_fieldsModel, polls_stddev_samp_fieldsModelType } from "./polls_stddev_samp_fieldsModel"
import { polls_stddev_samp_fieldsModelSelector } from "./polls_stddev_samp_fieldsModel.base"
import { polls_sum_fieldsModel, polls_sum_fieldsModelType } from "./polls_sum_fieldsModel"
import { polls_sum_fieldsModelSelector } from "./polls_sum_fieldsModel.base"
import { polls_var_pop_fieldsModel, polls_var_pop_fieldsModelType } from "./polls_var_pop_fieldsModel"
import { polls_var_pop_fieldsModelSelector } from "./polls_var_pop_fieldsModel.base"
import { polls_var_samp_fieldsModel, polls_var_samp_fieldsModelType } from "./polls_var_samp_fieldsModel"
import { polls_var_samp_fieldsModelSelector } from "./polls_var_samp_fieldsModel.base"
import { polls_variance_fieldsModel, polls_variance_fieldsModelType } from "./polls_variance_fieldsModel"
import { polls_variance_fieldsModelSelector } from "./polls_variance_fieldsModel.base"


/**
 * polls_aggregate_fieldsBase
 * auto generated base class for the model polls_aggregate_fieldsModel.
 */
export const polls_aggregate_fieldsModelBase = ModelBase
  .named('polls_aggregate_fields')
  .props({
    __typename: types.optional(types.literal("polls_aggregate_fields"), "polls_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => polls_avg_fieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => polls_max_fieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => polls_min_fieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => polls_stddev_fieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => polls_stddev_pop_fieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => polls_stddev_samp_fieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => polls_sum_fieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => polls_var_pop_fieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => polls_var_samp_fieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => polls_variance_fieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class polls_aggregate_fieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | polls_avg_fieldsModelSelector | ((selector: polls_avg_fieldsModelSelector) => polls_avg_fieldsModelSelector)) { return this.__child(`avg`, polls_avg_fieldsModelSelector, builder) }
  max(builder?: string | polls_max_fieldsModelSelector | ((selector: polls_max_fieldsModelSelector) => polls_max_fieldsModelSelector)) { return this.__child(`max`, polls_max_fieldsModelSelector, builder) }
  min(builder?: string | polls_min_fieldsModelSelector | ((selector: polls_min_fieldsModelSelector) => polls_min_fieldsModelSelector)) { return this.__child(`min`, polls_min_fieldsModelSelector, builder) }
  stddev(builder?: string | polls_stddev_fieldsModelSelector | ((selector: polls_stddev_fieldsModelSelector) => polls_stddev_fieldsModelSelector)) { return this.__child(`stddev`, polls_stddev_fieldsModelSelector, builder) }
  stddev_pop(builder?: string | polls_stddev_pop_fieldsModelSelector | ((selector: polls_stddev_pop_fieldsModelSelector) => polls_stddev_pop_fieldsModelSelector)) { return this.__child(`stddev_pop`, polls_stddev_pop_fieldsModelSelector, builder) }
  stddev_samp(builder?: string | polls_stddev_samp_fieldsModelSelector | ((selector: polls_stddev_samp_fieldsModelSelector) => polls_stddev_samp_fieldsModelSelector)) { return this.__child(`stddev_samp`, polls_stddev_samp_fieldsModelSelector, builder) }
  sum(builder?: string | polls_sum_fieldsModelSelector | ((selector: polls_sum_fieldsModelSelector) => polls_sum_fieldsModelSelector)) { return this.__child(`sum`, polls_sum_fieldsModelSelector, builder) }
  var_pop(builder?: string | polls_var_pop_fieldsModelSelector | ((selector: polls_var_pop_fieldsModelSelector) => polls_var_pop_fieldsModelSelector)) { return this.__child(`var_pop`, polls_var_pop_fieldsModelSelector, builder) }
  var_samp(builder?: string | polls_var_samp_fieldsModelSelector | ((selector: polls_var_samp_fieldsModelSelector) => polls_var_samp_fieldsModelSelector)) { return this.__child(`var_samp`, polls_var_samp_fieldsModelSelector, builder) }
  variance(builder?: string | polls_variance_fieldsModelSelector | ((selector: polls_variance_fieldsModelSelector) => polls_variance_fieldsModelSelector)) { return this.__child(`variance`, polls_variance_fieldsModelSelector, builder) }
}
export function selectFrompolls_aggregate_fields() {
  return new polls_aggregate_fieldsModelSelector()
}

export const polls_aggregate_fieldsModelPrimitives = selectFrompolls_aggregate_fields().count
