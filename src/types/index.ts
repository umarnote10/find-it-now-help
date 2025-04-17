
export type UserType = {
  id: string;
  email?: string;
  phone?: string;
  created_at: string;
  name?: string;
  profile_image?: string;
}

export type ItemStatus = 'lost' | 'found';
export type ItemLanguage = 'en' | 'ur';

export type ItemType = {
  id: string;
  title: string;
  description: string;
  status: ItemStatus;
  location: string;
  city: string;
  reward_note?: string;
  whatsapp_number?: string;
  images: string[];
  created_at: string;
  user_id: string;
  user_name?: string;
  user_profile_image?: string;
  language: ItemLanguage;
  latitude?: number;
  longitude?: number;
}

export type CityOption = {
  value: string;
  label: string;
  urdu_label?: string;
}
