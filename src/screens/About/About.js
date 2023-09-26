import React from 'react'
import PageWidthNavbar from '../../components/PageWidthNavbar';

function About() {
    return (
        <PageWidthNavbar>
            <div className='about-section'>
                <div className='container'>
                    <div className='row about-self'>
                        <div className='c0l-12 col-md-3'>
                            <h6>Who We Are</h6>
                        </div>
                        <div className='c0l-12 col-md-9 about-paragraph'>
                            <p>Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo, Alexa, Just Walk Out technology, Amazon Studios, and The Climate Pledge are some of the things pioneered by Amazon.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='d-flex col-12 col-md-6 col-lg-3'>
                            <div className='leadership-principles'>
                                <h4 className='card-heading'>Amazon Leadership Principles</h4>
                                <p className='card-paragraph'>Our Leandership Principal are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day.</p>
                                <button className='btn'>Learn more<i className="fa-solid fa-arrow-right ms-4"></i></button>
                            </div>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-3'>
                            <div className='leadership-principles'>
                                <h4 className='card-heading'>Our position </h4>
                                <p className='card-paragraph'>While our positions are carefully considered and deeply held, there is much room for healthy debate and deffering opinions.We hope being clear about our positions is helpful.</p>
                                <button className='btn'>Learn more<i className="fa-solid fa-arrow-right ms-4"></i></button>
                            </div>
                        </div>
                        <div className='d-flex col-12 col-md-6 col-lg-3'>
                            <div className='leadership-principles'>
                                <h4 className='card-heading'>public policy</h4>
                                <p className='card-paragraph'>We engage with policymakers on a wide range of issues that are important to our customers and employees. Learn more about our views on current policy issues.</p>
                                <button className='btn'>Learn more<i className="fa-solid fa-arrow-right ms-4"></i></button>
                            </div>
                        </div>
                        <div className='d-flex col-12 col-md-6 col-lg-3'>
                            <div className='leadership-principles'>
                                <h4 className='card-heading'>Awards and Recognition</h4>
                                <p className='card-paragraph'>We are honored to be recognized for the work we do on behalf of our customers, employees, and communities every day.</p>
                                <button className='btn'>Learn more<i className="fa-solid fa-arrow-right ms-4"></i></button>
                            </div>
                        </div>
                    </div>
                    {/* <div className='img-section'>
                        <img src={'https://assets.aboutamazon.com/dims4/default/8be3d8d/2147483647/strip/true/crop/2640x1486+0+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fbe%2F7c%2F3e9ea09d4abea91055bd91f5aefa%2Fwho-we-are.jpg'}/>
                    </div> */}
                </div>
                <div className='img-section'>
                        <img src={'https://assets.aboutamazon.com/dims4/default/8be3d8d/2147483647/strip/true/crop/2640x1486+0+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fbe%2F7c%2F3e9ea09d4abea91055bd91f5aefa%2Fwho-we-are.jpg'}/>
                    </div>
            </div>
        </PageWidthNavbar>
    )
}

export default About
