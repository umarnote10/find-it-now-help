import { ItemType } from "@/types";
import { mockImages } from "./mockImages";

export const MOCK_ITEMS_PAKISTAN: ItemType[] = [
  {
    id: "1",
    title: "Mobile Phone Gum Gaya",
    description: "Mera iPhone 14 Pro Max silver color ka mobile phone Metro station k pass gum ho gaya hai. Koi mile to please contact karen.",
    status: "lost",
    location: "Centaurus Mall, Jinnah Avenue",
    city: "Islamabad",
    reward_note: "Rs. 10,000 Inaam",
    whatsapp_number: "+923001234567",
    images: [mockImages.phones[0]],
    created_at: new Date(Date.now() - 86400000 * 1.2).toISOString(),
    user_id: "user1",
    user_name: "Ahmed Hassan",
    user_profile_image: "https://i.pravatar.cc/150?img=12",
    latitude: 33.7067,
    longitude: 73.0497,
    language: "ur"
  },
  {
    id: "2",
    title: "Lost Gold Bracelet at Liberty Market",
    description: "I lost my gold bracelet while shopping at Liberty Market. It has sentimental value as it was a gift from my mother.",
    status: "lost",
    location: "Liberty Market",
    city: "Lahore",
    reward_note: "Rs. 5,000 reward for safe return",
    whatsapp_number: "+923214567890",
    images: [mockImages.jewelry[0]],
    created_at: new Date(Date.now() - 86400000 * 0.5).toISOString(),
    user_id: "user2",
    user_name: "Fatima Khan",
    user_profile_image: "https://i.pravatar.cc/150?img=5",
    latitude: 31.4718,
    longitude: 74.3434,
    language: "en"
  },
  {
    id: "3",
    title: "Lost Car Keys with Pakistan Flag Keychain",
    description: "Lost my car keys at Dolmen Mall Clifton. The keychain has a small Pakistan flag. Also has my house keys and a USB drive attached. Urgently needed.",
    status: "lost",
    location: "Dolmen Mall, Clifton",
    city: "Karachi",
    latitude: 24.8261,
    longitude: 67.0339,
    whatsapp_number: "+923123456789",
    images: [mockImages.keys[0]],
    created_at: new Date(Date.now() - 86400000 * 0.7).toISOString(),
    user_id: "user3",
    user_name: "Zafar Iqbal",
    user_profile_image: "https://i.pravatar.cc/150?img=32",
    language: "en"
  },
  {
    id: "4",
    title: "Found Designer Sunglasses at Pearl Continental Hotel",
    description: "I found a pair of designer sunglasses in the lobby of Pearl Continental Hotel. They appear to be authentic Ray-Bans with prescription lenses. Please contact me with description to claim.",
    status: "found",
    location: "Pearl Continental Hotel",
    city: "Peshawar",
    whatsapp_number: "+923339876543",
    images: ["https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800"],
    created_at: new Date(Date.now() - 86400000 * 1.5).toISOString(),
    user_id: "user4",
    user_name: "Ayesha Malik",
    user_profile_image: "https://i.pravatar.cc/150?img=23",
    latitude: 34.0137,
    longitude: 71.5467,
    language: "en"
  },
  {
    id: "5",
    title: "Found Samsung Galaxy S22 at Saddar Market",
    description: "I found a Samsung Galaxy S22 phone near Saddar Market. The phone has a blue case and appears to be in good condition. Please provide lock screen pattern or password to verify ownership.",
    status: "found",
    location: "Saddar Market, near main entrance",
    city: "Rawalpindi",
    latitude: 33.6033,
    longitude: 73.0691,
    images: [mockImages.phones[2]],
    created_at: new Date(Date.now() - 86400000 * 0.2).toISOString(),
    user_id: "user5",
    user_name: "Muhammad Ali",
    user_profile_image: "https://i.pravatar.cc/150?img=11",
    language: "en"
  },
  {
    id: "6",
    title: "Found Persian Cat with Blue Collar",
    description: "Found a beautiful Persian cat with blue collar near Jinnah Park. The cat is very friendly and well-groomed. Appears to be someone's pet. Currently keeping it safe at my home. Contact for details.",
    status: "found",
    location: "Jinnah Park",
    city: "Rawalpindi",
    whatsapp_number: "+923338765432",
    images: [mockImages.pets[0]],
    created_at: new Date(Date.now() - 86400000 * 0.3).toISOString(),
    user_id: "user6",
    user_name: "Sana Nawaz",
    user_profile_image: "https://i.pravatar.cc/150?img=25",
    latitude: 33.642250,
    longitude: 73.075730,
    language: "en"
  },
  {
    id: "7",
    title: "Lost Gold Ring with Emerald Stone",
    description: "Lost my gold ring with an emerald stone at Bahria Town Phase 7. It has been in our family for generations. Very high sentimental value. Please contact if found.",
    status: "lost",
    location: "Bahria Town, Phase 7",
    city: "Islamabad",
    whatsapp_number: "+923451234567",
    reward_note: "Rs. 25,000 reward for return",
    images: [mockImages.jewelry[0]],
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    user_id: "user7",
    user_name: "Imran Shah",
    user_profile_image: "https://i.pravatar.cc/150?img=13",
    latitude: 33.5362,
    longitude: 73.0845,
    language: "en"
  },
  {
    id: "8",
    title: "Lost University Bag with Books and Laptop",
    description: "Lost my black Jansport backpack at University of Karachi. It contains my laptop, textbooks, and important notes for exams. Desperately needed, please help!",
    status: "lost",
    location: "University of Karachi, Main Campus",
    city: "Karachi",
    whatsapp_number: "+923159876543",
    reward_note: "Rs. 3,000 reward offered",
    images: [mockImages.bags[0]],
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    user_id: "user8",
    user_name: "Zara Ahmed",
    user_profile_image: "https://i.pravatar.cc/150?img=20",
    latitude: 24.9200,
    longitude: 67.1322,
    language: "en"
  },
  {
    id: "9",
    title: "Found Golden Locket at Minar-e-Pakistan",
    description: "I found a beautiful golden locket near Minar-e-Pakistan. It has some names engraved on it that appear to be family members. Would like to return to the rightful owner.",
    status: "found",
    location: "Minar-e-Pakistan",
    city: "Lahore",
    whatsapp_number: "+923012345678",
    images: [mockImages.jewelry[1]],
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
    user_id: "user9",
    user_name: "Omar Farooq",
    user_profile_image: "https://i.pravatar.cc/150?img=15",
    latitude: 31.5925,
    longitude: 74.3095,
    language: "en"
  },
  {
    id: "10",
    title: "Found MacBook Pro at Chaklala Railway Station",
    description: "Found a MacBook Pro laptop in a black case at Chaklala Railway Station. It was left on a bench. If you can unlock it or provide other proof of ownership, I'll return it immediately.",
    status: "found",
    location: "Chaklala Railway Station",
    city: "Rawalpindi",
    whatsapp_number: "+923145678901",
    images: ["https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=800"],
    created_at: new Date(Date.now() - 86400000 * 2.5).toISOString(),
    user_id: "user10",
    user_name: "Hina Javed",
    user_profile_image: "https://i.pravatar.cc/150?img=29",
    latitude: 33.5651,
    longitude: 73.0780,
    language: "en"
  },
  {
    id: "11",
    title: "Lost Leather Handbag in Fortress Stadium",
    description: "I lost my brown leather handbag at Fortress Stadium shopping area. Contains important documents, cards, and keys. Really need the documents back for an urgent matter.",
    status: "lost",
    location: "Fortress Stadium, Shopping Area",
    city: "Lahore",
    whatsapp_number: "+923339876543",
    reward_note: "Rs. 8,000 reward for return of bag with documents",
    images: [mockImages.bags[1]],
    created_at: new Date(Date.now() - 86400000 * 0.8).toISOString(),
    user_id: "user11",
    user_name: "Asad Mahmood",
    user_profile_image: "https://i.pravatar.cc/150?img=17",
    latitude: 31.5125,
    longitude: 74.3343,
    language: "en"
  },
  {
    id: "12",
    title: "Found ID Card at F-9 Park",
    description: "Found a CNIC at F-9 Park near the main entrance. The name on it is partially visible. Please provide full name and CNIC number to verify ownership.",
    status: "found",
    location: "F-9 Park, Main Entrance",
    city: "Islamabad",
    whatsapp_number: "+923321234567",
    images: ["https://images.pexels.com/photos/6693657/pexels-photo-6693657.jpeg?auto=compress&cs=tinysrgb&w=800"],
    created_at: new Date(Date.now() - 86400000 * 0.4).toISOString(),
    user_id: "user12",
    user_name: "Nadia Hussain",
    user_profile_image: "https://i.pravatar.cc/150?img=24",
    latitude: 33.6992,
    longitude: 73.0198,
    language: "en"
  }
];
