import React from 'react'
import './newnav.css'
function Newnav(){
    return(
        <div>
            <div className='newnav-main-container'>
                <div className='newnav-sub-container'>
                    <h1 className='icon-gradient'>Clever</h1>
                    <div className='nav-content'>
                        <p className='p-newnav'>Home</p>
                        <p className='p-newnav'>Product</p>
                        <p className='p-newnav'>Features</p>
                        <p className='p-newnav'>Pricing</p>
                    </div>
                    <div className='register-container'>
                        <p className='p-newnav'>sign in</p>
                        <p className='btn btn-primary pt-1 pb-1 ps-4 pe-4'>Register</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Newnav