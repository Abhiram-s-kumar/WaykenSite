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

      teamScroll.scrollBy({
        left: direction * (cardWidth + gap),
        behavior: 'smooth'
      });
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
        const response = await fetch('/api/enquiries', {
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

    window.addEventListener('scroll', handleScroll);
    hamburger?.addEventListener('click', openMobileNav);
    mobileClose?.addEventListener('click', closeMobileNav);
    mobileLinks.forEach((link) => link.addEventListener('click', closeMobileNav));
    teamScrollButtons.forEach((button) => button.addEventListener('click', handleTeamScroll));
    submitButton?.addEventListener('click', handleSubmit);
    submitButton?.insertAdjacentElement('afterend', status);
    handleScroll();

    return () => {
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
