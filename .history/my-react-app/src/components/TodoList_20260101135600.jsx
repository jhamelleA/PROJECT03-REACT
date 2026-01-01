import React from 'react';
import {Container, ListGroup, Alert } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList= ({ todos, onToggle, onDelete, onEdit }) => {

    return(
        <>
            <Container>
                {
                    todos.length === 0 ? (
                        <Alert variant='secondary' className='text-center'>
                            No Tasks yet!
                        </Alert>
                    ) : (
                        <ListGroup variant='flush'>
                            {todos.map((todo) => (
                                <TodoItem 
                                    key={todo.id}
                                    todo={todo}
                                    onToggle={onToggle}
                                    onDelete={onDelete}
                                    onEdit={onEdit}
                                />
                             ))}
                        {todos.length === 0 && (
                            <ListGroup.Item className='text-center text-muted'>No tasks yet!
                            </ListGroup.Item>
                        )
                    }
                        </ListGroup>

                    )
                }
            </Container>
        </>
    )
}

export default TodoList;