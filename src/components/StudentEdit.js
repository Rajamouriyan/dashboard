import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'

const StudentEdit = (props) => {
  return (
   <Edit title='Edit student details' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='name' />
            <TextInput source='results' />
            <NumberInput source='class'/>
            <NumberInput source='percentage'/>
        </SimpleForm>
   </Edit>
  )
}

export default StudentEdit;