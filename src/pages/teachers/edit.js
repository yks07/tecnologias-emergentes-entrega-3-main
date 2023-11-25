import { useState, useEffect } from 'react';

import TeacherForm from './components/teacherForm';
import { LinearProgress } from '@mui/material';

import { useParams } from 'react-router-dom';

const Edit = () => {
  const { teacherId } = useParams();

  const [teacher, setteacher] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/teachers/${teacherId}`);
        if (response.ok) {
          const data = await response.json();
          setteacher(data);
        } else {
          throw new Error('Error getting the data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [teacherId]);

  if (!teacher) {
    return <LinearProgress />;
  }

  return <TeacherForm teacher={teacher} isEdit />;
};

export default Edit;
