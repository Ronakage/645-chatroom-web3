import Head from 'next/head'
import Login from '../components/Login';
import { useMoralis } from "react-moralis";

export default function Home() {
  const{ isAuthenticated, logout } = useMoralis();

  if(!isAuthenticated) return <Login></Login>;

  return (
    <div className="h-screen">
      <Head>
        <title>645 Chatroom - Web 3.0</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <h1>The app</h1>
      <button onClick={logout}>Logout</button>
      <Login/>
    </div>
  )
}
