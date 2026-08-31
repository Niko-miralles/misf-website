import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'
import DonateStrip from '@/components/home/DonateStrip'

export const metadata: Metadata = {
  title: 'Kōjjelā Kōn Majel Soccer Federation',
  description: 'Marshallese language information about the Marshall Islands Soccer Federation.',
}

const SECTIONS = [
  {
    eyebrow: 'Wōn in',
    title: 'Kōmij kōjjelā lal in kōn Majel',
    image: '/images/our-story-springdale.jpg',
    body: [
      'Majel Soccer Federation ej lelok iien emman ñan Ri-Majel otemjelok, ilo jabdewot jikin in lal, bwe ren maroñ watak kōn Majel, kōkkeitaak ippen doon, im kōmman oktak ko remman.',
      'Kōmij lal eo āliktata ilo lal kōn tiim ko an soccer, im kōmij ejaak juon men elukkuun aorōk. Jān aelōñ ko ilo South Pacific ñan Ri-Majel il Northwest Arkansas im wanmaanlok, kōmij kōlaplok ikkure in soccer ilo ad kojelā armej ro otemjelok kōn Majel ñan lal eo.',
    ],
  },
  {
    eyebrow: 'Mijen eo Ad',
    title: 'Soccer ejjab juon ikkure wōt',
    image: '/images/youth-soccer.webp',
    body: [
      'Kōmij lelok iien emman ñan Ri-Majel otemjelok, ilo jabdewot jikin in lal, bwe ren maroñ ikkure im katakin soccer, jutak kōn tiim in Majel, im kojerbal ikkure in emman bwe en kwalok aelōñ eo ad ñan lal in. Soccer ejjab juon ikkure wōt. Ej wāween eo me jemaroñ kwalok manit in Majel, kajoorlok ajri ro, im emmanlok lal in.',
      'Kōmij kōjjelā lal in kōn kajoor eo an Ri-Majel kōn kajin soccer. Ilo ad kommane tiim ko, jemmaan ikkure ko, im kwalok bwebwenato ko aer ñan lal, kōmij kajjioñ in jipañ ro jet im añinwolā ippen doon.',
    ],
  },
  {
    eyebrow: 'Bwebwenato eo Ad',
    title: 'Jān juon lōmnak ñan juon federation',
    image: '/images/our-story-camp.png',
    body: [
      'Majel Soccer Federation kar jinoe ilo 2021 jān Shem Livai ilo Majuro. Nejin laddik ekar kōnaan ikkure soccer, akō ejjelok tiim ko kōn soccer ilo Majel. Ekar jinoe ainwōt juon jema ej kajjioñ nejin laddik, im kiiō ej juon men elap an emman ilo aelōñ eo ad.',
      'Jān iien en, kōmij kōmman tiim eo kōn volunteer ro – ilo Majel, United States, im United Kingdom – me rej jerbal aolep raan bwe ren bōk soccer ñan aelōñ, jipañ epepen in lal in player ro in coach ro, likut Majel ioon map ilo ikkure in soccer ilo lal.',
    ],
  },
]

const WORK = [
  {
    title: 'Kōmij ikkure ilo aolepen lal',
    image: '/images/outrigger-2025.png',
    body: 'Tiim ko an Emmaan ro im Kōrā ro rej jutak kōn Majel ilo ikkure ko kōn aolep aelōñ, im ewor kōttōpar elap bwe jen delōñ ilo Asian Football Confederation im FIFA.',
  },
  {
    title: 'Kōmij katakin epepen in lal',
    image: '/images/coaching-placements-school.jpg',
    body: 'Kōmkōnaan bwe aolep ajri ro an Majel ren maroñ in ikkure soccer jabdewōt iien. Kōmij kommane jikin katak soccer ilo Majel im Northwest Arkansas, lelok ri-kaki im kein jerbal, im likut soccer ilo jikuul ko.',
  },
  {
    title: 'Kōmij kommane jukjuk',
    image: '/images/team-huddle.jpg',
    body: 'Kōmij kommane juon jukjuk kōn fan ro im supporter ro me rej kobatok ippād. Ejjab juon tiim wōt, kōmij ejaak juon men elap an emman ilo ikkure im katakin lal in kōn manit in Majel.',
  },
]

const HELP = [
  {
    title: 'Ñe kwe Ri-Majel',
    body: 'Tiim in ej tiim eo am. Elaññe kwōpād ilo Majel akō jikin ko jet, emōj ad kōmanman jān im kōn Ri-Majel. Jouj im itok im ikkure, itok im coach, itok im roro.',
  },
  {
    title: 'Ñe kwōj juon fan in soccer',
    body: 'Ewor am iien emman bwe kwōmaroñ in añinwolā aelōñ eo aliktata jān jinoe. Alwōj ial eo, ekkōnak joot eo an Majel, etal ñan ikkure ko, im jipañ ilo ad elaplok.',
  },
  {
    title: 'Ñe kwōkōnaan letok jāān',
    body: 'Ilo am jerbal ippen MISF ej juon investment ilo juon men emman. Aolep jāān ej etal ñan ad jipañ tiim ko ilo Majel im Ri-Majel ilo jikin ko jet.',
  },
  {
    title: 'Ñe kwōpād ilo Northwest Arkansas',
    body: 'Kōmij home tiim eo am. Itok ñan juon jikin katak soccer, añinwolā ilo juon ikkure, im koba ippen Ri-Majel ro jet.',
  },
]

const MILESTONES = [
  { year: '2021', title: 'Jinoin Federation', image: '/images/our-story-ebeye.jpg', body: 'President in MISF Shem Livai ekar lōmnak jān nejin laddik eo an bwe en jinoe federation bwe en lelok iien ko remman ñan ri-ikkure soccer rej ajri.' },
  { year: '2023', title: 'Program kōn ajri ro ej jinoe', image: '/images/youth-soccer.webp', body: 'Federation eo kar bōk coach ro bwe ren jinoe tiim ko ilo jikuul im ikkure ko kōn alen kein kajuon.' },
  { year: '2024', title: 'Camp in Kōrā ro', image: '/images/our-story-camp.png', body: 'Alen eo kein kajuon bwe ri-ikkure kar koba im kōmālmel kōn tiim in Majel ilo camp in kōmālmel ilo U.S.' },
  { year: '2025', title: 'Ikkure kein kajuon', image: '/images/outrigger-2025.png', body: 'Kōn alen kein kajuon tiim in Majel kar etal ñan field eo im kar kommane bwebwenato ilo ad jumae doon kōn US Virgin Islands.' },
  { year: '2027', title: 'Ikkure kein kajuon ilo mweo imōd', image: '/images/outrigger-2027-placeholder.jpg', body: 'Kōmnaaj bōk soccer in aolep aelōñ ñan Majel kōn alen kein kajuon, ilo ad kwalok ad maroñ in karuwainenek ikkure ko ilo Majel.' },
  { year: '2028', title: 'Member ro an Confederation', image: '/images/team-huddle.jpg', body: 'Kōmij kajjioñ in koba ippen confederation ilo region eo, alkin iiō ko an emmanlok ilo jikin ikkure.' },
  { year: '2030', title: 'FIFA World Cup', image: '/images/our-story-national-team.jpg', body: 'Tiim ko an Majel renaaj ikkure bwe ren maroñ kajjioñ in ikkure ilo 2034 kōn emmaan ro im 2035 kōn kōrā ro World Cup.' },
]

const TEAM = [
  'Shem Livai, President',
  'Matt Webb, General Secretary',
  'Divine Waiti, Vice-President',
  'Lloyd Owers, Technical Director',
  'Justin Walley, Communication Director',
  'Patrick McStay, Head of US Scouting',
  'Scott Hill, Board Member',
  'Jack Hutchinson, Head of Talent ID',
  'Max Houchin, Soccer Development Executive',
  'Woody Watson, VP North American Operations',
]

export default function MarshalleseAboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Marshallese"
        title="Kōjjelā Kōn Majel Soccer Federation"
        subtitle="Juon peij kōn Majel Soccer Federation ilo kajin Majel."
        image="/images/our-story-national-team.jpg"
        imagePosition="center 46%"
      />

      <div className="bg-misf-blue py-9 sm:py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display font-black text-xl sm:text-2xl lg:text-3xl uppercase text-white leading-snug">
            Kōmij lelok iien emman ñan Ri-Majel otemjelok, ilo jabdewot jikin in lal.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        {SECTIONS.map((section, index) => (
          <section
            key={section.title}
            className="grid grid-cols-1 lg:grid-cols-2 border border-gray-200 overflow-hidden bg-white"
          >
            <div className={`relative min-h-[280px] lg:min-h-[430px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img
                src={section.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-misf-blue-dark/20" />
            </div>
            <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
                {section.eyebrow}
              </p>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark leading-none mb-6">
                {section.title}
              </h2>
              <div className="space-y-5 text-misf-gray-text leading-relaxed">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-misf-gray-light py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">
              Ta eo Kōmij Komman
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark">
              Kōmij jerbal kōn tiim, ajri, im jukjuk
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORK.map((item) => (
              <div key={item.title} className="group bg-white border border-gray-200 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-misf-blue-dark">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-black text-lg uppercase text-misf-blue-dark mb-3">{item.title}</h3>
                  <p className="text-sm text-misf-gray-text leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] border border-gray-200 overflow-hidden">
            <div className="relative min-h-[380px] p-8 sm:p-10 flex flex-col justify-end">
              <img
                src="/images/inter-island-youth-camp.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-misf-blue-dark/70" />
              <div className="relative">
                <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
                  Elman Am Maroñ Jipañ
                </p>
                <h2 className="font-display font-black text-4xl sm:text-5xl uppercase text-white leading-none">
                  Jipañ ilo ad kwalok Majel ñan lal eo
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-white">
              {HELP.map((item) => (
                <div key={item.title} className="border-b border-r border-gray-200 p-6 sm:p-7">
                  <h3 className="font-display font-black text-lg uppercase text-misf-blue-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-misf-gray-text leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-misf-blue-dark py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-7">
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
              Timeline
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white leading-none">
              Iien ko Reaorōk
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MILESTONES.map((milestone) => (
              <article key={`${milestone.year}-${milestone.title}`} className="group overflow-hidden bg-white">
                <div className="relative aspect-[16/8] overflow-hidden bg-misf-blue-dark">
                  <img src={milestone.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute left-4 top-4 bg-misf-gold px-3 py-1.5">
                    <p className="font-display font-black text-xl text-misf-blue-dark leading-none">{milestone.year}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-black text-lg uppercase text-misf-blue-dark mb-2">{milestone.title}</h3>
                  <p className="text-sm text-misf-gray-text leading-relaxed">{milestone.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-misf-gray-light py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] overflow-hidden border border-gray-200 bg-white">
            <div className="relative min-h-[320px] lg:min-h-[460px]">
              <img
                src="/images/islands-majuro-aerial.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-misf-blue-dark/25" />
            </div>
            <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-3">
                Majel ñan lal eo
              </p>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark leading-none mb-6">
                Kōmij kōnaan bwe aolep armej ren jab meloklok Majel.
              </h2>
              <p className="text-misf-gray-text leading-relaxed">
                Kōmij kōjerbal soccer bwe en kwalok manit in Majel, kajoorlok ajri ro, im kōjjelā lal in kōn aelōñ eo ad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
          <div>
            <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">
              Kōjjela Kajjier Tiim eo
            </p>
            <h2 className="font-display font-black text-4xl uppercase text-misf-blue-dark leading-none">
              Elmān ad Jerbal
            </h2>
            <p className="mt-5 text-sm text-misf-gray-text leading-relaxed">
              MISF ej tōl jān volunteer ro ak ro me rejjab bōk jāān. Aolep ri-jerbal ilo tiim in ad rej letok awa ko aer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TEAM.map((member) => (
              <div key={member} className="border border-gray-200 px-5 py-4">
                <p className="text-sm text-misf-gray-text">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-misf-gray-light py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-misf-gold mb-2">
            Jipañ im Kajjitok
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-misf-blue-dark mb-4">
            Kōmij mōnōnō in kōnono ippam
          </h2>
          <p className="text-misf-gray-text leading-relaxed max-w-2xl mx-auto mb-7">
            Aolep member ro ilo tiim eo rej volunteer ro ak ro me rejjab bōk jāān, im kōmij lale armej ro me remaroñ kobatok im jipañ. Ñe kwōmaroñ jipañ jān mweo imōn ak kwomaroñ etal ñan Majel, jouj im ba tok.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-misf-blue-dark text-white font-display font-black text-sm uppercase tracking-widest px-8 py-3 hover:bg-misf-blue transition-colors"
            >
              Contact Us →
            </Link>
            <Link
              href="/about"
              className="bg-white text-misf-blue-dark font-display font-black text-sm uppercase tracking-widest px-8 py-3 hover:text-misf-blue transition-colors"
            >
              English About →
            </Link>
          </div>
        </div>
      </section>

      <DonateStrip />
    </div>
  )
}
