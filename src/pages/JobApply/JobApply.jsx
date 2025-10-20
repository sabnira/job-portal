import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const JobApply = () => {

    const {id} = useParams();
    const {user} = useAuth();

    const submitJobApplication = e => {
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
            resume
        }
    }

    return (

    <div className="card bg-base-100 w-6/12 mx-auto max-w-sm  shadow-2xl my-10">
      <div className="card-body space-y-2">
        <h1 className="text-5xl font-bold text-center">Apply Job and Good Luck!</h1>
        <form onSubmit={submitJobApplication} className="form-control">
          <label className="label">LinkedIn URL</label>
          <input type="url" name="linkedin" className="input" placeholder="LinkedIn URL" />

          <label className="label">Github URL</label>
          <input type="url" name="github" className="input" placeholder="Github URL" />

          <label className="label">Resume URL</label>
          <input type="url" name="resume" className="input" placeholder="Resume URL" />
         
          <button className="btn btn-neutral mt-4">Apply</button>
        </form>
      </div>
    </div>
 
    );
};

export default JobApply;