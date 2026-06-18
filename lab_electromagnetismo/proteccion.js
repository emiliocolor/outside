(function() {
    const TIEMPO_VISIBLE = 3000;       
    const ESTILO_ADVERTENCIA = `
        position: fixed;
        bottom: 24px;
        left: 24px;
        right: 24px;
        max-width: 420px;
        background-color: #0f172a;
        color: #f1f5f9;
        border-radius: 12px;
        padding: 14px 20px;
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        z-index: 99999;
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        gap: 14px;
        pointer-events: none;
        transition: opacity 0.25s ease;
        opacity: 1;
        border-radius: 20px;
    `;

    const ICONO = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 9V13M12 17H12.01M3 13C3 18.5 7.5 21 12 21C16.5 21 21 18.5 21 13C21 7.5 16.5 5 12 5C7.5 5 3 7.5 3 13Z" stroke="#f43f5e" stroke-width="1.8" stroke-linecap="round"/></svg>';

    function mostrarAdvertencia(mensaje = "Contenido protegido – No está permitido inspeccionar el código fuente.") {
        const existe = document.getElementById("proteccion-warning");
        if (existe) existe.remove();

        const contenedor = document.createElement("div");
        contenedor.id = "proteccion-warning";
        contenedor.style.cssText = ESTILO_ADVERTENCIA;
        contenedor.innerHTML = `${ICONO} <span>${mensaje}</span>`;
        document.body.appendChild(contenedor);

        setTimeout(() => {
            if (contenedor && contenedor.parentNode) {
                contenedor.style.opacity = "0";
                setTimeout(() => {
                    if (contenedor.parentNode) contenedor.remove();
                }, 300);
            }
        }, TIEMPO_VISIBLE);
    }

    function bloquearContexto(e) {
        e.preventDefault();
        mostrarAdvertencia("Código fuente protegido – Acción no permitida.");
        return false;
    }

    function bloquearAtajos(e) {
        const key = e.keyCode || e.which;
        const ctrl = e.ctrlKey || e.metaKey;
        const shift = e.shiftKey;
        const f12 = (key === 123);
        const ctrlU = ctrl && (key === 85);       
        const ctrlShiftI = ctrl && shift && (key === 73);   
        const ctrlShiftJ = ctrl && shift && (key === 74);  
        const ctrlShiftC = ctrl && shift && (key === 67);   
        const ctrlS = ctrl && (key === 83);                
        const ctrlE = ctrl && (key === 69);                
        const f5 = (key === 116);                          
        const ctrlR = ctrl && (key === 82);               

        if (f12 || ctrlU || ctrlShiftI || ctrlShiftJ || ctrlShiftC || ctrlS || ctrlE) {
            e.preventDefault();
            mostrarAdvertencia("Acceso restringido – No se puede visualizar el código de esta simulación.");
            return false;
        }

        return true;
    }

    function inicializarProteccion() {
        document.addEventListener("contextmenu", bloquearContexto);
        document.addEventListener("keydown", bloquearAtajos);

        window.addEventListener("dragstart", (e) => {
            if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
                e.preventDefault();
                return false;
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", inicializarProteccion);
    } else {
        inicializarProteccion();
    }

    window.addEventListener("resize", () => {
    });
})();