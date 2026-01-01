import React, {useState} from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';

const TodoForm = ({addTodo}) => {

    const [taskInput, setTaskInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskInput.trim() === '') {
            alert('Please enter a task name.');

        return;
        }       

        addTodo(taskInput.trim());
        setTaskInput('');
    };

    return (
        <>
            <Container className= 'mt-4'> 
                <Form onSubmit={handleSubmit} className= 'mb-3'>
                    <Form.Control
                        type='text'
                        placeholder='Enter your task...'
                        aria-label="New task input"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                    <Button variant='success' type='submit'>
                        Add Task
                    </Button>
                </Form>
            </Container>

        </>
    )
}

export default TodoForm;