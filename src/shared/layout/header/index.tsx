import MegaMenuModal from "@/shared/layout/header/components/mega-menu-modal";
import { NavItems } from "@/shared/layout/header/types/nav-item";
import { useRef, useState, lazy, Suspense, useCallback } from "react";
import NavItem from "@/shared/layout/header/components/nav-item";

const MegaMenuShop = lazy(
  () => import("@/shared/layout/header/components/shop/mega-menu-shop"),
);
const MegaMenuContact = lazy(
  () => import("@/shared/layout/header/components/contact/mega-menu-contact"),
);
const MegaMenuAbout = lazy(
  () => import("@/shared/layout/header/components/about/mega-menu-about"),
);

export default function Header() {
  const [navItemMegaMenu, setIsMegaMenuOpen] = useState<NavItems | null>();
  const timeoutRef = useRef<number | null>(null);

  const getMegaMenu = (nav: NavItems) => {
    switch (nav) {
      case NavItems.SHOP:
        return <MegaMenuShop />;
        break;
      case NavItems.ABOUT:
        return <MegaMenuAbout />;
        break;
      case NavItems.CONTACT:
        return <MegaMenuContact />;
        break;
      default:
        break;
    }
  };

  const showMenu = useCallback((nav: NavItems) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(nav);
  }, []);

  const hideMenu = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(null);
    }, 300);
  }, []);

  return (
    <header className="bg-background-50-default w-full place-items-center">
      <div className="relative container flex justify-between gap-8 p-2">
        <div className="text-xl">Logo</div>
        <nav className="flex gap-6">
          <NavItem
            onHover={showMenu}
            onLeave={hideMenu}
            title={NavItems.SHOP}
          />
          <NavItem
            onHover={showMenu}
            onLeave={hideMenu}
            title={NavItems.ABOUT}
          />
          <NavItem
            onHover={showMenu}
            onLeave={hideMenu}
            title={NavItems.CONTACT}
          />
        </nav>
        <div>sign up/sign in</div>
        {navItemMegaMenu && (
          <Suspense>
            <MegaMenuModal menu={getMegaMenu(navItemMegaMenu)} />
          </Suspense>
        )}
      </div>
    </header>
  );
}
