import {
  Container,
  HeroSectionStyled,
  Icon,
  TextContainer,
  Title,
  Quote,
} from "./HeroSection.styled";

export default function HeroSection() {
  return (
    <HeroSectionStyled>
      <Container>
        <TextContainer>
          <Title>
            Snow
            <Icon />
          </Title>

          <Quote>
            "The perfect Christmas tree? All Christmas trees are perfect!" —
            Charles N. Barnard
          </Quote>
        </TextContainer>
      </Container>
    </HeroSectionStyled>
  );
}
