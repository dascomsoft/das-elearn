import Link from 'next/link'
import './enroll.css'

function enroll() {
    return (
        <div>
            <div className="enroll-container">
                <div className="container">
                    <div className="enroll-content">
                        <div className="enroll-detail">
                            <h1 className='fw-bolder fs-1'>Transform Your Future with Elearn</h1>
                            <p>Embark on an extraordinary journey to become a world-class fullstack developer. Our cutting-edge curriculum and expert mentorship will propel you to the forefront of the tech industry.</p>
                            <div className='develop'>
                                <div className='develop-detail'>
                                    <div className='d-flex'>
                                        <svg fill="white" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.29,10.29l-2.78,2.78A2.09,2.09,0,0,0,12,13a2,2,0,0,0-2,2,2.09,2.09,0,0,0,.07.51l-.78.78a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.78-.78A2.09,2.09,0,0,0,12,17a2,2,0,0,0,2-2,2.09,2.09,0,0,0-.07-.51l2.78-2.78a1,1,0,0,0-1.42-1.42ZM12,4A10,10,0,0,0,2,14a9.91,9.91,0,0,0,1.69,5.56,1,1,0,0,0,1.66-1.12,8,8,0,1,1,13.3,0,1,1,0,0,0,.27,1.39,1,1,0,0,0,.56.17,1,1,0,0,0,.83-.44A9.91,9.91,0,0,0,22,14,10,10,0,0,0,12,4Z" /></svg>
                                        <div>
                                            <h6 className='fw-bolder mt-2 ms-2'>Accelerate Learning</h6>
                                            <p className='ms-2'>Master fullstack development in just 12 months</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='develop-detail'>
                                    <div className='d-flex'>
                                        <svg fill="white" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,14H20V7a3,3,0,0,0-3-3H7A3,3,0,0,0,4,7v7H3a1,1,0,0,0-1,1v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14ZM6,7A1,1,0,0,1,7,6H17a1,1,0,0,1,1,1v7H6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V16H20Z" /></svg>
                                        <div>
                                            <h6 className='fw-bolder mt-2 ms-2'>Hands-On projects</h6>
                                            <p className='ms-2'>Build a portfolio of real-world applications</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='develop-detail'>
                                    <div className='d-flex'>
                                        <svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="white" fill-rule="evenodd" d="M8.316 2.07a.75.75 0 00-.632 0l-7 3.25a.75.75 0 000 1.36l1.434.666A.746.746 0 002 7.75V11a.75.75 0 00.158.46L2.75 11l-.592.46.001.002.001.001.003.004.008.01a1.882 1.882 0 00.103.12c.068.076.165.178.292.299.254.24.63.555 1.132.866C4.706 13.388 6.217 14 8.25 14c2.037 0 3.44-.615 4.345-1.266a5.32 5.32 0 00.977-.902 3.916 3.916 0 00.322-.448l.007-.012.003-.004v-.002h.001c0-.001 0-.002-.655-.366l.655.365A.754.754 0 0014 11V7.75a.747.747 0 00-.118-.404l1.434-.666a.75.75 0 000-1.36l-7-3.25zM12.5 7.988L8.316 9.93a.75.75 0 01-.632 0L3.5 7.988v2.723a5.585 5.585 0 00.99.776c.804.5 2.043 1.013 3.76 1.013 1.713 0 2.81-.51 3.468-.984a3.812 3.812 0 00.782-.745V7.988zM8 8.423L2.781 6 8 3.577 13.219 6 8 8.423z" clip-rule="evenodd" /></svg>
                                        <div>
                                            <h6 className='fw-bolder mt-2 ms-2' >Expert Mentorship</h6>
                                            <p className='ms-2'>Learn from industry professionals</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='develop-detail'>
                                    <div className='d-flex'>
                                        <svg fill="white" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h6a1.19,1.19,0,0,0,.32-.05L20,12.39Zm0-7.72L14.84,12H9.16L4,10.28V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z" /></svg>
                                        <div>
                                            <h6 className='fw-bolder mt-2 ms-2'>Career Support</h6>
                                            <p className='ms-2'>Get help landing your dream tech job</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form>
                            <input type="text" placeholder='First Name' />
                            <input type="text" placeholder='Last Name' />
                            <input type="text" placeholder='Email Address' />
                            <input type="text" placeholder='Password' />
                            <input type="text" placeholder='Confirmed password' />
                            <div className='bg-secondary text-white p-3'>
                                <h6 className='fw-bolder'>Free Registration</h6>
                                <p>The registration on Elearn is is totally  free unlocks your journey. After registration, complete the entrance exam to access the full program and begin your transformation.</p>
                            </div>
                            <input type="button" value="Launch Your Tech career" id='btn' />
                            <div className='d-flex align-items-center'>
                                <span>Already register?</span><span><a href="/sign" className='fw-bolder link'>Sign in Here</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="notice-section">
                <div className="notice-content">
                    <div className="container text-white">
                        <h3 className='uppercase fw-bolder'>Unlimited access to educational <br />materials and lectures for subscribers</h3>
                        <Link href='/pricing' className='btn btn-warning btn-lg text-dark mt-3'>SEE PRICING PLANS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default enroll