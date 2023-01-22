import React from "react";

interface HomeProps {
  bright: boolean;
}

function Home({ bright }: HomeProps) {
  function openWindow() {
    window.open("/resume");
  }

  return (
    <div className="h-full grid items-center min-h-[calc(100vh-116px)]">
      <div className="">
        <div className="flex justify-center text-center">
          <div className=" ">
            <div>
              <h1 className=" text-4xl sm:text-6xl xl:text-8xl font-bold ">
                Fahmi Ali Husni
              </h1>
              <p className="   py-5 text-2xl sm:text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r text from-cyan-500 via-blue-500  to-sky-700 ">
                Frontend Developer
              </p>
              <div className="flex justify-center pt-2">
                <button
                  onClick={openWindow}
                  type="button"
                  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
