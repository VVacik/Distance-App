import React, { useEffect, useState } from "react";
import { getProfile } from "../Api/Login_Post"; // zakładam, że tam masz funkcję

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        setError("Nie udało się pobrać profilu.");
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  if (error) return <div>{error}</div>;
  if (!profile) return <div>Ładowanie profilu...</div>;

  return (
    <div>
      <h2>Profil użytkownika</h2>
      <p>
        <strong>ID:</strong> {profile.id}
      </p>
      <p>
        <strong>Nazwa użytkownika:</strong> {profile.username}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
    </div>
  );
};

export default Profile;
