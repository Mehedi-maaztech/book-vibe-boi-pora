import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
    const data = useLoaderData();
    //console.log(data);
    const { bookId } = useParams();
    //console.log(param);

    const id = parseInt(bookId);

    const bookDetail = data.find(book => book.bookId === id);

    console.log(bookDetail);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }


    const { image, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = bookDetail;

    const borderStyle = {
        borderBottom: "1px solid #999"
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure className="w-1/3">
                    <img
                        src={image}
                        alt="Movie"
                        className="" />
                </figure>
                <div className="card-body w-2/3">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <p>{category}</p>
                    <p><span className="font-bold">review : </span> {review}</p>
                    <p style={borderStyle}><span className="font-bold mr-2">Tag :</span>
                        {
                            tags.map((tag, idx) => <span key={idx} className="text-[#23BE0A] p-2 bg-base-200 mr-2 rounded-2xl">{tag}</span>)
                        }
                    </p>
                    <div className="book-info-card">
                        <div className="info-row">
                            <span className="label">Number of Pages:</span>
                            <span className="value">{totalPages}</span>
                        </div>
                        <div className="info-row">
                            <span className="label">Publisher:</span>
                            <span className="value">{publisher}</span>
                        </div>
                        <div className="info-row">
                            <span className="label">Year of Publishing:</span>
                            <span className="value">{yearOfPublishing}</span>
                        </div>
                        <div className="info-row">
                            <span className="label">Rating:</span>
                            <span className="value">{rating}</span>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-base-100">Read</button> 
                        <button className="btn btn-info text-white">Wishlist</button>
                    </div>
                </div>
            </div>
            <button onClick={handleBack} className="btn mt-10">Go Back</button>
        </div>
    );
};

export default BookDetails;