import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="bg-brand rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Prêt à libérer votre esprit ?
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10">
              Rejoignez les milliers d'utilisateurs qui ont choisi MemoRing pour ne plus jamais rien oublier.
            </p>
            <Button size="pill" className="bg-white text-brand hover:bg-white/90 text-lg px-10 h-14 font-bold shadow-xl">
              Votez MemoRing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
