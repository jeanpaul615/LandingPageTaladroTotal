# 🚀 INICIO RÁPIDO - Link de Pago Wompi

## ¿Qué está listo?

✅ **Sistema simplificado**: Solo necesitas tu link de pago de Wompi  
✅ **Sin configuraciones complejas**: Sin llaves públicas ni APIs  
✅ **Modal de compra**: Captura datos del cliente  
✅ **Redirección automática**: A tu link de pago personalizado  
✅ **Tracking**: Google Analytics y Facebook Pixel integrados

---

## ⚡ Configuración en 2 pasos (2 minutos)

### 1️⃣ Obtener tu Link de Pago de Wompi

1. Iniciar sesión en: https://comercios.wompi.co/
2. Ir a: **"Links de Pago"** → **"Crear nuevo link"**
3. Configurar:
   - **Nombre**: Taladro TOTAL 20V
   - **Monto**: $390.000 COP (o dejar flexible)
   - **Descripción**: Kit completo con accesorios
4. **Copiar el link** generado, ejemplo:
   ```
   https://checkout.wompi.co/l/ABC123XYZ
   ```

### 2️⃣ Pegar en tu landing

Abrir: `js/main.js` y editar línea 7:

```javascript
const WOMPI_PAYMENT_LINK = 'https://checkout.wompi.co/l/ABC123XYZ';
// 👆 PEGAR TU LINK AQUÍ
```

### ✅ ¡Listo!

Ahora cuando alguien llene el formulario y haga clic en "Comprar", será redirigido automáticamente a tu link de pago de Wompi.

---

## 🎯 Flujo de Compra Simplificado

```
Usuario clic "Comprar Ahora"
    ↓
Llena formulario con sus datos
    ↓
Sistema guarda datos en navegador
    ↓
Redirección a tu Link de Pago Wompi
    ↓
Cliente paga (tarjeta/PSE/Nequi/Efecty)
    ↓
Wompi procesa el pago
    ↓
Wompi te notifica por email
    ↓
Tú contactas al cliente por WhatsApp
```

---

## 📋 Configuración Adicional (Opcional)

### WhatsApp (Cambiar número)
Buscar en archivos: `573123467272` y reemplazar por tu número

### Google Analytics
```html
<!-- index.html línea 94 -->
gtag('config', 'G-XXXXXXXXXX'); // Tu ID
```

### Facebook Pixel
```html
<!-- index.html línea 109 -->
fbq('init', 'TU_PIXEL_ID_AQUI');
```

---

## 🧪 Probar

1. Abrir `index.html` en navegador
2. Clic en "Comprar Ahora"
3. Llenar formulario
4. Clic en "Comprar" → Redirige a Wompi
5. ✅ Probar pago

---

## 💡 Ventajas del Link de Pago

✅ **Súper simple**: Solo copiar y pegar  
✅ **Sin código**: No necesitas programar  
✅ **Gestión en Wompi**: Cambias precio desde el panel  
✅ **Multi-método**: Acepta tarjetas, PSE, Nequi, Efecty  
✅ **Notificaciones**: Wompi te avisa por email de cada pago  

---

## 📊 ¿Cómo recibo el dinero?

1. Cliente paga en Wompi
2. Recibes email de confirmación
3. Dinero llega a tu cuenta en 1-3 días
4. Contactas cliente para coordinar envío

---

## 🎉 ¡Eso es todo!

Con solo 2 pasos (2 minutos) ya puedes recibir pagos. Sin complicaciones. 🚀

---

## 📋 Checklist Completo

### Antes de lanzar:

- [ ] **Wompi configurado** (Public Key en main.js)
- [ ] **Probado con tarjeta test** (4242 4242 4242 4242)
- [ ] **gracias.html accesible** (después del pago)
- [ ] **HTTPS activo** (obligatorio para producción)
- [ ] **Webhook configurado** (opcional pero recomendado)
- [ ] **Google Analytics ID** (reemplazar G-XXXXXXXXXX)
- [ ] **Facebook Pixel ID** (reemplazar TU_PIXEL_ID_AQUI)
- [ ] **WhatsApp actualizado** (cambiar número)
- [ ] **Dominio actualizado** (cambiar www.ferremolina.com)
- [ ] **Imágenes subidas** (taladro-1.jpg hasta taladro-4.jpg)

---

## 🎯 Flujo de Compra

```
Usuario → Llena formulario → Clic "Comprar"
    ↓
Sistema guarda datos en localStorage
    ↓
Redirección a Wompi (pago seguro)
    ↓
Cliente paga con tarjeta/PSE/Nequi
    ↓
Wompi procesa → Aprobado/Rechazado
    ↓
Redirección a gracias.html
    ↓
Muestra confirmación + Tracking
    ↓
(Opcional) Webhook notifica al servidor
```

---

## 🔧 Archivos Importantes

| Archivo | Propósito |
|---------|-----------|
| `js/main.js` | Lógica de Wompi + configuración |
| `index.html` | Formulario de compra |
| `gracias.html` | Confirmación después del pago |
| `webhook-wompi.php` | Procesar notificaciones (backend) |
| `WOMPI_SETUP.md` | Guía completa paso a paso |
| `SEO_MARKETING_GUIDE.md` | Configuración de Analytics/Pixel |

---

## 💡 Tarjetas de Prueba

### ✅ Aprobada
```
4242 4242 4242 4242
CVV: 123
Fecha: 12/25
```

### ❌ Rechazada
```
4111 1111 1111 1111
CVV: 123
Fecha: 12/25
```

### ⏳ Pendiente
```
5555 5555 5555 4444
CVV: 123
Fecha: 12/25
```

---

## 📞 Soporte

### ❓ ¿Necesitas ayuda?

**Wompi:**
- 📧 soporte@wompi.co
- 📖 https://docs.wompi.co

**FERREMOLINA:**
- 📧 distribuciones.ferremolina@gmail.com
- 📱 +57 312 346 7272

---

## 🎉 ¡Listo para vender!

Con esta configuración, tu landing page puede:
- ✅ Recibir pagos 24/7
- ✅ Procesar automáticamente
- ✅ Confirmar por email
- ✅ Trackear conversiones
- ✅ Escalar tu negocio

**¿Todo configurado?** → Cambia `production: false` a `production: true` y ¡a vender! 🚀
