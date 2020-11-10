import React from "react";

import logoSrc from "../../images/logo.jpg";

import DollCard from "../DollCard";
import Info from "../Info";

import * as S from "./styled";

const Main = ({ dolls }) => {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={logoSrc} alt="Логотип Monster High" />
      </S.LogoContainer>

      <Info dolls={dolls} />

      <S.DollsContainer>
        {dolls.map((doll) => (
          <DollCard key={doll.id} {...doll} />
        ))}
      </S.DollsContainer>
    </S.Container>
  );
};

export default Main;
