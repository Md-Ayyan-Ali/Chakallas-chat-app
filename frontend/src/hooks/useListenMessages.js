import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext.jsx";
import useConversation from "../zustand/useConversation.js";
import notificationSound from '../assets/sounds/notification.mp3';

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
            const sounds = new Audio(notificationSound);
            sounds.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;



// import React, { useEffect } from 'react'
// import { useSocketContext } from '../context/SocketContext'
// import useConversation from '../zustand/useConversation';

// const useListenMessages = () => {
//   const {socket} = useSocketContext();
//   const {messages, setMessages} = useConversation();

//   useEffect(() => {
//     socket?.on("newMessage", (newMessage) => {

//         setMessages([...messages, newMessage])
//     })

//     return () => socket?.off("newMessage")
//   },[socket, setMessages, messages])
// }

// export default useListenMessages;