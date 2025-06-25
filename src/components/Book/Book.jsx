

function Book({ book }) {
  const { bookName, image, author, rating, publisher,tags } = book;
  return (
    <div>
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
            tags.map(tag => <button className="btn btn-xs  bg-green-200 text-green-500">{tag}</button>)
          }
         </div>
          <h2 className="card-title">
            {bookName}
            
          </h2>
          <p>By: {author}</p>
          <div className="border border-dashed "></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;