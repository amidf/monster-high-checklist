import React from "react";

import checkIconSrc from "../../images/check-icon.jpg";

import * as S from "./styled";

const DollCard = ({ id, issueDate, name, icon, isCollected }) => {
  return (
    <S.Container>
      <div className="icon-container">
        <img src={icon} alt={name} />
      </div>
      <p>{name}</p>
      <S.Checkbox>
        {isCollected && <img src={checkIconSrc} alt="Черепок" />}
      </S.Checkbox>
    </S.Container>
  );
};

export default DollCard;
