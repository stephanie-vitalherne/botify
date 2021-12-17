import Head from "next/head";
import { Sidebar } from "../components";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Botify2.0</title>
      </Head>

      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}
