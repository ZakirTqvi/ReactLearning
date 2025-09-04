export default function Card({ username, imageURI }) {
  return (
    <div className="bg-white h-74 w-56 flex flex-col p-3">
      <div className=" h-40 w-full overflow-hidden rounded-md bg-red-400">
        <img
          className="h-full w-full object-cover"
          src={imageURI}
          alt="image"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center my-4">
           <div className="h-8 w-8">
            <img className="h-full w-full object-cover rounded-2xl" src={imageURI} alt="logo" />
           </div>
           <div className="text-base/5">
            <h3>{username}</h3>
            <p className="text-xs text-slate-500 ">Available for work</p>
           </div>
        </div>
        <button className="bg-blue-600 rounded-lg p-1">Portfolio</button>
      </div>
    </div>
  );
}
