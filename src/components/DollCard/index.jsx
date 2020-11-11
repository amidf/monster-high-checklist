import React from "react";
import { Fade } from "react-awesome-reveal";

import checkIconSrc from "../../images/check-icon.jpg";

import * as S from "./styled";

const DollCard = ({ id, issueDate, name, icon, isCollected }) => {
  return (
    <Fade triggerOnce>
      <S.Container>
        <div className="icon-container">
          <img src={icon} alt={name} />
        </div>
        <p>{name}</p>
        <S.Checkbox>
          {isCollected && <img src={checkIconSrc} alt="Черепок" />}
        </S.Checkbox>
      </S.Container>
    </Fade>
  );
};

export default DollCard;
