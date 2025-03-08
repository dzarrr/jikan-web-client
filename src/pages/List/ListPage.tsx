import { Skeleton, notification, Pagination } from "antd";
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4em;

  ul {
    display: flex;
    align-items: center;
  }
`;

export default function ListPage() {
  const [notiApi, notiContextHolder] = notification.useNotification();
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 10,
  });
  const [showErrorPage, setShowErrorPage] = useState(false);
  // TODO: update to actual params
  const { data: animeData, loading } = useRequest(
    () =>
      getAnimeSearch({
        q: "the",
        page: pagination.currentPage,
        limit: pagination.pageSize,
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
      refreshDeps: [pagination],
    }
  );

  return (
    <>
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
      <PaginationContainer
        style={{ display: "flex", justifyContent: "center", marginTop: "4em" }}
      >
        {animeData && !loading && (
          <Pagination
            simple
            showSizeChanger
            current={pagination.currentPage}
            onChange={(newPage) => {
              setPagination((prevPagination) => ({
                ...prevPagination,
                currentPage: newPage,
              }));
            }}
            onShowSizeChange={(newCurrentPage, newPageSize) => {
              setPagination({
                currentPage: newCurrentPage,
                pageSize: newPageSize,
              });
            }}
            total={animeData.pagination.items.total}
            pageSize={pagination.pageSize}
            pageSizeOptions={[10, 15, 25]}
          />
        )}
      </PaginationContainer>
    </>
  );
}
