import React, { useEffect, useState } from 'react';
import Notice from './Notice';

function Home(): JSX.Element {
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
