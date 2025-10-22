import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FaClipboardList, FaCalendarAlt, FaUsers } from "react-icons/fa";

const MyPostedJob = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/jobs?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setJobs(data));
        }
    }, [user?.email]);

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-primary">
                    My Posted Jobs
                </h2>
                <span className="badge badge-lg badge-secondary font-semibold">
                    Total: {jobs.length}
                </span>
            </div>

            {/* Empty state */}
            {jobs.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-lg text-gray-500">
                        📝 You haven’t posted any jobs yet.
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto bg-base-200 rounded-xl shadow-md">
                    <table className="table table-zebra w-full">
                        <thead className="bg-base-300 text-base font-semibold">
                            <tr>
                                <th>#</th>
                                <th>Job Title</th>
                                <th>Deadline</th>
                                <th>Applications</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={job._id}>
                                    <th>{index + 1}</th>
                                    <td className="flex items-center gap-2">
                                        <FaClipboardList className="text-primary" />
                                        {job.title}
                                    </td>
                                    <td>
                                        <span className="badge badge-outline badge-sm flex items-center gap-1">
                                            <FaCalendarAlt /> {job.applicationDeadline}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge badge-accent badge-outline flex items-center gap-1">
                                            <FaUsers /> {job.applicationCount || 0}
                                        </span>
                                    </td>
                                    <td>
                                        <Link to={`/viewApplication/${job._id}`}>
                                            <button className="btn btn-sm btn-outline btn-primary">
                                                View Applications
                                            </button>
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

export default MyPostedJob;
