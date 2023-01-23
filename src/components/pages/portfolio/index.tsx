import React from "react";
import { data } from "../../utils/Portfolio/data";

function Portfolio() {
  return (
    <div>
      <div className="pt-12 pb-4 w-full  xl:min-h-[calc(100vh-3rem)] px-2 md:px-0">
        <div>
          <h1 className="text-2xl font-semibold">Portfolio</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4 my-5 ">
            {data.map((item, idx) => {
              const technology = item.technology;

              const setLength = item.story;
              let substring = setLength.substring(0, 108);
              const maxLength = 107;
              if (substring.length > maxLength) {
                substring = substring.substring(0, maxLength) + "...";
              }
              return (
                <div key={idx} className=" rounded-lg shadow-md">
                  <div
                    className={`w-full  dark:bg-gray-800 dark:border-gray-700 `}
                  >
                    <button
                      className="text-left"
                      onClick={() => window.open(item.href)}
                    >
                      <div>
                        <img
                          className="rounded-t-lg "
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="bg-white rounded rounded-b-lg">
                        <div className="p-5 ">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-black">
                            {item.title}
                          </h5>

                          <p className="mb-3 font-normal  text-gray-400">
                            {substring}
                          </p>

                          <div className="flex">
                            {technology.map((item, idx) => {
                              return (
                                <div
                                  key={idx}
                                  className=" mr-1 py-0.5 rounded border shadow-md ..."
                                >
                                  <p className="mx-2 text-xs text-black">
                                    {item.title}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
