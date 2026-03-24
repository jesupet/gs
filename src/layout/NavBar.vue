<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand"><img src="@/assets/logos/logotipo_navbar.svg" alt="logo gs"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <router-link to="/" class="nav-link p-16" aria-current="page" href="#">Home</router-link>
                </li>
                <li class="nav-item">
                    <ButtonComp 
                        :buttonText="'Contacto'" 
                        :btnColor="'btn-primary'" 
                        :hashTag="'/contacto'" 
                        :displayLink="true"
                    />
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>    
import ButtonComp from '@/components/ButtonComp.vue';
export default {
    name: 'NavBar',
    components: {
        ButtonComp
    },
}
</script>