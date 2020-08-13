import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider';

import RouteHandler from './state/route/RouteHandler';
import GlobalStyle from './theme/GlobalStyle';

const App = () => {
  return (
    <BootstrapProvider>
      <GlobalStyle />
      <RouteHandler />
    </BootstrapProvider>
  );
};
export default App;
