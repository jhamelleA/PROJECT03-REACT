import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import './App.css'
import { Container, Nav, Navbar, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import ContactPage from './components/ContactPage';

function App() {
    const [todos, setTodos] = useState([
      {id: 1, title: 'Learn React Routing', completed: false},
      {id: 2, title: 'Have to go to Gym', completed: false},
      {id: 3, title: 'Lunch', completed: true},
    ])

    const [filter, setFilter] = useState('all'); // Options: 'all', 'completed', 'incomplete'

    const addTask = (text) => {
        const newTodo = {id: Date.now(), title: text, completed: false }

        setTodos([...todos, newTodo]);
    }

    const handleToggle = (id) => {
        setTodos(prevTodos => 
          prevTodos.map(todo => 
            todo.id === id ? {...todo, completed:!todo.completed} : todo

          )
        );
    };

    const handleDelete = (id) => {
      setTodos(prevTodos => 
        prevTodos.filter(todo => todo.id!== id)
      );
    };

    const handleEdit = (id, newTitle) => {
      setTodos(prevTodos => 
        prevTodos.map(todo => 
          todo.id === id? {...todo, title: newTitle} : todo
        )
      );
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'incomplete') return !todo.completed;
        return true; // Returns everything for 'all'
    });

  return (
    <>
     
      <Router>
      <Navbar bg='primary' variant='dark' expand='lg' className='mb-4'>
        <Container>
          <Navbar.Brand as={Link} to="/">React Todo App</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className='justify-content-md-center'>
          <Col md={9}>
            <Card className='shadow-sm'>
              <Card.Body>
                <Routes>
                  <Route
                    path='/'
                    element={
                      <>
                        <h2 className='text-center mb-4'>Task Manager</h2>
                        <TodoForm addTodo={addTask} />
                          <div className="d-flex justify-content-center my-4">
                            <ButtonGroup>
                                <Button 
                                    variant={filter === 'all' ? 'primary' : 'outline-primary'} 
                                    onClick={() => setFilter('all')}>
                                    All
                                </Button>
                                <Button 
                                    variant={filter === 'completed' ? 'primary' : 'outline-primary'} 
                                    onClick={() => setFilter('completed')}>
                                    Completed
                                </Button>
                                <Button 
                                    variant={filter === 'incomplete' ? 'primary' : 'outline-primary'} 
                                    onClick={() => setFilter('incomplete')}>
                                    Incomplete
                                </Button>
                            </ButtonGroup>
                        </div>
                        <hr className='my-4' />
                        <TodoList todos={filteredTodos} onEdit={handleEdit} onToggle={handleToggle} onDelete={handleDelete} />
                      </>
                    }
                  />
                  <Route path='/contact' element={<ContactPage />} />
                </Routes>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Router>
    </>
  )
}

export default App