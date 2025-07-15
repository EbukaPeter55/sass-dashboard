'use client';

import React, {useState} from 'react';

import Image from 'next/image';
import {ChevronDown} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {COUNTRIES} from "@/app/dashboard/shared/dashboard-constant";


export default function CountrySelector() {
    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]!);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 px-3 cursor-pointer">
                    <Image
                        src={selectedCountry.flag}
                        alt={selectedCountry.label}
                        width={20}
                        height={16}
                        quality={100}
                        className="rounded-sm"
                    />
                    <span className="text-sm">{selectedCountry.label}</span>
                    <ChevronDown className="ml-1 h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
                {COUNTRIES.map((country) => (
                    <DropdownMenuItem
                        key={country.label}
                        onSelect={() => setSelectedCountry(country)}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Image
                            src={country.flag}
                            alt={country.label}
                            width={20}
                            height={20}
                            className="rounded-sm"
                        />
                        <span>{country.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
