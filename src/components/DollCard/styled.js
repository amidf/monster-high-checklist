import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px;
  margin-bottom: 64px;

  .icon-container {
    height: 400px;

    img {
      max-height: 400px;
      max-width: 100%;
    }
  }

  p {
    text-align: center;
    font-size: 28px;
  }

  @media (max-width: 767px) {
    .icon-container {
      height: auto;
    }

    width: 100%;
    margin: 0;
    margin-bottom: 64px;
  }
`;

export const Checkbox = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #000;

  img {
    width: 48px;
  }
`;
