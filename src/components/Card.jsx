import {
  CardDiv,
  CardName,
  ImageDiv,
  Image,
  Title,
  SubTitle,
  CardStar,
  CardButton,
  Button,
} from "../styles/Card.styles";

const Card = ({ imageLInk }) => {
  return (
    <CardDiv>
      <ImageDiv>
        <Image src={imageLInk} alt="image" />
      </ImageDiv>
      <CardName>
        <Title>Praka Shahi</Title>
        <SubTitle>Developer</SubTitle>
      </CardName>
      <CardStar>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </CardStar>
      <CardButton>
        <Button>About Me</Button>
        <Button>Hire Me</Button>
      </CardButton>
    </CardDiv>
  );
};

export default Card;
