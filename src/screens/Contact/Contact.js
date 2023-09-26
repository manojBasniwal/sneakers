import React from 'react';
import PageWidthNavbar from '../../components/PageWidthNavbar';

function Contact() {
    return (
        <PageWidthNavbar>
            <div className='container'>
                <h1 className='text-center mb-3'>amazon</h1>
                <div className='contact-form'>
                    <form>
                        <h2 className='mb-3'>Sign in</h2>
                        <div className='form-group mb-3'>
                            <label for="name">Name</label>
                            <input type="input" className="form-control" id="name" required />
                        </div>
                        <div className="form-group mb-3">
                            <label for="pwd">Password</label>
                            <input type="password" className="form-control" id="pwd" required/>
                        </div>
                        <button type='submit' className='btn mb-4'>Sign in</button>
                    </form>
                    <small>By continuing you agree to Amazon's<a href='#'> Conditions of Use</a> and <a href='#'>Privacy Notice.</a>.</small>
                </div>
            </div>
        </PageWidthNavbar>
    )
}

export default Contact
