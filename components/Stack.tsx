import Image from "next/image"
import css from '../public/logos/css.webp'

const skills = [
  {
    name: 'HTML',
    src: '/logos/html.webp',
  },
  {
    name: 'CSS',
    src: '/logos/css.webp',
  },
  {
    name: 'JavaScript',
    src: '/logos/javascript.webp',
  },
  {
    name: 'React',
    src: '/logos/react.webp',
  },
  {
    name: 'Next.js',
    src: '/logos/next.webp',
  },
  {
    name: 'Node.js',
    src: '/logos/node.webp',
  },
  {
    name: 'Tailwind',
    src: '/logos/tailwind.webp',
  },
  {
    name: 'Git',
    src: '/logos/git.webp',
  },
  {
    name: 'Bootstrap',
    src: '/logos/bootstrap.webp',
  },
  {
    name: 'MongoDB',
    src: '/logos/mongodb.svg',
  },
  {
    name: 'Firebase',
    src: '/logos/firebase.svg',
  },
  {
    name: 'TypeScript',
    src: '/logos/ts-logo.png',
  },
  {
    name: 'Express',
    src: '/logos/express.webp',
  },
  {
    name:'Wordpress',
    src:'/logos/wordpress.svg'
  },
  {
    name:'Python',
    src:'/logos/python.svg'
  },
  {
    name: 'Scrum',
    src: '/logos/scrum.svg',
  }
]

export const Stack = () => {
  return (
    <section className="bg-gray-700 w-full max-h-max ">
      <h3 className="text-center text-3xl py-7 font-bebas">My skills</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 py-4">
         {skills.map((skill) => (
        <div
          key={skill.name}
          className="w-[140px] h-36 sm:w-[180px] sm:h-40 bg-gray-800 rounded-2xl mx-auto hover:scale-105 transition duration-300"
        >
          <Image
            className="m-auto pt-[2.1rem]"
            width={45}
            height={45}
            src={skill.src}
            alt={skill.name}
          />
          <h4 className="text-center py-4">{skill.name}</h4>
        </div>
      ))}
      </div>
     
    </section>
  );
}
