/* =====================================================
   CAFÉ XICO - JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       FILTRO DEL MENÚ
    ================================================= */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            // Quitar estado activo
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Activar botón seleccionado
            button.classList.add("active");

            const category = button.dataset.category;

            menuItems.forEach(item => {

                const itemCategory = item.dataset.category;

                if (
                    category === "todos" ||
                    category === itemCategory
                ) {

                    item.style.display = "block";

                    setTimeout(() => {
                        item.style.opacity = "1";
                    }, 50);

                } else {

                    item.style.opacity = "0";

                    setTimeout(() => {
                        item.style.display = "none";
                    }, 200);

                }

            });

        });

    });


    /* =================================================
       FORMULARIO DE CONTACTO
    ================================================= */

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value;

        formMessage.innerHTML = `
            <div class="alert alert-success">
                ¡Gracias, ${nombre}! Tu mensaje fue enviado
                correctamente.
            </div>
        `;

        contactForm.reset();

    });


    /* =================================================
       BOTÓN VOLVER ARRIBA
    ================================================= */

    const btnTop = document.getElementById("btnTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            btnTop.style.display = "flex";
        } else {
            btnTop.style.display = "none";
        }

    });

    btnTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =================================================
       CERRAR NAVBAR AL SELECCIONAR UNA SECCIÓN
    ================================================= */

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("menuPrincipal");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth < 992) {

                const collapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (collapse) {
                    collapse.hide();
                }

            }

        });

    });


    /* =================================================
       EFECTO DE NAVBAR AL HACER SCROLL
    ================================================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.padding = "8px 0";

        } else {

            navbar.style.padding = "15px 0";

        }

    });

});