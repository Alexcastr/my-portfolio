import Typed from "react-typed";

export const Home = () => {

  return (
    <section id="home_section">
      <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80')]">
        <div className="p-5 text-2xl text-gray-800 bg-teal-900 bg-opacity-80 rounded-xl">
          Alex Castro
          <p>
            <Typed
              strings={[
                "I'm a Full Stack Developer",
                "I Love Software Development",
                "I'm a Digital Marketer",
              ]}
              typeSpeed={70}
              backSpeed={70}
              loop
            />
          </p>
        </div>
      </header>
    </section>
  );
};
