import React from "react";

export const Jobs = ({ jobs }) => {
  console.log(jobs);
  return (
    <div>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="flex items-center justify-between shadow-2xl bg-white p-4 rounded-lg mb-4"
        >
          <div className="flex items-center justify-center gap-4">
            <img src={job.logo} alt={job.title} />

            <div className="text-left">
              <div className="flex items-center gap-x-2">
                <p className="text-gray-500">{job.company}</p>
                <p  className={job.featured ? "bg-black  p-2 rounded-lg font-bold text-white": ''} >{job.featured ? "Featured" : ""}</p>
                <h1  className={job.new ? "bg-gray-400  p-2 rounded-lg font-bold text-white": ''}>{job.new ? "New" : ""}</h1>
              </div>
              <h2 className="text-2xl font-bold">{job.position}</h2>
              <div className="flex items-center justify-center gap-x-4">
                <h1 className="text-gray-500">{job.postedAt}</h1>
                <h1 className="text-gray-500">{job.location}</h1>
                <h1 className="text-gray-500">{job.contract}</h1>
              </div>
            </div>
          </div>
          <div>
            {job.tools.map((tool, index) => (
              <span key={index} className="bg-gray-200 p-2 rounded-full mr-2">
                {tool}
              </span>
            ))}
            {job.languages.map((language, index) => (
              <span key={index} className="bg-gray-200 p-2 rounded-full mr-2">
                {language}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
