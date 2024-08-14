import React from 'react'

export default function Ex02() {
  return (
    <div>
      <h3>Bài 2:</h3>
      <div className="ml-10">
        <div className=" bg-auto w-4/6 bg-[#F5F5F5] pl-2 pr-2 pb-2">
          <p className="text-xs">Input Label </p>
          <div className="relative">
            <input
              className="w-full pl-6 border-2 rounded-md border-blue-500"
              type="text"
            />
            <svg
              className="absolute left-1 top-[5px] h-4 w-4 text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="12" cy="13" r="7" />{" "}
              <polyline points="12 10 12 13 14 13" />{" "}
              <line x1="7" y1="4" x2="4.25" y2="6" />{" "}
              <line x1="17" y1="4" x2="19.75" y2="6" />
            </svg>

            <svg
              className="absolute right-1 top-[5px] h-4 w-4 text-slate-900"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M18 15l-6-6l-6 6h12" />
            </svg>
          </div>

          <div className=" border-2 bg-[#FFFFFF] rounded-md border-[#D3D9EB] mt-1 ">
            <div className="relative">
              <p className="text-sm pl-3 pt-2 pb-2">Label </p>
              <div className="absolute right-1 top-2">
                <input type="checkbox" />
              </div>
            </div>
            <div className="relative">
              <p className="text-sm pl-3 pt-2 pb-2">Label </p>
              <div className="absolute right-1 top-2">
                <input type="checkbox" />
              </div>
            </div>
            <div className="relative">
              <p className="text-sm pl-3 pt-2 pb-2">Label </p>
              <div className="absolute right-1 top-2">
                <input type="checkbox" />
              </div>
            </div>
            <div className="relative">
              <p className="text-sm pl-3 pt-2 pb-2">Label </p>
              <div className="absolute right-1 top-2">
                <input type="checkbox" />
              </div>
            </div>
            <div className="flex gap-2 pl-2 pr-2 pb-2 ">
              <div className="border-2 pt-1 pb-1 text-sm w-full bg-[#FFFFFF] rounded-md border-[#D3D9EB] mt-1 text-center">
                Clear
              </div>
              <div className="border-2  pt-1 pb-1 text-sm w-full bg-[#0234B7] rounded-md border-[#D3D9EB] mt-1 text-center text-white ">
                Apply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

