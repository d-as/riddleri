interface UniqueGroup {
  weighting: number
  items: string[]
}

export const UNIQUE_GROUPS: UniqueGroup[] = [
  {
    weighting: 20,
    items: [
      'Dexterous prayer scroll',
      'Arcane prayer scroll',
    ],
  },
  {
    weighting: 4,
    items: [
      'Twisted buckler',
      'Dragon hunter crossbow',
    ],
  },
  {
    weighting: 3,
    items: [
      "Dinh's bulwark",
      'Ancestral hat',
      'Ancestral robe top',
      'Ancestral robe bottom',
      'Dragon claws',
    ],
  },
  {
    weighting: 2,
    items: [
      'Elder maul',
      'Kodai insignia',
      'Twisted bow',
    ],
  },
];

export const UNIQUE_POOL = UNIQUE_GROUPS.map(({ weighting, items }) => (
  items.map(item => Array(weighting).fill(item)).flat()
))
  .flat();
