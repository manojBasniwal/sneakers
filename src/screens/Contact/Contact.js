import React from 'react';
import PageWidthNavbar from '../../components/PageWidthNavbar';

function Contact() {
    return (
        <PageWidthNavbar>
            <div className='container contact-section'>
                <h1 className='text-center pt-5'>CONTACT</h1>
                <div className='row pt-5 pb-5'>
                    <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
                        <div className='my-contact-section'>
                            <div className='address mb-5'>
                                <p className='mb-1'>Address</p>
                                <strong><i className="fa-solid fa-location-dot me-2"></i>23 Cornelia St.</strong>
                            </div>
                            <div className='phone mb-5'>
                                <p className='mb-1'>Phone</p>
                                <strong>+89 9254 321 256</strong>
                            </div>
                            <div className='email'>
                                <p className='mb-1'>Email</p>
                                <strong>hello@gmail.com</strong>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='contact-form-section'>
                            <form>
                                <div className="form-group mb-4">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control mt-1" id="name" required />
                                </div>
                                <div className="form-group mb-4">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control mt-1" id="email" required/>
                                </div>
                                <div className="form-group mb-4">
                                    <label for="number">Phone</label>
                                    <input type="number" className="form-control mt-1" id="number" required/>
                                </div>
                                <div class="form-group mb-4">
                                    <label for="comment">Comment:</label>
                                    <textarea class="form-control mt-1" rows="3" id="comment"></textarea>
                                </div>
                                <button type="submit" className="btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PageWidthNavbar>
    )
}

export default Contact
