import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout/index';

const Students = Loadable(lazy(() => import('pages/students')));
const Create = Loadable(lazy(() => import('pages/students/create')));
const Edit = Loadable(lazy(() => import('pages/students/edit')));

const StudentsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'students',
      element: <Students />
    },
    {
      path: 'students/create',
      element: <Create />
    },
    {
      path: 'students/edit/:studentId',
      element: <Edit />
    }
  ]
};

export default StudentsRoutes;
