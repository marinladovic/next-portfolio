import { collection, DocumentData, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { ProjectType } from '../typings';

function useProjects() {
  const [projects, setProjects] = useState<ProjectType[] | DocumentData[]>([]);

  useEffect(() => {
    return onSnapshot(collection(db, 'projects'), (snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, [db]);

  return projects;
}

export default useProjects;
