import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


const MyPostedJob = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    return (
        <div>
            {jobs.length}

            <div className="overflow-x-auto">
                <table className="table">
                
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Application Count</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            jobs.map((job, index) =>
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{job.title}</td>
                                    <td>{job.applicationDeadline}</td>
                                    <td>{job.applicationCount}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJob;