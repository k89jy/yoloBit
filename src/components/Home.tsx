import React, { useEffect, useState } from 'react';
import Notice from './Notice';
import { useTranslation } from 'react-i18next';
import { Languages, languages } from '../Locales/i18n';

function Home(): JSX.Element {
    const { t, i18n } = useTranslation();
    const handleChangeLanguage = (lang: Languages) => {
        i18n.changeLanguage(lang);
    };
    const [isOpenNotice, setOpenNotice] = useState<boolean>(true);

    const onClickCloseModal = () => {
        setOpenNotice(false);
    };
    return (
        <>
            {isOpenNotice ? (
                <Notice onClickCloseModal={onClickCloseModal}></Notice>
            ) : null}
        </>
    );
}
export default Home;
