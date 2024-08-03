import Link from 'next/link'
import './sign.css'

function sign() {
    return (
        <div>
            <div className="sign-container">
                <div className="container">
                    <div className="sign-content">
                        <div className="sign-detail">
                            <h1 className='fw-bolder display-5'>Welcome Back to Your Coding Journey</h1>
                            <p>Resume your path to becoming a Developer master. Your next breakthrough is just a login away!</p>
                            <div className='develop'>
                                <div className='sign-detail d-flex'>
                                <svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="white" fill-rule="evenodd" d="M8.316 2.07a.75.75 0 00-.632 0l-7 3.25a.75.75 0 000 1.36l1.434.666A.746.746 0 002 7.75V11a.75.75 0 00.158.46L2.75 11l-.592.46.001.002.001.001.003.004.008.01a1.882 1.882 0 00.103.12c.068.076.165.178.292.299.254.24.63.555 1.132.866C4.706 13.388 6.217 14 8.25 14c2.037 0 3.44-.615 4.345-1.266a5.32 5.32 0 00.977-.902 3.916 3.916 0 00.322-.448l.007-.012.003-.004v-.002h.001c0-.001 0-.002-.655-.366l.655.365A.754.754 0 0014 11V7.75a.747.747 0 00-.118-.404l1.434-.666a.75.75 0 000-1.36l-7-3.25zM12.5 7.988L8.316 9.93a.75.75 0 01-.632 0L3.5 7.988v2.723a5.585 5.585 0 00.99.776c.804.5 2.043 1.013 3.76 1.013 1.713 0 2.81-.51 3.468-.984a3.812 3.812 0 00.782-.745V7.988zM8 8.423L2.781 6 8 3.577 13.219 6 8 8.423z" clip-rule="evenodd"/></svg>
                                    <h6 className='fw-bolder mt-2 ms-2'>Personalized Learning Path</h6>
                                </div>
                                <div className='sign-detail d-flex'>
                                     <svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"/></svg>
                                    <h6 className='fw-bolder mt-2 ms-2'>Interactive Coding Challenges</h6>
                                </div>
                                <div className='sign-detail d-flex'>
                                <svg fill="white" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.29,10.29l-2.78,2.78A2.09,2.09,0,0,0,12,13a2,2,0,0,0-2,2,2.09,2.09,0,0,0,.07.51l-.78.78a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.78-.78A2.09,2.09,0,0,0,12,17a2,2,0,0,0,2-2,2.09,2.09,0,0,0-.07-.51l2.78-2.78a1,1,0,0,0-1.42-1.42ZM12,4A10,10,0,0,0,2,14a9.91,9.91,0,0,0,1.69,5.56,1,1,0,0,0,1.66-1.12,8,8,0,1,1,13.3,0,1,1,0,0,0,.27,1.39,1,1,0,0,0,.56.17,1,1,0,0,0,.83-.44A9.91,9.91,0,0,0,22,14,10,10,0,0,0,12,4Z"/></svg>
                                    <h6 className='fw-bolder mt-2 ms-2' >Real-world Project Experience</h6>
                                </div>
                                <div className='sign-detail d-flex'>
                                    <svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><polyline points="11.25 1.75,2.75 1.75,2.75 13.25,5.25 13.25"/><polyline points="8.75 9.75,8.25 14.25,10.50 13.25,12.75 14.25,12.25 9.75"/><circle cx="10.5" cy="7.5" r="2.75"/></svg>
                                    <h6 className='fw-bolder ms-2 mt-2'>Industry-recognized Certifications</h6>
                                </div>
                            </div>
                        </div>
                        <form>
                            <input type="text" placeholder='Email Address' />
                            <input type="text" placeholder='Password' />
                            <div className='bg-secondary text-white p-3'>
                                <h6 className='fw-bolder'>Hello Newbies!!</h6>
                                <p>The registration on Elearn is is totally so feel free and  unlocks your journey by clicking the link below the lunch button.</p>
                            </div>
                            <input type="button" value="Launch Your Tech career" id='btn'/>
                            <div className='d-flex align-items-center'>
                              <span>New to our coding community?</span><span><a href="/enroll" className='link fw-bolder'>Register Here</a></span>
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

export default sign