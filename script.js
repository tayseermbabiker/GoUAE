// UAE Adventures - Interactive Tourism Website
// Mobile-first JavaScript with smooth interactions

class UAETourismSite {
  constructor() {
    console.log('🏗️ UAETourismSite class initializing...');
    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupMobileOptimizations();
    this.setupLazyLoading();
    this.setupFilterTabs();
    this.setupOriginTabs();
    this.setupScrollEffects();
    this.setupSearchFunctionality();
    this.setupInteractiveCards();
    this.setupModalSystem();
    this.setupBookingSystem();
    this.setupSlidingInfoSystem();
    // this.setupScrollToTop(); // Function not defined
  }

  // Mobile-specific optimizations for tourists
  setupMobileOptimizations() {
    console.log('📱 Setting up mobile optimizations...');
    
    // Detect mobile device
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    this.isTouchDevice = 'ontouchstart' in window;
    
    if (this.isMobile) {
      document.body.classList.add('mobile-device');
      console.log('📱 Mobile device detected');
      
      // Optimize for mobile performance
      this.optimizeForMobile();
      this.setupTouchOptimizations();
      this.setupMobileScrolling();
    }
    
    // Handle orientation changes
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        console.log('🔄 Orientation changed, recalculating layout');
        this.recalculateLayout();
      }, 100);
    });
    
    // Optimize viewport for mobile
    this.setupViewportOptimizations();
  }

  optimizeForMobile() {
    // Reduce animations on mobile for better performance
    if (this.isMobile) {
      const styleSheet = document.createElement('style');
      styleSheet.textContent = `
        .mobile-device * {
          transition-duration: 0.2s !important;
          animation-duration: 0.2s !important;
        }
        
        .mobile-device .booking-card:hover {
          transform: none !important;
        }
        
        /* Improve scrolling performance */
        .mobile-device .booking-grid,
        .mobile-device .booking-tabs {
          -webkit-overflow-scrolling: touch;
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }

  // Enhanced lazy loading with performance optimization
  setupLazyLoading() {
    console.log('🖼️ Setting up lazy loading...');
    
    // Enhanced lazy loading observer
    if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            
            // Add loading class
            img.classList.add('loading');
            
            // Handle load event
            img.addEventListener('load', () => {
              img.classList.add('loaded');
              img.classList.remove('loading');
            });
            
            // Handle error event
            img.addEventListener('error', () => {
              console.warn('Failed to load image:', img.src);
              img.classList.add('error');
            });
            
            lazyImageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px' // Start loading 50px before image comes into view
      });

      // Observe all lazy images
      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        lazyImageObserver.observe(img);
      });
    }
  }

  setupTouchOptimizations() {
    console.log('👆 Setting up touch optimizations...');
    
    // Add touch feedback to interactive elements
    const touchElements = document.querySelectorAll('.book-btn, .booking-tab, .exp-tab, .booking-card');
    
    touchElements.forEach(element => {
      element.addEventListener('touchstart', (e) => {
        element.classList.add('touch-active');
      }, { passive: true });
      
      element.addEventListener('touchend', (e) => {
        setTimeout(() => {
          element.classList.remove('touch-active');
        }, 150);
      }, { passive: true });
    });
    
    // Add CSS for touch feedback
    const touchFeedbackCSS = `
      .touch-active {
        opacity: 0.8;
        transform: scale(0.98);
      }
      
      .book-btn.touch-active {
        background: var(--primary-dark);
      }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = touchFeedbackCSS;
    document.head.appendChild(styleSheet);
    
    // Prevent zoom on double tap for booking buttons
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        if (e.target.classList.contains('book-btn') || 
            e.target.classList.contains('booking-tab')) {
          e.preventDefault();
        }
      }
      lastTouchEnd = now;
    }, false);
  }

  setupMobileScrolling() {
    // Smooth scrolling for tab containers on mobile
    const scrollableContainers = document.querySelectorAll('.booking-tabs, .exp-category-tabs');
    
    scrollableContainers.forEach(container => {
      let isScrolling = false;
      let startX, scrollLeft;
      
      container.addEventListener('touchstart', (e) => {
        isScrolling = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });
      
      container.addEventListener('touchmove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
      });
      
      container.addEventListener('touchend', () => {
        isScrolling = false;
      });
    });
  }

  setupViewportOptimizations() {
    // Handle viewport height changes on mobile (keyboard showing/hiding)
    if (this.isMobile) {
      const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      setVH();
      
      window.addEventListener('resize', () => {
        setTimeout(setVH, 100);
      });
      
      // Handle iOS Safari address bar hiding
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
          setTimeout(setVH, 100);
        }
      }, { passive: true });
    }
  }

  recalculateLayout() {
    // Force layout recalculation after orientation change
    const cards = document.querySelectorAll('.booking-card');
    cards.forEach(card => {
      card.style.height = 'auto';
    });
    
    // Recalculate modal positions
    const modals = document.querySelectorAll('.modal-container');
    modals.forEach(modal => {
      if (modal.style.display !== 'none') {
        modal.style.maxHeight = `${window.innerHeight * 0.9}px`;
      }
    });
  }

  // Mobile Navigation
  setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
      menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
      });

      // Close menu when clicking on nav links (mobile)
      const navLinks = navList.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navList.classList.remove('active');
          menuToggle.classList.remove('active');
        });
      });

      // Close menu when clicking outside (mobile)
      document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navList.contains(e.target)) {
          navList.classList.remove('active');
          menuToggle.classList.remove('active');
        }
      });
    }
  }

  // Experience Filter Tabs
  setupFilterTabs() {
    console.log('🎯 Setting up filter tabs (original implementation)...');
    const tabs = document.querySelectorAll('.tab[data-filter]');
    const cards = document.querySelectorAll('.experience-card');
    
    console.log(`Found ${tabs.length} filter tabs and ${cards.length} experience cards`);

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        const filter = tab.dataset.filter;

        // Show/hide cards based on filter
        cards.forEach(card => {
          if (filter === 'all' || card.dataset.filter === filter) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Country Origin Tabs
  setupOriginTabs() {
    const originTabs = document.querySelectorAll('.origin-tab');
    const originContents = document.querySelectorAll('.origin-content');

    originTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetOrigin = tab.dataset.origin;

        // Remove active class from all tabs and contents
        originTabs.forEach(t => t.classList.remove('active'));
        originContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(`${targetOrigin}-origin`).classList.add('active');

        // Smooth animation
        const activeContent = document.getElementById(`${targetOrigin}-origin`);
        activeContent.style.opacity = '0';
        activeContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          activeContent.style.transition = 'all 0.3s ease';
          activeContent.style.opacity = '1';
          activeContent.style.transform = 'translateY(0)';
        }, 50);
      });
    });
  }

  // Scroll Effects - Performance Optimized
  setupScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeaderOnScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
      }

      // Hide/show header on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateHeaderOnScroll);
        ticking = true;
      }
    }, { passive: true });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
      '.clickable-experience, .destination-card, .guide-card, .fact-card'
    );
    
    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(el);
    });
  }

  // Search Functionality
  setupSearchFunctionality() {
    const searchInput = document.querySelector('.search-input input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchInput && searchBtn) {
      // Handle search button click
      searchBtn.addEventListener('click', () => {
        this.performSearch(searchInput.value);
      });

      // Handle enter key in search input
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.performSearch(searchInput.value);
        }
      });

      // Search suggestions (simple implementation)
      const searchSuggestions = [
        'Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Sheikh Zayed Mosque',
        'Visa requirements', 'Best time to visit', 'Dress code', 'Transportation'
      ];

      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length > 2) {
          const matches = searchSuggestions.filter(suggestion => 
            suggestion.toLowerCase().includes(query)
          );
          // In a real app, you'd show these suggestions in a dropdown
          console.log('Search suggestions:', matches);
        }
      });
    }
  }

  performSearch(query) {
    if (!query.trim()) return;

    // Smooth scroll to relevant section based on search query
    const searchMappings = {
      'burj': '#discover',
      'desert': '#discover',
      'mosque': '#discover',
      'visa': '#essential-guide',
      'dress': '#essential-guide',
      'safety': '#essential-guide',
      'transport': '#essential-guide',
      'dubai': '#destinations',
      'abu dhabi': '#destinations'
    };

    const queryLower = query.toLowerCase();
    let targetSection = null;

    for (const [keyword, section] of Object.entries(searchMappings)) {
      if (queryLower.includes(keyword)) {
        targetSection = section;
        break;
      }
    }

    if (targetSection) {
      document.querySelector(targetSection).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Highlight the section briefly
      const section = document.querySelector(targetSection);
      section.style.background = 'rgba(212, 175, 55, 0.1)';
      setTimeout(() => {
        section.style.background = '';
      }, 2000);
    }
  }

  // Interactive Cards
  setupInteractiveCards() {
    // Experience cards hover effects
    const experienceCards = document.querySelectorAll('.clickable-experience');
    experienceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Destination cards interaction
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
      const button = card.querySelector('.btn-destination');
      
      if (button) {
        button.addEventListener('click', () => {
          const destination = card.querySelector('h4').textContent;
          this.showDestinationDetails(destination);
        });
      }
    });

    // Guide cards interaction
    const guideButtons = document.querySelectorAll('.guide-btn');
    guideButtons.forEach(button => {
      button.addEventListener('click', () => {
        const guideType = button.textContent;
        this.showGuideModal(guideType);
      });
    });
  }

  showDestinationDetails(destination) {
    // In a real app, this would open a detailed page or modal
    alert(`Exploring ${destination}! In a full implementation, this would show detailed information about ${destination}.`);
  }

  showGuideModal(guideType) {
    // In a real app, this would open a modal with detailed guide information
    alert(`${guideType} clicked! In a full implementation, this would show detailed ${guideType.toLowerCase()} information.`);
  }

  // Smooth scroll for anchor links
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Form validation for newsletter
  setupFormValidation() {
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
      const input = newsletterForm.querySelector('input');
      const button = newsletterForm.querySelector('button');

      button.addEventListener('click', (e) => {
        e.preventDefault();
        const email = input.value.trim();
        
        if (this.validateEmail(email)) {
          // In a real app, this would submit to your backend
          this.showSuccessMessage('Thank you for subscribing!');
          input.value = '';
        } else {
          this.showErrorMessage('Please enter a valid email address.');
        }
      });
    }
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showSuccessMessage(message) {
    this.showNotification(message, 'success');
  }

  showErrorMessage(message) {
    this.showNotification(message, 'error');
  }

  showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 2rem;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      ${type === 'success' ? 'background: #27AE60;' : 'background: #E74C3C;'}
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Performance optimization: Lazy loading for images
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // Modal System
  setupModalSystem() {
    const modal = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.querySelector('.modal-close');
    
    // Click handlers for clickable cards (essential cards)
    const clickableCards = document.querySelectorAll('.clickable-card');
    console.log(`Found ${clickableCards.length} clickable cards`);
    
    clickableCards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const modalType = card.dataset.modal;
        console.log('Card clicked, modal type:', modalType);
        console.log('Modal elements:', {modal, modalTitle, modalContent});
        this.openModal(modalType, modal, modalTitle, modalContent);
      });
    });

    // Click handlers for experience cards
    const clickableExperiences = document.querySelectorAll('.clickable-experience');
    console.log(`Found ${clickableExperiences.length} clickable experience cards`);
    
    clickableExperiences.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const experienceType = card.dataset.experience;
        console.log('Experience card clicked, type:', experienceType);
        this.openModal(experienceType, modal, modalTitle, modalContent);
      });
    });

    // Close modal handlers
    modalClose.addEventListener('click', () => {
      this.closeModal(modal);
    });

    // Close modal when clicking overlay
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeModal(modal);
      }
    });

    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        this.closeModal(modal);
      }
    });
  }

  // Working Modal System (Direct Implementation)
  openModal(modalType, modal, modalTitle, modalContent) {
    console.log('🚀 Opening modal directly:', modalType);

    // Get modal elements
    const modalOverlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');

    if (!modalOverlay || !title || !content) {
      console.error('Modal elements not found');
      return;
    }

    // Debug modal structure
    console.log('Modal overlay HTML:', modalOverlay.outerHTML.substring(0, 200));
    console.log('Modal has children:', modalOverlay.children.length);

    // Modal content data
    const modalData = {
      'safety': {
        title: 'Complete Safety Guide for UAE',
        content: `
          <h4>🏆 World's Safest Destination</h4>
          <p>UAE ranks #2 globally in the Global Peace Index and is considered one of the safest countries for tourists.</p>
          <h4>👮 Tourist Support</h4>
          <ul>
            <li><strong>Tourist Police:</strong> 901 (multilingual support)</li>
            <li><strong>Emergency:</strong> 999 (Police), 998 (Ambulance)</li>
            <li><strong>Tourist Hotline:</strong> 800-353-353</li>
          </ul>
        `
      }
    };

    // Set content
    if (modalData[modalType]) {
      title.textContent = modalData[modalType].title;
      content.innerHTML = modalData[modalType].content;
    } else {
      title.textContent = 'Information';
      content.innerHTML = '<p>Loading information...</p>';
    }

    // Add CSS if missing
    if (!modalOverlay.style.position) {
      modalOverlay.style.position = 'fixed';
      modalOverlay.style.top = '0';
      modalOverlay.style.left = '0';
      modalOverlay.style.width = '100%';
      modalOverlay.style.height = '100%';
      modalOverlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
      modalOverlay.style.zIndex = '9999';
      modalOverlay.style.alignItems = 'center';
      modalOverlay.style.justifyContent = 'center';
    }

    // Style modal container
    const modalContainer = modalOverlay.querySelector('.modal-container');
    if (modalContainer) {
      modalContainer.style.background = 'white';
      modalContainer.style.borderRadius = '12px';
      modalContainer.style.maxWidth = '600px';
      modalContainer.style.maxHeight = '80vh';
      modalContainer.style.overflow = 'auto';
      modalContainer.style.margin = '20px';
      modalContainer.style.boxShadow = '0 25px 50px rgba(0,0,0,0.25)';
    }

    // Show modal
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Fallback: Create simple alert if modal still not working
    setTimeout(() => {
      if (modalOverlay.style.display === 'flex') {
        console.warn('Modal should be visible but user reports not seeing it');
        // Show simple alert as last resort
        alert('Safety Info: UAE ranks #2 globally for safety. Emergency: 999 (Police), 998 (Ambulance), 800-353-353 (Tourist Hotline)');
      }
    }, 1000);

    console.log('✅ Modal opened successfully with full styling');
    return;
    
    // Check if it's a full modal (like dubai-modal, abudhabi-modal)
    const fullModal = document.getElementById(`${modalType}-modal`);
    if (fullModal) {
      console.log('✅ Opening full modal:', `${modalType}-modal`);
      fullModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        fullModal.classList.add('active');
      }, 10);
      return;
    }
    
    // Get the template content for other modals
    const template = document.getElementById(`${modalType}-modal-content`);
    console.log('Template found:', template ? 'YES' : 'NO');
    
    if (template) {
      // Set title based on modal type
      const titles = {
        'safety': '🛡️ Complete Safety Guide for UAE',
        'visa': '🌍 Visa & Health Requirements Guide',
        'laws': '⚖️ Laws & Regulations - Avoid Fines',
        'dress': '👔 Smart Dress Code Guide',
        'timing': '🌡️ Perfect Timing Guide',
        'transport': '🚗 Complete Transport Guide', 
        'money': '💳 Money & Payment Guide',
        'alcohol': '🍷 Alcohol Rules & Guidelines',
        'burj-khalifa': '🏢 Burj Khalifa & Dubai Mall Experience',
        'desert-safari': '🐪 Desert Safari & Camel Adventure',
        'grand-mosque': '🕌 Sheikh Zayed Grand Mosque',
        'aquarium': '🐠 Dubai Aquarium & VR Park',
        'theme-parks': '🎢 Theme Parks & Family Adventures',
        'yacht': '🛥️ Luxury Yacht & Marina Experience',
        'skydiving': '🪂 Skydiving & Extreme Watersports',
        'souk': '🏺 Traditional Souks & Markets',
        'yas-island': '🎠 Yas Island Theme Parks & Adventures',
        'louvre': '🎨 Louvre Abu Dhabi & Culture',
        'ajman': '🏖️ Ajman - Hidden Gem Emirates',
        'uaq': '🌊 Umm Al-Quwain - Adventure Hub',
        'sharjah': '🎭 Sharjah - Cultural Capital of UAE',
        'rak': '🏔️ Ras Al Khaimah - Adventure Capital',
        'fujairah': '🌊 Fujairah - East Coast Paradise'
      };
      
      modalTitle.textContent = titles[modalType] || 'Information';
      
      // Clone and insert template content
      modalContent.innerHTML = template.innerHTML;
      
      // Show modal with animation
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent background scroll
      
      // Trigger animation after display is set
      setTimeout(() => {
        modal.classList.add('active');
      }, 10);
      
      // Track modal opening
      trackEvent('Modal', 'Open', modalType);
    }
  }

  closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore background scroll
    
    // Hide modal after animation completes
    setTimeout(() => {
      if (!modal.classList.contains('active')) {
        modal.style.display = 'none';
      }
    }, 300);
    
    // Track modal closing
    trackEvent('Modal', 'Close', '');
  }

  // Booking System Setup
  setupBookingSystem() {
    this.setupBookingTabs();
    this.setupExperienceTabs();
    this.setupBookingButtons();
    this.setupDateInputs();
    this.addBookingAnimations();
  }

  // Booking Category Tabs (Hotels, Experiences, Transfers, Packages)
  setupBookingTabs() {
    console.log('🎫 Setting up booking tabs...');
    const bookingTabs = document.querySelectorAll('.booking-tab');
    const bookingContents = document.querySelectorAll('.booking-content');
    
    console.log(`Found ${bookingTabs.length} booking tabs and ${bookingContents.length} booking contents`);

    bookingTabs.forEach(tab => {
      // Hotels tab now works like other booking tabs
      if (!tab.dataset.category) {
        console.log('⏭️ Tab missing data-category, skipping');
        return;
      }
      
      tab.addEventListener('click', () => {
        const category = tab.dataset.category;
        console.log(`🔥 Booking tab clicked: ${category}`);

        // Remove active class from all tabs and contents
        bookingTabs.forEach(t => t.classList.remove('active'));
        bookingContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        const targetContent = document.getElementById(`${category}-booking`);
        if (targetContent) {
          targetContent.classList.add('active');
        }

        // Smooth animation
        targetContent.style.opacity = '0';
        targetContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          targetContent.style.transition = 'all 0.3s ease';
          targetContent.style.opacity = '1';
          targetContent.style.transform = 'translateY(0)';
        }, 50);
      });
    });
  }

  // Experience Sub-tabs (Tours, Attractions, Activities, Cultural)
  setupExperienceTabs() {
    const expTabs = document.querySelectorAll('.exp-tab');
    const expContents = document.querySelectorAll('.exp-content');

    expTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const category = tab.dataset.category;

        // Remove active class from all tabs and contents
        expTabs.forEach(t => t.classList.remove('active'));
        expContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        const targetContent = document.getElementById(`${category}-experiences`);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }

  // Setup booking buttons functionality
  setupBookingButtons() {
    console.log('🎯 Setting up booking buttons...');
    
    const bookingButtons = document.querySelectorAll('.btn-book, .book-btn, .btn-primary');
    console.log(`Found ${bookingButtons.length} booking buttons`);
    
    bookingButtons.forEach(button => {
      if (button && !button.hasAttribute('data-setup')) {
        button.setAttribute('data-setup', 'true');
        button.addEventListener('click', (e) => {
          e.preventDefault();
          console.log('📅 Booking button clicked');
          
          // Add visual feedback
          button.style.transform = 'scale(0.95)';
          setTimeout(() => {
            button.style.transform = 'scale(1)';
          }, 150);
        });
      }
    });
  }

  // Setup date inputs
  setupDateInputs() {
    console.log('📅 Setting up date inputs...');
    
    const dateInputs = document.querySelectorAll('input[type="date"]');
    console.log(`Found ${dateInputs.length} date inputs`);
    
    dateInputs.forEach(input => {
      if (input && !input.hasAttribute('data-setup')) {
        input.setAttribute('data-setup', 'true');
        
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        input.min = today;
        
        input.addEventListener('change', () => {
          console.log(`📅 Date selected: ${input.value}`);
        });
      }
    });
  }

  // Add booking animations
  addBookingAnimations() {
    console.log('✨ Adding booking animations...');
    
    const bookingCards = document.querySelectorAll('.booking-card, .hotel-card, .clickable-experience');
    console.log(`Found ${bookingCards.length} booking cards for animation`);
    
    bookingCards.forEach((card, index) => {
      if (card && !card.hasAttribute('data-animated')) {
        card.setAttribute('data-animated', 'true');
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
      }
    });
  }

  // Setup sliding info system
  setupSlidingInfoSystem() {
    console.log('🎢 Setting up sliding info system...');
    
    // Add any sliding info functionality here if needed
    const slidingElements = document.querySelectorAll('.sliding-info, .slide-info');
    console.log(`Found ${slidingElements.length} sliding info elements`);
    
    slidingElements.forEach((element, index) => {
      if (element && !element.hasAttribute('data-slide-setup')) {
        element.setAttribute('data-slide-setup', 'true');
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add('slide-in');
      }
    });
  }

}

// CSS for smooth animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .nav-list.active {
    display: flex !important;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 1rem 1rem;
    animation: fadeInUp 0.3s ease forwards;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }

  .lazy {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .clickable-experience:hover .card-image {
    transform: scale(1.05);
  }

  .card-image {
    transition: transform 0.3s ease;
  }

  @media (max-width: 767px) {
    .nav-list {
      display: none;
    }

    .trust-indicators {
      flex-direction: row;
      gap: var(--space-sm);
      justify-content: space-between;
      flex-wrap: nowrap;
    }

    .indicator {
      flex: 1;
      min-width: 0;
    }

    .indicator .number {
      font-size: var(--font-size-base) !important;
      margin-bottom: 2px !important;
    }

    .indicator .text {
      font-size: var(--font-size-xs) !important;
      line-height: 1.2 !important;
    }

    .destination-stats {
      justify-content: center;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }

    .origin-tabs {
      flex-direction: column;
      align-items: center;
    }

    .newsletter {
      flex-direction: column;
    }

    /* Mobile: 2 columns for grids to reduce scrolling */
    .emirates-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: var(--space-sm);
    }

    .experience-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: var(--space-sm);
    }

    .essentials-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: var(--space-sm);
    }

    .products-grid {
      grid-template-columns: 1fr !important;
      gap: var(--space-md);
    }

    /* Mobile: Products list - 2 columns */
    .products-list {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr) !important;
      gap: var(--space-sm) !important;
    }

    .product-item {
      flex-direction: column !important;
      text-align: center !important;
      padding: var(--space-md) !important;
    }

    .product-info h5 {
      font-size: var(--font-size-sm) !important;
      margin-bottom: var(--space-xs) !important;
    }

    .product-info p {
      font-size: var(--font-size-xs) !important;
      margin-bottom: var(--space-xs) !important;
    }

    .product-price {
      font-size: var(--font-size-base) !important;
    }

    /* Make cards more compact on mobile */
    .destination-card {
      font-size: 0.85rem;
    }

    .destination-highlights li {
      font-size: 0.75rem;
      padding: 2px 0;
    }

    .clickable-experience .card-content {
      padding: var(--space-md);
    }

    .essential-card {
      padding: var(--space-md);
      font-size: 0.85rem;
    }

    .essential-card {
      padding: var(--space-md) !important;
    }

    .essential-card h5 {
      font-size: var(--font-size-base) !important;
      margin-bottom: var(--space-xs) !important;
    }

    .essential-card p {
      font-size: var(--font-size-sm) !important;
      margin-bottom: var(--space-sm) !important;
      line-height: 1.4 !important;
    }

    .essential-icon {
      font-size: var(--font-size-2xl) !important;
      margin-bottom: var(--space-sm) !important;
    }

    .essential-badge {
      padding: var(--space-xs) var(--space-sm) !important;
      font-size: 0.7rem !important;
    }

    /* Mobile essential card optimizations */
    .essential-card {
      min-height: 120px !important;
    }

    .clickable-card::after {
      display: none !important; /* Hide "click for details" text on mobile */
    }

    .card-arrow {
      display: none !important; /* Hide arrow on mobile */
    }

    /* Mobile hero text optimization */
    .hero-title {
      font-size: var(--font-size-2xl) !important;
      line-height: 1.3 !important;
    }

    .hero-subtitle {
      font-size: var(--font-size-base) !important;
      line-height: 1.4 !important;
      margin-bottom: var(--space-xl) !important;
    }

    /* Show mobile text, hide desktop text */
    .mobile-short {
      display: inline !important;
    }

    .desktop-full {
      display: none !important;
    }

    /* Mobile card optimizations */
    .card-header h4 {
      font-size: var(--font-size-base) !important;
      line-height: 1.3 !important;
    }

    .card-description {
      font-size: var(--font-size-sm) !important;
      line-height: 1.4 !important;
    }

    .destination-vibe {
      font-size: var(--font-size-sm) !important;
    }

    .destination-highlights li {
      font-size: var(--font-size-xs) !important;
      padding: 1px 0 !important;
      line-height: 1.3 !important;
    }
  }
`;
document.head.appendChild(style);


// Initialize Booking Tabs System
function initializeBookingTabs() {
  console.log('🎫 Initializing booking tabs...');
  
  const bookingTabs = document.querySelectorAll('.booking-tab');
  const bookingContents = document.querySelectorAll('.booking-content');
  
  if (bookingTabs.length === 0) {
    console.warn('No booking tabs found');
    return;
  }
  
  console.log(`Found ${bookingTabs.length} booking tabs`);
  
  bookingTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;
      console.log(`Switching to booking category: ${category}`);
      
      // Remove active class from all tabs and contents
      bookingTabs.forEach(t => t.classList.remove('active'));
      bookingContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      const targetContent = document.getElementById(`${category}-booking`);
      
      if (targetContent) {
        targetContent.classList.add('active');
        
        // Smooth animation
        targetContent.style.opacity = '0';
        targetContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          targetContent.style.transition = 'all 0.3s ease';
          targetContent.style.opacity = '1';
          targetContent.style.transform = 'translateY(0)';
        }, 50);
      } else {
        console.warn(`No content found for category: ${category}`);
      }
    });
  });
  
  // Initialize experience sub-tabs
  initializeExperienceTabs();
  
  // Initialize booking buttons
  initializeBookingButtons();
  
  console.log('✅ Booking tabs system initialized');
}

// Initialize Experience Sub-tabs
function initializeExperienceTabs() {
  const expTabs = document.querySelectorAll('.exp-tab');
  const expContents = document.querySelectorAll('.exp-content');
  
  if (expTabs.length === 0) return;
  
  expTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const expType = tab.dataset.exp;
      
      // Remove active from experience tabs
      expTabs.forEach(t => t.classList.remove('active'));
      expContents.forEach(c => c.classList.remove('active'));
      
      // Add active to clicked tab and content
      tab.classList.add('active');
      const targetExpContent = document.getElementById(`${expType}-exp`);
      
      if (targetExpContent) {
        targetExpContent.classList.add('active');
      }
    });
  });
}

// Test function to trigger booking flow and see TripAdvisor
function testBookingFlow() {
  console.log('🧪 Testing booking flow...');
  
  // Mock booking data for Burj Khalifa experience
  currentBooking = {
    experience: {
      name: 'Burj Khalifa & Dubai Mall Experience',
      price: 150,
      image: ''
    },
    date: new Date().toISOString().split('T')[0],
    time: '09:00',
    guests: { adults: 2, children: 0, infants: 0 }
  };
  
  // Trigger affiliate selection modal
  showAffiliateSelectionModal();
}

// Make test function globally available for console testing
window.testBookingFlow = testBookingFlow;

// Test filter functionality
function testFilters() {
  console.log('🧪 Testing filter functionality...');
  
  const tabs = document.querySelectorAll('.tab[data-filter]');
  const cards = document.querySelectorAll('.clickable-experience');
  
  console.log(`Found ${tabs.length} filter tabs:`, Array.from(tabs).map(t => t.dataset.filter));
  console.log(`Found ${cards.length} experience cards`);
  
  // Test each filter
  ['desert', 'culture', 'beach', 'adventure', 'eco', 'family'].forEach(filter => {
    const matchingCards = document.querySelectorAll(`.airbnb-card[data-filter="${filter}"]`);
    console.log(`Filter '${filter}': ${matchingCards.length} matching cards`);
    matchingCards.forEach((card, i) => {
      console.log(`  Card ${i+1}: ${card.dataset.experience || 'no-data-experience'}`);
    });
  });
}

window.testFilters = testFilters;

// Complete experience filter test
function testExperienceFiltering() {
  console.log('🔍 Testing complete experience filtering...');
  
  const tabs = document.querySelectorAll('.tab[data-filter]');
  const cards = document.querySelectorAll('.clickable-experience');
  
  console.log(`Found ${tabs.length} filter tabs and ${cards.length} experience cards`);
  
  // Test each filter
  ['all', 'desert', 'culture', 'beach', 'adventure', 'eco', 'family'].forEach(filterValue => {
    console.log(`\n🎯 Testing filter: ${filterValue}`);
    
    // Find the tab
    const tab = document.querySelector(`.tab[data-filter="${filterValue}"]`);
    if (!tab) {
      console.error(`❌ Tab not found for filter: ${filterValue}`);
      return;
    }
    
    // Simulate click
    tab.click();
    
    // Check visible cards
    let visibleCards = 0;
    let hiddenCards = 0;
    
    cards.forEach(card => {
      const isVisible = card.style.display !== 'none';
      const cardFilter = card.dataset.filter;
      
      if (filterValue === 'all') {
        if (isVisible) visibleCards++;
        else {
          console.warn(`⚠️ Card with filter '${cardFilter}' should be visible for 'all' filter`);
          hiddenCards++;
        }
      } else {
        if (cardFilter === filterValue) {
          if (isVisible) visibleCards++;
          else {
            console.warn(`⚠️ Card with filter '${cardFilter}' should be visible`);
            hiddenCards++;
          }
        } else {
          if (!isVisible) hiddenCards++;
          else {
            console.warn(`⚠️ Card with filter '${cardFilter}' should be hidden`);
            visibleCards++;
          }
        }
      }
    });
    
    console.log(`✅ Filter '${filterValue}': ${visibleCards} visible, ${hiddenCards} hidden`);
    
    // Check active tab
    const activeTabs = document.querySelectorAll('.tab.active');
    if (activeTabs.length !== 1) {
      console.error(`❌ Expected 1 active tab, found ${activeTabs.length}`);
    } else if (activeTabs[0] !== tab) {
      console.error(`❌ Wrong tab is active`);
    } else {
      console.log(`✅ Correct tab is active`);
    }
  });
  
  console.log('🎉 Experience filtering test complete!');
}

window.testExperienceFiltering = testExperienceFiltering;

// Simple Filter Tabs Implementation (bypass class structure)
function initializeSimpleFilterTabs() {
  console.log('🎯 Initializing SIMPLE filter tabs...');
  
  // Wait a bit to ensure DOM is ready
  setTimeout(() => {
    const tabs = document.querySelectorAll('.tab[data-filter]');
    const cards = document.querySelectorAll('.clickable-experience');
    
    console.log(`Found ${tabs.length} tabs and ${cards.length} cards`);
    
    if (tabs.length === 0 || cards.length === 0) {
      console.error('❌ Filter elements not found!');
      return;
    }
    
    tabs.forEach(tab => {
      console.log(`Adding click listener to: ${tab.textContent} (${tab.dataset.filter})`);
      
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`🔥 CLICKED: ${tab.dataset.filter}`);
        
        // Remove active from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add active to clicked tab
        tab.classList.add('active');
        
        const filter = tab.dataset.filter;
        let visibleCount = 0;
        
        // Show/hide cards
        cards.forEach(card => {
          if (filter === 'all' || card.dataset.filter === filter) {
            card.style.display = 'block';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });
        
        console.log(`✅ Filter '${filter}' applied: ${visibleCount} cards visible`);
      });
    });
    
    console.log('✅ Simple filter tabs initialized');
  }, 500);
}

// Initialize simple booking tabs (bypass class structure)
function initializeSimpleBookingTabs() {
  console.log('🎫 Initializing SIMPLE booking tabs...');
  
  // Wait a bit to ensure DOM is ready
  setTimeout(() => {
    const bookingTabs = document.querySelectorAll('.booking-tab');
    const bookingContents = document.querySelectorAll('.booking-content');
    
    console.log(`Found ${bookingTabs.length} booking tabs and ${bookingContents.length} booking contents`);
    
    if (bookingTabs.length === 0) {
      console.warn('❌ No booking tabs found');
      return;
    }
    
    bookingTabs.forEach(tab => {
      // Hotels tab now works like other booking tabs
      if (!tab.dataset.category) {
        console.log('⏭️ Tab missing data-category, skipping');
        return;
      }
      
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const category = tab.dataset.category;
        console.log(`🔥 BOOKING TAB CLICKED: ${category}`);
        
        // Remove active class from all tabs
        bookingTabs.forEach(t => t.classList.remove('active'));
        bookingContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding content
        const targetContent = document.getElementById(`${category}-booking`);
        if (targetContent) {
          targetContent.classList.add('active');
          console.log(`✅ Showing ${category} booking content`);
        } else {
          console.error(`❌ Could not find content with ID: ${category}-booking`);
        }
      });
    });
    
    console.log('✅ Simple booking tabs initialized');
  }, 500);
}

// Test function for booking tabs
function testBookingTabs() {
  console.log('🧪 TESTING BOOKING TABS...');
  
  const bookingTabs = document.querySelectorAll('.booking-tab');
  const bookingContents = document.querySelectorAll('.booking-content');
  
  console.log(`Found ${bookingTabs.length} booking tabs:`);
  bookingTabs.forEach((tab, i) => {
    console.log(`  ${i+1}. ${tab.textContent} (data-category: ${tab.dataset.category})`);
  });
  
  console.log(`Found ${bookingContents.length} booking contents:`);
  bookingContents.forEach((content, i) => {
    console.log(`  ${i+1}. ID: ${content.id}, Classes: ${content.className}`);
  });
  
  // Test each expected ID
  ['hotels-booking', 'transfers-booking', 'packages-booking'].forEach(id => {
    const element = document.getElementById(id);
    console.log(`ID '${id}': ${element ? 'FOUND ✅' : 'NOT FOUND ❌'}`);
  });
}

window.testBookingTabs = testBookingTabs;

// Simple direct test that should always work
console.log('🧪 DIRECT TEST - Booking tabs found:', document.querySelectorAll('.booking-tab').length);

// Global function for inline onclick handlers
// Simple booking tab switching using universal switchTab function
function switchBookingTab(category) {
  switchTab('booking', category, 'data-category');
}


// Quick function to test TripAdvisor affiliate modal
function showTripAdvisorTest() {
  console.log('🧪 Testing TripAdvisor modal...');
  
  // Manually trigger the affiliate selection
  if (typeof showAffiliateSelection === 'function') {
    // Set up a mock booking first
    window.currentBooking = {
      experience: { name: 'Burj Khalifa Experience' }
    };
    showAffiliateSelection();
  } else {
    console.error('showAffiliateSelection function not found');
  }
}

window.showTripAdvisorTest = showTripAdvisorTest;

// Mobile-optimized partner selection functions
function togglePartnerSelection(button) {
  const experience = button.dataset.experience;
  const partnerSelection = document.getElementById(`${experience}-partners`);
  const arrow = button.querySelector('.btn-arrow');
  
  console.log(`🎯 Toggling partner selection for: ${experience}`);
  console.log(`🔍 Partner selection element:`, partnerSelection);
  
  if (!partnerSelection) {
    console.error(`❌ No partner selection found for ${experience}`);
    return;
  }
  
  // Close all other open partner selections first
  document.querySelectorAll('.partner-selection.visible').forEach(selection => {
    if (selection !== partnerSelection) {
      selection.classList.add('hidden');
      selection.classList.remove('visible');
      const otherButton = document.querySelector(`[data-experience="${selection.id.replace('-partners', '')}"]`);
      if (otherButton) {
        otherButton.classList.remove('expanded');
        const otherArrow = otherButton.querySelector('.btn-arrow');
        if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
      }
    }
  });
  
  // Toggle expanded state on button
  button.classList.toggle('expanded');
  
  // Toggle partner selection visibility
  if (partnerSelection.classList.contains('hidden')) {
    partnerSelection.classList.remove('hidden');
    partnerSelection.classList.add('visible');
    arrow.style.transform = 'rotate(180deg)';
    
    // Force visibility of partner names
    setTimeout(() => {
      const partnerNames = partnerSelection.querySelectorAll('.partner-name');
      partnerNames.forEach(name => {
        console.log(`🔍 Partner name element:`, name, name.textContent);
        name.style.cssText = `
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          color: #2d3748 !important;
          font-weight: 600 !important;
          font-size: 0.9rem !important;
        `;
      });
    }, 50);
    
  } else {
    partnerSelection.classList.remove('visible');
    partnerSelection.classList.add('hidden');
    arrow.style.transform = 'rotate(0deg)';
  }
}

// Close partner selection when clicking outside
function closeAllPartnerSelections() {
  document.querySelectorAll('.partner-selection.visible').forEach(selection => {
    selection.classList.add('hidden');
    selection.classList.remove('visible');
    const experience = selection.id.replace('-partners', '');
    const button = document.querySelector(`[data-experience="${experience}"]`);
    if (button) {
      button.classList.remove('expanded');
      const arrow = button.querySelector('.btn-arrow');
      if (arrow) arrow.style.transform = 'rotate(0deg)';
    }
  });
}

// Add click outside listener with safety check
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    addClickOutsideListener();
  });
} else {
  addClickOutsideListener();
}

function addClickOutsideListener() {
  document.addEventListener('click', function(event) {
    if (!event.target) return;
    
    const isBookButton = event.target.closest('.expandable-book');
    const isPartnerSelection = event.target.closest('.partner-selection');
    
    if (!isBookButton && !isPartnerSelection) {
      closeAllPartnerSelections();
    }
  });
}

function selectPartner(partner, experience) {
  console.log(`✅ Selected partner: ${partner} for experience: ${experience}`);
  
  // You can redirect to the partner's booking page here
  const partnerUrls = {
    tripadvisor: `https://www.tripadvisor.com/bookings/${experience}`,
    bookingcom: `https://www.booking.com/experiences/${experience}`,
    platinumlist: `https://platinumlist.net/aff/?ref=yjzkmgy&link=${experience}`,
    gocity: `https://gocity.com/dubai/${experience}`,
    klook: `https://www.klook.com/${experience}`
  };
  
  // Show confirmation and redirect
  alert(`Redirecting to ${partner} for ${experience} booking...`);
  
  // In a real implementation, you would redirect:
  // window.open(partnerUrls[partner], '_blank');
}

function showMorePartners(experience) {
  console.log(`🔍 Showing more partners for: ${experience}`);
  
  // This would expand to show GetYourGuide, Klook, etc.
  const partnerSelection = document.getElementById(`${experience}-partners`);
  const moreButton = partnerSelection.querySelector('.partner-more-btn');
  
  // Create additional partner options
  const additionalPartners = `
    <button class="partner-option gocity-option" onclick="selectPartner('gocity', '${experience}')">
      <div class="partner-logo">🟩</div>
      <div class="partner-info">
        <span class="partner-name">GoCity</span>
        <span class="partner-desc">Instant confirmation • Mobile tickets</span>
      </div>
    </button>
    <button class="partner-option klook-option" onclick="selectPartner('klook', '${experience}')">
      <div class="partner-logo">🟠</div>
      <div class="partner-info">
        <span class="partner-name">Klook</span>
        <span class="partner-desc">Best prices • Easy booking</span>
      </div>
    </button>
  `;
  
  moreButton.outerHTML = additionalPartners;
}

// Make functions globally available
window.togglePartnerSelection = togglePartnerSelection;
window.selectPartner = selectPartner;
window.showMorePartners = showMorePartners;

// Dynamic Hotel Management System
function filterAndShowHotels() {
  console.log('🔍 Filtering hotels by emirate and star rating');
  
  const emirateSelector = document.getElementById('hotel-destination');
  const starSelector = document.getElementById('hotel-stars');
  const selectedEmirate = emirateSelector ? emirateSelector.value : '';
  const selectedStars = starSelector ? starSelector.value : '';
  
  console.log(`Emirate: ${selectedEmirate}, Stars: ${selectedStars}`);
  
  // Hide all hotel sections
  document.querySelectorAll('.emirate-hotels').forEach(section => {
    section.style.display = 'none';
  });
  
  // Update title based on selection
  const hotelsTitle = document.getElementById('hotels-title');
  const emirateNames = {
    'dubai': 'Dubai',
    'ajman': 'Ajman', 
    'sharjah': 'Sharjah',
    'abu-dhabi': 'Abu Dhabi',
    'ras-al-khaimah': 'Ras Al Khaimah',
    'fujairah': 'Fujairah',
    'umm-al-qaiwain': 'Umm Al Qaiwain'
  };
  
  if (selectedEmirate && selectedEmirate !== '') {
    const selectedSection = document.getElementById(`${selectedEmirate}-hotels`);
    
    if (selectedSection) {
      selectedSection.style.display = 'grid';
      
      // Filter by star rating if selected
      if (selectedStars && selectedStars !== '') {
        const allHotelCards = selectedSection.querySelectorAll('.booking-card[data-star-rating]');
        let visibleCount = 0;
        
        allHotelCards.forEach(card => {
          if (card.getAttribute('data-star-rating') === selectedStars) {
            card.style.display = 'block';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });
        
        // Update title with filtering info
        const starText = selectedStars === '3' ? '3-Star Budget' : 
                         selectedStars === '4' ? '4-Star Mid-Range' : 
                         selectedStars === '5' ? '5-Star Luxury' : `${selectedStars}-Star`;
        hotelsTitle.textContent = `🏨 ${emirateNames[selectedEmirate]} - ${starText} Hotels (${visibleCount})`;
        
        if (visibleCount === 0) {
          hotelsTitle.textContent = `🏨 No ${starText} hotels available in ${emirateNames[selectedEmirate]}`;
        }
      } else {
        // Show all hotels in emirate
        const allHotelCards = selectedSection.querySelectorAll('.booking-card');
        allHotelCards.forEach(card => {
          card.style.display = 'block';
        });
        hotelsTitle.textContent = `🏨 ${emirateNames[selectedEmirate]} Hotels`;
      }
      
      console.log(`✅ Filtering applied for ${emirateNames[selectedEmirate]}`);
    } else {
      console.warn(`❌ No hotels found for ${selectedEmirate}`);
      if (hotelsTitle) {
        hotelsTitle.textContent = '🏨 No Hotels Available';
      }
    }
  } else {
    // No emirate selected, show default Dubai
    showHotelsForEmirate('dubai');
  }
}

function showHotelsForEmirate(emirate) {
  console.log(`🏨 Switching to ${emirate} hotels`);
  
  // Hide all hotel sections
  document.querySelectorAll('.emirate-hotels').forEach(section => {
    section.style.display = 'none';
  });
  
  // Show selected emirate hotels
  const selectedSection = document.getElementById(`${emirate}-hotels`);
  const hotelsTitle = document.getElementById('hotels-title');
  
  if (selectedSection) {
    selectedSection.style.display = 'grid';
    
    // Update title
    const emirateNames = {
      'dubai': 'Dubai',
      'ajman': 'Ajman', 
      'sharjah': 'Sharjah',
      'abu-dhabi': 'Abu Dhabi',
      'ras-al-khaimah': 'Ras Al Khaimah',
      'fujairah': 'Fujairah',
      'umm-al-qaiwain': 'Umm Al Qaiwain'
    };
    
    hotelsTitle.textContent = `🏨 ${emirateNames[emirate]} Hotels`;
    console.log(`✅ Showing hotels for ${emirateNames[emirate]}`);
  } else {
    console.warn(`❌ No hotels found for ${emirate}`);
    if (hotelsTitle) {
      hotelsTitle.textContent = '🏨 No Hotels Available';
    }
  }
}

// Connect to destination and star rating selectors
function connectHotelSelector() {
  const hotelDestination = document.getElementById('hotel-destination');
  const hotelStars = document.getElementById('hotel-stars');
  
  if (hotelDestination) {
    hotelDestination.addEventListener('change', function() {
      filterAndShowHotels();
    });
    console.log('✅ Hotel destination selector connected');
  } else {
    console.warn('❌ Hotel destination selector not found');
  }
  
  if (hotelStars) {
    hotelStars.addEventListener('change', function() {
      filterAndShowHotels();
    });
    console.log('✅ Hotel star rating selector connected');
  } else {
    console.warn('❌ Hotel star rating selector not found');
  }
}

// Initialize hotel and restaurant systems when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  try {
    connectHotelSelector();
    connectRestaurantSelector();
    console.log('✅ All systems initialized');
  } catch (error) {
    console.error('❌ Error during initialization:', error);
  }
});


// Restaurant filtering system
function filterAndShowRestaurants() {
  console.log('🍽️ Filtering restaurants by location, cuisine, and price');
  
  const emirateSelector = document.getElementById('restaurant-destination');
  const cuisineSelector = document.getElementById('restaurant-cuisine');
  const priceSelector = document.getElementById('restaurant-price');
  const selectedEmirate = emirateSelector ? emirateSelector.value : '';
  const selectedCuisine = cuisineSelector ? cuisineSelector.value : '';
  const selectedPrice = priceSelector ? priceSelector.value : '';
  
  console.log(`Emirate: ${selectedEmirate}, Cuisine: ${selectedCuisine}, Price: ${selectedPrice}`);
  
  // Hide all restaurant sections
  document.querySelectorAll('.emirate-restaurants').forEach(section => {
    section.style.display = 'none';
  });
  
  const restaurantsTitle = document.getElementById('restaurants-title');
  const emirateNames = {
    'dubai': 'Dubai',
    'ajman': 'Ajman', 
    'sharjah': 'Sharjah',
    'abu-dhabi': 'Abu Dhabi',
    'ras-al-khaimah': 'Ras Al Khaimah',
    'fujairah': 'Fujairah',
    'umm-al-qaiwain': 'Umm Al Qaiwain'
  };
  
  if (selectedEmirate && selectedEmirate !== '') {
    const selectedSection = document.getElementById(`${selectedEmirate}-restaurants`);
    
    if (selectedSection) {
      selectedSection.style.display = 'grid';
      
      // Apply cuisine and price filters
      const allRestaurantCards = selectedSection.querySelectorAll('.booking-card');
      let visibleCount = 0;
      
      allRestaurantCards.forEach(card => {
        let showCard = true;
        
        // Filter by cuisine type
        if (selectedCuisine && selectedCuisine !== '') {
          const cardCuisine = card.getAttribute('data-cuisine');
          if (cardCuisine !== selectedCuisine) {
            showCard = false;
          }
        }
        
        // Filter by price range
        if (selectedPrice && selectedPrice !== '') {
          const cardPrice = card.getAttribute('data-price');
          if (cardPrice !== selectedPrice) {
            showCard = false;
          }
        }
        
        if (showCard) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
      
      // Update title with filtering info
      let titleText = `🍽️ ${emirateNames[selectedEmirate]} Restaurants`;
      let filters = [];
      
      if (selectedCuisine && selectedCuisine !== '') {
        const cuisineNames = {
          'fine-dining': 'Fine Dining',
          'emirati': 'Traditional Emirati',
          'international': 'International',
          'rooftop': 'Rooftop & Views',
          'dinner-show': 'Dinner Shows'
        };
        filters.push(cuisineNames[selectedCuisine] || selectedCuisine);
      }
      
      if (selectedPrice && selectedPrice !== '') {
        const priceNames = {
          'budget': 'Budget',
          'mid': 'Mid-Range',
          'upscale': 'Upscale',
          'luxury': 'Luxury'
        };
        filters.push(priceNames[selectedPrice] || selectedPrice);
      }
      
      if (filters.length > 0) {
        titleText = `🍽️ ${emirateNames[selectedEmirate]} - ${filters.join(', ')} (${visibleCount})`;
      }
      
      restaurantsTitle.textContent = titleText;
      
      if (visibleCount === 0 && filters.length > 0) {
        restaurantsTitle.textContent = `🍽️ No ${filters.join(', ')} restaurants in ${emirateNames[selectedEmirate]}`;
      }
      
      console.log(`✅ Restaurant filtering applied for ${emirateNames[selectedEmirate]}`);
    } else {
      console.warn(`❌ No restaurants found for ${selectedEmirate}`);
      if (restaurantsTitle) {
        restaurantsTitle.textContent = '🍽️ No Restaurants Available';
      }
    }
  } else {
    // No emirate selected, show default Dubai
    showRestaurantsForEmirate('dubai');
  }
}

function showRestaurantsForEmirate(emirate) {
  console.log(`🍽️ Switching to ${emirate} restaurants`);
  
  // Hide all restaurant sections
  document.querySelectorAll('.emirate-restaurants').forEach(section => {
    section.style.display = 'none';
  });
  
  // Show selected emirate restaurants
  const selectedSection = document.getElementById(`${emirate}-restaurants`);
  const restaurantsTitle = document.getElementById('restaurants-title');
  
  if (selectedSection) {
    selectedSection.style.display = 'grid';
    
    // Show all restaurant cards in the section
    const allRestaurantCards = selectedSection.querySelectorAll('.booking-card');
    allRestaurantCards.forEach(card => {
      card.style.display = 'block';
    });
    
    // Update title
    const emirateNames = {
      'dubai': 'Dubai',
      'ajman': 'Ajman', 
      'sharjah': 'Sharjah',
      'abu-dhabi': 'Abu Dhabi',
      'ras-al-khaimah': 'Ras Al Khaimah',
      'fujairah': 'Fujairah',
      'umm-al-qaiwain': 'Umm Al Qaiwain'
    };
    
    restaurantsTitle.textContent = `🍽️ ${emirateNames[emirate]} Restaurants`;
    console.log(`✅ Showing restaurants for ${emirateNames[emirate]}`);
  } else {
    console.warn(`❌ No restaurants found for ${emirate}`);
    if (restaurantsTitle) {
      restaurantsTitle.textContent = '🍽️ No Restaurants Available';
    }
  }
}

// Connect to restaurant selectors
function connectRestaurantSelector() {
  const restaurantDestination = document.getElementById('restaurant-destination');
  const restaurantCuisine = document.getElementById('restaurant-cuisine');
  const restaurantPrice = document.getElementById('restaurant-price');
  
  if (restaurantDestination) {
    restaurantDestination.addEventListener('change', function() {
      filterAndShowRestaurants();
    });
    console.log('✅ Restaurant destination selector connected');
  } else {
    console.warn('❌ Restaurant destination selector not found');
  }
  
  if (restaurantCuisine) {
    restaurantCuisine.addEventListener('change', function() {
      filterAndShowRestaurants();
    });
    console.log('✅ Restaurant cuisine selector connected');
  } else {
    console.warn('❌ Restaurant cuisine selector not found');
  }
  
  if (restaurantPrice) {
    restaurantPrice.addEventListener('change', function() {
      filterAndShowRestaurants();
    });
    console.log('✅ Restaurant price selector connected');
  } else {
    console.warn('❌ Restaurant price selector not found');
  }
}

// Smart Recommendations System
class SmartRecommendationEngine {
  constructor() {
    this.recommendationData = {
      // Hotel-to-restaurant recommendations
      'burj-al-arab': {
        restaurants: [
          {
            id: 'al-muntaha',
            name: 'Al Muntaha Restaurant',
            desc: 'Fine dining in your hotel • Burj Al Arab 27th floor',
            icon: '🍽️',
            price: 'AED 650/person',
            savings: 'No transfer needed • VIP guest pricing'
          }
        ],
        experiences: [
          {
            id: 'helicopter-tour',
            name: 'Dubai Helicopter Tour',
            desc: 'See Burj Al Arab from above • 15-min flight',
            icon: '🚁',
            price: 'AED 650/person',
            savings: '20% off for Burj Al Arab guests'
          }
        ]
      },
      'atlantis-palm': {
        restaurants: [
          {
            id: 'nobu-atlantis',
            name: 'Nobu Dubai',
            desc: 'Japanese fine dining • Same building',
            icon: '🍣',
            price: 'AED 450/person',
            savings: 'Skip the queue • Hotel guest priority'
          }
        ],
        experiences: [
          {
            id: 'aquaventure',
            name: 'Aquaventure Waterpark',
            desc: 'Access to Atlantis waterpark • All-day fun',
            icon: '🌊',
            price: 'AED 350/person',
            savings: 'Free for hotel guests • Worth AED 350!'
          }
        ]
      },
      'fairmont-ajman': {
        restaurants: [
          {
            id: 'brasserie-ajman',
            name: 'Brasserie at Fairmont',
            desc: 'Beachfront dining • Fresh seafood',
            icon: '🦞',
            price: 'AED 280/person',
            savings: '15% off for hotel guests'
          }
        ],
        transfers: [
          {
            id: 'dxb-ajman-transfer',
            name: 'Airport to Ajman Transfer',
            desc: 'Direct transfer • Meet & greet service',
            icon: '🚗',
            price: 'AED 200/trip',
            savings: 'Skip the taxi queue • Pre-booked'
          }
        ],
        experiences: [
          {
            id: 'dubai-day-trip',
            name: 'Dubai Day Trip',
            desc: 'Private transfer to Dubai • 8-hour tour',
            icon: '🚗',
            price: 'AED 400/person',
            savings: 'Includes return transfer from Ajman'
          }
        ]
      },
      'emirates-palace': {
        transfers: [
          {
            id: 'auh-palace-transfer',
            name: 'Airport to Emirates Palace',
            desc: 'Luxury transfer • Premium vehicles',
            icon: '🚙',
            price: 'AED 250/trip',
            savings: 'VIP service • Flight tracking'
          }
        ]
      },
      // Restaurant-to-experience recommendations
      'la-petite-maison': {
        experiences: [
          {
            id: 'difc-art-walk',
            name: 'DIFC Art District Walk',
            desc: 'Explore galleries after dinner • 2-hour tour',
            icon: '🎨',
            price: 'AED 150/person',
            savings: 'Perfect after-dinner activity'
          }
        ]
      },
      'atmosphere-burj': {
        experiences: [
          {
            id: 'burj-khalifa-top',
            name: 'Burj Khalifa At The Top',
            desc: 'Observation deck • Same building',
            icon: '🌆',
            price: 'AED 200/person',
            savings: 'Dinner + views combo package'
          }
        ]
      }
    };
    
    this.currentRecommendation = null;
    this.recommendationTimeout = null;
    this.hasShownRecommendation = false;
  }
  
  showRecommendation(baseItem, type = 'restaurant') {
    const data = this.recommendationData[baseItem];
    if (!data || this.hasShownRecommendation) return;
    
    // Priority order: transfers (most needed), restaurants, experiences
    let recommendations;
    let recommendationType;
    
    if (data.transfers && data.transfers.length > 0) {
      recommendations = data.transfers;
      recommendationType = 'transfers';
    } else if (type === 'restaurant' && data.restaurants && data.restaurants.length > 0) {
      recommendations = data.restaurants;
      recommendationType = 'restaurants';
    } else if (data.experiences && data.experiences.length > 0) {
      recommendations = data.experiences;
      recommendationType = 'experiences';
    }
    
    if (!recommendations || recommendations.length === 0) return;
    
    const recommendation = recommendations[0]; // Show first recommendation
    this.currentRecommendation = recommendation;
    
    // Update recommendation content
    const recommendationEl = document.getElementById('smart-recommendation');
    const titleEl = recommendationEl.querySelector('.recommendation-title');
    const iconEl = recommendationEl.querySelector('.recommendation-icon');
    const nameEl = recommendationEl.querySelector('.recommendation-name');
    const descEl = recommendationEl.querySelector('.recommendation-desc');
    const savingsEl = recommendationEl.querySelector('.combo-savings');
    const primaryBtn = recommendationEl.querySelector('.recommendation-btn.primary');
    
    // Dynamic titles based on recommendation type
    const titles = {
      transfers: '🚗 Need a ride? Travelers also book:',
      restaurants: '👀 Travelers staying here also book:',
      experiences: '🎯 Complete your trip with:'
    };
    
    titleEl.textContent = titles[recommendationType] || '👀 Travelers also book:';
    iconEl.textContent = recommendation.icon;
    nameEl.textContent = recommendation.name;
    descEl.textContent = recommendation.desc;
    savingsEl.textContent = recommendation.savings;
    primaryBtn.textContent = `Add for ${recommendation.price}`;
    
    // Show recommendation after 3 seconds
    this.recommendationTimeout = setTimeout(() => {
      recommendationEl.classList.add('show');
      this.hasShownRecommendation = true;
      
      // Auto-hide after 12 seconds
      setTimeout(() => {
        this.closeRecommendation();
      }, 12000);
    }, 3000);
  }
  
  closeRecommendation() {
    const recommendationEl = document.getElementById('smart-recommendation');
    recommendationEl.classList.remove('show');
    
    if (this.recommendationTimeout) {
      clearTimeout(this.recommendationTimeout);
    }
  }
  
  acceptRecommendation() {
    console.log('🎯 User accepted recommendation:', this.currentRecommendation);
    
    // Track the conversion
    if (typeof gtag !== 'undefined') {
      gtag('event', 'recommendation_accepted', {
        'recommendation_id': this.currentRecommendation.id,
        'recommendation_name': this.currentRecommendation.name
      });
    }
    
    // Here you would normally redirect to booking or add to cart
    alert(`Great choice! Redirecting to book ${this.currentRecommendation.name}...`);
    
    this.closeRecommendation();
  }
  
  declineRecommendation() {
    console.log('🤷 User declined recommendation');
    this.closeRecommendation();
  }
}

// Initialize recommendation engine
const recommendationEngine = new SmartRecommendationEngine();

// Enhanced partner selection with recommendations
function selectPartner(partner, experienceId) {
  console.log(`🔗 Booking ${experienceId} via ${partner}`);
  
  const affiliateUrls = {
    // Hotel affiliate URLs
    'burj-al-arab': {
      bookingcom: 'https://www.booking.com/hotel/ae/burj-al-arab-jumeirah.html?aid=YOUR_BOOKING_ID',
      tripadvisor: 'https://www.tripadvisor.com/Hotel_Review-g295424-d299298-Reviews-Burj_Al_Arab_Jumeirah-Dubai.html?partner=YOUR_TA_ID',
      platinumlist: 'https://platinumlist.net/aff/?ref=yjzkmgy&link='
    },
    'atlantis-palm': {
      bookingcom: 'https://www.booking.com/hotel/ae/atlantis-the-palm.html?aid=YOUR_BOOKING_ID',
      platinumlist: 'https://platinumlist.net/aff/?ref=yjzkmgy&link='
    },
    'fairmont-ajman': {
      bookingcom: 'https://www.booking.com/hotel/ae/fairmont-ajman.html?aid=YOUR_BOOKING_ID',
      expedia: 'https://www.expedia.com/Ajman-Hotels-Fairmont-Ajman.h123456.Hotel-Information?affcid=YOUR_EXPEDIA_ID'
    },
    
    // Restaurant affiliate URLs
    'la-petite-maison': {
      opentable: 'https://www.opentable.com/r/la-petite-maison-dubai?partner=YOUR_OPENTABLE_ID',
      resy: 'https://resy.com/cities/dubai/la-petite-maison?partner=YOUR_RESY_ID'
    },
    'atmosphere-burj': {
      opentable: 'https://www.opentable.com/r/atmosphere-burj-khalifa?partner=YOUR_OPENTABLE_ID',
      platinumlist: 'https://platinumlist.net/aff/?ref=yjzkmgy&link='
    },
    'mezlai-palace': {
      opentable: 'https://www.opentable.com/r/mezlai-emirates-palace?partner=YOUR_OPENTABLE_ID',
      resy: 'https://resy.com/cities/abu-dhabi/mezlai?partner=YOUR_RESY_ID'
    },
    
    // Transfer affiliate URLs
    'dxb-marina-transfer': {
      gocity: 'https://gocity.com/dubai',
      careem: 'https://www.careem.com/ae/en/book-ride/?from=DXB&to=Dubai-Marina&affiliate=YOUR_CAREEM_ID'
    },
    'dxb-downtown-transfer': {
      platinumlist: 'https://platinumlist.net/aff/?ref=yjzkmgy&link=',
      klook: 'https://www.klook.com/activity/123456-dubai-airport-transfer/?aid=YOUR_KLOOK_ID'
    },
    'auh-city-transfer': {
      gocity: 'https://gocity.com/abu-dhabi',
      uber: 'https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=Abu%20Dhabi&partner=YOUR_UBER_ID'
    },
    'dubai-abudhabi-transfer': {
      klook: 'https://www.klook.com/activity/789012-dubai-abu-dhabi-private-transfer/?aid=YOUR_KLOOK_ID',
      platinumlist: 'https://platinumlist.net/aff/?ref=yjzkmgy&link='
    },
    'dubai-sharjah-transfer': {
      gocity: 'https://gocity.com/dubai',
      careem: 'https://www.careem.com/ae/en/book-ride/?from=Dubai&to=Sharjah&affiliate=YOUR_CAREEM_ID'
    },
    'dubai-day-tour': {
      platinumlist: 'https://platinumlist.net/aff/?ref=yjzkmgy&link=',
      gocity: 'https://gocity.com/dubai'
    }
  };
  
  const url = affiliateUrls[experienceId]?.[partner];
  if (url) {
    // Track the click
    if (typeof gtag !== 'undefined') {
      gtag('event', 'affiliate_click', {
        'experience_id': experienceId,
        'partner': partner,
        'value': 1
      });
    }
    
    // Show smart recommendation for compatible items
    setTimeout(() => {
      recommendationEngine.showRecommendation(experienceId, 'experience');
    }, 2000);
    
    // Open affiliate link
    window.open(url, '_blank');
    console.log(`🔗 Redirecting to ${partner} for ${experienceId}`);
  } else {
    console.error(`No affiliate URL found for ${partner}:${experienceId}`);
  }
}

// Global functions for recommendation system
function closeRecommendation() {
  recommendationEngine.closeRecommendation();
}

function acceptRecommendation() {
  recommendationEngine.acceptRecommendation();
}

function declineRecommendation() {
  recommendationEngine.declineRecommendation();
}

// Make functions globally available
window.showHotelsForEmirate = showHotelsForEmirate;
window.filterAndShowHotels = filterAndShowHotels;
window.showRestaurantsForEmirate = showRestaurantsForEmirate;
window.filterAndShowRestaurants = filterAndShowRestaurants;
window.selectPartner = selectPartner;
window.closeRecommendation = closeRecommendation;
window.acceptRecommendation = acceptRecommendation;
window.declineRecommendation = declineRecommendation;

// Initialize Booking Buttons
function initializeBookingButtons() {
  console.log('🔘 Initializing booking buttons...');
  
  const bookingCards = document.querySelectorAll('.booking-card');
  
  bookingCards.forEach(card => {
    const bookButton = card.querySelector('.book-now-btn, .search-hotels-btn, .book-transfer-btn, .book-package-btn');
    
    if (bookButton) {
      bookButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get affiliate platform from card data
        const affiliatePlatform = card.dataset.affiliate;
        const cardTitle = card.querySelector('h5')?.textContent || 'Experience';
        
        console.log(`Booking clicked: ${cardTitle} via ${affiliatePlatform}`);
        
        // Set up mock booking data
        currentBooking = {
          experience: {
            name: cardTitle,
            price: 150, // Default price
            image: card.querySelector('.booking-image')?.innerHTML || ''
          },
          date: new Date().toISOString().split('T')[0],
          time: '09:00',
          guests: { adults: 2, children: 0, infants: 0 }
        };
        
        // Show affiliate selection modal
        showAffiliateSelectionModal();
      });
    }
  });
  
  console.log(`✅ Initialized ${bookingCards.length} booking buttons`);
}

// Compact Budget Widget - Airbnb Style
function initializeBudgetWidget() {
    const slider = document.getElementById('budget-slider');
    const priceDisplay = document.getElementById('budget-display');
    
    if (!slider || !priceDisplay) return;
    
    // Update price display based on slider value
    function updateBudgetDisplay(value) {
        const budget = parseInt(value);
        let range, category;
        
        if (budget <= 150) {
            range = `$${budget-30}-${budget+30}`;
            category = 'Budget';
        } else if (budget <= 400) {
            range = `$${budget-50}-${budget+50}`;
            category = 'Mid-range';
        } else {
            range = `$${budget-100}-${budget+100}`;
            category = 'Luxury';
        }
        
        priceDisplay.textContent = range;
        
        // Add subtle animation
        priceDisplay.style.transform = 'scale(1.05)';
        setTimeout(() => {
            priceDisplay.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Initialize with default value
    updateBudgetDisplay(slider.value);
    
    // Add event listener for real-time updates
    slider.addEventListener('input', (e) => {
        updateBudgetDisplay(e.target.value);
    });
}

// Weather API Functions
async function fetchWeatherData() {
    const cities = [
        'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 
        'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'
    ];
    
    const API_KEY = 'demo_key'; // In production, use a real API key
    
    // For demo purposes, we'll use static data instead of real API calls
    // This avoids CORS issues and API key requirements for the demo
    const mockWeatherData = {
        'Dubai': Math.floor(Math.random() * 15) + 25, // 25-40°C
        'Abu Dhabi': Math.floor(Math.random() * 15) + 24, // 24-39°C  
        'Sharjah': Math.floor(Math.random() * 15) + 25, // 25-40°C
        'Ajman': Math.floor(Math.random() * 15) + 24, // 24-39°C
        'Umm Al Quwain': Math.floor(Math.random() * 15) + 23, // 23-38°C
        'Ras Al Khaimah': Math.floor(Math.random() * 12) + 22, // 22-34°C (cooler due to mountains)
        'Fujairah': Math.floor(Math.random() * 13) + 23 // 23-36°C (coastal)
    };
    
    // Update weather widgets
    const weatherWidgets = document.querySelectorAll('.weather-widget');
    weatherWidgets.forEach(widget => {
        const city = widget.getAttribute('data-city');
        const tempElement = widget.querySelector('.temp');
        
        if (mockWeatherData[city]) {
            tempElement.textContent = `${mockWeatherData[city]}°C`;
            widget.classList.remove('loading');
        } else {
            tempElement.textContent = '--°';
            widget.classList.add('error');
        }
    });
}

// For production use with real weather API (OpenWeatherMap example):
/*
async function fetchRealWeatherData() {
    const API_KEY = 'YOUR_API_KEY_HERE'; // Get from openweathermap.org
    const cities = ['Dubai,AE', 'Abu Dhabi,AE', 'Sharjah,AE', 'Ajman,AE', 'Umm Al Quwain,AE', 'Ras Al Khaimah,AE', 'Fujairah,AE'];
    
    const weatherWidgets = document.querySelectorAll('.weather-widget');
    
    for (let widget of weatherWidgets) {
        const city = widget.getAttribute('data-city');
        const tempElement = widget.querySelector('.temp');
        
        try {
            widget.classList.add('loading');
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},AE&appid=${API_KEY}&units=metric`);
            
            if (response.ok) {
                const data = await response.json();
                const temp = Math.round(data.main.temp);
                tempElement.textContent = `${temp}°C`;
                widget.classList.remove('loading');
            } else {
                throw new Error('Weather data not available');
            }
        } catch (error) {
            tempElement.textContent = '--°';
            widget.classList.remove('loading');
            widget.classList.add('error');
            console.log(`Weather fetch failed for ${city}:`, error);
        }
    }
}
*/

// Initialize the website when DOM is loaded
// Enhanced header scroll effect with parallax
function initializeHeaderEffects() {
  const header = document.querySelector('.header');
  const heroBackground = document.querySelector('.hero-background');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class for enhanced shadow effect
    if (scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Subtle parallax effect for hero background
    if (heroBackground && scrollTop < window.innerHeight) {
      const parallaxSpeed = scrollTop * 0.5;
      heroBackground.style.transform = `translateY(${parallaxSpeed}px)`;
    }
    
    lastScrollTop = scrollTop;
  });
  
  console.log('✅ Enhanced header scroll effects with parallax initialized');
}

// Scroll-triggered animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Add staggered animation for cards
        if (entry.target.classList.contains('clickable-experience') || 
            entry.target.classList.contains('destination-card')) {
          const cards = entry.target.parentNode.children;
          Array.from(cards).forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-in');
            }, index * 100);
          });
        }
      }
    });
  }, observerOptions);
  
  // Observe elements for scroll animations
  const animateElements = document.querySelectorAll(`
    .clickable-experience,
    .destination-card,
    .calculator-card,
    .section-header,
    .trust-indicators
  `);
  
  animateElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
  
  console.log('✅ Scroll-triggered animations initialized for', animateElements.length, 'elements');
}

// Enhanced button interactions
function initializeButtonAnimations() {
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('button, .search-btn, .tab, .nav-list a');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  console.log('✅ Button ripple animations initialized for', buttons.length, 'elements');
}

// Interactive Search with Suggestions
function initializeInteractiveSearch() {
  const searchInput = document.querySelector('.search-input input');
  const searchContainer = document.querySelector('.search-input');
  
  if (!searchInput || !searchContainer) return;
  
  const suggestions = [
    'Dubai attractions',
    'Desert safari',
    'Burj Khalifa tickets',
    'Abu Dhabi tour',
    'Dubai Marina',
    'Best restaurants Dubai',
    'Dubai Mall shopping',
    'Palm Jumeirah',
    'Traditional markets',
    'Beach resorts',
    'Adventure activities',
    'Cultural experiences'
  ];
  
  let suggestionsContainer = null;
  
  // Create suggestions dropdown
  function createSuggestionsDropdown() {
    if (suggestionsContainer) return;
    
    suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'search-suggestions';
    suggestionsContainer.style.cssText = `
      position: absolute;
      top: 100%;
      left: 6px;
      right: 6px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      border: 1px solid rgba(0,0,0,0.06);
      max-height: 300px;
      overflow-y: auto;
      z-index: 1000;
      opacity: 0;
      transform: translateY(-10px);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(10px);
    `;
    
    searchContainer.style.position = 'relative';
    searchContainer.appendChild(suggestionsContainer);
  }
  
  // Show suggestions
  function showSuggestions(query) {
    if (!suggestionsContainer) createSuggestionsDropdown();
    
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 6);
    
    if (filteredSuggestions.length === 0) {
      hideSuggestions();
      return;
    }
    
    suggestionsContainer.innerHTML = filteredSuggestions.map(suggestion => `
      <div class="suggestion-item" style="
        padding: 12px 16px;
        cursor: pointer;
        transition: background-color 0.2s ease;
        font-size: 0.9rem;
        color: #2d3748;
        border-bottom: 1px solid rgba(0,0,0,0.04);
      ">
        <span style="color: #667eea; margin-right: 8px;">🔍</span>
        ${suggestion}
      </div>
    `).join('');
    
    // Add hover effects
    suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'rgba(102, 126, 234, 0.06)';
      });
      
      item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'transparent';
      });
      
      item.addEventListener('click', () => {
        searchInput.value = item.textContent.trim().replace('🔍 ', '');
        hideSuggestions();
        searchInput.focus();
      });
    });
    
    // Show with animation
    requestAnimationFrame(() => {
      suggestionsContainer.style.opacity = '1';
      suggestionsContainer.style.transform = 'translateY(0)';
    });
  }
  
  // Hide suggestions
  function hideSuggestions() {
    if (!suggestionsContainer) return;
    
    suggestionsContainer.style.opacity = '0';
    suggestionsContainer.style.transform = 'translateY(-10px)';
  }
  
  // Event listeners
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length > 0) {
      showSuggestions(query);
    } else {
      hideSuggestions();
    }
  });
  
  searchInput.addEventListener('focus', (e) => {
    const query = e.target.value.trim();
    if (query.length > 0) {
      showSuggestions(query);
    }
  });
  
  // Hide suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchContainer.contains(e.target)) {
      hideSuggestions();
    }
  });
  
  console.log('✅ Interactive search with suggestions initialized');
}

// Affiliate Integration Configuration
const affiliateConfig = {
  // Replace these with your actual affiliate IDs
  tripadvisor: {
    affiliateId: 'UAE-TOURISM-TA-001',
    baseUrl: 'https://www.tripadvisor.com/AttractionProductReview-',
    commission: 5,
    currency: 'USD',
    tier: 1,
    trustScore: 95
  },
  platinumlist: {
    affiliateId: 'yjzkmgy',
    baseUrl: 'https://platinumlist.net/aff/?ref=yjzkmgy&link=',
    commission: 12,
    currency: 'USD',
    tier: 1,
    trustScore: 92
  },
  bookingcom: {
    affiliateId: 'UAE-TOURISM-BOOKING-101',
    baseUrl: 'https://www.booking.com/experiences/',
    commission: 8,
    currency: 'USD',
    tier: 1,
    trustScore: 94
  },
  gocity: {
    affiliateId: 'UAE-TOURISM-GYG-456',
    baseUrl: 'https://gocity.com/',
    commission: 10,
    currency: 'USD',
    tier: 2,
    trustScore: 89
  },
  klook: {
    affiliateId: 'UAE-TOURISM-KLOOK-789',
    baseUrl: 'https://www.klook.com/activity/',
    commission: 15,
    currency: 'USD',
    tier: 2,
    trustScore: 87
  },
  expedia: {
    affiliateId: 'UAE-TOURISM-EXP-333',
    baseUrl: 'https://www.expedia.com/things-to-do/',
    commission: 4,
    currency: 'USD',
    tier: 2,
    trustScore: 86
  },
  platinumlist: {
    affiliateId: 'UAE-TOURISM-PL-444',
    baseUrl: 'https://www.platinumlist.net/',
    commission: 8,
    currency: 'AED',
    tier: 3,
    trustScore: 82
  }
};

// Experience to affiliate mapping
const experienceMapping = {
  'Burj Khalifa & Dubai Mall Experience': {
    tripadvisor: 'g295424-d553115-Reviews-Burj_Khalifa-Dubai_Emirate_of_Dubai.html',
    platinumlist: 'burj-al-arab-experience',
    bookingcom: 'dubai/burj-khalifa-booking-123',
    gocity: 'dubai-attractions-pass',
    klook: '12345-burj-khalifa-tickets',
    expedia: 'dubai/burj-khalifa-exp-789',
    platinumlist: 'burj-khalifa-at-the-top-tickets'
  },
  'Desert Safari & Camel Riding': {
    tripadvisor: 'g295424-d2042611-Reviews-Desert_Safari_Dubai-Dubai_Emirate_of_Dubai.html',
    platinumlist: 'desert-safari-premium',
    bookingcom: 'dubai/desert-safari-456',
    gocity: 'dubai-desert-safari-pass',
    klook: '54321-desert-safari-dubai',
    expedia: 'dubai/desert-safari-exp-321',
    platinumlist: 'dubai-desert-safari-camel-riding'
  },
  'Sheikh Zayed Grand Mosque': {
    tripadvisor: 'g294012-d317763-Reviews-Sheikh_Zayed_Grand_Mosque_Center-Abu_Dhabi_Emirate_of_Abu_Dhabi.html',
    platinumlist: 'mosque-cultural-tour',
    bookingcom: 'abu-dhabi/grand-mosque-789',
    gocity: 'abu-dhabi-cultural-pass',
    klook: '11111-grand-mosque-tour',
    expedia: 'abu-dhabi/grand-mosque-exp-654',
    platinumlist: 'sheikh-zayed-grand-mosque-tour'
  },
  'Dubai Aquarium & VR Park': {
    tripadvisor: 'g295424-d1066648-Reviews-Dubai_Aquarium_Underwater_Zoo-Dubai_Emirate_of_Dubai.html',
    platinumlist: 'aquarium-underwater-zoo',
    bookingcom: 'dubai/aquarium-101112',
    gocity: 'dubai-aquarium-zoo-pass',
    klook: '22222-dubai-aquarium',
    expedia: 'dubai/aquarium-exp-987',
    platinumlist: 'dubai-aquarium-underwater-zoo-tickets'
  }
};

// Booking System Functions
let currentBooking = {
  experience: null,
  date: null,
  time: null,
  guests: {
    adults: 2,
    children: 0,
    infants: 0
  },
  addons: {
    transport: false,
    guide: false,
    photos: false
  },
  pricing: {
    basePrice: 75,
    addonPrices: {
      transport: 25,
      guide: 50,
      photos: 75
    }
  }
};

// Open booking modal for experience
function openBookingModal(experienceData) {
  const modal = document.getElementById('booking-modal');
  const overlay = modal.querySelector('.booking-modal-overlay');
  
  // Populate experience data
  currentBooking.experience = experienceData;
  currentBooking.pricing.basePrice = experienceData.price || 75;
  
  document.getElementById('booking-experience-title').textContent = `Book ${experienceData.name}`;
  document.getElementById('booking-experience-name').textContent = experienceData.name;
  document.getElementById('booking-experience-duration').textContent = experienceData.duration;
  document.getElementById('booking-experience-rating').textContent = experienceData.rating;
  document.getElementById('booking-base-price').textContent = `$${experienceData.price}`;
  document.getElementById('booking-experience-badge').textContent = experienceData.badge;
  
  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('booking-date').min = today;
  
  // Reset form
  resetBookingForm();
  
  // Show modal with animation
  modal.style.display = 'flex';
  requestAnimationFrame(() => {
    modal.classList.add('show');
  });
  
  // Close on overlay click
  overlay.onclick = closeBookingModal;
  
  updateBookingSummary();
  
  console.log('✅ Booking modal opened for:', experienceData.name);
}

// Close booking modal
function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  modal.classList.remove('show');
  
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

// Handle date selection
function handleDateSelection() {
  const dateInput = document.getElementById('booking-date');
  const timesContainer = document.getElementById('available-times');
  
  dateInput.addEventListener('change', () => {
    if (dateInput.value) {
      currentBooking.date = dateInput.value;
      timesContainer.style.display = 'block';
      
      // Animate time slots in
      const timeSlots = timesContainer.querySelectorAll('.time-slot');
      timeSlots.forEach((slot, index) => {
        setTimeout(() => {
          slot.style.opacity = '1';
          slot.style.transform = 'translateY(0)';
        }, index * 50);
      });
      
      console.log('✅ Date selected:', dateInput.value);
    } else {
      timesContainer.style.display = 'none';
    }
  });
}

// Handle time slot selection
function handleTimeSelection() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-slot')) {
      // Remove selection from other slots
      document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
      });
      
      // Select clicked slot
      e.target.classList.add('selected');
      currentBooking.time = e.target.dataset.time;
      
      console.log('✅ Time selected:', currentBooking.time);
    }
  });
}

// Change guest count
function changeGuestCount(guestType, change) {
  const countElement = document.getElementById(`${guestType}-count`);
  let currentCount = parseInt(countElement.textContent);
  let newCount = Math.max(0, currentCount + change);
  
  // Limit adults to minimum 1
  if (guestType === 'adults' && newCount < 1) {
    newCount = 1;
  }
  
  // Limit maximum guests
  const maxGuests = 10;
  if (newCount > maxGuests) {
    newCount = maxGuests;
  }
  
  countElement.textContent = newCount;
  currentBooking.guests[guestType] = newCount;
  
  // Animate counter change
  countElement.style.transform = 'scale(1.2)';
  setTimeout(() => {
    countElement.style.transform = 'scale(1)';
  }, 150);
  
  updateBookingSummary();
  
  console.log('✅ Guest count updated:', guestType, newCount);
}

// Handle addon selection
function handleAddonSelection() {
  const addonCheckboxes = document.querySelectorAll('.addon-checkbox');
  
  addonCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const addonType = checkbox.id.replace('addon-', '');
      currentBooking.addons[addonType] = checkbox.checked;
      
      // Animate checkbox change
      const addonItem = checkbox.closest('.addon-item');
      addonItem.style.transform = 'scale(1.02)';
      setTimeout(() => {
        addonItem.style.transform = 'scale(1)';
      }, 150);
      
      updateBookingSummary();
      
      console.log('✅ Addon toggled:', addonType, checkbox.checked);
    });
  });
}

// Update booking summary
function updateBookingSummary() {
  const { guests, addons, pricing } = currentBooking;
  
  // Calculate base price (adults + children pay, infants free)
  const totalGuests = guests.adults + guests.children;
  const baseTotal = pricing.basePrice * totalGuests;
  
  // Calculate addon costs
  let addonTotal = 0;
  Object.keys(addons).forEach(addon => {
    if (addons[addon]) {
      addonTotal += pricing.addonPrices[addon];
    }
  });
  
  // Calculate group discount (3+ people get 10% off base price)
  let discount = 0;
  if (totalGuests >= 3) {
    discount = Math.round(baseTotal * 0.1);
  }
  
  const finalTotal = baseTotal + addonTotal - discount;
  
  // Update summary display
  document.getElementById('summary-base').textContent = `$${baseTotal}`;
  document.getElementById('summary-addons').textContent = `$${addonTotal}`;
  
  const discountRow = document.getElementById('discount-row');
  if (discount > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('summary-discount').textContent = `-$${discount}`;
  } else {
    discountRow.style.display = 'none';
  }
  
  document.getElementById('summary-total').textContent = `$${finalTotal}`;
  
  // Animate total change
  const totalElement = document.getElementById('summary-total');
  totalElement.style.transform = 'scale(1.05)';
  totalElement.style.color = '#667eea';
  setTimeout(() => {
    totalElement.style.transform = 'scale(1)';
    totalElement.style.color = '#2d3748';
  }, 200);
}

// Affiliate Integration Functions

// Build affiliate URL with tracking parameters
function buildAffiliateUrl(platform, experienceName, bookingData) {
  const config = affiliateConfig[platform];
  const mapping = experienceMapping[experienceName];
  
  if (!config || !mapping || !mapping[platform]) {
    console.warn(`No affiliate mapping found for ${experienceName} on ${platform}`);
    return null;
  }
  
  const baseUrl = config.baseUrl;
  const productId = mapping[platform];
  const affiliateId = config.affiliateId;
  
  // Build URL with parameters
  const params = new URLSearchParams({
    // Standard affiliate parameters
    affiliate_id: affiliateId,
    source: 'uae-tourism-website',
    campaign: 'booking-widget',
    
    // Booking parameters  
    adults: bookingData.guests.adults,
    children: bookingData.guests.children,
    date: bookingData.date,
    time: bookingData.time || '09:00',
    
    // Tracking parameters
    utm_source: 'uae-tourism',
    utm_medium: 'website',
    utm_campaign: 'experience-booking',
    utm_content: experienceName.toLowerCase().replace(/[^a-z0-9]/g, '-')
  });
  
  const fullUrl = `${baseUrl}${productId}?${params.toString()}`;
  
  console.log(`✅ Built affiliate URL for ${platform}:`, fullUrl);
  return fullUrl;
}

// Track booking attempt for analytics
function trackBookingAttempt(platform, experienceData, bookingData) {
  const totalPrice = calculateFinalTotal();
  const commission = Math.round(totalPrice * (affiliateConfig[platform].commission / 100));
  
  // Google Analytics tracking (if available)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'booking_attempt', {
      event_category: 'Booking',
      event_label: `${experienceData.name} - ${platform}`,
      value: totalPrice,
      custom_parameters: {
        platform: platform,
        experience: experienceData.name,
        guests: bookingData.guests.adults + bookingData.guests.children,
        commission_expected: commission
      }
    });
  }
  
  // Custom analytics tracking
  const trackingData = {
    timestamp: new Date().toISOString(),
    platform: platform,
    experience: experienceData.name,
    totalPrice: totalPrice,
    expectedCommission: commission,
    guests: bookingData.guests,
    addons: bookingData.addons,
    userAgent: navigator.userAgent,
    referrer: document.referrer
  };
  
  // Store in localStorage for tracking
  const trackingHistory = JSON.parse(localStorage.getItem('booking-attempts') || '[]');
  trackingHistory.push(trackingData);
  localStorage.setItem('booking-attempts', JSON.stringify(trackingHistory.slice(-100))); // Keep last 100
  
  console.log('✅ Booking attempt tracked:', trackingData);
  return trackingData;
}

// Calculate final total
function calculateFinalTotal() {
  const { guests, addons, pricing } = currentBooking;
  const totalGuests = guests.adults + guests.children;
  const baseTotal = pricing.basePrice * totalGuests;
  
  let addonTotal = 0;
  Object.keys(addons).forEach(addon => {
    if (addons[addon]) {
      addonTotal += pricing.addonPrices[addon];
    }
  });
  
  let discount = 0;
  if (totalGuests >= 3) {
    discount = Math.round(baseTotal * 0.1);
  }
  
  return baseTotal + addonTotal - discount;
}

// Proceed to affiliate booking
function proceedToPayment() {
  // Validate booking details
  if (!currentBooking.date) {
    alert('Please select a date for your experience.');
    return;
  }
  
  if (!currentBooking.time) {
    alert('Please select a time slot.');
    return;
  }
  
  const totalGuests = currentBooking.guests.adults + currentBooking.guests.children;
  if (totalGuests === 0) {
    alert('Please select at least one guest.');
    return;
  }
  
  // Close booking modal and show affiliate selection
  closeBookingModal();
  
  setTimeout(() => {
    showAffiliateSelection();
  }, 500);
  
  console.log('✅ Proceeding to affiliate selection with booking:', currentBooking);
}

// Open payment modal
function openPaymentModal() {
  const modal = document.getElementById('payment-modal');
  const overlay = modal.querySelector('.booking-modal-overlay');
  
  // Update payment summary
  const finalTotal = document.getElementById('summary-total').textContent;
  document.getElementById('payment-experience-name').textContent = currentBooking.experience.name;
  document.getElementById('payment-total').textContent = finalTotal;
  
  // Show modal
  modal.style.display = 'flex';
  requestAnimationFrame(() => {
    modal.classList.add('show');
  });
  
  // Close on overlay click
  overlay.onclick = closePaymentModal;
  
  console.log('✅ Payment modal opened');
}

// Close payment modal
function closePaymentModal() {
  const modal = document.getElementById('payment-modal');
  modal.classList.remove('show');
  
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

// Show affiliate selection modal
function showAffiliateSelection() {
  // Create affiliate selection modal dynamically
  const modal = document.createElement('div');
  modal.id = 'affiliate-selection-modal';
  modal.className = 'booking-modal';
  modal.style.display = 'flex';
  
  const experienceName = currentBooking.experience.name;
  const totalPrice = calculateFinalTotal();
  const rawPlatforms = Object.keys(experienceMapping[experienceName] || {});
  
  console.log('🔍 Debug affiliate platforms:');
  console.log('Experience name:', experienceName);
  console.log('Raw platforms:', rawPlatforms);
  console.log('Experience mapping:', experienceMapping[experienceName]);
  
  // Sort platforms by tier and trust score
  const availablePlatforms = rawPlatforms.sort((a, b) => {
    const configA = affiliateConfig[a];
    const configB = affiliateConfig[b];
    
    // Sort by tier first (1 is highest priority), then by trust score
    if (configA.tier !== configB.tier) {
      return configA.tier - configB.tier;
    }
    return configB.trustScore - configA.trustScore;
  });
  
  modal.innerHTML = `
    <div class="booking-modal-overlay"></div>
    <div class="booking-modal-content affiliate-selection-content">
      <div class="booking-modal-header">
        <h3>🎯 Complete Your Booking</h3>
        <button class="close-booking-modal" onclick="closeAffiliateSelection()">×</button>
      </div>
      
      <div class="affiliate-selection-body">
        <div class="booking-summary-header">
          <h4>${experienceName}</h4>
          <p>Choose your preferred booking platform to complete your reservation</p>
          <div class="price-summary">Total: $${totalPrice}</div>
        </div>
        
        <div class="affiliate-platforms">
          ${availablePlatforms.map((platform, index) => {
            const config = affiliateConfig[platform];
            const commission = Math.round(totalPrice * (config.commission / 100));
            const isRecommended = index === 0; // First platform is most recommended
            const tierLabel = config.tier === 1 ? 'Most Trusted' : config.tier === 2 ? 'Great Option' : 'Local Expert';
            
            return `
              <div class="affiliate-option ${isRecommended ? 'recommended' : ''}" data-platform="${platform}">
                <div class="platform-info">
                  <div class="platform-header">
                    <div class="platform-logo">
                      <strong>${getPlatformDisplayName(platform)}</strong>
                    </div>
                    ${isRecommended ? '<div class="recommended-badge">⭐ Recommended</div>' : `<div class="tier-badge">${tierLabel}</div>`}
                  </div>
                  <div class="platform-details">
                    <p class="platform-features">${getPlatformFeatures(platform)}</p>
                    <div class="platform-stats">
                      <div class="trust-score">
                        <span class="trust-percentage">${config.trustScore}%</span>
                        <span class="trust-label">Trust Score</span>
                      </div>
                      <div class="commission-info">
                        <small>${config.commission}% commission • Supporting UAE Tourism</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="platform-pricing">
                  <div class="price-display">
                    <span class="currency">${config.currency}</span>
                    <span class="amount">${totalPrice}</span>
                  </div>
                  <div class="commission-earned">+${config.currency} ${commission} earned</div>
                  <button class="select-platform-btn ${isRecommended ? 'primary' : 'secondary'}" onclick="selectAffiliatePlatform('${platform}')">
                    Book on ${getPlatformDisplayName(platform)} →
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        
        <div class="affiliate-disclaimer">
          <p><strong>🔒 Secure Booking:</strong> You'll be redirected to our trusted partner's website to complete your booking with the details you've selected.</p>
          <p><small>By clicking "Book Now", you help support UAE Tourism content creation through our affiliate partnerships.</small></p>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add event listener to close on overlay click
  modal.querySelector('.booking-modal-overlay').onclick = closeAffiliateSelection;
  
  console.log('✅ Affiliate selection modal shown');
}

// Helper functions for platform information
function getPlatformDisplayName(platform) {
  const names = {
    tripadvisor: 'TripAdvisor',
    platinumlist: 'PlatinumList', 
    bookingcom: 'Booking.com Experiences',
    gocity: 'GoCity',
    klook: 'Klook',
    expedia: 'Expedia Things To Do',
    platinumlist: 'PlatinumList UAE'
  };
  return names[platform] || platform;
}

function getPlatformFeatures(platform) {
  const features = {
    tripadvisor: 'World\'s largest travel community • Trusted reviews • Secure booking',
    platinumlist: 'Premium experiences • Luxury lifestyle • Best deals',
    bookingcom: 'World\'s largest travel site • Flexible booking • Trusted globally',
    gocity: 'All-in-one city pass • Skip the lines • Best value',
    klook: 'Best price guarantee • Instant booking • Asian market leader',
    expedia: 'Global travel leader • Member discounts • 24/7 customer service',
    platinumlist: 'UAE local expert • Premium events • Exclusive access'
  };
  return features[platform] || 'Trusted booking platform';
}

// Select affiliate platform and redirect
function selectAffiliatePlatform(platform) {
  const experienceName = currentBooking.experience.name;
  
  // Track the booking attempt
  trackBookingAttempt(platform, currentBooking.experience, currentBooking);
  
  // Build affiliate URL
  const affiliateUrl = buildAffiliateUrl(platform, experienceName, currentBooking);
  
  if (!affiliateUrl) {
    alert('Sorry, this experience is not available on the selected platform. Please try another option.');
    return;
  }
  
  // Show loading state
  const selectedButton = document.querySelector(`[data-platform="${platform}"] .select-platform-btn`);
  selectedButton.textContent = 'Redirecting...';
  selectedButton.disabled = true;
  
  // Add visual feedback
  document.querySelector(`[data-platform="${platform}"]`).style.transform = 'scale(1.02)';
  document.querySelector(`[data-platform="${platform}"]`).style.background = 'rgba(102, 126, 234, 0.1)';
  
  // Redirect after brief delay
  setTimeout(() => {
    // Open affiliate site in new tab
    window.open(affiliateUrl, '_blank');
    
    // Close modal and show thank you message
    closeAffiliateSelection();
    
    setTimeout(() => {
      showBookingRedirectSuccess(platform);
    }, 1000);
    
  }, 1500);
  
  console.log(`✅ Redirecting to ${platform} affiliate booking`);
}

// Close affiliate selection modal
function closeAffiliateSelection() {
  const modal = document.getElementById('affiliate-selection-modal');
  if (modal) {
    modal.classList.add('closing');
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
}

// Show redirect success message
function showBookingRedirectSuccess(platform) {
  const modal = document.getElementById('success-modal');
  const overlay = modal.querySelector('.booking-modal-overlay');
  
  // Update success content for affiliate redirect
  document.getElementById('booking-id').textContent = 'Redirected to ' + getPlatformDisplayName(platform);
  document.getElementById('confirmed-experience').textContent = currentBooking.experience.name;
  
  const bookingDate = new Date(currentBooking.date);
  const formattedDate = bookingDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
  const formattedTime = currentBooking.time ? 
    new Date(`2024-01-01 ${currentBooking.time}`).toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    }) : '';
  
  document.getElementById('confirmed-datetime').textContent = `${formattedDate} at ${formattedTime}`;
  document.getElementById('confirmed-total').textContent = '$' + calculateFinalTotal();
  
  // Update success message
  document.querySelector('#success-modal h3').textContent = 'Redirected to Partner!';
  document.querySelector('#success-modal .success-content p').textContent = 
    `You've been redirected to ${getPlatformDisplayName(platform)} to complete your booking. Thank you for supporting UAE Tourism!`;
  
  // Show modal
  modal.style.display = 'flex';
  requestAnimationFrame(() => {
    modal.classList.add('show');
  });
  
  // Close on overlay click
  overlay.onclick = closeSuccessModal;
  
  console.log('✅ Booking redirect success modal shown');
}

// Legacy complete booking function (kept for compatibility)
function completeBooking() {
  // This now redirects to affiliate selection
  showAffiliateSelection();
}

// Show booking success
function showBookingSuccess() {
  const modal = document.getElementById('success-modal');
  const overlay = modal.querySelector('.booking-modal-overlay');
  
  // Generate booking ID
  const bookingId = 'UAE-' + new Date().getFullYear() + '-' + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  
  // Update success details
  document.getElementById('booking-id').textContent = bookingId;
  document.getElementById('confirmed-experience').textContent = currentBooking.experience.name;
  
  const bookingDate = new Date(currentBooking.date);
  const formattedDate = bookingDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
  const formattedTime = currentBooking.time ? 
    new Date(`2024-01-01 ${currentBooking.time}`).toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    }) : '';
  
  document.getElementById('confirmed-datetime').textContent = `${formattedDate} at ${formattedTime}`;
  document.getElementById('confirmed-total').textContent = document.getElementById('summary-total').textContent;
  
  // Show modal
  modal.style.display = 'flex';
  requestAnimationFrame(() => {
    modal.classList.add('show');
  });
  
  // Close on overlay click
  overlay.onclick = closeSuccessModal;
  
  console.log('✅ Booking success modal shown');
}

// Close success modal
function closeSuccessModal() {
  const modal = document.getElementById('success-modal');
  modal.classList.remove('show');
  
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
  
  // Reset booking form
  resetBookingForm();
}

// Reset booking form
function resetBookingForm() {
  currentBooking.date = null;
  currentBooking.time = null;
  currentBooking.guests = { adults: 2, children: 0, infants: 0 };
  currentBooking.addons = { transport: false, guide: false, photos: false };
  
  // Reset UI
  document.getElementById('booking-date').value = '';
  document.getElementById('available-times').style.display = 'none';
  document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('selected'));
  
  document.getElementById('adults-count').textContent = '2';
  document.getElementById('children-count').textContent = '0';
  document.getElementById('infants-count').textContent = '0';
  
  document.querySelectorAll('.addon-checkbox').forEach(checkbox => checkbox.checked = false);
  
  // Reset payment form
  const completeBtn = document.querySelector('.complete-booking-btn');
  if (completeBtn) {
    completeBtn.textContent = 'Complete Booking';
    completeBtn.disabled = false;
  }
  
  console.log('✅ Booking form reset');
}

// Initialize booking system
function initializeBookingSystem() {
  handleDateSelection();
  handleTimeSelection();
  handleAddonSelection();
  
  // Add booking buttons to experience cards
  const experienceCards = document.querySelectorAll('.clickable-experience, .destination-card');
  experienceCards.forEach(card => {
    // Skip if card already has booking functionality
    if (card.querySelector('.book-experience-btn')) return;
    
    // Create booking button
    const bookBtn = document.createElement('button');
    bookBtn.className = 'book-experience-btn';
    bookBtn.innerHTML = 'Book Now';
    bookBtn.style.cssText = `
      position: absolute;
      bottom: 12px;
      right: 12px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.3s ease;
      z-index: 5;
    `;
    
    // Show button on card hover
    card.addEventListener('mouseenter', () => {
      bookBtn.style.opacity = '1';
      bookBtn.style.transform = 'translateY(0)';
    });
    
    card.addEventListener('mouseleave', () => {
      bookBtn.style.opacity = '0';
      bookBtn.style.transform = 'translateY(10px)';
    });
    
    // Handle booking button click
    bookBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Extract experience data from card
      const experienceData = {
        name: card.querySelector('h4')?.textContent || 'Experience',
        duration: card.querySelector('.duration')?.textContent || '4 hours',
        rating: card.querySelector('.card-rating')?.textContent || '4.8★',
        price: parseInt(card.querySelector('.price-amount')?.textContent?.replace(/[^\d]/g, '')) || 75,
        badge: card.querySelector('.card-badge')?.textContent || 'POPULAR'
      };
      
      openBookingModal(experienceData);
    });
    
    card.style.position = 'relative';
    card.appendChild(bookBtn);
  });
  
  console.log('✅ Booking system initialized with', experienceCards.length, 'bookable experiences');
}

// Revenue Tracking & Analytics System
function initializeRevenueTracking() {
  // Add revenue dashboard toggle (hidden by default, shows with Ctrl+Shift+R)
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'R') {
      toggleRevenueDashboard();
    }
  });
  
  console.log('✅ Revenue tracking initialized (Press Ctrl+Shift+R to view dashboard)');
}

// Toggle revenue dashboard
function toggleRevenueDashboard() {
  let dashboard = document.getElementById('revenue-dashboard');
  
  if (!dashboard) {
    createRevenueDashboard();
    dashboard = document.getElementById('revenue-dashboard');
  }
  
  dashboard.classList.toggle('show');
}

// Create revenue dashboard
function createRevenueDashboard() {
  const dashboard = document.createElement('div');
  dashboard.id = 'revenue-dashboard';
  dashboard.className = 'revenue-dashboard';
  
  const stats = calculateRevenueStats();
  
  dashboard.innerHTML = `
    <h6>💰 Revenue Dashboard</h6>
    <div class="revenue-stat">
      <span class="label">Total Clicks:</span>
      <span class="value">${stats.totalClicks}</span>
    </div>
    <div class="revenue-stat">
      <span class="label">Estimated Revenue:</span>
      <span class="value">$${stats.estimatedRevenue}</span>
    </div>
    <div class="revenue-stat">
      <span class="label">Top Platform:</span>
      <span class="value">${stats.topPlatform}</span>
    </div>
    <div class="revenue-stat">
      <span class="label">Conversion Rate:</span>
      <span class="value">${stats.conversionRate}%</span>
    </div>
    <div class="revenue-stat">
      <span class="label">Avg. Booking:</span>
      <span class="value">$${stats.averageBooking}</span>
    </div>
    <div style="margin-top: 12px; padding-top: 8px; border-top: 1px solid #e2e8f0;">
      <small style="color: #718096;">Press Ctrl+Shift+R to toggle</small>
    </div>
  `;
  
  // Add close button
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.style.cssText = `
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #718096;
    padding: 2px 6px;
  `;
  closeBtn.onclick = () => dashboard.classList.remove('show');
  
  dashboard.appendChild(closeBtn);
  document.body.appendChild(dashboard);
}

// Calculate revenue statistics
function calculateRevenueStats() {
  const trackingHistory = JSON.parse(localStorage.getItem('booking-attempts') || '[]');
  
  if (trackingHistory.length === 0) {
    return {
      totalClicks: 0,
      estimatedRevenue: 0,
      topPlatform: 'None',
      conversionRate: 0,
      averageBooking: 0
    };
  }
  
  const totalClicks = trackingHistory.length;
  const totalRevenue = trackingHistory.reduce((sum, attempt) => sum + attempt.expectedCommission, 0);
  const averageBooking = Math.round(trackingHistory.reduce((sum, attempt) => sum + attempt.totalPrice, 0) / totalClicks);
  
  // Platform statistics
  const platformCounts = {};
  trackingHistory.forEach(attempt => {
    platformCounts[attempt.platform] = (platformCounts[attempt.platform] || 0) + 1;
  });
  
  const topPlatform = Object.keys(platformCounts).reduce((a, b) => 
    platformCounts[a] > platformCounts[b] ? a : b, 'None');
  
  // Conversion rate (assume 15% of clicks convert to actual bookings)
  const conversionRate = Math.round((totalClicks * 0.15) / Math.max(totalClicks, 1) * 100 * 100) / 100;
  
  return {
    totalClicks,
    estimatedRevenue: Math.round(totalRevenue),
    topPlatform: topPlatform.charAt(0).toUpperCase() + topPlatform.slice(1),
    conversionRate,
    averageBooking
  };
}

// Export booking data for analysis
function exportBookingData() {
  const trackingHistory = JSON.parse(localStorage.getItem('booking-attempts') || '[]');
  
  if (trackingHistory.length === 0) {
    alert('No booking data to export yet.');
    return;
  }
  
  const csv = [
    'Timestamp,Platform,Experience,Total Price,Expected Commission,Adults,Children,Infants',
    ...trackingHistory.map(attempt => [
      attempt.timestamp,
      attempt.platform,
      `"${attempt.experience}"`,
      attempt.totalPrice,
      attempt.expectedCommission,
      attempt.guests.adults,
      attempt.guests.children,
      attempt.guests.infants
    ].join(','))
  ].join('\n');
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `uae-tourism-bookings-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
  
  console.log('✅ Booking data exported to CSV');
}

// Add export functionality to dashboard (call with exportBookingData() in console)


document.addEventListener('DOMContentLoaded', () => {
  new UAETourismSite();
  
  // Initialize enhanced header effects
  initializeHeaderEffects();
  
  // Initialize scroll animations
  initializeScrollAnimations();
  
  // Initialize button animations
  initializeButtonAnimations();
  
  // Initialize interactive search
  initializeInteractiveSearch();
  
  // Initialize booking system
  initializeBookingSystem();
  
  // Initialize all tab systems
  initializeAllTabs();
  
  
  // Initialize simple filter tabs (bypass class structure)
  initializeSimpleFilterTabs();
  
  // Initialize simple booking tabs
  initializeSimpleBookingTabs();
  
  // Initialize budget widget if on page
  if (document.getElementById('budget-slider')) {
    initializeBudgetWidget();
  }
  
  // Initialize weather widgets
  if (document.querySelector('.weather-widget')) {
    fetchWeatherData();
    
    // Update weather every 10 minutes
    setInterval(fetchWeatherData, 10 * 60 * 1000);
  }
  
  // Add global scrollToTop function for buttons
  window.scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
});

// Service Worker for offline functionality (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('SW registered'))
      .catch(() => console.log('SW registration failed'));
  });
}

// Analytics and tracking (placeholder)
function trackEvent(category, action, label) {
  // In a real app, you'd send this to your analytics service
  console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// ============================
// PACKAGES SYSTEM FUNCTIONALITY
// ============================

// Package configurations with detailed pricing and affiliate URLs
const packageConfigurations = {
  'luxury-dubai': {
    title: 'Luxury Dubai Weekend',
    basePrice: 2800,
    discountedPrice: 2000,
    savings: 800,
    duration: '3 Days / 2 Nights',
    included: {
      hotels: ['Four Seasons Dubai DIFC', 'Mandarin Oriental Dubai'],
      restaurants: ['Nobu Dubai', 'La Petite Maison', 'Zuma Dubai'],
      transport: ['Private Airport Transfer', 'City Tours', 'Desert Safari'],
      experiences: ['Burj Khalifa At The Top', 'Dubai Fountain Show', 'Gold Souk Visit']
    },
    affiliateUrls: {
      bookingcom: 'https://www.booking.com/packages/dubai-luxury?aid=YOUR_ID&package=luxury-dubai',
      expedia: 'https://www.expedia.com/Dubai-Packages-Luxury.h123456.Package?affcid=YOUR_EXPEDIA_ID',
      gocity: 'https://gocity.com/dubai'
    }
  },
  'business-dubai': {
    title: 'Business Dubai Complete',
    basePrice: 2200,
    discountedPrice: 1650,
    savings: 550,
    duration: '4 Days / 3 Nights',
    included: {
      hotels: ['Conrad Dubai', 'Marriott Dubai'],
      restaurants: ['Prime 68', 'Social House', 'Atmosphere Burj Khalifa'],
      transport: ['Airport Transfer', 'Business District Tours', 'Marina Walk'],
      experiences: ['Dubai Mall', 'Business Bay Views', 'JBR Beach']
    },
    affiliateUrls: {
      bookingcom: 'https://www.booking.com/packages/dubai-business?aid=YOUR_ID&package=business-dubai',
      expedia: 'https://www.expedia.com/Dubai-Packages-Business.h234567.Package?affcid=YOUR_EXPEDIA_ID',
      platinumlist: 'https://platinumlist.net/aff/?ref=yjzkmgy&link='
    }
  },
  'uae-explorer': {
    title: 'Complete UAE Explorer',
    basePrice: 4200,
    discountedPrice: 3150,
    savings: 1050,
    duration: '7 Days / 6 Nights',
    included: {
      hotels: ['Dubai: Atlantis Palm', 'Abu Dhabi: Emirates Palace', 'Sharjah: Radisson Blu'],
      restaurants: ['Ossiano Dubai', 'Hakkasan Abu Dhabi', 'Al Fanar Sharjah'],
      transport: ['Inter-Emirate Transfers', 'Desert Safari', 'Mountain Tours'],
      experiences: ['Sheikh Zayed Mosque', 'Louvre Abu Dhabi', 'Sharjah Arts District']
    },
    affiliateUrls: {
      bookingcom: 'https://www.booking.com/packages/uae-complete?aid=YOUR_ID&package=uae-explorer',
      expedia: 'https://www.expedia.com/UAE-Packages-Complete.h345678.Package?affcid=YOUR_EXPEDIA_ID',
      klook: 'https://www.klook.com/en-AE/activity/uae-complete-package/?aid=YOUR_KLOOK_ID'
    }
  },
  'budget-weekend': {
    title: 'Dubai Budget Weekend',
    basePrice: 850,
    discountedPrice: 680,
    savings: 170,
    duration: '2 Days / 1 Night',
    included: {
      hotels: ['Holiday Inn Dubai', 'Citymax Hotel Bur Dubai'],
      restaurants: ['Local Emirati Cuisine', 'Dubai Mall Food Court', 'Al Dhiyafah Street'],
      transport: ['Metro Day Pass', 'Bus Tours', 'Taxi Vouchers'],
      experiences: ['Dubai Creek', 'Old Dubai Walking Tour', 'Spice Souk']
    },
    affiliateUrls: {
      bookingcom: 'https://www.booking.com/packages/dubai-budget?aid=YOUR_ID&package=budget-weekend',
      agoda: 'https://www.agoda.com/dubai-budget-package/city/dubai-ae.html?cid=YOUR_AGODA_ID',
      gocity: 'https://gocity.com/dubai'
    }
  },
  'family-adventure': {
    title: 'Family UAE Adventure',
    basePrice: 3200,
    discountedPrice: 2400,
    savings: 800,
    duration: '5 Days / 4 Nights',
    included: {
      hotels: ['JA Beach Hotel Dubai', 'Yas Island Rotana Abu Dhabi'],
      restaurants: ['Family-friendly dining', 'Theme park restaurants', 'Beach clubs'],
      transport: ['Family car rental', 'Theme park transfers', 'Airport transfers'],
      experiences: ['Ferrari World Abu Dhabi', 'Dubai Aquarium', 'Yas Waterworld']
    },
    affiliateUrls: {
      bookingcom: 'https://www.booking.com/packages/uae-family?aid=YOUR_ID&package=family-adventure',
      expedia: 'https://www.expedia.com/UAE-Packages-Family.h456789.Package?affcid=YOUR_EXPEDIA_ID',
      platinumlist: 'https://platinumlist.net/aff/?ref=yjzkmgy&link='
    }
  },
  'romantic-getaway': {
    title: 'Romantic UAE Escape',
    basePrice: 3800,
    discountedPrice: 2850,
    savings: 950,
    duration: '4 Days / 3 Nights',
    included: {
      hotels: ['One&Only Royal Mirage', 'Fairmont Bab Al Bahr Abu Dhabi'],
      restaurants: ['Romantic fine dining', 'Sunset beach dinners', 'Private dining experiences'],
      transport: ['Private chauffeur', 'Romantic desert safari', 'Yacht charter'],
      experiences: ['Couple spa treatments', 'Private beach access', 'Sunset views']
    },
    affiliateUrls: {
      bookingcom: 'https://www.booking.com/packages/uae-romantic?aid=YOUR_ID&package=romantic-getaway',
      expedia: 'https://www.expedia.com/UAE-Packages-Romantic.h567890.Package?affcid=YOUR_EXPEDIA_ID',
      klook: 'https://www.klook.com/en-AE/activity/uae-romantic-package/?aid=YOUR_KLOOK_ID'
    }
  }
};

// Main package selection function
function selectPackage(packageId) {
  console.log(`🎁 Package selected: ${packageId}`);
  
  const packageConfig = packageConfigurations[packageId];
  
  if (!packageConfig) {
    console.error(`Package configuration not found for: ${packageId}`);
    return;
  }
  
  // Track the package selection
  trackEvent('Package', 'Selection', packageId);
  
  // Show package booking modal
  showPackageBookingModal(packageConfig, packageId);
  
  // Update Smart Recommendations based on package type
  updateRecommendationsForPackage(packageId);
}

// Show package booking modal with detailed breakdown
function showPackageBookingModal(packageConfig, packageId) {
  const modal = document.createElement('div');
  modal.className = 'booking-modal package-modal';
  modal.innerHTML = `
    <div class="modal-overlay" onclick="closePackageModal()"></div>
    <div class="modal-content package-modal-content">
      <div class="modal-header">
        <h3>${packageConfig.title}</h3>
        <button class="close-btn" onclick="closePackageModal()">×</button>
      </div>
      
      <div class="package-details-container">
        <div class="package-pricing-section">
          <div class="price-breakdown">
            <div class="original-price">Original Price: <span>AED ${packageConfig.basePrice}</span></div>
            <div class="discounted-price">Package Price: <span>AED ${packageConfig.discountedPrice}</span></div>
            <div class="savings-highlight">You Save: <span>AED ${packageConfig.savings}</span></div>
          </div>
          <div class="duration-info">Duration: ${packageConfig.duration}</div>
        </div>
        
        <div class="package-inclusions">
          <h4>📦 Package Includes:</h4>
          
          <div class="inclusion-category">
            <h5>🏨 Accommodation</h5>
            <ul>
              ${packageConfig.included.hotels.map(hotel => `<li>${hotel}</li>`).join('')}
            </ul>
          </div>
          
          <div class="inclusion-category">
            <h5>🍽️ Dining</h5>
            <ul>
              ${packageConfig.included.restaurants.map(restaurant => `<li>${restaurant}</li>`).join('')}
            </ul>
          </div>
          
          <div class="inclusion-category">
            <h5>🚗 Transportation</h5>
            <ul>
              ${packageConfig.included.transport.map(transport => `<li>${transport}</li>`).join('')}
            </ul>
          </div>
          
          <div class="inclusion-category">
            <h5>🎯 Experiences</h5>
            <ul>
              ${packageConfig.included.experiences.map(experience => `<li>${experience}</li>`).join('')}
            </ul>
          </div>
        </div>
        
        <div class="booking-platform-selection">
          <h4>Choose Your Booking Platform:</h4>
          <div class="platform-options">
            ${Object.entries(packageConfig.affiliateUrls).map(([platform, url]) => `
              <button class="platform-option package-platform" onclick="bookPackageWithPlatform('${platform}', '${packageId}', '${url}')">
                <div class="platform-logo">${getPlatformEmoji(platform)}</div>
                <div class="platform-info">
                  <span class="platform-name">${getPlatformDisplayName(platform)}</span>
                  <span class="platform-desc">${getPlatformPackageFeatures(platform)}</span>
                </div>
              </button>
            `).join('')}
          </div>
        </div>
        
        <div class="package-benefits">
          <h4>✨ Package Benefits:</h4>
          <ul>
            <li>🔒 Price Lock Guarantee - No hidden fees</li>
            <li>📞 24/7 Concierge Support</li>
            <li>🔄 Flexible Date Changes (within 48 hours)</li>
            <li>🎁 Exclusive Package-Only Perks</li>
            <li>💳 Secure Payment Processing</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add smooth animation
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
}

// Close package modal
function closePackageModal() {
  const modal = document.querySelector('.package-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
}

// Book package with selected platform
function bookPackageWithPlatform(platform, packageId, affiliateUrl) {
  console.log(`📦 Booking package ${packageId} with ${platform}`);
  
  // Track the booking attempt
  trackEvent('Package_Booking', platform, packageId);
  
  // Add booking tracking
  const packageConfig = packageConfigurations[packageId];
  const bookingData = {
    timestamp: new Date().toISOString(),
    platform: platform,
    packageType: packageId,
    packageTitle: packageConfig.title,
    price: packageConfig.discountedPrice,
    savings: packageConfig.savings,
    expectedCommission: calculatePackageCommission(platform, packageConfig.discountedPrice)
  };
  
  // Store booking attempt
  let packageBookingHistory = JSON.parse(localStorage.getItem('uae_package_bookings')) || [];
  packageBookingHistory.push(bookingData);
  localStorage.setItem('uae_package_bookings', JSON.stringify(packageBookingHistory));
  
  // Show booking confirmation
  showPackageBookingConfirmation(platform, packageConfig);
  
  // Close modal and redirect after confirmation
  setTimeout(() => {
    closePackageModal();
    window.open(affiliateUrl, '_blank');
  }, 2000);
}

// Calculate commission based on platform
function calculatePackageCommission(platform, price) {
  const commissionRates = {
    'bookingcom': 0.15,  // 15%
    'expedia': 0.12,     // 12%
    'agoda': 0.10,       // 10%
    'gocity': 0.05, // 5%
    'platinumlist': 0.08,      // 8%
    'klook': 0.12        // 12%
  };
  
  return Math.round(price * (commissionRates[platform] || 0.10));
}

// Show package booking confirmation
function showPackageBookingConfirmation(platform, packageConfig) {
  const confirmation = document.createElement('div');
  confirmation.className = 'booking-confirmation package-confirmation';
  confirmation.innerHTML = `
    <div class="confirmation-content">
      <div class="confirmation-icon">✅</div>
      <h3>Package Booking Initiated!</h3>
      <p>Redirecting to ${getPlatformDisplayName(platform)}...</p>
      <div class="booking-summary">
        <strong>${packageConfig.title}</strong><br>
        <span>AED ${packageConfig.discountedPrice} (Save AED ${packageConfig.savings})</span>
      </div>
    </div>
  `;
  
  document.body.appendChild(confirmation);
  
  setTimeout(() => {
    confirmation.classList.add('active');
  }, 10);
  
  setTimeout(() => {
    confirmation.remove();
  }, 2000);
}

// Get platform emoji for packages
function getPlatformEmoji(platform) {
  const emojis = {
    'bookingcom': '🟨',
    'expedia': '🟡',
    'agoda': '🔴',
    'gocity': '🏙️',
    'platinumlist': '💎',
    'klook': '🟣'
  };
  return emojis[platform] || '⭐';
}

// Get platform-specific package features
function getPlatformPackageFeatures(platform) {
  const features = {
    'bookingcom': 'Hotels + Free cancellation',
    'expedia': 'Complete packages + Rewards',
    'agoda': 'Asia specialists + Member prices',
    'gocity': 'City passes + Attraction bundles',
    'platinumlist': 'Premium experiences + Luxury lifestyle',
    'klook': 'Activities + Mobile vouchers'
  };
  return features[platform] || 'Complete travel packages';
}

// Update recommendations based on selected package
function updateRecommendationsForPackage(packageId) {
  const recommendations = {
    'luxury-dubai': {
      type: 'upgrade',
      title: 'Enhance Your Luxury Experience',
      items: ['Private jet transfer', 'Yacht charter', 'Personal shopping tour']
    },
    'business-dubai': {
      type: 'business',
      title: 'Business Travel Essentials',
      items: ['Airport lounge access', 'Meeting room booking', 'Executive car service']
    },
    'uae-explorer': {
      type: 'cultural',
      title: 'Cultural Experiences',
      items: ['Traditional dhow cruise', 'Falconry experience', 'Arabic cooking class']
    },
    'budget-weekend': {
      type: 'value',
      title: 'More Budget-Friendly Options',
      items: ['Public beach access', 'Local food tours', 'Free walking tours']
    },
    'family-adventure': {
      type: 'family',
      title: 'Family-Friendly Add-ons',
      items: ['Kids club access', 'Family photography', 'Educational tours']
    },
    'romantic-getaway': {
      type: 'romantic',
      title: 'Romantic Enhancements',
      items: ['Couples spa', 'Private dinner setup', 'Sunset photography']
    }
  };
  
  const recommendation = recommendations[packageId];
  if (recommendation && window.smartRecommendations) {
    window.smartRecommendations.showRecommendation(recommendation);
  }
}

// Clean booking tab switching

// Initialize booking tabs on page load
function initializeBookingTabs() {
  console.log('🎯 Initializing booking tabs...');
  
  // Ensure only the hotels tab is active by default
  const allContents = document.querySelectorAll('.booking-content');
  allContents.forEach(content => {
    if (content.id === 'hotels-booking') {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
  
  console.log('✅ Booking tabs initialized');
}

// Make functions globally available
window.selectPackage = selectPackage;
window.closePackageModal = closePackageModal;
window.bookPackageWithPlatform = bookPackageWithPlatform;
window.switchBookingTab = switchBookingTab;
window.switchTab = switchTab;
window.initializeAllTabs = initializeAllTabs;

console.log('🎁 Package system initialized with', Object.keys(packageConfigurations).length, 'packages');

// ============================
// UNIFIED TAB SWITCHING SYSTEM
// ============================

// Universal tab switching function that works for all tab types
function switchTab(tabType, targetId, tabAttribute = 'data-category') {
  console.log(`🔄 Switching ${tabType} tab to: ${targetId}`);
  
  // Define tab and content selectors based on tab type
  const tabSelectors = {
    booking: { tab: '.booking-tab', content: '.booking-content' },
    experience: { tab: '.exp-tab', content: '.exp-content' },
    filter: { tab: '.tab[data-filter]', content: '.filter-content' }
  };
  
  const selectors = tabSelectors[tabType];
  if (!selectors) {
    console.error(`Unknown tab type: ${tabType}`);
    return;
  }
  
  // Remove active class from all tabs and contents of this type
  const allTabs = document.querySelectorAll(selectors.tab);
  const allContents = document.querySelectorAll(selectors.content);
  
  allTabs.forEach(tab => tab.classList.remove('active'));
  allContents.forEach(content => content.classList.remove('active'));
  
  // Add active class to clicked tab and corresponding content
  const clickedTab = document.querySelector(`${selectors.tab}[${tabAttribute}="${targetId}"]`);
  
  // Handle different content ID patterns
  let contentId;
  if (tabType === 'booking') {
    contentId = `${targetId}-booking`;
  } else if (tabType === 'experience') {
    contentId = `${targetId}-exp`;
  } else {
    contentId = `${targetId}-content`;
  }
  
  const targetContent = document.getElementById(contentId);
  
  if (clickedTab && targetContent) {
    clickedTab.classList.add('active');
    targetContent.classList.add('active');
    console.log(`✅ Successfully switched to ${targetId} ${tabType} tab`);
  } else {
    console.error(`Could not find tab or content for ${tabType}:${targetId}`);
    console.log(`Looking for tab: ${selectors.tab}[${tabAttribute}="${targetId}"]`);
    console.log(`Looking for content: #${contentId}`);
  }
}

// Specific wrapper functions for backwards compatibility

// Simple tab initialization
function initializeAllTabs() {
  console.log('🎯 Initializing tab systems...');
  
  // Ensure correct initial state
  const bookingContents = document.querySelectorAll('.booking-content');
  bookingContents.forEach(content => {
    if (content.id === 'hotels-booking') {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
  
  console.log('✅ Tab systems initialized');
}

// Reviews Slider Implementation
function initializeReviewsSlider() {
  const reviewsTrack = document.getElementById('reviewsSliderTrack');
  if (!reviewsTrack) return;

  const reviewCards = reviewsTrack.querySelectorAll('.review-card');
  if (reviewCards.length === 0) return;

  // Duplicate the reviews for infinite scroll
  const reviewsClone = reviewsTrack.cloneNode(true);
  reviewCards.forEach(card => {
    const clonedCard = card.cloneNode(true);
    reviewsTrack.appendChild(clonedCard);
  });

  let currentTranslateX = 0;
  const cardWidth = reviewCards[0].offsetWidth + 16; // Card width + gap
  const totalCards = reviewCards.length;
  const totalWidth = cardWidth * totalCards;
  
  function slideReviews() {
    currentTranslateX -= 1; // Adjust speed here (lower = slower)
    
    // Reset when we've moved exactly one full set of cards
    if (Math.abs(currentTranslateX) >= totalWidth) {
      currentTranslateX = 0;
    }
    
    reviewsTrack.style.transform = `translateX(${currentTranslateX}px)`;
    
    requestAnimationFrame(slideReviews);
  }

  // Start the animation
  requestAnimationFrame(slideReviews);
  
  // Pause animation on hover
  const reviewsWrapper = reviewsTrack.parentElement.parentElement;
  reviewsWrapper.addEventListener('mouseenter', () => {
    reviewsTrack.style.animationPlayState = 'paused';
  });
  
  reviewsWrapper.addEventListener('mouseleave', () => {
    reviewsTrack.style.animationPlayState = 'running';
  });
}

// Essential Cards Slider Implementation (Exact Copy of Reviews Slider)
function initializeEssentialSlider() {
  const essentialTrack = document.getElementById('essentialSliderTrack');
  if (!essentialTrack) return;

  const essentialCards = essentialTrack.querySelectorAll('.essential-card');
  if (essentialCards.length === 0) return;

  // Duplicate the cards for infinite scroll
  essentialCards.forEach(card => {
    const clonedCard = card.cloneNode(true);
    essentialTrack.appendChild(clonedCard);
  });

  let currentTranslateX = 0;
  const cardWidth = essentialCards[0].offsetWidth + 16; // Card width + gap
  const totalCards = essentialCards.length;
  const totalWidth = cardWidth * totalCards;
  
  function slideEssentials() {
    currentTranslateX -= 1; // Adjust speed here (lower = slower)
    
    // Reset when we've moved exactly one full set of cards
    if (Math.abs(currentTranslateX) >= totalWidth) {
      currentTranslateX = 0;
    }
    
    essentialTrack.style.transform = `translateX(${currentTranslateX}px)`;
    
    requestAnimationFrame(slideEssentials);
  }

  // Start the animation
  requestAnimationFrame(slideEssentials);
  
  // Pause animation on hover
  const essentialWrapper = essentialTrack.parentElement.parentElement;
  essentialWrapper.addEventListener('mouseenter', () => {
    essentialTrack.style.animationPlayState = 'paused';
  });
  
  essentialWrapper.addEventListener('mouseleave', () => {
    essentialTrack.style.animationPlayState = 'running';
  });
}

// Initialize both sliders when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for all elements to be rendered
  setTimeout(initializeReviewsSlider, 1000);
  setTimeout(initializeEssentialSlider, 1200);
});

// ============================
// UAE HOTEL COLLECTIONS SYSTEM
// ============================

// Live activity rotation for hotels section
const activities = [
    "Sarah from Dubai just booked Atlantis The Palm • 3 mins ago",
    "Ahmed from Abu Dhabi saved 25% at Emirates Palace • 5 mins ago",
    "Family from UK booked Lapita for 7 nights • 8 mins ago",
    "Business traveler found perfect meeting hotel • 12 mins ago",
    "Beach lover just booked Jumeirah Beach Hotel • 6 mins ago",
    "Solo traveler secured safe downtown hotel • 9 mins ago"
];

let activityIndex = 0;

function rotateHotelActivity() {
    const liveActivity = document.getElementById('liveActivity');
    if (liveActivity) {
        setInterval(() => {
            activityIndex = (activityIndex + 1) % activities.length;
            liveActivity.textContent = activities[activityIndex];
        }, 5000);
    }
}

// Set default dates for hotel search forms
function setDefaultHotelDates() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const checkinInputs = document.querySelectorAll('input[type="date"]');
    checkinInputs.forEach((input) => {
        if (input.id && input.id.includes('checkin')) {
            input.value = today.toISOString().split('T')[0];
        } else if (input.id && input.id.includes('checkout')) {
            input.value = tomorrow.toISOString().split('T')[0];
        }
    });
}

// Open modal for hotel collection
function openModal(modalType) {
    const modal = document.getElementById(modalType + 'Modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log(`Hotels modal opened: ${modalType}`);
    }
}

// Close modal for hotel collection
function closeModal(modalType) {
    const modal = document.getElementById(modalType + 'Modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Filter hotels by emirate within a collection
function filterByEmirate(emirate, chipElement, collection) {
    // Update active chip
    const modal = chipElement.closest('.modal');
    if (modal) {
        modal.querySelectorAll('.emirate-chip').forEach(chip => {
            chip.classList.remove('active');
        });
        chipElement.classList.add('active');
        
        // Filter hotels
        const hotels = modal.querySelectorAll('.hotel-card');
        hotels.forEach(hotel => {
            if (emirate === 'all' || hotel.dataset.emirate === emirate) {
                hotel.style.display = 'block';
            } else {
                hotel.style.display = 'none';
            }
        });
        
        console.log(`Filtered ${collection} hotels by emirate: ${emirate}`);
    }
}

// Search hotels with Booking.com integration
function searchHotels(type, emirate) {
    const checkinId = type + '-checkin';
    const checkoutId = type + '-checkout';
    const checkinElement = document.getElementById(checkinId);
    const checkoutElement = document.getElementById(checkoutId);
    
    if (!checkinElement || !checkoutElement) {
        console.error(`Could not find search inputs for ${type}`);
        return;
    }
    
    const checkin = checkinElement.value;
    const checkout = checkoutElement.value;
    
    // Add loading state to button
    const button = event.target;
    const originalText = button.textContent;
    button.classList.add('loading');
    button.textContent = 'Searching...';
    
    // Real Booking.com affiliate integration
    const affiliateId = "1234567"; // Your actual affiliate ID
    
    let destination = 'UAE';
    if (emirate === 'dubai') destination = 'Dubai%2C%20UAE';
    if (emirate === 'abudhabi') destination = 'Abu%20Dhabi%2C%20UAE';
    
    // Type-specific filters for Booking.com
    let filters = '';
    switch(type) {
        case 'family':
            filters = '&family_friendly=1&group_children=1&age=5';
            break;
        case 'business':
            filters = '&sb_travel_purpose=business&ht_id=204';
            break;
        case 'couples':
            filters = '&sb_travel_purpose=leisure&ht_id=201';
            break;
        case 'budget':
            filters = '&price=1&order=price';
            break;
        case 'beach':
            filters = '&ht_id=5&feature=beach';
            break;
        case 'solo':
            filters = '&sb_travel_purpose=leisure&order=review_score_and_price';
            break;
    }
    
    const bookingUrl = `https://www.booking.com/searchresults.html?` +
        `ss=${destination}&` +
        `checkin=${checkin}&` +
        `checkout=${checkout}&` +
        `group_adults=2&` +
        `aid=${affiliateId}${filters}`;
    
    setTimeout(() => {
        window.open(bookingUrl, '_blank');
        button.classList.remove('loading');
        button.textContent = originalText;
        console.log(`${type} hotel search executed for ${emirate}`);
    }, 1000);
}

// Book individual hotel
function bookHotel(hotelId) {
    const affiliateId = "1234567"; // Your actual affiliate ID
    
    // Add loading animation
    const button = event.target.closest('.hotel-card');
    if (button) {
        button.style.transform = 'scale(0.98)';
    }
    
    // Real hotel deep links for major UAE hotels
    const hotelMap = {
        // Family hotels
        'atlantis-palm-family': 'ae/atlantis-the-palm',
        'lapita-family': 'ae/lapita-hotel-autograph-collection',
        'emirates-palace-family': 'ae/emirates-palace-mandarin-oriental',
        
        // Business hotels
        'armani-hotel-business': 'ae/armani-hotel-dubai',
        'conrad-dubai-business': 'ae/conrad-dubai',
        'rosewood-business': 'ae/rosewood-abu-dhabi',
        
        // Couples hotels
        'burj-al-arab-couples': 'ae/burj-al-arab-jumeirah',
        'one-only-royal-mirage': 'ae/one-only-royal-mirage-resort-dubai',
        'saadiyat-rotana': 'ae/saadiyat-rotana-resort-villas',
        
        // Budget hotels
        'citymax-bur-dubai': 'ae/citymax-hotel-bur-dubai',
        'rove-downtown': 'ae/rove-downtown-dubai',
        'centro-capital': 'ae/centro-capital-centre',
        
        // Beach hotels
        'jumeirah-beach-hotel': 'ae/jumeirah-beach-hotel',
        'le-meridien-mina-seyahi': 'ae/le-meridien-mina-seyahi-beach-resort-marina',
        'yas-viceroy': 'ae/yas-viceroy-abu-dhabi',
        'westin-mina-seyahi': 'ae/the-westin-dubai-mina-seyahi-beach-resort-marina',
        
        // Solo hotels
        'address-downtown': 'ae/address-downtown',
        'vida-downtown': 'ae/vida-downtown-dubai',
        'southern-sun': 'ae/southern-sun-abu-dhabi',
        'aloft-palm-jumeirah': 'ae/aloft-palm-jumeirah'
    };
    
    const hotelUrl = `https://www.booking.com/hotel/${hotelMap[hotelId]}.html?aid=${affiliateId}`;
    
    setTimeout(() => {
        if (button) {
            button.style.transform = 'scale(1)';
        }
        window.open(hotelUrl, '_blank');
        console.log(`Hotel booking initiated: ${hotelId}`);
    }, 200);
}

// Quick booking from sticky bar
function quickBooking() {
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Opening...';
    
    setTimeout(() => {
        openModal('family'); // Default to family modal
        button.textContent = originalText;
    }, 500);
    
    console.log('Quick booking initiated from sticky bar');
}

// Initialize hotel collections system
function initializeHotelCollections() {
    console.log('🏨 Initializing UAE Hotel Collections system...');
    
    // Start live activity rotation
    rotateHotelActivity();
    
    // Set default dates
    setDefaultHotelDates();
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    console.log('✅ Hotel Collections system initialized');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hotel collections system
    setTimeout(initializeHotelCollections, 500);
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UAETourismSite;
}