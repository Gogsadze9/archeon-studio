/**
 * Archeon Studio - Portfolio Projects
 * 
 * You can edit, add, or replace projects and image paths here.
 * As noted in the studio guidelines, initial projects are representative
 * design concepts and portfolio showcase items to illustrate our work capabilities.
 */

export type ProjectCategory = 
  | 'all'
  | 'residential' 
  | 'commercial' 
  | 'interior' 
  | 'drawings' 
  | 'visualization';

export interface ProjectItem {
  id: string;
  slug: string;
  title: {
    en: string;
    ka: string;
  };
  category: ProjectCategory;
  categoryLabel: {
    en: string;
    ka: string;
  };
  location: {
    en: string;
    ka: string;
  };
  year: string;
  area: string;
  shortDescription: {
    en: string;
    ka: string;
  };
  fullDescription: {
    en: string;
    ka: string;
  };
  services: {
    en: string[];
    ka: string[];
  };
  primaryImage: string;
  galleryImages: string[];
  featuredOnHome?: boolean;
}

export const portfolioCategories: { id: ProjectCategory; label: { en: string; ka: string } }[] = [
  { id: 'all', label: { en: 'All Projects', ka: 'ყველა პროექტი' } },
  { id: 'residential', label: { en: 'Residential', ka: 'საცხოვრებელი' } },
  { id: 'commercial', label: { en: 'Commercial', ka: 'კომერციული' } },
  { id: 'interior', label: { en: 'Interior Design', ka: 'ინტერიერის დიზაინი' } },
  { id: 'drawings', label: { en: 'Architectural Drawings', ka: 'არქიტექტურული ნახაზები' } },
  { id: 'visualization', label: { en: '3D Visualization', ka: '3D ვიზუალიზაცია' } },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'villa-monolith',
    slug: 'contemporary-monolith-residence',
    title: {
      en: 'Tskneti Stone Villa',
      ka: 'წყნეთის ქვის ვილა',
    },
    category: 'residential',
    categoryLabel: {
      en: 'Residential Architecture',
      ka: 'საცხოვრებელი არქიტექტურა',
    },
    location: {
      en: 'Tskneti, Georgia',
      ka: 'წყნეთი, საქართველო',
    },
    year: '2025',
    area: '380 m²',
    shortDescription: {
      en: 'A contemporary private residence blending local stone masonry with clean cantilevered volumes and landscape integration.',
      ka: 'თანამედროვე კერძო საცხოვრებელი სახლი, რომელიც აერთიანებს ბუნებრივ ქვას, მინიმალისტურ მოცულობებსა და ლანდშაფტს.',
    },
    fullDescription: {
      en: 'Designed with deep respect for natural topography, the villa balances robust stone walls with floor-to-ceiling glass openings. The layout prioritizes privacy toward the access road while opening expansively toward the valley views and water terrace.',
      ka: 'პროექტი შექმნილია ბუნებრივი რელიეფის გათვალისწინებით. ქვის მონოლითური კედლები და ვიტრაჟული მინა ჰარმონიულად ერწყმის ერთმანეთს, ქმნის სიმყუდროვისა და გახსნილობის იდეალურ ბალანსს.',
    },
    services: {
      en: ['Architectural Design', 'Laser Measurement', '3D Visualization', 'Exterior Detailing'],
      ka: ['არქიტექტურული პროექტირება', 'ლაზერული აზომვა', '3D ვიზუალიზაცია', 'ექსტერიერის დეტალიზაცია'],
    },
    primaryImage: '/assets/aistudio/images/hero_penthouse_minimalist_daylight_1792415040750.jpg',
    galleryImages: [
      '/assets/aistudio/images/hero_penthouse_minimalist_daylight_1792415040750.jpg',
      '/assets/aistudio/images/hero_architecture_exterior_1792413464824.jpg',
      '/assets/aistudio/images/interior_living_travertine_1792413465592.jpg',
      '/assets/aistudio/images/architectural_drawings_technical_1792413466221.jpg',
    ],
    featuredOnHome: true,
  },
  {
    id: 'vake-travertine',
    slug: 'vake-travertine-interior',
    title: {
      en: 'Vake Travertine Residence',
      ka: 'ვაკის ტრავერტინის რეზიდენცია',
    },
    category: 'interior',
    categoryLabel: {
      en: 'Interior Design',
      ka: 'ინტერიერის დიზაინი',
    },
    location: {
      en: 'Vake, Tbilisi',
      ka: 'ვაკე, თბილისი',
    },
    year: '2025',
    area: '165 m²',
    shortDescription: {
      en: 'Quiet luxury and warm minimalism defined by honed travertine walls, natural oak floors, and indirect architectural illumination.',
      ka: 'მშვიდი ლაკონიური ესთეტიკა, დამუშავებული ტრავერტინის ფაქტურა, მუხის ხე და არაპირდაპირი თბილი განათება.',
    },
    fullDescription: {
      en: 'An interior transformation focused on acoustic calmness and textural honesty. Custom millwork seamlessly integrates storage, allowing the tactile qualities of stone, wood, and linen to take center stage.',
      ka: 'ინტერიერის კონცეფცია ორიენტირებულია სიმყუდროვესა და მასალების ბუნებრივ ხასიათზე. ინდივიდუალური ავეჯის დეტალები სრულად იმალება კედლებში და სივრცეს ანიჭებს სისუფთავეს.',
    },
    services: {
      en: ['Apartment Layout Planning', 'Interior Design', 'Lighting Design', 'Material Selection'],
      ka: ['ბინის დაგეგმარება', 'ინტერიერის დიზაინი', 'განათების პროექტი', 'მასალების შერჩევა'],
    },
    primaryImage: '/assets/aistudio/images/interior_living_travertine_1792413465592.jpg',
    galleryImages: [
      '/assets/aistudio/images/interior_living_travertine_1792413465592.jpg',
      '/assets/aistudio/images/project_minimalist_kitchen_1792413484922.jpg',
      '/assets/aistudio/images/architectural_drawings_technical_1792413466221.jpg',
    ],
    featuredOnHome: true,
  },
  {
    id: 'saburtalo-layout-drawings',
    slug: 'saburtalo-layout-blueprints',
    title: {
      en: 'Apartment Technical Documentation & Survey',
      ka: 'ბინის ტექნიკური დოკუმენტაცია და აზომვა',
    },
    category: 'drawings',
    categoryLabel: {
      en: 'Architectural Drawings & Measurement',
      ka: 'აზომვა და სამუშაო ნახაზები',
    },
    location: {
      en: 'Saburtalo, Tbilisi',
      ka: 'საბურთალო, თბილისი',
    },
    year: '2024',
    area: '124 m²',
    shortDescription: {
      en: 'Full technical blueprints package and laser existing-condition floor plans prepared for renovation masters and electrical/plumbing execution.',
      ka: 'სრული სამუშაო ნახაზების პაკეტი და ლაზერული აზომვითი გეგმა ხელოსნებისთვის: ელექტროობა, სანტექნიკა და ტიხრები.',
    },
    fullDescription: {
      en: 'Comprehensive construction drawings delivering exact specifications for demolition, partition rebuilding, electrical socket distributions, switch loops, sanitary piping, and tile setting elevations with millimeter accuracy.',
      ka: 'სრული ტექნიკური დოკუმენტაცია მშენებლობისთვის: დემონტაჟისა და მონტაჟის გეგმები, ელექტრო წერტილების სიმაღლეები, სანტექნიკის კვანძები და ფილების გაშლის ნახაზები.',
    },
    services: {
      en: ['Laser Measurement', 'Existing Conditions Plan', 'Demolition & Partition Plans', 'Electrical & Plumbing Layouts'],
      ka: ['ლაზერული აზომვა', 'აზომვითი გეგმა', 'ტიხრების გეგმა', 'ელექტროობისა და სანტექნიკის ნახაზები'],
    },
    primaryImage: '/assets/aistudio/images/architectural_drawings_technical_1792413466221.jpg',
    galleryImages: [
      '/assets/aistudio/images/architectural_drawings_technical_1792413466221.jpg',
      '/assets/aistudio/images/project_minimalist_kitchen_1792413484922.jpg',
    ],
    featuredOnHome: true,
  },
  {
    id: 'chavchavadze-commercial',
    slug: 'chavchavadze-boutique-space',
    title: {
      en: 'Chavchavadze Concept Showroom',
      ka: 'ჭავჭავაძის კონცეპტუალური შოურუმი',
    },
    category: 'commercial',
    categoryLabel: {
      en: 'Commercial Interior',
      ka: 'კომერციული ინტერიერი',
    },
    location: {
      en: 'Vake, Tbilisi',
      ka: 'ვაკე, თბილისი',
    },
    year: '2024',
    area: '210 m²',
    shortDescription: {
      en: 'Microcement curved walls, terrazzo flooring, and custom stainless steel displays designed for an understated contemporary retail experience.',
      ka: 'მომრგვალებული მიკროცემენტის კედლები, ტერაცოს იატაკი და მეტალის ელემენტები თანამედროვე კომერციული სივრცისთვის.',
    },
    fullDescription: {
      en: 'A commercial layout created to celebrate spatial fluidity. The design directs client circulation through gentle curved partitions, combining soft recessed cove illumination with custom brushed steel and walnut display units.',
      ka: 'კომერციული სივრცის პროექტირება, სადაც მომხმარებლის გადაადგილება დაგეგმილია რბილი ხაზებით. ტერაცოსა და მიკროცემენტის შერწყმა სივრცეს ანიჭებს ხარისხისა და სიმსუბუქის შეგრძნებას.',
    },
    services: {
      en: ['Commercial Layout', 'Interior Design', 'Lighting Calculation', 'Bespoke Retail Furniture'],
      ka: ['კომერციული დაგეგმარება', 'ინტერიერის დიზაინი', 'განათების გათვლა', 'სავაჭრო ავეჯის პროექტირება'],
    },
    primaryImage: '/assets/aistudio/images/commercial_boutique_interior_1792413467127.jpg',
    galleryImages: [
      '/assets/aistudio/images/commercial_boutique_interior_1792413467127.jpg',
      '/assets/aistudio/images/interior_living_travertine_1792413465592.jpg',
    ],
    featuredOnHome: true,
  },
  {
    id: 'bagebi-cliffside',
    slug: 'bagebi-cliffside-villa',
    title: {
      en: 'Bagebi Panoramic Residence',
      ka: 'ბაგების პანორამული რეზიდენცია',
    },
    category: 'visualization',
    categoryLabel: {
      en: '3D Architectural Visualization',
      ka: '3D არქიტექტურული ვიზუალიზაცია',
    },
    location: {
      en: 'Bagebi, Tbilisi',
      ka: 'ბაგები, თბილისი',
    },
    year: '2025',
    area: '420 m²',
    shortDescription: {
      en: 'Terraced stone architectural concept and photorealistic dusk 3D visualizations showcasing natural stone masonry and cantilevered glass decks.',
      ka: 'ტერასული ქვის არქიტექტურული კონცეფცია და საღამოს ფოტორეალისტური 3D რენდერები პანორამული ხედებით.',
    },
    fullDescription: {
      en: 'Created as a visual and volumetric study of hillside architecture. The multi-tiered terraces descend with the cliff, providing expansive outdoor viewing platforms sheltered by overhangs and indigenous landscaping.',
      ka: 'ფერდობის არქიტექტურული კვლევა და ვიზუალური პრეზენტაცია. მრავალდონიანი ტერასები ბუნებრივად მიჰყვება რელიეფს, რაც უზრუნველყოფს მაქსიმალურ პანორამულ ხედებს.',
    },
    services: {
      en: ['Architectural Concept', '3D Exterior Visualization', 'Landscape Concept', 'Atmospheric Lighting Studies'],
      ka: ['არქიტექტურული კონცეფცია', '3D ექსტერიერის ვიზუალიზაცია', 'ლანდშაფტის იდეა', 'განათების კვლევა'],
    },
    primaryImage: '/assets/aistudio/images/project_cliffside_villa_1792413485642.jpg',
    galleryImages: [
      '/assets/aistudio/images/project_cliffside_villa_1792413485642.jpg',
      '/assets/aistudio/images/hero_architecture_exterior_1792413464824.jpg',
    ],
    featuredOnHome: false,
  },
  {
    id: 'vera-kitchen-interior',
    slug: 'vera-minimalist-kitchen',
    title: {
      en: 'Vera Apartment Kitchen & Dining',
      ka: 'ვერის ბინის სამზარეულო და სასადილო',
    },
    category: 'interior',
    categoryLabel: {
      en: 'Space Planning & Interior',
      ka: 'დაგეგმარება და ინტერიერი',
    },
    location: {
      en: 'Vera, Tbilisi',
      ka: 'ვერა, თბილისი',
    },
    year: '2025',
    area: '88 m²',
    shortDescription: {
      en: 'Fluted dark oak cabinetry, travertine monolithic island, and exposed timber beams creating a balanced organic culinary center.',
      ka: 'დამუშავებული მუქი მუხის ფასადები, ტრავერტინის კუნძული და ხის კოჭები ორგანული და ფუნქციური გარემოსთვის.',
    },
    fullDescription: {
      en: 'A kitchen and dining space reconfiguration focused on social cooking and abundant natural morning light. The monolith travertine island anchors the open layout, while concealed appliances maintain a serene architectural presence.',
      ka: 'სამზარეულოსა და სასადილოს ხელახალი დაგეგმარება, რომელიც ორიენტირებულია კომფორტულ ყოველდღიურობასა და ბუნებრივ განათებაზე. ჩაშენებული ტექნიკა ინარჩუნებს სივრცის მინიმალისტურ სიმშვიდეს.',
    },
    services: {
      en: ['Space Planning', 'Kitchen Ergonomics', 'Cabinetry Production Drawings', 'Material Specifications'],
      ka: ['სივრცის დაგეგმარება', 'სამზარეულოს ერგონომიკა', 'ავეჯის საწარმოო ნახაზები', 'მასალების სპეციფიკაცია'],
    },
    primaryImage: '/assets/aistudio/images/project_minimalist_kitchen_1792413484922.jpg',
    galleryImages: [
      '/assets/aistudio/images/project_minimalist_kitchen_1792413484922.jpg',
      '/assets/aistudio/images/interior_living_travertine_1792413465592.jpg',
    ],
    featuredOnHome: false,
  },
];
