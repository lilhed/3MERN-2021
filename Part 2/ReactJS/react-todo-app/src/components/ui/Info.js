import React from 'react';
import {MODE_NONE} from '../../services/mode';

export default function Info(props) {
    const message = props.mode === MODE_NONE;

    return <p className="info">{message}</p>;
}
