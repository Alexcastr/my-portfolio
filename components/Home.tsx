import Typed from "react-typed";

export const Home = () => {

  return (
    <section id="home_section">
      <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-no-repeat bg-cover md:bg-right-top bg-[url('/bg_image_alex.jpg')]">
        <div className="p-5 text-2xl text-white bg-gray-700 bg-opacity-80 rounded-xl">
          Alex Castro
          <p>
            <Typed
              strings={[
                "I'm a Full Stack Developer",
                "I'm a Freelancer",
                "I'm a Digital Marketer",
              ]}
              typeSpeed={70}
              backSpeed={70}
              loop
              style={{ color: "#06b6d4" }}
            />
          </p>
        </div>
      </header>
    </section>
  );
};
