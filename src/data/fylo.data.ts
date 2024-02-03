const fylo_url = import.meta.env.FYLO;

export interface FyloFeature {
  icon: string;
  title: string;
  description: string;
}

export const Features: FyloFeature[] = [
  {
    icon: `${fylo_url}/icon-access-anywhere.svg`,
    title: 'Access your file from anywhere',
    description: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
  },
  {
    icon: `${fylo_url}/icon-security.svg`,
    title: 'Security you can trust',
    description: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
  },
  {
    icon: `${fylo_url}/icon-collaboration.svg`,
    title: 'Real-time collaboration',
    description: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    icon: `${fylo_url}/icon-any-file.svg`,
    title: 'Store any type of file',
    description: 'Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.',
  },
];

export interface FyloTestimonial {
  author: Author;
  quote: string;
}

export interface Author {
  avatar: string;
  name: string;
  title: string;
}

export const Testimonials: FyloTestimonial[] = [
  {
    author: {
      avatar: `${fylo_url}/profile-1.webp`,
      name: 'Satish Patel',
      title: 'Founder & CEO, Huddle',
    },
    quote: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
  {
    author: {
      avatar: `${fylo_url}/profile-2.webp`,
      name: 'Bruce McKenzie',
      title: 'Founder & CEO, Huddle 2',
    },
    quote: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
  {
    author: {
      avatar: `${fylo_url}/profile-3.webp`,
      name: 'Iva Boyd',
      title: 'Founder & CEO, Huddle 3',
    },
    quote: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
]