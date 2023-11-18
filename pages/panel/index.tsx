import { NextPage } from "next";
import Link from "next/link";
import { Navbar } from "../../src/components/_section/navbar/navbar";
import { signOut, useSession } from "next-auth/react";
import { ComponentDenied } from "../../src/components/_section/denied/ComponentDenied";
import { ComponentLoader } from "../../src/components/_basic/loader-dashboard/ComponentLoader";
const Panel: NextPage = () => {
    const { data: session } = useSession();
    if (!session) return <ComponentLoader />
    return (
        <>
            <Navbar />
            {/* <p style={{ paddingTop: '120px' }}>{session.user.email}</p>
            <p>{session.user.name}</p>
            <p>{session.user.surname}</p>
            <p>{session.user.roles}</p> */}
            <ComponentDenied text={`${session.user.name}! Zapraszamy wkrótce :)`} />
            <section style={{ textAlign: "center", width: '100%' }}>
                <Link href="#" onClick={() => signOut()} >
                    Wyloguj się
                </Link>
            </section>

        </>
    )
}
export default Panel;