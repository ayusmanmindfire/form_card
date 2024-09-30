import { Form } from "../components/Fom";
import { Navbar } from "../components/Navbar";
// import { ProfileProvider } from "../contexts/ProfileContext";

export function Home(){
    return(
        <>
        <Navbar/>
        <div className ="flex m-10 h-screen gap-5">
            {/* info div */}
            <div className="bg-red-100 w-full rounded-xl">
                <div className="bg-red-200 p-10 m-5 rounded-xl">
                    <label className="text-3xl font-serif">Fill the form to generate a card which will be reflected in profile section</label>
                </div>
                
            </div>
            {/* form div  */}
            <div className="bg-blue-100 w-full p-5 rounded-xl">
                {/* <ProfileProvider> */}
                <Form/>
                {/* </ProfileProvider> */}
            </div>
        </div>
        </>
    )
}