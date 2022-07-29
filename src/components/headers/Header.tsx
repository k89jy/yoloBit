import React from 'react';

import style from 'styled-components';

// 상단 고정, 그림자
const Positioner = style.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = style.div`
    background: black;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 해더의 내용
const HeaderContents = style.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
`;
const Spacer = style.div`
    flex-grow: 1;
`;
const GradientBorder = style.div`
    height: 3px;
`;
// 로고
const Logo = style.div`
    font-size: 1.4rem;
    letter-spacing: 2px;

    font-family: 'Rajdhani';
`;

const LanguageChange = style.img`

`;
function Header(children): JSX.Element {
    return (
        <>
            <Positioner>
                <WhiteBackground>
                    <HeaderContents>
                        <Logo>HEURM</Logo>
                        <Spacer />
                        {children}
                    </HeaderContents>
                </WhiteBackground>
                <GradientBorder />
            </Positioner>
        </>
    );
}
export default Header;
