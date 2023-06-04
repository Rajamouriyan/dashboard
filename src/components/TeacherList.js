import React from 'react'
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin'

const TeacherList = (props) => {
  return <List {...props}> 
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <EmailField source='email' />
            <EditButton basePath='/teachers'/>
            <DeleteButton basePath='/teachers'/>
        </Datagrid>
  </List>
}
export default TeacherList;