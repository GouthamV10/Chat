import React from "react";
import ChatInput from "./ChatInput";
import SenderMessage from "./SenderMessage";
import RecieverMessage from "./RecieverMessage";

export default function Chats() {
	const chatMessages = [
		{
			id: 1,
			chatId: 1, // Alice's chat
			sender: "me",
			message: "Hey Alice, how are you?",
			timestamp: "10:00 AM",
		},
		{
			id: 2,
			chatId: 1,
			sender: "Alice Johnson",
			message: "Hi! I'm good, thanks. How about you?",
			timestamp: "10:02 AM",
		},
		{
			id: 3,
			chatId: 1,
			sender: "me",
			message: "Doing well. Are you joining the meeting?",
			timestamp: "10:05 AM",
		},
		{
			id: 4,
			chatId: 1,
			sender: "Alice Johnson",
			message: "Yes, I’ll be there in 5 mins.",
			timestamp: "10:06 AM",
		},
		{
			id: 5,
			chatId: 1,
			sender: "me",
			message: "Great! See you soon.",
			timestamp: "10:07 AM",
		},
		{
			id: 6,
			chatId: 1,
			sender: "Alice Johnson",
			message: "By the way, did you finish the report?",
			timestamp: "10:08 AM",
		},
		{
			id: 7,
			chatId: 1,
			sender: "me",
			message: "Almost done, just need to finalize a few details.",
			timestamp: "10:09 AM",
		},
		{
			id: 8,
			chatId: 1,
			sender: "Alice Johnson",
			message: "No worries, take your time. We can review it together later.",
			timestamp: "10:10 AM",
		},
		{
			id: 9,
			chatId: 1,
			sender: "me",
			message: "Thanks! I appreciate it.",
			timestamp: "10:11 AM",
		},
		{
			id: 10,
			chatId: 1,
			sender: "Alice Johnson",
			message: "Anytime! Let’s catch up after the meeting.",
			timestamp: "10:12 AM",
		},
		{
			id: 11,
			chatId: 1,
			sender: "me",
			message: "Sounds like a plan. See you soon!",
			timestamp: "10:13 AM",
		},
		{
			id: 12,
			chatId: 1,
			sender: "Alice Johnson",
			message: "Looking forward to it! 😊",
			timestamp: "10:14 AM",
		},
		{
			id: 13,
			chatId: 1,
			sender: "me",
			message: "Hey Alice, did you get the chance to review the report?",
			timestamp: "10:15 AM",
		},
		{
			id: 14,
			chatId: 1,
			sender: "Alice Johnson",
			message: "Yes, I did! It looks great. Just a couple of minor tweaks needed.",
			timestamp: "10:16 AM",
		},
		{
			id: 15,
			chatId: 1,
			sender: "me",
			message: "Awesome! I’ll make those changes right away.",
			timestamp: "10:17 AM",
		},
		{
			id: 16,
			chatId: 1,
			sender: "Alice Johnson",
			message: "Perfect! Let me know if you need any help.",
			timestamp: "10:18 AM",
		},
		{
			id: 17,
			chatId: 1,
			sender: "me",
			message: "Will do! Thanks for your support.",
			timestamp: "10:19 AM",
		},
		{
			id: 18,
			chatId: 1,
			sender: "Alice Johnson",
			message: "Anytime! 😊 Let’s catch up later.",
			timestamp: "10:20 AM",
		},
		{
			id: 19,
			chatId: 1,
			sender: "me",
			message: "Sure! I’ll ping you once I’m done with the report.",
			timestamp: "10:21 AM",
		},
		{
			id: 20,
			chatId: 1,
			sender: "Alice Johnson",
			message: "Sounds good! Talk to you later.",
			timestamp: "10:22 AM",
		},
		{
			id: 21,
			chatId: 1,
			sender: "me",
			message: "Take care, Alice! 😊",
			timestamp: "10:23 AM",
		},
		{
			id: 22,
			chatId: 1,
			sender: "Alice Johnson",
			message: "You too! Bye for now.",
			timestamp: "10:24 AM",
		},
		{
			id: 23,
			chatId: 1,
			sender: "me",
			message: "Bye! 😊",
			timestamp: "10:25 AM",
		},
		{
			id: 24,
			chatId: 1,
			sender: "Alice Johnson",
			message: "See you soon!",
			timestamp: "10:26 AM",
		},
		{
			id: 25,
			chatId: 1,
			sender: "me",
			message: "Looking forward to it! 😊",
			timestamp: "10:27 AM",
		},
		{
			id: 26,
			chatId: 1,
			sender: "Alice Johnson",
			message: "Me too! Let’s catch up later.",
			timestamp: "10:28 AM",
		},
		{
			id: 27,
			chatId: 1,
			sender: "me",
			message: "Sure! I’ll ping you once I’m done with the report.",
			timestamp: "10:29 AM",
		},
		{
			id: 28,
			chatId: 1,
			sender: "Alice Johnson",
			message: "Sounds good! Talk to you later.",
			timestamp: "10:30 AM",
		},
	];

	return (
		<div className=" flex flex-col gap-2.5 w-full overflow-y-scroll">
			<div className="flex flex-col flex-1 justify-end px-5 py-2.5">
				{chatMessages.map((message) => {
					return message.id % 2 == 0 ? (
						<SenderMessage key={message.id} message={message} />
					) : (
						<RecieverMessage key={message.id} message={message} />
					);
				})}
			</div>
		</div>
	);
}
