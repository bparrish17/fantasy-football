import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function bootstrapAxios() {
}

export async function search({ model, body, includeTotal = true }) {
  return Axios({
    method: 'POST',
    url: `/${model}/search`,
    data: body
  }).then((res) => (includeTotal ? res?.data : res?.data?.data));
}

export const usePlayers = (body, queryOptions = {}) => {
  return useQuery({
    queryKey: ['players', body],
    queryFn: () => axios({ method: 'GET', url: `/players`, data: body }).then((res) => res?.data),
    ...queryOptions
  });
};
  