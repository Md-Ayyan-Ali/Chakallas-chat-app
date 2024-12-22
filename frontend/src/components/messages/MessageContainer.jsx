import React from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx';
import { TiMessages } from "react-icons/ti";


const MessageContainer = () => {
  const noChatSelected = true; //true or false
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {NoChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
        {/* Header */}
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span> <span className='text-gary-900 font-bold'>Md Ayyan Ali</span>
        </div>

        <Messages />
        <MessageInput />
        </>
      )}
    </div>
  )
}
export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 Md Ayyan Ali</p>
        <p>Start a conversation by sending a message</p>
        <TiMessages className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  );
};



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