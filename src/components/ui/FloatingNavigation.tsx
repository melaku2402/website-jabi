'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { ChevronUp, ChevronDown, MessageSquare } from 'lucide-react';

export default function FloatingNavigation() {
  const t = useTranslations('FloatingNav');
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // usePathname from the locale-aware navigation helper already excludes the
  // locale prefix, so this check works the same for both /contact and /am/contact.
  const isContactPage = pathname.endsWith('/contact');

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons only after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check if user reached near the bottom of the page
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      if (scrollTop + windowHeight >= documentHeight - 150) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToggle = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 inset-x-6 z-50 pointer-events-none flex items-center justify-between">
      {/* LEFT: Scroll Up/Down Toggle Button */}
      <button
        onClick={handleScrollToggle}
        aria-label={isAtBottom ? t('scrollToTop') : t('scrollToBottom')}
        className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-[#10B981] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#059669] active:scale-95"
      >
        {isAtBottom ? (
          <ChevronUp className="size-6 stroke-[2.5]" />
        ) : (
          <ChevronDown className="size-6 stroke-[2.5]" />
        )}
      </button>

      {/* RIGHT: Contact Us Link (Hidden on contact page) */}
      {!isContactPage ? (
        <Link
          href="/contact"
          aria-label={t('contactUs')}
          className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-[#10B981] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#059669] active:scale-95"
        >
          <MessageSquare className="size-6 fill-current stroke-none" />
        </Link>
      ) : (
      
        <div />
      )}
    </div>
  );
}