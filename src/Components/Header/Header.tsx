import { HeaderContainer, HeaderContent } from "./Header.style";
import { SignInButton } from "../SignInButton/SignInButton";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a href="" className="active">
            Home
          </a>
          <a href="">Posts</a>
        </nav>
        <SignInButton />
      </HeaderContent>
    </HeaderContainer>
  );
}
