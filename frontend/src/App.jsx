import { useEffect } from 'react';
import WaykenPage from './WaykenPage.jsx';

function getContactPayload(container) {
  const inputs = container.querySelectorAll('input');
  const select = container.querySelector('select');
  const textarea = container.querySelector('textarea');

  return {
    firstName: inputs[0]?.value.trim() ?? '',
    lastName: inputs[1]?.value.trim() ?? '',
    email: inputs[2]?.value.trim() ?? '',
    organisation: inputs[3]?.value.trim() ?? '',
    enquiryType: select?.value ?? '',
    message: textarea?.value.trim() ?? ''
  };
}

function App() {
  useEffect(() => {
    const nav = document.getElementById('mainNav');
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileClose = document.getElementById('mobileClose');
    const mobileLinks = Array.from(document.querySelectorAll('.mobile-link'));
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));
    const contactForm = document.querySelector('.contact-form');
    const submitButton = contactForm?.querySelector('.form-submit');
    const revealElements = Array.from(document.querySelectorAll('.reveal'));
    const teamScroll = document.querySelector('.team-scroll');
    const teamScrollButtons = Array.from(document.querySelectorAll('[data-team-scroll]'));

    let autoSlideInterval = null;
    let animationFrameId = null;

    const smoothAnimateScroll = (targetLeft, duration = 750) => {
      if (!teamScroll) return;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      const startLeft = teamScroll.scrollLeft;
      const change = targetLeft - startLeft;
      const startTime = performance.now();

      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeOutQuart(progress);

        teamScroll.scrollLeft = startLeft + change * ease;

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          animationFrameId = null;
        }
      };

      animationFrameId = requestAnimationFrame(step);
    };

    const startAutoSlide = () => {
      stopAutoSlide();
      autoSlideInterval = setInterval(() => {
        if (!teamScroll) return;
        const card = teamScroll.querySelector('.team-card');
        const cardWidth = card?.getBoundingClientRect().width ?? teamScroll.clientWidth;
        const gap = 32;
        const maxScrollLeft = teamScroll.scrollWidth - teamScroll.clientWidth;

        let target = teamScroll.scrollLeft + cardWidth + gap;
        if (teamScroll.scrollLeft >= maxScrollLeft - 20) {
          target = 0;
        }

        smoothAnimateScroll(target, 750);
      }, 2200);
    };

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const handleScroll = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 60);
    };

    const openMobileNav = () => mobileNav?.classList.add('open');
    const closeMobileNav = () => mobileNav?.classList.remove('open');
    const handleTeamScroll = (event) => {
      if (!teamScroll) return;

      const direction = Number(event.currentTarget.dataset.teamScroll);
      const card = teamScroll.querySelector('.team-card');
      const cardWidth = card?.getBoundingClientRect().width ?? teamScroll.clientWidth;
      const gap = 32;
      const maxScrollLeft = teamScroll.scrollWidth - teamScroll.clientWidth;

      let target = teamScroll.scrollLeft + direction * (cardWidth + gap);
      target = Math.max(0, Math.min(target, maxScrollLeft));

      smoothAnimateScroll(target, 600);
      startAutoSlide();
    };

    const anchorHandlers = anchors.map((anchor) => {
      const handler = (event) => {
        const href = anchor.getAttribute('href');
        if (!href || href.length <= 1) return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top, behavior: 'smooth' });
      };

      anchor.addEventListener('click', handler);
      return [anchor, handler];
    });

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      );

      revealElements.forEach((element) => observer.observe(element));
    } else {
      revealElements.forEach((element) => element.classList.add('visible'));
    }

    const status = document.createElement('div');
    status.className = 'form-status';

    const handleSubmit = async () => {
      if (!contactForm || !submitButton) return;

      const payload = getContactPayload(contactForm);
      if (!payload.firstName || !payload.email || !payload.message) {
        status.className = 'form-status error';
        status.textContent = 'Please add your first name, email, and message.';
        return;
      }

      submitButton.disabled = true;
      status.className = 'form-status';
      status.textContent = 'Submitting enquiry...';

      try {
        const response = await fetch('https://waykensite.onrender.com/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error('Submission failed');
        }

        status.className = 'form-status success';
        status.textContent = 'Thank you. Your enquiry has been received.';
        contactForm.querySelectorAll('input, textarea').forEach((field) => {
          field.value = '';
        });
        const select = contactForm.querySelector('select');
        if (select) select.selectedIndex = 0;
      } catch {
        status.className = 'form-status error';
        status.textContent = 'Unable to submit right now. Please try again later.';
      } finally {
        submitButton.disabled = false;
      }
    };

    // ─── PROFESSIONAL CUSTOM CURSOR LOGIC ───
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let cursorRafId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      document.body.classList.add('cursor-active');

      if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      }
    };

    const animateCursorRing = () => {
      // Smooth lerp physics for liquid outer ring movement
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (cursorRing) {
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
      }

      cursorRafId = requestAnimationFrame(animateCursorRing);
    };

    const handleMouseDown = () => document.body.classList.add('cursor-click');
    const handleMouseUp = () => document.body.classList.remove('cursor-click');

    const handleMouseOver = (e) => {
      const interactiveTarget = e.target.closest('a, button, input, select, textarea, [role="button"], .team-card, .sector-card, .pillar, .insight-card, .partner-type-card, .team-scroll-btn');
      if (interactiveTarget) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    };

    const handleMouseLeaveWindow = () => {
      document.body.classList.remove('cursor-active');
    };

    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (isFinePointer) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseover', handleMouseOver, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeaveWindow);
      cursorRafId = requestAnimationFrame(animateCursorRing);
    }

    window.addEventListener('scroll', handleScroll);
    hamburger?.addEventListener('click', openMobileNav);
    mobileClose?.addEventListener('click', closeMobileNav);
    mobileLinks.forEach((link) => link.addEventListener('click', closeMobileNav));
    teamScrollButtons.forEach((button) => button.addEventListener('click', handleTeamScroll));
    submitButton?.addEventListener('click', handleSubmit);
    submitButton?.insertAdjacentElement('afterend', status);

    if (teamScroll) {
      teamScroll.addEventListener('mouseenter', stopAutoSlide);
      teamScroll.addEventListener('mouseleave', startAutoSlide);
      teamScroll.addEventListener('touchstart', stopAutoSlide, { passive: true });
      teamScroll.addEventListener('touchend', startAutoSlide, { passive: true });
      startAutoSlide();
    }

    handleScroll();

    return () => {
      stopAutoSlide();
      if (cursorRafId) cancelAnimationFrame(cursorRafId);
      if (isFinePointer) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      }
      document.body.classList.remove('cursor-active', 'cursor-hover', 'cursor-click');
      if (teamScroll) {
        teamScroll.removeEventListener('mouseenter', stopAutoSlide);
        teamScroll.removeEventListener('mouseleave', startAutoSlide);
        teamScroll.removeEventListener('touchstart', stopAutoSlide);
        teamScroll.removeEventListener('touchend', startAutoSlide);
      }
      window.removeEventListener('scroll', handleScroll);
      hamburger?.removeEventListener('click', openMobileNav);
      mobileClose?.removeEventListener('click', closeMobileNav);
      mobileLinks.forEach((link) => link.removeEventListener('click', closeMobileNav));
      teamScrollButtons.forEach((button) => button.removeEventListener('click', handleTeamScroll));
      submitButton?.removeEventListener('click', handleSubmit);
      anchorHandlers.forEach(([anchor, handler]) => {
        anchor.removeEventListener('click', handler);
      });
      observer?.disconnect();
      status.remove();
    };
  }, []);

  return <WaykenPage />;
}

export default App;
