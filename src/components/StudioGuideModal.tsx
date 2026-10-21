import React from 'react';
import { X, HelpCircle, FileText, Image, Users, MessageCircle, Globe, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Language } from '../data/translations';

interface StudioGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export function StudioGuideModal({ isOpen, onClose, lang }: StudioGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-[#faf9f6] rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-stone-700" />
            <h3 className="font-serif-heading text-xl font-medium text-stone-900">
              {lang === 'ka' ? 'Archeon Studio – მართვისა და გამოქვეყნების გზამკვლევი' : 'Archeon Studio – Management & Deployment Guide'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-stone-700 font-light leading-relaxed">
          {/* Section 1: Data Files */}
          <div className="bg-white p-5 rounded-lg border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 font-medium text-stone-900">
              <FileText className="w-4 h-4 text-stone-700" />
              <span>{lang === 'ka' ? '1. როგორ შევცვალოთ კონტენტი (ფაილები)' : '1. How to Edit Content (Simple Local Files)'}</span>
            </div>
            <p>
              {lang === 'ka'
                ? 'საიტი არ საჭიროებს მონაცემთა ბაზას. მთელი ტექსტი და მონაცემები ინახება მარტივ ფაილებში:'
                : 'The site requires NO database or backend. All editable content is organized into clean, typed local files:'}
            </p>
            <ul className="space-y-1.5 list-disc list-inside font-mono text-xs text-stone-600 pl-2">
              <li><strong className="text-stone-900">src/data/siteConfig.ts</strong> – {lang === 'ka' ? 'ტელეფონი, ელფოსტა, Facebook Messenger ლინკი, სამუშაო საათები' : 'Phone, email, Messenger username, working hours'}</li>
              <li><strong className="text-stone-900">src/data/projects.ts</strong> – {lang === 'ka' ? 'პროექტების სახელები, კატეგორიები, ფართობი, აღწერები და ფოტოები' : 'Project titles, categories, areas, descriptions, and photos'}</li>
              <li><strong className="text-stone-900">src/data/team.ts</strong> – {lang === 'ka' ? 'გიორგი გოგსაძისა და ელენეს ბიოგრაფიები, პოზიციები და ფოტოები' : 'Team member names, roles, bios, and portraits'}</li>
              <li><strong className="text-stone-900">src/data/services.ts</strong> – {lang === 'ka' ? 'არქიტექტურული სერვისები და სამუშაოს შემადგენლობა' : 'Architectural services and deliverables'}</li>
              <li><strong className="text-stone-900">src/data/translations.ts</strong> – {lang === 'ka' ? 'ქართული და ინგლისური სრული ტექსტები' : 'All Georgian and English translations'}</li>
            </ul>
          </div>

          {/* Section 2: Replacing Images */}
          <div className="bg-white p-5 rounded-lg border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 font-medium text-stone-900">
              <Image className="w-4 h-4 text-stone-700" />
              <span>{lang === 'ka' ? '2. როგორ შევცვალოთ ფოტოები თქვენი საკუთარით' : '2. How to Replace Images with Your Own Assets'}</span>
            </div>
            <p>
              {lang === 'ka'
                ? 'ჩააგდეთ თქვენი საკუთარი ფოტოები საქაღალდეში `src/assets/images/` ან `public/images/`, შემდეგ `projects.ts` ან `team.ts` ფაილში მიუთითეთ ახალი ფოტოს სახელი.'
                : 'Drop your high-resolution photographs into `src/assets/images/` or `public/images/`. Then update the image file path in `projects.ts` or `team.ts`.'}
            </p>
          </div>

          {/* Section 3: Facebook Messenger Link */}
          <div className="bg-white p-5 rounded-lg border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 font-medium text-stone-900">
              <MessageCircle className="w-4 h-4 text-stone-700" />
              <span>{lang === 'ka' ? '3. Messenger-ის ლინკის განახლება' : '3. Updating the Facebook Messenger Link'}</span>
            </div>
            <p>
              {lang === 'ka'
                ? 'გახსენით `src/data/siteConfig.ts` და შეცვალეთ `YOUR_FACEBOOK_PAGE_USERNAME` თქვენი Facebook გვერდის სახელით (მაგ: `https://m.me/archeonstudio`).'
                : 'Open `src/data/siteConfig.ts` and replace `YOUR_FACEBOOK_PAGE_USERNAME` with your Facebook Page username (e.g. `https://m.me/archeonstudio`).'}
            </p>
          </div>

          {/* Section 4: Free Static Hosting */}
          <div className="bg-white p-5 rounded-lg border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 font-medium text-stone-900">
              <Globe className="w-4 h-4 text-stone-700" />
              <span>{lang === 'ka' ? '4. უფასო ჰოსტინგზე გამოქვეყნება (100% უფასო)' : '4. Free Static Deployment (100% Free Hosting)'}</span>
            </div>
            <p>
              {lang === 'ka'
                ? 'ვინაიდან საიტი სრულად სტატიკურია (HTML, CSS, JavaScript) მონაცემთა ბაზისა და სერვერის გარეშე, მისი გამოქვეყნება სრულიად უფასოა Cloudflare Pages, Netlify, ან Vercel პლატფორმებზე:'
                : 'Because this website is 100% static with no database or server dependencies, it deploys completely free on Cloudflare Pages, Netlify, or Vercel:'}
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-stone-600 pl-1">
              <li>{lang === 'ka' ? 'გაუშვით ბრძანება: `npm run build` — შეიქმნება საქაღალდე `dist/`' : 'Run build command: `npm run build` — creates `dist/` folder'}</li>
              <li>{lang === 'ka' ? 'ატვირთეთ GitHub-ზე ან პირდაპირ Drag & Drop გააკეთეთ Netlify Drop-ზე / Cloudflare Pages-ზე' : 'Upload to GitHub or drag & drop the `dist/` folder directly to Netlify Drop or Cloudflare Pages'}</li>
              <li>{lang === 'ka' ? 'საიტი მყისიერად გაეშვება უფასო SSL სერტიფიკატით (HTTPS)' : 'Your site goes live instantly with free SSL certificate (HTTPS)'}</li>
            </ol>
          </div>

          {/* Section 5: Custom Domain */}
          <div className="bg-white p-5 rounded-lg border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 font-medium text-stone-900">
              <CheckCircle2 className="w-4 h-4 text-stone-700" />
              <span>{lang === 'ka' ? '5. საკუთარი დომენის მიბმა (.ge ან .com)' : '5. Connecting Your Own Domain (.ge or .com)'}</span>
            </div>
            <p>
              {lang === 'ka'
                ? 'თქვენს ჰოსტინგის პარამეტრებში (Custom Domains) შეიყვანეთ თქვენი დომენი (მაგ: archeonstudio.ge) და DNS ჩანაწერებში მიუთითეთ CNAME ან A Record. ჰოსტინგი ავტომატურად გააქტიურებს უფასო SSL სერტიფიკატს.'
                : 'In your host settings (Custom Domains), enter your domain (e.g. archeonstudio.ge) and add the provided CNAME or A Record in your domain registrar DNS. Free SSL is provisioned automatically.'}
            </p>
          </div>

          {/* Section 6: Fee Transparency */}
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 flex items-start gap-3 text-xs text-emerald-900">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-0.5">
                {lang === 'ka' ? 'ხარჯების შემოწმება: 0 ლარი / $0 თვიური გადასახადი' : 'Fee Check: $0 / Month Ongoing Cost'}
              </span>
              <span>
                {lang === 'ka'
                  ? 'საიტს არ აქვს არცერთი ფასიანი API, მონაცემთა ბაზა, ან გამოწერა. ჰოსტინგი არის სრულად უფასო. ერთადერთი შესაძლო ხარჯი არის თქვენი საკუთარი დომენის (archeon.ge) წლიური საფასური დომენის რეგისტრატორთან.'
                  : 'There are no paid APIs, databases, or recurring subscriptions. Static hosting on Cloudflare Pages / Netlify is 100% free. The only standard expense is your custom domain registration fee from your registrar.'}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded hover:bg-stone-800 transition-colors"
          >
            {lang === 'ka' ? 'გასაგებია' : 'Got it'}
          </button>
        </div>
      </div>
    </div>
  );
}
