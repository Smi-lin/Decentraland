import React, { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(Array(5).fill(false));

  const toggleAccordion = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 mt-[4rem]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[3rem] font-extrabold text-center text-gray-900">
          Frequently Asked Questions
        </h1>
        <div className="mt-12">
          <div className="space-y-8">
            <div className="border-t border-gray-200 pt-8">
              <dl>
                <div className="space-y-8">
                  {[
                    {
                      question: "What is Decentraland?",
                      answer:
                        "Decentraland is a virtual social world, the first decentralized metaverse, and the only one that is open source. Within the Decentraland platform, which can run on a browser or desktop client, users can create, experience, and monetize content and applications as well as socialize and attend a wide range of daily, community-driven events. Decentraland is unique in that it is owned, created, and governed by the people who use it every day.",
                    },
                    {
                      question: "How can I get started with Decentraland?",
                      answer:
                        "To get started, you'll need to create an account on the Decentraland website and download the Decentraland client. Once you've done that, you can explore the virtual world, interact with other users, and create your own experiences.",
                    },
                    {
                      question: "Can I make money in Decentraland?",
                      answer:
                        "Yes, you can monetize your creations in Decentraland by selling virtual goods, offering services, or hosting events.",
                    },
                    {
                      question: "Is Decentraland safe to use?",
                      answer:
                        "Decentraland takes security seriously and employs various measures to protect users' assets and privacy. However, like any online platform, users should exercise caution and follow best practices for online safety.",
                    },
                    {
                      question: "How can I contact Decentraland support?",
                      answer:
                        "For support inquiries, you can reach out to Decentraland's support team through their website or community forums.",
                    },
                  ].map((faq, index) => (
                    <div key={index}>
                      <dt
                        className="text-lg leading-6 font-medium text-gray-900 cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                      >
                        <div className="flex justify-between items-center">
                          <span>{faq.question}</span>
                          <svg
                            className={`ml-2 h-5 w-5 transform ${
                              isOpen[index] ? "rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </dt>
                      {isOpen[index] && (
                        <dd className="mt-2 text-base text-gray-500">
                          {faq.answer}
                        </dd>
                      )}
                    </div>
                  ))}
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
