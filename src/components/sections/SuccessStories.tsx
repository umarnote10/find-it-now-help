
import { FC } from "react";
import { Star, CheckCircle2, Quote } from "lucide-react";
import clsx from "clsx";

// Demo data for 8 reviews
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
    text: "Found a child's backpack at a park in Islamabad. Posted it on Found It and was able to return it to the relieved parents the same day. This platform is a blessing!",
  },
  {
    name: "Saima Khan",
    city: "Karachi",
    img: "https://i.pravatar.cc/150?img=23",
    text: "I lost my family heirloom ring at a wedding in Karachi. Thanks to Found It, an honest person found it and contacted me directly. I'm forever grateful!",
  },
  {
    name: "Omar Farooq",
    city: "Faisalabad",
    img: "https://i.pravatar.cc/150?img=19",
    text: "Lost my phone on a bus. Someone posted a found item and matched my claim on Found It—easy, secure, and super quick!",
  },
  {
    name: "Sana Tariq",
    city: "Multan",
    img: "https://i.pravatar.cc/150?img=28",
    text: "Report process was simple and efficient. I found my bag through this platform and recommend it to everyone.",
  },
  {
    name: "Bilal Shah",
    city: "Peshawar",
    img: "https://i.pravatar.cc/150?img=13",
    text: "I was able to return a passport to a traveler. Loved the direct WhatsApp contact—very professional!",
  },
  {
    name: "Noor Fatima",
    city: "Quetta",
    img: "https://i.pravatar.cc/150?img=47",
    text: "A laptop lost at the airport returned thanks to Found It community. Thank you!",
  },
  {
    name: "Hassan Ali",
    city: "Sialkot",
    img: "https://i.pravatar.cc/150?img=24",
    text: "Honest, fast, trustworthy. Helped me find my car keys within hours. Best service!",
  },
];

export const SuccessStories: FC = () => (
  <div className="foundit-container">
    <div className="text-center mb-12">
      <h2 className="section-title">Success Stories</h2>
      <p className="section-subtitle">Hear from people who recovered their lost items</p>
    </div>
    <div className={clsx(
      "w-full flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-start"
    )}>
      {[0, 1].map(col =>
        <div
          key={col}
          className={clsx(
            "flex-1 flex flex-col gap-8",
            "w-full",
            "md:max-w-[510px] lg:max-w-[540px]"
          )}
        >
          {REVIEWS.slice(col * 4, (col + 1) * 4).map((review, i) => (
            <div
              key={review.name}
              className="relative rounded-2xl bg-white border border-foundit-primary/30 shadow-lg overflow-hidden transition-all hover:shadow-2xl p-7 flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              <div className="flex-shrink-0 flex flex-col items-center sm:items-start">
                <div className="rounded-full border-4 border-white shadow-lg bg-gradient-to-tr from-[#2140B2] to-[#4C45E0] h-20 w-20 flex overflow-hidden">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="object-cover w-full h-full rounded-full border-2 border-white"
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-foundit-secondary" />
                  <span className="text-xs text-gray-500">Verified</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-foundit-primary">{review.name}</span>
                  <span className="text-sm text-gray-400 font-medium">• {review.city}</span>
                </div>
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, idx) =>
                    <Star key={idx} className="h-4 w-4 text-[#F59E0B] fill-[#F59E0B]" />
                  )}
                </div>
                <blockquote className="relative text-gray-900 text-base italic mb-1 px-0">
                  <span className="absolute -left-5 top-2 text-foundit-primary opacity-60"><Quote className="h-6 w-6" /></span>
                  <span className="ml-4">{review.text}</span>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default SuccessStories;
