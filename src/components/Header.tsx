import { useLocation } from "preact-iso";
import { StyledHeader } from "../styles/common";

import {
  SHOULD_USE_CDN,
  IMAGE_CDN_URL,
  LOCAL_IMAGE_URL,
} from "../constants/cdn";

export default function Header() {
  const { url } = useLocation();

  return (
    <StyledHeader>
      <div>
        <a href="/" title="Hebi.">
          <StyledHeader.Symbol
            src={`${
              SHOULD_USE_CDN ? IMAGE_CDN_URL : LOCAL_IMAGE_URL
            }/symbol.webp`}
            alt="Hebi."
            draggable={false}
          />
        </a>
      </div>

      <nav>
        <a href="/" class={url == "/" && "active"}>
          Home
        </a>
        <a href="/404" class={url == "/404" && "active"}>
          404
        </a>
      </nav>
    </StyledHeader>
  );
}
