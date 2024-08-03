
import Link from 'next/link';
import './contact.css';





const contact = () => {
  return (
    <main>
      <div className="contact-container">

        <div className="contact-content">
          <h2 className="text-center display-2">Contact-Us/</h2>
          <p className="text-center text-warning lead">Feel free to contact us in case you may have some questions!</p>
        </div>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-4 text-center circle">
              <p>
                <svg fill="orange" width="50px" height="50px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0-3.124 3.074-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zm-5.657 8.195c-.668 0-1.295-.26-1.768-.732-.975-.975-.975-2.561 0-3.536.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732c.975.975.975 2.562 0 3.536-.472.472-1.1.732-1.768.732z" /></svg>
              </p>
              <h2>LOCATION</h2>
              <p>Address : 455 Beaumont Street</p>
            </div>

            <div className="col-md-4 text-center">
              <p>
                <svg fill="orange" width="50px" height="50px" viewBox="-3 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group_31" data-name="Group 31" transform="translate(-241.002 -321.05)">
                    <path id="Path_296" data-name="Path 296" d="M267,349.05v-24a4,4,0,0,0-4-4H245a4,4,0,0,0-4,4v24a4,4,0,0,0,4,4h18A4,4,0,0,0,267,349.05Zm-22,0v-24h18v24Z" />
                    <rect id="Rectangle_6" data-name="Rectangle 6" width="10" height="12" transform="translate(249.002 329.05)" />
                    <rect id="Rectangle_7" data-name="Rectangle 7" width="18" height="4" transform="translate(245.002 345.05)" />
                  </g>
                </svg>
              </p>
              <h2>PHONE</h2>
              <p>Tel : +1(7699-737-9664)</p>
            </div>

            <div className="col-md-4 text-center">
              <p>
                <svg fill="orange" width="50px" height="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><title>mail</title><path d="M64 128Q64 113 73 105 81 96 96 96L416 96Q431 96 440 105 448 113 448 128L448 144 256 272 64 144 64 128ZM256 328L448 200 448 384Q448 416 416 416L96 416Q64 416 64 384L64 200 256 328Z" /></svg>

              </p>
              <h2>EMAIL</h2>
              <p>Email: e-learning@educom.com</p>
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
  )
}

export default contact