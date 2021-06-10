import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import "./App.css";

const App = () => {
	const [addItem, setAddItem] = useState([]);

	const addNote = (note) => {
		setAddItem((oldData) => {
			return [...oldData, note];
		});
	};

	const onDelete = (id) => {
		setAddItem((oldData) =>
			oldData.filter((currdata, indx) => {
				return indx !== id;
			})
		);
	};

	return (
		<>
			<Header />
			<CreateNote passNote={addNote} />

			{addItem.map((val, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={val.title}
						content={val.content}
						deleteItem={onDelete}
					/>
				);
			})}
			<Footer />
		</>
	);
};

export default App;
