const bookmarkUrl = import.meta.env.BOOKMARK;

export interface Feature {
  content: FeatureContent;
  icon: string;
  name: string;
}

export interface FeatureContent {
  description: string;
  image: string;
  link: string;
  title: string;
}

export const features: Feature[] = [
  {
    name: 'Simple Bookmarking',
    icon: 'icon-bookmark',
    content: {
      title: 'Bookmark in one click',
      description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
      image: `${bookmarkUrl}/illustration-features-tab-1.svg`,
      link: '#'
    }
  },
  {
    name: 'Speedy Searching',
    icon: 'icon-search',
    content: {
      title: 'Intelligent search',
      description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
      image: `${bookmarkUrl}/illustration-features-tab-2.svg`,
      link: '#'
    }
  },
  {
    name: 'Easy Sharing',
    icon: 'icon-share',
    content: {
      title: 'Share your bookmarks',
      description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      image: `${bookmarkUrl}/illustration-features-tab-3.svg`,
      link: '#'
    }
  }
]

