interface InfoPage {
  title: string;
}

type Page = 'init' | 'about' | 'contact';

const nav: Record<Page, InfoPage> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  init: { title: 'init' },
};

/**
 nav: {
    about: { title: 'about' },
    contact: { title: 'contact' },
    init: { title: 'init' }
  }
 */
