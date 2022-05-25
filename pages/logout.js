import React from 'react';
import {AppContainer} from '../src/components/AppContainerComponent';
import {AppButton} from '../src/components/AppButtonComponent';

const Logout = props => {
    return (
          <AppContainer>
              <AppButton title="Sair" />
          </AppContainer>
      );
  };
  
  export default Logout;