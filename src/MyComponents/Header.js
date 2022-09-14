import React from 'react'
import PropTypes from 'prop-types';

export default function header(props) {
  let heading = {
    fontFamily: 'cursive',
    fontWeight: '600',
    cursor: 'pointer',
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h2 className="navbar-brand" style={heading}>{props.title}</h2>
       
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search your Task..." aria-label="Search" />
            <button className="btn btn-outline-light" type="submit"><span role="img" aria-label="search">🔍</span></button>
          </form> */}
        </div>
    </nav>
  )
}

Headers.defaultProps = {
  title: "Your Title Here",
  searchBar: true,
}

Headers.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}