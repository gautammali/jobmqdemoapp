import React from 'react'
import JobCard from './job-card'

export default function JobList({ jobs }) {
    return (
        <div className='container border border-stone-50 grid grid-cols-1 lg:grid-cols-2  gap-y-4 gap-x-3 my-4'>
            {
                jobs?.map(item => <JobCard key={item.id} job={item} />)
            }
        </div>
    )
}
