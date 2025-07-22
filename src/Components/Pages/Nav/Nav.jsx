import React from 'react'
import './NavStyle.css'

function Nav() {
  return (
    <div className="nav">
        <div className="logo-area">
            <img src="Sarel_Sibuyi_New_Site/Assets/Images/SN-logo.svg" alt="logo" />
        </div>


        <div className="communcations">
            <div className="communication">
                <a href="https://www.linkedin.com/in/Sarel-N-Sibuyi" target="_blank" rel="noopener noreferrer">
                    {/* <img src="" alt="linkedin" /> */}
                    <img src="Sarel_Sibuyi_New_Site/Assets/Icons/Linkedin.svg" alt="linkedin" />
                </a>
            </div>
            <div className="communication">
                <a href="https://wa.link/9mmoee" target="_blank" rel="noopener noreferrer">
                    {/* <img src="" alt="whatsapp" /> */}
                    <img  src="Sarel_Sibuyi_New_Site/Assets/Icons/Whatsapp.svg" alt="whatsapp"  />
                </a>
            </div>
            <div className="communication">
                <a href="mailto:hiuwie.sibuyi@gmail.com" target="_blank" rel="noopener noreferrer">
                    {/* <img src="" alt="email" /> */}
                    <img  src="Sarel_Sibuyi_New_Site/Assets/Icons/Mail-Gold.svg" alt="email" />
                </a>
            </div>
        </div>

    </div>
  )
}

export default Nav