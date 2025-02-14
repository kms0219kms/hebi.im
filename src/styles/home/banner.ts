import { styled } from "goober";

const MaskBanner = styled("div")<{ $loading: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  ${({ $loading }) =>
    !$loading
      ? "filter: blur(0) brightness(0.6)"
      : "filter: blur(100px) brightness(0.6);"};

  transition: all 1.5s;
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
