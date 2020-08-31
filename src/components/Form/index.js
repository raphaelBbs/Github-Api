import React from 'react'

import {  Form, Input } from 'semantic-ui-react'


const FormExampleForm = (props) => {
    const { todoLabel, onLabelChange, onListfetch } = props;
 return ( <Form onSubmit={(e)=> {
            e.preventDefault();
            onListfetch(todoLabel);

           
            }}>
            
            <Form.Field>
            <Input  icon='search' iconPosition='left' placeholder='Search...' type="text"  onChange={(e)=>{
                const text = e.target.value;
    

                onLabelChange(text);
              
           
            }} />
            </Form.Field>
            </Form>)
}

export default FormExampleForm
