import type { LucideIcon } from 'lucide-react';
import type { StaticImageData } from 'next/image';

export type ImagePair = { default: StaticImageData; active: StaticImageData };

export type NavDivider = { type: 'divider' };

export type NavLink = {
  href: string;
  label: string;
  image?: ImagePair;
  icon?: LucideIcon;
};

export type NavDropdown = {
  label: string;
  icon?: LucideIcon;
  children: (NavLink | NavDivider)[];
};

export type NavItem = NavLink | NavDropdown | NavDivider;

export type Order = {
  user: string | { name: string; username?: string; avatar?: string };
  totalAmount: string;
  discountedAmount: string;
  discount: string;
  provider: string;
  createdAt: string;
  status: string;
};

