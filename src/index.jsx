import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./routes/HomePage";
import Calculator from "./routes/Calculator";
import CirriculumVitae from "./routes/CirriculumVitae";
import Todo from "./routes/ToDo";
import Api from "./routes/Api";
import "./css/css-main/index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Header />
				<HomePage />
			</>
		),
	},
	{
		path: "/cv",
		element: (
			<>
				<Header />
				<CirriculumVitae />
			</>
		),
	},
	{
		path: "/calculator",
		element: (
			<>
				<Header />
				<Calculator />
			</>
		),
	},
	{
		path: "/todo",
		element: (
			<>
				<Header />
				<Todo />
			</>
		),
	},
	{
		path: "/api",
		element: (
			<>
				<Header />
				<Api />
			</>
		),
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
