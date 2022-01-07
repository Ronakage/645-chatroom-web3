import Head from 'next/head'
import Login from '../components/Login';
import { useMoralis } from "react-moralis";
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const{ isAuthenticated, logout } = useMoralis();

  if(!isAuthenticated) return <Login/>

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-white to-orange-400 overflow-hidden">
      <Head>
        <title>645 Chatroom - Web 3.0</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

        <div className="max-w-screen-2xl mx-auto">

          {/* Header */}
          <Header/>

          {/* Messages */}
          <Messages/> 

        </div>
   
    </div>
  )
}
