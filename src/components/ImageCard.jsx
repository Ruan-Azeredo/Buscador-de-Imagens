export default function ImageCard({ image }) {
    const tags = image.tags.split(', ')
    return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-800 mb-5">
      <img src={image.webformatURL} alt="" className="h-56 w-full object-cover hover:scale-[105%] ease-out duration-300" />
      <div className="px-6 py-4 text-gray-400">
        <div className="font-bold text-blue-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li className="flex justify-between">
            <div className="font-bold mr-4">Views:</div>
            {image.views}
          </li>
          <li className="flex justify-between">
            <div className="font-bold mr-4">Downloads:</div>
            {image.downloads}
          </li>
          <li className="flex justify-between">
            <div className="font-bold mr-4">Likes:</div>
            {image.likes}
          </li>
        </ul>
        </div>
        <div className="px-6 py-4">
            {tags.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
              #{tag}
            </span>
          ))}
      </div>
    </div>
    )
}