import { FaGithub } from "react-icons/fa";
import { SignInButtonStyle } from "./SignInButton.style";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <SignInButtonStyle type="button">
      <FaGithub color="#00D34D" />
      {session.user.name}
      <FiX
        color="#737380"
        type="button"
        className="closeIcon"
        onClick={() => signOut()}
      />
    </SignInButtonStyle>
  ) : (
    <SignInButtonStyle type="button" onClick={() => signIn("github")}>
      <FaGithub color="#581ECD" />
      Singin with Github
    </SignInButtonStyle>
  );
}
