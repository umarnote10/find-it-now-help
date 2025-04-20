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
    created_at: new Date(Date.now() - 86400000 * 1.2).toISOString(),
    user_id: "user1",
    user_name: "Ahmed Hassan",
    user_profile_image: "https://i.pravatar.cc/150?img=12",
    latitude: 33.7067,
    longitude: 73.0497
  },
  {
    id: "2",
    title: "iPhone 14 Pro gum ho gya hai Packages Mall se",
    description: "Packages Mall ke food court se mera iPhone 14 Pro (black color) gum ho gya hai. Clear case mein hai aur case ke andar university card bhi hai. Phone mein family ki important photos hain jo backup nahi hain.",
    status: "lost",
    location: "Packages Mall, Food Court",
    city: "Lahore",
    latitude: 31.4718,
    longitude: 74.3434,
    whatsapp_number: "+923214567890",
    reward_note: "Rs. 10,000 inaam, koi sawal nahi pucha jaye ga",
    images: [mockImages.phones[0], mockImages.phones[1]],
    created_at: new Date(Date.now() - 86400000 * 0.5).toISOString(),
    user_id: "user2",
    user_name: "Fatima Khan",
    user_profile_image: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: "3",
    title: "Found: Golden Ring at Dolmen Mall",
    description: "Dolmen Mall Clifton ke basement parking se aik golden ring mili hai. Ring pe naam engraved hai. Authentic proof ke sath contact karen.",
    status: "found",
    location: "Dolmen Mall, Clifton",
    city: "Karachi",
    latitude: 24.8261,
    longitude: 67.0339,
    whatsapp_number: "+923123456789",
    images: [mockImages.jewelry[0]],
    created_at: new Date(Date.now() - 86400000 * 0.7).toISOString(),
    user_id: "user3",
    user_name: "Zafar Iqbal",
    user_profile_image: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: "4",
    title: "Lost: School Bag - Beaconhouse Margalla",
    description: "Meri beti ka school bag aaj subah Beaconhouse Margalla Campus ke bahar kho gaya hai. Blue color ka hai, lunch box aur water bottle andar hain.",
    status: "lost",
    location: "Beaconhouse School, Margalla Campus",
    city: "Islamabad",
    whatsapp_number: "+923339876543",
    images: [mockImages.bags[0]],
    created_at: new Date(Date.now() - 86400000 * 1.5).toISOString(),
    user_id: "user4",
    user_name: "Ayesha Malik",
    user_profile_image: "https://i.pravatar.cc/150?img=23",
    latitude: 34.0137,
    longitude: 71.5467
  },
  {
    id: "5",
    title: "Found: Persian Cat in Bahria Town",
    description: "Bahria Town Phase 4 se aik Persian cat mili hai. White color ki hai, blue collar pehna hua hai. Bohat friendly hai aur well-groomed hai.",
    status: "found",
    location: "Bahria Town, Phase 4",
    city: "Rawalpindi",
    latitude: 33.6033,
    longitude: 73.0691,
    images: [mockImages.pets[0]],
    created_at: new Date(Date.now() - 86400000 * 0.2).toISOString(),
    user_id: "user5",
    user_name: "Muhammad Ali",
    user_profile_image: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: "6",
    title: "Lost AirPods Pro at Giga Mall",
    description: "Lost my AirPods Pro in white case at Giga Mall food court. Last seen near KFC counter. Please contact if found.",
    status: "lost",
    location: "Giga Mall",
    city: "Islamabad",
    whatsapp_number: "+923338765432",
    reward_note: "Rs. 3,000 reward",
    images: ["https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800"],
    created_at: new Date(Date.now() - 86400000 * 0.3).toISOString(),
    user_id: "user6",
    user_name: "Sana Nawaz",
    user_profile_image: "https://i.pravatar.cc/150?img=25"
  },
  {
    id: "7",
    title: "Peshawar University mein laptop mila hai",
    description: "Computer Science department ke samne aik Dell laptop mila hai. Silver color ka hai. Owner valid proof ke sath contact kare.",
    status: "found",
    location: "University of Peshawar",
    city: "Peshawar",
    whatsapp_number: "+923451234567",
    images: ["https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"],
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    user_id: "user7",
    user_name: "Imran Shah",
    user_profile_image: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: "8",
    title: "Lost: Gold Necklace at Ocean Mall",
    description: "Ocean Mall ki ground floor par meri gold chain gir gayi hai. Chain pe heart pendant laga hua hai. Please contact if someone finds it.",
    status: "lost",
    location: "Ocean Mall",
    city: "Karachi",
    whatsapp_number: "+923159876543",
    reward_note: "Rs. 15,000 reward",
    images: [mockImages.jewelry[1]],
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    user_id: "user8",
    user_name: "Zara Ahmed",
    user_profile_image: "https://i.pravatar.cc/150?img=20"
  },
  {
    id: "9",
    title: "Found: Car Keys at Emporium Mall",
    description: "Emporium Mall ke parking se Toyota ki chabian mili hain. Red keychain ke sath hain. Owner sahi details bata kar le jaye.",
    status: "found",
    location: "Emporium Mall",
    city: "Lahore",
    whatsapp_number: "+923012345678",
    images: [mockImages.keys[0]],
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
    user_id: "user9",
    user_name: "Omar Farooq",
    user_profile_image: "https://i.pravatar.cc/150?img=15"
  },
  {
    id: "10",
    title: "Lost College Bag in Sukkur IBA",
    description: "Mera college bag Sukkur IBA ke library se kho gaya hai. Navy blue color ka hai, HP laptop aur notes hain andar. Please help!",
    status: "lost",
    location: "Sukkur IBA University",
    city: "Sukkur",
    whatsapp_number: "+923145678901",
    reward_note: "Rs. 5,000 inaam",
    images: [mockImages.bags[1]],
    created_at: new Date(Date.now() - 86400000 * 2.5).toISOString(),
    user_id: "user10",
    user_name: "Hina Javed",
    user_profile_image: "https://i.pravatar.cc/150?img=29"
  },
  {
    id: "11",
    title: "Found: Student Card at Gujranwala Railway Station",
    description: "Railway station ke waiting area se aik student card mila hai. University of Gujranwala ka hai. Student details verify kar ke collect kar sakta hai.",
    status: "found",
    location: "Gujranwala Railway Station",
    city: "Gujranwala",
    whatsapp_number: "+923339876543",
    images: ["https://images.pexels.com/photos/6693657/pexels-photo-6693657.jpeg?auto=compress&cs=tinysrgb&w=800"],
    created_at: new Date(Date.now() - 86400000 * 0.8).toISOString(),
    user_id: "user11",
    user_name: "Asad Mahmood",
    user_profile_image: "https://i.pravatar.cc/150?img=17"
  },
  {
    id: "12",
    title: "Lost: Diamond Ring at Pearl Continental",
    description: "PC Hotel Multan ke banquet hall mein engagement ring kho gayi hai. Diamond solitaire hai. Bohat sentimental value hai.",
    status: "lost",
    location: "Pearl Continental Hotel",
    city: "Multan",
    whatsapp_number: "+923321234567",
    reward_note: "Rs. 50,000 reward",
    images: [mockImages.jewelry[0]],
    created_at: new Date(Date.now() - 86400000 * 0.4).toISOString(),
    user_id: "user12",
    user_name: "Nadia Hussain",
    user_profile_image: "https://i.pravatar.cc/150?img=24"
  }
];
