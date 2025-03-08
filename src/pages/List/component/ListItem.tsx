import { Card, Image } from "antd";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { AnimeData } from "../../../services/animeServiceType";

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 1.5em 2em;
    display: flex;
    flex-direction: column;

    :first-child {
      align-self: center;
      margin-bottom: 0.75em;
    }
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

const Metadata = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0.2em 0;
`;

const Score = styled.span`
  font-size: 1rem;
`;

const GenreList = styled.p`
  font-size: 0.85rem;
  color: #888;
  margin: 0.25em 0;
`;

export default function ListItem({ animeData }: { animeData: AnimeData }) {
  const navigate = useNavigate();

  return (
    <StyledCard
      onClick={() => navigate(`detail/${animeData.mal_id}`)}
      hoverable
    >
      <Image
        preview={false}
        height={"25em"}
        src={animeData.images.webp.image_url}
      />
      <Title>{animeData.title_english || animeData.title}</Title>
      <Metadata>
        {animeData.type} | {animeData.episodes ?? "?"} episodes
      </Metadata>
      <Score>
        <b>{animeData.score}</b> / 10
      </Score>
      <GenreList>{animeData.genres.map((g) => g.name).join(", ")}</GenreList>
    </StyledCard>
  );
}
