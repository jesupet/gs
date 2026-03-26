<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand"><img src="@/assets/logos/logotipo_navbar.svg" alt="logo gs"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <router-link to="/" class="navbar-brand"><img src="@/assets/logos/logotipo_navbar.svg" alt="logo gs"></router-link>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end text-center flex-grow-1 pe-3">
                        <li class="nav-item">
                            <p class="number-menu">01</p>
                        <router-link
                            to="/"
                            class="nav-link p-16"
                            aria-current="page"
                            @click="handleNavItemClick"
                        >Home</router-link>
                        </li>                    
                    <li class="nav-item" @click="handleNavItemClick">
                            <p class="number-menu">02</p>
                        <ButtonComp 
                                :buttonText="'Contacto'" 
                                :btnColor="'btn-primary'" 
                                :hashTag="'/contacto'" 
                                :displayLink="true"
                        />
                        </li>
                    </ul>
                    <img src="@/assets/logos/arrow_white.svg" alt="flecha blanca" class="arrow-white">
                </div>
            </div>
        </div>
    </nav>
</template>

<script>    
import ButtonComp from '@/components/ButtonComp.vue';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
export default {
    name: 'NavBar',
    components: {
        ButtonComp
    },
    methods: {
        handleNavItemClick() {
            // Solo cerramos en mobile (misma breakpoint que tu CSS del navbar)
            if (!window.matchMedia('(max-width: 1000px)').matches) return

            const el = document.getElementById('offcanvasNavbar')
            if (!el) return

            const instance = Offcanvas.getInstance(el) || new Offcanvas(el)
            instance.hide()

            // Cuando hay navegación inmediata, Bootstrap a veces no alcanza a limpiar
            // el backdrop antes de que el componente se desmonte.
            setTimeout(() => {
                document
                    .querySelectorAll('.offcanvas-backdrop, .modal-backdrop')
                    .forEach((node) => node.remove())
                document.body.classList.remove('modal-open')
            }, 250)
        },
    },
}
</script>