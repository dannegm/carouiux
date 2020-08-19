import React from 'react';

import RouteHandler from './state/route/RouteHandler';
import GlobalStyle from './utils/theme/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouteHandler />
    </>
  );
};
export default App;
