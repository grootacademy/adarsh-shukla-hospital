import React from 'react'
import { useSelector } from 'react-redux'

function Result() {

    const store = useSelector(e => e)

    return (
        <div className='btn btn-info btn-lg m-4'>Result: {store}</div>
    )
}

export default Result