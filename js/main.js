// ============================
// Variables Globales
// ============================
let currentProduct = '';
let currentPrice = 0;

// ============================
// Configuración Wompi - Link de Pago Directo
// ============================
const WOMPI_PAYMENT_LINK = 'https://checkout.wompi.co/l/RO6Vjz';
// 👆 Reemplazar con tu link de pago de Wompi
// Ejemplo: 'https://checkout.wompi.co/l/ABC123XYZ'

// ============================
// Navigation Toggle (Mobile)
// ============================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav__menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ============================
// Scroll Effects
// ============================
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

// ============================
// Smooth Scroll
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================
// Modal Functions
// ============================
function openModal(productName, price) {
    const modal = document.getElementById('purchaseModal');
    const modalProduct = document.getElementById('modalProduct');
    
    currentProduct = productName;
    currentPrice = price;
    
    if (modalProduct) {
        modalProduct.textContent = productName;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Start modal timer
    startModalTimer();
    
    // Initialize total
    updateTotal();
}

function closeModal() {
    const modal = document.getElementById('purchaseModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Stop modal timer
    stopModalTimer();
    
    // Resetear formulario
    const form = document.getElementById('purchaseForm');
    if (form) form.reset();
    
    // Reset to first quantity option
    const firstRadio = document.querySelector('input[name="quantity"][value="1"]');
    if (firstRadio) firstRadio.checked = true;
    updateTotal();
}

// Cerrar modal al presionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================
// Actualizar total en el modal
// ============================
function updateTotal() {
    // Get selected quantity from radio buttons
    const quantityRadios = document.getElementsByName('quantity');
    let quantity = 1;
    
    for (const radio of quantityRadios) {
        if (radio.checked) {
            quantity = parseInt(radio.value);
            break;
        }
    }
    
    const pricePerUnit = 390000; // Colombian pesos
    const total = pricePerUnit * quantity;
    
    // Format Colombian pesos
    const formattedTotal = '$' + total.toLocaleString('es-CO') + ' COP';
    
    const subtotalEl = document.getElementById('modalSubtotal');
    const totalEl = document.getElementById('modalTotal');
    
    if (subtotalEl) subtotalEl.textContent = formattedTotal;
    if (totalEl) totalEl.textContent = formattedTotal;
}

// ============================
// Modal Timer (15 minutes)
// ============================
let modalTimerInterval;

function startModalTimer() {
    let timeLeft = 15 * 60; // 15 minutes in seconds
    
    modalTimerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        const minutesEl = document.getElementById('modal-minutes');
        const secondsEl = document.getElementById('modal-seconds');
        
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
        
        timeLeft--;
        
        if (timeLeft < 0) {
            timeLeft = 15 * 60; // Reset to 15 minutes
        }
    }, 1000);
}

// Stop modal timer when modal closes
function stopModalTimer() {
    if (modalTimerInterval) {
        clearInterval(modalTimerInterval);
        modalTimerInterval = null;
    }
}

// ============================
// Countdown Timer
// ============================
function startCountdown() {
    // Establecer tiempo inicial: 4 horas desde ahora
    const endTime = new Date().getTime() + (4 * 60 * 60 * 1000);
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        if (distance < 0) {
            clearInterval(timer);
            // Reiniciar el contador
            startCountdown();
            return;
        }
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Iniciar countdown al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
});

// ============================
// Actualizar total en el modal (Old function - keep compatibility)
// ============================
const quantityInput = document.getElementById('quantity');
if (quantityInput) {
    quantityInput.addEventListener('input', () => {
        const quantity = parseInt(quantityInput.value) || 1;
        const total = currentPrice * quantity;
        document.getElementById('modalTotal').textContent = `$${total.toFixed(2)}`;
    });
}

// ============================
// Form Submission con Wompi
// ============================
// Form Submission - Redirigir a Wompi
// ============================
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Obtener valores del formulario
    const nombre = formData.get('nombre') || form.querySelector('input[type="text"]').value;
    const email = formData.get('email') || form.querySelector('input[type="email"]').value;
    const telefono = formData.get('telefono') || form.querySelector('input[type="tel"]').value;
    const direccion = formData.get('direccion') || form.querySelector('textarea').value;
    const cantidadRadio = form.querySelector('input[name="quantity"]:checked');
    const cantidad = cantidadRadio ? cantidadRadio.value : 1;
    const totalAmount = currentPrice * cantidad;
    
    // Validar datos
    if (!nombre || !email || !telefono) {
        alert('Por favor completa todos los campos requeridos');
        return false;
    }
    
    // Tracking del evento
    if (typeof gtag !== 'undefined') {
        gtag('event', 'begin_checkout', {
            'event_category': 'Ecommerce',
            'event_label': currentProduct,
            'value': totalAmount,
            'currency': 'COP'
        });
    }
    
    if (typeof fbq !== 'undefined') {
        fbq('track', 'InitiateCheckout', {
            content_name: currentProduct,
            value: totalAmount,
            currency: 'COP'
        });
    }
    
    // Guardar datos del cliente para seguimiento
    const orderData = {
        producto: currentProduct,
        cantidad: cantidad,
        total: totalAmount,
        nombre: nombre,
        email: email,
        telefono: telefono,
        direccion: direccion,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('wompi_order_pending', JSON.stringify(orderData));
    
    // Log para debug
    console.log('Guardando datos:', orderData);
    console.log('Redirigiendo a:', WOMPI_PAYMENT_LINK);
    
    // Mostrar mensaje de redirección
    showLoadingMessage(nombre);
    
    // Redirigir a link de pago Wompi después de 1 segundo
    setTimeout(() => {
        console.log('Ejecutando redirección...');
        window.location.href = WOMPI_PAYMENT_LINK;
    }, 1000);
    
    return false;
}

// ============================
// Funciones auxiliares Wompi
// ============================

// Mostrar mensaje de carga antes de redirigir
function showLoadingMessage(nombre) {
    const modal = document.getElementById('purchaseModal');
    const modalContent = modal.querySelector('.modal__content');
    
    const loadingHTML = `
        <div style="text-align: center; padding: 60px 20px;">
            <div style="font-size: 48px; margin-bottom: 20px;">⏳</div>
            <h3 style="color: var(--primary-color); margin-bottom: 10px;">¡Gracias ${nombre || ''}!</h3>
            <p style="font-size: 1.1rem; color: #666; margin-bottom: 20px;">Redirigiendo a la pasarela de pago segura...</p>
            <div style="margin-top: 30px;">
                <div class="loading-spinner" style="border: 4px solid #f3f3f3; border-top: 4px solid var(--primary-color); border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite; margin: 0 auto;"></div>
            </div>
            <p style="margin-top: 30px; color: #999; font-size: 0.9rem;">
                🔒 Pago 100% seguro con Wompi
            </p>
        </div>
    `;
    
    modalContent.innerHTML = loadingHTML;
}

function showSuccessMessage() {
    const modalContent = document.querySelector('.modal__content');
    
    // Crear mensaje de éxito
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 4rem; margin-bottom: 20px;">✅</div>
            <h3 style="color: #28a745; margin-bottom: 16px;">¡Pedido Confirmado!</h3>
            <p style="color: #666;">Recibirás un email con los detalles de tu pedido.</p>
        </div>
    `;
    
    // Reemplazar contenido temporalmente
    const originalContent = modalContent.innerHTML;
    modalContent.innerHTML = '';
    modalContent.appendChild(successDiv);
    
    // Restaurar después de cerrar
    setTimeout(() => {
        modalContent.innerHTML = originalContent;
    }, 2500);
}

// ============================
// Intersection Observer (Animations)
// ============================
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

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.product__card, .benefit__card, .testimonial__card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================
// Counter Animation (Stats)
// ============================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Iniciar contadores cuando sean visibles
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const target = parseInt(entry.target.textContent.replace(/\D/g, ''));
            animateCounter(entry.target, target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat__number').forEach(stat => {
    if (!isNaN(parseInt(stat.textContent))) {
        statsObserver.observe(stat);
    }
});

// ============================
// WhatsApp Integration (Opcional)
// ============================
function contactWhatsApp(productName) {
    const phoneNumber = '1234567890'; // Reemplaza con tu número
    const message = encodeURIComponent(
        `Hola, estoy interesado en el ${productName}. ¿Podrían darme más información?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// ============================
// Lazy Loading Images (si agregas imágenes reales)
// ============================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================
// Back to Top Button (Opcional)
// ============================
function createBackToTop() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Inicializar botón back to top
createBackToTop();

// ============================
// Console Message
// ============================
console.log(
    '%c🔧 Taladro Total Landing Page',
    'font-size: 20px; font-weight: bold; color: #FF6B35;'
);
console.log(
    '%cDesarrollado con ❤️ para GitHub Pages',
    'font-size: 14px; color: #666;'
);

// ============================
// FAQ Toggle Function
// ============================
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Cerrar todos los FAQs
    document.querySelectorAll('.faq__item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Abrir el clickeado si no estaba activo
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// ============================
// Carrusel de Imágenes del Producto
// ============================
let currentSlide = 0;
const slides = document.querySelectorAll('.product__carousel-slide');
const indicators = document.querySelectorAll('.carousel__indicator');
const infoSlides = document.querySelectorAll('.product__info-slide');
const totalSlides = slides.length;

// Función para mostrar slide específico
function showSlide(index) {
    // Asegurar que el índice esté en rango
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    // Actualizar slides de imágenes
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    // Actualizar indicadores
    indicators.forEach((indicator, i) => {
        indicator.classList.remove('active');
        if (i === currentSlide) {
            indicator.classList.add('active');
        }
    });
    
    // Actualizar contenido dinámico de información
    infoSlides.forEach((infoSlide, i) => {
        infoSlide.classList.remove('active');
        if (i === currentSlide) {
            infoSlide.classList.add('active');
        }
    });
}

// Mover carrusel (siguiente o anterior)
function moveCarousel(direction) {
    showSlide(currentSlide + direction);
}

// Ir a slide específico
function goToSlide(index) {
    showSlide(index);
}

// Auto-avance del carrusel (opcional, cada 5 segundos)
let carouselInterval = setInterval(() => {
    moveCarousel(1);
}, 5000);

// Pausar auto-avance al pasar el mouse
const carouselContainer = document.querySelector('.product__carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(() => {
            moveCarousel(1);
        }, 5000);
    });
}

// Soporte para gestos táctiles en móviles
let touchStartX = 0;
let touchEndX = 0;

if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swipe izquierda - siguiente
        moveCarousel(1);
    }
    if (touchEndX > touchStartX + 50) {
        // Swipe derecha - anterior
        moveCarousel(-1);
    }
}

// ============================
// Marketing y Retargeting
// ============================

// 1. Exit Intent Popup (cuando el usuario intenta salir)
document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        sessionStorage.setItem('exitIntentShown', 'true');
        
        // Tracking del exit intent
        if (typeof gtag !== 'undefined') {
            gtag('event', 'exit_intent', {
                'event_category': 'Engagement',
                'event_label': 'Usuario intent贸 salir'
            });
        }
        
        // Opcional: Mostrar modal con oferta especial
        // alert('隆Espera! 驴Necesitas m谩s informaci贸n? Cont谩ctanos por WhatsApp');
    }
});

// 2. Urgencia din谩mica - Stock limitado
function updateStockUrgency() {
    // Simular stock entre 3-7 unidades
    const stock = Math.floor(Math.random() * 5) + 3;
    const urgencyElements = document.querySelectorAll('.stock-urgency');
    
    urgencyElements.forEach(el => {
        el.textContent = `隆Solo quedan ${stock} unidades disponibles!`;
        if (stock <= 3) {
            el.style.color = '#FF0000';
            el.style.fontWeight = '700';
        }
    });
}

// 3. Contador de visitas en tiempo real
function updateVisitorCount() {
    // Simular entre 15-35 personas viendo
    const visitors = Math.floor(Math.random() * 20) + 15;
    const visitorElements = document.querySelectorAll('.live-visitors');
    
    visitorElements.forEach(el => {
        el.innerHTML = `馃敆 <strong>${visitors} personas</strong> est谩n viendo este producto ahora`;
    });
}

// 4. Tracking de interacciones clave
function trackProductInterest() {
    // Track cuando usuario pasa m谩s de 10 segundos en secci贸n de producto
    const productSection = document.getElementById('productos');
    if (!productSection) return;
    
    let timeInSection = 0;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const interval = setInterval(() => {
                    timeInSection++;
                    if (timeInSection === 10) {
                        // Usuario interesado - 10 segundos viendo producto
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'product_interest', {
                                'event_category': 'Engagement',
                                'event_label': '10+ segundos en producto',
                                'value': timeInSection
                            });
                        }
                        if (typeof fbq !== 'undefined') {
                            fbq('track', 'ViewContent', {
                                content_name: 'Taladro TOTAL 20V',
                                content_ids: ['TOTAL-20V-DRILL-KIT'],
                                content_type: 'product'
                            });
                        }
                        clearInterval(interval);
                    }
                }, 1000);
                
                // Limpiar cuando sale de la secci贸n
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(productSection);
}

// 5. LocalStorage para remarketing
function saveUserInterest() {
    const interests = JSON.parse(localStorage.getItem('ferremolina_interests') || '[]');
    const visit = {
        product: 'Taladro TOTAL 20V',
        timestamp: new Date().toISOString(),
        price: 390000,
        page: window.location.pathname
    };
    
    interests.push(visit);
    // Mantener solo 煤ltimas 10 visitas
    if (interests.length > 10) interests.shift();
    
    localStorage.setItem('ferremolina_interests', JSON.stringify(interests));
}

// 6. Detector de Ad Blockers
function detectAdBlocker() {
    const adTest = document.createElement('div');
    adTest.className = 'adsbox';
    adTest.style.position = 'absolute';
    adTest.style.top = '-999px';
    document.body.appendChild(adTest);
    
    setTimeout(() => {
        const isBlocked = adTest.offsetHeight === 0;
        if (isBlocked && typeof gtag !== 'undefined') {
            gtag('event', 'adblock_detected', {
                'event_category': 'Technical',
                'event_label': 'AdBlocker activo'
            });
        }
        document.body.removeChild(adTest);
    }, 100);
}

// 7. Tiempo 贸ptimo para mostrar CTA
let scrollPercentage = 0;
let maxScroll = 0;

window.addEventListener('scroll', () => {
    scrollPercentage = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    maxScroll = Math.max(maxScroll, scrollPercentage);
    
    // Si el usuario alcanz贸 50% del contenido, es momento ideal para CTA
    if (maxScroll >= 50 && !sessionStorage.getItem('ctaShown')) {
        sessionStorage.setItem('ctaShown', 'true');
        // Aqu铆 podr铆as mostrar un sticky bar o popup suave
    }
});

// Inicializar funciones de marketing al cargar
document.addEventListener('DOMContentLoaded', function() {
    updateStockUrgency();
    updateVisitorCount();
    trackProductInterest();
    saveUserInterest();
    detectAdBlocker();
    
    // Actualizar urgencia cada 2-5 minutos
    setInterval(updateStockUrgency, Math.random() * 180000 + 120000);
    // Actualizar visitantes cada 15-30 segundos
    setInterval(updateVisitorCount, Math.random() * 15000 + 15000);
});
