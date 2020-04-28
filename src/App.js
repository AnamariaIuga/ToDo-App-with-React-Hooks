import React, { useState } from 'react';
import './App.css'
import { Container } from 'react-bootstrap';
import {
    ListGroup, 
    ListGroupItem, 
    Button,
    Form,
    Input,
    InputGroup
} from 'reactstrap';


const initialTodoList = [
    "Learn React Hooks",
    "Code, Code, Code", 
    "Fix all the bugs",
    "Take a break",
    "Code, Code, Code"
];

function TodoApp (){
    const {
        todo,
        todoList,
        handleInputChange,
        handleSubmit, 
        handleRemoveClick
    } = useTodoState();
    
    return (
        <Container>
            <section> 
                <h1>DAILY TODO LIST</h1>
                <ListGroup>
                    {todoList.map((item, i) => {
                        return (
                            <ListGroupItem key={i}>
                            {item}
                            <Button close onClick={() => handleRemoveClick(i)} />
                            </ListGroupItem>
                            );
                    })}
                </ListGroup>
                <Form onSubmit = {handleSubmit}>
                    <InputGroup>
                        <Input value={todo} onChange={handleInputChange} />
                        <Button>Add</Button>
                    </InputGroup>
                </Form>
            </section>
        </Container>
    );
 }

 function useTodoState() {
     const [todo, setTodo] = useState("");
     const [todoList, setTodoList] = useState(initialTodoList); 
 
    function handleInputChange(e) {
        setTodo(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTodoList([...todoList, todo]);
        setTodo("");
    }

    function handleRemoveClick(todoIndex) {
        const newTodoList = todoList.filter((_, i) => i !==todoIndex);
        setTodoList(newTodoList);
    }

    return {
        todo,
        todoList,
        handleInputChange,
        handleSubmit,
        handleRemoveClick
    };
}

export default TodoApp;