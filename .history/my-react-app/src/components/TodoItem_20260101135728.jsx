import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TodoItem = ({todo, onToggle, onDelete, onEdit}) => {

    const itemStyle = {
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
    };

    const itemClassName = `d-flex justify-content-between align-items-center {
        todo.completed ? 'bg-light text-muted' : ''
    }`;

    const handleEditClick = (e) => {
        e.stopPropagation();

        const newTitle = prompt('Edit your task:', todo.title);

        if (newTitle !== null && newTitle.trim()) {
            onEdit(todo.id, newTitle.trim());        
        }
    }

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        if (window.confirm('Are you sure you want to delete this task?')) {
            onDelete(todo.id);
        }
    }


    return (
        <>
            <ListGroup.Item
                style={itemStyle}
                className={itemClassName}
                onClick={() => onToggle(todo.id)}
                >
                    
                    <span className='flex-grow-1'>
                        {todo.title}
                    </span>
                    <div>
                        <Button
                        variant='warning'
                        size='sm'
                        className='me-2'
                        onClick={handleEditClick}
                        >
                            Edit
                        </Button>
                        <Button
                            variant='danger'
                            size='sm'
                            onClick={handleDeleteClick}
                        >
                            Delete
                        </Button>
                    </div>
            </ListGroup.Item>
        </>
    )
}

export default TodoItem;