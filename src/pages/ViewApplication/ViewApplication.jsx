import { useLoaderData } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ViewApplication = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id);
        const data = {
            status: e.target.value
        }
        fetch(`http://localhost:3000/job-applications/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Status has been updated",
                        icon: "success",
                    });
                  
                }
            })
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-primary">
                    Applications for this Job
                </h2>
                <span className="badge badge-lg badge-secondary font-semibold">
                    Total: {applications.length}
                </span>
            </div>

            {/* Empty state */}
            {applications.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-lg text-gray-500">
                        🚫 No one has applied for this job yet.
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto bg-base-200 rounded-xl shadow-md">
                    <table className="table table-zebra w-full">
                        <thead className="bg-base-300 text-base font-semibold">
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>LinkedIn</th>
                                <th>GitHub</th>
                                <th>Resume</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app, index) => (
                                <tr key={app._id}>
                                    <th>{index + 1}</th>
                                    <td className="flex items-center gap-2">
                                        <FaEnvelope className="text-primary" />
                                        <span>{app.applicant_email}</span>
                                    </td>
                                    <td>
                                        <a
                                            href={app.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-blue-600 hover:underline"
                                        >
                                            <FaLinkedin />
                                            Profile
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            href={app.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-700 hover:underline"
                                        >
                                            <FaGithub />
                                            Repo
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            href={app.resume}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-outline btn-accent flex items-center gap-2"
                                        >
                                            <FaFileAlt />
                                            View Resume
                                        </a>
                                    </td>
                                    <td>
                                        <select
                                            onChange={(e) => handleStatusUpdate(e, app._id)}
                                            defaultValue={app.status || 'Change Status'} className="select select-xs">
                                            <option disabled>Change Status</option>
                                            <option>Under Review</option>
                                            <option>Set Interview</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select>
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

export default ViewApplication;

