'use client';

import {useState} from 'react';
import {usePathname} from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {ChevronDown, ChevronRight} from 'lucide-react';
import {navItems} from '@/app/dashboard/shared/dashboard-constant';
import brandLogo from '../../../public/lawpavillion-logo.svg';
import {NavDropdown, NavLink} from '@/app/dashboard/shared/dashboard-types';
import {cn} from "@/lib/utils";

interface SidebarContentProps {
    isCollapsed: boolean
}

export default function SidebarContent({isCollapsed}: SidebarContentProps) {
    const pathname = usePathname();
    const [open, setOpen] = useState<string | null>(null);

    const toggle = (lbl: string) => setOpen(prev => (prev === lbl ? null : lbl));

    const renderLink = (item: NavLink, extra = '') => (
        <Link
            key={item.href + extra}
            href={item.href}
            className={`flex items-center gap-2 p-2 rounded text-sm
        ${pathname === item.href
                ? 'bg-[var(--primary-colour)] text-white'
                : 'text-[#A3A3A3] hover:bg-[var(--primary-colour)] hover:text-white'}`}
        >
            {item.image ? (
                <div className="relative h-5 w-5 flex-shrink-0">
                    <Image
                        src={item.image.default}
                        alt={item.label}
                        className={`absolute inset-0 transition-opacity
              ${pathname === item.href ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
                    />
                    <Image
                        src={item.image.active}
                        alt={`${item.label} active`}
                        className={`absolute inset-0 transition-opacity
              ${pathname === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    />
                </div>
            ) : (
                item.icon && <item.icon className="h-4 w-4 flex-shrink-0"/>
            )}
            {!isCollapsed && <span>{item.label}</span>}
        </Link>
    );

    /* ---------------- render ---------------- */
    return (
        <div className="h-full flex flex-col">
            <div className="h-16 flex items-center pl-4 border-b shrink-0">
                {!isCollapsed && <Image src={brandLogo} alt="brandLogo" width={169} height={26}/>}
            </div>

            <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                {navItems.map((item) => {
                    if ('type' in item) return <hr key={Math.random()} className="my-2 border-gray-300"/>;

                    if ('href' in item) return renderLink(item);

                    /* dropdown */
                    const dropdown = item as NavDropdown;
                    const openNow = open === dropdown.label;
                    const isBizOrg = dropdown.label === 'Bliz Organization'

                    return (
                        <div key={dropdown.label}
                             className={isBizOrg ? 'border border-gray-300 rounded-lg p-1 mt-[4rem]' : undefined}>
                            <button
                                onClick={() => toggle(dropdown.label)}
                                className={cn(
                                    'w-full flex items-center justify-between p-2 rounded text-sm',
                                    'text-[#A3A3A3] hover:bg-[var(--background-primary)] hover:text-white'
                                )}
                            >
                <span className="flex items-center gap-2">
                  {dropdown.icon && <dropdown.icon className="h-5 w-5"/>}
                    {!isCollapsed && dropdown.label}
                </span>
                                {!isCollapsed && (
                                    openNow ? <ChevronDown className="h-4 w-4"/> : <ChevronRight className="h-4 w-4"/>
                                )}
                            </button>

                            {openNow && (
                                <div className="ml-6 mt-2 space-y-1">
                                    {dropdown.children.map((c, idx) =>
                                        'type' in c
                                            ? <hr key={idx} className="border-gray-300"/>
                                            : renderLink(c as NavLink, `child-${idx}`),
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>
        </div>
    );
}
