import { identity } from 'lodash'

export const tableParamsToBody = (
  { pagination, filters, sorter, defaultSortField },
  mapFilters = identity
) => {
  console.log(sorter?.order)
  return {
    page: pagination.current,
    pageSize: pagination.pageSize,
    sortDir: sorter?.order ? sorter?.order?.slice(0, -3) : undefined,
    sort: sorter?.field ?? sorter?.columnKey ?? defaultSortField,
    ...mapFilters(filters)
  };
};