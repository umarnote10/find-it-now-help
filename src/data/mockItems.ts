
import { ItemType } from "@/types";

export const pakistaniUserNames = [
  { name: "Muhammad Ali", image: "https://i.pravatar.cc/150?img=11" },
  { name: "Fatima Khan", image: "https://i.pravatar.cc/150?img=5" },
  { name: "Ahmed Hassan", image: "https://i.pravatar.cc/150?img=12" },
  { name: "Ayesha Malik", image: "https://i.pravatar.cc/150?img=23" },
  { name: "Zafar Iqbal", image: "https://i.pravatar.cc/150?img=32" },
  { name: "Sana Nawaz", image: "https://i.pravatar.cc/150?img=25" },
  { name: "Imran Shah", image: "https://i.pravatar.cc/150?img=13" },
  { name: "Zara Ahmed", image: "https://i.pravatar.cc/150?img=20" },
  { name: "Omar Farooq", image: "https://i.pravatar.cc/150?img=15" },
  { name: "Hina Javed", image: "https://i.pravatar.cc/150?img=29" },
  { name: "Asad Mahmood", image: "https://i.pravatar.cc/150?img=17" },
  { name: "Nadia Hussain", image: "https://i.pravatar.cc/150?img=24" },
  { name: "Kamran Akmal", image: "https://i.pravatar.cc/150?img=61" },
  { name: "Saima Rashid", image: "https://i.pravatar.cc/150?img=45" },
  { name: "Bilal Ahmad", image: "https://i.pravatar.cc/150?img=53" }
];

export const mockImages = {
  wallets: [
    "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  phones: [
    "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  keys: [
    "https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5613456/pexels-photo-5613456.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  bags: [
    "https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  jewelry: [
    "https://images.pexels.com/photos/10894/pexels-photo-10894.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/9428308/pexels-photo-9428308.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  pets: [
    "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=800"
  ]
};

export const MOCK_ITEMS_PAKISTAN: ItemType[] = [
  {
    id: "1",
    title: "Lost Black Leather Wallet near Centaurus Mall",
    description: "I lost my wallet on Saturday evening near Centaurus Mall in Islamabad. It contains my CNIC, driving license and bank cards. It has sentimental value as it was a gift from my father.",
    status: "lost",
    location: "Centaurus Mall, Jinnah Avenue",
    city: "Islamabad",
    reward_note: "Rs. 5000 reward for safe return",
    whatsapp_number: "+923001234567",
    images: [mockImages.wallets[0]],
    created_at: new Date(Date.now() - 86400000 * 1.2).toISOString(), // ~29 hours ago
    user_id: "user1",
    user_name: "Ahmed Hassan",
    user_profile_image: "https://i.pravatar.cc/150?img=12",
    latitude: 33.7067,
    longitude: 73.0497,
    language: "en"
  },
  {
    id: "2",
    title: "Lost iPhone 14 Pro at Packages Mall",
    description: "I lost my iPhone 14 Pro (black) at the food court in Packages Mall. It has a clear case with my university ID card inside. The phone has important family photos that aren't backed up.",
    status: "lost",
    location: "Packages Mall, Food Court",
    city: "Lahore",
    latitude: 31.4718,
    longitude: 74.3434,
    whatsapp_number: "+923214567890",
    reward_note: "Rs. 10,000 reward, no questions asked",
    images: [mockImages.phones[0], mockImages.phones[1]],
    created_at: new Date(Date.now() - 86400000 * 0.5).toISOString(), // 12 hours ago
    user_id: "user2",
    user_name: "Fatima Khan",
    user_profile_image: "https://i.pravatar.cc/150?img=5",
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
    created_at: new Date(Date.now() - 86400000 * 0.7).toISOString(), // ~17 hours ago
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
    created_at: new Date(Date.now() - 86400000 * 1.5).toISOString(), // 36 hours ago
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
    created_at: new Date(Date.now() - 86400000 * 0.2).toISOString(), // ~5 hours ago
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
    created_at: new Date(Date.now() - 86400000 * 0.3).toISOString(), // ~7 hours ago
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
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
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
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(), // 1 day ago
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
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(), // 3 days ago
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
    created_at: new Date(Date.now() - 86400000 * 2.5).toISOString(), // 2.5 days ago
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
    created_at: new Date(Date.now() - 86400000 * 0.8).toISOString(), // ~19 hours ago
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
    created_at: new Date(Date.now() - 86400000 * 0.4).toISOString(), // ~10 hours ago
    user_id: "user12",
    user_name: "Nadia Hussain",
    user_profile_image: "https://i.pravatar.cc/150?img=24",
    latitude: 33.6992,
    longitude: 73.0198,
    language: "en"
  }
];
