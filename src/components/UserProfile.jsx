import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserProfile({ users }) {
    const { loggedIn, setLoggedIn } = useContext(UserContext);

    return (
        <div>
            <h2>User Authentication</h2>

            {loggedIn ? (
                <div>
                    <h3>Registered Users</h3>

                    {users.slice(0, 3).map((user) => (
                        <div key={user.id}>
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Username: {user.username}</p>
                            <hr />
                        </div>
                    ))}

                    <button onClick={() => setLoggedIn(false)}>
                        Logout
                    </button>
                </div>
            ) : (
                <button onClick={() => setLoggedIn(true)}>
                    Login
                </button>
            )}
        </div>
    );
}

export default UserProfile;