import { styled } from "styled-components";
import { Divider, Tag } from "antd";
import { AnimeData } from "../../../services/animeServiceType";

const RatingContainer = styled.div`
  display: flex;
  align-items: stretch;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  gap: 0.25em;
`;

const RankingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  flex-direction: column;
`;

const RankingUpperSection = styled.div`
  display: flex;
  gap: 0.5em;
  font-size: 16px;
`;

const RankingLowerSection = styled.div`
  display: flex;
  align-items: center;
`;

export default function RatingSection({ animeData }: { animeData: AnimeData }) {
  return (
    <RatingContainer>
      <ScoreContainer>
        <div style={{ textAlign: "center" }}>
          <Tag style={{ marginInlineEnd: 0 }} color="pink-inverse">
            SCORE
          </Tag>
        </div>
        <div style={{ fontSize: "36px" }}>
          <b>{animeData.score || "N/A"}</b>
        </div>
        <div>{`${
          animeData.scored_by ? animeData.scored_by.toLocaleString() : "N/A"
        } users`}</div>
      </ScoreContainer>
      <RankingContainer>
        <RankingUpperSection>
          <div>
            MAL Ranking #<b>{animeData.rank}</b>
          </div>
          <div>
            MAL Popularity #<b>{animeData.popularity}</b>
          </div>
        </RankingUpperSection>
        <RankingLowerSection>
          <div>
            {animeData.season
              ? animeData.season?.[0].toUpperCase() + animeData.season?.slice(1)
              : "N/A"}
          </div>
          <Divider type="vertical" />
          <div>{animeData.studios.map((studio) => studio.name).join(", ")}</div>
        </RankingLowerSection>
      </RankingContainer>
    </RatingContainer>
  );
}
