import React from "react";
import ContactTile from "./chatnav/ContactTile";

export default function ChatNav({ setChat }) {
	const contacts = [
		{
			id: 1,
			name: "Alice Johnson",
			avatar: "https://i.pravatar.cc/150?img=1",
			lastMessage: "Hey, are you coming today?",
			time: "10:15 AM",
			isOnline: true,
		},
		{
			id: 2,
			name: "Bob Smith",
			avatar: "https://i.pravatar.cc/150?img=2",
			lastMessage: "I'll send the documents.",
			time: "Yesterday",
			isOnline: false,
		},
		{
			id: 3,
			name: "Clara Wilson",
			avatar: "https://i.pravatar.cc/150?img=3",
			lastMessage: "Sure, that works for me.",
			time: "12:30 PM",
			isOnline: true,
		},
		{
			id: 4,
			name: "David Lee",
			avatar: "https://i.pravatar.cc/150?img=4",
			lastMessage: "Let's catch up soon!",
			time: "Sunday",
			isOnline: false,
		},
		{
			id: 5,
			name: "Eva Green",
			avatar: "https://i.pravatar.cc/150?img=5",
			lastMessage: "Typing...",
			time: "Now",
			isOnline: true,
		},
	];

	const handleSetChat = (contact) => {
		setChat(contact);
	};

	return (
		<div className="bg-blue-50 w-4/12 overflow-y-auto">
			<p>Chats</p>
			<div className="flex flex-col gap-0.5">
				{contacts.map((contact) => {
					return (
						<button key={contact.id} onClick={() => handleSetChat(contact)}>
							<ContactTile contact={contact} />
						</button>
					);
				})}
			</div>
		</div>
	);
}
