import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { DLT, REMOVE, ADD } from '../../redux/actions/action';
import { useNavigate } from 'react-router';
import PageWidthNavbar from '../../components/PageWidthNavbar';
import { DETAIL } from '../../redux/actions/detailAction';

function WomenDetails() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const carts = useSelector((state) => state.cartreducer.carts);

    const send = (e) => {
        dispatch(ADD(e));
        // console.log(e)
    }

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const remove = (item) => {
        dispatch(REMOVE(item))
    }

    const handleOnClick = (e, obj) => {
        // e.stopPropagation();
        dispatch(DETAIL(obj))
        navigate('/details')
    }


    return (
        <PageWidthNavbar>
            <>
                {
                    carts.length ?
                        <div className="women-section container ">
                            <h1 className="text-center mb-4">Shopping Cart</h1>
                            {carts.map((details) => {
                                return (
                                    <>
                                        <div className="row mt-3 mb-5 iteamsdetails">
                                            <div className="women-carousel-section col-12 col-md-6">
                                                <Carousel showArrows={false} >
                                                    {
                                                        details.images.map((ele) =>
                                                            <div>
                                                                <img src={ele.url} />
                                                            </div>
                                                        )
                                                    }
                                                </Carousel>
                                            </div>
                                            <div className="women-text-section col-12 col-md-6">
                                                <div className="text-box">
                                                    <p className="sneaker">{details.titleName}</p>
                                                    <h1 className="cart-heading" onClick={(e) => handleOnClick(e, details)}>{details.heading}</h1>
                                                    <p>{details.paragraph}</p>
                                                    <div className="prize-section">
                                                        <div className='d-flex'>
                                                            <span className="prize">${details.price * details.qnty}</span>
                                                            <span className="percentage">{details.discount}</span>
                                                        </div>
                                                        <span className="me-5"><i className="fa-sharp fa-solid fa-trash" onClick={() => dlt(details.id)}></i></span>
                                                    </div>
                                                    <h6 className='old-prize'>${details.oldPrice * details.qnty}.00</h6>
                                                    <p className='mb-4'><strong>Quantity</strong> : {details.qnty}</p>
                                                    <div className='increment-button'>
                                                        <span className="decrement" onClick={details.qnty <= 1 ? () => dlt(details.id) : () => remove(details)}>-</span>
                                                        <span>{details.qnty}</span>
                                                        <span className="increment" onClick={() => send(details)}>+</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                            }
                        </div> :
                        <div className='cart-main-section'>
                            <img className='image' src='https://www.pngmart.com/files/7/Cart-PNG-Clipart.png' />
                            <h1 className="text-center">Your carts is empty</h1>
                        </div>
                }
            </>
        </PageWidthNavbar>
    )
}

export default WomenDetails
