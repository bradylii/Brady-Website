import AboutCard from "../components/AboutCard";

export default function About() {
  const studyAbroadGallery = [
    { src: "/images/SeattleHike.jpg", caption: "Hiking Wallace Lake in Seattle" },
    { src: "/images/NATO.jpg", caption: "Visiting NATO headquarters in Belgium" },
    { src: "/images/OxDinner.jpg", caption: "Formal dinner at University of Oxford" },
    { src: "/images/SeattleMicrosoft.jpg", caption: "Visiting Microsoft Technology Center in Seattle" },
    { src: "/images/Baking.jpeg", caption: "Baking class in Belgium" },
    { src: "/images/BelgiumMicrosoft.jpg", caption: "Visiting Microsoft in Belgium" },
    { src: "/images/OxfordGroup.jpg", caption: "Late night bite at University of Oxford" },

  ];

  return (
    <section className="about-grid">
      <h2>About Me</h2>
      <AboutCard
        title="Hi, I'm Brady!"
        text="I am a Computer Science student with a minor in Cognitive Psychology at Northeastern University. 
        I specialize in Human-Computer Interaction and Software. Beyond my technical experience, I have worked in food service, 
        math tutoring, offices, leading orientations, and club leadership. I've done programs in Belgium, Seattle, 
        and University of Oxford. My resolve to continue to work towards my goals and my diverse range of skills and perspectives
        are my strong suits!"
        image="/images/HeadShot.jpg"
      />

      <AboutCard
        title="Study Abroad Enjoyer"
        text="I’ve been lucky enough to travel for studies in Belgium, Seattle, and Oxford. Each experience gave me new perspectives
        on technology, culture, and collaboration."
        gallery={studyAbroadGallery}
        reverse
        // className="large"
      />

      <AboutCard
        title="What am I up to now? (as of August 2025)"
        text="I’ve been lucky enough to travel for studies in Belgium, Seattle, and Oxford. Each experience gave me new perspectives
        on technology, culture, and collaboration."
      />
    </section>
  );
}