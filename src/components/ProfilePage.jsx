// importing libraries
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

// importing configuration
import CONFIG from "../config/index";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <Button
      variant="contained"
      color="error"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Logout
    </Button>
  );
}

function APIUnsecuredData() {
  const [unsecureData, setUnsecureData] = useState(null);

  useEffect(() => {
    const getUnsecureData = async () => {
      try {
        const res = await fetch(`${CONFIG.API}/test/unsecuredResource`);
        const data = await res.json();

        // if there is an error
        if (data.error) {
          console.error("Unable to fetch data.");
          return;
        }

        // set data
        setUnsecureData(data.data.msg);
      } catch (err) {
        console.error(err);
      }
    };

    getUnsecureData();
  }, []);

  return (
    <div className="api">
      <div className="api-unsecured">
        {unsecureData !== null ? <p>{unsecureData}</p> : null}
      </div>
    </div>
  );
}

function APISecuredData() {
  const [secureData, setSecureData] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getSecureData = async () => {
      try {
        // getting access token
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: CONFIG.AUTH0_AUDIENCE,
          },
        });

        const res = await fetch(`${CONFIG.API}/test/securedResource`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await res.json();
        console.log(data);

        // if there is an error
        if (data.error) {
          console.log("Cannot fetch data.");
          return;
        }

        // set data
        setSecureData(data.data.msg);
      } catch (e) {
        console.error(e);
      }
    };

    // call
    getSecureData();
  }, []);

  return (
    <div className="api">
      <div className="api-unsecured">
        {secureData !== null ? <p>{secureData}</p> : null}
      </div>
    </div>
  );
}

function ProfilePage() {
  const { user, isLoading } = useAuth0();

  if (isLoading) return <div>... Loading</div>;

  return (
    <div className="profile">
      <div className="profile-header text-2xl text-bold mb-10">
        Profile Page
      </div>
      <div className="profile-data my-3">
        <img
          className="rounded-full h-24 w-24"
          src={user.picture}
          alt={user.name}
        />
        <div className="text-lg">{user.name}</div>
        <div className="text-sm">{user.email}</div>
      </div>
      <div className="profile-api mb-3">
        <APIUnsecuredData />
      </div>
      <div className="profile-api-secure mb-3">
        <APISecuredData />
      </div>
      <div className="profile-logout">
        <LogoutButton />
      </div>
    </div>
  );
}

export default ProfilePage;
