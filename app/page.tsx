
import './page.css';
import Image from 'next/image';
import Link from 'next/link';
import bip from '../images/bip.webp';
import stu1 from '../images/stu1.jpg'
import stu2 from '../images/stu2.jpg'
import css from '../images/css.png'
import html from '../images/html.png'
import learn from '../images/01.webp'







export default function Home() {
  return (
    <main>
      <div className='home-wrapper'>
        <div className="container">
          <div className="home-content text-white">
            <h2 className='display-4 fw-bolder'>Welcome To <span className='text-warning'>E</span>learn School</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos omnis rem accusantium necessitatibus <br /> similique assumenda quasi veritatis nobis consequuntur?</p>
            <Link href="/courses" className='btn btn-warning text-white btn-lg'>Learn more</Link>
            <Link href="/contact" className='btn btn-danger ms-2 text-white btn-lg'>Contact Us</Link>
          </div>
        </div>

        <div className="home-description">
          <div className="container">
            <div className="home-section">
              <div className="home-detail text-center">
                <svg className='pic' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h4 className='py-2 fw-bolder'>Get A Certificate</h4>
                <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem tempus rhoncus sit tortor.</p>
              </div>
              <div className="home-detail text-center">
                <svg className='pic' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h4 className='py-2 fw-bolder'>All Over The World</h4>
                <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem tempus rhoncus sit tortor.</p>
              </div>
              <div className="home-detail text-center">
                <svg className='pic' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h4 className='py-2 fw-bolder'>Live Online Lectures</h4>
                <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem tempus rhoncus sit tortor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="join-container">
        <h1 className='fw-bolder display-5 text-center mb-5 text-white'>Join a Thriving Tech Ecosystem</h1>
        <div className="container">
          <div className="join-content">
            <div className='develop'>
              <div className='develop-detail'>
                <div className='d-flex'>
                  <svg className='icon-image' fill="orange" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,14H20V7a3,3,0,0,0-3-3H7A3,3,0,0,0,4,7v7H3a1,1,0,0,0-1,1v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14ZM6,7A1,1,0,0,1,7,6H17a1,1,0,0,1,1,1v7H6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V16H20Z" /></svg>
                  <h3 className='fw-bolder ms-2 mt-2'>Global Tech Network</h3>
                </div>
                <div>
                  <p className='mt-3'>Connect with a worldwide community of developers, mentors, and industry leaders. Collaborate on projects, share insights, and build lasting professional relationships.</p>
                </div>
              </div>
              <div className='develop-detail'>
                <div className='d-flex'>
                  <svg className='icon-image' fill="orange" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,14H20V7a3,3,0,0,0-3-3H7A3,3,0,0,0,4,7v7H3a1,1,0,0,0-1,1v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14ZM6,7A1,1,0,0,1,7,6H17a1,1,0,0,1,1,1v7H6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V16H20Z" /></svg>
                  <h3 className='fw-bolder mt-2 ms-2'>Real-World Project Incubator</h3>
                </div>
                <div>
                  <p className='mt-3'>Work on cutting-edge projects that solve actual industry problems. Build a portfolio that showcases your ability to create impactful, scalable solutions.</p>
                </div>

              </div>
              <div className='develop-detail'>
                <div className='d-flex'>
                  <svg className='icon-image' width="50px" height="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="yellow"><path fill="yellow" fill-rule="evenodd" d="M8.316 2.07a.75.75 0 00-.632 0l-7 3.25a.75.75 0 000 1.36l1.434.666A.746.746 0 002 7.75V11a.75.75 0 00.158.46L2.75 11l-.592.46.001.002.001.001.003.004.008.01a1.882 1.882 0 00.103.12c.068.076.165.178.292.299.254.24.63.555 1.132.866C4.706 13.388 6.217 14 8.25 14c2.037 0 3.44-.615 4.345-1.266a5.32 5.32 0 00.977-.902 3.916 3.916 0 00.322-.448l.007-.012.003-.004v-.002h.001c0-.001 0-.002-.655-.366l.655.365A.754.754 0 0014 11V7.75a.747.747 0 00-.118-.404l1.434-.666a.75.75 0 000-1.36l-7-3.25zM12.5 7.988L8.316 9.93a.75.75 0 01-.632 0L3.5 7.988v2.723a5.585 5.585 0 00.99.776c.804.5 2.043 1.013 3.76 1.013 1.713 0 2.81-.51 3.468-.984a3.812 3.812 0 00.782-.745V7.988zM8 8.423L2.781 6 8 3.577 13.219 6 8 8.423z" clip-rule="evenodd" /></svg>
                  <h3 className='fw-bolder mt-2 ms-2' >Mentorship Masterclass</h3>
                </div>
                <div>
                  <p className='mt-3'>Receive personalized guidance from tech veterans. Our mentors include Silicon Valley engineers, successful startup founders, and respected open-source contributors.</p>
                </div>

              </div>
              <div className='develop-detail'>
                <div className='d-flex'>
                  <svg className='icon-image' fill="skyblue" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h6a1.19,1.19,0,0,0,.32-.05L20,12.39Zm0-7.72L14.84,12H9.16L4,10.28V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z" /></svg>
                  <h3 className='fw-bolder mt-2 ms-2'>Career Launchpad</h3>
                </div>
                <div>
                  <p className='mt-3'>Access our elite network of hiring partners, receive interview coaching, and get personalized career strategy sessions to land your dream job in tech.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="learn-section">
        <div className="learn-container">
          <Image src={learn} id="learnImage" alt='learning picture' />
          <div className="learn-text">
            <h3 className='display-4 fw-bolder'>Learn and get a profession online</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequatur tenetur quod iusto facere cupiditate et, reprehenderit doloremque inventore rerum earum quam harum quibusdam praesentium possimus omnis autem! Porro delectus harum dolorum sed voluptatum ipsa optio vel corrupti autem placeat.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequatur tenetur quod iusto facere cupiditate et, reprehenderit doloremque inventore rerum earum quam harum quibusdam praesentium possimus omnis autem! Porro delectus harum dolorum sed voluptatum ipsa optio vel corrupti autem placeat.</p>

            <Link href="#" className='btn btn-danger btn-lg'>Learn more</Link>
          </div>
        </div>
      </div>

      <div className="note-section">
        <div className="container">
          <div className="note-content">
            <div className="note-detail">
              <h3 className='mb-5 ms-3 display-4 fw-bolder'>How Does It Works?</h3>
              <div className="notas">
                <div className="check"></div>
                <div className='mt-2 ms-2'>
                  <h3 className=''>4 on-line lectures with a teacher</h3>
                  <p className=''>Quisque eget porta mauris. Praesent eu tincidunt nulla, suscipit lobortis est.</p>
                </div>
              </div>
              <div className="notas">
                <div className="check"></div>
                <div className='mt-2 ms-2'>
                  <h3 className='fw-bolder note'>Subscription gives access to education materials and videos</h3>
                  <p>Quisque eget porta mauris. Praesent eu tincidunt nulla, suscipit lobortis est.</p>
                </div>
              </div>
              <div className="notas">
                <div className="check"></div>
                <div className='mt-2 ms-2'>
                  <h3 className='fw-bolder'>After completing the course and completing the tasks, you will receive a certificate</h3>
                </div>
              </div>
            </div>
            <div className="note-view">
              <Image src={bip} id='viewImage' alt='view picture' />
              <h4 className='mt-2'>Diana Gloster</h4>
              <span>&#8902;</span>
              <span>&#8902;</span>
              <span>&#8902;</span>
              <span>&#8902;</span>
              <p>Mauris tellus lorem, tempus sed nibh at, varius convallis mi. sed scelerisque odio neque a lacus. Ut consectetur ligula. ed rhoncus sapien eget feugiat.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="course-section">
        <div className="container">
          <div className="course-title text-center mb-5">
            <h1 className='fw-bolder display-5'>Popular Courses</h1>
            <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Fusce faucibus nulla <br />sed finibus egestas. Vestibulum purus magna.</p>
          </div>
          <div className="course-content mt-3">
            <div className="course-detail py-4 ">
              <div className="d-flex">
                <div className="check-a"></div>
                <div className='ms-2'>
                  <h4 className='fw-bolder'>Computer <br /> Programming Basic</h4>


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

                  <p>by Adrian Educom school</p>
                  <p className='text-primary mt-0 fw-bolder para'>48 lectures ( 280 Hours)</p>
                </div>
              </div>
              <div className="course-text">
                <h5 className='fw-bolder text-danger'>$120 all course / $20 per month</h5>
                <ul className='py-3'>
                  <li>Mauris tellus lorem, tempus sed nibh at, varius convallis mi.</li>
                  <li>Aenean tristique sodales enim, et consequat velit. Morbi sit.</li>
                </ul>
                <Link href='/courses' className='link text-dark text-center fw-bolder'>Learn more</Link>
              </div>
            </div>

            <div className="course-detail py-4">
              <div className="d-flex">
                <div><Image src={css} className='check-b' alt='css picture' /></div>
                <div className='ms-2'>
                  <h4 className='fw-bolder'>Computer CSS3  <br />Programming</h4>

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

                  <p>by Tiffany Educom school</p>
                  <p className='text-primary mt-0 fw-bolder para'>48 lectures ( 280 Hours)</p>
                </div>
              </div>
              <div className="course-text">
                <h5 className='fw-bolder text-danger'>$120 all course / $20 per month</h5>
                <ul className='py-3'>
                  <li>Mauris tellus lorem, tempus sed nibh at, varius convallis mi.</li>
                  <li>Aenean tristique sodales enim, et consequat velit. Morbi sit.</li>
                </ul>
                <Link href='/courses' className='link text-dark ms-3 fw-bolder'>Learn more</Link>
              </div>
            </div>
            <div className="course-detail py-4">
              <div className="d-flex">
                <div><Image src={html} className='check-c' alt='html picture' /></div>
                <div className='ms-2'>
                  <h4 className='fw-bolder'>Web-site <br /> Development Pro</h4>

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

                  <p>by Mc Gregor Educom school</p>
                  <p className='text-primary mt-0 fw-bolder para'>30 lectures (180 Hours)</p>
                </div>
              </div>
              <div className="course-text">
                <h5 className='fw-bolder text-danger'>$120 all course / $20 per month</h5>
                <ul className='py-3'>
                  <li>Mauris tellus lorem, tempus sed nibh at, varius convallis mi.</li>
                  <li>Aenean tristique sodales enim, et consequat velit. Morbi sit. </li>
                </ul>
                <Link href='/courses' className='link text-dark fw-bolder'>Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="story-section">
        <div className="container">
          <div className='mb-5 text-center'>
            <h1 className='display-4 fw-bolder'>Sucess Stories</h1>
            <p className='lead'>Hear from our graduates who have transformed their careers</p>
          </div>
          <div className="story-container">
            <div className="story-detail">
              <span className='icon'>&#10077;</span><br />
              <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, delectus? Repellat totam voluptatibus necessitatibus soluta.</span>
              <div className='d-flex mt-3'>
                <Image src={bip} alt='student image' id='student-image' />
                <div className='ms-3 mt-2'>
                  <h5>John Doe</h5>
                  <p>Web-Designer at Nextflix</p>
                </div>
              </div>
            </div>
            <div className="story-detail">
              <span className='icon'>&#10077;</span><br />
              <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, delectus? Repellat totam voluptatibus necessitatibus soluta.</span>
              <div className='d-flex mt-3'>
                <Image src={stu1} alt='student image' id='student-image' />
                <div className='ms-3 mt-2'>
                  <h5>Jennifer clay</h5>
                  <p>Full-Stack Developer at Google</p>
                </div>
              </div>
            </div>
            <div className="story-detail">
              <span className='icon'>&#10077;</span><br />
              <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, delectus? Repellat totam voluptatibus necessitatibus soluta.</span>
              <div className='d-flex mt-3'>
                <Image src={stu2} alt='student image' id='student-image' />
                <div className='ms-3 mt-2'>
                  <h5>John Doe</h5>
                  <p>Front-End Developer at Uber</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="question-section">
        <div className="container">
          <div className='text-center mb-5'>
            <h1 className='display-4 fw-bolder'>Frequently Asked Questions</h1>
            <p className='lead'>Get answers to common questions about our program</p>
          </div>
          <div className="question-container">
            <div className="accordion question" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button bg-light btn fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What make Educom unique?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>The Programmers University offers a cutting-edge, project-based curriculum designed by industry experts. Our platform combines self-paced learning with live mentorship, ensuring you gain real-world skills that are immediately applicable in the tech industry.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-light btn  fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How flexible is the course schedule?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>Our program is designed to fit your life. While we provide a structured curriculum, you have the flexibility to learn at your own pace. We offer both part-time and full-time tracks, allowing you to balance your studies with other commitments.</p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-light btn fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What kind of career support do you offer?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>We provide comprehensive career services including resume reviews, mock interviews, and job search strategies. While we do not guarantee job placement, our dedicated career team works closely with you to maximize your employability and connect you with our extensive network of hiring partners.</p>
                  </div>
                </div>
              </div>
            </div>
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

    </main>
  );
}



