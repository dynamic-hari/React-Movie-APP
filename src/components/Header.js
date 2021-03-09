import React from "react";
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="Navbar">
			<div className="middle_part">
            <Link to ="/">
                <h1>MovieCart</h1>
                </Link>
            </div>
		</div>
	);
}

export default Header;
