// Función para mostrar/ocultar ejemplos de código
function mostrarEjemplo(id) {
    const elemento = document.getElementById(id);
    
    // Si el elemento está oculto, mostrarlo
    if (elemento.style.display === 'none' || elemento.style.display === '') {
        elemento.style.display = 'block';
        
        // Cambiar el texto del botón
        const boton = elemento.previousElementSibling;
        boton.textContent = 'Ocultar Código';
    } else {
        // Si está visible, ocultarlo
        elemento.style.display = 'none';
        
        // Cambiar el texto del botón
        const boton = elemento.previousElementSibling;
        boton.textContent = 'Ver Código';
    }
}

// Smooth scroll para la navegación
document.addEventListener('DOMContentLoaded', function() {
    const enlaces = document.querySelectorAll('nav a[href^="#"]');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Resaltar sección activa en el menú de navegación
window.addEventListener('scroll', function() {
    const secciones = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    
    let seccionActual = '';
    
    secciones.forEach(seccion => {
        const seccionTop = seccion.offsetTop;
        const seccionHeight = seccion.clientHeight;
        
        if (pageYOffset >= (seccionTop - 100)) {
            seccionActual = seccion.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.background = '';
        link.style.color = '';
        
        if (link.getAttribute('href') === '#' + seccionActual) {
            link.style.background = '#2a5298';
            link.style.color = 'white';
        }
    });
});

// Efecto de animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease';
        }
    });
}, {
    threshold: 0.1
});

// Observar todas las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

// Agregar animación CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Copiar código al portapapeles (funcionalidad adicional)
function copiarCodigo(boton) {
    const codeBlock = boton.closest('.card').querySelector('.code-block code');
    const texto = codeBlock.textContent;
    
    navigator.clipboard.writeText(texto).then(function() {
        // Cambiar temporalmente el texto del botón
        const textoOriginal = boton.textContent;
        boton.textContent = '¡Copiado!';
        boton.style.background = '#28a745';
        
        setTimeout(function() {
            boton.textContent = textoOriginal;
            boton.style.background = '';
        }, 2000);
    }).catch(function(err) {
        console.error('Error al copiar: ', err);
    });
}

// Modo oscuro/claro (funcionalidad adicional opcional)
function toggleModoOscuro() {
    document.body.classList.toggle('modo-oscuro');
    
    const esModoOscuro = document.body.classList.contains('modo-oscuro');
    
    if (esModoOscuro) {
        document.body.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
    } else {
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
}

// Contador de scroll para mostrar botón "volver arriba"
let botonScrollTop;

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        if (!botonScrollTop) {
            crearBotonScrollTop();
        }
        botonScrollTop.style.display = 'block';
    } else {
        if (botonScrollTop) {
            botonScrollTop.style.display = 'none';
        }
    }
});

function crearBotonScrollTop() {
    botonScrollTop = document.createElement('button');
    botonScrollTop.innerHTML = '↑';
    botonScrollTop.className = 'scroll-top-btn';
    botonScrollTop.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    botonScrollTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        display: none;
    `;
    
    botonScrollTop.onmouseover = function() {
        this.style.transform = 'scale(1.1)';
    };
    
    botonScrollTop.onmouseout = function() {
        this.style.transform = 'scale(1)';
    };
    
    document.body.appendChild(botonScrollTop);
}

// Mensaje de bienvenida en consola
console.log('%c¡Bienvenido a Java para Principiantes! ☕', 'color: #2a5298; font-size: 20px; font-weight: bold;');
console.log('%cEsta es una guía completa para aprender Java desde cero.', 'color: #667eea; font-size: 14px;');
console.log('%c¡Feliz aprendizaje!', 'color: #764ba2; font-size: 14px;');

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada correctamente');
    
    // Agregar efecto hover a las cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});