import { Button } from "antd";
import { useRequest } from "ahooks";
import { getAnimeSearch } from "../../services/animeService";

export default function ListPage() {
  // TODO: update to actual params
  const { data: animeData, loading } = useRequest(
    () =>
      getAnimeSearch({
        name: "eva",
      }),
    {}
  );

  return (
    <div>
      {/* TODO: update content */}
      {animeData?.data[0]?.mal_id}
      <Button>this is the list page</Button>
    </div>
  );
}
