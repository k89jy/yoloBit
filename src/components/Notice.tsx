import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Warning = styled.img`
    width: 100%;
`;
const WarningWrapper = styled.section`
    position: fixed;
    width: 400px;
    top: 50%;
    left: 50%;
    margin: -240px 0 0 -200px;
    padding: 0;
    background: #fff;
    border: 0;
    display: block;
`;
const WarningLink = styled(Link)``;

function Notice(): JSX.Element {
    const upBitWarningUrl = '/service_center/notice?id=2677';

    return (
        <>
            <WarningWrapper>
                <WarningLink to={upBitWarningUrl}>
                    <Warning src="https://static.upbit.com/guide/risk_warning_pc.png" />
                </WarningLink>
            </WarningWrapper>
        </>
    );
}

export default Notice;
