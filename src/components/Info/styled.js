import styled from "styled-components";

export const Container = styled.div`
  font-size: 24px;

  padding: 16px 32px;

  position: relative;
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;

  @media (max-width: 767px) {
    padding: 16px;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #e60280;
  display: flex;
  align-items: center;

  .line {
    width: ${(props) => props.progress}%;
    height: 48px;
    border-radius: 6px;
    background-color: #e60280;
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
