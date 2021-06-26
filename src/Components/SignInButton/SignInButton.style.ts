import styled from "styled-components";

export const SignInButtonStyle = styled.button`
  height: 2rem;
  border-radius: 3rem;
  border: none;
  padding: 0.8rem 0.5rem;
  text-decoration: none;
  background: ${({ theme }) => theme.palette.grey[800]};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.palette.grey[400]};
  font-weight: 200;

  svg {
    width: 25px;
    height: 25px;
  }

  svg.closeIcon {
    margin: 0 0.5rem;
    padding: 0 0.1rem;
    width: 20px;
    height: 20px;

    &:hover {
      filter: brightness(2.5);
    }
  }

  svg:first-child {
    margin-right: 1rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
