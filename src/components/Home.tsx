import React, { useEffect } from 'react';
import Notice from './Notice';

function Home(): JSX.Element {
    useEffect(() => {
        return () => {
            <Notice></Notice>;
        };
    }, []);
    return null;
}
export default Home;
