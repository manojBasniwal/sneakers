import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import PageWidthNavbar from '../../components/PageWidthNavbar';

function DetailsPage() {

    const details = useSelector((state) => state.detailReducer.details);

    return (
        <PageWidthNavbar>
            <div className='container mt-3'>
                <h2 className='text-center'>Details page</h2>
                <section className='container mt-4'>
                    <div className="details-section">
                        <div className='details-img'>
                            <img src={details.image} alt="" />
                        </div>
                        <div className='details'>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p><strong>Shoes Company</strong> : {details.titleName}</p>
                                            <p><strong>Heading</strong> : {details.heading}</p>
                                            <p><strong>Price</strong> : ₹{details.price}</p>
                                            <p><strong>Address</strong> : {details.address}</p>
                                            <p><strong>Total</strong> : ₹{details.price * details.qnty}</p>
                                        </td>
                                        <td>
                                            <p><strong>Rating </strong><span className='star-rating'> {details.rating}★</span></p>
                                            <p><strong>Quantity</strong> : {details.qnty}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </section>
                <h2 className='mt-5'>Top reviews from India</h2>
                {
                    details.reviews.map((reviews)=> (
                        <div className='reviews-section'>
                            <div><i className="fa-solid fa-user me-2"></i> {reviews.name}</div>
                            <div><big className='five-rating me-2'> ★★★★★</big>{reviews.discription}</div>
                            <div>Reviewed in the United States on {reviews.date}</div>
                            <div>color : {reviews.color}</div>
                            <p>{reviews.paragraph}</p>
                            <p>Report</p>
                            </div>
                        )
                    )
                }
            </div>
        </PageWidthNavbar>
    )
}

export default DetailsPage
