# 🔧 Taladro TOTAL 20V - Landing Page FERREMOLINA

Landing page profesional de venta directa con integración de pagos Wompi, optimizada para conversión y SEO.

## 🚀 Características

- ✅ Diseño responsive y moderno
- ✅ Optimizado para conversión
- ✅ **Integración con Wompi (Pagos en línea)**
- ✅ Carrusel de imágenes de producto
- ✅ Especificaciones dinámicas
- ✅ Modal de compra profesional
- ✅ Testimonios reales colombianos
- ✅ SEO avanzado con Schema.org
- ✅ Google Analytics 4 + Meta Pixel
- ✅ Botón flotante de WhatsApp
- ✅ Tracking de conversiones
- ✅ Marketing automation

## 💳 **INTEGRACIÓN DE PAGOS WOMPI**

### ⚡ Configuración Súper Simple (2 minutos):

1. Crear cuenta en https://comercios.wompi.co/
2. Crear un **Link de Pago** para tu producto
3. Copiar el link (ejemplo: `https://checkout.wompi.co/l/ABC123`)
4. Editar `js/main.js` línea 7:
   ```javascript
   const WOMPI_PAYMENT_LINK = 'https://checkout.wompi.co/l/ABC123';
   ```

✅ **¡Eso es todo!** Sin llaves públicas, sin APIs complejas.

📖 **Guía completa**: Ver [QUICK_START.md](QUICK_START.md)

---

## 📁 Estructura del Proyecto

```
LandingPageTaladroTotal/
├── index.html              # Página principal
├── gracias.html            # Página de confirmación (opcional)
├── css/
│   ├── variables.css       # Variables globales
│   ├── base.css           # Estilos base
│   ├── buttons.css        # Botones
│   ├── header.css         # Navegación
│   ├── hero.css           # Sección hero
│   ├── sections.css       # Secciones generales
│   ├── products.css       # Productos
│   ├── carousel.css       # Carrusel de imágenes
│   ├── pricing.css        # Precios
│   ├── faq.css            # Preguntas frecuentes
│   ├── cta-footer.css     # CTA y footer
│   ├── footer.css         # Footer
│   ├── modal.css          # Modal de compra
│   ├── whatsapp.css       # Botón WhatsApp flotante
│   └── responsive.css     # Responsive design
├── js/
│   └── main.js            # JavaScript + Wompi simple
├── sitemap.xml            # Sitemap para SEO
├── robots.txt             # Control de rastreo
├── README.md              # Este archivo
├── SEO_MARKETING_GUIDE.md # Guía de SEO y Marketing
└── QUICK_START.md         # Guía de configuración Wompi (2 pasos)
```

## 🎨 Secciones Incluidas

1. **Header/Navegación**: Menú fijo responsive
2. **Hero**: Video demostrativo y CTA principal
3. **Problema/Solución**: Comparativa visual
4. **Para Quién Es**: Target de audiencia
5. **Productos**: Carrusel con especificaciones dinámicas
6. **Beneficios**: 6 razones para comprar
7. **Testimonios**: 6 reseñas reales colombianas
8. **Pricing**: Tabla de precios con descuento
9. **FAQ**: 7 preguntas frecuentes
10. **CTA Final**: Última oportunidad de conversión
11. **Footer**: Información FERREMOLINA + redes sociales
12. **Modal**: Formulario de compra con Wompi
13. **WhatsApp**: Botón flotante siempre visible

## 🛠️ Personalización

### Colores
Edita las variables CSS en `css/variables.css`:

```css
:root {
    --primary-color: #FFD700;    /* Dorado */
    --accent-color: #FFA500;     /* Naranja */
    --text-dark: #1a1a1a;        /* Negro */
}
```

### Productos
Modifica los productos en `index.html` en la sección `<section class="products">`.

### Información de Contacto
Actualiza el footer en `index.html` con tu información real:
- Email
- Teléfono
- Dirección
- Redes sociales

## 📱 Responsive Design

La landing page es completamente responsive y se adapta a:
- 📱 Móviles (< 480px)
- 📱 Tablets (< 768px)
- 💻 Laptops (< 968px)
- 🖥️ Desktop (> 968px)

## 🚀 Deployment en GitHub Pages

### Opción 1: Subir archivos manualmente

1. Crea un nuevo repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Ve a Settings > Pages
4. En "Source", selecciona "main" branch
5. Click en "Save"
6. Tu sitio estará disponible en: `https://tu-usuario.github.io/nombre-repo/`

### Opción 2: Usar Git desde terminal

```bash
# Inicializar repositorio
git init

# Agregar archivos
git add .

# Hacer commit
git commit -m "Initial commit - Landing Page"

# Conectar con GitHub
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git

# Subir archivos
git branch -M main
git push -u origin main
```

Luego activa GitHub Pages desde la configuración del repositorio.

## 🎯 Funcionalidades JavaScript

- **Modal de compra**: Formulario emergente para pedidos
- **Navegación suave**: Scroll animado entre secciones
- **Menú móvil**: Navegación responsive
- **Animaciones**: Efectos al hacer scroll
- **Contador de estadísticas**: Números animados
- **Botón "Volver arriba"**: Scroll rápido al inicio
- **Validación de formularios**: Campos requeridos
- **Redirección automática**: A Wompi para pagos

## 💳 **CONFIGURACIÓN INICIAL (5 MINUTOS)**

### 1️⃣ Wompi (Pagos):
```javascript
// Editar js/main.js línea 7
const WOMPI_PAYMENT_LINK = 'https://checkout.wompi.co/l/TU_LINK_AQUI';
```
📌 **Cómo obtener tu link**: Panel Wompi → Links de Pago → Crear nuevo

### 2️⃣ Google Analytics:
```html
<!-- Editar index.html línea 94 -->
gtag('config', 'G-XXXXXXXXXX'); // Tu ID de Analytics
```

### 3️⃣ Facebook Pixel:
```html
<!-- Editar index.html línea 109 -->
fbq('init', 'TU_PIXEL_ID_AQUI');
```

### 4️⃣ WhatsApp:
```html
<!-- Buscar en index.html: wa.me/ -->
https://wa.me/573123467272 → Cambiar por tu número
```

### 5️⃣ Dominio:
```javascript
// Buscar y reemplazar en todo el proyecto:
www.ferremolina.com → tudominio.com
```

📖 **Guías detalladas:**
- [SEO_MARKETING_GUIDE.md](SEO_MARKETING_GUIDE.md) - Configuración completa de marketing
- [WOMPI_SETUP.md](WOMPI_SETUP.md) - Paso a paso de Wompi

---

## 📧 Flujo de Compra

1. Usuario llena formulario modal
2. Sistema guarda datos en localStorage (para seguimiento)
3. **Redirección automática a tu Link de Pago Wompi**
4. Cliente paga con tarjeta/PSE/Nequi/Efecty
5. Wompi procesa el pago
6. Wompi te notifica por email
7. Tú contactas al cliente por WhatsApp para coordinar envío

### ✅ Ventajas:
- Sin configuraciones complejas
- Sin llaves públicas ni APIs
- Gestión desde panel de Wompi
- Multi-método de pago incluido

## 🖼️ Agregar Imágenes Reales

Subir 4 imágenes del producto a carpeta `images/`:

```
images/
├── taladro-1.jpg  (Vista frontal del taladro)
├── taladro-2.jpg  (Kit completo con accesorios)
├── taladro-3.jpg  (Accesorios detallados)
└── taladro-4.jpg  (Maletín BMC)
```

El carrusel las detectará automáticamente.

## 🔧 Checklist Pre-Lanzamiento

### Obligatorio:
- [ ] Configurar Public Key de Wompi
- [ ] Cambiar número de WhatsApp
- [ ] Actualizar dominio en todas las URLs
- [ ] Subir imágenes reales del producto
- [ ] Probar compra con tarjeta test
- [ ] Verificar página gracias.html accesible
- [ ] Activar HTTPS/SSL

### Recomendado:
- [ ] Configurar Google Analytics
- [ ] Configurar Facebook Pixel
- [ ] Subir sitemap.xml a Google Search Console
- [ ] Configurar webhooks de Wompi
- [ ] Crear página de política de privacidad
- [ ] Crear página de términos y condiciones

### Opcional:
- [ ] Video demostrativo del producto
- [ ] Más testimonios con fotos
- [ ] Blog con contenido SEO
- [ ] Chatbot automatizado
- [ ] Sistema de cupones de descuento

## 📊 SEO y Performance

La landing page incluye:
- Meta tags optimizados
- Estructura semántica HTML5
- Fuentes optimizadas con preconnect
- Animaciones con CSS (mejor performance)
- Código minificable

### Para mejorar SEO:
1. Agrega un `robots.txt`
2. Crea un `sitemap.xml`
3. Implementa Schema.org markup
4. Optimiza imágenes (WebP format)
5. Agrega más contenido de valor

## 📄 Licencia

Este proyecto es de código abierto. Puedes usarlo y modificarlo libremente.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:
1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agregar mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:
- Abre un issue en GitHub
- Revisa la documentación
- Contacta al desarrollador

## 🎉 ¡Listo para Vender!

Tu landing page está completa y lista para convertir visitantes en clientes. 
Solo personaliza el contenido con tus productos y datos reales, ¡y a vender! 🚀

---

**Hecho con ❤️ para emprendedores digitales**
