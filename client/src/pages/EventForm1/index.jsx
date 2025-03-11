import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventForm1 = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [organizer, setOrganizer] = useState("");
    const [type, setType] = useState("");
    const [tags, setTags] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const eventData = { title, date, time, location, description, organizer, type, tags: tags.split(",") };

        // Replace with your API endpoint
        const response = await fetch("http://localhost:3000/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(eventData),
        });

        if (response.ok) {
            // Handle successful submission
            navigate("/events"); // Redirect to events page or any other page
        } else {
            // Handle error
            console.error("Failed to create event");
        }
    };

    return (
        <div className="flex flex-col gap-8 justify-center items-center w-full h-screen">
            <div>
                {/* <p className="text-2xl text-slate-700">Create a new event</p> */}
                {/* <h1 className="text-4xl font-extrabold text-blue-800 md:text-5xl">SSPM COMMUNITY</h1> */}
            </div>
            <div className="p-4 bg-blue-100 rounded-xl w-2/3 md:w-3/5 lg:w-96 mt-24">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium mb-2 lg:text-md">Event Title</label>
                        <input type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)} className="mb-2 w-full outline-1 outline-blue-400 rounded-xl p-2 text-md" placeholder="Enter event title" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-sm font-medium mb-2 lg:text-md">Event Date</label>
                        <input type="date" name="date" value={date} onChange={(event) => setDate(event.target.value)} className="mb-2 w-full outline-1 outline-blue-400 rounded-xl p-2 text-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="time" className="block text-sm font-medium mb-2 lg:text-md">Event Time</label>
                        <input type="time" name="time" value={time} onChange={(event) => setTime(event.target.value)} className="mb-2 w-full outline-1 outline-blue-400 rounded-xl p-2 text-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-sm font-medium mb-2 lg:text-md">Location</label>
                        <input type="text" name="location" value={location} onChange={(event) => setLocation(event.target.value)} className="mb-2 w-full outline-1 outline-blue-400 rounded-xl p-2 text-md" placeholder="Enter event location" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium mb-2 lg:text-md">Description</label>
                        <textarea name="description" value={description} onChange={(event) => setDescription(event.target.value)} className="mb-2 w-full outline-1 outline-blue-400 rounded-xl p-2 text-md" placeholder="Enter event description" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="organizer" className="block text-sm font-medium mb-2 lg:text-md">Organizer</label>
                        <input type="text" name="organizer" value={organizer} onChange={(event) => setOrganizer(event.target.value)} className="mb-2 w-full outline-1 outline-blue-400 rounded-xl p-2 text-md" placeholder="Enter organizer name" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-sm font-medium mb-2 lg:text-md">Event Type</label>
                        <input type="text" name="type" value={type} onChange={(event) => setType(event.target.value)} className="mb-2 w-full outline-1 outline-blue-400 rounded-xl p-2 text-md" placeholder="Enter event type" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tags" className="block text-sm font-medium mb-2 lg:text-md">Tags (comma separated)</label>
                        <input type="text" name="tags" value={tags} onChange={(event) => setTags(event.target.value)} className="mb-2 w-full outline-1 outline-blue-400 rounded-xl p-2 text-md" placeholder="Enter tags" />
                    </div>
                    <button type="submit" className="w-full bg-blue-800 p-2 rounded-xl mt-7 text-white hover:bg-blue-500">Create Event</button>
                </form>
            </div>
        </div>
    );
};

export default EventForm1;

