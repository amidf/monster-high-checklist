import React from "react";

import Main from "./components/Main";
import dolls from "./dolls";
import * as S from "./styled";

const App = () => {
  return (
    <main>
      <S.GlobalStyle />
      <Main dolls={dolls} />
    </main>
  );
};

export default App;
