import { useContext } from "react";
import { Navbar } from "../components/Navbar";
import { ProfileContext } from "../contexts/ProfileContext";
import { Card } from "../components/Card";

export function Profiles(){
    const {profiles}= useContext(ProfileContext)
    console.log(profiles)

    return(
        <>
        <Navbar/>

        <div>
            Welcome to profile section
            <div className="flex w-full gap-3">
                {profiles.map((profile,index)=>{
                    return(
                    <Card
                        key={index}
                        name={profile.name}
                        power={profile.power}
                        about={profile.about}
                        imageUrl={profile.imageUrl}
                    />
                    )
                })}
            </div>
        </div>
        </>
    )
}