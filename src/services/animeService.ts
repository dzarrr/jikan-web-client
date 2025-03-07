import { JIKAN_API_ENDPOINT } from "../lib/const";
import fetchData from "../lib/fetchData";
import { getQueryParamString } from "../lib/getQueryParamString";
import { AnimeResponse } from "./animeServiceType";

export function getAnimeSearch(
  params?: Record<string, string | number>
): Promise<AnimeResponse> {
  const url = params
    ? `${JIKAN_API_ENDPOINT}/anime?${getQueryParamString(params)}`
    : `${JIKAN_API_ENDPOINT}/anime`;

  return fetchData(url);
}
