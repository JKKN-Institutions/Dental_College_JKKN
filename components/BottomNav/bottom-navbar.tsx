'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  MoreHorizontal,
  GraduationCap,
  Users,
  Building,
  FileText,
  Phone,
  Award,
  ClipboardCheck,
  BookOpen,
  UsersRound,
  Info,
  Image,
  LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useBottomNav, useBottomNavHydration } from '@/hooks/use-bottom-nav';
import { GetDentalCollegePages } from '@/lib/navigationMenuLink';
import { BottomNavItem } from './bottom-nav-item';
import { BottomNavSubmenu } from './bottom-nav-submenu';
import { BottomNavMoreMenu } from './bottom-nav-more-menu';
import { BottomNavGroup, FlatMenuItem, ActivePageInfo } from './types';

// Icon mapping for menu groups
const GROUP_ICONS: Record<string, LucideIcon> = {
  'Home': Home,
  'About': Building,
  'Administration': Users,
  'Academics': GraduationCap,
  'Accreditation': Award,
  'Admission': FileText,
  'Research': BookOpen,
  'IQAC': ClipboardCheck,
  'Committee': Users,
  'Alumni': UsersRound,
  'Mandatory': FileText,
  'Facilities': Building,
  'Info Center': Info,
  'Gallery': Image,
  'Others': MoreHorizontal,
  'Contact': Phone
};

// Flatten menu items including submenus
function flattenMenuItems(
  menus: Array<{
    href: string;
    label: string;
    icon: LucideIcon;
    active: boolean;
    submenus: Array<{ href: string; label: string; icon: LucideIcon; active: boolean }>;
  }>
): FlatMenuItem[] {
  const seenHrefs = new Set<string>();

  return menus.flatMap((menu) => {
    const items: FlatMenuItem[] = [];

    if (menu.submenus.length === 0) {
      if (!seenHrefs.has(menu.href)) {
        seenHrefs.add(menu.href);
        items.push({
          href: menu.href,
          label: menu.label,
          icon: menu.icon,
          active: menu.active
        });
      }
    } else {
      menu.submenus.forEach((sub) => {
        if (!seenHrefs.has(sub.href)) {
          seenHrefs.add(sub.href);
          items.push({
            href: sub.href,
            label: sub.label,
            icon: sub.icon,
            active: sub.active
          });
        }
      });
    }

    return items;
  });
}

export function BottomNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();
  const hasInitialized = useRef(false);
  const hasHydrated = useBottomNavHydration();

  const {
    activeNavId,
    isExpanded,
    isMoreMenuOpen,
    isMinimized,
    activePage,
    setActiveNav,
    switchToNav,
    setExpanded,
    setMoreMenuOpen,
    setMinimized,
    setActivePage
  } = useBottomNav();

  // Get pages based on current pathname
  const pages = useMemo(() => {
    return GetDentalCollegePages(pathname);
  }, [pathname]);

  // Transform pages into bottom nav groups
  const allNavGroups = useMemo((): BottomNavGroup[] => {
    return pages
      .filter((group) => group.menus.length > 0)
      .map((group) => ({
        id: group.groupLabel?.toLowerCase().replace(/\s+/g, '-') || 'default',
        groupLabel: group.groupLabel || 'Menu',
        icon: GROUP_ICONS[group.groupLabel || ''] || Home,
        menus: flattenMenuItems(group.menus)
      }));
  }, [pages]);

  // Primary nav groups (first 4)
  const primaryNavGroups = useMemo(() => {
    return allNavGroups.slice(0, 4);
  }, [allNavGroups]);

  // Remaining groups for "More" menu
  const moreNavGroups = useMemo(() => {
    return allNavGroups.slice(4);
  }, [allNavGroups]);

  // Find the group that contains the current pathname
  const currentActiveGroup = useMemo(() => {
    for (const group of allNavGroups) {
      for (const menu of group.menus) {
        if (pathname === menu.href || pathname.startsWith(menu.href + '/')) {
          return group;
        }
      }
    }
    return allNavGroups[0] || null;
  }, [pathname, allNavGroups]);

  // Find the active page info based on current pathname
  const currentActivePage = useMemo((): ActivePageInfo | null => {
    if (!currentActiveGroup) return null;

    for (const menu of currentActiveGroup.menus) {
      if (pathname === menu.href || pathname.startsWith(menu.href + '/')) {
        return {
          href: menu.href,
          label: menu.label,
          icon: menu.icon,
          groupLabel: currentActiveGroup.groupLabel
        };
      }
    }
    return null;
  }, [pathname, currentActiveGroup]);

  // Determine the effective active nav ID
  const effectiveActiveNavId = useMemo(() => {
    if (isExpanded && activeNavId) {
      return activeNavId;
    }
    if (currentActiveGroup) {
      return currentActiveGroup.id;
    }
    return activeNavId;
  }, [currentActiveGroup, activeNavId, isExpanded]);

  // Current active submenu items
  const activeSubmenus = useMemo(() => {
    if (effectiveActiveNavId) {
      const selectedGroup = allNavGroups.find((g) => g.id === effectiveActiveNavId);
      if (selectedGroup) {
        return selectedGroup.menus;
      }
    }
    return currentActiveGroup?.menus || [];
  }, [effectiveActiveNavId, allNavGroups, currentActiveGroup]);

  // Update active page after paint — runs only on mobile to avoid desktop forced reflows
  useEffect(() => {
    if (!isMobile) return;
    if (currentActivePage) {
      setActivePage(currentActivePage);

      if (!hasInitialized.current) {
        hasInitialized.current = true;
        setMinimized(false);
      }
    }
  }, [currentActivePage, isMobile, setActivePage, setMinimized]);

  // Sync activeNavId with pathname when it changes
  useEffect(() => {
    if (!isExpanded && currentActiveGroup && currentActiveGroup.id !== activeNavId) {
      setActiveNav(currentActiveGroup.id);
    }
  }, [currentActiveGroup, activeNavId, setActiveNav, isExpanded]);

  // Handle nav item click
  const handleNavClick = useCallback(
    (groupId: string, group: BottomNavGroup) => {
      // If group has only 1 menu item, navigate directly without showing submenu
      if (group.menus.length === 1) {
        router.push(group.menus[0].href);
        setExpanded(false);
        setMoreMenuOpen(false);
        return;
      }

      if (isExpanded && activeNavId === groupId) {
        setExpanded(false);
        setMoreMenuOpen(false);
      } else {
        switchToNav(groupId);
      }
    },
    [activeNavId, isExpanded, switchToNav, setExpanded, setMoreMenuOpen, router]
  );

  // Handle submenu item click
  const handleSubmenuClick = useCallback(
    (href: string) => {
      if (href.startsWith('http')) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        router.push(href);
      }
      setExpanded(false);
    },
    [router, setExpanded]
  );

  // Handle "More" menu open
  const handleMoreClick = useCallback(() => {
    setExpanded(false);
    setMoreMenuOpen(!isMoreMenuOpen);
  }, [setMoreMenuOpen, setExpanded, isMoreMenuOpen]);

  // Handle click on More menu item
  const handleMoreItemClick = useCallback(
    (href: string) => {
      if (href.startsWith('http')) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        router.push(href);
      }
      setMoreMenuOpen(false);
    },
    [router, setMoreMenuOpen]
  );

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-bottom-nav]')) {
        setExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isExpanded, setExpanded]);

  // Wait for Zustand store to hydrate before rendering
  if (!hasHydrated) {
    return null;
  }

  // Don't render if no groups available or not mobile
  if (primaryNavGroups.length === 0 || !isMobile) return null;

  return (
    <>
      {/* Backdrop when submenu expanded */}
      <AnimatePresence>
        {isExpanded && !isMoreMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[75] lg:hidden"
            onClick={() => {
              setExpanded(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* Full bottom navigation */}
      <motion.nav
        data-bottom-nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 35,
          mass: 0.8
        }}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-[80]',
          'lg:hidden',
          'border-t border-border',
          'shadow-[0_-4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.3)]'
        )}
        style={{
          backgroundColor: '#FBFBEE',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)'
        }}
      >
        {/* Expanded submenu */}
        <BottomNavSubmenu
          items={activeSubmenus}
          isOpen={isExpanded}
          onItemClick={handleSubmenuClick}
        />

        {/* Nav items */}
        <div className="flex items-center justify-around">
          {primaryNavGroups.map((group) => (
            <BottomNavItem
              key={group.id}
              id={group.id}
              icon={group.icon}
              label={group.groupLabel}
              isActive={effectiveActiveNavId === group.id}
              hasSubmenu={group.menus.length > 1}
              onClick={() => handleNavClick(group.id, group)}
            />
          ))}

          {/* More button if there are additional groups */}
          {moreNavGroups.length > 0 && (
            <BottomNavItem
              id="more"
              icon={MoreHorizontal}
              label="More"
              isActive={isMoreMenuOpen}
              hasSubmenu={true}
              onClick={handleMoreClick}
            />
          )}
        </div>
      </motion.nav>

      {/* More menu sheet */}
      <BottomNavMoreMenu
        groups={moreNavGroups}
        isOpen={isMoreMenuOpen}
        onClose={() => setMoreMenuOpen(false)}
        onItemClick={handleMoreItemClick}
      />
    </>
  );
}
