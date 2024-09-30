export function Card({ name, power, about, imageUrl }) {
    return (
        <div className="card w-full p-4 rounded-lg shadow-md bg-white border-gray-300">
            <img
                src={imageUrl || "https://via.placeholder.com/150"}
                alt="Profile"
                className="card-img w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 text-center overflow-auto">{name || "New User"}</h2>
            <h3 className="text-lg text-gray-600 text-center overflow-auto">{power || "No Power"}</h3>
            <p className="text-gray-500 text-center mt-2 overflow-auto">{about || "No description"}</p>
        </div>
    );
}
