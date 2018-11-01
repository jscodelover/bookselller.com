import React from 'react';

import './BackDrop.scss';

export default function backdrop(props){
    return <div className="Backdrop" onClick={props.clicked}></div>
//    return <div className="Backdrop"></div>
}
