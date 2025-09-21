export const myProfile = {
    username:"Hannah Kuklinski",
    collegeName:"CS @ Pitt",
    sidebarImg: "/assets/profile/panthers.jpg_large",
}

//{id:"profile1", name:"", imgsrc:"", title:"", company:"", eventList: []},
export const matchList = [
        {id:"ellen", name:"Ellen Harvelle", imgsrc:"/assets/mentors/ellen.jpg", title:"CEO", company:"Harvelle Tech", eventList: [
        {
            eventId: "event1",
            eventTitle: "Quantum Computing 101",
            eventText: "Learn the basics of quantum algorithms, qubits, and how quantum computing is changing the tech landscape.",
            eventImg: "/assets/myevents/quantum.jpg",
            eventDate:"February 8, 2026",
            startDate:"08",
            startMonth:"FEB",
            eventLocation:"Harvelle Tech- Conference Room A",
            eventTime:"8pm"
        },
    ]},
    {id:"rowena", name:"Rowena MacLeod", imgsrc:"/assets/mentors/rowena.jpg", title:"VP of Operations", company:"Spellbound Systems", eventList: [
        {
            eventId: "event2",
            eventTitle: "AI in Everyday Life",
            eventText: "Explore how artificial intelligence is applied in apps, smart devices, and automation across industries.",
            eventImg: "/assets/myevents/event2.jpg",
            eventDate:"March 11, 2026",
            startDate:"11",
            startMonth:"MARCH",
            eventLocation:"Spellbound Systems- 1817",
            eventTime:"7pm"
        },
    ]},
    {id:"charlie", name:"Charlie Bradbury", imgsrc:"/assets/mentors/charlie.jpg", title:"Senior Software Engineer", company:"Oz's AI", eventList: [
        {
            eventId: "event3",
            eventTitle: "Cybersecurity Essentials",
            eventText: "Understand key principles of cybersecurity, common threats, and best practices to protect your digital life.",
            eventImg: "/assets/myevents/event3.jpg",
            eventDate:"April 24, 2026",
            startDate:"24",
            startMonth:"APRIL",
            eventLocation:"Oz's AI- Seminar 3",
            eventTime:"9pm"
        },
    ]},
    {id:"donna", name:"Donna Hanscum", imgsrc:"/assets/mentors/donna.png", title:"Software Engineer", company:"Dick Roman Enterprises", eventList: [
        {
            eventId: "event4",
            eventTitle: "Building Scalable Web Apps",
            eventText: "A hands-on session on designing and deploying scalable web applications using modern frameworks.",
            eventImg: "/assets/myevents/event4.jpg",
            eventDate:"August 21, 2026",
            startDate:"21",
            startMonth:"AUG",
            eventLocation:"Pittsburgh Convention Center",
            eventTime:"2pm"
        },
    ]},
    {id:"jo", name:"Joanna Harvelle", imgsrc:"/assets/mentors/jo.jpg", title:"Cloud Engineer", company:"Dick Roman Enterprises", eventList: [
        {
            eventId: "event5",
            eventTitle: "Cloud Computing Workshop",
            eventText: "Learn about cloud services, deployment models, and how companies leverage cloud computing for efficiency.",
            eventImg: "/assets/myevents/cloud.png",
            eventDate:"December 19, 2026",
            startDate:"19",
            startMonth:"DEC",
            eventLocation:"Dick's Auditorium",
            eventTime:"5pm"
        }
    ]},

];

//go through the matchList to get each mentor's list of events and add them to the list. not forgetting to add information about the mentors themselves!
export const extractEvents=(mentors)=> {
  const allEvents = [];
  mentors.forEach(mentor => {
    mentor.eventList.forEach(event => {
        allEvents.push({ ...event, mentorName: mentor.name, company: mentor.company, eventId: event.eventId , id:mentor.id});
    });

  });
  return allEvents;
}

export const extractMember =(mentor)=>{
    const myEvents = [];
    mentor.eventList.forEach(event => {
        myEvents.push({ ...event, mentorName: mentor.name, company: mentor.company, eventId: event.eventId, id:mentor.id });
    });
    return myEvents;
}



export const eventsOnlyArray = extractEvents(matchList);

export const potentialMatches = [
    {id:"jody", name:"Jody Mills", imgsrc:"/assets/mentors/jody.jpg", title:"Data Scientist", company:"ShadowTech Inc.", eventList: []},
    {id:"anael", name:"Anael Ackles", imgsrc:"/assets/mentors/anael.webp", title:"UI Developer", company:"BloodMoon Enterprises", eventList: []},
    {id:"bela", name:"Bela Talbot", imgsrc:"/assets/mentors/bela.jpg", title:"Campus Recruiter", company:"Eternal Eclipse", eventList: []},
    {id:"missouri", name:"Missouri Mosely", imgsrc:"/assets/mentors/missouri.webp", title:"HR Manager", company:"Twilight Innovations", eventList: []},
    {id:"claire", name:"Claire Novak", imgsrc:"/assets/mentors/claire.jpg", title:"Software Development Intern", company:"GhostNet", eventList: []},
    {id:"kaia", name:"Kaia Mills", imgsrc:"/assets/mentors/intern2.jpg", title:"Game Development Intern", company:"GhostGamers", eventList: []},
    {id:"nicole", name:"Nicole Mosely", imgsrc:"/assets/mentors/intern1.jpg", title:"Data Security Intern", company:"GhostNet", eventList: []},
];