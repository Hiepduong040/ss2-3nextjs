import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  return (
    <div>
      <h3>Bài 1:</h3>
      <div className="pl-10">
        <div className="text-blue-600 text-sm">Label</div>
        <div className="relative w-[267px]">
          
          <input
            className=" rounded-lg border-blue-700 border-2 pl-3 pr-10 placeholder-black"
            type="text"
            placeholder="Placeholder"
          />
          <FontAwesomeIcon
            icon={faEye}
            className="absolute w-5 h-5 right-1 top-1 text-gray-500 cursor-pointer"
          />
        </div>
        <div className="text-sm text-gray-700">Helper Text</div>
      </div>
    </div>
  );
}
