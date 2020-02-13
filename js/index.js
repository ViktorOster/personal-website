//scroll based animations
AOS.init();

//typed text effect in hero
new Typewriter('#hero-text-replace', {
    strings: ['web developer.', 'web designer.'],
    autoStart: true,
    loop: true
});

//filter
const workContainer = document.getElementById("works-container")
let selectedFilter = "all"
const workFilters = document.querySelectorAll(".work-filter")
workFilters.forEach(filterBtn => {
    filterBtn.addEventListener("click", () => {
        workFilters.forEach(filter => {
            filter.classList.remove("is-selected")
        })
        if (selectedFilter !== filterBtn.value) {
            filterBtn.classList += " is-selected"
            filterWork(filterBtn.value)
        }
        selectedFilter = filterBtn.value
    })
})

filterWork(selectedFilter)
function filterWork(filterWord) {
    const works = document.querySelectorAll(".work")
    works.forEach(work => {
        work.classList.remove("zoom-in")
        work.classList += " zoom-out"
    })
    setTimeout(() => {
        while (workContainer.firstChild) {
            workContainer.removeChild(workContainer.firstChild);
        }
        if (filterWord === "all") {
            worksData.forEach(work => {
                workContainer.appendChild(buildWorkElement(work.image, work.name, work.projectLink, work.descriptionShort, work.codeLink))
            })
        } else {
            worksData.filter(work => work.category === filterWord).forEach(work => {
                workContainer.appendChild(buildWorkElement(work.image, work.name, work.projectLink, work.descriptionShort, work.codeLink))
            })
        }
    }, 300);


}

// workContainer.appendChild(buildWorkElement(worksData[0].image, worksData[0].name, worksData[0].projectLink, worksData[0].description))

function buildWorkElement(imgSrc, name, link, description, codeLink) {
    const containerOuter = document.createElement("div")
    containerOuter.classList = "col col-12 col-sm-6 col-md-4";

    const containerInner = document.createElement("div")
    containerInner.classList = "work"
    //containerInner.setAttribute("data-aos", "zoom-in")
    containerOuter.appendChild(containerInner)

    const imgLink = document.createElement("a")
    imgLink.href = link
    imgLink.target = "_blank"
    imgLink.rel = "noopener noreferrer"
    containerInner.appendChild(imgLink)

    workImg = document.createElement("img")
    workImg.src = "./assets/images/works/" + imgSrc
    workImg.classList = "work__screenshot"
    imgLink.appendChild(workImg)

    workLink = document.createElement("a")
    workLink.href = link
    workLink.textContent = name
    containerInner.appendChild(workLink)

    if (codeLink) {
        codeLinkElement = document.createElement("a")
        codeLinkElement.href = codeLink
        codeLinkElement.target = "_blank"
        codeLinkElement.rel = "noopener noreferrer"
        containerInner.appendChild(codeLinkElement)

        githubImg = document.createElement("img")
        githubImg.classList = "icon"
        githubImg.src = "./assets/icons/github-face.svg"
        codeLinkElement.appendChild(githubImg)
    }

    workDescription = document.createElement("p")
    workDescription.textContent = description
    containerInner.appendChild(workDescription)


    // workShadow = document.createElement("img")
    // workShadow.src = "./assets/images/laptop-shadow.png"
    // workShadow.classList = "work__laptop-shadow"
    // containerInner.appendChild(workShadow)

    containerInner.classList += " zoom-in"
    return containerOuter
}


//START NAVBAR
const navbar = document.querySelector(".navbar")
const navbarMobile = document.querySelector(".navbar-mobile")
const hamburger = document.querySelector("#hamburger")
//mobile nav
hamburger.addEventListener("click", (e) => {
    if (!navbarMobile.classList.contains("is-showing")) {
        navbarMobile.classList += " is-showing"
        hamburger.classList += " is-showing"
    }
    else {
        navbarMobile.classList.remove("is-showing")
        hamburger.classList.remove("is-showing")
    }
})

//show navbar when scrolling up, hide when scrolling down
let oldScrollPosY = 0;
window.addEventListener("scroll", () => {
    setTimeout(() => {
        oldScrollPosY = window.scrollY;
    }, 50);

    if (window.scrollY > oldScrollPosY) { //scrolled down, show/hide navbar, show scroll up btn
        navbar.classList.remove("is-scrolling-up")
        navbarMobile.classList.remove("is-scrolling-up")
        if (!navbar.classList.contains("is-scrolling-down")) {
            navbar.classList += " is-scrolling-down";
            navbarMobile.classList += " is-scrolling-down";
            // buttonScrollUp.classList += " is-showing";
        }

    }
    if (window.scrollY < oldScrollPosY) { //scrolled up, show navbar
        navbar.classList.remove("is-scrolling-down")
        navbarMobile.classList.remove("is-scrolling-down")
        if (!navbar.classList.contains("is-scrolling-up")) {
            navbar.classList += " is-scrolling-up";
            navbarMobile.classList += " is-scrolling-up";
        }
    }
    if (window.scrollY <= 16) { //reset navbar if at top
        navbar.classList.remove("is-scrolling-up")
        navbar.classList.remove("is-scrolling-down")
        navbarMobile.classList.remove("is-scrolling-up")
        navbarMobile.classList.remove("is-scrolling-down")
        // buttonScrollUp.classList.remove("is-showing")
    }
})

    //END NAVBAR