import React from "react";

function SoftSkill({ title, icons }) {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div>
          <h1 className=" text-6xl w-full flex justify-center ">{icons}</h1>
          <h1 className=" text-center mt-2">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default SoftSkill;
