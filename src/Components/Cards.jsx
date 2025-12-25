export default function Cards({ characters }) {
    return (
        <div className="w-80 rounded-3xl bg-gray-900/40 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col p-3 transition-transform hover:scale-105 duration-500 border border-white/20">

            {/* Cover Image */}
            <div className="relative h-52 rounded-2xl">
                <img
                    src={characters.coverImage}
                    alt={characters.name}
                    className="w-full h-full object-cover brightness-90 rounded-2xl transition-transform hover:scale-110 duration-500"
                />

                {/* Follow Button */}
                <button className="absolute cursor-pointer top-4 right-4 bg-linear-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white px-4 py-1 rounded-full text-sm shadow-lg transition-all duration-300">
                    Follow +
                </button>

                {/* Avatar */}
                <div className="absolute -bottom-12 left-6">
                    <div className="w-24 h-24 cursor-pointer rounded-full border-4 border-gray-700 overflow-hidden bg-gray-800 hover:border-cyan-500 hover:scale-110 transition-all duration-500">
                        <img
                            src={characters.profileImage}
                            alt={characters.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="pt-14 px-4 pb-4">
                <h2 className="text-xl font-bold text-white">{characters.name}</h2>
                <p className="text-sm text-gray-300 mt-1">{characters.role}</p>
                <p className="text-sm text-gray-400 mt-2">{characters.bio}</p>
            </div>

            {/* Skill Level */}
            <div className="px-4 mb-4 mt-auto">
                <div className="w-full h-2 rounded-full bg-gray-700/60">
                    <div
                        className="h-2 rounded-full bg-linear-to-r from-sky-200 via-cyan-400 to-blue-500 transition-all duration-700"
                        style={{ width: `${characters.skillLevel}%` }}
                    ></div>
                </div>
                <p className="text-xs text-gray-300 mt-1">Skill Level: {characters.skillLevel}%</p>
            </div>

            {/* Stats */}
            {characters.stats && (
                <div className="p-3 flex justify-between items-center rounded-2xl bg-gray-800/50 backdrop-blur-md border border-gray-700">
                    {Object.entries(characters.stats).map(([key, value]) => (
                        <div key={key} className="flex flex-col justify-center items-center">
                            <p className="font-semibold text-cyan-400">{value}</p>
                            <p className="text-xs text-gray-300 capitalize">{key}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Bottom Actions */}
            <div className="p-2 mt-3 flex justify-between items-center rounded-2xl bg-gray-800/50 backdrop-blur-md border border-gray-700">
                <div className="flex justify-center items-center cursor-pointer hover:scale-125 transition-transform">
                    <i className="ri-youtube-fill text-3xl text-red-500"></i>
                </div>
                <div className="flex justify-center items-center cursor-pointer hover:scale-125 transition-transform text-black">
                    <i className="ri-twitter-x-fill text-3xl"></i>
                </div>
                <div className="flex justify-center items-center cursor-pointer hover:scale-125 transition-transform">
                    <i className="ri-instagram-fill text-3xl text-pink-500"></i>
                </div>
            </div>
        </div>
    );
}
