import uniqid from 'uniqid'

const Data = {
    devName:"devCluna",
    name:"Cristhian Luna",
    yearDate:"1997",
    techs:[
        'MERN stack',
        'React JS, developer',
        'Frontend developer',
        'JAM stack'
    ],
    experiences:[
        {
            id:uniqid(),
            title: "Fullstack MERN | Freelance",
            date: "March 2021 - until now",
            description:[
                {
                    id: uniqid(),
                    text:"As a Freelance I give support and web development services to different businesses. I collaborate with different IT teams attending their tickets and giving solutions, fixing bugs, deploying applications, documenting, or developing features sometimes."
                }
            ],
            customers: [
                {
                    id:uniqid(),
                    text:"Fulltime Force (Peru)"
                },
                {
                    id:uniqid(),
                    text:"Gunderson (USA)"
                },
                {
                    id:uniqid(),
                    text:"Viafasken (USA)"
                }
            ]
        },
        {
            id:uniqid(),
            title: "Fullstack MERN | BESE",
            date: "May 2020 -Sept 2020",
            description:[
                {
                    id: uniqid(),
                    text:"In this role, develop different functional modules for inventory management, user control (login, registration, password recovery), and collaborate in the building of a Restful API for server requests. Also, I help to document the user jorney."
                }
            ],
            customers: []
        },
        {
            id:uniqid(),
            title: "Frontend Developer | Kninos",
            date: "March 2019 - Feb 2020",
            description:[
                {
                    id: uniqid(),
                    text:"Participated in the building of an application for pet record's management , owners, medical staff, clinical history, medications, veterinary consultations, inventory; etc."
                }
            ],
            customers: []
        },
    ],
    education:[
        {
            id:uniqid(),
            title:"System Engineering",
            date:"2022",
            description:"ULEAM, Computer Science Faculty"
        },
        {
            id:uniqid(),
            title:"Technical Degree",
            date:"2016",
            description:"Lev Vigotsky, Tech school"
        },
    ],
    activities:[
        {
            id:uniqid(),
            title:"C++ Programmer",
            subtitle:"Wireless Irrigation System",
            date:"2018",
            description:"Developed a Irrigation System with arduino & raspberry Pi, who tracks & record conductivity, humitidy in the envirorment and runs by itself"
        },
        {
            id:uniqid(),
            title:"Python Programmer",
            subtitle:"Face recognition app",
            date:"2019",
            description:"Participated in a Hacktaton, building a face recognition system built form scrath with no external libraries"
        },
    ],
    
    socialMedia:{
        spotify:"https://open.spotify.com/playlist/37i9dQZF1EUMDoJuT8yJsl?si=ea6d84e259664159&nd=1",
        game:{
            img:"https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png",
            name:"The Witcher 3",
            link:"https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
        },
        twitter: "https://twitter.com/DevCLuna",
        github: "https://github.com/devCluna",
        codepen: "https://codepen.io/DevCluna",
        linkedin: "https://www.linkedin.com/in/devcluna"
    },
    projects:{
        apps:[
            {
                id: uniqid(),
                title:"Valorant Landing Page",
                description:"An unoficial valorant landing page concept",
                alt: "website screenshot",
                techs:["react", "node"],
                links:{
                    live: "https://valorant-landing-page-concept.netlify.app",
                    repo: "https://github.com/devCluna/valorant-landing-page-concept"
                }
            },
            {
                id: uniqid(),
                title:"YT video collector",
                description:"A Video Collector for Youtube",
                techs:["React", "Axios", "React-icons", "uniqid"],
                alt: "website screenshot",
                links:{
                    live: "https://yt-video-collector.netlify.app",
                    repo:  "https://github.com/devCluna/yt-video-collector"
                }
            },
            {
                id: uniqid(),
                title:"React Reign test (HackerNews)",
                description:"A meta search result powered by HackerNews API",
                techs:["React", "Redux", "Jest", "Axios", "logger", "Thunk"],
                alt: "website screenshot",
                links:{
                    live: "https://react-reign-test.netlify.app",
                    repo: "https://github.com/devCluna/react_reign_test"
                }
            },
            {
                id: uniqid(),
                title:"Volanti Single-Page",
                description:"Responsive single page for Low cost Airplanes transport Services",
                techs:["React", "Styled-components", "React-Scroll", "React-icons", "Router"],
                alt: "website screenshot",
                links:{
                    live: "https://reverent-swanson-845540.netlify.app",
                    repo: "https://github.com/devCluna/volanti-react-responsive-frontpage-devcluna"
                }
            },
            {
                id: uniqid(),
                title:"The Dictionary",
                description:"An English Dictionary supported by Free Dictionary API",
                techs:["React", "Redux", "Axios", "React-icons", "uniqid", "formik"],
                alt: "website screenshot",
                links:{
                    live: "https://the-dictionary-react.netlify.app",
                    repo: "https://github.com/devCluna/the_dictionary"
                }
            }
        ],
        pens:[
            {
                id: uniqid(),
                title:"Cyberpunk glitch",
                description:"A cyberPunk logo concept",
                techs:["react", "node"],
                alt: "website screenshot",
                links:{
                    live: "https://cyberpunk-logo.netlify.app",
                    repo: "https://github.com/devCluna/CyberPunkLogo"
                }
            },
            {
                id: uniqid(),
                title:"Matrix Rain",
                description:"A Matrix Rain effect",
                techs:["html", "css", "javascript"],
                alt: "website screenshot",
                links:{
                    live: "https://codepen.io/DevCluna/pen/bGKNMow",
                    repo: "https://codepen.io/DevCluna/pen/bGKNMow"
                }
            }
        ]
    }
}

export default Data