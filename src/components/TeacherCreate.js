import React from 'react'
import { Create, SimpleForm, TextInput} from 'react-admin'

const TeacherCreate = (props) => {
  return (
   <Create title='Create a Teacher details' {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='email' />
        </SimpleForm>
   </Create>
  )
}

export default TeacherCreate;