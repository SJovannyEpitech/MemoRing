import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-32 w-80 overflow-hidden">
                <Image 
                  src="/logo.svg" 
                  alt="MemoRing Logo" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
            </Link>
            <p className="text-text-slate text-sm max-w-xs">
              La bague connectée qui augmente votre mémoire et simplifie votre vie quotidienne grâce à l'IA.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-text-dark mb-4">Produit</h4>
            <ul className="space-y-2 text-sm text-text-slate">
              <li><Link href="#" className="hover:text-brand">Fonctionnalités</Link></li>
              <li><Link href="#" className="hover:text-brand">La Bague</Link></li>
              <li><Link href="#" className="hover:text-brand">Tarifs</Link></li>
              <li><Link href="#" className="hover:text-brand">Télécharger l'app</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-dark mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm text-text-slate">
              <li><Link href="#" className="hover:text-brand">À propos</Link></li>
              <li><Link href="#" className="hover:text-brand">Blog</Link></li>
              <li><Link href="#" className="hover:text-brand">Carrières</Link></li>
              <li><Link href="#" className="hover:text-brand">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-dark mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-text-slate">
              <li><Link href="#" className="hover:text-brand">Confidentialité</Link></li>
              <li><Link href="#" className="hover:text-brand">CGU</Link></li>
              <li><Link href="#" className="hover:text-brand">Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-slate">
            © {new Date().getFullYear()} MemoRing Inc. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {/* Social icons placeholders */}
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
