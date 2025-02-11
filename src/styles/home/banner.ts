import { keyframes, styled } from "goober";

const MaskIntroAnimation = keyframes`
  0% {
    filter: blur(30px) brightness(0.6)
  }

  to {
    filter: blur(0) brightness(0.6)
  }
`;

const MaskBanner = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;

  filter: brightness(0.6);
  animation: ${MaskIntroAnimation} 1.5s;
`;

const MaskBannerImage = styled<{ $active: boolean }>("img")`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({ $active }) => (!$active ? "opacity: 0;" : "opacity: 1;")}
  transition: opacity 0.5s ease-in-out;

  -webkit-user-drag: none;
`;

export default Object.assign(MaskBanner, { Image: MaskBannerImage });
