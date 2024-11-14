const eventsDetails = [
  {
    eventName: "Tech Conference 2024",
    date: "2024-11-15",
    participants: ["John Doe", "Jane Smith", "Bob Wilson"],
    createdAt: "2024-10-01T09:30:00Z",
    location: "Convention Center",
    capacity: 150,
    isVirtual: false,
  },
  {
    eventName: "Team Building Workshop",
    date: "2024-11-20",
    participants: ["Alice Johnson", "Mike Brown", "Sarah Davis", "Tom Clark"],
    createdAt: "2024-10-05T14:15:00Z",
    location: "Central Park",
    capacity: 20,
    isVirtual: false,
  },
  {
    eventName: "Online Marketing Seminar",
    date: "2024-11-25",
    participants: ["Emily White", "David Lee", "Lisa Anderson"],
    createdAt: "2024-10-10T11:45:00Z",
    location: "Zoom",
    capacity: 100,
    isVirtual: true,
  },
  {
    eventName: "Product Launch",
    date: "2024-12-01",
    participants: [
      "Chris Martin",
      "Rachel Green",
      "Ross Geller",
      "Monica Bing",
    ],
    createdAt: "2024-10-15T16:20:00Z",
    location: "Grand Hotel",
    capacity: 200,
    isVirtual: false,
  },
];
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { Calendar, Plus } from "lucide-react";
import axios from "axios";
const Event = () => {
  const [events, setEvents] = useState([]);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      const response = await axios.get("http://localhost:3001/api/events", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzI5ZTAxZjRhMTAyZWNmNDc5YzkyOTMiLCJpYXQiOjE3MzEzOTE0NjcsImV4cCI6MTczMTQ3Nzg2N30.gwFT67-ytFQzXbPO_FlnPJOr2LZ-2LlfzypEUNz3BbA`,
        },
      });
      console.log(response.data);
      //
      setEvents(response.data);
    }
    fetchEvents();
  }, []);

  const handleModel = () => {
    setShowModel(!showModel);
  };
  return (
    <div className="px-7">
      <div className="flex items-center justify-between p-2">
        <div className="text-2xl font-bold flex items-center">
          <Calendar className="w-6 h-6 mr-2 mt-1" />
          <h1 className="">My Events</h1>
        </div>
        <div>
          <button
            onClick={handleModel}
            className="bg-button-default px-3 py-2 flex items-start text-white hover:bg-button-hover"
          >
            <Plus className="w-6 h-6 mr-2" />
            Create Event
          </button>
        </div>
      </div>
      {/* <EventList></EventList>
      <EventCard></EventCard> */}
      {showModel && (
        <div class="relative z-10">
          {/* fixed inset-0 flex items-center justify-center */}
          <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white  w-full max-w-md rounded-md  p-6">
              <h1 className="text-2xl font-bold mb-4">Create New Event</h1>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Event Name"
                    className="w-full p-2 mb-4 mt-2 border border-border-brown text-gray-700 rounded-md focus:outline-none focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block">Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 mb-4  mt-2border border-border-brown text-gray-700 rounded-md focus:outline-none focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block">Description</label>
                  <textarea
                    type="text"
                    placeholder="Event description"
                    className="w-full px-4 py-2 mb-4 mt-2 border border-border-brown text-gray-700 rounded-md focus:outline-none focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end gap-8">
                  <button
                    type="button"
                    onClick={handleModel}
                    className=" px-3 py-2 "
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className=" px-3 py-2 bg-button-default rounded-md"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
    // <div>

    //   <h1>Event Page</h1>
    //   <p> List of events</p>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    //     {events.map((event) => (
    //       <EventCard key={event._id} event={event} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default Event;
