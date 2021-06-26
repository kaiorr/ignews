import styled from "styled-components";

export const SubscribeButtonNow = styled.button`
  width: 280px;
  height: 4rem;
  font-weight: bold;
  border: 0;
  left: 0;
  border-radius: 2rem;
  margin-top: 2.5rem;
  color: ${({ theme }) => theme.palette.grey[900]};
  background: ${({ theme }) => theme.palette.warning.main};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`;
