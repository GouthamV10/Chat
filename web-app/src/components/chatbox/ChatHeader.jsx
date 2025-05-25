import React from "react";

export default function ChatHeader({ details }) {
	return (
		<div className="bg-blue-400 flex justify-between ">
			<div className="flex">
				<img src={details.avatar} />
				<p>{details.name}</p>
			</div>
			<div>
				<a>Settings</a>
			</div>
		</div>
	);
}
