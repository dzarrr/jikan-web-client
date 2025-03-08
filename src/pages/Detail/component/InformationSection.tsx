import { styled } from "styled-components";
import { Divider } from "antd";

import { AnimeData } from "../../../services/animeServiceType";

const InformationContainer = styled.div`
  p {
    strong {
      color: #555555;
    }
    margin: 0.5em 0 0 0;
  }
`;

const StyledDivider = styled(Divider)`
  margin: 0;
  border-color: #eb2f96;
  border-width: medium;
`;

export default function InformationSection({
  animeData,
}: {
  animeData: AnimeData;
}) {
  return (
    <InformationContainer>
      <h3>Information</h3>
      <StyledDivider style={{ margin: 0 }} />
      <p>
        <strong>Type:</strong> {animeData?.type}
      </p>
      <p>
        <strong>Episodes:</strong> {animeData?.episodes}
      </p>
      <p>
        <strong>Status:</strong> {animeData?.status}
      </p>
      <p>
        {/* TODO: correctly display this after installing dayjs */}
        <strong>Aired:</strong> {animeData?.aired.from}
      </p>
      <p>
        <strong>Premiered:</strong> {animeData?.season} {animeData?.year}
      </p>
      <p>
        <strong>Broadcast:</strong> {animeData?.broadcast?.string}
      </p>
      <p>
        <strong>Producers:</strong>{" "}
        {animeData?.producers?.map((p) => p.name).join(", ")}
      </p>
      <p>
        <strong>Licensors:</strong>{" "}
        {animeData?.licensors?.map((l) => l.name).join(", ")}
      </p>
      <p>
        <strong>Studios:</strong>{" "}
        {animeData?.studios?.map((s) => s.name).join(", ")}
      </p>
      <p>
        <strong>Source:</strong> {animeData?.source}
      </p>
      <p>
        <strong>Genres:</strong>{" "}
        {animeData?.genres?.map((g) => g.name).join(", ")}
      </p>
      <p>
        <strong>Demographic:</strong>{" "}
        {animeData?.demographics?.map((d) => d.name).join(", ")}
      </p>
      <p>
        <strong>Duration:</strong> {animeData?.duration}
      </p>
      <p>
        <strong>Rating:</strong> {animeData?.rating}
      </p>
    </InformationContainer>
  );
}
