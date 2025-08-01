const Header = ({ onDaftarClick }) => {
  return (
    <header className="bg-zinc-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-24">
        <div className="flex h-16 items-center justify-between">
          <a className="w-44" href="#">
            <img src="/LogoBisaHafalQuran.webp" alt="Logo Bisa Hafal Quran" />
          </a>
          <button
            onClick={onDaftarClick}
            className="rounded-md px-5 py-2.5 text-sm font-medium bg-gray-700 text-white hover:bg-gray-800"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
