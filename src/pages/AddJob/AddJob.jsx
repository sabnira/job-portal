import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {

    const {user} = useAuth();

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        const { min, max, currency, ...newJob } = initialData;

        newJob.salaryRange = { min, max, currency }

        newJob.requirements = newJob.requirements.split('\n');

        newJob.responsibilities = newJob.responsibilities.split('\n');

        console.log(newJob);

        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Successful!",
                        text: "Job has been added.",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleAddJob} className="max-w-3xl mx-auto p-6 bg-base-100 shadow-md rounded-md space-y-4">
                <h2 className="text-3xl font-bold mb-6">Post a New Job</h2>

                <div>
                    <label className="label">Job Title</label>
                    <input type="text" name="title" className="input input-bordered w-full" placeholder="Software Engineer" />
                </div>

                <div>
                    <label className="label">Location</label>
                    <input type="text" name="location" className="input input-bordered w-full" placeholder="Halishohor, Chittagong" />
                </div>

                <div>
                    <label className="label">Job Type</label>
                    <select name="jobType" className="select select-bordered w-full">
                        <option value="">Select Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>

                <div>
                    <label className="label">Category</label>
                    <input type="text" name="category" className="input input-bordered w-full" placeholder="Engineering" />
                </div>

                <div>
                    <label className="label">Application Deadline</label>
                    <input type="date" name="applicationDeadline" className="input input-bordered w-full" />
                </div>

                <div className="flex gap-2">
                    <div className="flex-1">
                        <label className="label">Salary Min</label>
                        <input type="number" name="min" className="input input-bordered w-full" placeholder="40000" />
                    </div>
                    <div className="flex-1">
                        <label className="label">Salary Max</label>
                        <input type="number" name="max" className="input input-bordered w-full" placeholder="60000" />
                    </div>
                    <div className="flex-1">
                        <label className="label">Currency</label>
                        <input type="text" name="currency" className="input input-bordered w-full" placeholder="BDT" />
                    </div>
                </div>

                <div>
                    <label className="label">Description</label>
                    <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Job description..." />
                </div>

                <div>
                    <label className="label">Company Name</label>
                    <input type="text" name="company" className="input input-bordered w-full" placeholder="Favorite IT" />
                </div>

                <div>
                    <label className="label">Company Logo URL</label>
                    <input type="text" name="company_logo" className="input input-bordered w-full" placeholder="https://example.com/logo.png" />
                </div>

                <div>
                    <label className="label">Requirements (one per line)</label>
                    <textarea name="requirements" className="textarea textarea-bordered w-full" placeholder={`JavaScript\nReact`} required />
                </div>

                <div>
                    <label className="label">Responsibilities (one per line)</label>
                    <textarea name="responsibilities" className="textarea textarea-bordered w-full" placeholder={`Develop and maintain software\nCollaborate with the team`} required />
                </div>

                <div>
                    <label className="label">HR Name</label>
                    <input type="text" defaultValue={user.email} name="hr_name" className="input input-bordered w-full" placeholder="Farhan Rahman" />
                </div>

                <div>
                    <label className="label">HR Email</label>
                    <input type="email" name="hr_email" className="input input-bordered w-full" placeholder="hr@techsolutions.com" />
                </div>

                <div>
                    <label className="label">Status</label>
                    <select name="status" className="select select-bordered w-full">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>

                <button className="btn btn-primary w-full mt-4">Post Job</button>
            </form>
        </div>
    );
};

export default AddJob;
