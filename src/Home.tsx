import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="home">
      <div className="home-header text-2xl font-bold mb-5">Home</div>

      <div className="home-login">
        <button
          onClick={() => loginWithRedirect()}
          className="bg-blue-400 p-2 rounded-md text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}
