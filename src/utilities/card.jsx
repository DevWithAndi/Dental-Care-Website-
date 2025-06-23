import images_1 from "../assets/card_1.png";
import images_2 from "../assets/Vector.png";
import images_3 from "../assets/Vector-1.png";
import profile from "../assets/profile.jpg";
import locationLogo from "../assets/location.svg";
import { MoreClinics, StarRating, ViewDetails } from "./button";
function Card() {
  const clinicData = [
    {
      name: "Dash Modern Clinic",
      address: "Antalya,Turkey",
      images: images_1,
      logo: locationLogo,
      ratings: 4,
      reviewTotal: 20,
    },
    {
      name: "Canon Clinic",
      address: "Antalya,Turkey",
      images: images_2,
      logo: locationLogo,
      ratings: 1,
      reviewTotal: 1000,
    },
    {
      name: "Clinic TR",
      address: "Antalya,Turkey",
      images: images_3,
      logo: locationLogo,
      ratings: 5,
      reviewTotal: 500,
    },
  ];

  return (
    <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-auto px-4 mb-4 ">
      {clinicData.map((clinic, index) => (
        <div
          key={index}
          className="flex flex-col bg-white shadow-sm p-4 rounded-[16px] w-full  gap-4"
        >
          <img src={clinic.images} alt={clinic.name} className="w-full " />
          <h1 className="font-bold text-[24px] truncate mx-3 flex ">
            {clinic.name}
          </h1>
          <span className="flex gap-2  mx-3 items-center ">
            <img src={clinic.logo} alt="location" width={12} height={12} />
            <h1 className="text-gray-600">{clinic.address}</h1>
          </span>
          <span className="flex gap-2 items-center mx-2  ">
            <StarRating value={clinic.ratings} />
            <p className="text-gray-500">{`(${clinic.reviewTotal})`}</p>
          </span>
          <ViewDetails />
        </div>
      ))}
    </div>
  );
}

export function ReviewCard() {
  return (
    <div className="rounded-3xl gap-4  min-h-[50dvh] w-auto  p-4 bg-black flex justify-around flex-col items-center">
      <StarRating value={3} />
      <p className="text-white/90 text-base leading-relaxed font-normal">
        booking my appointment through dental scanner was unbelievable easy, i
        found a top rated clinic in istanbul within minutes, and the whole
        proses felt professional and secure
      </p>
      <div className="flex gap-4 w-full ">
        <img
          src={profile}
          alt="no images"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className=" flex flex-col">
          <p className="font-bold">Murat K.</p>
          <p className="font-bold">School Teacher-istanbul</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
