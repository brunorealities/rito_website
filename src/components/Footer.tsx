import logoSlogan from '@/src/lib/assets/logo/logo_slogan.png';

export function Footer() {
  return (
    <footer className="bg-soft-black text-warm-white py-8 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest opacity-60">
          <span>OCEANICO II - TRANSIÇÃO ENERGÉTICA E ECONOMIA AZUL</span>
          <span>•</span>
          <span>2025</span>
          <span>•</span>
          <span>rito.cc</span>
          <span>•</span>
          <span>contato@rito.cc</span>
          <span>•</span>
          <span>@rito.cc</span>
        </div>

        <div className="flex items-center">
          <img
            src={logoSlogan}
            alt="Rito - Reimagination Technologies"
            className="h-14 w-auto object-contain brightness-0 invert opacity-60"
          />
        </div>
      </div>
    </footer>
  );
}
