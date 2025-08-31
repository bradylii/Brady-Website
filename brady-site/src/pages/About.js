import AboutCard from "../components/AboutCard";
import Highlight from "../components/Highlight";
import NasaApod from "../components/NasaApod";

export default function About() {
  const studyAbroadGallery = [
    { src: "/images/SeattleHike.JPG", caption: "Hiking Wallace Lake in Seattle" },
    { src: "/images/OxDinner.JPG", caption: "Formal dinner at University of Oxford" },
    { src: "/images/Baking.JPEG", caption: "Baking class in Belgium" },
    { src: "/images/NATO.JPG", caption: "Visiting NATO headquarters in Belgium" },
    { src: "/images/SeattleMicrosoft.JPG", caption: "Visiting Microsoft Tech Center in Seattle" },
    { src: "/images/OxfordGroup.jpg", caption: "Late night bite at University of Oxford" },
    { src: "/images/BelgiumMicrosoft.JPG", caption: "Visiting Microsoft in Belgium" },

  ];

  return (
    <section className="about-grid">
      <h2>About Me</h2>
      <p className="hero-subtext">Every career is more than bullet points, here’s the story behind mine.</p>
      <AboutCard title="Hi, I'm Brady!" image="/images/HeadShot.jpg">
        I am a Computer Science student with a minor in Cognitive Psychology at{" "}
        <Highlight>Northeastern University</Highlight>. I specialize in <Highlight>Human-Computer Interaction and Software</Highlight> and have extensive experience in VR/AR technology and research. I'm passionate about pushing the boundaries of technology to create meaningful and engaging user experiences, leading me to learn a variety of emerging technologies and study abroad.
        <br /><br />
        Beyond my technical experience, as a first-gen student, I have worked in food service, math tutoring, offices, leading orientations, and club leadership. My resolve to continue to work towards my goals and my diverse range of skills and perspectives make me!
      </AboutCard>

      <AboutCard
        title="Study Abroad Enjoyer" gallery={studyAbroadGallery} reverse>
          Growing up, I did not have the opportunity to travel much. 
          Coming to Northeastern, with the help of financial aid and scholarships, 
          I’ve been lucky enough to study in Belgium, Seattle, and Oxford. Each experience gave me new perspectives
          on technology, culture, and collaboration.
           <br /><br />
          In <Highlight>Belgium</Highlight>, I studied <Highlight>Software and Data in International Governments  and Politics</Highlight> with Dr. Fontenot and Dr. Gerber. 
          We got to visit many international organizations (NATO, EU, Cybersecurity firms) and hear from experts in the field.
          In <Highlight>Seattle</Highlight>, I studied <Highlight>User Experience Design</Highlight>, where I got to learn the beauty of UX forward processes and methodologies while visiting Microsoft and Oracle.
          Most recently, I studied <Highlight>Quantum Computing and Philosophy</Highlight> at the <Highlight>University of Oxford</Highlight>, where I got to experience the rich history 
          and tutorial system of one of the world's top universities. Learning about how quantum computing is fundamentally different 
          from classical computing from Dr. Andrew Steane, a world-renowned physicist, was fascinating. All these experiences have shaped my perspectives on technology and its power.
      </AboutCard>

      <AboutCard
        title="My Philosophy and Approach" large>
          Here are some key principles I strive to follow:
          <br /><br />
          <Highlight>1. The finest treasures are hidden within challenge and doubt: </Highlight> From social gatherings to complex projects, the most valuable experiences often come from pushing through discomfort and uncertainty. This is where growth, learning, and new experiences lie.
          <br /><br />
          <Highlight>2. Let them: </Highlight> This is something I am constantly trying to remind myself. Stop trying to control others and instead focus on what you can control: your own actions, reactions, and boundaries. Acknowledge situations and behaviors outside of your control and choose not to react with judgment or attempts to change others. This mindset is anxiety freeing and helps me focus on what matters.
          <br /><br />
          <Highlight>3. Try, then ask: </Highlight> Over my years as a student and mentor, I've learned the importance of trying first in order to formulate a strong and effective question. It allows you to push for a more helpful answer and benefits both parties. There are no stupid questions, but there are lazy ones.
      </AboutCard>

      <AboutCard
        title="What am I up to now? (as of August 2025)" image="/images/noodles.JPG">
          I've been resting up since getting back from Oxford. I guess resting means working on this personal website super late at night and leetcoding. 
          It can get oddly fun and addicting. I enjoy <Highlight>cooking</Highlight> and am trying to learn how to cook Paella, a dish I loved when I visited Spain. I recently discovered a great noodle spot near home (Quincy MA).
          <br /><br />
          I have also been preparing for this upcoming recruiting cycle and am <Highlight>looking for my final co-op and internship</Highlight> before I <Highlight>graduate in April 2027</Highlight>.
          Don't hesitate to reach out if you have any opportunities or just want to chat about tech, philosophy, food, or anything else!
      </AboutCard>
      <NasaApod>
        {({ title, date, explanation, url, mediaType }) => (
          <AboutCard title="NASA Picture of the Day" image={mediaType === "image" ? url : null}>
            <p>Playing with the NASA Open API 🚀 It changes at 12 AM EST</p>
            {mediaType === "video" ? (
              <iframe
                src={url}
                title={title}
                className="nasa-video"
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
              />
            ) : null}
            <p><Highlight>{`${title} (${date})`}</Highlight>
              <br /><em>"{explanation}"</em>
            </p>
          </AboutCard>
        )}
      </NasaApod>
    </section>
  );
}