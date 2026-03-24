<template>
    <footer>
        <hr>
        <div class="container"> 
            <div class="row">
                <div class="col-lg-4 first-col">
                    <h2 class="light">Sigamos en contacto</h2>
                    <div class="d-flex gap-4">
                        <ButtonComp buttonText="Contacto" btnColor="btn-secondary" />
                        <a href=""><img src="@/assets/icons/linkedin_icon.svg" alt="icono linkedin" class="linkedin-icon"></a>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue';
export default {
    name: 'FooterComp',
    components: {
        ButtonComp
    }
}
</script>