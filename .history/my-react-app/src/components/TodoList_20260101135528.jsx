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
       