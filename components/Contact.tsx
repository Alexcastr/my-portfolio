import Link from "next/link";

export const Contact = () => {
  return (
    <section id="contact_section" className="px-4 py-10 bg-gray-700 ">
      <h2 className="text-4xl font-bold text-center pb-10">Contact</h2>
      <div className="bg-gray-500 p-10 shadow-xl mb-3 rounded-md">
        <div className="grid grid-cols-4">
          <div className="col-span-1 bg-cyan-200 px-3 py-2 rounded-full m-auto ">
            <span className="material-symbols-outlined text-4xl align-center">
              person_pin_circle
            </span>
          </div>
          <div className="col-span-3">
            <h4 className="text-gray-800">Location:</h4>
            <p>Castilla la nueva</p>
          </div>
        </div>

        <div className="grid grid-cols-4 my-4">
          <div className="col-span-1 bg-cyan-200 px-3 py-2 rounded-full m-auto ">
            <span className="material-symbols-outlined text-4xl align-center">
              contact_mail
            </span>
          </div>
          <div className="col-span-3">
            <h4 className="text-gray-800">Email:</h4>
            <p>castro.t.alex@gmail.com</p>
          </div>
        </div>

        <div className="grid grid-cols-4">
          <Link
            
            href="https://api.whatsapp.com/send?phone=573186824243&text=Hola, Nececito mas informacion!"
           
            legacyBehavior
          >
            <a target="_blank" className="col-span-1 bg-cyan-200 px-3 py-2 rounded-full m-auto hover:bg-cyan-700 hover:text-gray-100 transition duration-300">
              <span className="material-symbols-outlined text-4xl p-none">
                phone_in_talk
              </span>
            </a>
          </Link>

          <div className="col-span-3">
            <h4 className="text-gray-800">Conctact me</h4>
            <p>Send me a message, click on the cellphone icon</p>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <iframe
          title="Mapa de Google Maps ubicado en el pabellón de la Zona deportiva Port de Barcelona."
          className="block m-auto w-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7961.835208522216!2d-73.69454182853202!3d3.827844743796214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e10d297ffc24b%3A0x79d4e098446fa1ea!2sCastilla%20La%20Nueva%2C%20Meta!5e0!3m2!1ses!2sco!4v1630428695731!5m2!1ses!2sco"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

