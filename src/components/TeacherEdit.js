import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const TeacherEdit = (props) => {
  return (
   <Edit title='Edit teacher details' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='name' />
            <TextInput source='email' />
        </SimpleForm>
   </Edit>
  )
}

export default TeacherEdit;