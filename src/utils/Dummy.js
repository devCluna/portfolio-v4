import uniqid from 'uniqid'

const Data = {

    projects:{
        apps:[
            {
                id: uniqid(),
                title:"Valorant Landing Page",
                description:"An unoficial valorant landing page concept",
                techs:["react", "node"],
                links:{
                    live: "https://valorant-landing-page-concept.netlify.app",
                    repo: "https://github.com/devCluna/yt-video-collector"
                }
            },
            {
                id: uniqid(),
                title:"YT video collector",
                description:"A Video Collector for Youtube",
                techs:["React", "Axios", "React-icons", "uniqid"],
                links:{
                    live: "https://yt-video-collector.netlify.app",
                    repo: "https://github.com/devCluna/valorant-landing-page-concept"
                }
            },
            {
                id: uniqid(),
                title:"React Reign test (HackerNews)",
                description:"A meta search result powered by HackerNews API",
                techs:["React", "Redux", "Jest", "Axios", "logger", "Thunk"],
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
                links:{
                    live: "https://the-dictionary-react.netlify.app",
                    repo: "https://github.com/devCluna/the_dictionary"
                }
            }
        ],
        pens:[
            {
                id: uniqid(),
                title:"Cyberpink glitch",
                description:"A cyberPunk logo concept",
                techs:["react", "node"],
                links:{
                    live: "https://cyberpunk-logo.netlify.app/",
                    repo: "https://github.com/devCluna/CyberPunkLogo"
                }
            }
        ]
    }
}

export default Data