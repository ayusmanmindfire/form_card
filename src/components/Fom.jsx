import { useContext, useState } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

export function Form() {
    const formLabelStyle = "block text-sm text-left font-medium text-gray-900 "
    const formInputStyle = "bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-full"

    const {addProfile}= useContext(ProfileContext);  //Context, as we will use this array to show as cards in another components

    const [name, setName] = useState("");
    const [power, setPower] = useState("");
    const [about,setAbout] = useState("");
    const [imageUrl,setImageUrl]=useState("")

    function handleSubmit(e) {
        e.preventDefault();
        alert("Are you sure to submit?")

        const newProfile={
            name:name,
            power:power,
            about:about,
            imageUrl:imageUrl
        }
        addProfile(newProfile);
        // console.log(profiles)

        setName("");
        setPower("");
        setAbout("");
        setImageUrl("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="" className={formLabelStyle}>Name</label>
                <input
                    type="text"
                    value={name}
                    className={formInputStyle} 
                    onChange={(e)=>setName(e.target.value)}/>

                <label htmlFor="" className={formLabelStyle}>super power</label>
                <input
                    type="text"
                    value={power}
                    className={formInputStyle} 
                    onChange={(e)=>setPower(e.target.value)}/>
                    
                <label htmlFor="" className={formLabelStyle}>About</label>
                <textarea
                    type="text"
                    className={formInputStyle} 
                    value={about}
                    onChange={(e)=>setAbout(e.target.value)}/>

                <label htmlFor="" className={formLabelStyle}>Upload your image</label>
                <input
                    type="file"
                    id="file-input"
                    name="ImageStyle"
                    // value={imageUrl}
                    onChange={(e)=>setImageUrl(URL.createObjectURL(e.target.files[0]))}
                    className={formInputStyle} />

                <input
                    type="submit"
                    className="bg-blue-300 hover:bg-blue-500 cursor-pointer rounded p-2" />
            </form>
        </>
    )
}