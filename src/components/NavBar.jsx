import React from 'react';
import "./all.css"
function NavBar(props) {
    return (
        <>
            <nav class="navbar ">
                <div class="container">
                    <a class="navbar-brand" href="#">
                    <h4 className='text-info text-blue' style={{display:'inline-block'}}><span className='text-primary'>Vehicles For Rent</span></h4>
                        <img  src="https://static.thenounproject.com/png/11178-200.png" alt="" width="100" />
                        
                    </a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;