
import Image from 'next/image'
import photoalex from 'public/photoalex.jpg'

import {FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

export const Profile = () => {
  return (
    <div>
      <Image
        
        src={photoalex}
        alt="Alexanmder castro"
        className="rounded-full mx-auto w-28 h-32"
      />
      <h1 className="text-3xl font-bold text-center py-5">Alex Castro</h1>
      <div className="flex justify-center gap-4 text-center">
        <a 
          href="https://github.com/Alexcastr" 
          target="_blank" 
          className="bg-gray-800 rounded-full p-4 hover:bg-cyan-900 transition duration-200 "
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/alex.kstro.1"
          target="_blank"
          className="bg-gray-800 rounded-full p-4 hover:bg-cyan-900 transition duration-200 "
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/alexcastro5/"
          target="_blank"
          className="bg-gray-800 rounded-full p-4 hover:bg-cyan-800 transition duration-200 "
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
