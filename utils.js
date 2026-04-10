// abbreviate some of the longer known names
export const abbreviate = (name) => {
  if (name === 'South Carolina') return 'S. Carolina';
  else if (name === 'Mississippi State') return 'Mississippi St.';
  else if (name === 'Cal State Fullerton') return 'Cal St. Fullerton';
  else if (name === 'San Diego State') return 'San Diego St.';
  else if (name === 'Southern Illinois') return 'S. Illinois';
  else if (name === 'Southeast Missouri State') return 'SE Missouri St.';
  else if (name === 'South Alabama') return 'S. Alabama';
  else if (name === 'Boston University') return 'Boston U.';
  return name;
}