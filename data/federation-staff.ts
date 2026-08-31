export type FederationStaffMember = {
  name: string
  role: string
  department: 'Board' | 'Operations' | 'Marketing & Commercial' | 'Sporting' | 'National Team' | 'Community & Schools'
  location: string
  flag: string
}

// Source: MISF Global Volunteer Network. Keep this as the reviewed fallback; the
// CMS can replace it once the Staff table is connected in Airtable.
export const federationStaff: FederationStaffMember[] = [
  { name: 'Shem Livai', role: 'President', department: 'Board', location: 'Majuro', flag: '🇲🇭' },
  { name: 'Divine Waiti', role: 'Vice-President', department: 'Board', location: 'Majuro', flag: '🇸🇧' },
  { name: 'Martin Housanau', role: 'Treasurer', department: 'Board', location: 'Majuro', flag: '🇸🇧' },
  { name: 'Scott Hill', role: 'Chairman', department: 'Board', location: 'Kwajalein', flag: '🇲🇭' },
  { name: 'Matt Webb', role: 'General Secretary', department: 'Operations', location: 'Exeter', flag: '🏴' },
  { name: 'Michael Hopwood', role: 'Australasian Operations Manager', department: 'Operations', location: 'Melbourne', flag: '🇦🇺' },
  { name: 'Paul Smith', role: 'Australasian Operations', department: 'Operations', location: 'Adelaide', flag: '🏴' },
  { name: 'Max Houchin', role: 'Social Impact & Operations Assistant', department: 'Operations', location: 'Bristol', flag: '🏴' },
  { name: 'Sabina Massidda', role: 'Admin Support', department: 'Operations', location: 'Warwick', flag: '🏴' },
  { name: 'Ted London', role: 'Program Support', department: 'Operations', location: 'Ann Arbor', flag: '🇺🇸' },
  { name: 'Zach Jones', role: 'Operations Support', department: 'Operations', location: 'Tenino', flag: '🇺🇸' },
  { name: 'Woody Watson', role: 'VP, North American Operations', department: 'Operations', location: 'Fayetteville', flag: '🇺🇸' },
  { name: 'Justin Walley', role: 'PR & Comms Director', department: 'Marketing & Commercial', location: 'Sarajevo', flag: '🇧🇦' },
  { name: 'Em Miller', role: 'Social Media Support', department: 'Marketing & Commercial', location: 'San Antonio', flag: '🇲🇭' },
  { name: 'Gabe Lotz', role: 'Marketing Assistant', department: 'Marketing & Commercial', location: 'Salt Lake City', flag: '🇺🇸' },
  { name: 'Matt Pole', role: 'Press Releases', department: 'Marketing & Commercial', location: 'Horsham', flag: '🏴' },
  { name: 'Ben Curtis', role: 'Broadcast Manager', department: 'Marketing & Commercial', location: 'Washington DC', flag: '🇺🇸' },
  { name: 'Amir St. Clair', role: 'Outrigger Challenge Cup & Event Ops', department: 'Marketing & Commercial', location: 'Chicago', flag: '🇺🇸' },
  { name: 'Lloyd Owers', role: 'Technical Director', department: 'Sporting', location: 'Oxford', flag: '🏴' },
  { name: 'Tony Theomae', role: 'On-Island Head of Coaching', department: 'Sporting', location: 'Majuro', flag: '🇸🇧' },
  { name: 'Dan Kiernan', role: 'Strength & Conditioning Coordinator', department: 'Sporting', location: 'Colchester', flag: '🏴' },
  { name: 'Mike Wheeler', role: 'Lead Analyst', department: 'Sporting', location: 'Liverpool', flag: '🏴' },
  { name: 'Ronan Manning', role: 'Analyst', department: 'Sporting', location: 'Minneapolis', flag: '🇺🇸' },
  { name: 'Ross Mitchell', role: 'Analyst', department: 'Sporting', location: 'Armadale', flag: '🏴' },
  { name: 'Will Wilson', role: 'Futsal Coordinator', department: 'Sporting', location: 'Fareham', flag: '🏴' },
  { name: 'Bradley Kirby-Brisley', role: 'Kit & Equipment Manager', department: 'Sporting', location: 'South Carolina', flag: '🇺🇸' },
  { name: 'Katie Smith', role: "Women's NT Head Coach", department: 'National Team', location: 'Cincinnati', flag: '🇺🇸' },
  { name: 'Josie Matlick', role: "Women's NT Assistant Coach", department: 'National Team', location: 'Rogers', flag: '🇺🇸' },
  { name: 'Danielle Mihalko', role: "Women's Team Manager", department: 'National Team', location: 'Ann Arbor', flag: '🇺🇸' },
  { name: 'Danny Razook', role: "Men's Team Manager", department: 'National Team', location: 'Kwajalein', flag: '🇺🇸' },
  { name: 'Dean Johnson', role: "Men's NT Assistant Head Coach", department: 'National Team', location: 'Rogers', flag: '🏴' },
  { name: 'Matt Perrella', role: "Men's NT Assistant Coach", department: 'National Team', location: 'New Jersey', flag: '🇺🇸' },
  { name: 'Rigo Resendez', role: 'National Team Physio', department: 'National Team', location: 'Springdale', flag: '🇺🇸' },
  { name: 'Jack Hutchinson', role: 'Head of Global Talent ID', department: 'National Team', location: 'Saffron Walden', flag: '🏴' },
  { name: 'Pat McStay', role: 'North American Player Recruitment', department: 'National Team', location: 'Henrico', flag: '🇺🇸' },
  { name: 'Dylan Boggiss', role: 'Player Pathways', department: 'National Team', location: 'Hamilton', flag: '🇳🇿' },
  { name: 'Wyatt Burrows', role: 'Player Pathways', department: 'National Team', location: 'Richmond', flag: '🇺🇸' },
  { name: 'Bruno Giuduli', role: 'Environmental & Climate Assistant', department: 'Community & Schools', location: 'Westport', flag: '🇺🇸' },
  { name: 'Jason Roberts', role: 'Head of Legal and Compliance', department: 'Community & Schools', location: 'Portland', flag: '🇺🇸' },
  { name: 'Gabriel Felype', role: 'Player Database Manager', department: 'Community & Schools', location: 'São Paulo', flag: '🇧🇷' },
]

export const staffDepartments = ['Board', 'Operations', 'Marketing & Commercial', 'Sporting', 'National Team', 'Community & Schools'] as const
