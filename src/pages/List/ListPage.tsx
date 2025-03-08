import { Skeleton, notification, Pagination, Input } from "antd";
import { useState, useEffect } from "react";
import { useRequest } from "ahooks";
import styled from "styled-components";
import { getAnimeSearch } from "../../services/animeService";
import ListItem from "./component/ListItem";
import ErrorResult from "../../component/ErrorResult";
import { useNavigate } from "react-router";

// TODO: add UI for empty

const DEFAULT_PAGE_SIZE = 25;
const { Search } = Input;

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

const StyledSearch = styled(Search)`
  margin-bottom: 2.5em;

  .ant-btn {
    background-color: #eb2f96;

    &:hover {
      background-color: #eb2f96 !important;
      filter: brightness(1.25);
    }
  }
`;

export default function ListPage() {
  const [notiApi, notiContextHolder] = notification.useNotification();
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const [showErrorPage, setShowErrorPage] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const { data: animeData, loading } = useRequest(
    () => {
      return getAnimeSearch({
        q: searchText,
        page: pagination.currentPage,
        limit: pagination.pageSize,
      });
    },
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

  function handlePageChange(newPage: number) {
    const currentParams = new URLSearchParams(location.search);

    currentParams.set("page", newPage.toString());

    navigate(`?${currentParams.toString()}`);
  }

  function handlePageSizeChange(newPage: number, newPageSize: number) {
    const currentParams = new URLSearchParams(location.search);

    currentParams.set("page", newPage.toString());
    currentParams.set("limit", newPageSize.toString());

    navigate(`?${currentParams.toString()}`);
  }

  function handleSearchSubmit(searchQuery: string) {
    const currentParams = new URLSearchParams(location.search);

    currentParams.set("q", searchQuery);
    currentParams.set("page", "1");
    currentParams.set("limit", DEFAULT_PAGE_SIZE.toString());

    navigate(`?${currentParams.toString()}`);
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageFromQueryParam = Number(params.get("page")) || 1;
    const limitFromQueryParam =
      Number(params.get("limit")) || DEFAULT_PAGE_SIZE;
    const searchTextFromQueryParam = params.get("q") || "";

    setPagination({
      currentPage: pageFromQueryParam,
      pageSize: limitFromQueryParam,
    });

    setSearchText(searchTextFromQueryParam);
  }, [location.search]);

  return (
    <>
      <StyledSearch
        placeholder="Find your favorite anime..."
        enterButton="Search"
        size="large"
        loading={loading}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onSearch={handleSearchSubmit}
      />

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
            onChange={handlePageChange}
            onShowSizeChange={handlePageSizeChange}
            total={animeData.pagination.items.total}
            pageSize={pagination.pageSize}
            pageSizeOptions={[10, 15, 25]}
          />
        )}
      </PaginationContainer>
    </>
  );
}
