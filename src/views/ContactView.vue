<template>
  <div id="contacto">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
            <h1 class="white">¡Hablemos!</h1>
            <div class="d-lg-block d-flex">
              <div class="contact-text">
                <p class="p-16 white mb-3">
                  El equipo de GS está siempre disponible para contestar tus dudas o solicitudes.
                </p>
                <p class="p-16 white">
                  Completa el formulario y te contactaremos a la brevedad.
                </p>
                </div>
                <div class="rrss">
                  <a href="mailto:contacto@gs.cl"><img src="@/assets/icons/mail_icon.svg" alt="icono mail" class="mail-icon"></a>
                  <a href="https://www.linkedin.com/company/gestionsocial/" target="_blank"><img src="@/assets/icons/linkedin_icon.svg" alt="icono linkedin" class="linkedin-icon"></a>
                </div>
                <div class="contact-info d-none d-lg-block">
                  <a href="tel:+56222313120" target="_blank"><p>+56 22 231 3120</p></a>
                <a href="https://maps.app.goo.gl/Pntc123iUMVU2pPc9" target="_blank"><p>Apoquindo 4660, oficina 1401, Las Condes</p></a>
                </div>
              </div>
          </div>
          <div class="col-lg-6 mt-3">
            <form>
              <div class="mb-3">
                <input type="text" class="form-control" id="exampleInputName" aria-describedby="basic-addon1"
                placeholder="Nombre completo">
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Mail">
              </div>
              <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Mensaje"></textarea>
              </div>
              <button type="submit" class="btn btn-tertiary">Enviar</button>
            </form>
            <div class="contact-info d-lg-none">
                <a href="tel:+56222313120" target="_blank"><p>+56 22 231 3120</p></a>
                <a href="https://maps.app.goo.gl/Pntc123iUMVU2pPc9" target="_blank"><p>Apoquindo 4660, oficina 1401, Las Condes</p></a>
              </div>
          </div>
        </div>
      </div>
     
  </div>
</template>
