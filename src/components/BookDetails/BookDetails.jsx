import { useLoaderData, useParams } from "react-router-dom";


function BookDetails(props) {
    const {bookId} = useParams();
    const id = parseInt(bookId)
    
    const data = useLoaderData();
   
    const book = data.find(book => book.bookId === id)
    const {author,image, bookName,category,publisher ,review,tags,rating,totalPages,yearOfPublishing} = book;

    const handelMarkAsRead = ()=>{

    }
   
    return (


        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p>By: {author}</p>
      <hr className="my-3" />
      <h3>{category}</h3>
      <hr className="my-3" />
      <p> <b>Review :</b> {review} </p>
      <div className=" flex  gap-6 py-4"><b>Tag : </b>
          {
            tags.map((tag,index) => <button key={index} className="btn btn-xs   bg-green-200 text-green-500">{tag}</button>)
          }
         </div>
      <hr />
      <div className="grid  grid-cols-2 pb-3">
        <p className="py-3">Number of page : </p>
        <p className="py-3">{totalPages}</p>
      <p >Publisher : </p>
      <p>{publisher}</p>
      <p className="py-3">Year Of Publishing :</p>
      <p className="py-3">{yearOfPublishing}</p>
      <p>Rating: </p>
      <p>{rating}</p>
      </div>
      <button onClick={handelMarkAsRead} className="btn btn-accent btn-outline mr-4">Read</button>
      <button className="btn btn-accent">WishList</button>
    </div>
  </div>
</div>
    );
}

export default BookDetails;