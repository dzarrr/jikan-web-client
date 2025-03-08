import { notification, Skeleton, Image, Tag, Divider } from "antd";
import { useState } from "react";
import { useParams } from "react-router";
import { useRequest } from "ahooks";
import { styled } from "styled-components";
import { getAnimeById } from "../../services/animeService";
import ErrorResult from "../../component/ErrorResult";
import InformationSection from "./component/InformationSection";
import RatingSection from "./component/RatingSection";

const DetailContainer = styled.div`
  min-height: 80vh;
  padding: 0 5em;
`;

const DetailContent = styled.div`
  display: flex;
  gap: 2.5em;
`;

const LeftSection = styled.div`
  max-width: 17.5em;
`;

const RightSection = styled.div`
  flex-grow: 1;
`;

const Title = styled.div`
  text-decoration: underline;
  text-decoration-color: #eb2f96;
`;

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
          <DetailContainer>
            <Title>
              <h1>{animeData?.data.title_english}</h1>
            </Title>
            <DetailContent>
              <LeftSection style={{ maxWidth: "17.5em" }}>
                <Image
                  width={"15em"}
                  src={animeData?.data.images.webp.large_image_url}
                />
                <InformationSection animeData={animeData?.data} />
              </LeftSection>
              <RightSection style={{ flexGrow: 1 }}>
                <RatingSection animeData={animeData?.data} />
                <div style={{ padding: "2em" }}>{animeData?.data.synopsis}</div>
              </RightSection>
            </DetailContent>
          </DetailContainer>
        )
      )}
    </div>
  );
}
