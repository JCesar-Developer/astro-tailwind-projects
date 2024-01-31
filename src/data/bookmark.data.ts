export interface Feature {
  content: FeatureContent;
  icon: string;
  name: string;
};

export interface FeatureContent {
  description: string;
  image: string;
  link: string;
  title: string;
};

export const features: Feature[] = [
  {
    name: 'Simple Bookmarking',
    icon: '/bookmark/icon-bookmark.svg',
    content: {
      title: 'Bookmark in one click',
      description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
      image: '/bookmark/illustration-features-tab-1.svg',
      link: '#'
    }
  },
  {
    name: 'Speedy Searching',
    icon: '/bookmark/icon-search.svg',
    content: {
      title: 'Intelligent search',
      description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
      image: '/bookmark/illustration-features-tab-2.svg',
      link: '#'
    }
  },
  {
    name: 'Easy Sharing',
    icon: '/bookmark/icon-share.svg',
    content: {
      title: 'Share your bookmarks',
      description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      image: '/bookmark/illustration-features-tab-3.svg',
      link: '#'
    }
  }
];

export interface FAQ {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: 'What is Bookmark?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?'
  },
  {
    question: 'How can I request a new browser?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?'
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?'
  },
  {
    question: 'What about other Chromium browsers?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?.'
  },
];