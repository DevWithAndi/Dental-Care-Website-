import React from "react";

function SearchButton() {
  return (
    <div className="flex justify-center w-full md:w-auto">
      <button className="bg-[#4A71E0] py-3 px-4 md:px-3 md:py-2 rounded-[12px] text-white w-full cursor-pointer active:scale-95  active:transition-transform hover:bg-Hovers ">
        Search
      </button>
    </div>
  );
}

export default SearchButton;

export function ViewDetails() {
  return (
    <button className="py-3  px-6 mx-3 bg-[#4A71E0] text-white rounded-[8px] text-center active:scale-95 active:translate-y-0.5 transition-transform  flex justify-center items-center  my-2  shadow-md cursor-pointer">
      View Detail
    </button>
  );
}

export function MoreClinics() {
  return (
    <div className=" bg-white py-3 px-5 rounded-[8px] border-b-2 border-blue-500 shadow-sm flex items-end justify-center  mt-2 w-fit  self-center active:scale-95 active:translate-y-0.5 transition-transform cursor-pointer ">
      <button className="text-blue-600 font-semibold flex items-center text-center gap-1 cursor-pointe ">
        Explore More Clinics
        <span className="text-lg">➔</span>
      </button>
    </div>
  );
}

export function StarRating({ value }) {
  const maxStars = 5;
  const rating = Math.min(Math.max(0, value), maxStars);

  return (
    <div className="flex items-center justify-start ">
      {[...Array(maxStars)].map((_, index) => {
        const fillPercentage = Math.min(Math.max(0, rating - index), 1) * 100;

        return (
          <div key={index} className="relative w-6 h-6">
            <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24">
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="currentColor"
              />
            </svg>
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24">
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
