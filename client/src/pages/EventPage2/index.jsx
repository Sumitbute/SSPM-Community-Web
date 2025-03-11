import React from 'react';
import Navbar from '../../components/Navbar';

const EventPage2 = () => {
    // Using the same event data from EventPage1
    const event = {
        id: 2,
        title: "BGMI Tournament",
        category: "Gaming Competition",
        date: "2024-02-07",
        time: "2:00 PM - 5:00 PM",
        location: "Online",
        description: "Join the ultimate BGMI (Battlegrounds Mobile India) Tournament featuring the top players across the country...",
        eventHead: "Rahul Kumar",
        contactInfo: "+91 9876543210",
        email: "bgmi.tournament@sspm.org",
        type: "Tournament",
        isPaid: true,
        entryFee: "₹100 per person",
        maxParticipants: 100,
        imageUrl: "/BGMI2.webp"
    };

    // Demo registered users data
    const registeredUsers = [
        {
            id: 1,
            name: "Amit",
            surname: "Patel",
            email: "amit.patel@gmail.com",
            collegeName: "SSPM College of Engineering",
            branch: "Computer Engineering",
            year: "Third Year",
            uploadedFile: {
                name: "Payment_Receipt.pdf",
                url: "/documents/payment1.pdf"
            }
        },
        {
            id: 2,
            name: "Priya",
            surname: "Sharma",
            email: "priya.sharma@gmail.com",
            collegeName: "SSPM College of Engineering",
            branch: "Information Technology",
            year: "Second Year",
            uploadedFile: {
                name: "ID_Card.pdf",
                url: "/documents/id2.pdf"
            }
        },
        {
            id: 3,
            name: "Raj",
            surname: "Kumar",
            email: "raj.kumar@gmail.com",
            collegeName: "SSPM College of Engineering",
            branch: "Mechanical Engineering",
            year: "Fourth Year",
            uploadedFile: {
                name: "Payment_Confirmation.pdf",
                url: "/documents/payment3.pdf"
            }
        },
        {
            id: 4,
            name: "Sneha",
            surname: "Verma",
            email: "sneha.verma@gmail.com",
            collegeName: "SSPM College of Engineering",
            branch: "Computer Engineering",
            year: "Second Year",
            uploadedFile: {
                name: "Receipt.pdf",
                url: "/documents/receipt4.pdf"
            }
        },
        {
            id: 5,
            name: "Rahul",
            surname: "Singh",
            email: "rahul.singh@gmail.com",
            collegeName: "SSPM College of Engineering",
            branch: "Information Technology",
            year: "Third Year",
            uploadedFile: {
                name: "Payment_Proof.pdf",
                url: "/documents/payment5.pdf"
            }
        },
        {
            id: 6,
            name: "Neha",
            surname: "Gupta",
            email: "neha.gupta@gmail.com",
            collegeName: "SSPM College of Engineering",
            branch: "Computer Engineering",
            year: "First Year",
            uploadedFile: {
                name: "ID_Proof.pdf",
                url: "/documents/id6.pdf"
            }
        },
        {
            id: 7,
            name: "Aditya",
            surname: "Joshi",
            email: "aditya.joshi@gmail.com",
            collegeName: "SSPM College of Engineering",
            branch: "Electronics Engineering",
            year: "Third Year",
            uploadedFile: {
                name: "Payment_Screenshot.pdf",
                url: "/documents/payment7.pdf"
            }
        },
        {
            id: 8,
            name: "Kavita",
            surname: "Mishra",
            email: "kavita.mishra@gmail.com",
            collegeName: "SSPM College of Engineering",
            branch: "Computer Engineering",
            year: "Second Year",
            uploadedFile: {
                name: "Transaction_Receipt.pdf",
                url: "/documents/receipt8.pdf"
            }
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col lg:flex-row flex-1 mt-16">
                {/* Left Section - Event Details */}
                <div className="w-full lg:w-1/3 bg-white p-4 lg:p-6">
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
                            {/* ... other event meta information ... */}
                        </div>

                        <div className="mb-4 rounded-lg overflow-hidden">
                            <img
                                src={event.imageUrl}
                                alt="BGMI Tournament"
                                className="w-full h-[250px] md:h-[400px] object-cover"
                            />
                        </div>

                        {/* Action Button */}
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                            Participate Now
                        </button>
                    </div>
                </div>

                {/* Right Section - Registered Users */}
                <div className="flex-1 bg-gray-50 p-4 lg:p-6">
                    <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800">Registered Participants</h2>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {registeredUsers.length} Users
                            </span>
                        </div>

                        {/* Scrollable Users List */}
                        <div className="max-h-[calc(100vh-12rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                            <div className="space-y-4">
                                {registeredUsers.map((user) => (
                                    <div
                                        key={user.id}
                                        className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                            {/* User Details */}
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                    <h3 className="font-semibold text-gray-800">
                                                        {user.name} {user.surname}
                                                    </h3>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <p className="text-gray-600 text-sm">{user.email}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                    </svg>
                                                    <p className="text-gray-600 text-sm">{user.collegeName}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                    </svg>
                                                    <p className="text-gray-600 text-sm">{user.branch} • {user.year}</p>
                                                </div>
                                            </div>

                                            {/* Uploaded File */}
                                            <div className="flex items-center gap-2">
                                                <a
                                                    href={user.uploadedFile.url}
                                                    className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                                    </svg>
                                                    {user.uploadedFile.name}
                                                </a>
                                            </div>
                                        </div>
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

export default EventPage2;