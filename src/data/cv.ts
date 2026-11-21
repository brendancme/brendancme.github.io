// An entry with several roles lists each role with its own period.
export type Entry = {
  what: string;
  roles: { role: string; period: string }[];
};

const one = (what: string, role: string, period: string): Entry => ({
  what,
  roles: [{ role, period }],
});

export const experience: Entry[] = [
  one('Node Ag', 'Director', 'Apr 2024 – Now'),
  {
    what: 'Evernew Capital',
    roles: [
      { role: 'Limited Partner', period: 'Jan 2021 – Now' },
      { role: 'Researcher', period: 'Jan 2021 – Aug 2025' },
      { role: 'IT Supporter', period: 'Jun 2020 – Aug 2025' },
    ],
  },
  one('Grenade Lab', 'IT Supporter', 'Mar 2020 – Now'),
  one('Anzen', 'Smart Contract Developer', 'Jun 2023 – Jul 2025'),
  one('SongRise', 'Smart Contract Developer', 'Apr 2021 – Oct 2022'),
  one('National Taipei University, CIC', 'Director', 'Sep 2020 – Sep 2021'),
  one('Lionfree', 'Volunteer', 'Sep 2013 – Jul 2019'),
  one('Sinta Design', 'Volunteer', '2013 – 2019'),
];

export const education: Entry[] = [
  one('42 Silicon Valley', 'Pisciner', '2019'),
  one(
    'National Taipei University',
    'Double major in Electrical Engineering and Public Administration and Policy; left in October 2021',
    '2018 – Oct 2021',
  ),
];

export const honors: Entry[] = [
  one('FTX HatchQ Trading Competition (Group)', '1st', '2020'),
  one('FTX HatchQ Trading Competition (Personal)', '4th', '2020'),
  one('National Energy Technology Competition', 'Bronze', '2014'),
];
