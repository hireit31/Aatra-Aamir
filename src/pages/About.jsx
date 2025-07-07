import React from "react";

const About = () => {
  // Sample array of client logo image paths (replace with real ones)
  const clientLogos = [
    "sulafah.jpg",
    "folia.jpg",
    "claymate.jpg",
    "parwaz.png",
    "periama.jpg",
    "Manto.jpg",
    "medini.jpg",
    "tooso.png",
    "Bevbo.jpg",
    "cakeBites.jpg",
    "b.png",
    "thc.png",
  ];

  return (
    <section className="px-6 md:px-20 pt-12 max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-12">
        {/* About Image */}
        <div className="w-full md:w-1/3">
          <img
            src="/images/logos/aatra(Medium).jpg" // Replace with your actual image path
            alt="Aatra Aamir"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* About Text */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold mb-5 font-aboutHeading">
            Who?
          </h2>
          <p className="font-light mb-5 font-aboutBody  text-justify  text-lg ">
            Aatra is a professional photographer and designer, mostly known for
            her product photography.
          </p>
          <p className="font-light mb-5 font-aboutBody  text-justify text-lg">
            The spark for photography ignited early for Aatra when she
            discovered her father’s old camera and began capturing whatever
            caught her eye. That childhood curiosity quickly turned into a
            passion, eventually leading her to pursue a degree in
            design—majoring in photography.
          </p>
          <p className="font-light mb-4 font-aboutBody  text-justify text-lg">
            What began as a creative outlet evolved into a full-fledged career
            when she found herself drawn to the art of product photography.
            Intrigued by how light, composition, and subtle styling could
            elevate even the simplest objects, she began honing her skills—and
            soon, clients followed.
          </p>
        </div>
      </div>
      <p className="font-light my-4 mt-6 font-aboutBody text-justify text-lg">
        Her style? Think minimal yet striking. Crisp, clean shots with just the
        right touch of drama. Whether it’s natural or artificial, she loves
        experimenting with light to make products pop. For her, the hero is
        always the product, and she’s on a mission to make it shine— because how
        a brand presents itself visually can change everything.
      </p>
      <p className="font-light font-aboutBody text-justify text-lg">
        Based in Karachi, Pakistan, Aatra is available for shoots across the
        country—and beyond.
      </p>

      {/* Selected Clients */}
      <div className="mt-16">
        <h3 className="text-2xl md:text-4xl md:text-center font-bold md:mb-6 font-aboutHeading">
          Featured clients
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5 md:mt-10 justify-center justify-items-center">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={`/images/logos/${logo}`}
              alt={`Client ${index + 1}`}
              className="w-full h-20 object-contain hover:scale-110 transition-transform ease-in"
            />
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mt-16 md:text-center">
        <h3 className="text-2xl md:text-4xl font-bold mb-2 font-aboutHeading">Contact</h3>
        <p className="font-extralight mb-6 font-aboutBody">
          For all enquiries or bookings, feel free to email me
        </p>
        <p className="text-lg md:text-2xl font-aboutHeading font-semibold">Aatra Aamir</p>
        <a
          href="mailto:aatra.aamir@gmail.com"
          className=" font-aboutBody block md:text-lg font-light hover:font-normal transition-transform"
        >
          aatra.aamir@gmail.com
        </a>

        <a href="tel:03198201858" className="font-aboutBody block md:text-lg font-light hover:font-normal">
          03198201858
        </a>
      </div>
    </section>
  );
};

export default About;
