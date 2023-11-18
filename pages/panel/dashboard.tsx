import { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Dashboard: NextPage = () => {
  const { data: session } = useSession();
  if (!session) return null
  return (
    <>
      <p style={{ paddingTop: '120px' }}>{session.user.email}</p>
      <p>{session.user.name}</p>
      <p>{session.user.surname}</p>
      <p>{session.user.roles}</p>
      <Link href="#" onClick={() => signOut()}>
        Wyloguj się
      </Link>
      <h1>DASHBOARD</h1>
      <h1>DASHBOARD</h1>
      <h1>DASHBOARD</h1>
      <h1>DASHBOARD</h1>
      <h1>DASHBOARD</h1>
      <h1>DASHBOARD</h1>
    </>

  )
}
export default Dashboard;