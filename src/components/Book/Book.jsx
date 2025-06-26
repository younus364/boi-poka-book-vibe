import { Link } from "react-router-dom";


function Book({ book }) {
  const {bookId, bookName, image, author, rating, publisher,tags,category } = book;
  return (
    <Link to={`/books/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-xl p-8">
        <figure className="bg-[#F3F3F3] py-8 rounded-2xl">
          <img
            className=" h-[166px]"
            src={image}
            alt={bookName} />
        </figure>
        <div className="card-body">
         <div className=" flex justify-evenly">
          {
            tags.map((tag,index) => <button key={index} className="btn btn-xs  bg-green-200 text-green-500">{tag}</button>)
          }
         </div>
          <h2 className="card-title">
            {bookName}
            
          </h2>
          <p>By: {author}</p>
          <div className="border border-dashed "></div>
         
          <div className="card-actions justify-between">
            <div className=" ">{category}</div>
            <div className=" flex items-center">
              <div>{rating}</div>
              <div className="rating">
                <input type="radio" name="rating-1" className="mask mask-star" />
              </div>
              </div>
          </div>
        </div>
      </div></Link>
  );
}

export default Book;