import { lessons } from '@/helper/lessons';
import Image from 'next/image';
import register from '../../../images/register1.webp'
import express from '../../../images/express.webp';
import javascript from '../../../images/js.webp'
import node from '../../../images/node.svg'
import react from '../../../images/react.png'
import html from '../../../images/html.png'
import certi from '../../../images/certifi.webp'
import compu from '../../../images/compu.webp'
import css from '../../../images/css.png'
import bip from '../../../images/bip.webp';
import stu1 from '../../../images/stu1.jpg'
import stu2 from '../../../images/stu2.jpg'
import stu3 from '../../../images/stu3.jpg'


import './detail.css';
import Link from 'next/link';

// Fonction pour générer les chemins statiques
export async function generateStaticParams() {
  const paths = lessons.map((course) => ({
    id: course.id.toString() // Assurez-vous que l'id est une chaîne de caractères
  }));

  return paths;
}


// Composant de détail du cours
const CourseDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const course = lessons.find((course) => course.id.toString() === id);

  if (!course) {
    return <p>Course not found</p>; // Gestion de la page non trouvée
  }

  return (
    <main>
      <div className="detail-header text-white">
        <div className='detail-content'>
          <Image src={course.image} alt={course.title} id='image-detail' />
          <span className='text-white fw-bolder display-5'>{course.title}</span>
          <span className='text-warning fw-bolder'>{course.teacher}</span>
          <span className='text-white description'>{course.description}</span>
        </div>
        <div className="container">
          <div className='text-white mt-5 detail-description'>
            <div>
              <span className='text-warning fs-4'>Start at March 24, 2021</span> |
              <span className='fs-4'> 1,152,628 already registered</span>
            </div>
            <div className='text-danger fw-bolder icons'>
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
            </div>
            <i className='text'>more than 99% of students rate this course content and results as Super</i>
          </div>
        </div>
        <a href='#registration' className='btn-detail mt-5  mx-auto'>Register</a>
        <div className="container">
          <div className="action">
            <div className="action-button">
              <a href='#skill' className="skill">Skill You Get</a>
              <a href='#program-action' className="program ">Courses Program</a>
              <a href='#testimony' className="testimony">Testimonies</a>
              <a href='#team' className="teacher">Teachers</a>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-container" id='skill'>
        <div className="container">
          <div className="skill-header">
            <h2 className='fw-bolder fs-1'>Skill You Will Get</h2>
            <p>Duis ac tristique justo. Nulla porttitor mattis nibh, et dignissim nibh ullamcorper a.Donec dignissim semper <br /> Nunc consectetur mauris consectetur justo gravida, eu tristique urna mattis</p>
          </div>
          <div className="skill-content">
            <div className='skill-block'>
              <div className="skill-detail">
                <Image src={express} alt='pic' id='skill-image' />
                <h3 className='fw-bolder mt-3'>EXPRESS.JS</h3>
              </div>
              <div className="skill-descrip">
                <h4 className='fw-bolder mt-3'>Express.js</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi placeat suscipit repudiandae harum, blanditiis expedita dolores sint? Quae, sed?</p>
              </div>
            </div>
            <div className='skill-block'>
              <div className="skill-detail">
                <Image src={javascript} alt='pic' id='skill-image' />
                <h3 className='fw-bolder mt-3'>JAVASCRIPT</h3>
              </div>
              <div className="skill-descrip">
                <h4 className='fw-bolder mt-3'>Javascript</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi placeat suscipit repudiandae harum, blanditiis expedita dolores sint? Quae, sed?</p>
              </div>
            </div>
            <div className='skill-block'>
              <div className="skill-detail">
                <Image src={node} alt='pic' id='skill-image' />
                <h3 className='fw-bolder mt-3'>NODE.JS</h3>
              </div>
              <div className="skill-descrip">
                <h4 className='fw-bolder mt-3'>Node.js</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi placeat suscipit repudiandae harum, blanditiis expedita dolores sint? Quae, sed?</p>
              </div>
            </div>
            <div className='skill-block'>
              <div className="skill-detail">
                <Image src={react} alt='pic' id='skill-image' />
                <h3 className='fw-bolder mt-3'>REACT.JS</h3>
              </div>
              <div className="skill-descrip">
                <h4 className='fw-bolder mt-3'>React.js</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi placeat suscipit repudiandae harum, blanditiis expedita dolores sint? Quae, sed?</p>
              </div>
            </div>
            <div className='skill-block'>
              <div className="skill-detail">
                <Image src={html} alt='pic' id='skill-image' />
                <h3 className='fw-bolder mt-3' >HTML</h3>
              </div>
              <div className="skill-descrip">
                <h4 className='fw-bolder mt-3'>Html</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi placeat suscipit repudiandae harum, blanditiis expedita dolores sint? Quae, sed?</p>
              </div>
            </div>
            <div className='skill-block'>
              <div className="skill-detail">
                <Image src={css} alt='pic' id='skill-image' />
                <h3 className='fw-bolder mt-3'>CSS</h3>
              </div>
              <div className="skill-descrip">
                <h4 className='fw-bolder mt-3'>Css</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi placeat suscipit repudiandae harum, blanditiis expedita dolores sint? Quae, sed?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="program-wrapper" id='program-action'>
        <div className="container">
          <div className="program-container">
            <div className="program-content">
              <div className="program-detail">
                <h2 className='text-danger fw-bolder'>Course Program</h2>
                <p className='fw-bolder'><strong>All course - 3 Units ( 320 hours)</strong></p>
              </div>
              <div className="program-text">
                <p>Duis maximus nisl gravida elit molestie tincidunt. Duis ac tristique justo. Nulla porttitor mattis nibh, et dignissim nibh ullamcorper a. Donec dignissim semper facilisis. Nunc consectetur mauris consectetur justo gravida, eu tristique urna mattis. Fusce eu dolor vitae dui semper gravida ut quis nisi. Praesent semper suscipit bibendum. Mauris sed dictum ipsum. Aenean dictum ipsum eu arcu pretium, vestibulum malesuada orci tincidunt. Aenean ut fringilla velit. In tincidunt, mauris ut vestibulum tristique, neque enim posuere diam, ut ullamcorper diam dui eu mauris</p>
              </div>
            </div>
            <hr />
            <div className="program-content">
              <div className="program-detail">
                <h2 className='text-primary fw-bolder'>1st Unit</h2>
                <p><strong>80 hours</strong></p>
              </div>
              <div className="program-text">
                <h2>Course: Getting Started with Simple Styling</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab explicabo consectetur amet? Dignissimos veniam recusandae itaque, et exercitationem inventore architecto, sapiente obcaecati ad, nisi asperiores quaerat autem nulla veritatis voluptate. Dolor aut et eos aliquam consequatur tempore nemo possimus hic, molestias maiores tempora error repellat nostrum atque illo in.</p>
                <div className='d-flex'>
                  <svg fill="red" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M13,11 L17,11 L17,13 L11,13 L11,6 L13,6 L13,11 Z" />
                  </svg>
                  <p className='ms-2'><strong>13 Video Lectures, 6 Training Methodics, 4 Tasks</strong></p>
                </div>
                <div className='d-flex'>
                  <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z" /></svg>
                  <p className='ms-2'><strong>Skills You Get: Advanced CSS</strong></p>
                </div>
              </div>
            </div>
            <hr />
            <div className="program-content">
              <div className="program-detail">
                <h2 className='text-primary fw-bolder'>2nd Unit</h2>
                <p><strong>110 hours</strong></p>
              </div>
              <div className="program-text">
                <h2>Course: Week Three: Pseudo-classes, Pseudo-elements, Transitions, and Positioning</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab explicabo consectetur amet? Dignissimos veniam recusandae itaque, et exercitationem inventore architecto, sapiente obcaecati ad, nisi asperiores quaerat autem nulla veritatis voluptate. Dolor aut et eos aliquam consequatur tempore nemo possimus hic, molestias maiores tempora error repellat nostrum atque illo in.</p>
                <div className='d-flex'>
                  <svg fill="red" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M13,11 L17,11 L17,13 L11,13 L11,6 L13,6 L13,11 Z" />
                  </svg>
                  <p className='ms-2'><strong>13 Video Lectures, 6 Training Methodics, 4 Tasks</strong></p>
                </div>
                <div className='d-flex'>
                  <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z" /></svg>
                  <p className='ms-2'><strong>Skills You Get: Advanced CSS</strong></p>
                </div>

                <h2>Course: Web Design Principles, Grids and Composition</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab explicabo consectetur amet? Dignissimos veniam recusandae itaque, et exercitationem inventore architecto, sapiente obcaecati ad, nisi asperiores quaerat autem nulla veritatis voluptate. Dolor aut et eos aliquam consequatur tempore nemo possimus hic, molestias maiores tempora error repellat nostrum atque illo in.</p>
                <div className='d-flex'>
                  <svg fill="red" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M13,11 L17,11 L17,13 L11,13 L11,6 L13,6 L13,11 Z" />
                  </svg>
                  <p className='ms-2'><strong>13 Video Lectures, 6 Training Methodics, 4 Tasks</strong></p>
                </div>
                <div className='d-flex'>
                  <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z" /></svg>
                  <p className='ms-2'><strong>Skills You Get: Advanced CSS</strong></p>
                </div>
              </div>
            </div>
            <hr />

            <div className="program-content">
              <div className="program-detail">
                <h2 className='text-primary fw-bolder'>3rd Unit</h2>
                <p><strong>130 hours</strong></p>
              </div>
              <div className="program-text">
                <h2>Course: What is HTML5. Adaptive layout</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab explicabo consectetur amet? Dignissimos veniam recusandae itaque, et exercitationem inventore architecto, sapiente obcaecati ad, nisi asperiores quaerat autem nulla veritatis voluptate. Dolor aut et eos aliquam consequatur tempore nemo possimus hic, molestias maiores tempora error repellat nostrum atque illo in.</p>
                <div className='d-flex'>
                  <svg fill="red" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M13,11 L17,11 L17,13 L11,13 L11,6 L13,6 L13,11 Z" />
                  </svg>
                  <p className='ms-2'><strong>13 Video Lectures, 6 Training Methodics, 4 Tasks</strong></p>
                </div>
                <div className='d-flex'>
                  <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z" /></svg>
                  <p className='ms-2'><strong>Skills You Get: Advanced CSS</strong></p>
                </div>

                <h2>Course: Website Development and Final Task - Real Site Landing</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab explicabo consectetur amet? Dignissimos veniam recusandae itaque, et exercitationem inventore architecto, sapiente obcaecati ad, nisi asperiores quaerat autem nulla veritatis voluptate. Dolor aut et eos aliquam consequatur tempore nemo possimus hic, molestias maiores tempora error repellat nostrum atque illo in.</p>
                <div className='d-flex'>
                  <svg fill="red" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M13,11 L17,11 L17,13 L11,13 L11,6 L13,6 L13,11 Z" />
                  </svg>
                  <p className='ms-2'><strong>13 Video Lectures, 6 Training Methodics, 4 Tasks</strong></p>
                </div>
                <div className='d-flex'>
                  <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z" /></svg>
                  <p className='ms-2'><strong>Skills You Get: Advanced CSS</strong></p>
                </div>
              </div>
            </div>
            <hr />
            <div className="program-content">
              <div className="program-detail">
                <h2>You Will Get</h2>
              </div>
              <div className="program-text">
                <h2>After the final task and according to the results</h2>
                <p>Advanced Development Skills, University Certified Certificate, Ready website, Job offers from our partners</p>
                <div className='program-images mt-4'>
                  <Image src={certi} alt='certi picture' id='pic' />
                  <Image src={compu} alt='certi picture' id='pic' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="story-section" id='testimony'>
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


      <div className="team-section" id="team">
        <div className="container">
          <h4 className="text-danger text-center fw-bolder">Educom Experts</h4>
          <h2 className="mb-5 display-5 fw-bolder text-center">Meet Our Teachers</h2>
          <div className="team-container">

            <div className="team-wrapper">

              <div className="team-detail-1 mx-auto">
                <Image src={stu1} alt="pic" />
                <div className="icons d-flex">
                  <span>
                    <svg fill="white" width="20px" height="20px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-facebook"><path d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' /></svg>
                  </span>
                  <span>
                    <svg className="ms-1 jam jam-instagram" fill="white" width="20px" height="20px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin"><path d='M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z' /><path d='M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z' /><circle cx='15.156' cy='4.858' r='1.237' /></svg>
                  </span>
                  <span>
                    <svg className="ms-1" fill="white" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" /></svg>
                  </span>

                </div>
              </div>

              <div className="team-text mt-4 text-center">
                <h4 className="mt-3 fw-bolder">John Kimi</h4>
                <p className="fw-bolder mt-1">Senior Front End Developer</p>
              </div>
            </div>
            <div className="team-wrapper text-center">
              <div className="team-detail-2 mx-auto">
                <Image src={stu2} alt="pic" />
                <div className="icons d-flex">
                  <span>
                    <svg fill="white" width="20px" height="20px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-facebook"><path d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' /></svg>
                  </span>
                  <span>
                    <svg className="ms-1 jam jam-instagram" fill="white" width="20px" height="20px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin"><path d='M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z' /><path d='M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z' /><circle cx='15.156' cy='4.858' r='1.237' /></svg>
                  </span>
                  <span>
                    <svg className="ms-1" fill="white" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" /></svg>
                  </span>

                </div>
              </div>
              <div className="team-text mb-4 mt-4 text-center">
                <h4 className="mt-3 fw-bolder">Mario Berly</h4>
                <p className="fw-bold mt-1 fw-bolder">Senior Web-Designer</p>
              </div>
            </div>

            <div className="team-wrapper text-center">
              <div className="team-detail-2 mx-auto">
                <Image src={bip} alt="pic" />
                <div className="icons d-flex">
                  <span>
                    <svg fill="white" width="20px" height="20px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-facebook"><path d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' /></svg>
                  </span>
                  <span>
                    <svg className="ms-1 jam jam-instagram" fill="white" width="20px" height="20px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin"><path d='M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z' /><path d='M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z' /><circle cx='15.156' cy='4.858' r='1.237' /></svg>
                  </span>
                  <span>
                    <svg className="ms-1" fill="white" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" /></svg>
                  </span>

                </div>
              </div>
              <div className="team-text mt-4 text-center">
                <h4 className="mt-3 fw-bolder">Mario Berly</h4>
                <p className="fw-bolder mt-1">Full Stack Developer</p>
              </div>
            </div>

            <div className="team-wrapper text-center">
              <div className="team-detail-3 mx-auto">
                <Image src={stu3} alt="pic" />

                <div className="icons d-flex">
                  <span>
                    <svg fill="white" width="20px" height="20px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-facebook"><path d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' /></svg>
                  </span>
                  <span>
                    <svg className="ms-1 jam jam-instagram" fill="white" width="20px" height="20px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin"><path d='M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z' /><path d='M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z' /><circle cx='15.156' cy='4.858' r='1.237' /></svg>
                  </span>
                  <span>
                    <svg className="ms-1" fill="white" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" /></svg>
                  </span>
                </div>
              </div>
              <div className="team-text mt-4 fw-bolder">
                <h4 className="mt-3">Rosselvelt Delano</h4>
                <p className="fw-bolder mt-1">Senior UX/UI Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="register-container" id='registration'>
        <div className="container">
          <h1 className='fw-bolder mb-5 text-danger text-center display-5'>Here Is The Beginning Of Your <br /> Journey!!!</h1>
          <div className="register-content">
            <div className="register-detail">
              <h1 className='fw-bolder fs-1'>Transform Your Future with Elearn</h1>
              <p>Embark on an extraordinary journey to become a world-class fullstack developer. Our cutting-edge curriculum and expert mentorship will propel you to the forefront of the tech industry.</p>
              <Image src={register} alt='pic' id='register' />
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
      <div>
      </div>
    </main >
  );
}

export default CourseDetail;
