import { FaHandLizard } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
    const param = useParams()

    console.log(param);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h2>This is book details</h2>
            <button onClick={handleBack} className="btn">Go Back</button>
        </div>
    );
};

export default BookDetails;