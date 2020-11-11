import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  margin: 64px auto;
  background-color: #fff;
  border-radius: 16px;
  position: relative;
`;

export const DollsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  padding: 64px 0;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  padding-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 500px;
  }

  @media (max-width: 767px) {
    img {
      max-width: 100%;
    }
  }
`;
