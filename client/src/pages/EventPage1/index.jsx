import React from 'react';
import Navbar from '../../components/Navbar';

const EventPage1 = () => {
    // Using the first event from the events data as an example
    const event = {
        id: 2,
        title: "BGMI Tournament",
        category: "Gaming Competition",
        date: "2024-02-07",
        time: "2:00 PM - 5:00 PM",
        location: "Online",
        description: "Join the ultimate BGMI (Battlegrounds Mobile India) Tournament featuring the top players across the country. Experience intense battles, strategic gameplay, and compete for a massive prize pool of ₹5,00,000. This tournament will feature both TPP and FPP modes across Erangel, Miramar, and Sanhok maps. Whether you're a seasoned pro or an emerging talent, this is your chance to prove your worth in India's biggest mobile gaming competition.",
        organizer: "Gaming Hub",
        eventHead: "Rahul Kumar",
        contactInfo: "+91 9876543210",
        email: "bgmi.tournament@sspm.org",
        type: "Tournament",
        isPaid: true,
        entryFee: "₹100 per person",
        maxParticipants: 100,
        volunteersNeeded: 5,
        attachedDocuments: [
            {
                name: "Tournament Rules.pdf",
                url: "/documents/rules.pdf"
            },
            {
                name: "Schedule.pdf",
                url: "/documents/schedule.pdf"
            }
        ],
        tags: ["Gaming", "BGMI", "Competition"],
        imageUrl: "/BGMI2.webp"
    };

    // Demo remaining events
    const remainingEvents = [
        {
            id: 3,
            title: "Future Startup Event",
            date: "2024-03-20",
            time: "6:00 PM - 9:00 PM",
            location: "Innovation Center",
            type: "Networking",
        },
        {
            id: 5,
            title: "BGMI Tournament",
            date: "2024-02-07",
            time: "2:00 PM - 5:00 PM",
            location: "Virtual Event",
            type: "Tournament",
        }
    ];

    // Demo participant count
    const participantCount = 156;

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col lg:flex-row flex-1 mt-16">
                {/* Main Content Section */}
                <div className="w-full lg:w-2/3 bg-white p-4 lg:p-6 flex flex-col gap-6">
                    {/* Event Header */}
                    <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md">
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">{event.title}</h1>

                        {/* Event Meta Information */}
                        <div className="flex flex-col gap-4 mb-6">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-600">{event.date} • {event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-600">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <span className="text-gray-600">{participantCount} participants</span>
                            </div>
                        </div>

                        <div className="mb-4 rounded-lg overflow-hidden">
                            <img
                                src={event.imageUrl}
                                alt="BGMI Tournament"
                                className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mb-6">
                            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                                Participate Now
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                Share
                            </button>
                        </div>
                    </div>

                    {/* Tabs Section */}
                    <div className="bg-white rounded-lg shadow-md">
                        <div className="flex border-b">
                            <button className="px-6 py-3 text-blue-600 border-b-2 border-blue-600 font-medium">
                                Details
                            </button>
                            <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
                                Posts
                            </button>
                        </div>

                        {/* Details Content */}
                        <div className="p-4 lg:p-6">
                            <div className="space-y-6">
                                {/* Description */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h2 className="text-lg font-semibold">About this event</h2>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                                </div>

                                {/* Event Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <h3 className="font-semibold">Event Head</h3>
                                            </div>
                                            <p className="text-gray-600">{event.eventHead}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <h3 className="font-semibold">Contact</h3>
                                            </div>
                                            <p className="text-gray-600">{event.contactInfo}</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <p className="text-gray-600">{event.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <h3 className="font-semibold">Entry Fee</h3>
                                            </div>
                                            <p className="text-gray-600">{event.isPaid ? event.entryFee : 'Free Entry'}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <h3 className="font-semibold">Capacity</h3>
                                            </div>
                                            <p className="text-gray-600">Maximum {event.maxParticipants} participants</p>
                                            <p className="text-gray-600">{event.volunteersNeeded} volunteers needed</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Attached Documents */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <h3 className="font-semibold">Attached Documents</h3>
                                    </div>
                                    <div className="space-y-2">
                                        {event.attachedDocuments.map((doc, index) => (
                                            <a
                                                key={index}
                                                href={doc.url}
                                                className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                                </svg>
                                                {doc.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Now sticky on desktop */}
                <div className="w-full lg:w-1/3 bg-gray-50 p-4 lg:p-6">
                    <div className="lg:sticky lg:top-24 space-y-6">
                        {/* View All Events */}
                        <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Other Events</h2>
                                <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">View all</a>
                            </div>
                            <div className="space-y-4">
                                {remainingEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <h3 className="font-semibold text-gray-800">{event.title}</h3>
                                        <p className="text-sm text-gray-600">{event.date} • {event.time}</p>
                                        <p className="text-sm text-gray-600">{event.location}</p>
                                        <span className="inline-block mt-2 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                            {event.type}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPage1;

