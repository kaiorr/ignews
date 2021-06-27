import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.grey[800]};
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  nav {
    margin-left: 5rem;
    height: 5rem;

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      text-decoration: none;
      font-weight: 500;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.palette.grey[400]};
      transition: color 0.2s;

      & + a {
        margin-left: 2rem;
      }

      &:hover {
        color: ${({ theme }) => theme.palette.warning.main};
      }

      &.active {
        border-color: ${({ theme }) => theme.palette.warning.main};
        font-weight: 800;
      }

      &.active::after {
        content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: ${({ theme }) => theme.palette.warning.main};
      }
    }
  }

  button {
    margin-left: auto;
  }
`;
