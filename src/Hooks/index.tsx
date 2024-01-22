import { useQuery } from "@tanstack/react-query";

import { instance } from "../server";

export const useGetData = (key: string[], url: string, options: any) =>
  useQuery(key, () => instance.get(url), { ...options });
