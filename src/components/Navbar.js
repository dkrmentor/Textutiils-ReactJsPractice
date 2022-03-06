import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mymode} bg-${props.mymode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">{props.menu1}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.menu2}</Link>
              </li>

            </ul>
            {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}



            <div onClick={() => { props.togglePet("danger") }} className="bg-danger p-2 mx-2"> </div>
            <div onClick={() => { props.togglePet("success") }} className="bg-success p-2 mx-2"> </div>
            <div onClick={() => { props.togglePet("warning") }} className="bg-warning p-2 mx-2"> </div>
            <div onClick={() => { props.togglePet("primary") }} className="bg-primary p-2 mx-2"> </div>
            {/* OR */}
            {/* <div onClick={props.colorRed} className="bg-danger p-2 mx-2"> </div>
        <div onClick={props.colorGreen} className="bg-success p-2 mx-2"> </div>
        <div onClick={props.colorYellow} className="bg-warning p-2 mx-2"> </div>
        <div onClick={props.colorBlue} className="bg-primary p-2 mx-2"> </div> */}



            <div className={`form-check form-switch text-${props.mymode === 'light' ? 'dark' : 'light'} `}>
              <input onChange={props.mytoggleMode} className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mymode === 'light' ? 'Dark' : 'Light'} Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}


///lets set only string datatype will be send in below props
Navbar.propTypes = {

  //if no default prop is set and no prop is passed is required will give error
  title: PropTypes.string.isRequired,
  menu1: PropTypes.string,
  menu2: PropTypes.string,

}

///lets set default props , if no value passed
Navbar.defaultProps = {
  title: 'set title here',
  menu1: 'set menu 1 here',
  menu2: 'set menu 2 here',

}