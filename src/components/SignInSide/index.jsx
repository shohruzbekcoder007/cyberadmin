import React, { useState } from 'react'
import './styles.css'

export default function SignInSide() {

    const [openLanguages, setOpenLanguages] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleOpenDropDown = (_) => {
        setOpenLanguages(prev => !prev)
    }

    const closeOpenDropDown = (event) => {
        if(event.target.className != "dropbtn"){
            setOpenLanguages(false)
        }
    }

  return (
    <div className="d-lg-flex half" onClick={closeOpenDropDown}>
    <div className="bg">
      <div>
        <div>
          <div className="image-container">
            <img src={require("./images/logo2.png")} alt=""/>
          </div>

        </div>
      </div>
    </div>
    <div className="contents">
      <div className="container">
        <div className="right-top col-md-12">
          <button>
            <i className="fas fa-user-circle"></i>
            <span>Adminlar uchun</span>
          </button>
          <div className="dropdown">
            <button onClick={handleOpenDropDown} className="dropbtn">Uz</button>
            <div id="myDropdown" className={`dropdown-content ${openLanguages?"show":""}`}>
              <a>Uz</a>
              <a>Ru</a>
              <a>En</a>
            </div>
          </div>
        </div>
        <div className="right-block">
          <div className="align-items-center justify-content-center col-md-8 right-form">
            <div className="col-md-12">
              <div>
                <h3>Kabinetga kirish</h3>
              </div>
              <form action="#" method="post">
                <div className={`form-group first mb-10 ${username?"field--not-empty" : ""}`}>
                  <label htmlFor="username">PINFL</label>
                  <input type="text" className="form-control" id="username" onChange={(event) => {setUsername(event.target.value)}}/>
                </div>
                <div className={`form-group last mb-3 ${password?"field--not-empty" : ""}`}>
                  <label htmlFor="password">Parol</label>
                  <input type="password" className="form-control" id="password" onChange={(event) => {setPassword(event.target.value)}}/>
                </div>
                <input type="submit" value="Kirish" className="btn btn-block btn-primary"/>
                <div className="submit-message">
                  <span>Sizda shaxsiy kabinetingiz yo'qmi? <a href="#">Ro'yhatdan o'tish</a></span>
                </div>
                <div className="notification-msg">
                  <span>Eslatma: Ushbu sahifadan Cyber Park joriy rezidentlari foydalanishlari mumkin</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
