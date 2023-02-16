import React from 'react';
import { Formik, Field, Form } from 'formik';
import validationSchema from './validation';
import { useTodo } from '../../../context/TodoContext';

function NewTodoForm() {
  const { addTodo } = useTodo();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        text: '',
      }}
      onSubmit={(values, bag) => {
        addTodo(values.text);
        bag.resetForm();
      }}
    >
      <Form>
        <Field id="text" name="text" className="new-todo" placeholder="What needs to be done?" autoFocus />
      </Form>
    </Formik>
  );
}

export default NewTodoForm;
