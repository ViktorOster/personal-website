const worksData = [
    {
        "name": "Viben",
        "description": "Implemented the website design for Viben, a bolivian EMR startup using Gatsby.js",
        "descriptionShort": "Implemented the website design for Viben, a bolivian EMR startup using Gatsby.js",
        "technologies": [
            "JavaScript",
            "React.js",
            "Gatsby.js",
            "HTML5",
            "CSS3"
        ],
        "category": "web-dev",
        "image": "work-laptop-viben.png",
        "projectLink": "http://www.viben.app",
        "importance": 1
    },
    {
        "name": "Stock Application",
        "description": "Built a stock portfolio management system with React.js that supports multiple portfolios and stocks. Stock data is fetched from Alpha Vantage API. Multiple stocks can be graphed simultaneously inside a user specified time window. Portfolios and stocks are stored in localstorage.",
        "descriptionShort": "Stock portfolio management system built with React.",
        "technologies": [
            "React.js",
            "JavaScript",
            "HTML5",
            "CSS3"
        ],
        "category": "web-dev",
        "image": "work-laptop-spms.png",
        "projectLink": "https://viktoroster.github.io/spms-app/",
        "codeLink": "https://github.com/ViktorOster/spms-app/tree/master",
        "importance": 1
    },
    {
        "name": "Wave Drawing Synth",
        "description": "Built a synthesizer with the Web Audio API that works in the browser. The synthesizer is able to play wave shapes drawn by the user. The user can add points to an HTML5 canvas, which are then converted to samples which can be played using the Web Audio API. The synthesizer can be played using the keyboard or touch controls on mobile. The synthesizer is fully responsize and adapts to all screen sizes and works in the Chrome browser on desktop and mobile.",
        "descriptionShort": "Unique synth for playing custom drawn wave shapes.",
        "technologies": [
            "JavaScript",
            "HTML5",
            "CSS3"
        ],
        "category": "web-dev",
        "image": "work-laptop-wavesynth.png",
        "projectLink": "https://viktoroster.github.io/draw-waveshape/views/index.html",
        "codeLink": "https://github.com/ViktorOster/draw-waveshape",
        "importance": 1
    },
    {
        "name": "Clothing Store",
        "description": "Clothing store that sells jackets and shoes. Product data is stored in a JavaScript object on a Node backend and fed to Pug templates. The site is responsive and has a simple search functionality. Shopping cart items are stored in localstorage.",
        "descriptionShort": "Clothing store built with Pug.js",
        "technologies": [
            "Pug.js",
            "Node.js",
            "Express.js",
            "JavaScript",
            "HTML5",
            "SCSS",
            "CSS3"
        ],
        "category": "web-dev",
        "image": "work-laptop-clothingstore.png",
        "projectLink": "https://jackets-n-shoes.herokuapp.com/",
        "codeLink": "https://github.com/ViktorOster/clothingstore",
        "importance": 2
    },
    {
        "name": "Developer Job Dashboard",
        "description": "A Dasboard built with React for browsing and analyzing collected job data. Apart from browsing archived jobs, the application can be used to visualize keyword data and trends. The data is fetched from API an endpoint on a Node backend running Express. The data is stored in mongoDB Atlas cloud database.",
        "descriptionShort": "React dashboard for browsing and analyzing job data.",
        "technologies": [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "HTML5",
            "CSS3"
        ],
        "category": "web-dev",
        "image": "work-laptop-jobboard.png",
        "projectLink": "https://dev-job-board.herokuapp.com/",
        "codeLink": "https://github.com/ViktorOster/dev-job-board",
        "importance": 2
    },
    {
        "name": "Auction Website",
        "description": "Built an auction website using Python and the Django framework as a part of a university course. Has functionalities such as posting and bidding on posts, translation, logging in and creating and updating a user. The site is deployed to pythonanywhere and the data is stored in an SQLite3 database",
        "descriptionShort": "Auction website built with Django.",
        "technologies": [
            "Django",
            "Python",
            "SQSLIte3",
            "HTML5",
            "CSS3"
        ],
        "category": "web-dev",
        "image": "work-laptop-eauction.png",
        "projectLink": "http://osterholmv.pythonanywhere.com/",
        "codeLink": "https://github.com/ViktorOster/auction-django",
        "importance": 1
    },
    {
        "name": "Paint App/Gallery",
        "description": "A sketchboard / gallery application using HTML5 canvas that allows users to draw and post drawings to a public gallery. The drawings are stored in JSON-format in a simple NodeJS backend.",
        "descriptionShort": "A sketchboard and gallery application",
        "technologies": [
            "Node.js",
            "Express.js",
            "JavaScript",
            "JSON",
            "HTML5",
            "CSS3"
        ],
        "category": "web-dev",
        "image": "work-laptop-sketchgallery.png",
        "projectLink": "https://sketch-gallery.glitch.me/",
        "codeLink": "https://github.com/ViktorOster/sketch-gallery",
        "importance": 2
    },
    {
        "name": "Mech Game (Demo)",
        "description": "Mech-type game demo done with Unity. Used Blender for models and textures.",
        "descriptionShort": "Mech-type game demo done with Unity. Used Blender for models and textures.",
        "technologies": [
            "Unity",
            "C#",
            "Blender"
        ],
        "category": "game-dev",
        "image": "work-laptop-mech-game.png",
        "projectLink": "https://viktoroster.github.io/mech-demo-build/",
        "codeLink": "null",
        "importance": 2
    },
    {
        "name": "Third Person Shooter (Demo)",
        "description": "Demo of a third person shooter type game with Unity. Used Blender for models and textures.",
        "descriptionShort": "Demo of a third person shooter type game made with Unity.",
        "technologies": [
            "Unity",
            "C#",
            "Blender"
        ],
        "category": "game-dev",
        "image": "work-laptop-alien-game.png",
        "projectLink": "https://viktoroster.github.io/alien-demo-build/",
        "codeLink": "null",
        "importance": 2
    },
    {
        "name": "Hack 'n' Slash Game (Demo)",
        "description": "Top down hack and slash game made at a university course. Contains one playable level.",
        "descriptionShort": "Top down hack and slash game made at a university course. ",
        "technologies": [
            "Unity",
            "C#"
        ],
        "category": "game-dev",
        "image": "work-laptop-ninja-game.png",
        "projectLink": "https://viktoroster.github.io/ninja-game-build/",
        "codeLink": "null",
        "importance": 2
    },
    {
        "name": "Wolfthrone Studios",
        "description": "Website for Wolfthrone Studios, a recording studio",
        "descriptionShort": "Single page website for a recording studio in Pedersöre, Finland",
        "technologies": [
            "JavaScript",
            "CSS3"
        ],
        "category": "web-design",
        "image": "work-laptop-wolfthrone.png",
        "projectLink": "www.wolfthronestudios.com",
        "codeLink": "https://github.com/ViktorOster/wolfthronestudios",
        "importance": 1
    },
    {
        "name": "FollowUp",
        "description": "Single page website for a startup in Philadelphia, US",
        "descriptionShort": "Single page website for a startup in Philadelphia, US",
        "technologies": [
            "JavaScript",
            "CSS3"
        ],
        "category": "web-design",
        "image": "work-laptop-followup.png",
        "projectLink": "http://followup.network",
        "codeLink": "",
        "importance": 1
    },
    {
        "name": "Jarl Hohenthal",
        "description": "Website for Jarl Hohenthal, a glass artist in Kimito, Finland",
        "descriptionShort": "Website for Jarl Hohenthal, a glass artist in Kimito, Finland",
        "technologies": [
            "JavaScript",
            "WordPress",
            "PHP",
            "CSS3"
        ],
        "category": "web-design",
        "image": "work-laptop-jalle.png",
        "projectLink": "http://newerdomain.icu/",
        "codeLink": "",
        "importance": 1
    }
]