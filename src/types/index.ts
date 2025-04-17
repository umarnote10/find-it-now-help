
export type UserType = {
  id: string;
  email?: string;
  phone?: string;
  created_at: string;
}

export type ItemStatus = 'lost' | 'found';

export type ItemType = {
  id: string;
  title: string;
  description: string;
  status: ItemStatus;
  location: string;
  city: string;
  latitude?: number;
  longitude?: number;
  reward_note?: string;
  whatsapp_number?: string;
  images: string[];
  created_at: string;
  user_id: string;
}

export type CityOption = {
  value: string;
  label: string;
}
