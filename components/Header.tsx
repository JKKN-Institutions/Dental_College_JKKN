"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { topMenuItems, bottomMenuItems, navigationMenu, type SubmenuItem, type NavItem } from "@/data/siteData";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState<string | null>(null);
  const [activeThirdLevelSubmenu, setActiveThirdLevelSubmenu] = useState<string | null>(null);
  const [mobileOpenMenus, setMobileOpenMenus] = useState<Set<string>>(new Set());

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMobileMenu = (label: string) => {
    const newSet = new Set(mobileOpenMenus);
    if (newSet.has(label)) {
      newSet.delete(label);
    } else {
      newSet.add(label);
    }
    setMobileOpenMenus(newSet);
  };

  const renderMenuItem = (item: NavItem) => (
    <div
      key={item.label}
      className="relative group"
      onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
      onMouseLeave={() => {
        setActiveSubmenu(null);
        setActiveNestedSubmenu(null);
        setActiveThirdLevelSubmenu(null);
      }}
    >
      {item.submenu ? (
        <button
          aria-haspopup="true"
          aria-expanded={activeSubmenu === item.label}
          className="text-black hover:text-primary font-semibold text-[11px] xl:text-[12px] 2xl:text-[13px] px-1.5 xl:px-2.5 2xl:px-3 py-2 transition-colors whitespace-nowrap flex items-center gap-1"
        >
          {item.label}
          <svg aria-hidden="true" className="w-2.5 h-2.5 lg:w-3 lg:h-3 fill-current" viewBox="0 0 12 12">
            <path d="M6 9L1 4h10z" />
          </svg>
        </button>
      ) : (
        <Link
          href={item.href}
          className="text-black hover:text-primary font-semibold text-[11px] xl:text-[12px] 2xl:text-[13px] px-1.5 xl:px-2.5 2xl:px-3 py-2 transition-colors whitespace-nowrap flex items-center gap-1"
        >
          {item.label}
        </Link>
      )}

      {/* First Level Submenu */}
      {item.submenu && activeSubmenu === item.label && (
        <div className={`absolute top-full mt-0 bg-white shadow-lg py-2 ${['COMMITTEE', 'FACILITIES'].includes(item.label) ? 'min-w-[520px]' : 'min-w-[240px]'} border border-gray-200 z-50 ${['OTHERS', 'RESEARCH'].includes(item.label) ? 'right-0' : 'left-0'}`}>
          <div className={`${['COMMITTEE', 'FACILITIES'].includes(item.label) ? 'grid grid-cols-2 gap-0 relative' : ''}`}>
            {/* Center divider line for 2-column layouts */}
            {['COMMITTEE', 'FACILITIES'].includes(item.label) && (
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
            )}

            {item.submenu.map((subitem: SubmenuItem) => (
              <div
                key={subitem.label}
                className="relative group/nested"
                onMouseEnter={() => subitem.submenu && setActiveNestedSubmenu(subitem.label)}
                onMouseLeave={() => !subitem.submenu && setActiveNestedSubmenu(null)}
              >
                {subitem.submenu ? (
                  <button
                    aria-haspopup="true"
                    aria-expanded={activeNestedSubmenu === subitem.label}
                    className="w-full block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors flex items-center justify-between text-left"
                  >
                    <span>{subitem.label}</span>
                    <svg aria-hidden="true" className={`w-3 h-3 fill-current ml-2 ${['OTHERS', 'COMMITTEE', 'RESEARCH'].includes(item.label) ? 'rotate-180' : ''}`} viewBox="0 0 12 12">
                      <path d="M4 1l5 5-5 5z" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={subitem.href}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{subitem.label}</span>
                  </Link>
                )}

              {/* Nested Submenu */}
              {subitem.submenu && activeNestedSubmenu === subitem.label && (
                <div className={`absolute top-0 ${['OTHERS', 'COMMITTEE', 'RESEARCH'].includes(item.label) ? 'right-full mr-0' : 'left-full ml-0'} bg-white shadow-lg py-2 min-w-[260px] border border-gray-200 z-50 overflow-visible`}>
                  {subitem.submenu.map((nestedItem) => (
                    <div
                      key={nestedItem.label}
                      className="relative group/third"
                      onMouseEnter={() => nestedItem.submenu && setActiveThirdLevelSubmenu(nestedItem.label)}
                      onMouseLeave={() => !nestedItem.submenu && setActiveThirdLevelSubmenu(null)}
                    >
                      {nestedItem.submenu ? (
                        <button
                          aria-haspopup="true"
                          aria-expanded={activeThirdLevelSubmenu === nestedItem.label}
                          className="w-full block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors flex items-center justify-between text-left"
                        >
                          <span>{nestedItem.label}</span>
                          <svg aria-hidden="true" className={`w-3 h-3 fill-current ml-2 ${['OTHERS', 'COMMITTEE', 'RESEARCH'].includes(item.label) ? 'rotate-180' : ''}`} viewBox="0 0 12 12">
                            <path d="M4 1l5 5-5 5z" />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          href={nestedItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors"
                        >
                          {nestedItem.label}
                        </Link>
                      )}

                      {/* Third Level Submenu */}
                      {nestedItem.submenu && activeThirdLevelSubmenu === nestedItem.label && (
                        <div className={`absolute top-0 ${['OTHERS', 'COMMITTEE', 'RESEARCH'].includes(item.label) ? 'right-full mr-0' : 'left-full ml-0'} bg-white shadow-lg py-2 min-w-[260px] border border-gray-200 z-50 overflow-visible`}>
                          {nestedItem.submenu.map((thirdLevelItem) => (
                            <Link
                              key={thirdLevelItem.label}
                              href={thirdLevelItem.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors"
                            >
                              {thirdLevelItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header role="banner" className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* Desktop Header - 2 Row Layout */}
      <div className="hidden lg:block">
        <div className="w-full">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-8 py-2">
            <div className="flex items-center gap-0.5 xl:gap-1 2xl:gap-2">
              {/* Logo - Left Side (spans both rows) */}
              <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                <Image
                  src="/images/dental-logo.png"
                  alt="JKKN Dental College & Hospital"
                  width={192}
                  height={94}
                  className="h-20 xl:h-24 w-auto object-contain"
                  priority
                />
              </Link>

              {/* Navigation Rows Container */}
              <nav aria-label="Main navigation" className="flex-1 flex flex-col gap-0">
                {/* Top Navigation Row */}
                <div className="flex items-center justify-center gap-0 xl:gap-0.5 2xl:gap-1">
                  {topMenuItems.map((item) => renderMenuItem(item))}
                </div>

                {/* Bottom Navigation Row */}
                <div className="flex items-center justify-center gap-0 xl:gap-0.5 2xl:gap-1">
                  {bottomMenuItems.map((item) => renderMenuItem(item))}
                </div>
              </nav>

              {/* Apply Now Button - Right Side (spans both rows) */}
              <div className="flex items-center flex-shrink-0">
                <Link
                  href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                  className="bg-primary text-white px-3 xl:px-4 2xl:px-6 py-1.5 xl:py-2 2xl:py-2.5 rounded-md font-semibold hover:opacity-90 transition-opacity min-h-[44px] flex items-center justify-center text-sm xl:text-sm 2xl:text-base whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Header */}
      <nav aria-label="Mobile navigation" className="lg:hidden w-full py-2 sm:py-3 px-3 sm:px-4">
        <div className={`flex items-center ${isMenuOpen ? 'justify-center' : 'justify-between'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/dental-logo.png"
              alt="JKKN Dental College & Hospital"
              width={154}
              height={75}
              className="h-12 xs:h-14 sm:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Apply Now Button */}
          <Link
            href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
            className="bg-primary text-white px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-2.5 rounded-md font-semibold hover:opacity-90 transition-opacity min-h-[44px] flex items-center justify-center touch-manipulation text-xs xs:text-sm sm:text-base"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-[60] overflow-y-auto pt-16 xs:pt-18 sm:pt-20 pb-4 animate-fade-in">
            <div className="p-3 xs:p-4 sm:p-6 max-w-lg mx-auto">
            {navigationMenu.map((item) => (
              <div key={item.label} className="mb-1.5 sm:mb-2">
                <div className="flex items-center justify-between">
                  {item.submenu ? (
                    <button
                      onClick={() => toggleMobileMenu(item.label)}
                      aria-expanded={mobileOpenMenus.has(item.label)}
                      aria-haspopup="true"
                      className="flex-1 py-3 px-3 xs:px-4 text-black hover:bg-gray-50 active:bg-gray-100 hover:text-primary font-semibold rounded-lg text-left flex items-center justify-between min-h-[44px] touch-manipulation transition-colors text-sm xs:text-base"
                    >
                      <span>{item.label}</span>
                      <svg
                        aria-hidden="true"
                        className={`w-4 h-4 fill-current transition-transform duration-300 ${mobileOpenMenus.has(item.label) ? 'rotate-180' : ''}`}
                        viewBox="0 0 12 12"
                      >
                        <path d="M6 9L1 4h10z" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex-1 py-3 text-black hover:bg-gray-50 active:bg-gray-100 hover:text-primary font-semibold rounded-lg flex items-center min-h-[44px] touch-manipulation transition-colors text-sm xs:text-base ${item.label === 'HOME' ? 'px-6 xs:px-8' : 'px-3 xs:px-4'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
                {item.submenu && mobileOpenMenus.has(item.label) && (
                  <div className="pl-3 xs:pl-4 sm:pl-6 mt-1 space-y-1 animate-slide-down">
                    {item.submenu.map((subitem: SubmenuItem) => (
                      <div key={subitem.label}>
                        <div className="flex items-center justify-between">
                          {subitem.submenu ? (
                            <button
                              onClick={() => toggleMobileMenu(subitem.label)}
                              aria-expanded={mobileOpenMenus.has(subitem.label)}
                              aria-haspopup="true"
                              className="flex-1 py-2.5 px-3 xs:px-4 text-xs xs:text-sm text-gray-600 hover:bg-gray-50 active:bg-gray-100 hover:text-primary rounded-lg text-left flex items-center justify-between min-h-[40px] touch-manipulation transition-colors"
                            >
                              <span>{subitem.label}</span>
                              <svg
                                aria-hidden="true"
                                className={`w-3 h-3 fill-current transition-transform duration-300 ${mobileOpenMenus.has(subitem.label) ? 'rotate-180' : ''}`}
                                viewBox="0 0 12 12"
                              >
                                <path d="M6 9L1 4h10z" />
                              </svg>
                            </button>
                          ) : (
                            <Link
                              href={subitem.href}
                              className="flex-1 py-2.5 px-3 xs:px-4 text-xs xs:text-sm text-gray-600 hover:bg-gray-50 active:bg-gray-100 hover:text-primary rounded-lg min-h-[40px] flex items-center touch-manipulation transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subitem.label}
                            </Link>
                          )}
                        </div>
                        {subitem.submenu && mobileOpenMenus.has(subitem.label) && (
                          <div className="pl-3 xs:pl-4 mt-1 space-y-1 animate-slide-down">
                            {subitem.submenu.map((nestedItem) => (
                              <div key={nestedItem.label}>
                                <div className="flex items-center justify-between">
                                  {nestedItem.submenu ? (
                                    <button
                                      onClick={() => toggleMobileMenu(nestedItem.label)}
                                      aria-expanded={mobileOpenMenus.has(nestedItem.label)}
                                      aria-haspopup="true"
                                      className="flex-1 py-2 px-3 xs:px-4 text-xs text-gray-600 hover:bg-gray-50 active:bg-gray-100 hover:text-primary rounded-lg text-left flex items-center justify-between min-h-[40px] touch-manipulation transition-colors"
                                    >
                                      <span>{nestedItem.label}</span>
                                      <svg
                                        aria-hidden="true"
                                        className={`w-3 h-3 fill-current transition-transform duration-300 ${mobileOpenMenus.has(nestedItem.label) ? 'rotate-180' : ''}`}
                                        viewBox="0 0 12 12"
                                      >
                                        <path d="M6 9L1 4h10z" />
                                      </svg>
                                    </button>
                                  ) : (
                                    <Link
                                      href={nestedItem.href}
                                      className="flex-1 py-2 px-3 xs:px-4 text-xs text-gray-600 hover:bg-gray-50 active:bg-gray-100 hover:text-primary rounded-lg min-h-[40px] flex items-center touch-manipulation transition-colors"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {nestedItem.label}
                                    </Link>
                                  )}
                                </div>
                                {nestedItem.submenu && mobileOpenMenus.has(nestedItem.label) && (
                                  <div className="pl-3 xs:pl-4 mt-1 space-y-1 animate-slide-down">
                                    {nestedItem.submenu.map((thirdLevelItem) => (
                                      <Link
                                        key={thirdLevelItem.label}
                                        href={thirdLevelItem.href}
                                        className="block py-2 px-3 xs:px-4 text-xs text-gray-600 hover:bg-gray-50 active:bg-gray-100 hover:text-primary rounded-lg min-h-[40px] flex items-center touch-manipulation transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {thirdLevelItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Apply Now Button */}
            <Link
              href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
              className="w-full mt-3 sm:mt-4 py-2.5 xs:py-3 px-2.5 xs:px-3 xs:px-4 bg-primary text-white font-semibold rounded-lg flex items-center justify-center gap-2 sm:gap-3 min-h-[44px] touch-manipulation hover:opacity-90 transition-opacity text-xs xs:text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
