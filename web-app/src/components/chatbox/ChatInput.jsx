import React, { useRef } from "react";
import SenderMessage from "./SenderMessage";

export default function ChatInput() {
	const textInputRef = useRef();
	const SenderMessage = () => {
		console.log("Message sent succesfuuly", textInputRef.current.value);
	};
	return (
		<div className="flex justify-center items-center pb-6 w-full">
			<div>
				<input
					ref={textInputRef}
					type="input"
					placeholder="Message"
					alt="Send Message Field"
				/>
			</div>
			<button onClick={SenderMessage}>{">"}</button>
		</div>
	);
}
