import React from "react";
import {   cleanup } from 'react-test-renderer';
import {render,fireEvent} from '@testing-library/react' 
import Todo from "./Todo";

// it('testCase 1',()=>{
//     const wrapper = renderer.create(<Todo/>).toJSON();
//     expect(wrapper).toMatchSnapshot();
// })


test('renders correct initial dom' ,()=>{
    const doc = render(<Todo/>);

    const inputElement = doc.getByTestId('input');
    const todos = doc.queryAllByTestId('todo');
    expect(inputElement.getAttribute('value')).toBe('');
    expect(todos.length).toBe(1);
})

test('it creates a new Todo',()=>{
    const doc = render (<Todo/>)
    const inputElement = doc.getByTestId('input')
    const createButtonElement = doc.getByTestId('createButton')

    //creating the todo
    fireEvent.change(inputElement,{target: {value:'React to learn'}})
    fireEvent.click(createButtonElement);

    const todos = doc.getAllByTestId('todo');
    const todo = doc.getByTestId('todo');

    const todoNameElement = todo.firstChild;


    expect(todoNameElement.textContent).toBe('React to learn');

    expect(inputElement.value).toBe('');

  // The todo should be in the document.
  expect(todo).toBeInTheDocument();




})

test('it deletes the todo',()=>{
    const doc = render(<Todo/>)
    const inputElement = doc.getByTestId('input');
    const createButtonElement = doc.getByTestId('createButton')

    //again creating the todo
    fireEvent.change(inputElement,{target:{value:'React to Learn'}})
    fireEvent.click(createButtonElement);

    const todo = doc.getByTestId('todo');

    const todoDeleteButton = doc.getByTestId('deleteButton')
    fireEvent.click(todoDeleteButton)

    const todos = doc.queryAllByTestId('todo');

    //expect(todo).not.toBeInTheDocument();
    expect(todos.length).toBe(1);



})

