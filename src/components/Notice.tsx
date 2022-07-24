import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: red;
    border: 2px solod white;
`;

function Notice() {
    function alert() {
        window.alert('hello world');
    }
    return (
        <div>
            <Button onClick={() => alert()}></Button>
        </div>
    );
}

export default Notice;
