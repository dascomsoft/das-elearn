

import Image from 'next/image';
import index from '../../images/index.webp'
import teach from '../../images/teach.webp'
import soft1 from '../../images/soft1.jpg'
import './about.css';





const about = () => {
  return (
    <div className='about-container'>
      <div className="about-header">
        <h1 className='text-center text-white'>ABOUT US/</h1>
      </div>
      <div className="about-content">
        <div className="container">
          <div className="about-section">
            <div className="about-detail text-center">
              <svg className='pic' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <h4 className='py-2 fw-bolder'>Get A Certificate</h4>
              <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem tempus rhoncus sit tortor.</p>
            </div>
            <div className="about-detail text-center">
              <svg className='pic' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <h4 className='py-2 fw-bolder'>All Over The World</h4>
              <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem tempus rhoncus sit tortor.</p>
            </div>
            <div className="about-detail text-center">
              <svg className='pic' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <h4 className='py-2 fw-bolder'>Live Online Lectures</h4>
              <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem tempus rhoncus sit tortor.</p>
            </div>
            <div className="about-detail text-center">
              <svg className='pic' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>              <h4 className='py-2 fw-bolder'>Educational Material</h4>
              <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem tempus rhoncus sit tortor.</p>
            </div>
            <div className="about-detail text-center">
              <svg className='pic' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <h4 className='py-2 fw-bolder'>Professional Teachers</h4>
              <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem tempus rhoncus sit tortor.</p>
            </div>
            <div className="about-detail text-center">
              <svg className='pic' data-slot="icon" aria-hidden="true" fill="none" stroke-width="" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>         
              <h4 className='py-2 fw-bolder'>Accessibility Programs</h4>
              <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem tempus rhoncus sit tortor.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="opinion-container">
        <div className="opinion-content">
          <div className="opinion-text">
            <h2 className='fw-bolder'>Education – Your Door To The Future</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, rem. Doloribus maxime quam vitae praesentium sequi architecto, aliquid, incidunt ullam ducimus reiciendis optio? Aliquid commodi distinctio quibusdam. Recusandae, accusamus necessitatibus pariatur, impedit magni cum excepturi quibusdam, nulla fugiat tenetur repudiandae!</p>
            <a href='/courses' className='btn bg-light btn-lg text-dark'>Learn more</a>
          </div>
          <Image src={index} alt='opinion pic' id='opinion-image' />

        </div>
      </div>
    </div>

  )
}

export default about