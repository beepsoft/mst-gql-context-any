/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { query_rootModel, query_rootModelType } from "./query_rootModel"
import { query_rootModelPrimitives, query_rootModelSelector } from "./query_rootModel.base"
import { choicesModel, choicesModelType } from "./choicesModel"
import { choicesModelPrimitives, choicesModelSelector } from "./choicesModel.base"
import { pollsModel, pollsModelType } from "./pollsModel"
import { pollsModelPrimitives, pollsModelSelector } from "./pollsModel.base"
import { choices_aggregateModel, choices_aggregateModelType } from "./choices_aggregateModel"
import { choices_aggregateModelPrimitives, choices_aggregateModelSelector } from "./choices_aggregateModel.base"
import { choices_aggregate_fieldsModel, choices_aggregate_fieldsModelType } from "./choices_aggregate_fieldsModel"
import { choices_aggregate_fieldsModelPrimitives, choices_aggregate_fieldsModelSelector } from "./choices_aggregate_fieldsModel.base"
import { choices_avg_fieldsModel, choices_avg_fieldsModelType } from "./choices_avg_fieldsModel"
import { choices_avg_fieldsModelPrimitives, choices_avg_fieldsModelSelector } from "./choices_avg_fieldsModel.base"
import { choices_max_fieldsModel, choices_max_fieldsModelType } from "./choices_max_fieldsModel"
import { choices_max_fieldsModelPrimitives, choices_max_fieldsModelSelector } from "./choices_max_fieldsModel.base"
import { choices_min_fieldsModel, choices_min_fieldsModelType } from "./choices_min_fieldsModel"
import { choices_min_fieldsModelPrimitives, choices_min_fieldsModelSelector } from "./choices_min_fieldsModel.base"
import { choices_stddev_fieldsModel, choices_stddev_fieldsModelType } from "./choices_stddev_fieldsModel"
import { choices_stddev_fieldsModelPrimitives, choices_stddev_fieldsModelSelector } from "./choices_stddev_fieldsModel.base"
import { choices_stddev_pop_fieldsModel, choices_stddev_pop_fieldsModelType } from "./choices_stddev_pop_fieldsModel"
import { choices_stddev_pop_fieldsModelPrimitives, choices_stddev_pop_fieldsModelSelector } from "./choices_stddev_pop_fieldsModel.base"
import { choices_stddev_samp_fieldsModel, choices_stddev_samp_fieldsModelType } from "./choices_stddev_samp_fieldsModel"
import { choices_stddev_samp_fieldsModelPrimitives, choices_stddev_samp_fieldsModelSelector } from "./choices_stddev_samp_fieldsModel.base"
import { choices_sum_fieldsModel, choices_sum_fieldsModelType } from "./choices_sum_fieldsModel"
import { choices_sum_fieldsModelPrimitives, choices_sum_fieldsModelSelector } from "./choices_sum_fieldsModel.base"
import { choices_var_pop_fieldsModel, choices_var_pop_fieldsModelType } from "./choices_var_pop_fieldsModel"
import { choices_var_pop_fieldsModelPrimitives, choices_var_pop_fieldsModelSelector } from "./choices_var_pop_fieldsModel.base"
import { choices_var_samp_fieldsModel, choices_var_samp_fieldsModelType } from "./choices_var_samp_fieldsModel"
import { choices_var_samp_fieldsModelPrimitives, choices_var_samp_fieldsModelSelector } from "./choices_var_samp_fieldsModel.base"
import { choices_variance_fieldsModel, choices_variance_fieldsModelType } from "./choices_variance_fieldsModel"
import { choices_variance_fieldsModelPrimitives, choices_variance_fieldsModelSelector } from "./choices_variance_fieldsModel.base"
import { polls_aggregateModel, polls_aggregateModelType } from "./polls_aggregateModel"
import { polls_aggregateModelPrimitives, polls_aggregateModelSelector } from "./polls_aggregateModel.base"
import { polls_aggregate_fieldsModel, polls_aggregate_fieldsModelType } from "./polls_aggregate_fieldsModel"
import { polls_aggregate_fieldsModelPrimitives, polls_aggregate_fieldsModelSelector } from "./polls_aggregate_fieldsModel.base"
import { polls_avg_fieldsModel, polls_avg_fieldsModelType } from "./polls_avg_fieldsModel"
import { polls_avg_fieldsModelPrimitives, polls_avg_fieldsModelSelector } from "./polls_avg_fieldsModel.base"
import { polls_max_fieldsModel, polls_max_fieldsModelType } from "./polls_max_fieldsModel"
import { polls_max_fieldsModelPrimitives, polls_max_fieldsModelSelector } from "./polls_max_fieldsModel.base"
import { polls_min_fieldsModel, polls_min_fieldsModelType } from "./polls_min_fieldsModel"
import { polls_min_fieldsModelPrimitives, polls_min_fieldsModelSelector } from "./polls_min_fieldsModel.base"
import { polls_stddev_fieldsModel, polls_stddev_fieldsModelType } from "./polls_stddev_fieldsModel"
import { polls_stddev_fieldsModelPrimitives, polls_stddev_fieldsModelSelector } from "./polls_stddev_fieldsModel.base"
import { polls_stddev_pop_fieldsModel, polls_stddev_pop_fieldsModelType } from "./polls_stddev_pop_fieldsModel"
import { polls_stddev_pop_fieldsModelPrimitives, polls_stddev_pop_fieldsModelSelector } from "./polls_stddev_pop_fieldsModel.base"
import { polls_stddev_samp_fieldsModel, polls_stddev_samp_fieldsModelType } from "./polls_stddev_samp_fieldsModel"
import { polls_stddev_samp_fieldsModelPrimitives, polls_stddev_samp_fieldsModelSelector } from "./polls_stddev_samp_fieldsModel.base"
import { polls_sum_fieldsModel, polls_sum_fieldsModelType } from "./polls_sum_fieldsModel"
import { polls_sum_fieldsModelPrimitives, polls_sum_fieldsModelSelector } from "./polls_sum_fieldsModel.base"
import { polls_var_pop_fieldsModel, polls_var_pop_fieldsModelType } from "./polls_var_pop_fieldsModel"
import { polls_var_pop_fieldsModelPrimitives, polls_var_pop_fieldsModelSelector } from "./polls_var_pop_fieldsModel.base"
import { polls_var_samp_fieldsModel, polls_var_samp_fieldsModelType } from "./polls_var_samp_fieldsModel"
import { polls_var_samp_fieldsModelPrimitives, polls_var_samp_fieldsModelSelector } from "./polls_var_samp_fieldsModel.base"
import { polls_variance_fieldsModel, polls_variance_fieldsModelType } from "./polls_variance_fieldsModel"
import { polls_variance_fieldsModelPrimitives, polls_variance_fieldsModelSelector } from "./polls_variance_fieldsModel.base"
import { mutation_rootModel, mutation_rootModelType } from "./mutation_rootModel"
import { mutation_rootModelPrimitives, mutation_rootModelSelector } from "./mutation_rootModel.base"
import { choices_mutation_responseModel, choices_mutation_responseModelType } from "./choices_mutation_responseModel"
import { choices_mutation_responseModelPrimitives, choices_mutation_responseModelSelector } from "./choices_mutation_responseModel.base"
import { polls_mutation_responseModel, polls_mutation_responseModelType } from "./polls_mutation_responseModel"
import { polls_mutation_responseModelPrimitives, polls_mutation_responseModelSelector } from "./polls_mutation_responseModel.base"
import { subscription_rootModel, subscription_rootModelType } from "./subscription_rootModel"
import { subscription_rootModelPrimitives, subscription_rootModelSelector } from "./subscription_rootModel.base"

import { choices_select_column } from "./choices_select_columnEnum"
import { order_by } from "./order_byEnum"
import { polls_select_column } from "./polls_select_columnEnum"
import { choices_constraint } from "./choices_constraintEnum"
import { choices_update_column } from "./choices_update_columnEnum"
import { polls_constraint } from "./polls_constraintEnum"
import { polls_update_column } from "./polls_update_columnEnum"
import { conflict_action } from "./conflict_actionEnum"

export type choices_order_by = {
  id?: order_by
  poll?: polls_order_by
  poll_id?: order_by
  text?: order_by
}
export type polls_order_by = {
  choices_aggregate?: choices_aggregate_order_by
  created_at?: order_by
  created_by?: order_by
  expiration_date_time?: order_by
  foo?: order_by
  id?: order_by
  ize?: order_by
  question?: order_by
  updated_at?: order_by
  updated_by?: order_by
}
export type choices_aggregate_order_by = {
  avg?: choices_avg_order_by
  count?: order_by
  max?: choices_max_order_by
  min?: choices_min_order_by
  stddev?: choices_stddev_order_by
  stddev_pop?: choices_stddev_pop_order_by
  stddev_samp?: choices_stddev_samp_order_by
  sum?: choices_sum_order_by
  var_pop?: choices_var_pop_order_by
  var_samp?: choices_var_samp_order_by
  variance?: choices_variance_order_by
}
export type choices_avg_order_by = {
  id?: order_by
  poll_id?: order_by
}
export type choices_max_order_by = {
  id?: order_by
  poll_id?: order_by
  text?: order_by
}
export type choices_min_order_by = {
  id?: order_by
  poll_id?: order_by
  text?: order_by
}
export type choices_stddev_order_by = {
  id?: order_by
  poll_id?: order_by
}
export type choices_stddev_pop_order_by = {
  id?: order_by
  poll_id?: order_by
}
export type choices_stddev_samp_order_by = {
  id?: order_by
  poll_id?: order_by
}
export type choices_sum_order_by = {
  id?: order_by
  poll_id?: order_by
}
export type choices_var_pop_order_by = {
  id?: order_by
  poll_id?: order_by
}
export type choices_var_samp_order_by = {
  id?: order_by
  poll_id?: order_by
}
export type choices_variance_order_by = {
  id?: order_by
  poll_id?: order_by
}
export type choices_bool_exp = {
  _and?: choices_bool_exp[]
  _not?: choices_bool_exp
  _or?: choices_bool_exp[]
  id?: bigint_comparison_exp
  poll?: polls_bool_exp
  poll_id?: bigint_comparison_exp
  text?: String_comparison_exp
}
export type bigint_comparison_exp = {
  _eq?: any
  _gt?: any
  _gte?: any
  _in: any[]
  _is_null?: boolean
  _lt?: any
  _lte?: any
  _neq?: any
  _nin: any[]
}
export type polls_bool_exp = {
  _and?: polls_bool_exp[]
  _not?: polls_bool_exp
  _or?: polls_bool_exp[]
  choices?: choices_bool_exp
  created_at?: timestamp_comparison_exp
  created_by?: bigint_comparison_exp
  expiration_date_time?: timestamp_comparison_exp
  foo?: String_comparison_exp
  id?: bigint_comparison_exp
  ize?: String_comparison_exp
  question?: String_comparison_exp
  updated_at?: timestamp_comparison_exp
  updated_by?: bigint_comparison_exp
}
export type timestamp_comparison_exp = {
  _eq?: any
  _gt?: any
  _gte?: any
  _in: any[]
  _is_null?: boolean
  _lt?: any
  _lte?: any
  _neq?: any
  _nin: any[]
}
export type String_comparison_exp = {
  _eq?: string
  _gt?: string
  _gte?: string
  _ilike?: string
  _in: string[]
  _is_null?: boolean
  _like?: string
  _lt?: string
  _lte?: string
  _neq?: string
  _nilike?: string
  _nin: string[]
  _nlike?: string
  _nsimilar?: string
  _similar?: string
}
export type choices_insert_input = {
  id?: any
  poll?: polls_obj_rel_insert_input
  poll_id?: any
  text?: string
}
export type polls_obj_rel_insert_input = {
  data: polls_insert_input
  on_conflict?: polls_on_conflict
}
export type polls_insert_input = {
  choices?: choices_arr_rel_insert_input
  created_at?: any
  created_by?: any
  expiration_date_time?: any
  foo?: string
  id?: any
  ize?: string
  question?: string
  updated_at?: any
  updated_by?: any
}
export type choices_arr_rel_insert_input = {
  data: choices_insert_input[]
  on_conflict?: choices_on_conflict
}
export type choices_on_conflict = {
  constraint: choices_constraint
  update_columns: choices_update_column[]
}
export type polls_on_conflict = {
  constraint: polls_constraint
  update_columns: polls_update_column[]
}
export type choices_inc_input = {
  id?: any
  poll_id?: any
}
export type choices_set_input = {
  id?: any
  poll_id?: any
  text?: string
}
export type polls_inc_input = {
  created_by?: any
  id?: any
  updated_by?: any
}
export type polls_set_input = {
  created_at?: any
  created_by?: any
  expiration_date_time?: any
  foo?: string
  id?: any
  ize?: string
  question?: string
  updated_at?: any
  updated_by?: any
}
export type choices_obj_rel_insert_input = {
  data: choices_insert_input
  on_conflict?: choices_on_conflict
}
export type polls_aggregate_order_by = {
  avg?: polls_avg_order_by
  count?: order_by
  max?: polls_max_order_by
  min?: polls_min_order_by
  stddev?: polls_stddev_order_by
  stddev_pop?: polls_stddev_pop_order_by
  stddev_samp?: polls_stddev_samp_order_by
  sum?: polls_sum_order_by
  var_pop?: polls_var_pop_order_by
  var_samp?: polls_var_samp_order_by
  variance?: polls_variance_order_by
}
export type polls_avg_order_by = {
  created_by?: order_by
  id?: order_by
  updated_by?: order_by
}
export type polls_max_order_by = {
  created_by?: order_by
  foo?: order_by
  id?: order_by
  ize?: order_by
  question?: order_by
  updated_by?: order_by
}
export type polls_min_order_by = {
  created_by?: order_by
  foo?: order_by
  id?: order_by
  ize?: order_by
  question?: order_by
  updated_by?: order_by
}
export type polls_stddev_order_by = {
  created_by?: order_by
  id?: order_by
  updated_by?: order_by
}
export type polls_stddev_pop_order_by = {
  created_by?: order_by
  id?: order_by
  updated_by?: order_by
}
export type polls_stddev_samp_order_by = {
  created_by?: order_by
  id?: order_by
  updated_by?: order_by
}
export type polls_sum_order_by = {
  created_by?: order_by
  id?: order_by
  updated_by?: order_by
}
export type polls_var_pop_order_by = {
  created_by?: order_by
  id?: order_by
  updated_by?: order_by
}
export type polls_var_samp_order_by = {
  created_by?: order_by
  id?: order_by
  updated_by?: order_by
}
export type polls_variance_order_by = {
  created_by?: order_by
  id?: order_by
  updated_by?: order_by
}
export type polls_arr_rel_insert_input = {
  data: polls_insert_input[]
  on_conflict?: polls_on_conflict
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  choicess: ObservableMap<string, choicesModelType>,
  pollss: ObservableMap<string, pollsModelType>
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['query_root', () => query_rootModel], ['choices', () => choicesModel], ['polls', () => pollsModel], ['choices_aggregate', () => choices_aggregateModel], ['choices_aggregate_fields', () => choices_aggregate_fieldsModel], ['choices_avg_fields', () => choices_avg_fieldsModel], ['choices_max_fields', () => choices_max_fieldsModel], ['choices_min_fields', () => choices_min_fieldsModel], ['choices_stddev_fields', () => choices_stddev_fieldsModel], ['choices_stddev_pop_fields', () => choices_stddev_pop_fieldsModel], ['choices_stddev_samp_fields', () => choices_stddev_samp_fieldsModel], ['choices_sum_fields', () => choices_sum_fieldsModel], ['choices_var_pop_fields', () => choices_var_pop_fieldsModel], ['choices_var_samp_fields', () => choices_var_samp_fieldsModel], ['choices_variance_fields', () => choices_variance_fieldsModel], ['polls_aggregate', () => polls_aggregateModel], ['polls_aggregate_fields', () => polls_aggregate_fieldsModel], ['polls_avg_fields', () => polls_avg_fieldsModel], ['polls_max_fields', () => polls_max_fieldsModel], ['polls_min_fields', () => polls_min_fieldsModel], ['polls_stddev_fields', () => polls_stddev_fieldsModel], ['polls_stddev_pop_fields', () => polls_stddev_pop_fieldsModel], ['polls_stddev_samp_fields', () => polls_stddev_samp_fieldsModel], ['polls_sum_fields', () => polls_sum_fieldsModel], ['polls_var_pop_fields', () => polls_var_pop_fieldsModel], ['polls_var_samp_fields', () => polls_var_samp_fieldsModel], ['polls_variance_fields', () => polls_variance_fieldsModel], ['mutation_root', () => mutation_rootModel], ['choices_mutation_response', () => choices_mutation_responseModel], ['polls_mutation_response', () => polls_mutation_responseModel], ['subscription_root', () => subscription_rootModel]], ['choices', 'polls']))
  .props({
    choicess: types.optional(types.map(types.late((): any => choicesModel)), {}),
    pollss: types.optional(types.map(types.late((): any => pollsModel)), {})
  })
  .actions(self => ({
  })))
