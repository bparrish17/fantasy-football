import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function bootstrapAxios() {
}

export async function search({ model, body }) {
  console.log('here,', model, body)
  return axios({
    method: 'POST',
    url: `/${model}/search`,
    data: body
  }).then((res) => res?.data);
}

export const usePlayers = (body, queryOptions = {}) => {
  return useQuery({
    queryKey: ['players', body],
    queryFn: async () => {
      return search({ model: 'players', body })
    },
    ...queryOptions
  });
};
  