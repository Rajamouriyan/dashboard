import React from "react";
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import StudentList from './components/StudentList'
import StudentCreate from './components/StudentCreate'
import StudentEdit from './components/StudentEdit'
import TeacherList from './components/TeacherList'
import TeacherCreate from './components/TeacherCreate'
import TeacherEdit from './components/TeacherEdit'

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='students' list={StudentList} create={StudentCreate} 
     edit={StudentEdit} />

    <Resource name='teachers' list={TeacherList} create={TeacherCreate} 
     edit={TeacherEdit} />

   
  </Admin>
}

export default App;
