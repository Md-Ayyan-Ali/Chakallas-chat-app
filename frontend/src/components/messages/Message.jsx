import React from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { extractTime } from "../../utils/extractTime.js";
import useConversation from "../../zustand/useConversation.js";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};
export default Message;

// import React from 'react'
// import { useAuthContext } from '../../context/AuthContext';
// import useConversation from '../../zustand/useConversation';

// const Message = ({message}) => {
//   const {authUser} = useAuthContext();
//   const {selectedConversation} = useConversation();
//   const fromMe = message.senderId === authUser._id;
//   const chatClassName = fromMe ? 'chat-end' : 'chat-start';
//   const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic;
//   const bubbleBgColor = fromMe ? 'bg-blue-500' : "";


//   return (
//     <div className={`chat ${chatClassName}`}>
//         <div className='chat-image avatar'>
//     <div className='w-10 rounded-full'>
//         <img src={profilePic} alt="Tailwind CSS bubble componenet" />
//     </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{message.message}</div>
//         <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>10:30</div>
//     </div>
//   )
// }

// export default Message;




// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//     <div className='w-10 rounded-full'>
//         <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="Tailwind CSS bubble componenet" />
//     </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500`}>Hi! What's up ?</div>
//         <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>10:30</div>
//     </div>
//   )
// }

// export default Message;