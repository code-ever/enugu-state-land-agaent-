// src/components/Loading.js
import React from 'react';

const Loading = () => {
    return (
        <div style={styles.container}>
            <div style={styles.text}>ENUG LAND AGENT</div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#4CAF50',
        letterSpacing: '0.1em',
        animation: 'fadeIn 2s ease-in-out infinite',
    },
};

export default Loading;
