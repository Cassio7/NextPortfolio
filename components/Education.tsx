import React from "react";

interface EducationItem {
  startDate: string;
  endDate?: string;
  collegeName?: string;
  schoolName?: string;
  address?: string;
  courseName: string;
}

const EducationData: EducationItem[] = [
  {
    startDate: "September 2019",
    endDate: "March 2024",
    collegeName: "University of Perugia",
    courseName: "Bechelor’s degree in Computer Science and Technology",
    address: "Perugia, Italy",
  },
  {
    startDate: "2015",
    endDate: "2019",
    schoolName: "Technical Institute ITTS A.Volta.",
    address: "Perugia, Italy",
    courseName: "Graduated in Computer Science",
  },
];

const Education: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Education</h1>
      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {EducationData.map((item, index) => (
            <li
              key={index}
              className={`mb-10 ms-4 ${
                index === EducationData.length - 1 ? "mb-0" : ""
              }`}
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="hover:bg-neutral-100 dark:hover:bg-gray-800 hover:shadow-lg rounded-lg hover:-translate-y-1 hover:scale-70 duration-300">
                <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                  {item.startDate} - {item.endDate || "Present"}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.courseName} at {item.collegeName || item.schoolName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.address}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Education;
