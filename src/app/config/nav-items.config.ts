import { NavItem } from '../models/nav-item.model';

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { path: '', label: 'Land1' },
  { path: 'land2', label: 'Land2' },
  { path: 'land3', label: 'Land3' },
  { path: 'land4', label: 'Land4' },
  { path: 'adm1', label: 'Adm1' },
  { path: 'adm2', label: 'Adm2' }
];

export const ADMIN_NAV_ITEMS: NavItem[] = [
  { path: '', label: 'Home' },
  { path: 'adm1', label: 'Adm1' },
  { path: 'adm2', label: 'Adm2' }
];


const PERSO_NAV_ITEMS: NavItem[] = [
  { path: '', label: 'Home' },
  { path: 'adm1', label: 'Perso1Adm' },
  { path: 'adm2', label: 'Perso2Adm' }
];

const ADVERT_NAV_ITEMS: NavItem[] = [
  { path: '', label: 'Home' },
  { path: 'adm1', label: 'Advert1Adm' },
  { path: 'adm2', label: 'Advert2Adm' }
];

export const getNavItemsByPort = (port: string): NavItem[] => {
  switch (port) {
    case '4210':
      return PERSO_NAV_ITEMS;
      // return ADMIN_NAV_ITEMS;
    case '4220':
      return ADVERT_NAV_ITEMS;
      // return [{ path: '', label: 'Home' }, { path: 'adm1', label: 'Adm1' }];
    case '4240':
      return [{ path: '', label: 'Home' }, { path: 'adm1', label: 'Course1' }, { path: 'adm2', label: 'Course2' }];
    default:
      return DEFAULT_NAV_ITEMS;
  }
};

// export const getNavItemsByHost = (host: string): NavItem[] => {
//   switch (host) {
//     case 'perso':
//       return ADMIN_NAV_ITEMS;
//     case 'advert':
//       return [{ path: '', label: 'Home' }, { path: 'adm1', label: 'Adm1' }];
//     case 'academ':
//       return [{ path: '', label: 'Home' }, { path: 'adm1', label: 'Course1' }, { path: 'adm2', label: 'Course2' }];
//     default:
//       return DEFAULT_NAV_ITEMS;
//   }
// };