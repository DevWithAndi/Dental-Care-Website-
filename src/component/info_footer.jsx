import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logos from "../assets/logo_blue.svg";
import facebook from "../assets/fb-logo.svg";
import instagram from "../assets/ig_logo.svg";
import x from "../assets/twitter_logo.svg";
import youtube from "../assets/youtube_logo.svg";
function Footers() {
  const icons = [
    {
      name: "facebook",
      logo: facebook,
      link: "https://www.facebook.com/?locale=id_ID",
    },

    {
      name: "X",
      logo: x,
      link: "https://x.com/",
    },

    {
      name: "instagram",
      logo: instagram,
      link: "https://www.instagram.com/",
    },

    {
      name: "Youtube",
      logo: youtube,
      link: "https://www.youtube.com/",
    },
  ];

  return (
    <footer className="w-full min-h-[100dvh] bg-white justify-center items-center flex-col md:flex-row flex">
      <div className="w-full flex-col md:flex-row md:max-w-6xl flex justify-center items-center  p-4 gap-4 ">
        {/* Intro Brand */}
        <div className="w-fit flex  items-center flex-col gap-9">
          <div className="flex text-center justify-center items-center self-start  gap-2 ">
            <img
              src={logos}
              alt="no logos"
              width={60}
              height={60}
              className=""
            />
            <p className="font-bold text-2xl text-[#1170B2]">Dental Scanner</p>
          </div>
          <p className="leading-relaxed text-balance font-normal text-sm  mr-4 text-[#6F6C90]">
            Connecting you with top dental clinic in Turkey for world-class care
            and beautiful smile
          </p>
          <div className="flex gap-4 self-start">
            {icons.map((icons) => (
              <a href={icons.link} key={icons.name}>
                <img src={icons.logo} alt={icons.name} width={48} height={48} />
              </a>
            ))}
          </div>
        </div>
        <div className="w-full ">
          <FooterNavigation />
        </div>
      </div>
    </footer>
  );
}

export default Footers;

export function FooterNavigation() {
  const navigatorSection = [
    {
      id: 1,
      name: "Quick Links",
      childName: [
        {
          name: "About Us",
          links: "#about",
        },
        {
          name: "Find a Clinic",
          links: "#find",
        },
        {
          name: "Login",
          links: "#login",
        },
        {
          name: "Register",
          links: "#register",
        },
        {
          name: "How it work",
          links: "#how",
        },
      ],
    },
    {
      id: 2,
      name: "Resources",
      childName: [
        {
          name: "Blog",
          links: "#blog",
        },
        {
          name: "FAQs",
          links: "#faqs",
        },
        {
          name: "Support",
          links: "#support",
        },
        {
          name: "For Clinics",
          links: "#clinics",
        },
      ],
    },
    {
      id: 3,
      name: "Legal",
      childName: [
        {
          name: "Privacy Policy",
          links: "#privacy",
        },
        {
          name: "Terms of Service",
          links: "#terms",
        },
        {
          name: "Cookie Policy",
          links: "#cookies",
        },
      ],
    },
    {
      id: 4,
      name: "Contact us",
      childName: [
        {
          name: "info@dentalscanner.com",
          icon: "mail",
        },
        {
          name: "+256-782-60000",
          icon: "phone",
        },
        {
          name: "Lorem Ipsum",
          icon: "location",
        },
      ],
    },
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "mail":
        return <Mail className="w-4 h-4" />;
      case "phone":
        return <Phone className="w-4 h-4" />;
      case "location":
        return <MapPin className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {navigatorSection.map((section) => (
        <div key={section.id} className="space-y-4">
          <h3 className="text-lg font-semibold text-black">{section.name}</h3>
          <ul className="space-y-3">
            {section.childName.map((item, index) => (
              <li key={index}>
                {section.id === 4 ? (
                  // Contact section with icons
                  <div className="flex items-center space-x-3 text-black/50">
                    {getIcon(item.icon)}
                    <span className="text-sm">{item.name}</span>
                  </div>
                ) : (
                  // Regular navigation links
                  <a
                    href={item.links}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
