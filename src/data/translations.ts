/**
 * Archeon Studio - Translations
 * 
 * Georgian (ka) is the default language.
 * English (en) is the secondary language.
 * All texts, labels, and buttons are defined here for easy editing.
 */

export type Language = 'ka' | 'en';

export interface Translations {
  nav: {
    home: string;
    portfolio: string;
    services: string;
    about: string;
    team: string;
    contact: string;
    getInTouch: string;
    switchLang: string;
  };
  hero: {
    badge: string;
    headline: string;
    description: string;
    exploreBtn: string;
    contactBtn: string;
    studioLocation: string;
  };
  stats: {
    locationLabel: string;
    locationValue: string;
    focusLabel: string;
    focusValue: string;
    approachLabel: string;
    approachValue: string;
    collabLabel: string;
    collabValue: string;
  };
  featured: {
    sectionNumber: string;
    title: string;
    subtitle: string;
    viewAllProjects: string;
    viewDetails: string;
  };
  services: {
    sectionNumber: string;
    title: string;
    subtitle: string;
    deliverablesTitle: string;
    requestService: string;
    discussScope: string;
  };
  about: {
    sectionNumber: string;
    title: string;
    subtitle: string;
    leadText: string;
    paragraph1: string;
    paragraph2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  team: {
    sectionNumber: string;
    title: string;
    subtitle: string;
    directContact: string;
  };
  contactCTA: {
    headline: string;
    description: string;
    primaryButton: string;
    whatsappButton: string;
  };
  contact: {
    sectionNumber: string;
    title: string;
    subtitle: string;
    reachOutText: string;
    phoneLabel: string;
    phoneBtn: string;
    whatsappLabel: string;
    whatsappBtn: string;
    messengerLabel: string;
    messengerBtn: string;
    emailLabel: string;
    emailBtn: string;
    locationLabel: string;
    hoursLabel: string;
    inquiryHelperTitle: string;
    inquiryHelperSubtitle: string;
    selectProjectType: string;
    projectTypes: {
      residential: string;
      commercial: string;
      interior: string;
      drawings: string;
      measurement: string;
    };
    sendViaWhatsapp: string;
    sendViaEmail: string;
    noteDirect: string;
  };
  projectModal: {
    location: string;
    year: string;
    area: string;
    category: string;
    services: string;
    gallery: string;
    close: string;
    inquireProject: string;
    placeholderNote: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactDirect: string;
    socials: string;
    rights: string;
    staticStudioBadge: string;
  };
}

export const translations: Record<Language, Translations> = {
  ka: {
    nav: {
      home: 'მთავარი',
      portfolio: 'პორტფოლიო',
      services: 'სერვისები',
      about: 'ჩვენს შესახებ',
      team: 'გუნდი',
      contact: 'კონტაქტი',
      getInTouch: 'დაგვიკავშირდით',
      switchLang: 'EN',
    },
    hero: {
      badge: 'არქიტექტურისა და ინტერიერის სტუდია · საქართველო',
      headline: 'ვქმნით სივრცეებს თქვენი იდეების მიხედვით.',
      description: 'Archeon Studio გთავაზობთ არქიტექტურულ პროექტირებას, ინტერიერის დიზაინსა და 3D ვიზუალიზაციას. თქვენი იდეიდან სივრცის დაგეგმვამდე და დეტალურ ნახაზებამდე.',
      exploreBtn: 'იხილეთ სერვისები',
      contactBtn: 'დაგვიკავშირდით',
      studioLocation: 'თბილისი, საქართველო',
    },
    stats: {
      locationLabel: 'მდებარეობა',
      locationValue: 'თბილისი, საქართველო',
      focusLabel: 'საქმიანობა',
      focusValue: 'არქიტექტურა & ინტერიერი',
      approachLabel: 'მიდგომა',
      approachValue: 'ფუნქციური & გააზრებული დიზაინი',
      collabLabel: 'კომუნიკაცია',
      collabValue: 'გამჭვირვალე & პირდაპირი',
    },
    featured: {
      sectionNumber: '01',
      title: 'რჩეული პროექტები',
      subtitle: 'ჩვენი ხედვა და შესრულებული საპროექტო გადაწყვეტები',
      viewAllProjects: 'სრული პორტფოლიო',
      viewDetails: 'დეტალების ნახვა',
    },
    services: {
      sectionNumber: '01',
      title: 'ჩვენი სერვისები',
      subtitle: 'პროფესიული საპროექტო და ტექნიკური მომსახურება',
      deliverablesTitle: 'სამუშაოს შემადგენლობა:',
      requestService: 'კონსულტაციის გავლა',
      discussScope: 'დააზუსტეთ თქვენი პროექტის დეტალები',
    },
    about: {
      sectionNumber: '02',
      title: 'ჩვენს შესახებ',
      subtitle: 'იდეიდან რეალურ სივრცემდე',
      leadText: 'Archeon Studio არის არქიტექტურისა და ინტერიერის დიზაინის სტუდია საქართველოში. ჩვენი მიზანია შევქმნათ სივრცეები, რომლებიც არის არა მხოლოდ ვიზუალურად დახვეწილი, არამედ პირველ რიგში პრაქტიკული, მოსახერხებელი და გამძლე.',
      paragraph1: 'ჩვენი მიდგომა ემყარება გააზრებულ დაგეგმარებას, დეტალებისადმი ყურადღებასა და დამკვეთთან გულწრფელ, მუდმივ კომუნიკაციას. არ ვქმნით ხელოვნურ ილუზიებს — თითოეული გადაწყვეტა ეფუძნება რეალურ ერგონომიკას, სწორად შერჩეულ მასალებსა და ზუსტ ტექნიკურ ნახაზებს.',
      paragraph2: 'იქნება ეს ახალი ბინის ფუნქციური ზონირება, სივრცის ლაზერული აზომვა, სრული სარემონტო ნახაზები თუ ექსტერიერის არქიტექტურა — ჩვენ თანაბარი პასუხისმგებლობით ვუდგებით თითოეულ ეტაპს.',
      pillar1Title: 'გააზრებული დაგეგმარება',
      pillar1Desc: 'ყველა კვადრატული მეტრი გამოიყენება რაციონალურად და ადამიანის ყოველდღიურ საჭიროებებზე მორგებით.',
      pillar2Title: 'ტექნიკური სიზუსტე',
      pillar2Desc: 'მილიმეტრული ლაზერული აზომვები და დეტალური სამუშაო ნახაზები მშენებლებისა და ხელოსნებისთვის.',
      pillar3Title: 'პირდაპირი კომუნიკაცია',
      pillar3Desc: 'გასაგები ეტაპები, პატიოსანი შეფასება და მუდმივი კავშირი პროექტის დაწყებიდან დასრულებამდე.',
    },
    team: {
      sectionNumber: '03',
      title: 'გუნდი',
      subtitle: 'პროფესიონალები, რომლებიც მუშაობენ თქვენს სივრცეზე',
      directContact: 'პირდაპირი კონტაქტი',
    },
    contactCTA: {
      headline: 'მზად ხართ განიხილოთ თქვენი პროექტი?',
      description: 'დაგვიკავშირდით ტელეფონით, WhatsApp-ით, Messenger-ით ან ელფოსტით. სიამოვნებით გაგიწევთ პირველად კონსულტაციას.',
      primaryButton: 'დაგვირეკეთ ახლავე',
      whatsappButton: 'მოგვწერეთ WhatsApp-ზე',
    },
    contact: {
      sectionNumber: '04',
      title: 'კონტაქტი',
      subtitle: 'დაგვიკავშირდით თქვენთვის მოსახერხებელი გზით',
      reachOutText: 'ჩვენ ყოველთვის ღია ვართ ახალი საინტერესო პროექტებისა და პარტნიორობისთვის. აირჩიეთ სასურველი საკომუნიკაციო არხი:',
      phoneLabel: 'ტელეფონი',
      phoneBtn: 'დაგვირეკეთ',
      whatsappLabel: 'WhatsApp',
      whatsappBtn: 'მოგვწერეთ WhatsApp-ზე',
      messengerLabel: 'Facebook Messenger',
      messengerBtn: 'მოგვწერეთ Messenger-ში',
      emailLabel: 'ელფოსტა',
      emailBtn: 'მოგვწერეთ ელფოსტაზე',
      locationLabel: 'მისამართი / ლოკაცია',
      hoursLabel: 'სამუშაო საათები',
      inquiryHelperTitle: 'სწრაფი შეტყობინების შედგენა',
      inquiryHelperSubtitle: 'აირჩიეთ მომსახურება პირდაპირი შეტყობინების გასაგზავნად:',
      selectProjectType: 'პროექტის ტიპი',
      projectTypes: {
        residential: 'ბინის ან სახლის პროექტირება',
        commercial: 'კომერციული ფართი',
        interior: 'ინტერიერის დიზაინი',
        drawings: 'არქიტექტურული ნახაზები',
        measurement: 'ლაზერული აზომვა',
      },
      sendViaWhatsapp: 'გაგზავნა WhatsApp-ში',
      sendViaEmail: 'გაგზავნა ელფოსტაზე',
      noteDirect: 'ყველა ღილაკი იხსნება პირდაპირ თქვენს მოწყობილობაში. არანაირი რთული ფორმა.',
    },
    projectModal: {
      location: 'ლოკაცია',
      year: 'წელი',
      area: 'ფართობი',
      category: 'კატეგორია',
      services: 'შესრულებული სამუშაო',
      gallery: 'პროექტის გალერეა',
      close: 'დახურვა',
      inquireProject: 'მსგავსი პროექტის განხილვა',
      placeholderNote: 'სადემონსტრაციო საპროექტო ნამუშევარი Archeon Studio-ს პორტფოლიოსთვის.',
    },
    footer: {
      tagline: 'იდეიდან რეალურ სივრცემდე · From Concept to Real Space',
      quickLinks: 'ნავიგაცია',
      contactDirect: 'საკონტაქტო ინფორმაცია',
      socials: 'სოციალური ქსელები',
      rights: 'ყველა უფლება დაცულია.',
      staticStudioBadge: 'საქართველო · თბილისი',
    },
  },
  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      services: 'Services',
      about: 'About Us',
      team: 'Team',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
      switchLang: 'KA',
    },
    hero: {
      badge: 'Architecture & Interior Design Studio · Georgia',
      headline: 'Crafting Spaces Shaped by Your Ideas.',
      description: 'Archeon Studio offers architectural planning, interior design, and 3D visualization. From your initial idea to space planning and detailed technical drawings.',
      exploreBtn: 'Explore Services',
      contactBtn: 'Contact Us',
      studioLocation: 'Tbilisi, Georgia',
    },
    stats: {
      locationLabel: 'Location',
      locationValue: 'Tbilisi, Georgia',
      focusLabel: 'Focus',
      focusValue: 'Architecture & Interiors',
      approachLabel: 'Philosophy',
      approachValue: 'Functional & Thoughtful Design',
      collabLabel: 'Dialogue',
      collabValue: 'Transparent & Direct',
    },
    featured: {
      sectionNumber: '01',
      title: 'Selected Projects',
      subtitle: 'Our architectural perspective and executed design solutions',
      viewAllProjects: 'View All Projects',
      viewDetails: 'View Project Details',
    },
    services: {
      sectionNumber: '01',
      title: 'Our Services',
      subtitle: 'Professional architectural, technical, and spatial planning services',
      deliverablesTitle: 'Key Deliverables:',
      requestService: 'Book a Consultation',
      discussScope: 'Discuss your project scope with us',
    },
    about: {
      sectionNumber: '02',
      title: 'About Archeon Studio',
      subtitle: 'From Concept to Real Space',
      leadText: 'Archeon Studio is an architecture and interior design practice based in Georgia. Our aim is to build spaces that are not merely visually poised, but fundamentally practical, comfortable, and built to endure.',
      paragraph1: 'Our practice is rooted in rational space planning, deep attention to detail, and open, unpretentious dialogue with each client. We avoid artificial claims — every detail we draw is grounded in actual ergonomics, carefully chosen physical materials, and exact technical linework.',
      paragraph2: 'Whether you require functional apartment layout modifications, millimeter-accurate laser surveying, a complete set of working construction blueprints, or bespoke architectural design — we approach each stage with complete dedication.',
      pillar1Title: 'Thoughtful Space Planning',
      pillar1Desc: 'Every square meter is allocated with purpose and tailored to real daily habits and movement flows.',
      pillar2Title: 'Technical Precision',
      pillar2Desc: 'Laser on-site measurement and comprehensive technical working drawings for contractors and builders.',
      pillar3Title: 'Clear, Direct Dialogue',
      pillar3Desc: 'Transparent project milestones, realistic timelines, and active communication from day one.',
    },
    team: {
      sectionNumber: '03',
      title: 'Our Team',
      subtitle: 'The professionals shaping your spatial vision',
      directContact: 'Direct Contact',
    },
    contactCTA: {
      headline: 'Ready to Discuss Your Project?',
      description: 'Reach out by phone, WhatsApp, Messenger, or email. We will gladly discuss your ideas and provide an initial consultation.',
      primaryButton: 'Call Us Now',
      whatsappButton: 'Message on WhatsApp',
    },
    contact: {
      sectionNumber: '04',
      title: 'Contact',
      subtitle: 'Reach us via your preferred direct channel',
      reachOutText: 'We welcome inquiries for new residential and commercial collaborations. Choose the direct link that suits you best:',
      phoneLabel: 'Phone',
      phoneBtn: 'Call Us',
      whatsappLabel: 'WhatsApp',
      whatsappBtn: 'WhatsApp',
      messengerLabel: 'Facebook Messenger',
      messengerBtn: 'Messenger',
      emailLabel: 'Email',
      emailBtn: 'Email Us',
      locationLabel: 'Studio Location',
      hoursLabel: 'Working Hours',
      inquiryHelperTitle: 'Quick Inquiry Helper',
      inquiryHelperSubtitle: 'Choose your project type for a prepared direct message:',
      selectProjectType: 'Project Type',
      projectTypes: {
        residential: 'Residential Architecture / Villa',
        commercial: 'Commercial / Retail Space',
        interior: 'Interior Design & Renovation',
        drawings: 'Technical Blueprints & Plans',
        measurement: 'Laser Space Measurement',
      },
      sendViaWhatsapp: 'Send via WhatsApp',
      sendViaEmail: 'Send via Email',
      noteDirect: 'All contact buttons open directly in your phone or browser apps. No backend or database required.',
    },
    projectModal: {
      location: 'Location',
      year: 'Year',
      area: 'Area',
      category: 'Category',
      services: 'Services Involved',
      gallery: 'Project Gallery',
      close: 'Close',
      inquireProject: 'Inquire About a Similar Project',
      placeholderNote: 'Portfolio showcase design concept for Archeon Studio.',
    },
    footer: {
      tagline: 'From Concept to Real Space · იდეიდან რეალურ სივრცემდე',
      quickLinks: 'Navigation',
      contactDirect: 'Contact Details',
      socials: 'Social Links',
      rights: 'All rights reserved.',
      staticStudioBadge: 'Georgia · Tbilisi',
    },
  },
};
