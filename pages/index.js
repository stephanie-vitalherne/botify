import Head from "next/head";
import { getSession } from "next-auth/react";
import { Sidebar, Center } from "../components";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Botify2.0</title>
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
