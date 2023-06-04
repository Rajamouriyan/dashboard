import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin'

const StudentCreate = (props) => {
  return (
   <Create title='Create a student details' {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='results' />
            <NumberInput  source='class'/>
            <NumberInput  source='percentage'/>
        </SimpleForm>
   </Create>
  )
}

export default StudentCreate;
