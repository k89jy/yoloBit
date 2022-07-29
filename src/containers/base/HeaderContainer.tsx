import React, { Component } from 'react';
import Header from '../../components/headers/Header';
import { useTranslation } from 'react-i18next';
import { Languages } from '../../Locales/i18n';

function HeaderContainer(): JSX.Element {
    const { t, i18n } = useTranslation();
    const handleChangeLanguage = (lang: Languages) => {
        i18n.changeLanguage(lang);
    };

    return <Header>Hi</Header>;
}

export default HeaderContainer;
