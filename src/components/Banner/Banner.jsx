
import bannerImg from '../../assets/books.jpg'
function Banner(props) {
    return (
        <div className="hero bg-base-200 h-[550px]">
            <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A]">View The List</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;