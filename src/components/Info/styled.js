import styled from "styled-components";

export const Container = styled.div`
  font-size: 24px;

  padding: 0 32px;

  position: ${(props) => (props.stick ? "fixed" : "relative")};
  top: 0;
  left: 0;
  width: 100%;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 1px solid violet;
  display: flex;
  align-items: center;

  .line {
    width: ${(props) => props.progress}%;
    height: 48px;
    border-radius: 6px;
    background-color: violet;
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
