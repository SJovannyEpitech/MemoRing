import { Shield, Lock, UserCheck, EyeOff } from "lucide-react";

export function Security() {
  return (
    <section id="security" className="py-24 bg-neutral-light/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Confidentialité avant tout
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
              Vos pensées vous appartiennent. <br/>
              Point final.
            </h2>
            <p className="text-text-slate text-lg mb-8">
              Nous avons conçu MemoRing avec une approche "Privacy First". Vos données sont chiffrées, sécurisées et vous seul en avez le contrôle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <Lock className="w-8 h-8 text-brand mb-4" />
              <h3 className="font-bold text-text-dark mb-2">Chiffrement de bout en bout</h3>
              <p className="text-sm text-text-slate">Vos enregistrements sont chiffrés dès la capture et jusqu'au stockage.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <UserCheck className="w-8 h-8 text-brand mb-4" />
              <h3 className="font-bold text-text-dark mb-2">Contrôle total</h3>
              <p className="text-sm text-text-slate">Supprimez vos données à tout moment. Exportez-les quand vous voulez.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <EyeOff className="w-8 h-8 text-brand mb-4" />
              <h3 className="font-bold text-text-dark mb-2">Pas de vente de données</h3>
              <p className="text-sm text-text-slate">Nous ne vendons jamais vos données personnelles à des tiers.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <Shield className="w-8 h-8 text-brand mb-4" />
              <h3 className="font-bold text-text-dark mb-2">Conforme RGPD</h3>
              <p className="text-sm text-text-slate">Respect strict des normes européennes de protection des données.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
