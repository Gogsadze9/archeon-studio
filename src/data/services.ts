/**
 * Archeon Studio - Services
 * 
 * Edit services, descriptions, deliverables, and images here.
 */

export interface ServiceItem {
  id: string;
  orderNumber: string;
  title: {
    en: string;
    ka: string;
  };
  subtitle: {
    en: string;
    ka: string;
  };
  description: {
    en: string;
    ka: string;
  };
  keyDeliverables: {
    en: string[];
    ka: string[];
  };
  image: string;
  badge?: {
    en: string;
    ka: string;
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: 'apartment-layout',
    orderNumber: '01',
    title: {
      en: 'Apartment Layout Planning',
      ka: 'ბინის დაგეგმარება და ფუნქციური ზონირება',
    },
    subtitle: {
      en: 'Ergonomic, balanced spaces designed around everyday living',
      ka: 'ერგონომიული და ბალანსირებული სივრცე ყოველდღიური კომფორტისთვის',
    },
    description: {
      en: 'We craft sensible and rational spatial plans that maximize usable square meters, optimize movement flow, and ensure every area of the home feels natural and comfortable.',
      ka: 'ვქმნით რაციონალურ სივრცით გეგმებს, რომლებიც მაქსიმალურად იყენებს ყოველ კვადრატულ მეტრს, უზრუნველყოფს მოძრაობის თავისუფლებასა და ფუნქციურ ჰარმონიას.',
    },
    keyDeliverables: {
      en: [
        'Space planning and layout modifications',
        'Functional room arrangements & zoning',
        'Furniture layout and circulation optimization',
      ],
      ka: [
        'სივრცის დაგეგმარება და გეგმარებითი ცვლილებები',
        'ოთახების ფუნქციური გადანაწილება და ზონირება',
        'ავეჯის განლაგება და ერგონომიული მოძრაობის ოპტიმიზაცია',
      ],
    },
    image: '/assets/aistudio/images/project_minimalist_kitchen_1792413484922.jpg',
  },
  {
    id: 'laser-measurement',
    orderNumber: '02',
    title: {
      en: 'Laser Measurement & Technical Drawings',
      ka: 'ლაზერული აზომვა და ტექნიკური ნახაზები',
    },
    subtitle: {
      en: 'Millimeter-accurate physical baseline for renovation & construction',
      ka: 'მილიმეტრული სიზუსტის საწყისი ბაზა სარემონტო და სამშენებლო სამუშაოებისთვის',
    },
    description: {
      en: 'Accurate on-site laser measurements of existing condition spaces, documenting wall dimensions, column locations, ceiling heights, window openings, and utility inputs with rigorous precision.',
      ka: 'ობიექტის დეტალური ლაზერული აზომვა ადგილზე, კედლების, კოლონების, ჭერის სიმაღლეების, ფანჯრებისა და საკომუნიკაციო წერტილების მაქსიმალური სიზუსტით აღრიცხვა.',
    },
    keyDeliverables: {
      en: [
        'Apartment and commercial space laser measurement',
        'Existing-condition floor plans (as-built plans)',
        'Measurement-based drawings for contractors & masters',
      ],
      ka: [
        'ბინისა და კომერციული ფართის ლაზერული აზომვა',
        'არსებული მდგომარეობის დეტალური ნახაზი (აზომვითი გეგმა)',
        'აზომვაზე დაფუძნებული ტექნიკური ნახაზები ხელოსნებისა და მშენებლებისთვის',
      ],
    },
    image: '/assets/aistudio/images/architectural_drawings_technical_1792413466221.jpg',
  },
  {
    id: 'architectural-drawings',
    orderNumber: '03',
    title: {
      en: 'Architectural Drawings',
      ka: 'არქიტექტურული ნახაზები',
    },
    subtitle: {
      en: 'Clear, comprehensive documentation for flawless execution',
      ka: 'სრული და დეტალური საპროექტო დოკუმენტაცია მშენებლობისთვის',
    },
    description: {
      en: 'Complete technical sets of blueprints, partition plans, flooring schemes, lighting and electrical points, plumbing diagrams, and wall elevations essential for accurate realization.',
      ka: 'სრული ტექნიკური დოკუმენტაცია: ტიხრების მონტაჟი/დემონტაჟი, იატაკის საფარები, განათებისა და ელექტროობის წერტილები, სანტექნიკური ნახაზები და კედლების გაშლები.',
    },
    keyDeliverables: {
      en: [
        'Architectural floor plans & sections',
        'Technical working drawings & construction packages',
        'Project documentation & specifications for implementation',
      ],
      ka: [
        'არქიტექტურული გეგმები, ჭრილები და ფასადები',
        'სამუშაო ტექნიკური ნახაზები მშენებლობისთვის',
        'საპროექტო დოკუმენტაცია და სპეციფიკაციები',
      ],
    },
    image: '/assets/aistudio/images/architectural_drawings_technical_1792413466221.jpg',
  },
  {
    id: 'interior-design',
    orderNumber: '04',
    title: {
      en: 'Interior Design',
      ka: 'ინტერიერის დიზაინი',
    },
    subtitle: {
      en: 'Aesthetic depth, natural materials, and authentic atmosphere',
      ka: 'ესთეტიკა, ბუნებრივი მასალები და ჰარმონიული გარემო',
    },
    description: {
      en: 'Tailored interior design concepts that combine refined aesthetics with practical durability. We select textures, materials, bespoke cabinetry details, and lighting that resonate with your lifestyle.',
      ka: 'ინდივიდუალური ინტერიერის კონცეფცია, რომელიც აერთიანებს დახვეწილ ესთეტიკასა და პრაქტიკულობას. ფაქტურების, მასალების, ავეჯისა და განათების საგულდაგულო შერჩევა.',
    },
    keyDeliverables: {
      en: [
        'Cohesive interior concepts & moodboards',
        'Material, texture, and color palette selection',
        'Custom furniture detailing and lighting planning',
      ],
      ka: [
        'ინტერიერის ერთიანი კონცეფცია და სტილისტური გადაწყვეტა',
        'მასალების, ფაქტურებისა და ფერთა პალიტრის შერჩევა',
        'ინდივიდუალური ავეჯისა და განათების დეტალური პროექტირება',
      ],
    },
    image: '/assets/aistudio/images/interior_living_travertine_1792413465592.jpg',
  },
  {
    id: '3d-visualization',
    orderNumber: '05',
    title: {
      en: '3D Visualization and Rendering',
      ka: '3D ვიზუალიზაცია და რენდერინგი',
    },
    subtitle: {
      en: 'Photorealistic views of your project before work begins',
      ka: 'ფოტორეალისტური ხედვა პროექტის რეალიზაციამდე',
    },
    description: {
      en: 'High-resolution photorealistic 3D renders that reveal true textures, natural lighting, geometry, and atmosphere—giving you total clarity and confidence before any physical work starts.',
      ka: 'მაღალი გარჩევადობის ფოტორეალისტური რენდერები, რომლებიც ზუსტად გადმოსცემს მასალებს, ბუნებრივ სინათლეს, მასშტაბსა და განწყობას სამუშაოების დაწყებამდე.',
    },
    keyDeliverables: {
      en: [
        'Photorealistic interior visualizations from multiple angles',
        'Architectural exterior renders & dusk lighting views',
        'Visual presentations of design concepts & finishes',
      ],
      ka: [
        'ინტერიერის ფოტორეალისტური 3D ვიზუალიზაცია სხვადასხვა კუთხით',
        'არქიტექტურული ექსტერიერის რენდერები დღისა და საღამოს განათებით',
        'დიზაინის კონცეფციისა და მასალების ვიზუალური პრეზენტაცია',
      ],
    },
    image: '/assets/aistudio/images/hero_architecture_exterior_1792413464824.jpg',
  },
];
