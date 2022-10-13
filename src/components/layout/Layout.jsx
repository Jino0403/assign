// 페이지를 제작하는데 들어가는 총괄적인 뼈대

import React from 'react';
import './style.css';

function Layout (props) {
    return (
        <div className="Layout">
            {props.children}
        </div>
    )

}

export default Layout;