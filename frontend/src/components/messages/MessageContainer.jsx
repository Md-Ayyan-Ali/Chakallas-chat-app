import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext.jsx";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>To:</span>{" "}
						<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;



// import React, { useEffect } from 'react'
// import Messages from './Messages.jsx'
// import MessageInput from './MessageInput.jsx';
// import { TiMessages } from "react-icons/ti";
// import useConversation from '../../zustand/useConversation.js';


// const MessageContainer = () => {
// const {selectedConversation, setSelectedConversation} = useConversation();

//   useEffect(() => {
//     // cleanup
//     return () => setSelectedConversation(null)
//   },[setSelectedConversation])

//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//       {!selectedConversation ? (
//         <NoChatSelected />
//       ) : (
//         <>
//         {/* Header */}
//         <div className='bg-slate-500 px-4 py-2 mb-2'>
//             <span className='label-text'>To:</span>{" "} 
//             <span className='text-gary-900 font-bold'>{selectedConversation.fullName}</span>
//         </div>

//         <Messages />
//         <MessageInput />
//         </>
//       )}
//     </div>
//   )
// }
// export default MessageContainer;

// const NoChatSelected = () => {
//   return (
//     <div className='flex items-center justify-center w-full h-full'>
//       <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
//         <p>Welcome 👋 Md Ayyan Ali</p>
//         <p>Start a conversation by sending a message</p>
//         <TiMessages className='text-3xl md:text-6xl text-center'/>
//       </div>
//     </div>
//   );
// };



// const NoChatSelected = () => {
//   return (
//     <div className='flex item-center justify-center w-full h-full'>
//       <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
//         <p>Welcome 👋 Md Ayyan Ali</p>
//         <p>Start a conversation by sending a message</p>
//         <TiMessages className='text-3xl md:text-6xl text-center'/>
//       </div>
//     </div>
//   )
// }



// import React from 'react'
// import Messages from './Messages.jsx'
// import MessageInput from './MessageInput.jsx';

// const MessageContainer = () => {
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//         <>
//         {/* Header */}
//         <div className='bg-slate-500 px-4 py-2 mb-2'>
//             <span className='label-text'>To:</span> <span className='text-gary-900 font-bold'>Najiba Khatun</span>
//         </div>

//         <Messages />
//         <MessageInput />

//         </>
//     </div>
//   )
// }

// export default MessageContainer;