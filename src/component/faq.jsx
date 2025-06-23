import React, { useState } from "react";

function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const questions = [
    {
      id: 1,
      question: "What is Dental Scanner",
      answer:
        "Dental Scanner is a platform that helps you find and book dental services with verified clinics.",
    },
    {
      id: 2,
      question: "How do I find cheap clinic with Dental Scanner",
      answer:
        "You can use our search filters to sort by price and find affordable dental services.",
    },
    {
      id: 3,
      question: "Can I use it only in Turkey?",
      answer:
        "Currently our services are primarily available in Turkey, but we're expanding to other regions soon.",
    },
    {
      id: 4,
      question: "Are the Hospitals Verified?",
      answer:
        "Yes, all clinics and hospitals on our platform undergo a strict verification process.",
    },
    {
      id: 5,
      question: "What happens after I book a visit with a clinic",
      answer:
        "You'll receive a confirmation with appointment details, and the clinic will prepare for your visit.",
    },
    {
      id: 6,
      question: "What if the clinic doesn't honor my booking",
      answer:
        "We have a customer support team that will assist you in such cases and help find a solution.",
    },
    {
      id: 7,
      question: "Can I book follow up visits with Dental Scanner",
      answer:
        "Yes, you can schedule follow-up visits directly through our platform.",
    },
    {
      id: 8,
      question: "Is there a refund policy?",
      answer:
        "Our refund policy varies by clinic. Please check the specific clinic's policy before booking.",
    },
    {
      id: 9,
      question: "Does Dental Scanner do normal physician bookings too?",
      answer:
        "Currently we focus on dental services, but we may expand to general physicians in the future.",
    },
    {
      id: 10,
      question: "Any promos?",
      answer:
        "We occasionally run promotions. Check our website or subscribe to our newsletter for updates.",
    },
  ];

  const isActive = (id) => activeId === id;

  return (
    <section className="min-h-screen w-full bg-white flex flex-col justify-center items-center text-black py-12">
      <div className="w-full max-w-6xl flex flex-col justify-center items-center px-4">
        <h2 className="text-4xl m-4 font-bold">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-5 w-full items-start">
          {questions.map((item) => (
            <div
              key={item.id}
              className="border-b-2 border-blue-600 bg-white rounded-lg p-6 shadow-sm "
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(item.id)}
              >
                <p className="font-medium pr-4">{item.question}</p>
                <button
                  className="text-blue-600 font-bold text-xl transition-transform duration-300 flex-shrink-0"
                  style={{
                    transform: isActive(item.id)
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                >
                  ▼
                </button>
              </div>
              {isActive(item.id) && (
                <div className="mt-4 text-gray-600 transition-opacity duration-300 ease-in-out w-fit h-fit ">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
