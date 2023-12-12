import React from 'react';
import Button from 'react-bootstrap/Button';

const ResetButton = () => {
    const handleReset = () => {
        window.location.href = "/";
    };

    return (
        <Button onClick={handleReset} variant="primary">Finalizar Compra</Button>
    );
};

export default ResetButton;
