export default function SearchBar() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 grid md:grid-cols-5 gap-6 text-black">
      
      <input placeholder="City" className="bg-gray-100 p-3 rounded-xl" />
      <input placeholder="Price" className="bg-gray-100 p-3 rounded-xl" />
      <input placeholder="Location" className="bg-gray-100 p-3 rounded-xl" />
      <input placeholder="Rooms" className="bg-gray-100 p-3 rounded-xl" />

      <button className="bg-black text-white rounded-xl">
        Search Properties
      </button>
    </div>
  );
}
