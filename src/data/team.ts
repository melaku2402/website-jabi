export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

export const managementTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Ato. Melaku Alemu',
    role: 'General Manager',
    imageUrl:'/images/team/melaku_alemu.png',
  },
  {
    id: '2',
    name: 'W/ro. Senait Kebede',
    role: 'Deputy General Manager',
    imageUrl:'/images/team/senait_kebede.png',
  },
  {
    id: '3',
    name: 'Ato. Tadesse Getachew',
    role: 'Head of Operations',
    imageUrl: '/images/team/tadesse_getachew.png',
  },
  {
    id: '4',
    name: 'W/ro. Abeba Tsegaye',
    role: 'Head of Finance',
    imageUrl: '/images/team/abeba_tsegaye.png',
  },
  {
    id: '5',
    name: 'Ato. Birhanu Alemu',
    role: 'Head of Credit',
    imageUrl: '/images/team/birhanu_alemu.png',
  },
];
