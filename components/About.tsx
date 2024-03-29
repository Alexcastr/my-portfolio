import Link from "next/link";
import Image from "next/image";
import photoalex from "../public/photoalex.jpg";

export const About = () => {
  return (
    <section
    id="about_section"
      className=" px-4 mb-20 md:grid md:grid-cols-2 "
    >
      <div className="">
        <div className="lg:pl-6">
          <h3 className="text-6xl font-bold mb-10">
            Hi I&apos;am <span className="text-cyan-500 py-5">Alex Castro</span>
          </h3>
          <p className="mb-10 text-start">
            International business professional graduated from the Santo Tomas
            University, I have emphasis on digital marketing and web development
            using the MERC stack and Next js framework. 
          </p>
          <Link href="/latest_curriculum2023.pdf" legacyBehavior>
            <a target="_blank" rel="noreferrer" className="rounded rounded-md bg-gray-800 text-white p-3 hover:bg-gray-200 hover:text-black transition">
              Download CV
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden md:contents">
        <Image
          className="rounded-full m-auto"
          src={photoalex}
          alt="profile picture"
          width={150}
          height={150}
        />
      </div>
    </section>
  );
};
