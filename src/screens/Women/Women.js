import React from 'react'
import PageWidthNavbar from '../../components/PageWidthNavbar';
import Cards from '../../components/Cards';
// import WomenDetails from '../../components/WomenDetails';
import {data} from "./data"

function Women() {
  return (
      <PageWidthNavbar>
        <div className="container">
            <h1 className='text-center'>Women Collection</h1>
            <div className='row d-flex justify-content-center align-items-center'>
                {
                    data.map((detail) => {
                        return (<Cards details={detail}/>)
                    })
                }
            </div>
        </div>
        {/* <WomenDetails /> */}
      </PageWidthNavbar>
  )
}

export default Women
