/**
 * ======================================================================
 * PROPIEDAD INTELECTUAL - EmilioColor®
 * ======================================================================
 * Este código fuente, su lógica, diseño visual y todos los contenidos
 * asociados a las simulaciones son propiedad exclusiva de EmilioColor®.
 * Queda prohibida la copia, reproducción, distribución o modificación
 * no autorizada de este material.
 * 
 * © 2026 EmilioColor®. Todos los derechos reservados.
 * ======================================================================
 */
// ==================== CARGA DEL FOOTER DINÁMICO ====================
(function() {
    function cargarFooter() {
        const footerContainer = document.getElementById('dynamic-footer');
        if (!footerContainer) return;

        const footerHTML = `
            <div class="footer-main">
                <div class="footer-logos-left">
                    <img src="favicon.png" alt="Logo ciencia" class="footer-logo-img" width="60" height="60">
                </div>
                <div class="footer-center-text">
                    Desarrollado por <a href="https://emiliocolor.com/" target="_blank" rel="noopener noreferrer">EmilioColor®</a> Soluciones a tu medida, como proyecto en su división de Ciencia y Tecnología
                </div>
                <div class="footer-report">
                    <a href="https://proyectos.emiliocolor.com/#info" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-bug"></i> Reportar problemas
                    </a>
                </div>
            </div>
        `;
        footerContainer.innerHTML = footerHTML;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cargarFooter);
    } else {
        cargarFooter();
    }
})();