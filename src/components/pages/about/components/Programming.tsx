import React from "react";

interface ProgrammingProps {
  title: string;
  icons: any;
}

function Programming({ title, icons }: ProgrammingProps) {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div>
          <i className={`${icons} text-6xl w-full flex justify-center`}></i>
          <h1 className=" text-center">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Programming;
