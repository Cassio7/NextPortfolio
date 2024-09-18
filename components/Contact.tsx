import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div className="flex flex-col gap-4 mb-20">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        You can connect with me on{" "}
        <Link
          href="https://www.linkedin.com/in/alessio-cassieri"
          target="_blank"
          className="text-blue-500"
        >
          Linkedin
        </Link>{" "}
        or email me directly at{" "}
        <Link
          href="mailto:alessio.cassieri@protonmail.com"
          className="text-blue-500"
        >
          alessio.cassieri@protonmail.com
        </Link>
      </p>
    </div>
  );
}

export default Contact;
