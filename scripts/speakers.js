const speakers = [
  {
    id: 1,
    name: "Marouane Benbetka",
    profession: "Computer Systems Engineer, with A Keen Interest In Security",
    img_url: "./assets/logo/Vector-1.svg",
    activity: "Conference: Lock Picking 101",
    facebook: "#",
    linkedIn: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Hania Mennad",
    profession: "Computer Systems Engineer, with A Keen Interest In Security",
    img_url: "./assets/logo/Vector-1.svg",
    activity: "Conference: Lock Picking 101",
    facebook: "#",
    linkedIn: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Walid Berrouk",
    profession: "Computer Systems Engineer, with A Keen Interest In Security",
    img_url: "./assets/logo/Vector-1.svg",
    activity: "Conference: Lock Picking 101",
    facebook: "#",
    linkedIn: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "Sami Bouchbout",
    profession: "Computer Systems Engineer, with A Keen Interest In Security",
    img_url: "./assets/logo/Vector-1.svg",
    activity: "Conference: Lock Picking 101",
    facebook: "#",
    linkedIn: "#",
    twitter: "#",
  },
  {
    id: 5,
    name: "balaaa blaaaaaaa",
    profession: "Computer Systems Engineer, with A Keen Interest In Security",
    img_url: "./assets/logo/Vector-1.svg",
    activity: "Conference: Lock Picking 101",
    facebook: "#",
    linkedIn: "#",
    twitter: "#",
  },
];

document.getElementById("speakers-list").innerHTML = `

${speakers
  .map(
    (speaker) =>
      `<div
            class="speaker ml-[20px] md:flex md:justify-between md:items-center md:my-[10vw] lg:my-[5vw] md:ml-0" key=${speaker.id}
        >
            <div class="speaker-info font-raleway text-white mb-5">
                <h1
                class="font-righteous text-[calc(22px+1.1vw)] my-[calc(5px+.3vw)] mb-[2.4vw]"
                >
                     ${speaker.activity}
                </h1>
                <h2 class="text-[calc(18px+1.1vw)] font-bold tracking-wide">
                    ${speaker.name}
                </h2>
                <p
                  class="text-[calc(14px+.9vw)] max-w-[30ch] leading-[1.25] mb-6"
                >
                    ${speaker.profession}
                 </p>
                <a href=${speaker.facebook}>
                    <img
                    src="./assets/logo/Vector-1.svg"
                    alt="facebook"
                    class="inline-block mr-5 w-9 md:w-10 hover:opacity-60"
                    />
                </a>
                <a href=${speaker.twitter}>
                    <img
                    src="./assets/logo/Vector.svg"
                    alt="twiter"
                    class="inline-block mr-5 w-9 md:w-10 hover:opacity-60"
                    />
                </a>
                <a href=${speaker.linkedIn}>
                    <img
                    src="./assets/logo/Vector-2.svg"
                    alt="LinkedIn"
                    class="inline-block mr-5 w-9 md:w-10 hover:opacity-60"
                    />
                </a>
            </div>
        <div
        class="speaker-img w-[calc(200px+4vw)] md:h-[290px] lg:h-[320px] md:mx-0 h-64 lg:mx-12 ml-20 mb-16 md:mb-0 self-center"
        >
            <img
                src="./assets/speakers/speaker.png"
                alt="speaker.png"
                class="w-full h-full object-cover"
            />
        </div>
    </div>`
  )
  .join("")}

`;
