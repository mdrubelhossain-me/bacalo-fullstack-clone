import React, { useState } from "react";
import { IoMdClose, IoMdSearch } from "react-icons/io";

const locations = [
  { name: "Alabama", min: "$130" },
  { name: "Alaska", min: "$120" },
  { name: "Arizona", min: "$150" },
  { name: "California", min: "$110" },
  { name: "Colorado", min: "$140" },
  { name: "Florida", min: "$160" },
  { name: "Georgia", min: "$100" },
  { name: "Hawaii", min: "$170" },
];

const LocationModal = ({ onClose, selected, setSelected }) => {
  const [search, setSearch] = useState("");

  const filtered = locations.filter((loc) =>
    loc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
      <div className="bg-white w-[90%] max-w-md rounded-lg p-6 relative shadow-lg max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700"
        >
          <IoMdClose />
        </button>

        <h2 className="text-xl font-bold mb-1">Choose your Delivery Location</h2>
        <p className="text-gray-500 text-sm mb-4">
          Enter your address and we will specify the offer for your area.
        </p>

        <div className="flex items-center border rounded px-3 py-2 mb-4">
          <IoMdSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search your area"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 w-full outline-none"
          />
        </div>

        <ul className="space-y-2">
          <li className="flex justify-between items-center border-b pb-2">
            <span className="font-medium">Select a Location</span>
            <button
              className="text-sm text-red-500 hover:underline"
              onClick={() => setSelected("")}
            >
              Clear All
            </button>
          </li>

          {filtered.map((loc) => (
            <li
              key={loc.name}
              onClick={() => {
                setSelected(loc.name);
                onClose();
              }}
              className={`flex justify-between items-center p-2 rounded cursor-pointer ${
                selected === loc.name ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"
              }`}
            >
              <span>{loc.name}</span>
              <span className="text-sm text-gray-500">Min: {loc.min}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationModal;
