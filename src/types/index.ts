export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  image: string;
  rating: number;
}

export interface BookingForm {
  name: string;
  email: string;
  date: string;
  time: string;
  people: number;
  specialRequest?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
