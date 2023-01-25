import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

function FetchApi(_props: { token: string | null }) {
  const { token } = _props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ask, setAsk] = useState<boolean>(false);
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    if (!ask) return;

    try {
      setIsLoading(true);

      fetch("", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setData(res.msg))
        .catch((e) => console.error(e));
    } catch (e) {
      console.log("Cannot fetch data!");
      console.error(e);
    }

    setIsLoading(false);
    setAsk(false);
  }, [ask]);

  return (
    <div className="fetchApi">
      <div className="fetchApi-button mb-4">
        <button
          onClick={() => setAsk(true)}
          className="bg-green-500 rounded-md p-2 text-white"
        >
          {isLoading ? "Loading ..." : "Fetch"}
        </button>
      </div>

      <div className="fetchApi-data">
        {data !== null ? data : "No data to show!"}
      </div>
    </div>
  );
}

export default function Auth() {
  const { user, logout, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        setToken(token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="auth">
      <div className="auth-header font-bold text-2xl mb-5">
        You are logged In!!!
      </div>
      <div className="auth-user mb-5">
        {user !== undefined ? (
          <>
            <img src={user.picture} alt={user.name} />
            <div>{user.name}</div>
            <div>{user.email}</div>
          </>
        ) : null}
      </div>

      <div className="mb-5">
        <FetchApi token={token} />
      </div>

      <div className="auth-logout">
        <button
          onClick={() => logout({ logoutParams: { returnTo: "*/" } })}
          className="bg-red-600 text-white p-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
