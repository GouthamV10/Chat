import React from "react";
import ChatHeader from "./chatbox/ChatHeader";
import Chats from "./chatbox/Chats";
import ChatInput from "./chatbox/ChatInput";

export default function ChatBox({ chat }) {
	return (
		<div className="bg-amber-200 flex flex-col justify-between w-8/12">
			<ChatHeader details={chat} />
			<Chats />
			<ChatInput />
		</div>
	);
}
