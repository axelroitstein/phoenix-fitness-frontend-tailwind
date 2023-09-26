"use client";

export default function LandingView() {
  return (
    <main>
      <div className="container my-12 mx-auto md:px-6 mb-56">
        <section className="text-center lg:text-left">
          <h2 className="mb-12 text-center text-3xl font-bold">
            El cambio está en vos.
          </h2>

          <div className="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
            <div
              className="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="https://www.elindependiente.com/wp-content/uploads/2023/07/en-cuanto-tiempo-se-nota-el-gimnasio-1.png"
                  alt="Musculación"
                  className="mx-auto mb-4 rounded-t-lg"
                />
                <svg
                  className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">Musculación y Clases</h5>
                <p className="text-base mb-4">
                  ¡Hay un plan para vos! Actívate hoy mismo y únete a un líder
                  de gimnasios.
                </p>
                <div className=" container mx-auto">
                  <p className=" font-bold mb-3">
                    La compañía de fitness más grande de Argentina
                  </p>
                  <ul className="list-disc list-inside text-left ">
                    <li>Amplios horarios</li>
                    <li>Salones climatizados</li>
                    <li>Servicio de lockers</li>
                    <li>Piletas y espacios outdoor</li>
                    <li>App de nutrición gratuita</li>
                    <li>SportClub Online</li>
                    <li>Wi-fi en todas las sedes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
 <img
                  src="https://media.gettyimages.com/id/1183038884/es/foto/vista-de-una-fila-de-cintas-de-correr-en-un-gimnasio-con-gente.jpg?s=612x612&w=gi&k=20&c=QMfm4ySdwtdA_gBeFA16PjQLBdsen_NDTuYxZgJ6riI="
                  alt="Tu Rutina, Tus Reglas"
                  className="mx-auto mb-4 rounded-t-lg"
                />
                <svg
                  className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">Tu Rutina, tus Reglas</h5>
                <p className="font-bold mb-7">
                  Entrená en un espacio que se adapta a tus necesidades
                </p>
                <p className="">
                  Sectores cardio con cintas, bicicletas y escaladoras. Áreas de
                  musculación y elementos de entrenamiento. Decenas de clases
                  semanales incluyendo: funcional, boxeo, yoga, Les Mills, Zumba
                  y mucho más. Pileta y espacios outdoor.
                </p>
              </div>
            </div>

            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src="https://i.blogs.es/1b9ba7/1366_2000/650_1200.webp"
                  alt="Tu Rutina, Tus Reglas"
                  className="mx-auto mb-4 rounded-t-lg"
                />
                <svg
                  className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="w-2/3 container mx-auto">
          <h2 className="text-lg font-semibold mb-4 text">Asociarse está buenisimo!</h2>
          <p className=" font-bold  mb-8">La compañía de fitness más grande de Argentina</p>
          <ul className="list-disc list-inside text-left text-base ">
          <li>Tarjeta del deporte 365</li>
            <li>Descuentos en comercios</li>
            <li>Clarín digital ilimitado</li>
            <li>Sorteos semanales</li>
            <li>Y mucho más</li>
          </ul>
        </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
