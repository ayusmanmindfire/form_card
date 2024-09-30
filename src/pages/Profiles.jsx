import { useContext } from "react";
import { Navbar } from "../components/Navbar";
import { ProfileContext } from "../contexts/ProfileContext";
import { Card } from "../components/Card";

export function Profiles() {
    const { profiles } = useContext(ProfileContext);
    console.log(profiles);

    return (
        <>
            <Navbar />
            <div className="p-2">
                <h1 className="text-xl mb-4">Welcome to the profile section</h1>
                <div className="flex flex-wrap gap-4">
                    {profiles.map((profile, index) => (
                        <div className="w-64" key={index}>
                            <Card
                                name={profile.name}
                                power={profile.power}
                                about={profile.about}
                                imageUrl={profile.imageUrl}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
