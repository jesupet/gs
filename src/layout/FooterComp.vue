<template>
    <footer>
        <div class="container"> 
            <div class="row">
                <div class="col-lg-4 col-12 first-col">
                    <h2 class="light">Sigamos en contacto</h2>
                    <div class="d-flex gap-2">
                        <ButtonComp 
                            buttonText="Contacto" 
                            btnColor="btn-secondary" 
                            :displayLink="true"
                            :hashTag="'/contacto'"
                        />
                        <a href="https://www.linkedin.com/company/gestionsocial/" target="_blank"><img src="@/assets/icons/linkedin_icon.svg" alt="icono linkedin" class="linkedin-icon"></a>
                    </div>
                </div>
                <div class="col-lg col-6 second-col">
                    <p class="p-10 bold pb-3">Santiago</p>
                    <p class="p-10">
                        <a href="tel:+56222313120" target="_blank">+56 22 231 3120</a><br>
                        <a href="mailto:contacto@gs.cl" target="_blank">contacto@gs.cl</a><br>
                        <a href="https://maps.app.goo.gl/Pntc123iUMVU2pPc9" target="_blank">Apoquindo 4660, oficina 1401, Las Condes</a>
                    </p>
                </div>
                <div class="col-lg col-6 third-col">
                    <p class="p-10 bold pb-3">División Sur</p>
                    <p class="p-10">
                        <a href="tel:+56976967695" target="_blank">+56 9 7696 7695</a><br>
                        <a href="mailto:divisionsur@gestionsocial.cl" target="_blank">divisionsur@gestionsocial.cl</a><br>
                        <a href="https://maps.app.goo.gl/45KNqWTFKpDvXbhP9" target="_blank">Calle Klener 299, 5550000, Puerto Varas Los Lagos (Casa Kuschel)</a>
                    </p>
                </div>
                <div class="col-lg-2 col-6 fourth-col">
                    <img src="@/assets/logos/arrow_gs.svg" alt="flecha coral">
                </div>
                <div class="col-lg-1 col-6 fifth-col">
                    <img src="@/assets/logos/isotipo.svg" alt="">
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