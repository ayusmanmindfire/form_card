import { createContext, useState } from "react";

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profiles, setProfiles] = useState([
    {
      name: "Profile",
      power: "Unknown Power",
      about: "No description available.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);

  const addProfile = (profile) => {
    setProfiles((prevProfiles) => {
      const newProfiles = [...prevProfiles, profile];
      return newProfiles;
    });
    
  };
  console.log(profiles);

  return (
    <ProfileContext.Provider value={{  addProfile,profiles }}>
      {children}
    </ProfileContext.Provider>
  );
}