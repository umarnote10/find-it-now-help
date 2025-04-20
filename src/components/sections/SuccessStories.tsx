
import { FC } from "react";
import { Star, CheckCircle2, Quote } from "lucide-react";
import clsx from "clsx";

// Demo data for 8 reviews with mixed English and Roman Urdu
const REVIEWS = [
  {
    name: "Aisha Mahmood",
    city: "Lahore",
    img: "https://i.pravatar.cc/150?img=32",
    text: "I lost my wallet at a restaurant in Lahore. Within 24 hours of posting on Found It, I got a WhatsApp message and recovered it with all my documents intact!",
  },
  {
    name: "Faisal Ahmed",
    city: "Islamabad",
    img: "https://i.pravatar.cc/150?img=15",
    text: "Mera bacha ka school bag park mein kho gaya tha. Found It pe post kiya aur usi din wapas mil gaya. Bohat shukriya Found It team ka!",
  },
  {
    name: "Saima Khan",
    city: "Karachi",
    img: "https://i.pravatar.cc/150?img=23",
    text: "Meri engagement ring shaadi mein kho gayi thi. Found It ki wajah se aik emanadar insaan ne mujhe contact kiya aur ring wapas mil gayi!",
  },
  {
    name: "Omar Farooq",
    city: "Faisalabad",
    img: "https://i.pravatar.cc/150?img=19",
    text: "Bus mein phone bhool gaya tha. Kisi ne Found It pe post kiya aur main apna phone wapas le aaya. Bohat aasan aur mehfooz service hai!",
  },
  {
    name: "Sana Tariq",
    city: "Multan",
    img: "https://i.pravatar.cc/150?img=28",
    text: "Report karne ka process bohat aasan hai. Found It ki madad se mera bag mil gaya. Sab ko recommend karungi yeh platform!",
  },
  {
    name: "Bilal Shah",
    city: "Peshawar",
    img: "https://i.pravatar.cc/150?img=13",
    text: "Aik musafir ka passport wapas karne mein kamyab raha. WhatsApp pe direct contact ka feature bohat acha hai. Professional service!",
  },
  {
    name: "Noor Fatima",
    city: "Quetta",
    img: "https://i.pravatar.cc/150?img=47",
    text: "Airport pe laptop kho gaya tha. Found It community ki madad se mil gaya. Shukriya Found It!",
  },
  {
    name: "Hassan Ali",
    city: "Sialkot",
    img: "https://i.pravatar.cc/150?img=24",
    text: "Gari ki chabian ghanton mein mil gayin. Emanadar aur tez service. Highly recommended!",
  },
];

export const SuccessStories: FC = () => (
  <div className="foundit-container py-12">
    <div className="text-center mb-12">
      <h2 className="section-title">Success Stories</h2>
      <p className="section-subtitle">Hear from people who recovered their lost items</p>
    </div>
    <div className={clsx(
      "w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
      "max-w-7xl mx-auto"
    )}>
      {REVIEWS.map((review, index) => (
        <div
          key={review.name}
          className={clsx(
            "bg-white border border-foundit-primary/20 rounded-2xl shadow-lg",
            "h-full p-6",
            "transition-all duration-300 hover:shadow-xl hover:border-foundit-primary/40",
            "flex flex-col sm:flex-row items-center sm:items-start gap-6"
          )}
        >
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow-sm border border-gray-100">
                <CheckCircle2 className="h-3 w-3 text-foundit-secondary" />
                <span className="text-xs text-gray-500">Verified</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-foundit-primary">{review.name}</span>
              <span className="text-sm text-gray-400 font-medium">• {review.city}</span>
            </div>
            <div className="flex mb-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 text-[#F59E0B] fill-[#F59E0B]" />
              ))}
            </div>
            <blockquote className="relative text-gray-700 text-base italic">
              <Quote className="absolute -left-2 -top-2 h-6 w-6 text-foundit-primary/20" />
              <p className="pl-6">{review.text}</p>
            </blockquote>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SuccessStories;
