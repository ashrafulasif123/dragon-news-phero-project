import { FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view } = news;

  const ratingValue = rating?.number || 0;
  const formatedDate = new Date(author?.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md border border-base-200">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">{author?.name}</h2>
            <p className="text-xs text-gray-500 mt-1">{formatedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 mt-3">
        <h2 className="text-lg font-bold leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 mt-3">
        <img
          src={image_url}
          alt="news"
          className="rounded-lg w-full h-52 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 mt-3 text-sm text-gray-600">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}
            <span className="text-orange-500 cursor-pointer ml-1">
              ...Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-4 border-t mt-3">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={
                index < ratingValue ? "text-orange-500" : "text-gray-300"
              }
            />
          ))}

          <span className="font-semibold text-black ml-1">{ratingValue}</span>
        </div>

        {/* Views */}
        <div className="text-sm text-gray-500">👁 {total_view}</div>
      </div>
    </div>
  );
};

export default NewsCard;
