import React from "react";

export default function ContactTile({ contact }) {
	return (
		<div className="bg-blue-950 flex justify-between">
			<div>
				<img src={contact.avatar} />
			</div>
			<div>
				<p>{contact.name}</p>
				<p>{contact.lastMessage}</p>
			</div>
			<div>
				<p>{contact.time}</p>
			</div>
		</div>
	);
}
