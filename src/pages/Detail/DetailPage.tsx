import { notification, Skeleton } from "antd";
import { useState } from "react";
import { useParams } from "react-router";
import { useRequest } from "ahooks";
import { getAnimeById } from "../../services/animeService";
import ErrorResult from "../../component/ErrorResult";
import ListItem from "../List/component/ListItem";

export default function DetailPage() {
  const { id } = useParams();
  const [notiApi, notiContextHolder] = notification.useNotification();
  const [showErrorPage, setShowErrorPage] = useState(false);

  const { data: animeData, loading } = useRequest(
    () => (id ? getAnimeById({ id }) : Promise.reject(new Error("Invalid ID"))),
    {
      onError: (e) => {
        notiApi.open({
          type: "error",
          message: e?.message,
          placement: "topRight",
        });
        setShowErrorPage(true);
      },
      ready: id !== undefined,
    }
  );

  return (
    <div>
      {notiContextHolder}
      {loading ? (
        <Skeleton />
      ) : showErrorPage ? (
        <ErrorResult />
      ) : (
        animeData && (
          <ListItem key={animeData.data.mal_id} animeData={animeData.data} />
        )
      )}
    </div>
  );
}
