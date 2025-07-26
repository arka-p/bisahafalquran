const Section01 = ({ onMulaiClick }) => {
  return (
    <section className="bg-white h-auto place-content-center">
      <div className="mx-auto max-w-screen-xl px-6 pt-6 pb-12 flex flex-col-reverse gap-8 md:grid md:grid-cols-2 md:px-24 md:py-20">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Menghafal Qur’an di Rumah, Serasa di
            <strong className="text-gray-500"><em> Pesantren</em></strong>
          </h1>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Ingin menghafal Al-Qur’an tapi terkendala tempat, waktu, atau belum punya guru? Kini kamu bisa menghafal layaknya di pondok tahfidz — cukup dari rumah, dari mana saja kamu berada.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-6">
            <button
              onClick={onMulaiClick}
              className="rounded-md px-5 py-2.5 text-sm font-medium bg-gray-700 text-white hover:bg-gray-800"
            >
              Mulai Sekarang
            </button>
          </div>
        </div>
        <div>
          <video
            className="aspect-video h-auto rounded-xl xl:rounded-3xl w-full"
            src="https://bisahafalquran.com/wp-content/uploads/2024/12/output.webm"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default Section01;
