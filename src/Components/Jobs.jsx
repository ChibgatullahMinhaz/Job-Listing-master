import React from 'react'

export const Jobs = ({jobs}) => {
console.log(jobs);
  return (
    <div>
        {
            jobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between shadow-2xl bg-white p-4 rounded-lg mb-4">
                    <div>
                    <img src={job.logo} alt={job.title} />

                    </div>
                   <div>
                   <h2>{job.title}</h2>
                    <p>{job.company}</p>
                    <p>{job.location}</p>
                    <p>{job.description}</p>
                   </div>
                   
                </div>
            ))
        }
    </div>
  )
}
