import { notification, Skeleton, Image } from "antd";
import { useState } from "react";
import { useParams } from "react-router";
import { useRequest } from "ahooks";
import { getAnimeById } from "../../services/animeService";
import ErrorResult from "../../component/ErrorResult";
import InformationSection from "./component/InformationSection";

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
          <div style={{ minHeight: "80vh", padding: "0 5em" }}>
            <div>
              <h1>{animeData?.data.title_english}</h1>
            </div>
            <div style={{ display: "flex", gap: "2.5em" }}>
              <div style={{ maxWidth: "17.5em" }}>
                <Image
                  width={"15em"}
                  src={animeData?.data.images.jpg.large_image_url}
                />
                <InformationSection animeData={animeData?.data} />
              </div>
              <div style={{ flexGrow: 1, backgroundColor: "green" }}>
                <div>Score etc</div>
                <div>{animeData?.data.synopsis}</div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
