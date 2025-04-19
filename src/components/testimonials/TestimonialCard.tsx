
import { Star, MessageSquare, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  city: string;
  image: string;
  text: string;
  rating?: number;
  layout?: "default" | "quote" | "minimal";
  className?: string;
}

const TestimonialCard = ({
  name,
  city,
  image,
  text,
  rating = 5,
  layout = "default",
  className
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "relative overflow-hidden group",
      layout === "quote" ? "p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100" : 
      "bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",
      className
    )}>
      {layout === "quote" && (
        <div className="relative z-10">
          <div className="absolute -right-2 -top-2 text-[#7C3AED]/10">
            <Quote className="w-24 h-24" />
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#7C3AED] rounded-full p-1">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-600">{city}</p>
            </div>
          </div>
          <blockquote className="relative text-gray-700 italic">
            "{text}"
          </blockquote>
        </div>
      )}
      
      {layout === "default" && (
        <>
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9]"></div>
          <div className="relative px-6 pb-6">
            <div className="flex flex-col items-center">
              <div className="relative -mt-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src={image} 
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {rating > 0 && (
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < rating ? "text-[#F59E0B] fill-[#F59E0B]" : "text-gray-300"
                      )}
                    />
                  ))}
                </div>
              )}
              <h4 className="font-semibold text-gray-900 text-lg mb-1">{name}</h4>
              <p className="text-sm text-gray-600 mb-4">{city}</p>
              <blockquote className="text-center text-gray-700 italic text-sm">
                "{text}"
              </blockquote>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TestimonialCard;
