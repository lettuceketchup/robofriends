import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid aqua', height: '75vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll;