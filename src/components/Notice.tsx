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
    z-index: 10000;
`;
const WarningLink = styled(Link)``;
const WarningBottomBorder = styled.div`
    height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    color: #333;
`;
const Warning24HourClose = styled.span``;
const WarningTodayNotSeen = styled.span`
    float: right;
`;

function Notice({ onClickCloseModal }): JSX.Element {
    const upBitWarningUrl = '/service_center/notice?id=2677';

    return (
        <>
            <WarningWrapper>
                <WarningLink to={upBitWarningUrl}>
                    <Warning src="https://static.upbit.com/guide/risk_warning_pc.png" />
                </WarningLink>
                <WarningBottomBorder>
                    <Warning24HourClose>
                        오늘 하루동안 보지않기
                    </Warning24HourClose>
                    <WarningTodayNotSeen onClick={onClickCloseModal}>
                        닫기
                    </WarningTodayNotSeen>
                </WarningBottomBorder>
            </WarningWrapper>
        </>
    );
}

export default Notice;
