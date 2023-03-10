import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl?:string;
  id?: string;
}

export const Card: FC<ProjectsProps> = ({
  title,
  description,
  githubUrl,
  image,
  demoUrl,
}) => {
  const [togle, setTogle] = useState(false);

  function handleClick() {
    setTogle(!togle);
  }

  return (
    <li className="max-w-lg border border-gray-200 rounded-lg shadow-lg bg-gray-800 border-gray-700 mx-auto  hover:brightness-125 transition duration-200 ">
      <Link href={githubUrl} legacyBehavior>
        <a target="_blank" rel="noreferrer">
          <Image
            className="cursor-pointer w-full h-56 object-fill rounded-t-lg"
            src={image}
            alt={title}
            width={300}
            height={500}
          />
        </a>
      </Link>

      <div className="p-5 flex flex-col gap-2 align-middle">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
          {togle ? description : description.substring(0, 53)}
          <span
            className="cursor-pointer hover:text-cyan-500 transition duration-200"
            onClick={handleClick}
          >
            {togle ? "" : "..."}
          </span>
        </p>
        <div
          className={`flex ${demoUrl ? "justify-between" : "justify-center"}`}
        >
          <Link href={githubUrl} legacyBehavior>
            <a
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Code
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </Link>
          {demoUrl ? (
            <Link href={demoUrl} legacyBehavior>
              <a
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Demo
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </li>
  );
};
