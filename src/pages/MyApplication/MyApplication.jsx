import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaBriefcase, FaMapMarkerAlt, FaFileAlt, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // if (user?.email) {
        //     fetch(`http://localhost:3000/job-applications?email=${user.email}`)
        //         .then((res) => res.json())
        //         .then((data) => setJobs(data));
        // }


        axios.get(`http://localhost:3000/job-applications?email=${user.email}`, {withCredentials: true})
        .then(res => setJobs(res.data))

    }, [user?.email]);

    return (
        <div className="max-w-6xl mx-auto p-6">
            
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">
                    My Job Applications
                </h2>
                <span className="badge badge-lg badge-secondary font-semibold">
                    Total: {jobs.length}
                </span>
            </div>

         
            {jobs.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-lg text-gray-500">
                        🕵️‍♀️ You haven’t applied for any jobs yet.
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto bg-base-200 rounded-xl shadow-md">
                    <table className="table table-zebra w-full">
                        <thead className="bg-base-300 text-base font-semibold">
                            <tr>
                                <th>#</th>
                                <th>Job Info</th>
                                <th>Company & Salary</th>
                                <th>Application Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={job._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={job.company_logo} alt={job.title} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg flex items-center gap-2">
                                                    <FaBriefcase className="text-primary" /> {job.title}
                                                </div>
                                                <div className="text-sm text-gray-500 flex items-center gap-1">
                                                    <FaMapMarkerAlt /> {job.location}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="font-semibold">{job.company}</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-accent badge-outline">
                                            {job.status || "Pending"}
                                        </span>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/jobs/${job.job_id}`}
                                            className="btn btn-sm btn-outline btn-primary flex items-center gap-2"
                                        >
                                            <FaFileAlt /> View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyApplication;
