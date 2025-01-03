import { NavItem } from '../models/nav-item.model';

const allNavItems: NavItem[] = [
  { path: '', label: 'Land1' },
  { path: 'land2', label: 'Land2' },
  { path: 'land3', label: 'Land3' },
  { path: 'land4', label: 'Land4' },
  { path: 'adm1', label: 'Adm1' },
  { path: 'adm2', label: 'Adm2' }
];

const adminNavItems: NavItem[] = [
  { path: '', label: 'Home' },
  { path: 'adm1', label: 'Adm1' },
  { path: 'adm2', label: 'Adm2' }
];

export const getNavItemsByPort = (port: string): NavItem[] => {
  switch (port) {
    case '4210':
      return adminNavItems;
    case '4220':
      return [{ path: '', label: 'Home' }, { path: 'adm1', label: 'Adm1' }];
    case '4240':
      return [{ path: '', label: 'Home' }, { path: 'adm2', label: 'Adm2' }];
    default:
      return allNavItems;
  }
};

export const getNavItemsByHost = (host: string): NavItem[] => {
  switch (host) {
    case 'perso':
      return adminNavItems;
    case 'advert':
      return [{ path: '', label: 'Home' }, { path: 'adm1', label: 'Adm1' }];
    case 'academ':
      return [{ path: '', label: 'Home' }, { path: 'adm2', label: 'Adm2' }];
    default:
      return allNavItems;
  }
};