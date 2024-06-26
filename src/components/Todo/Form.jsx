import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
	//Here I can write JavaScript code and functions
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	const sumbitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1234 },
		]);
		setInputText("");
	};

	const statusHandler = (e) => {
		setStatus(e.target.value);
		console.log(e.target.value);
	};

	return (
		<form>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type="text"
				className="todo-input"
			/>
			<button onClick={sumbitTodoHandler} className="todo-button" type="submit">
				<FontAwesomeIcon icon={faPlus} />
			</button>
			<div className="select">
				<select onChange={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
