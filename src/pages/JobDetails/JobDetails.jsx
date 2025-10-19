import { useLoaderData } from "react-router-dom";
import { MdOutlineWorkOutline, MdEmail, MdLocationOn } from "react-icons/md";
import { FaMoneyBillWave, FaRegCalendarAlt } from "react-icons/fa";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    title,
    company,
    company_logo,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    status,
  } = job || {};

  return (
    <div className="font-sans bg-base-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-base-200 shadow-md rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 border-b border-base-100">
          <img
            src={company_logo}
            alt={company}
            className="w-28 h-28 rounded-xl object-contain bg-base-200 p-3"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-lg text-base-content/70">{company}</p>
            <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-3">
              <span className="badge badge-outline">{jobType}</span>
              <span className="badge badge-outline">{category}</span>
              <span
                className={`badge ${
                  status === "active" ? "badge-success" : "badge-error"
                }`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base-content/80">
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-primary" /> {location}
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-primary" />{" "}
              {salaryRange?.min}–{salaryRange?.max} {salaryRange?.currency.toUpperCase()}
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineWorkOutline className="text-primary" /> {jobType}
            </div>
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-primary" /> Apply before{" "}
              {new Date(applicationDeadline).toLocaleDateString()}
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p className="text-base-content/80">{description}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
            <ul className="list-disc ml-6 text-base-content/80 space-y-1">
              {responsibilities?.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <div className="flex flex-wrap gap-2">
              {requirements?.map((req, i) => (
                <span key={i} className="badge badge-outline">
                  {req}
                </span>
              ))}
            </div>
          </div>

          {/* HR Contact */}
          <div className="border-t border-base-300 pt-4">
            <h2 className="text-xl font-semibold mb-2">HR Contact</h2>
            <p>
              <span className="font-medium">{hr_name}</span> —{" "}
              <a
                href={`mailto:${hr_email}`}
                className="text-primary hover:underline flex items-center gap-1"
              >
                <MdEmail /> {hr_email}
              </a>
            </p>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 bg-base-200 border-t border-base-300 flex justify-between items-center">
          <p className="text-sm text-base-content/70">
            Application deadline:{" "}
            <span className="font-medium text-base-content">
              {new Date(applicationDeadline).toLocaleDateString()}
            </span>
          </p>
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
