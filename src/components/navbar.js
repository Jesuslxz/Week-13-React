import React from "react";


function Navbar (){
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a href="../public/index.html" className="navbar-brand">Week 13 React App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target= "#NavbarNav" aria-controls="NavbarNav" aria-expanded="false"
            aria-label="Togglenavigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="NavbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="../public/index.html" aria-current="page" className="nav-link active">link 1</a>
                    </li>
                    <li className="nav-item">
                        <a href="../public/index.html" className="nav-link">link 2</a>
                    </li>
                    <li className="nav-item">
                        <a href="../public/index.html" className="nav-link">link 3</a>
                    </li>
                    <li className="nav-item">
                        <a href="../public/index.html" className="nav-link">link 4</a>
                    </li>
                </ul>
            </div>
    </div>
   </nav>);
}
 export default Navbar;