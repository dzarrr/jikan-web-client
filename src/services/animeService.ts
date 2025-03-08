import { JIKAN_API_ENDPOINT } from "../lib/const";
import fetchData from "../lib/fetchData";
import { getQueryParamString } from "../lib/getQueryParamString";
import {
  GetAnimeByIdResponse,
  GetAnimeSearchResponse,
} from "./animeServiceType";

export function getAnimeSearch(
  params?: Record<string, string | number>
): Promise<GetAnimeSearchResponse> {
  const url = params
    ? `${JIKAN_API_ENDPOINT}/anime?${getQueryParamString(params)}`
    : `${JIKAN_API_ENDPOINT}/anime`;

  return fetchData(url);
}

export function getAnimeById(params: {
  id: string;
}): Promise<GetAnimeByIdResponse> {
  const url = `${JIKAN_API_ENDPOINT}/anime/${params.id}`;

  return fetchData(url);
}
