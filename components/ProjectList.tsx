import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { ProjectType } from '../typings';
import { colors } from '../constants/colors';
import Project from './Project';

function ProjectList() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectRef = collection(db, 'projects');
        const q = query(projectRef, orderBy('timestamp', 'desc'), limit(4));
        const querySnapshot = await getDocs(q);

        const projects: ProjectType[] = [];
        querySnapshot.forEach((doc) => {
          return projects.push({ id: doc.id, ...doc.data() } as ProjectType);
        });

        setProjects(projects);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchProjects();
  }, [db]);

  return (
    <section id="projects" className="w-full flex flex-col gap-y-8">
      <h2 className="text-3xl font-semibold tracking-wide text-shadow-lg">
        Latest Projects
      </h2>
      <div className=" flex flex-col gap-y-16">
        {projects.map((project, index) => (
          <Project
            key={project.id}
            project={project}
            bg_colors={colors[index]}
            order={index % 2 === 1 ? 'reverse' : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
