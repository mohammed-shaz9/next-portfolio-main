"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link"; // Import Link for navigation

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">
                    <Link href="/"> {/* Link to Contact page */}
                        <div className="flex flex-col space-y-4 text-sm">
                            Home
                        </div>
                    </Link>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <Link href="/services"> {/* Link to Services page */}
                        <div className="flex flex-col space-y-4 text-sm">
                            Services
                        </div>
                    </Link>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Projects">
                    <Link href="/projects"> {/* Link to Projects page */}
                        <div className="flex flex-col space-y-4 text-sm">
                            Projects
                        </div>
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}
