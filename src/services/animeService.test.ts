import { vi, expect, it, describe } from "vitest";
import { getAnimeSearch, getAnimeById } from "./animeService";
import fetchData from "../lib/fetchData";
import { getQueryParamString } from "../lib/getQueryParamString";

// Mocking external dependencies
vi.mock("../lib/fetchData");
vi.mock("../lib/getQueryParamString");

describe("getAnimeSearch", () => {
  it("should build the correct URL and call fetchData with params", async () => {
    const mockResponse = { data: "some anime data" };
    vi.mocked(fetchData).mockResolvedValueOnce(mockResponse);

    vi.mocked(getQueryParamString).mockReturnValueOnce("search=naruto");

    const params = { search: "naruto" };
    const result = await getAnimeSearch(params);

    expect(result).toEqual(mockResponse);

    expect(getQueryParamString).toHaveBeenCalledWith(params);

    expect(fetchData).toHaveBeenCalledWith(
      "https://api.jikan.moe/v4/anime?search=naruto"
    );
  });

  it("should call fetchData without params", async () => {
    const mockResponse = { data: "some anime data" };
    vi.mocked(fetchData).mockResolvedValueOnce(mockResponse);

    const result = await getAnimeSearch();

    expect(result).toEqual(mockResponse);

    expect(fetchData).toHaveBeenCalledWith("https://api.jikan.moe/v4/anime");
  });
});

describe("getAnimeById", () => {
  it("should build the correct URL and call fetchData with the correct id", async () => {
    const mockResponse = { data: "anime by id data" };
    vi.mocked(fetchData).mockResolvedValueOnce(mockResponse);

    const params = { id: "12345" };
    const result = await getAnimeById(params);

    expect(result).toEqual(mockResponse);

    expect(fetchData).toHaveBeenCalledWith(
      "https://api.jikan.moe/v4/anime/12345"
    );
  });
});
