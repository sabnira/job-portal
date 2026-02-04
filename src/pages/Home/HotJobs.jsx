import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";


const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://job-portal-server-nine-iota.vercel.app/jobs?sort=false')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])


    return (
        <div className="my-24">
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold">Explore Jobs</h2>
                <p className="text-gray-300 mt-2">
                    Browse through all the latest job opportunities and find your next career move.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-4 my-10">
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>

        </div>
    );
};

export default HotJobs;