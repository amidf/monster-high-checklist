import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 16px;
`;

export const DollsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 64px 0;
`;

export const LogoContainer = styled.div`
  padding-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;
