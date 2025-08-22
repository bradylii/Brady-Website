import AboutCard from "../components/AboutCard";
import Highlight from "../components/Highlight";

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
      <p className="hero-subtext">Behind every resume is a story, here is part of mine</p>
      <AboutCard title="Hi, I'm Brady!" image="/images/HeadShot.jpg">
        I am a Computer Science student with a minor in Cognitive Psychology at{" "}
        <Highlight>Northeastern University</Highlight>. I specialize in <Highlight>Human-Computer Interaction and Software</Highlight> and have extensive experience in VR/AR technology and research. I'm passionate about pushing the boundaries of technology to create meaningful and engaging user experiences, leading me to learn a variety of rising technologies and studying abroad.
        <br /><br />
        Beyond my technical experience, as a first-gen student, I have worked in food service, math tutoring, offices, leading orientations, and club leadership. My resolve to continue to work towards my goals and my diverse range of skills and perspectives are my strong suits!
      </AboutCard>

      <AboutCard
        title="Study Abroad Enjoyer" gallery={studyAbroadGallery} reverse>
          Growing up I did not have the opportunity to travel much. 
          Coming to Northeastern, with the help of financial aid and scholarships, 
          I’ve been lucky enough to study in Belgium, Seattle, and Oxford. Each experience gave me new perspectives
          on technology, culture, and collaboration.
           <br /><br />
          In <Highlight>Belgium</Highlight>, I studied <Highlight>Software and Data in International Govenments and Politics</Highlight> with Dr. Fontenot and Dr. Gerber. 
          We got to visit many international organizations (NATO, EU, Cybersecurity firms) and hear from experts in the field.
          In <Highlight>Seattle</Highlight>, I studied <Highlight>User Experience Design</Highlight>, where I got to learn the beauty of UX forward processes and methodologies while visiting Microsoft and Oracle.
          Most recently, I studied <Highlight>Quantum Computing and Philosophy</Highlight> at the <Highlight>University of Oxford</Highlight>, where I got to experience the rich history 
          and tutorial system of one of the world's top universities. Learning about how quantum computing is fundamentally different 
          from classical computing from Dr. Andrew Steane, a world-renowned physicist, was fascinating. All these experiences have shaped my perspectives of technology and its power.
      </AboutCard>


      <AboutCard
        title="What am I up to now? (as of August 2025)" image="/images/HeadShot.jpg">
          I've been resting up since getting back from Oxford. I guess resting means working on this personal website super late at night and leetcoding. 
          It can get oddly fun and addicting. I enjoy <Highlight>cooking</Highlight> and am trying to learn how to cook Paella, a dish I loved when I visited Spain. I have been preparing for this upcoming recruiting cycle and am <Highlight>looking for my final co-op and internship</Highlight> before I <Highlight>graduate in April 2027</Highlight>.
          Don't hesitate to reach out if you have any opportunities or just want to chat about tech, philosophy, food, or anything else!
      </AboutCard>
    </section>
  );
}