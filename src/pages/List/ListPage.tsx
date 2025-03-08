import { Card, Image, Skeleton } from "antd";
import { useRequest } from "ahooks";
import styled from "styled-components";
import { getAnimeSearch } from "../../services/animeService";
import ListItem from "./component/ListItem";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, auto));
  gap: 2.5em;
`;

export default function ListPage() {
  // TODO: update to actual params
  const { data: animeData, loading } = useRequest(
    () =>
      getAnimeSearch({
        name: "eva",
      }),
    {
      onError: (e) => {
        console.log(e);
      },
    }
  );

  return (
    <ListContainer>
      {animeData?.data?.map((anime) => {
        return <ListItem loading={loading} animeData={anime} />;
      })}
    </ListContainer>
  );
}
