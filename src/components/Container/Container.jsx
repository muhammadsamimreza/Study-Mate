import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-6xl mx-auto px-2'>
            {children}
        </div>
    );
};

export default Container;