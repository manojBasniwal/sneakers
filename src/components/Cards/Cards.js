// import { Send } from '@mui/icons-material';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {ADD} from '../../redux/actions/action';
import { useNavigate } from 'react-router';
import { DETAIL } from '../../redux/actions/detailAction';

function Cards({details}) {
    // console.warn('details',details)
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const send = (e)=>{
        dispatch(ADD(details))
    }

    const handleOnClick = (e, obj) => {
        e.stopPropagation();
        dispatch(DETAIL(obj))
        navigate('/details')

    }

    return (
        <Card className='mx-2 mt-4 card_style '>
            <Card.Img variant="top" src={details.image} className='mt-3 card-img' onClick={(e) => handleOnClick(e, details)} />
            <Card.Body>
                <Card.Title>{details.titleName}</Card.Title>
                <Card.Text>
                    price : ₹{details.price}
                </Card.Text>
                <div className='button_div d-flex justify-content-center'>
                    <Button variant="primary" onClick={send} className="col-lg-12">Add to cart</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Cards
