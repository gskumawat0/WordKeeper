import React from "react";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Note = (props) => {
	const deleteNote = () => {
		props.deleteItem(props.id);
	};
	return (
		<>
			<div className="note">
				<h1 className="text-danger my-3"> {props.title} </h1>
				<br />
				<p className="text-success">{props.content}</p>
				<Button className="btn" onClick={deleteNote}>
					<DeleteOutlineIcon className="deletIcon" />
				</Button>
			</div>
		</>
	);
};
export default Note;
