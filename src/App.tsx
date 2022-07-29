import React from 'react';
import HeaderContainer from './containers/base/HeaderContainer';
import Home from './components/Home';
import './Locales/i18n';

function App(): JSX.Element {
    return (
        <>
            <HeaderContainer />
            <Home />
        </>
    );
}

export default App;
