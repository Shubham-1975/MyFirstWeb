import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <>
    <div className='div '>
   <div className='bg-secondary h-100 w-100 fs-1 d-inline-block p-5 ' style={{height:"100%"}}>
   <h1 className='fs-1 fw-bold'>404 Error page</h1>
   <h4 className='fs-3'>Sorry, this page doesn't exit</h4>
   <NavLink to="/" style={{textDecoration:"none"}} className="fs-3 text-info fw-bold">Go Back</NavLink>
   </div>
   </div>
    </>
  )
}

export default Error
