import { Skeleton, notification } from "antd";
import { useState } from "react";
import { useRequest } from "ahooks";
import styled from "styled-components";
import { getAnimeSearch } from "../../services/animeService";
import ListItem from "./component/ListItem";
import ErrorResult from "../../component/ErrorResult";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, auto));
  gap: 2.5em;
`;

export default function ListPage() {
  const [notiApi, notiContextHolder] = notification.useNotification();
  const [showErrorPage, setShowErrorPage] = useState(false);
  // TODO: update to actual params
  const { data: animeData, loading } = useRequest(
    () =>
      getAnimeSearch({
        name: "eva",
      }),
    {
      onError: (e) => {
        notiApi.open({
          type: "error",
          message: e?.message,
          placement: "topRight",
        });
        setShowErrorPage(true);
      },
    }
  );

  return (
    <ListContainer>
      {notiContextHolder}
      {loading ? (
        <Skeleton />
      ) : showErrorPage ? (
        <ErrorResult />
      ) : (
        <>
          {animeData?.data?.map((anime) => {
            return <ListItem key={anime.mal_id} animeData={anime} />;
          })}
        </>
      )}
    </ListContainer>
  );
}
