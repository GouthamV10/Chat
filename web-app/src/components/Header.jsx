import React from "react";

export default function Header() {
	return (
		<div className="bg-blue-500 w-screen h-12 flex justify-between items-center px-5">
			<div className="flex gap-5">
				<a>Chats</a>
				<a>Status</a>
			</div>
			<div className="flex gap-5">
				<a>Settings</a>
				<a>Logout</a>
			</div>
		</div>
	);
}
