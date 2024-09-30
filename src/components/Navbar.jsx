import { useNavigate } from "react-router-dom"

export function Navbar() {
    const linkStyle="hover:bg-pink-300 rounded p-1"
    const navigate=useNavigate();
    return (
        
        <>
            <div className="flex flex-wrap gap-3 p-3 items-center justify-start bg-pink-100">
                {/* <a href="/" className={linkStyle}>Home</a>
                <a href="/products" className={linkStyle}>Products</a>
                <a href="/profiles" className={linkStyle}>Profiles</a>      */}
                
                <button className={linkStyle} onClick={()=>navigate("/")}>Home</button>
                <button className={linkStyle} onClick={()=>navigate("/products")}>Products</button>
                <button className={linkStyle} onClick={()=>navigate("/profiles")}>Profiles</button> 
                
            </div>
        </>
    )
}