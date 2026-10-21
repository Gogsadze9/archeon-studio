/**
 * Archeon Studio - Team Information
 * 
 * You can edit team member names, roles, biographies, and photos here.
 * To replace a photo, place your new image in `/public/assets/aistudio/images/`
 * and update the image path below.
 */

export interface TeamMember {
  id: string;
  name: {
    en: string;
    ka: string;
  };
  role: {
    en: string;
    ka: string;
  };
  bio: {
    en: string;
    ka: string;
  };
  image: string;
  imageClass?: string;
  contactDirect?: {
    email?: string;
    phone?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'elene',
    name: {
      en: 'Elene Makalatia',
      ka: 'ელენე მაკალათია',
    },
    role: {
      en: 'Co-Founder & Lead Architect',
      ka: 'თანადამფუძნებელი & წამყვანი არქიტექტორი',
    },
    bio: {
      en: 'Develops architectural concepts, space planning, aesthetic identity, and technical solutions for residential and commercial environments.',
      ka: 'მუშაობს არქიტექტურულ კონცეფციებზე, სივრცის დაგეგმარებაზე, ესთეტიკურ ხედვასა და ტექნიკურ დეტალებზე.',
    },
    image: '/assets/aistudio/images/team_elene_makalatia.jpg',
    contactDirect: {
      email: 'hello.archeonstudio@gmail.com',
    },
  },
  {
    id: 'giorgi-gogsadze',
    name: {
      en: 'Giorgi Gogsadze',
      ka: 'გიორგი გოგსაძე',
    },
    role: {
      en: 'Co-Founder & CEO',
      ka: 'თანადამფუძნებელი & CEO',
    },
    bio: {
      en: 'Focuses on studio communication, project consultations, and seamless collaboration between clients and our architectural team.',
      ka: 'ხელმძღვანელობს სტუდიის კომუნიკაციას, პროექტის კონსულტაციებსა და დამკვეთთან გამართულ თანამშრომლობას.',
    },
    image: '/assets/aistudio/images/team_giorgi_gogsadze.jpg',
    contactDirect: {
      email: 'hello.archeonstudio@gmail.com',
      phone: '+995 551 31 62 62',
    },
  },
  {
    id: 'ani-garievi',
    name: {
      en: 'Ani Garievi',
      ka: 'ანი გარიევი',
    },
    role: {
      en: 'Architect & Interior Designer',
      ka: 'არქიტექტორი & ინტერიერის დიზაინერი',
    },
    bio: {
      en: 'Specializes in tactile interior concepts, custom millwork, color harmonies, and lighting balance for comfortable everyday living.',
      ka: 'მუშაობს ინტერიერის დეტალურ კონცეფციებზე, ავეჯის ერგონომიკაზე, ფაქტურებსა და განათების ჰარმონიულ ბალანსზე.',
    },
    image: '/assets/aistudio/images/team_ani_garievi.jpg',
    imageClass: 'object-[center_20%] scale-[1.1] origin-top',
    contactDirect: {
      email: 'hello.archeonstudio@gmail.com',
    },
  },
  {
    id: 'sophio-chulukhadze',
    name: {
      en: 'Sophio Chulukhadze',
      ka: 'სოფიო ჭულუხაძე',
    },
    role: {
      en: 'Architect & Interior Designer',
      ka: 'არქიტექტორი & ინტერიერის დიზაინერი',
    },
    bio: {
      en: 'Responsible for millimeter-precise on-site laser measurements, existing-condition floor plans, and comprehensive construction blueprint sets.',
      ka: 'უზრუნველყოფს ობიექტის მილიმეტრულ ლაზერულ აზომვას, აზომვით გეგმებსა და სამშენებლო ტექნიკურ ნახაზებს ხელოსნებისთვის.',
    },
    image: '/assets/aistudio/images/team_sophio_chulukhadze.jpg',
    contactDirect: {
      email: 'hello.archeonstudio@gmail.com',
    },
  },
  {
    id: 'gvantsa-chubinidze',
    name: {
      en: 'Gvantsa Chubinidze',
      ka: 'გვანცა ჩუბინიძე',
    },
    role: {
      en: 'Interior Designer & 3D Visualizer',
      ka: 'ინტერიერის დიზაინერი & 3D ვიზუალიზატორი',
    },
    bio: {
      en: 'Creates high-resolution photorealistic exterior and interior renders, studying light interplay, textures, and spatial volume before physical construction.',
      ka: 'ქმნის მაღალი ხარისხის ფოტორეალისტურ 3D რენდერებს, სინათლისა და მასალების ზუსტ ვიზუალიზაციას მშენებლობის დაწყებამდე.',
    },
    image: '/assets/aistudio/images/team_gvantsa_chubinidze.jpg',
    contactDirect: {
      email: 'hello.archeonstudio@gmail.com',
    },
  },
];
