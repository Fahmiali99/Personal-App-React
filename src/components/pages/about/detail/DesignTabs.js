import React from "react";
import { design } from "../../../utils/About/design";
import SoftSkill from "../components/SoftSkill";
function DesignTabs({ bright }) {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 ">
        {design.map((item, idx) => (
          <div
            key={idx}
            className={`${
              bright
                ? "border border-gray-700 bg-slate-800 text-white rounded-lg p-3"
                : "border border-gray-200 bg-white rounded-lg p-3"
            }`}
          >
            <SoftSkill
              bright={bright}
              title={item.title}
              icons={<item.Icons />}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignTabs;
