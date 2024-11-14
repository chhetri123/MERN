export default function EventCard({ event }) {
  return (
    <div>
      <div className="flex justify-between items-start">
        <h3 className="text-3xl text-black flex-1"> {event.title}</h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap ml-2">
          {new Date(event.date).toLocaleDateString()}
        </span>
      </div>
      <p className="text-gray-700 text-base mb-6 line-clamp-3">
        {event.description}
      </p>
      <span>{event.participants.length}</span>
    </div>
  );
}
