import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: red;
    border: 2px solod white;
`;

function Notice(): JSX.Element {
    function alert() {
        window.alert('hello world');
    }
    return (
        <>
            <Button onClick={() => alert()}></Button>
        </>
    );
}

export default Notice;
