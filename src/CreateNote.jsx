import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const CreateNote = (props) => {
	const [expand, setExpand] = useState(false);

	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	const InputEvent = (event) => {
		const { name, value } = event.target;

		setNote((oldData) => {
			return { ...oldData, [name]: value };
		});
	};

	const addEvent = () => {
		props.passNote(note);
		setNote({
			title: "",
			content: "",
		});
	};
	const expandIt = () => {
		setExpand(true);
	};
	const btoNormal = () => {
		setExpand(false);
	};
	return (
		<>
			<div className="main_note" onDoubleClick={btoNormal}>
				<form>
					{expand ? (
						<input
							type="text"
							name="title"
							value={note.title}
							onChange={InputEvent}
							placeholder="Title"
							autoComplete="off"
						/>
					) : null}
					<br />
					<textarea
						rows=""
						column=""
						name="content"
						value={note.content}
						onChange={InputEvent}
						placeholder="Write Your Note..."
						onClick={expandIt}
						className="w-100 d-block"
					></textarea>
					{expand ? (
						<Button
							onClick={addEvent}
							className="btn"
							variant="contained"
							color="primary"
						>
							Add Note
						</Button>
					) : null}
				</form>
			</div>
		</>
	);
};
export default CreateNote;
