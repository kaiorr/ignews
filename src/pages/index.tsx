import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.palette.grey[200]};
`;

export default function Home() {
  return <Title>My page</Title>;
}
