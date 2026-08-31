export interface Player {
  id: number
  name: string
  position: string
  number: number
  photo: string | null
  nationality: string
  age?: number
  caps?: number
}

export const squad: Player[] = [
  { id: 1, name: 'Jonathan Koehler', position: 'Goalkeeper', number: 1, photo: '/images/players/jonathan-koehler.png', nationality: 'Marshall Islands' },
  { id: 2, name: 'TBA', position: 'Goalkeeper', number: 12, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 3, name: 'TBA', position: 'Defender', number: 2, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 4, name: 'TBA', position: 'Defender', number: 3, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 5, name: 'TBA', position: 'Defender', number: 4, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 6, name: 'TBA', position: 'Defender', number: 5, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 7, name: 'TBA', position: 'Midfielder', number: 6, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 8, name: 'TBA', position: 'Midfielder', number: 7, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 9, name: 'TBA', position: 'Midfielder', number: 8, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 10, name: 'TBA', position: 'Midfielder', number: 10, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 11, name: 'TBA', position: 'Forward', number: 9, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 12, name: 'TBA', position: 'Forward', number: 11, photo: null, nationality: 'Marshall Islands', caps: 0 },
]

export const futsalSquad: Player[] = [
  { id: 101, name: 'TBA', position: 'Goalkeeper', number: 1, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 102, name: 'TBA', position: 'Defender', number: 4, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 103, name: 'TBA', position: 'Midfielder', number: 7, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 104, name: 'TBA', position: 'Forward', number: 9, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 105, name: 'TBA', position: 'Forward', number: 11, photo: null, nationality: 'Marshall Islands', caps: 0 },
]

export interface StaffMember {
  id: number
  name: string
  role: string
  photo: string | null
  objectPosition?: string
  imageHeight?: string
}

export const technicalStaff: StaffMember[] = [
  { id: 901, name: 'Lloyd Owers', role: 'Head Coach', photo: '/images/players/lloyd-owers.png' },
  { id: 902, name: 'Dean Johnson', role: 'Assistant Coach', photo: null },
  { id: 903, name: 'Justin Walley', role: 'Assistant Coach', photo: '/images/players/justin-walley.png' },
]

export const womensFutsalSquad: Player[] = [
  { id: 201, name: 'TBA', position: 'Goalkeeper', number: 1, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 202, name: 'TBA', position: 'Defender', number: 4, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 203, name: 'TBA', position: 'Midfielder', number: 7, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 204, name: 'TBA', position: 'Forward', number: 9, photo: null, nationality: 'Marshall Islands', caps: 0 },
  { id: 205, name: 'TBA', position: 'Forward', number: 11, photo: null, nationality: 'Marshall Islands', caps: 0 },
]
