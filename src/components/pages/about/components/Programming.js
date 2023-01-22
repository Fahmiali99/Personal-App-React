import React from "react";

// interface Props {
//   title: string;
//   icon: JSX.Element;
// }

function Programming({ title, icons }) {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div>
          <h1 className=" text-6xl w-full flex justify-center">{icons}</h1>
          <h1 className=" text-center">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Programming;
