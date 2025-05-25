import React, { useState } from "react";
import Header from "../components/Header";
import ChatNav from "../components/ChatNav";
import ChatBox from "../components/ChatBox";

export default function Home() {
	const [chat, setChat] = useState("");
	return (
		<div className="w-screen h-screen flex flex-col items-center overflow-hidden">
			<Header />
			<div className="w-screen h-full flex ">
				<ChatNav setChat={setChat} />
				<ChatBox chat={chat} />
			</div>
		</div>
	);
}
