export const myProfile = {
    username:"Hannah Kuklinski",
    collegeName:"CS @ Pitt",
    sidebarImg: "/assets/profile/panthers.jpg_large",
}

//{id:"profile1", name:"", imgsrc:"", title:"", company:"", eventList: []},
export const matchList = [
    {id:"ellen-harvelle", name:"Ellen Harvelle", imgsrc:"/assets/mentors/ellen.jpg", title:"CEO", company:"Harvelle Roadhouse", eventList: [
        {
            eventId: "event1",
            eventTitle: "Introduction to Quantum Computing",
            eventText: "Learn the basics of quantum algorithms, qubits, and how quantum computing is changing the tech landscape.",
            eventImg: "/assets/myevents/quantum.jpg"
        }
    ]},
    {id:"rowena-macleod", name:"Rowena MacLeod", imgsrc:"/assets/mentors/rowena.jpg", title:"VP of Operations", company:"Harvelle Roadhouse", eventList: [
        {
            eventId: "event2",
            eventTitle: "AI in Everyday Life",
            eventText: "Explore how artificial intelligence is applied in apps, smart devices, and automation across industries.",
            eventImg: "/assets/myevents/event2.jpg"
        },
    ]},
    {id:"charlie-bradbury", name:"Charlie Bradbury", imgsrc:"/assets/mentors/charlie.jpg", title:"Senior Software Engineer", company:"Harvelle Roadhouse", eventList: [
        {
            eventId: "event3",
            eventTitle: "Cybersecurity Essentials",
            eventText: "Understand key principles of cybersecurity, common threats, and best practices to protect your digital life.",
            eventImg: "/assets/myevents/event3.jpg"
        },
    ]},
    {id:"donna-hanscum", name:"Donna Hanscum", imgsrc:"/assets/mentors/donna.png", title:"Software Engineer", company:"Dick Roman Enterprises", eventList: [
        {
            eventId: "event4",
            eventTitle: "Building Scalable Web Apps",
            eventText: "A hands-on session on designing and deploying scalable web applications using modern frameworks.",
            eventImg: "/assets/myevents/event4.jpg"
        },
    ]},
    {id:"jo-harvelle", name:"Joanna Harvelle", imgsrc:"/assets/mentors/jo.jpg", title:"Cloud Engineer", company:"Dick Roman Enterprises", eventList: [
        {
            eventId: "event5",
            eventTitle: "Cloud Computing Workshop",
            eventText: "Learn about cloud services, deployment models, and how companies leverage cloud computing for efficiency.",
            eventImg: "/assets/myevents/cloud.png"
        }
    ]},
];

//go through the matchList to get each mentor's list of events and add them to the list. not forgetting to add information about the mentors themselves!
function extractEvents(mentors) {
  const allEvents = [];
  mentors.forEach(mentor => {
    mentor.eventList.forEach(event => {
        allEvents.push({ ...event, mentorName: mentor.name, company: mentor.company, eventId: event.eventId });
    });

  });
  return allEvents;
}

export const eventsOnlyArray = extractEvents(matchList);