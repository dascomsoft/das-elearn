import { lessons } from '@/helper/lessons';
import Image from 'next/image';

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
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p>Teacher: {course.teacher}</p>
      <p>Course ID: {id}</p> {/* Afficher l'ID du cours */}
      <Image src={course.image} alt={course.title} />
    </div>
  );
};

export default CourseDetail;
