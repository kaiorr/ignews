import { FaGithub } from "react-icons/fa";
import { SignInButtonStyle } from "./SignInButton.style";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <SignInButtonStyle type="button">
      <FaGithub color="#00D34D" />
      Kaio Ribeiro
      <FiX color="#737380" className="closeIcon" />
    </SignInButtonStyle>
  ) : (
    <SignInButtonStyle type="button">
      <FaGithub color="#581ECD" />
      Singin with Github
    </SignInButtonStyle>
  );
}
