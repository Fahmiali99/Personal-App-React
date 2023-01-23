import React from "react";
import { contact } from "../../utils/About/contact";
import { about } from "../../utils/About/about";
import fahmi from "../../../assets/image/me.png";
import ProgrammingTabs from "./detail/ProgrammingTabs";

function About() {
  return (
    <div>
      <div className=" pb-4 w-full h-full min-h-[calc(100vh-3rem)] px-2 md:px-0">
        <div className="pt-20">
          <div className="block items-center">
            {about.map((item, idx) => {
              const subAbout = item.about;
              return (
                <div key={idx}>
                  <div className=" flex justify-center">
                    <img src={fahmi} alt="" width={200} />
                  </div>
                  <div className=" flex justify-center py-5"></div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-medium">
                      {item.title}
                    </h1>
                    {subAbout.map((item, idx) => (
                      <div
                        key={idx}
                        className="text-justify text-base md:text-lg"
                      >
                        <p className="py-1">{item.subAbout}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="skill pb-5">
              <h1 className="text-2xl sm:text-3xl font-medium py-1"> Skill </h1>
              <ProgrammingTabs />
            </div>
            <div className="text-justify">
              {contact.map((item, idx) => {
                const subContact = item.contact;
                return (
                  <div key={idx}>
                    <h1 className="text-2xl sm:text-3xl font-medium">
                      {item.title}
                    </h1>
                    <p className="py-1 text-base md:text-lg">{item.about}</p>
                    <div>
                      {subContact.map((item, idx) => {
                        return (
                          <div key={idx} className="flex my-1">
                            <p>{item.title}</p>
                            <p className=" mx-2">-</p>
                            <span>
                              <button
                                onClick={() => window.open(`${item.href}`)}
                              >
                                <div>
                                  <p className="underline text-base md:text-lg">
                                    {item.href}
                                  </p>
                                </div>
                              </button>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
