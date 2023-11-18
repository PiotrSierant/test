import { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Navbar } from "../src/components/_section/navbar/navbar";
import { ComponentDenied } from "../src/components/_section/denied/ComponentDenied";

const Home: NextPage = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        let redirect = setTimeout(() => router.push('/'));
        return () => {
            clearTimeout(redirect);
        };
    }, [router])
    return (
        <>
            <Navbar />
            <ComponentDenied />
        </>
        // <header>
        //     <h1>Brak dostępu</h1>
        //     {session && <section>
        //         <h3>Wyloguj się</h3>
        //         <button onClick={() => signOut()}>hehehe</button>
        //     </section>}
        // </header>
    )
}
export default Home;