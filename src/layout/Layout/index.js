import React from 'react';
import {Header} from '../';

const layout = (props) => (
    <div>
        <Header />
        {props.children}
    </div>
);

export default layout;
