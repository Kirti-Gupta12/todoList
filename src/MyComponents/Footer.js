import React from 'react'

const Footer = () => {

  let footerStyle = {
    // position: "relative",
    // top:"70vh",
    // // minHeight: "100%",
    // width:"100%"
    
  }

  return (
    <footer className='bg-dark text-light mt-5 pb-1' style={footerStyle}>
      <p className='text-center p-2'>&copy;MyTodoList.com.All rights reserved</p>
    </footer>
  )
}

export default Footer
