import { serverConfiguration } from "@/config/index.constant"
import axios from 'axios';

export async function getJobs() {
    try {

        const res = await axios.post(`${serverConfiguration.serverURL}/JobListing`, {
            keyword: "",
            location: "",
            minSalary: 0,
            maxSalary: 0,
            jobSearchKeyWords: [],
            pageSize: 10,
            pageNo: 1,
            companyId: 0,
            sortOrder: "",
            sortBy: ""
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            next: { revalidate: 300 }
        });
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.

        return res.data

    } catch (error) {
        console.log("Error :", error, error?.message)
    }


}

export async function getSingleJob(id, accessToken) {
    // const res = await fetch(`${serverConfiguration.serverURL}/JobListing/jobdetail/${id}`,{
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //         'Cache-Control': 'no-cache, no-store, must-revalidate'
    //     }
    // })

    try {
        const response = await axios.get(
            `${serverConfiguration.serverURL}/JobListing/jobdetail/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Cache-Control': 'no-cache' // Optionally, you can still include cache-control header
                }
            }
        );

        return response.data
    } catch (error) {
        console.log("Error :", error, error?.message)
    }
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // if (!response.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data')
    // }

}

export async function getFilesAttachedToJob(id, accessToken) {
    // const serverUrl = serverConfiguration.serverURL || 'https://api.jobmq.com/api'
    // const res = await fetch(`${serverUrl}/document/getall/2/${id}`,{
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`
    //     }
    // })
    // // The return value is *not* serialized
    // // You can return Date, Map, Set, etc.

    // if (!res.ok && accessToken) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data')
    // }

    // return await res.json()

    const serverUrl = serverConfiguration.serverURL || 'https://api.jobmq.com/api';

    try {
        const res = await axios.get(`${serverUrl}/document/getall/2/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        return res.data;
    } catch (error) {
        console.log('Error:', error);
    }
}


export async function getUsersDetails(token){
    try {
        const response = await axios.get(`${serverConfiguration.serverURL}/candidate/details`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        if (response.status !== 200) {
            console.log("No data available for user");
            return {}
        }
    
        return response.data;
    } catch (error) {
        console.log('Error:', error);
    }
}
