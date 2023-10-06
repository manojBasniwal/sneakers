import React from 'react'
import PageWidthNavbar from '../../components/PageWidthNavbar';
import Cards from '../../components/Cards';
import {data} from "./data"

function Women() {
  return (
      <PageWidthNavbar>
        <div className="container">
            <h1 className='text-center mt-3'>Women Collection</h1>
            <div className='row d-flex justify-content-center align-items-center'>
                {
                    data.map((detail) => {
                        return (<Cards details={detail}/>)
                    })
                }
            </div>
        </div>
      </PageWidthNavbar>
  )
}

export default Women
