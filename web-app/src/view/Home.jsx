import React from "react";
import Header from "../components/Header";
import ChatNav from "../components/ChatNav";
import ChatBox from "../components/ChatBox";

export default function Home() {
	return (
		<div className="w-screen h-screen flex flex-col items-center">
			<Header />
			<div className="w-screen h-screen flex ">
				<ChatNav />
				<ChatBox />
			</div>
		</div>
	);
}
