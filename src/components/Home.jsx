import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// login button component
function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="loginButton">
      <Button
        variant="contained"
        color="success"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>
    </div>
  );
}

function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="home">
      <div className="home-header text-2xl text-bold mb-2">
        Oauth using Auth0
      </div>
      <div className="home-login">
        <div className="home-login-description mb-2">
          Login to access the secure resource
        </div>

        {isAuthenticated ? (
          <div className="home-profile">
            <Link to="/profile">
              <Button>Go to Profile</Button>
            </Link>
          </div>
        ) : (
          <div className="home-login-button">
            <LoginButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
