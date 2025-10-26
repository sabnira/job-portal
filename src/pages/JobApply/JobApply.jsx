import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const submitJobApplication = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume,
        };

        fetch("https://job-portal-server-nine-iota.vercel.app/job-applications", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(jobApplication),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Successful!",
                        text: "You applied for the job!",
                        icon: "success",
                    });
                    navigate("/myApplications");
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card bg-base-100 w-full max-w-md shadow-2xl rounded-lg p-8">
                <div className="card-body space-y-6">
                    <h1 className="text-4xl font-bold text-center ">
                        Apply for Job
                    </h1>
                    <p className="text-center text-gray-500">
                        Fill out the form below to submit your application.
                    </p>

                    <form onSubmit={submitJobApplication} className="space-y-4">
                        <div className="form-control">
                            <label className="label font-semibold">LinkedIn URL</label>
                            <input
                                type="url"
                                name="linkedin"
                                placeholder="https://www.linkedin.com/in/username"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label font-semibold">GitHub URL</label>
                            <input
                                type="url"
                                name="github"
                                placeholder="https://github.com/username"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label font-semibold">Resume URL</label>
                            <input
                                type="url"
                                name="resume"
                                placeholder="https://example.com/resume.pdf"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <button className="btn btn-primary w-full mt-2">
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;
