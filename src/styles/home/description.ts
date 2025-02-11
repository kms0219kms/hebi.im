import { styled } from "goober";

const BannerDescriptionBox = styled<{ $active: boolean }>("div")`
  position: absolute;
  bottom: 0;
  right: 0;

  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${({ $active }) => (!$active ? "opacity: 0;" : "opacity: 1;")}
  transition: opacity 0.5s ease-in-out;
`;

const BannerDescriptionHeading = styled("h2")`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "DM Serif Display", "Nanum Myeongjo", "Noto Serif JP", serif;

  color: #fff;
  word-break: keep-all;
`;

const BannerDescriptionParagraph = styled("p")`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  font-size: 1rem;
  font-weight: 400;
  font-family: "Plus Jakarta Sans", "Pretendard Variable",
    "Pretendard JP Variable", sans-serif;

  color: #fff;
  word-break: keep-all;

  img {
    width: 20px;
    height: 20px;
  }
`;

export default Object.assign(BannerDescriptionBox, {
  Heading: BannerDescriptionHeading,
  Paragraph: BannerDescriptionParagraph,
});
