import React from "react";
import { programming } from "../../../utils/About/programming";
import Programming from "../components/Programming";

function ProgrammingTabs() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 ">
        {programming.map((item, idx) => {
          return (
            <div key={idx} className="border border-gray-500 rounded-lg p-3">
              <Programming title={item.title} icons={item.icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgrammingTabs;
