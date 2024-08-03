import { lessons } from "@/helper/lessons"
import Image from "next/image"
import Link from "next/link";
import './course.css'


const courses = () => {
  return (

    <div className="course-section">
      <div className="course-header">
        <h1 className='text-center text-white'>COURSES/</h1>
      </div>
      <div className="container">
        <div className="course-title text-center mb-5">
          <h1 className='fw-bolder display-5'>Popular Courses</h1>
          <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Fusce faucibus nulla <br />sed finibus egestas. Vestibulum purus magna.</p>
        </div>
        <div className="course-content mt-3">
          {lessons.map(function (lesson) {
            return (
              <div key={lesson.id} className='course-detail'>
                <Image src={lesson.image} alt='picture' className='course-image' />
                <h3 className='fw-bolder mt-3'>{lesson.title}</h3>
                <div className="d-flex fs-5">
                  <span className='text-danger fw-bolder'>&#8902;</span>
                  <span className='text-danger fw-bolder'>&#8902;</span>
                  <span className='text-danger fw-bolder'>&#8902;</span>
                  <span className='text-danger fw-bolder'>&#8902;</span>
                </div>
                <br />
                <i>{lesson.teacher}</i>
                <p className='text-primary mt-0 fw-bolder'>48 lectures (280 Hours)</p>
                <ul className='py-3'>
                  <li>Mauris tellus lorem, tempus sed nibh at, varius convallis mi.</li>
                  <li>Aenean tristique sodales enim, et consequat velit. Morbi sit amet lorem sapien.</li>
                </ul>
                <Link href={`/courses/${lesson.id}`} className='btn bg-secondary text-light ms-3'>Learn More</Link>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default courses