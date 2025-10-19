import { FaDollarSign, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {

    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;

    return (
        <div className="card bg-base-300 shadow-sm">
            <div className="flex gap-2 m-2">
                <figure>
                    <img
                        className="w-16"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className="flex gap-1 items-center"><FaLocationDot /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h4 className="py-4">{description}</h4>
                <div className="flex gap-2 flex-wrap">
                    {
                        requirements.map((skill, index) => <h4 key={index} className="border rounded-md text-center px-2 hover:text-blue-400 hover:bg-gray-700">{skill}</h4>)
                    }
                </div>
                <div className="card-actions flex justify-between items-center mt-auto pt-2">

                    <h4 className="flex gap-1 items-center">Salary: <FaDollarSign></FaDollarSign>{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</h4>

                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary p-2">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;