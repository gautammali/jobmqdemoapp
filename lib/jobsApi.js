export async function getJobs() {
    const res = await fetch(`https://api.jobmq.com/api/JobListing`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            keyword: "",
            location: "",
            minSalary: 0,
            maxSalary: 0,
            jobSearchKeyWords: [],
            pageSize: 10,
            pageNo: 1,
            companyId: 0,
            sortOrder: "",
            sortBy: "",
        })
    }, { next: { revalidate: 300 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getSingleJob(id) {
    const res = await fetch(`https://api.jobmq.com/api/JobListing/jobdetail/${id}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
