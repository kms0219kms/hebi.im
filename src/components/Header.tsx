import { useLocation } from "preact-iso";
import { styled } from "goober";

const StyledHeader = styled("header")`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
`;

const StyledSymbol = styled("img")`
  width: 70px;
`;

export function Header() {
  const { url } = useLocation();

  return (
    <StyledHeader>
      <div>
        <a href="/" title="Hebi.">
          <StyledSymbol
            src="https://cdn.devayaan.me/hebi-im-images/symbol.webp"
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
