import Image from 'next/image';
import plan from '../../images/niceback.png'
import re from '../../images/uno.jpeg'
import re1 from '../../images/uno1.jpg'
import re2 from '../../images/ab2.jpg'
import re3 from '../../images/bip.webp'

import './pricing.css'
import Link from 'next/link';

function pricing() {
  return (
    <div>
      <div className="price-container">
        <div className="container">
          <div className="price-content">
            <div className="price-detail">
              <h2 className='display-5 fw-bolder'>Choose The Plan That is Right For You</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore hic voluptatem, sit harum illum.</p>
              <Link href="/contact" className='btn'>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe-container">
        <div className="container">
          <div className='sub-header'>
            <h1>Pricing plans for subscribers</h1>
            <h3>Invest in Your Future</h3>
            <p>Choose the plan that fits your goals and budget</p>
          </div>
          <div className="subscribe-content mt-3">
            <div className="subscribe-detail">
              <div className='bg-1 text-white p-3 px-5'>
                <h3 className='py-2'>Basic Plan</h3>
                <h6><span className='fw-bolder fs-3'>$100</span>/Month</h6>
              </div>
              <div className='px-5'>
                <p>Quam adipiscing vitae proin</p>
                <p>Quam adipiscing vitae proin</p>
                <p>Quam adipiscing vitae proin</p>
                <p>Quam adipiscing vitae proin</p>
                <p>Massa ultricies mi quis hendrerit</p>
                <Link href="/enroll" className='btn sub-button'>Get This Plan</Link>
              </div>
            </div>
            <div className="subscribe-detail">
              <div className='bg-2 text-white p-3 px-5'>
                <h3 className='py-2'>Corporate Plan</h3>
                <h6><span className='fw-bolder fs-3'>$150</span>/Month</h6>
              </div>
              <div className='px-5'>
                <p>Quam adipiscing vitae proin</p>
                <p>Quam adipiscing vitae proin</p>
                <p>Quam adipiscing vitae proin</p>
                <p>Quam adipiscing vitae proin</p>
                <p>Massa ultricies mi quis hendrerit</p>
                <Link href="/enroll" className='btn sub-button'>Get This Plan</Link>
              </div>
            </div>
            <div className="subscribe-detail">
              <div className='bg-3 text-white p-3 px-5'>
                <h3 className='py-2'>Business Plan</h3>
                <h6><span className='fw-bolder fs-3'>$130</span>/Month</h6>
              </div>
              <div className='px-5'>
                <p>Quam adipiscing vitae proin</p>
                <p>Quam adipiscing vitae proin</p>
                <p>Quam adipiscing vitae proin</p>
                <p>Quam adipiscing vitae proin</p>
                <p>Massa ultricies mi quis hendrerit</p>
                <Link href="/enroll" className='btn sub-button'>Get This Plan</Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="about-review">
        <div className="container">
          <h5 className="text-warning fw-bolder">Students Feedback</h5>
          <h3 className="mb-5 fw-bolder">TESTIMONIALS</h3>

          <div className="about-review-container">

            <div className="about-review-detail">
              <div className="d-flex">
                <Image src={re1} alt="pic" id='pic' />
                <div className="about-name ms-3">
                  <h4 className='fw-bolder'>Johanna Kim</h4>
                  <p className='fw-bolder text-danger'>Mobile Developer</p>
                </div>
              </div>

              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>

              <div className="about-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi a beatae deleniti tempore, ipsum reiciendis.</p>
              </div>
            </div>
            <div className="about-review-detail" id="move">
              <div className="d-flex">
                <Image src={re} alt="pic" id='pic' />
                <div className="about-name ms-3">
                  <h4>Elvis Georges</h4>
                  <p className='fw-bolder text-danger'>Full-Stack Developer</p>
                </div>
              </div>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <div className="about-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi a beatae deleniti tempore, ipsum reiciendis.</p>
              </div>
            </div>
            <div className="about-review-detail" id="move1">
              <div className="d-flex">
                <Image src={re2} alt="pic" id='pic' />
                <div className="about-name ms-3">
                  <h2>Emilia Angel</h2>
                  <p className='fw-bolder text-danger'>Front-End Developer</p>
                </div>
              </div>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <div className="about-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi a beatae deleniti tempore, ipsum reiciendis.</p>
              </div>
            </div>
            <div className="about-review-detail" id="move2">
              <div className="d-flex">
                <Image src={re3} alt="pic" id='pic' />
                <div className="about-name ms-3">
                  <h4>Miki Merisson</h4>
                  <p className='fw-bolder text-danger'>Web-Designer</p>
                </div>
              </div>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <span>
                <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                  <title>star</title>
                  <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                </svg>
              </span>
              <div className="about-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi a beatae deleniti tempore, ipsum reiciendis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pricing