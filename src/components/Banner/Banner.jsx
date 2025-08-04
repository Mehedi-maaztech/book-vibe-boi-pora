import bannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[60vh] rounded-4xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        A deep craving for knowledge draws us to books. We seek stories that stir the imagination and truths that challenge the mind. In their pages, we find both comfort and conflict—acceptance and rejection—all bound within the quiet power of words.
                    </p>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;