import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className='h-[100vh] flex '>
        <Spinner className='m-auto' animation='border'></Spinner>
    </div>
  )
}

export default Loading