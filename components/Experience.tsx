import React from "react";

interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "October 2024",
    endDate: "Currently",
    companyName: "Gruppo Gesenu - GSA",
    jobTitle: "Software Developer - Intern",
    companyLink: "https://gsa.eco/",
    description: [
      "Develop or adapt Software applications based on customer needs, according to specifications defined by the software analyst, making use of appropriate operational design and implementation techniques, managing the different stages of the production process and optimizing efficiency.",
    ],
  },
  {
    startDate: "June 2024",
    endDate: "July 2024",
    companyName: "GreyLine Design",
    jobTitle: "WordPress E-Commerce",
    companyLink: "https://greyline.design/",
    description: [
      "I developed an e-commerce platform using WooCommerce for a local business, enabling them to add, update, modify and sell food products produced in Umbria.",
    ],
  },
  {
    startDate: "May 2024",
    endDate: "June 2024",
    companyName: "GreyLine Design",
    jobTitle: "ClearFake Malware Detection",
    companyLink: "https://greyline.design/",
    description: [
      "A nearby company’s blog was compromised by the ClearFake malware, and the owner’s laptop executed malicious code via PowerShell. ",
      "In response, I removed the malware from their WordPress site, re-established web service and deleted the suspicious files. ",
      "The laptop was thoroughly cleaned, and all of the client’s passwords were changed to prevent future unauthorized access.",
    ],
  },
  {
    startDate: "June 15 2023",
    endDate: "December 31 2023",
    companyName: "WEEDEA srl",
    jobTitle: "Intern",
    companyLink: "https://www.weedea.com/",
    description: [
      "Study, implementation, testing, and comparison of strategies for securing a Web Server, with the creation of a step-by-step manual for building a secure server.",
    ],
  },
  {
    startDate: "May 2018",
    endDate: "June 2018",
    companyName: "INFOTEL SERVICE DIVISION",
    jobTitle: "Intern",
    description: [
      "Developing small projects using Visual Studio with integrated lessons.",
    ],
  },
  {
    startDate: "September 4 2017",
    endDate: "September 24 2017",
    companyName: "Università per Stranieri di Perugia",
    jobTitle: "Intern",
    description: [
      "Updating devices to Windows 10 and installing the Office package.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full ">
      <h1 className="text-2xl font-bold">Work Experience</h1>
      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {workExperienceData.map((item, index) => (
            <li
              key={index}
              className={`mb-10 ms-4 ${
                index === workExperienceData.length - 1 ? "mb-0" : ""
              }`}
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="pb-1 hover:bg-neutral-100 dark:hover:bg-gray-800 hover:shadow-lg rounded-lg hover:-translate-y-1 hover:scale-70 duration-300">
                <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                  {item.startDate} - {item.endDate || "Present"}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.jobTitle} at {item.companyName}
                </h3>
                <div className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
                  <ul>
                    {item.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </div>
                {item.companyLink && (
                  <a
                    href={item.companyLink}
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Link{" "}
                    <svg
                      className="w-3 h-3 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
