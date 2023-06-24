import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { NextPageButtonLink } from "../UI/NextPageButtonLink";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to HIERR</title>
        <meta
          name="description"
          content="Share your voice to help shape Hawai&#699;i's resilient future."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css"
        />
        <script
          src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
          integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
          async
        />
      </Head>
      <main className="bg-blue flex min-h-screen flex-col items-center justify-center bg-farmer-working bg-cover bg-center bg-no-repeat">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome to HIERR
          </h1>
          <div className="flex flex-col items-center gap-2">
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const handleSignOut = async () => {
    localStorage.clear();
    await signOut();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData ? (
          <NextPageButtonLink pageName="censusmap" msg="Click here to begin." />
        ) : null}
      </p>
      <button
        className="rounded-full bg-white/90 px-10 py-3 text-blue-default no-underline transition hover:bg-white hover:text-blue-darker"
        onClick={sessionData ? () => void handleSignOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
