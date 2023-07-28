import Link from "next/link";

function About() {
  return (
    <div>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          corrupti cumque nulla odit dignissimos officia eos, libero laudantium
          mollitia beatae doloribus in ab minima itaque vitae optio deserunt
          velit aliquid!
        </p>
      </div>
      <Link href="/" id="linkBack">
        Back
      </Link>
    </div>
  );
}

export default About;
