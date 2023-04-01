// importing libraries
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

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

function ProfilePage() {
  const { user, isLoading } = useAuth0();

  if (isLoading) return <div>... Loading</div>;

  return (
    <div className="profile">
      <div className="profile-header text-2xl text-bold mb-10">
        Profile Page
      </div>
      {user ? (
        <div className="profile-data my-5">
          <img className="rounded-full" src={user.picture} alt={user.name} />
          <div className="text-lg">{user.name}</div>
          <div className="text-sm">{user.email}</div>
        </div>
      ) : null}
      <div className="profile-logout">
        <LogoutButton />
      </div>
    </div>
  );
}

export default ProfilePage;
