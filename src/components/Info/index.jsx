import React from "react";

import * as S from "./styled";

const Info = ({ dolls }) => {
  const collectedDollsСount = dolls.filter((doll) => doll.isCollected).length;
  const [sticky, setSticky] = React.useState(false);
  const containerEl = React.useRef(null);

  React.useEffect(() => {
    const handler = () => {
      console.log(window.pageYOffset, containerEl.current.offsetTop);

      if (window.pageYOffset >= containerEl.current.offsetTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    handler();

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [setSticky]);

  return (
    <S.Container ref={containerEl} sticky={sticky ? 1 : 0}>
      <p>
        Собрано кукл: {collectedDollsСount} из {dolls.length}
      </p>

      <p>Прогресс</p>
      <S.ProgressBar progress={(collectedDollsСount / dolls.length) * 100}>
        <div className="line">
          <span>
            {collectedDollsСount}/{dolls.length}
          </span>
        </div>
      </S.ProgressBar>
    </S.Container>
  );
};

export default Info;
