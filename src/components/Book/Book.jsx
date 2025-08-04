import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {bookId, bookName, tags, author, image, rating, category } = book;
    return (
        <Link to={`book/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl m-3">
                <figure className="p-2 bg-base-200">
                    <img
                        src={image}
                        alt="Book"
                        className="h-64 rounded-2xl" />
                </figure>
                <div className="card-body">
                    <div>
                        {
                            tags.map((tag, idx) => <span className="text-[#23BE0A] bg-base-200 mr-2 p-2 rounded-2xl" key={idx}>{tag}</span>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    {/* <p>{review}</p> */}
                    <div className="card-actions flex justify-between text-[18px] pt-3">
                        <div>
                            {category}
                        </div>
                        <div className="flex items-center gap-2">
                            {rating} <CiStar />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;