import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";

function Message({message}) {
    const { user } = useMoralis();
    const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
    return (
        <div className={`flex items-end space-x-2 relative ${isUserMessage && "justify-end"}`}>
            {/* Avatar next to the message */}
            <div className={`relative h-12 w-12 ${isUserMessage && 'order-last ml-2'}`}>
                <Avatar username={message.get("username")}/>
            </div>
            {/* Message box + content */}
            <div className={`flex space-x-4 p-3 rounded-lg ${isUserMessage ? "rounded-br-none bg-orange-400 text-white shadow-xl" : "rounded-bl-none bg-white text-black shadow-xl"}`}>
                <p>{message.get("message")}</p>
            </div>
            {/* Time stamp */}
            <TimeAgo className={`text-[10px] italic text-gray-600 ${isUserMessage && "order-first p-1"}`} datetime={message.createdAt}/>
            {/* Name under chat */}
            <p className={`absolute -bottom-5 text-xs rounded-full p-1 ${isUserMessage ? 'text-gray-600 font-bold shadow-xl' : 'text-gray-600 font-bold shadow-xl'}`}> 
                {message.get("username")}
            </p>
        </div>
    )
}

export default Message;
