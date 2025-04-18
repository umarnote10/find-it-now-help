
import { Star } from "lucide-react";
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
      "bg-white rounded-2xl p-6 transition-all duration-300",
      layout === "quote" ? "shadow-sm hover:shadow-md" : "shadow-lg hover:shadow-xl",
      className
    )}>
      {layout === "quote" && (
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-12 h-12">
            <img 
              src={image} 
              alt={name}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{city}</p>
          </div>
        </div>
      )}
      
      {layout === "default" && (
        <div className="flex flex-col items-center mb-6">
          {rating > 0 && (
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-5 w-5",
                    i < rating ? "text-[#7C3AED] fill-[#7C3AED]" : "text-gray-300"
                  )}
                />
              ))}
            </div>
          )}
          <div className="relative w-20 h-20 mb-4">
            <img 
              src={image} 
              alt={name}
              className="rounded-full object-cover w-full h-full border-4 border-white shadow-md"
            />
          </div>
          <h4 className="font-medium text-gray-900 text-lg">{name}</h4>
          <p className="text-sm text-gray-600">{city}</p>
        </div>
      )}

      <blockquote className={cn(
        "text-gray-700",
        layout === "default" ? "text-center" : "text-left"
      )}>
        "{text}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
