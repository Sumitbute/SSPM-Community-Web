import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import EventForm1 from '../EventForm1';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';

const EventPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [hoveredDate, setHoveredDate] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showForm, setShowForm] = useState(false);

    // Demo events data with past and future events
    const events = [
        {
            id: 1,
            title: "Past Tech Conference",
            date: "2024-01-15", // Past event
            time: "10:00 AM - 4:00 PM",
            location: "Convention Center",
            description: "Annual technology conference featuring the latest innovations",
            organizer: "Tech Corp",
            type: "Conference",
            tags: ["Technology", "Networking", "Innovation"]
        },
        {
            id: 2,
            title: "BGMI Tournament",
            date: "2024-02-07", // Current month event
            time: "2:00 PM - 5:00 PM",
            location: "Virtual Event",
            description: "Join the ultimate BGMI tournament and compete for exciting prizes",
            organizer: "Gaming Hub",
            type: "Tournament",
            tags: ["Gaming", "BGMI", "Competition"]
        },
        {
            id: 3,
            title: "Future Startup Event",
            date: "2024-03-20", // Future event
            time: "6:00 PM - 9:00 PM",
            location: "Innovation Center",
            description: "Connect with fellow entrepreneurs and investors",
            organizer: "Startup Hub",
            type: "Networking",
            tags: ["Startup", "Networking", "Business"]
        },
        {
            id: 4,
            title: "Past Tech Conference",
            date: "2024-01-15", // Past event
            time: "10:00 AM - 4:00 PM",
            location: "Convention Center",
            description: "Annual technology conference featuring the latest innovations",
            organizer: "Tech Corp",
            type: "Conference",
            tags: ["Technology", "Networking", "Innovation"]
        },
        {
            id: 5,
            title: "BGMI Tournament",
            date: "2024-02-07", // Current month event
            time: "2:00 PM - 5:00 PM",
            location: "Virtual Event",
            description: "Join the ultimate BGMI tournament and compete for exciting prizes",
            organizer: "Gaming Hub",
            type: "Tournament",
            tags: ["Gaming", "BGMI", "Competition"]
        },
        {
            id: 6,
            title: "Future Startup Event",
            date: "2024-03-20", // Future event
            time: "6:00 PM - 9:00 PM",
            location: "Innovation Center",
            description: "Connect with fellow entrepreneurs and investors",
            organizer: "Startup Hub",
            type: "Networking",
            tags: ["Startup", "Networking", "Business"]
        }
    ];

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
    const today = new Date();

    const getEventsForDate = (date) => {
        return events.filter(event => isSameDay(new Date(event.date), date));
    };

    const getEventStatus = (date) => {
        if (!hasEvents(date)) return null;

        const compareDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (isSameDay(compareDate, today)) return 'current';
        if (compareDate < today) return 'past';
        return 'upcoming';
    };

    const hasEvents = (date) => {
        return events.some(event => isSameDay(new Date(event.date), date));
    };

    const getEventHighlightColor = (status) => {
        switch (status) {
            case 'past':
                return 'bg-gray-100 hover:bg-gray-200';
            case 'current':
                return 'bg-green-100 hover:bg-green-200';
            case 'upcoming':
                return 'bg-blue-100 hover:bg-blue-200';
            default:
                return '';
        }
    };

    const getDotColor = (status) => {
        switch (status) {
            case 'past':
                return 'bg-gray-500';
            case 'current':
                return 'bg-green-500';
            case 'upcoming':
                return 'bg-blue-500';
            default:
                return 'bg-blue-500';
        }
    };

    // Add new helper functions
    const getEventTypeColor = (type) => {
        switch (type.toLowerCase()) {
            case 'conference':
                return 'bg-purple-100 hover:bg-purple-200';
            case 'tournament':
                return 'bg-red-100 hover:bg-red-200';
            case 'networking':
                return 'bg-green-100 hover:bg-green-200';
            default:
                return 'bg-blue-100 hover:bg-blue-200';
        }
    };

    const getEventTypeDotColor = (type) => {
        switch (type.toLowerCase()) {
            case 'conference':
                return 'bg-purple-500';
            case 'tournament':
                return 'bg-red-500';
            case 'networking':
                return 'bg-green-500';
            default:
                return 'bg-blue-500';
        }
    };

    const handleCreateEventClick = () => {
        if (selectedDate) {
            setShowForm(true);
        }
    };

    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Navbar />
            <div className="flex flex-1 mt-16 overflow-y-auto lg:overflow-hidden [&::-webkit-scrollbar]:hidden lg:[&::-webkit-scrollbar]:block [-ms-overflow-style:'none'] lg:[-ms-overflow-style:'auto'] [scrollbar-width:'none'] lg:[scrollbar-width:'auto']">
                {/* Main content wrapper with responsive layout */}
                <div className="flex flex-col lg:flex-row w-full">
                    {/* Left Section - Calendar */}
                    <div className="w-full lg:w-[400px] bg-white border-r border-gray-200 p-6 lg:overflow-y-auto">
                        <h1 className="text-3xl font-bold text-gray-800 mb-9">Events Calendar</h1>

                        {/* Calendar Header */}
                        <div className="mb-4 flex justify-between items-center">
                            <button
                                onClick={() => setCurrentDate(subMonths(currentDate, 1))}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <h2 className="text-xl font-semibold text-gray-800">
                                {format(currentDate, 'MMMM yyyy')}
                            </h2>
                            <button
                                onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Calendar Grid */}
                        <div className="mb-6">
                            {/* Calendar Header - Days of Week */}
                            <div className="grid grid-cols-7 mb-2">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                    <div key={day} className="text-center text-xs uppercase tracking-wider font-semibold text-gray-500 py-2">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar Days */}
                            <div className="grid grid-cols-7 gap-2">
                                {monthDays.map((day) => {
                                    const dayEvents = getEventsForDate(day);
                                    const hasEventToday = dayEvents.length > 0;
                                    const eventStatus = getEventStatus(day);
                                    const isSelected = selectedDate && isSameDay(day, selectedDate);
                                    const isToday = isSameDay(day, today);
                                    const eventTypes = [...new Set(dayEvents.map(event => event.type))];

                                    return (
                                        <div
                                            key={day.toString()}
                                            className={`
                                                relative aspect-square flex flex-col items-center justify-center
                                                rounded-xl transition-all duration-200 cursor-pointer
                                                ${!isSameMonth(day, currentDate) ? 'text-gray-300' : 'text-gray-700'}
                                                ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2 shadow-lg' : ''}
                                                ${isToday ? 'bg-blue-50' : 'hover:bg-gray-50'}
                                                ${hasEventToday ? 'font-medium' : ''}
                                            `}
                                            onClick={() => setSelectedDate(day)}
                                            onMouseEnter={() => setHoveredDate(day)}
                                            onMouseLeave={() => setHoveredDate(null)}
                                        >
                                            {/* Date Number */}
                                            <div className={`
                                                relative z-10 w-8 h-8 flex items-center justify-center rounded-full
                                                ${isToday ? 'bg-blue-500 text-white' : ''}
                                            `}>
                                                {format(day, 'd')}

                                                {/* Event count badge */}
                                                {hasEventToday && dayEvents.length > 1 && (
                                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                                                        {dayEvents.length}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Event type indicators */}
                                            {hasEventToday && (
                                                <div className="absolute bottom-2 flex gap-1">
                                                    {eventTypes.slice(0, 3).map((type, index) => (
                                                        <div
                                                            key={index}
                                                            className={`h-1 w-1 rounded-full ${getEventTypeDotColor(type)}`}
                                                        ></div>
                                                    ))}
                                                    {eventTypes.length > 3 && (
                                                        <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Create Event Button */}
                        <button
                            onClick={handleCreateEventClick}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 mb-6"
                            disabled={!selectedDate}
                        >
                            {selectedDate ? `Create Event for ${format(selectedDate, 'MMM d')}` : 'Select a date'}
                        </button>

                        {/* Legend */}
                        <div className="hidden lg:block space-y-2">
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Event Types</h3>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                <span className="text-sm text-gray-600">Conference</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <span className="text-sm text-gray-600">Tournament</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-600">Networking</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Form Section - Shows below calendar */}
                    <div className="block lg:hidden w-full">
                        {showForm && (
                            <div className="bg-gray-50 p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-semibold">Create New Event</h2>
                                    <button
                                        onClick={() => setShowForm(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="lg:overflow-y-auto">
                                    <EventForm1 selectedDate={selectedDate} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Middle Section - Events List */}
                    <div className={`flex-1 ${showForm ? 'hidden lg:block' : 'block'} lg:overflow-y-auto`}>
                        {!showForm ? (
                            // Events List
                            <div className="h-full">
                                <h2 className="text-xl font-semibold text-gray-800 p-6">
                                    {selectedDate
                                        ? `Events on ${format(selectedDate, 'MMMM d, yyyy')}`
                                        : 'All Upcoming Events'
                                    }
                                </h2>
                                <div className="px-6 pb-6 lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                                    <div className="space-y-4">
                                        {(selectedDate ? getEventsForDate(selectedDate) : events).map((event) => (
                                            <div
                                                key={event.id}
                                                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                                                        <p className="text-gray-600">{event.time}</p>
                                                        <p className="text-gray-600">{event.location}</p>
                                                        <p className="text-gray-600 mt-2">{event.description}</p>
                                                        <div className="flex flex-wrap gap-2 mt-3">
                                                            {event.tags.map((tag, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                                        {event.type}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                        {selectedDate && getEventsForDate(selectedDate).length === 0 && (
                                            <p className="text-center text-gray-500">No events scheduled for this date.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>

                    {/* Desktop Form Section - Shows on right side */}
                    <div className="hidden lg:block h-full">
                        {showForm && (
                            <div className="w-[400px] bg-gray-50 p-6 h-full overflow-y-auto overflow-x-hidden">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-semibold">Create New Event</h2>
                                    <button
                                        onClick={() => setShowForm(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <EventForm1 selectedDate={selectedDate} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPage;
