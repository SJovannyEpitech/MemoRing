"use client";

import { Button } from "@/components/ui/button";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import VoteCounter from "@/components/vote-counter";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export function CTA() {
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch initial votes
    fetch("/api/vote")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.votes === 'number') setVotes(data.votes);
      })
      .catch((err) => console.error("Failed to fetch votes:", err));

    // Check local storage
    const voted = localStorage.getItem("hasVoted");
    if (voted) setHasVoted(true);
  }, []);

  const handleVote = async () => {
    if (hasVoted || isLoading) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/vote", { method: "POST" });
      const data = await res.json();
      
      if (data.votes) {
        setVotes(data.votes);
        setHasVoted(true);
        localStorage.setItem("hasVoted", "true");
      }
    } catch (error) {
      console.error("Failed to vote:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="vote" className="py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <CardContainer className="inter-var">
          <CardBody className="bg-brand relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-[3rem] p-12 md:p-24 border">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <CardItem
                translateZ="50"
                className="text-3xl md:text-5xl font-bold text-white mb-6 w-full"
              >
                Prêt à libérer votre esprit ?
              </CardItem>
              
              <CardItem
                as="p"
                translateZ="60"
                className="text-white/80 text-lg md:text-xl mb-10 w-full"
              >
                Rejoignez les milliers d'utilisateurs qui ont choisi MemoRing pour ne plus jamais rien oublier.
              </CardItem>
              
              <CardItem
                translateZ="100"
                className="w-full flex flex-col md:flex-row items-center justify-center gap-6"
              >
                <Button 
                  size="pill" 
                  onClick={handleVote}
                  disabled={hasVoted || isLoading}
                  className={`bg-white text-brand hover:bg-white/90 text-lg px-10 h-14 font-bold shadow-xl transition-all duration-200 ${
                    hasVoted ? "opacity-80 cursor-not-allowed" : "hover:scale-105"
                  }`}
                >
                  {isLoading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : hasVoted ? (
                    "Merci pour votre vote !"
                  ) : (
                    "Votez MemoRing"
                  )}
                </Button>
                
                <VoteCounter count={votes} />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
}
