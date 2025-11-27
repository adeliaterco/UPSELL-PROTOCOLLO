"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Clock, Users, DollarSign, Star, CheckCircle, Shield, Play, Zap, TrendingUp, Award, Heart, Eye, AlertTriangle, X, Activity } from "lucide-react"
import Script from "next/script"
import Image from "next/image"

// ============================================
// 🖼️ CONFIGURAÇÃO DE IMAGENS - TROQUE AQUI!
// ============================================
const IMAGES = {
  // HERO SECTION
  heroMainImage: "/images/hero-woman-active.jpg", // ← Mulher 50+ ativa e feliz
  
  // ELON MUSK
  elonMuskPhoto: "/images/elon-musk.jpg", // ← Foto oficial do Elon Musk
  
  // CIENTÍFICAS
  zombieCellsIllustration: "/images/zombie-cells.jpg", // ← Ilustração células senescentes
  boneXray: "/images/bone-xray-comparison.jpg", // ← Raio-X ossos antes/depois
  nasaResearch: "/images/nasa-research.jpg", // ← Pesquisa NASA/astronautas
  
  // PRODUTO
  productPackage: "/images/protocol-package.jpg", // ← Embalagem do protocolo
  productBadge: "/images/protocol-badge.png", // ← Badge/selo do produto
  
  // DEPOIMENTOS
  testimonialHelen: "/images/testimonial-helen.jpg", // ← Helen, 68 anos
  testimonialRuth: "/images/testimonial-ruth.jpg", // ← Ruth, 64 anos
  testimonialDiane: "/images/testimonial-diane.jpg", // ← Diane, 66 anos
  
  // AUTORIDADE MÉDICA
  draMarina: "/images/dra-marina-santos.jpg", // ← Dra. Marina Santos
  
  // ÍCONES/BADGES
  guaranteeBadge: "/images/30-day-guarantee-badge.png", // ← Selo garantia 30 dias
  securePayment: "/images/secure-payment-badge.png", // ← Selo pagamento seguro
  
  // BENEFÍCIOS (opcional - podem ser ícones Lucide)
  strongBonesIcon: "/images/icon-strong-bones.svg",
  flexibleJointsIcon: "/images/icon-flexible-joints.svg",
  painReliefIcon: "/images/icon-pain-relief.svg",
  confidenceIcon: "/images/icon-confidence.svg",
}

// ============================================
// 🔗 CONFIGURAÇÃO DE LINKS
// ============================================
const CHECKOUT_URL = "https://pay.hotmart.com/P103120932I?off=r5yaffdw"

// ============================================
// 📊 TRACKING & ANALYTICS
// ============================================

// GA otimizado com debounce
const enviarEvento = (() => {
  let queue = [];
  let timeout;
  
  return (evento, props = {}) => {
    queue.push({ evento, props });
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      if (typeof window !== 'undefined' && window.gtag && queue.length) {
        queue.forEach(({ evento, props }) => {
          window.gtag('event', evento, props);
        });
        queue = [];
      }
    }, 300);
  };
})();

// Hook para Intersection Observer com fallback
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!window.IntersectionObserver) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting];
};

export default function ProtocoloAntiCelulasZumbis() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 19, seconds: 47 });
  const [isLoading, setIsLoading] = useState(false);
  const [pessoasVisualizando, setPessoasVisualizando] = useState(127);
  
  // Refs para lazy loading
  const [heroRef, heroInView] = useIntersectionObserver({ threshold: 0.1 });
  const [priceRef, priceInView] = useIntersectionObserver({ threshold: 0.1 });

  // Timer otimizado
  useEffect(() => {
    if (!heroInView) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [heroInView]);

  // Simulação de atividade em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setPessoasVisualizando(prev => {
        const variation = Math.floor(Math.random() * 15) - 7;
        return Math.max(110, Math.min(150, prev + variation));
      });
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  // CTA Principal
  const handleCTA = useCallback((e, origem) => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    console.log(`🎯 CTA clicado - Origem: ${origem}`);
    
    // FACEBOOK PIXEL - INITIATE CHECKOUT
    if (typeof window !== 'undefined') {
      
      if (window.fbq) {
        try {
          window.fbq('track', 'InitiateCheckout', {
            content_name: 'Protocolo Anti-Células Zumbis',
            content_category: 'Saúde Óssea',
            content_ids: ['protocolo-celulas-zumbis'],
            value: 27.00,
            currency: 'EUR',
            num_items: 1,
            origem: origem,
            timestamp: Date.now()
          });
          console.log('✅ InitiateCheckout disparado - Origem:', origem);
        } catch (error) {
          console.warn('⚠️ Erro fbq:', error);
        }
      }
      
      if (window.utmify) {
        try {
          if (window.utmify.track) {
            window.utmify.track('InitiateCheckout', {
              content_name: 'Protocolo Anti-Células Zumbis',
              value: 27.00,
              currency: 'EUR',
              origem: origem
            });
          }
        } catch (error) {
          console.warn('⚠️ Erro UTMify:', error);
        }
      }
      
      if (window.dataLayer) {
        try {
          window.dataLayer.push({
            event: 'initiate_checkout',
            ecommerce: {
              currency: 'EUR',
              value: 27.00,
              items: [{
                item_name: 'Protocolo Anti-Células Zumbis',
                item_category: 'Saúde Óssea',
                price: 27.00,
                quantity: 1
              }]
            },
            origem: origem,
            timestamp: Date.now()
          });
        } catch (error) {
          console.warn('⚠️ Erro dataLayer:', error);
        }
      }
    }
    
    enviarEvento('cta_click', { origem, timestamp: Date.now() });
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // REDIRECIONAMENTO PARA CHECKOUT
    setTimeout(() => {
      console.log('🚀 Redirecionando para checkout...');
      window.location.href = CHECKOUT_URL;
    }, 800);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, [isLoading]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 overflow-x-hidden">
      
      {/* ============================================ */}
      {/* SCRIPTS DE TRACKING */}
      {/* ============================================ */}
      
      <link rel="preconnect" href="https://cdn.utmify.com.br" />
      <link rel="preconnect" href="https://api6.ipify.org" />
      <link rel="preconnect" href="https://pay.hotmart.com" />

      <Script id="facebook-pixel" strategy="lazyOnload">
        {`
          window.pixelId = "SEU_PIXEL_ID_AQUI"; // ← COLE SEU ID DO PIXEL AQUI
          var a = document.createElement("script");
          a.setAttribute("async", "");
          a.setAttribute("defer", "");
          a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
          document.head.appendChild(a);
        `}
      </Script>

      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck
        data-utmify-prevent-subids
        strategy="lazyOnload"
      />

      {/* ============================================ */}
      {/* SEÇÃO 1: HERO - HEADLINE PRINCIPAL */}
      {/* ============================================ */}
      
      <section ref={heroRef} className="relative py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-cyan-900/40"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 fade-in-mobile">
          
          <div className="text-center mb-12">
            
            {/* Badge de Destaque */}
            <Badge className="bg-amber-500 text-white px-6 py-2 text-sm font-bold mb-6">
              🔬 DESCOBERTA REVOLUCIONÁRIA DE ELON MUSK
            </Badge>
            
            {/* Headline Principal */}
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Elon Musk: O único protocolo que todos os adultos com mais de 50 anos devem seguir para{" "}
              <span className="text-amber-400">reconstruir a densidade óssea naturalmente.</span>
            </h1>
            
            {/* 🖼️ IMAGEM HERO - Mulher 50+ ativa */}
            <div className="max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src={IMAGES.heroMainImage} 
                alt="Mulher ativa acima de 50 anos" 
                width={1200} 
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
            
            {/* Subtítulo Emocional */}
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto">
              Os primeiros sinais de deterioração óssea e articular são fáceis de passar despercebidos.
              Com muita frequência, os médicos ignoram os sinais de alerta, com consequências devastadoras; 
              <strong className="text-red-400"> todos os meses, cerca de 1.100 pessoas morrem após fraturarem o quadril devido à baixa densidade óssea.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 2: HISTÓRIA PESSOAL (GANCHO EMOCIONAL) */}
      {/* ============================================ */}
      
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 p-8">
            <CardContent className="p-0">
              
              <div className="flex items-start mb-6">
                <Heart className="w-12 h-12 text-red-400 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Na verdade, assisti horrorizada enquanto minha mãe morria lentamente de osteoporose.
                  </h2>
                  <p className="text-slate-200 text-lg leading-relaxed mb-4">
                    Ver alguém que você ama morrer lentamente, em agonia, sem saber nada sobre a doença que o matou, é de partir o coração.
                  </p>
                  <p className="text-slate-200 text-lg leading-relaxed mb-4">
                    <strong className="text-amber-400">A pior parte?</strong> Três médicos diferentes nos disseram que era apenas "envelhecimento normal". Que mulheres da idade dela deveriam esperar "diminuir o ritmo".
                  </p>
                  <p className="text-slate-200 text-lg leading-relaxed font-bold">
                    Mas não foi o envelhecimento normal que levou minha mãe...
                  </p>
                </div>
              </div>

              <div className="bg-red-500/20 border-l-4 border-red-400 p-6 rounded-lg">
                <p className="text-white text-lg leading-relaxed">
                  Porque uma nova pesquisa inovadora sugere que essa crença pode estar <strong>perigosamente errada.</strong>
                </p>
                <p className="text-slate-200 text-base leading-relaxed mt-4">
                  Na verdade, estudos clínicos mostram agora que milhões de mulheres com mais de 50 anos estão sofrendo perda óssea e de cartilagem acelerada, não simplesmente por causa do envelhecimento, mas devido a uma <strong className="text-red-300">invasão celular oculta</strong> que silenciosamente sabota seus ossos e articulações por dentro.
                </p>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 3: PERGUNTA PROVOCATIVA */}
      {/* ============================================ */}
      
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-300 mb-4">
              Então, por que algumas mulheres permanecem fortes, ativas e sem dor até os 70 anos, enquanto outras começam a se deteriorar aos 50 — mesmo seguindo as recomendações médicas?
            </h3>
            <p className="text-slate-200 text-lg">
              Essa pergunta me levou a uma busca incessante por respostas que iam além de comprimidos de cálcio sem graça, anti-inflamatórios ou suplementos caros que nunca funcionavam.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 4: DESCOBERTA DE ELON MUSK */}
      {/* ============================================ */}
      
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-8">
            <Badge className="bg-purple-500 text-white px-6 py-2 text-base font-bold mb-4">
              🚀 DESCOBERTA REVOLUCIONÁRIA
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              A descoberta revolucionária de Elon Musk — e a verdade alarmante sobre a perda óssea e a degeneração articular após os 50 anos.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* 🖼️ IMAGEM - Elon Musk */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src={IMAGES.elonMuskPhoto} 
                alt="Elon Musk" 
                width={600} 
                height={600}
                className="w-full h-auto"
              />
            </div>

            <div>
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 p-6">
                <CardContent className="p-0">
                  
                  <p className="text-slate-200 text-lg leading-relaxed mb-4">
                    <strong className="text-white">Elon Musk não estava apenas lançando foguetes</strong> — ele acidentalmente revelou uma crise silenciosa de saúde que está destruindo milhões de mulheres de dentro para fora.
                  </p>
                  
                  <p className="text-slate-200 text-lg leading-relaxed mb-4">
                    Durante anos, a NASA enfrentou um grande problema: os astronautas perdem rapidamente densidade óssea e força articular no espaço — <strong className="text-amber-400">da mesma forma que milhões de mulheres ao chegarem aos 50 anos.</strong> Musk queria respostas. Não apenas para os astronautas... mas para todos que envelhecem na Terra.
                  </p>

                  <div className="bg-purple-500/20 border border-purple-400 rounded-lg p-4 mb-4">
                    <p className="text-purple-200 font-bold text-base">
                      🔬 Sua equipe de pesquisa fez uma conexão surpreendente: o mesmo mecanismo biológico que destrói os ossos dos astronautas no espaço está silenciosamente atacando as mulheres à medida que envelhecem na Terra.
                    </p>
                  </div>

                  <p className="text-slate-200 text-lg leading-relaxed">
                    E no cerne desse problema está um grupo perturbador de células disfuncionais — agora conhecidas como <strong className="text-red-400">"células zumbis".</strong>
                  </p>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 5: CÉLULAS ZUMBIS (PROBLEMA) */}
      {/* ============================================ */}
      
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              <span className="text-red-400">⚠️ "Células Zumbis"</span> — A Ameaça Invisível Destruindo Seus Ossos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* 🖼️ IMAGEM - Células Zumbis */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src={IMAGES.zombieCellsIllustration} 
                alt="Ilustração de células zumbis" 
                width={600} 
                height={600}
                className="w-full h-auto"
              />
            </div>

            <Card className="bg-white/10 backdrop-blur-lg border-2 border-red-400 p-6">
              <CardContent className="p-0">
                
                <h3 className="text-2xl font-bold text-red-300 mb-4">
                  O que são "Células Zumbis"?
                </h3>
                
                <p className="text-slate-200 text-base leading-relaxed mb-4">
                  <strong className="text-white">As "células zumbis" são células senescentes que se recusam a morrer,</strong> mas, em vez disso, permanecem no corpo, inundando os tecidos circundantes com substâncias químicas inflamatórias que:
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-200 text-sm">Corroem a estrutura óssea</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-200 text-sm">Destroem a cartilagem</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-200 text-sm">Aceleram a dor e rigidez nas articulações</span>
                  </div>
                </div>

                <div className="bg-red-500/20 border border-red-400 rounded-lg p-4">
                  <p className="text-red-200 font-bold text-lg italic">
                    "As células zumbis não apenas envelhecem seu corpo... elas sabotam ativamente seus ossos e articulações — muitas vezes décadas antes do aparecimento dos sintomas."
                  </p>
                  <p className="text-red-300 text-sm mt-2">
                    — Equipe de pesquisa de Elon Musk
                  </p>
                </div>

              </CardContent>
            </Card>
          </div>

          {/* Alerta Final */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-400 p-8 max-w-3xl mx-auto">
              <CardContent className="p-0">
                <Activity className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <p className="text-white text-2xl font-bold mb-4">
                  Desde 2020, o acúmulo de células zumbis tornou-se uma epidemia invisível em mulheres idosas, roubando silenciosamente sua força, mobilidade e independência dia após dia.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 6: PROBLEMA AMPLIFICADO */}
      {/* ============================================ */}
      
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900/60 to-red-900/40">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              "Seus ossos não estão apenas fracos — eles estão sendo{" "}
              <span className="text-red-400">atacados de dentro para fora</span>"
            </h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-2 border-red-400 p-8">
            <CardContent className="p-0">
              
              <p className="text-slate-200 text-lg leading-relaxed mb-6">
                No interior do seu corpo, milhões de células estão se tornando rebeldes — transformando-se no que os cientistas agora chamam de "células zumbis".
              </p>

              <p className="text-slate-200 text-lg leading-relaxed mb-6">
                Essas células disfuncionais <strong className="text-white">se recusam a morrer... mas também não se curam.</strong>
              </p>

              <p className="text-slate-200 text-lg leading-relaxed mb-6">
                Em vez disso, elas liberam substâncias químicas inflamatórias tóxicas que corroem seus ossos e cartilagens de dentro para fora.
              </p>

              <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-6 mb-6">
                <p className="text-blue-200 text-base leading-relaxed mb-4">
                  <strong className="text-white">Quando você é jovem,</strong> seu corpo consegue eliminar essas células anômalas antes que elas causem muitos danos.
                </p>
                <p className="text-red-300 text-lg font-bold">
                  Mas depois dos 50, esse sistema de defesa começa a falhar.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-red-300 mb-4">
                E o que acontece a seguir é aterrador:
              </h3>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-red-500/20 border border-red-400 rounded-lg p-4 text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">-2%</div>
                  <div className="text-sm text-red-200">Densidade óssea diminui ao ano</div>
                </div>
                <div className="bg-red-500/20 border border-red-400 rounded-lg p-4 text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">📉</div>
                  <div className="text-sm text-red-200">Cartilagem mais fina e inflamada</div>
                </div>
                <div className="bg-red-500/20 border border-red-400 rounded-lg p-4 text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">💔</div>
                  <div className="text-sm text-red-200">Estrutura óssea quebradiça</div>
                </div>
              </div>

              <div className="bg-red-500/30 border-2 border-red-400 rounded-lg p-6 text-center">
                <p className="text-white text-xl font-bold mb-2">
                  Você pode não sentir nada até que já seja tarde demais.
                </p>
                <p className="text-red-200 text-base">
                  Isso não é apenas rigidez. <strong>É deterioração estrutural.</strong>
                </p>
                <p className="text-red-300 text-lg font-bold mt-4">
                  Seu esqueleto está se desfazendo — pedaço por pedaço.
                </p>
              </div>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 7: SINTOMAS DE ALERTA */}
      {/* ============================================ */}
      
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <Badge className="bg-amber-500 text-white px-6 py-2 text-base font-bold mb-4">
              ⚠️ SINAIS DE ALERTA
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Se você está apresentando esses sintomas, seus ossos e articulações podem já estar comprometidos.
            </h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-2 border-amber-400 p-8">
            <CardContent className="p-0">
              
              <p className="text-slate-200 text-lg leading-relaxed mb-8">
                Se você está enfrentando algum dos seguintes problemas, pode ser um sinal de que <strong className="text-red-300">células zumbis já estão destruindo seus ossos e articulações de dentro para fora:</strong>
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                
                <div className="bg-red-500/10 border border-red-400/50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base mb-2">Rigidez ou dor profunda</p>
                      <p className="text-slate-300 text-sm">Persistente nos quadris, joelhos ou região lombar</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-400/50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base mb-2">Sons de rangido ou estalo</p>
                      <p className="text-slate-300 text-sm">Crepitação nas articulações ao se mover</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-400/50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base mb-2">Dificuldade em levantar-se</p>
                      <p className="text-slate-300 text-sm">De uma cadeira sem usar os braços</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-400/50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base mb-2">Medo de cair</p>
                      <p className="text-slate-300 text-sm">Especialmente em escadas ou terrenos irregulares</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-400/50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base mb-2">Diminuição da altura</p>
                      <p className="text-slate-300 text-sm">Ou postura visivelmente curvada</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-400/50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base mb-2">Fraqueza muscular</p>
                      <p className="text-slate-300 text-sm">Ao carregar compras, subir escadas ou caminhar</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="bg-amber-500/20 border-l-4 border-amber-400 p-6 rounded-lg">
                <p className="text-amber-200 text-lg leading-relaxed mb-4">
                  <strong className="text-white">São sinais de alerta de deterioração óssea</strong> — um sinal de que agentes inflamatórios estão corroendo a densidade óssea e a cartilagem mais rápido do que o corpo consegue repará-las.
                </p>
                <p className="text-white text-base font-bold">
                  E eventualmente… você começa a dizer não às coisas que davam sentido à vida:
                </p>
                <p className="text-slate-300 text-base mt-2">
                  Jardinagem • Viajar • Brincando com os netos • Até mesmo ir à igreja ou visitar amigos.
                </p>
              </div>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 8: CRÍTICA A TRATAMENTOS CONVENCIONAIS */}
      {/* ============================================ */}
      
      <section className="py-16 px-4 bg-gradient-to-r from-red-900/40 to-slate-900/60">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Por que os tratamentos "padrão" não apenas <span className="text-red-400">falham</span>, como também <span className="text-red-400">pioram a situação?</span>
            </h2>
          </div>

          <div className="space-y-6">
            
            {/* Cálcio */}
            <Card className="bg-white/10 backdrop-blur-lg border-2 border-red-400 p-6">
              <CardContent className="p-0">
                <div className="flex items-start">
                  <X className="w-8 h-8 text-red-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-red-300 mb-3">Suplementos de cálcio?</h3>
                    <p className="text-slate-200 text-base leading-relaxed">
                      Você absorve muito pouco disso. O que você absorve pode acabar <strong className="text-red-300">endurecendo suas artérias mais do que seus ossos.</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bifosfonatos */}
            <Card className="bg-white/10 backdrop-blur-lg border-2 border-red-400 p-6">
              <CardContent className="p-0">
                <div className="flex items-start">
                  <X className="w-8 h-8 text-red-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-red-300 mb-3">Bifosfonatos como Fosamax ou Boniva?</h3>
                    <p className="text-slate-200 text-base leading-relaxed mb-4">
                      Esses medicamentos podem retardar temporariamente a perda óssea, mas <strong className="text-white">a que custo?</strong>
                    </p>
                    <div className="bg-red-500/20 border border-red-400 rounded-lg p-4">
                      <p className="text-red-200 font-bold text-sm mb-2">Efeitos colaterais como:</p>
                      <ul className="space-y-1 text-sm text-slate-300">
                        <li>• Necrose óssea na mandíbula</li>
                        <li>• Úlceras</li>
                        <li>• Câncer de esôfago</li>
                        <li>• Alto risco de fraturas espontâneas</li>
                      </ul>
                    </div>
                    <p className="text-red-300 font-bold text-base mt-4">
                      Medicamentos destinados a prevenir fraturas podem, na verdade, causá-las.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Glucosamina */}
            <Card className="bg-white/10 backdrop-blur-lg border-2 border-red-400 p-6">
              <CardContent className="p-0">
                <div className="flex items-start">
                  <X className="w-8 h-8 text-red-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-red-300 mb-3">Glucosamina e condroitina?</h3>
                    <p className="text-slate-200 text-base leading-relaxed">
                      Estudo após estudo mostra <strong className="text-red-300">pouca ou nenhuma melhoria mensurável</strong> no espaço articular ou na mobilidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 9: URGÊNCIA EMOCIONAL */}
      {/* ============================================ */}
      
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          <Card className="bg-gradient-to-r from-blue-500/20 to-green-500/20 border-2 border-green-400 p-8">
            <CardContent className="p-0 text-center">
              
              <Activity className="w-16 h-16 text-green-400 mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Se você ainda não está acamada, seu corpo ainda está <span className="text-green-400">implorando por cura.</span>
              </h2>

              <p className="text-slate-200 text-lg leading-relaxed mb-6">
                O que você está sentindo agora não é apenas dor.
              </p>
              <p className="text-white text-xl font-bold mb-6">
                É um sinal. Um último aviso.
              </p>

              <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-6 mb-6 text-left">
                <p className="text-slate-200 text-base leading-relaxed mb-4">
                  Porque, no interior dos seus ossos e articulações, ainda existem células vivas tentando reconstruir, tentando manter a posição.
                </p>
                <p className="text-white text-base font-bold mb-4">
                  Mas elas estão sobrecarregadas.
                </p>
                <p className="text-red-300 text-sm">
                  Rodeadas por inflamação. Sufocadas por células zumbis. Privadas dos estímulos necessários para sobreviver.
                </p>
              </div>

              <div className="bg-red-500/20 border-l-4 border-red-400 p-6 rounded-lg mb-6 text-left">
                <p className="text-red-200 text-lg font-bold mb-2">
                  Quando a dor desaparece completamente? Isso não é cura. Isso é colapso.
                </p>
              </div>

              <div className="bg-green-500/20 border border-green-400 rounded-lg p-6 text-left">
                <p className="text-green-200 text-base leading-relaxed mb-4">
                  <strong className="text-white">Mas se você ainda sente desconforto</strong> — se seu corpo ainda está reagindo — isso significa que ainda há tempo.
                </p>
                <p className="text-white text-lg font-bold mb-4">
                  Esta ainda é uma chance de:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-200 text-sm">Eliminar as células zumbis que desencadeiam inflamação e deterioração.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-200 text-sm">Reativar a capacidade do seu corpo de construir ossos e reparar cartilagens.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-200 text-sm">Sentir-se mais forte, estável e flexível semana após semana.</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 10: SOLUÇÃO (O PROTOCOLO) */}
      {/* ============================================ */}
      
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <Badge className="bg-green-500 text-white px-6 py-2 text-lg font-bold mb-6">
              ✅ A SOLUÇÃO
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              O protocolo revolucionário que ajuda os ossos a se <span className="text-green-400">regenerarem</span> e as articulações a se <span className="text-green-400">revitalizarem.</span>
            </h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-2 border-green-400 p-8 mb-8">
            <CardContent className="p-0">
              
              <p className="text-slate-200 text-xl leading-relaxed mb-6 text-center">
                A descoberta de Elon Musk levou ao desenvolvimento de um <strong className="text-white">protocolo revolucionário</strong> que aborda a deterioração óssea na sua origem.
              </p>

              <p className="text-slate-200 text-lg leading-relaxed mb-6 text-center">
                Em vez de tratar os sintomas, este sistema se concentra na <strong className="text-green-300">regeneração celular,</strong> usando técnicas específicas para ajudar o corpo:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-500/20 border border-green-400 rounded-lg p-6 text-center">
                  <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-white font-bold text-base">Eliminar as células senescentes "zumbis"</p>
                </div>
                <div className="bg-green-500/20 border border-green-400 rounded-lg p-6 text-center">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-white font-bold text-base">Interromper a inflamação descontrolada</p>
                </div>
                <div className="bg-green-500/20 border border-green-400 rounded-lg p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-white font-bold text-base">Reativar proteínas formadoras de osso</p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
                  🦴 Protocolo de Regeneração Óssea Anti-Células Zumbis
                </h3>
                
                {/* 🖼️ IMAGEM - Produto */}
                <div className="max-w-2xl mx-auto my-8 rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src={IMAGES.productPackage} 
                    alt="Protocolo Anti-Células Zumbis" 
                    width={800} 
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Sistema de Dupla Ação */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Como o Protocolo Anti-Células Zumbis atua em nível celular
            </h3>
            <p className="text-slate-200 text-lg">
              Este potente <strong className="text-green-400">sistema de dupla ação</strong> contém técnicas clinicamente comprovadas:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* PARTE A: Densidade Óssea */}
            <Card className="bg-white/10 backdrop-blur-lg border-2 border-blue-400 p-6">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🦴</span>
                  </div>
                  <h4 className="text-2xl font-bold text-blue-300 mb-2">Reconstruir a Densidade Óssea:</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-4">
                    <p className="text-white font-bold text-base mb-2">☀️ Ativação da Vitamina D3</p>
                    <p className="text-slate-300 text-sm">Aumenta a absorção de cálcio e mineralização óssea através de exposição solar estratégica.</p>
                  </div>
                  
                  <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-4">
                    <p className="text-white font-bold text-base mb-2">💚 Técnica da Vitamina K2</p>
                    <p className="text-slate-300 text-sm">Ativa a osteocalcina, fixando cálcio nos ossos através de combinações alimentares específicas.</p>
                  </div>
                  
                  <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-4">
                    <p className="text-white font-bold text-base mb-2">🌊 Método Multimineral Marinho</p>
                    <p className="text-slate-300 text-sm">Protocolo baseado em algas que aumenta densidade óssea e mobilidade.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PARTE B: Articulações */}
            <Card className="bg-white/10 backdrop-blur-lg border-2 border-green-400 p-6">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🦵</span>
                  </div>
                  <h4 className="text-2xl font-bold text-green-300 mb-2">Aliviar Dores e Rigidez nas Articulações:</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                    <p className="text-white font-bold text-base mb-2">⚡ Protocolo PEA Natural</p>
                    <p className="text-slate-300 text-sm">Técnica baseada em ácidos graxos naturais, mais eficaz que ibuprofeno.</p>
                  </div>
                  
                  <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                    <p className="text-white font-bold text-base mb-2">🧬 Método do Colágeno Tipo II</p>
                    <p className="text-slate-300 text-sm">Modula a resposta imunológica através de protocolos alimentares específicos.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Efeito Escudo Esquelético */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-2 border-amber-400 p-8">
              <CardContent className="p-0 text-center">
                <Shield className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Juntos, esses protocolos criam o efeito <span className="text-amber-400">"Escudo Esquelético"</span>
                </h4>
                <p className="text-slate-200 text-lg">
                  Um sistema de defesa biológico que não apenas protege seus ossos e articulações, mas também os ajuda a se regenerar.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 11: BENEFÍCIOS PROMETIDOS */}
      {/* ============================================ */}
      
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              O que você pode <span className="text-green-400">esperar?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            <Card className="bg-white/10 backdrop-blur-lg border-2 border-green-400 p-6">
              <CardContent className="p-0">
                <div className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Ossos mais fortes</h4>
                    <p className="text-slate-300 text-sm">Especialmente nos quadris, coluna e joelhos.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-2 border-green-400 p-6">
              <CardContent className="p-0">
                <div className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Articulações suaves e flexíveis</h4>
                    <p className="text-slate-300 text-sm">Com menos atrito e rigidez.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-2 border-green-400 p-6">
              <CardContent className="p-0">
                <div className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Confiança nos movimentos</h4>
                    <p className="text-slate-300 text-sm">Subir escadas, caminhar, pegar os netos sem medo.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-2 border-green-400 p-6">
              <CardContent className="p-0">
                <div className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Reconquistar o próprio corpo</h4>
                    <p className="text-slate-300 text-sm">Uma sensação de força, um dia de cada vez.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 12: COMO FUNCIONA */}
      {/* ============================================ */}
      
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Como aplicar o Protocolo Anti-Células Zumbis para <span className="text-amber-400">alívio máximo</span>
            </h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-2 border-amber-400 p-8">
            <CardContent className="p-0">
              
              <p className="text-slate-200 text-xl leading-relaxed mb-6 text-center">
                Obter resultados com o Protocolo Anti-Células Zumbis é <strong className="text-white">simples.</strong>
              </p>

              <div className="bg-amber-500/20 border border-amber-400 rounded-lg p-6 mb-6">
                <p className="text-white text-lg font-bold mb-4 text-center">
                  📅 Basta seguir o protocolo de 15 minutos todas as manhãs após acordar.
                </p>
                <p className="text-slate-300 text-base text-center">
                  Para resultados mais rápidos, muitos usuários aplicam o protocolo vespertino adicional, especialmente nos primeiros 30 a 60 dias.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Desde a primeira aplicação, o Protocolo ativa:
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                  <Zap className="w-6 h-6 text-green-400 mb-2" />
                  <p className="text-white font-bold text-sm">Elimina as células zumbis inflamatórias</p>
                </div>
                <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                  <TrendingUp className="w-6 h-6 text-green-400 mb-2" />
                  <p className="text-white font-bold text-sm">Ativa proteínas formadoras de osso</p>
                </div>
                <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                  <Heart className="w-6 h-6 text-green-400 mb-2" />
                  <p className="text-white font-bold text-sm">Alivia dores e inchaço nas articulações</p>
                </div>
                <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                  <Award className="w-6 h-6 text-green-400 mb-2" />
                  <p className="text-white font-bold text-sm">Reconstrói a força de dentro para fora</p>
                </div>
              </div>

              <div className="bg-blue-500/20 border-l-4 border-blue-400 p-6 rounded-lg mb-6">
                <p className="text-blue-200 text-base leading-relaxed mb-4">
                  <strong className="text-white">Inicialmente,</strong> você notará mudanças sutis:
                </p>
                <p className="text-slate-300 text-sm">
                  Mais energia. Melhor sono. Menos rigidez ao acordar.
                </p>
              </div>

              <div className="bg-green-500/20 border border-green-400 rounded-lg p-6 text-center">
                <p className="text-white text-2xl font-bold mb-4">
                  Então algo incrível acontece...
                </p>
                <p className="text-green-200 text-lg leading-relaxed mb-4">
                  Subir escadas não te assusta. Levantar-se de uma cadeira não exige estratégia.
                </p>
                <p className="text-white text-xl font-bold">
                  Você se move com confiança.
                </p>
                <p className="text-amber-300 text-2xl font-bold mt-4">
                  É como recuperar a própria vida.
                </p>
              </div>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 13: DEPOIMENTOS */}
      {/* ============================================ */}
      
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <Badge className="bg-blue-500 text-white px-6 py-2 text-base font-bold mb-4">
              ⭐ DEPOIMENTOS REAIS
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              O que as pessoas estão dizendo sobre o Protocolo
            </h2>
          </div>

          <div className="space-y-8">
            
            {/* Depoimento 1: Helen */}
            <Card className="bg-white/10 backdrop-blur-lg border-l-4 border-blue-400 p-6">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-6">
                  
                  {/* 🖼️ IMAGEM - Helen */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-400">
                      <Image 
                        src={IMAGES.testimonialHelen} 
                        alt="Helen, 68 anos" 
                        width={96} 
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3">
                      "Senti a diferença nos meus joelhos em poucos dias."
                    </h4>
                    
                    <p className="text-slate-300 text-base leading-relaxed mb-4 italic">
                      "Tentei de tudo: cálcio, glucosamina, cremes. Mas nada fez meus joelhos se sentirem estáveis novamente.
                    </p>
                    <p className="text-slate-300 text-base leading-relaxed mb-4 italic">
                      Comecei a seguir o Protocolo Anti-Células Zumbis há alguns meses e senti a diferença em poucos dias. A dor diminuiu e não me sentia mais como se estivesse a um passo de uma lesão.
                    </p>
                    <p className="text-slate-300 text-base leading-relaxed mb-4 italic">
                      Agora passeio com meu cachorro todas as manhãs sem medo. Até voltei ao jardim.
                    </p>
                    <p className="text-green-300 text-base font-bold italic">
                      Sigo o protocolo todos os dias e nunca vou parar."
                    </p>
                    
                    <p className="text-blue-300 font-bold text-sm mt-4">
                      — Helena, 68 anos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 2: Ruth */}
            <Card className="bg-white/10 backdrop-blur-lg border-l-4 border-green-400 p-6">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-6">
                  
                  {/* 🖼️ IMAGEM - Ruth */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-400">
                      <Image 
                        src={IMAGES.testimonialRuth} 
                        alt="Ruth, 64 anos" 
                        width={96} 
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3">
                      "Cada semana me aproximava de me sentir eu mesma novamente."
                    </h4>
                    
                    <p className="text-slate-300 text-base leading-relaxed mb-4 italic">
                      "Depois da primeira semana, minhas articulações não estavam mais tão rígidas.
                    </p>
                    <p className="text-slate-300 text-base leading-relaxed mb-4 italic">
                      No segundo mês, conseguia me levantar sem me apoiar.
                    </p>
                    <p className="text-slate-300 text-base leading-relaxed mb-4 italic">
                      No terceiro? Dancei no casamento da minha sobrinha — e quando digo dancei, é dancei mesmo.
                    </p>
                    <p className="text-green-300 text-base font-bold italic">
                      O protocolo não apenas ajudou meus ossos, como me devolveu a confiança. Sinto-me forte novamente."
                    </p>
                    
                    <p className="text-green-300 font-bold text-sm mt-4">
                      — Ruth, 64 anos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 3: Diane */}
            <Card className="bg-white/10 backdrop-blur-lg border-l-4 border-amber-400 p-6">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-6">
                  
                  {/* 🖼️ IMAGEM - Diane */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-400">
                      <Image 
                        src={IMAGES.testimonialDiane} 
                        alt="Diane, 66 anos" 
                        width={96} 
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3">
                      "Estava cética, mas em 10 dias me senti mais forte."
                    </h4>
                    
                    <p className="text-slate-300 text-base leading-relaxed mb-4 italic">
                      "Sigo o Protocolo há uma semana e meia, e estou impressionada com a rapidez.
                    </p>
                    <p className="text-slate-300 text-base leading-relaxed mb-4 italic">
                      Antes, não conseguia dormir sem analgésicos. Meus joelhos gritavam toda vez que me levantava.
                    </p>
                    <p className="text-slate-300 text-base leading-relaxed mb-4 italic">
                      Hoje? Atravessei a cidade, passei por três lojas e não precisei sentar nenhuma vez.
                    </p>
                    <p className="text-green-300 text-base font-bold italic mb-4">
                      A dor melhorou pelo menos 75 a 80% — e sinto-me estável. Confiante.
                    </p>
                    <p className="text-slate-300 text-base leading-relaxed italic">
                      Não uso mais almofada térmica. Pela primeira vez em muito tempo, sinto que há esperança novamente."
                    </p>
                    
                    <p className="text-amber-300 font-bold text-sm mt-4">
                      — Diane, 66 anos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 14: AUTORIDADE MÉDICA */}
      {/* ============================================ */}
      
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Eis o que a comunidade médica tem a dizer.
            </h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-2 border-blue-400 p-8">
            <CardContent className="p-0">
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                
                {/* 🖼️ IMAGEM - Dra. Marina */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400">
                    <Image 
                      src={IMAGES.draMarina} 
                      alt="Dra. Marina Santos" 
                      width={128} 
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-slate-200 text-xl leading-relaxed mb-6 italic">
                    "Analisei inúmeros protocolos para densidade óssea e o <strong className="text-white">Protocolo Anti-Células Zumbis é único.</strong> Se você sofre de perda óssea ou desconforto articular, <strong className="text-green-300">recomendo este protocolo.</strong>"
                  </p>
                  
                  <div className="flex items-center">
                    <Award className="w-6 h-6 text-blue-400 mr-3" />
                    <p className="text-blue-300 font-bold text-lg">
                      Dra. Marina Santos, PhD, MSM
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 15: CONSEQUÊNCIAS DE NÃO AGIR */}
      {/* ============================================ */}
      
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              O que acontece se você <span className="text-red-400">não fizer nada?</span>
            </h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-2 border-red-400 p-8">
            <CardContent className="p-0">
              
              <p className="text-slate-200 text-xl leading-relaxed mb-6 text-center">
                O que hoje parece <strong className="text-white">"apenas uma pequena dor"...</strong> pode se transformar em uma <strong className="text-red-300">fratura que mudará sua vida amanhã.</strong>
              </p>

              <div className="bg-red-500/20 border-l-4 border-red-400 p-6 rounded-lg mb-6">
                <p className="text-red-200 text-lg leading-relaxed mb-4">
                  Imagine uma rachadura na fundação da sua casa. Com o tempo, se espalha, enfraquecendo toda a estrutura até que cause o colapso.
                </p>
                <p className="text-white text-xl font-bold">
                  É exatamente isso que está acontecendo dentro do seu corpo.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-red-500/20 border border-red-400 rounded-lg p-4 text-center">
                  <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <p className="text-red-200 text-sm font-bold">Os ossos ficam mais finos e fracos</p>
                </div>
                <div className="bg-red-500/20 border border-red-400 rounded-lg p-4 text-center">
                  <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <p className="text-red-200 text-sm font-bold">As articulações ficam inflamadas e quebradiças</p>
                </div>
                <div className="bg-red-500/20 border border-red-400 rounded-lg p-4 text-center">
                  <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <p className="text-red-200 text-sm font-bold">Um movimento errado pode deixar você lesionada</p>
                </div>
              </div>

              <div className="bg-amber-500/20 border border-amber-400 rounded-lg p-6 text-center">
                <p className="text-white text-2xl font-bold">
                  A diferença entre recuperar suas forças... e perdê-las para sempre... tudo se resume ao que você faz <span className="text-amber-400">agora.</span>
                </p>
              </div>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 16: EXCLUSIVIDADE */}
      {/* ============================================ */}
      
      <section className="py-12 px-4 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
        <div className="max-w-4xl mx-auto text-center">
          
          <Card className="bg-white/10 backdrop-blur-lg border-2 border-purple-400 p-8">
            <CardContent className="p-0">
              
              <Eye className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Você não encontrará o Protocolo Anti-Células Zumbis em livrarias ou plataformas convencionais.
              </h3>
              
              <p className="text-slate-200 text-lg leading-relaxed mb-6">
                O Protocolo Anti-Células Zumbis está disponível <strong className="text-purple-300">apenas através desta página</strong> — e por um bom motivo.
              </p>
              
              <p className="text-slate-200 text-base leading-relaxed mb-6">
                Ao eliminar intermediários, garantimos que você tenha acesso direto às descobertas mais avançadas a um preço justo.
              </p>
              
              <div className="bg-purple-500/20 border border-purple-400 rounded-lg p-6">
                <p className="text-purple-200 text-base leading-relaxed">
                  Essa abordagem faz parte do compromisso de <strong className="text-white">Elon Musk:</strong> tornar o suporte avançado para ossos e articulações <strong className="text-purple-300">acessível para quem mais precisa.</strong>
                </p>
              </div>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 17: PRECIFICAÇÃO ESTRATÉGICA */}
      {/* ============================================ */}
      
      <section ref={priceRef} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <Badge className="bg-amber-500 text-white px-6 py-2 text-lg font-bold mb-4">
              💰 OFERTA ESPECIAL
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              E agora vem a <span className="text-amber-400">melhor parte:</span>
            </h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-2 border-amber-400 p-8 mb-8">
            <CardContent className="p-0">
              
              <p className="text-slate-200 text-xl leading-relaxed mb-6 text-center">
                Embora o preço normal seja <span className="line-through text-red-300">€297</span>, agora mesmo você pode ter acesso por apenas <span className="line-through text-red-300">€197</span>.
              </p>

              <div className="bg-green-500/20 border border-green-400 rounded-lg p-6 mb-6 text-center">
                <p className="text-green-200 text-lg leading-relaxed mb-4">
                  Mas quando compartilhei minha história com a equipe, eles foram além.
                </p>
                <p className="text-white text-2xl font-bold">
                  Hoje, por tempo limitado, você pode experimentar o Protocolo Anti-Células Zumbis por apenas:
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="text-slate-400 text-2xl line-through mb-2">€297</div>
                <div className="text-slate-400 text-xl line-through mb-4">€197</div>
                <div className="text-6xl md:text-8xl font-bold text-green-400 mb-4">€27</div>
                <Badge className="bg-amber-500 text-white px-8 py-3 text-2xl font-bold mb-4">
                  Economia de €270!
                </Badge>
                <p className="text-slate-300 text-base">
                  Um preço que o torna acessível para quem mais precisa.
                </p>
              </div>

              <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-6 text-center">
                <p className="text-blue-200 text-lg font-bold">
                  E você não precisa tomar uma decisão agora.
                </p>
              </div>

            </CardContent>
          </Card>

          {/* CTA PRINCIPAL */}
          <div className="text-center mb-8">
            <Button 
              onClick={(e) => handleCTA(e, 'price-section')}
              disabled={isLoading}
              className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xl md:text-2xl py-6 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  PROCESSANDO
                  <div className="ml-3 flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  🔥 APLICAR DESCONTO E VERIFICAR DISPONIBILIDADE
                  <ArrowRight className="ml-3 w-6 h-6" />
                </span>
              )}
            </Button>
            <p className="text-slate-400 text-sm mt-4">
              🔒 Pagamento 100% Seguro • ⚡ Acesso Imediato • 🛡️ Garantia de 30 Dias
            </p>
          </div>

          {/* Atividade em Tempo Real */}
          <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center">
              <Eye className="w-5 h-5 text-blue-400 mr-2" />
              <p className="text-blue-200 text-sm">
                <strong className="text-white">{pessoasVisualizando} pessoas</strong> visualizando esta oferta agora
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 18: GARANTIA */}
      {/* ============================================ */}
      
      <section className="py-16 px-4 bg-gradient-to-r from-green-900/40 to-blue-900/40">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🛡️ Garantia de 30 dias, sem perguntas.
            </h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-2 border-green-400 p-8">
            <CardContent className="p-0">
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                
                {/* 🖼️ BADGE - Garantia */}
                <div className="flex-shrink-0">
                  <Shield className="w-32 h-32 text-green-400" />
                </div>

                <div>
                  <p className="text-slate-200 text-xl leading-relaxed mb-6">
                    Experimente o Protocolo por <strong className="text-white">30 dias completos.</strong> São 30 dias para sentir a diferença em seus ossos, articulações e no seu dia a dia.
                  </p>
                  
                  <p className="text-slate-200 text-lg leading-relaxed mb-6">
                    Se você não ficar totalmente satisfeita, você receberá <strong className="text-green-300">100% do seu dinheiro de volta.</strong>
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 text-center">
                      <X className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <p className="text-green-200 text-sm font-bold">Sem complicações</p>
                    </div>
                    <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 text-center">
                      <X className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <p className="text-green-200 text-sm font-bold">Sem letras miúdas</p>
                    </div>
                    <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 text-center">
                      <X className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <p className="text-green-200 text-sm font-bold">Sem pegadinha</p>
                    </div>
                  </div>

                  <div className="bg-amber-500/20 border border-amber-400 rounded-lg p-6 text-center">
                    <p className="text-white text-xl font-bold">
                      Por que eles fariam isso?
                    </p>
                    <p className="text-amber-300 text-2xl font-bold mt-2">
                      Porque sabem que funciona.
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 19: URGÊNCIA/ESCASSEZ */}
      {/* ============================================ */}
      
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          <Card className="bg-white/10 backdrop-blur-lg border-2 border-red-400 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
            
            <CardContent className="p-0">
              
              <div className="text-center mb-8">
                <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4 animate-pulse" />
                
                <h3 className="text-3xl md:text-4xl font-bold text-red-300 mb-4">
                  ⚠️ ATENÇÃO: Esta oferta pode estar indisponível quando você voltar!
                </h3>
              </div>

              <p className="text-slate-200 text-lg leading-relaxed mb-6 text-center">
                O Protocolo já ficou indisponível diversas vezes devido à <strong className="text-white">enorme procura.</strong>
              </p>

              <p className="text-slate-200 text-lg leading-relaxed mb-8 text-center">
                Se você está interessada em reconstruir seus ossos e recuperar sua independência, <strong className="text-amber-400">agora é a hora de agir.</strong>
              </p>

              {/* Timer */}
              {priceInView && (
                <div className="bg-red-500/20 border-2 border-red-400 rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-red-400 mr-3" />
                    <span className="text-red-300 font-bold text-lg">OFERTA EXPIRA EM:</span>
                  </div>
                  <div className="flex justify-center gap-6">
                    <div className="text-center">
                      <div className="bg-red-500 text-white text-4xl md:text-5xl font-bold py-4 px-6 rounded-lg mb-2">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </div>
                      <div className="text-red-300 text-sm font-bold">MINUTOS</div>
                    </div>
                    <div className="text-white text-4xl md:text-5xl font-bold flex items-center">:</div>
                    <div className="text-center">
                      <div className="bg-red-500 text-white text-4xl md:text-5xl font-bold py-4 px-6 rounded-lg mb-2">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-red-300 text-sm font-bold">SEGUNDOS</div>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="text-center">
                <Button 
                  onClick={(e) => handleCTA(e, 'urgency-section')}
                  disabled={isLoading}
                  className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xl md:text-2xl py-6 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 animate-pulse"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      PROCESSANDO...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      🚨 GARANTIR MINHA VAGA AGORA
                      <Zap className="ml-3 w-6 h-6" />
                    </span>
                  )}
                </Button>
              </div>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 20: ESCOLHA BINÁRIA FINAL */}
      {/* ============================================ */}
      
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900/60 to-blue-900/40">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              O verdadeiro risco? <span className="text-red-400">Viver com dor e arrependimento.</span>
            </h2>
            <p className="text-slate-200 text-xl">
              Você tem duas opções:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* OPÇÃO 1: Não fazer nada */}
            <Card className="bg-white/10 backdrop-blur-lg border-2 border-red-400 p-8">
              <CardContent className="p-0">
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-300 mb-4">
                    Opção 1: Não fazer nada
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">Ossos continuarão mais finos</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">Articulações mais rígidas</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">Mundo cada vez menor</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">Até você se perguntar: "Como cheguei a isso?"</span>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* OPÇÃO 2: Dar uma chance */}
            <Card className="bg-white/10 backdrop-blur-lg border-2 border-green-400 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
              
              <CardContent className="p-0">
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-300 mb-4">
                    Opção 2: Dar uma chance ao Protocolo
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">Movimento sem medo</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">Ossos mais fortes</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">Articulações revitalizadas</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">Se não funcionar? Dinheiro de volta. Sem riscos.</span>
                  </div>
                </div>

                <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 text-center">
                  <p className="text-green-200 font-bold text-lg">
                    ✅ 100% SEM RISCOS
                  </p>
                </div>

              </CardContent>
            </Card>

          </div>

          {/* Mensagem Final */}
          <div className="mt-12 text-center">
            <Card className="bg-white/10 backdrop-blur-lg border-2 border-amber-400 p-8">
              <CardContent className="p-0">
                
                <p className="text-slate-200 text-xl leading-relaxed mb-6">
                  Ainda agradeço a Deus todos os dias por ter encontrado este protocolo.
                </p>
                
                <p className="text-white text-2xl font-bold mb-6">
                  Não mudou apenas o meu corpo — mudou o meu futuro.
                </p>

                <div className="bg-amber-500/20 border-l-4 border-amber-400 p-6 rounded-lg mb-8">
                  <p className="text-amber-200 text-lg leading-relaxed mb-4">
                    Você quer continuar presa à dor e mobilidade reduzida?
                  </p>
                  <p className="text-white text-xl font-bold">
                    Ou quer uma chance real de conquistar a força e confiança que merece?
                  </p>
                </div>

                <Button 
                  onClick={(e) => handleCTA(e, 'final-choice')}
                  disabled={isLoading}
                  className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-2xl py-6 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
                >
                  {isLoading ? (
                    <span>PROCESSANDO...</span>
                  ) : (
                    <span className="flex items-center justify-center">
                      🔥 APLICAR DESCONTO E VERIFICAR DISPONIBILIDADE
                      <ArrowRight className="ml-3 w-6 h-6" />
                    </span>
                  )}
                </Button>

                <p className="text-slate-400 text-sm mt-4">
                  Esta pode ser a decisão que divide sua vida em "antes" e "depois".
                </p>

              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 21: FAQ */}
      {/* ============================================ */}
      
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ❓ Perguntas Frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            
            <AccordionItem value="item-1" className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-amber-400 text-lg font-bold">
                O Protocolo funciona para todos?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-base leading-relaxed pb-4">
                O Protocolo foi desenvolvido especialmente para adultos acima de 50 anos que sofrem com perda óssea e desconforto articular. Funciona particularmente bem para pessoas que ainda sentem sintomas (dor, rigidez), pois isso indica que o corpo ainda está tentando se recuperar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-amber-400 text-lg font-bold">
                Quanto tempo leva para ver resultados?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-base leading-relaxed pb-4">
                A maioria das pessoas nota mudanças sutis nas primeiras semanas (mais energia, melhor sono, menos rigidez matinal). Resultados mais significativos aparecem entre 30-60 dias de uso consistente do protocolo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-amber-400 text-lg font-bold">
                É seguro usar junto com medicamentos?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-base leading-relaxed pb-4">
                O Protocolo é baseado em técnicas naturais e alimentares. No entanto, sempre recomendamos consultar seu médico antes de iniciar qualquer novo protocolo de saúde, especialmente se você já usa medicamentos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-amber-400 text-lg font-bold">
                E se o Protocolo não funcionar para mim?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-base leading-relaxed pb-4">
                Você tem 30 dias completos para experimentar o Protocolo sem riscos. Se não ficar satisfeita, basta solicitar o reembolso total — sem perguntas, sem complicações.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-amber-400 text-lg font-bold">
                Como recebo o Protocolo após a compra?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-base leading-relaxed pb-4">
                O acesso é imediato! Após a confirmação do pagamento, você receberá um email com as instruções de acesso completo ao Protocolo. Você pode começar a aplicá-lo no mesmo dia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-amber-400 text-lg font-bold">
                Preciso comprar suplementos caros?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-base leading-relaxed pb-4">
                Não! O Protocolo se concentra em técnicas naturais, exposição solar estratégica, combinações alimentares específicas e protocolos baseados em alimentos comuns. Não exige suplementos caros ou difíceis de encontrar.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 22: CTA FINAL MASSIVO */}
      {/* ============================================ */}
      
      <section className="py-16 px-4 bg-gradient-to-r from-amber-900/40 to-orange-900/40">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Esta pode ser a decisão que <span className="text-amber-400">divide sua vida</span> em "antes" e "depois".
            </h2>
            <p className="text-slate-200 text-xl">
              Clique abaixo antes que esta oferta seja removida.
            </p>
          </div>

          <div className="mb-8">
            <div className="bg-white/10 backdrop-blur-lg border-2 border-amber-400 rounded-2xl p-8 mb-8">
              <div className="text-center mb-6">
                <div className="text-slate-400 text-3xl line-through mb-2">€297</div>
                <div className="text-slate-400 text-2xl line-through mb-4">€197</div>
                <div className="text-7xl md:text-9xl font-bold text-green-400 mb-4">€27</div>
                <p className="text-amber-300 text-2xl font-bold mb-4">
                  🔥 ECONOMIA DE €270 HOJE!
                </p>
              </div>

              <Button 
                onClick={(e) => handleCTA(e, 'final-cta')}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-2xl md:text-3xl py-8 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 animate-pulse"
              >
                {isLoading ? (
                  <span>PROCESSANDO...</span>
                ) : (
                  <span className="flex items-center justify-center">
                    🛡️ APLICAR DESCONTO E VERIFICAR DISPONIBILIDADE
                    <Zap className="ml-3 w-8 h-8" />
                  </span>
                )}
              </Button>

              <p className="text-slate-300 text-sm mt-6">
                🔒 Pagamento 100% Seguro • ⚡ Acesso Imediato • 🛡️ Garantia Incondicional de 30 Dias
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-green-200 text-sm font-bold">Garantia de 30 Dias</p>
            </div>
            <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-4">
              <Zap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-blue-200 text-sm font-bold">Acesso Imediato</p>
            </div>
            <div className="bg-amber-500/20 border border-amber-400 rounded-lg p-4">
              <Star className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-amber-200 text-sm font-bold">Protocolo Completo</p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER: DISCLAIMER */}
      {/* ============================================ */}
      
      <footer className="py-12 px-4 border-t border-slate-700/50 bg-slate-900/60">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-amber-500/10 border border-amber-400/50 rounded-lg p-6 mb-8">
            <p className="text-amber-300 text-sm font-bold text-center mb-2">
              ⚠️ IMPORTANTE
            </p>
            <p className="text-slate-300 text-xs leading-relaxed text-center">
              <strong className="text-white">ESTE É UM ANÚNCIO E NÃO UM ARTIGO DE NOTÍCIAS.</strong> As informações são apenas para fins educativos. Consulte sempre seu médico antes de iniciar qualquer novo protocolo de saúde.
            </p>
          </div>

          <div className="text-center text-slate-400 text-xs leading-relaxed">
            <p className="mb-4">
              © 2024 Protocolo de Regeneração Óssea Anti-Células Zumbis. Todos os direitos reservados.
            </p>
            <p className="mb-4">
              Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Os resultados podem variar de pessoa para pessoa.
            </p>
            <p>
              Este site não faz parte do site Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca registada da FACEBOOK, Inc.
            </p>
          </div>

        </div>
      </footer>

      {/* ============================================ */}
      {/* SCRIPTS ADICIONAIS */}
      {/* ============================================ */}
      
      <Script id="landing-scripts" strategy="afterInteractive">
        {`
          // Prevenir saída
          window.addEventListener('beforeunload', function(e) {
            const confirmationMessage = '⚠️ Tem certeza? Esta oferta especial de €27 não estará disponível depois.';
            e.returnValue = confirmationMessage;
            return confirmationMessage;
          });
          
          // Animações de scroll
          function addScrollAnimations() {
            const observerOptions = {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
                }
              });
            }, observerOptions);
            
            document.querySelectorAll('.fade-in-mobile').forEach(el => {
              el.style.opacity = '0';
              el.style.transform = 'translateY(30px)';
              el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
              observer.observe(el);
            });
          }
          
          window.addEventListener('load', function() {
            addScrollAnimations();
            console.log('🦴 Protocolo Anti-Células Zumbis carregado com sucesso!');
          });
        `}
      </Script>

      {/* CSS CUSTOMIZADO */}
      <style jsx global>{`
        .glass-card-mobile {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .fade-in-mobile {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .7;
          }
        }
      `}</style>

    </main>
  )
}
