import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState("");


    const sendMessage = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if(!message) return;

        const Messages = Moralis.Object.extend('Messages')
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        })
        .then(
            (message: any) => {

            },
            (error: { message: any; }) => {
                console.log(error.message);
            }
        );

        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth"});
        setMessage("");
    };

    return (

        <form className="flex fixed bottom-10 bg-white opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full">
            <input className="flex-grow outline-none bg-transparent text-black placeholder-gray-500 pr-5" 
            type="text" 
            placeholder={`Talk to the world, ${user.getUsername()}...`} 
            value = {message}
            onChange={e => setMessage(e.target.value)}/>

            <button type="submit" onClick={sendMessage} className="font-bold text-orange-600">Send</button>
        </form>
    )
}

export default SendMessage;
