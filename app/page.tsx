"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Clock, Users, DollarSign, Star, CheckCircle, Shield, Play, Zap, TrendingUp, Award, Heart, Eye, AlertTriangle, X } from "lucide-react"
import Script from "next/script"
import Image from "next/image"

// GA otimizado com debounce (mantido)
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

// Hook para Intersection Observer com fallback (mantido)
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

export default function UpsellPage() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 19, seconds: 47 });
  const [isLoading, setIsLoading] = useState(false);
  const [clientesVisualizando, setClientesVisualizando] = useState(89);
  
  // Refs para lazy loading
  const [heroRef, heroInView] = useIntersectionObserver({ threshold: 0.1 });
  const [priceRef, priceInView] = useIntersectionObserver({ threshold: 0.1 });

  // Timer otimizado (mantido)
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

  // Simulação de atividade em tempo real (mantido)
  useEffect(() => {
    const interval = setInterval(() => {
      setClientesVisualizando(prev => {
        const variation = Math.floor(Math.random() * 10) - 5;
        return Math.max(80, Math.min(100, prev + variation));
      });
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  // ✅ CTA PARA UPSELL
  const handleUpsellCTA = useCallback((e, origem) => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    console.log(`🎯 Upsell CTA clicado - Origem: ${origem}`);
    
    // ✅ FACEBOOK PIXEL - INITIATE CHECKOUT (UPSELL)
    if (typeof window !== 'undefined') {
      
      // Método 1: Via fbq direta
      if (window.fbq) {
        try {
          window.fbq('track', 'InitiateCheckout', {
            content_name: 'Protocolo de Dominância Emocional - UPSELL',
            content_category: 'Curso Avançado',
            content_ids: ['protocolo-dominancia-upsell'],
            value: 17.00,
            currency: 'USD',
            num_items: 1,
            origem: origem,
            upsell: true,
            timestamp: Date.now()
          });
          console.log('✅ InitiateCheckout (Upsell) disparado via fbq - Origem:', origem);
        } catch (error) {
          console.warn('⚠️ Erro fbq:', error);
        }
      }
      
      // Método 2: Via UTMify
      if (window.utmify) {
        try {
          if (window.utmify.track) {
            window.utmify.track('InitiateCheckout', {
              content_name: 'Protocolo de Dominância Emocional - UPSELL',
              value: 17.00,
              currency: 'USD',
              origem: origem,
              upsell: true
            });
          }
        } catch (error) {
          console.warn('⚠️ Erro UTMify:', error);
        }
      }
      
      // Método 3: Via dataLayer
      if (window.dataLayer) {
        try {
          window.dataLayer.push({
            event: 'upsell_initiate_checkout',
            ecommerce: {
              currency: 'USD',
              value: 17.00,
              items: [{
                item_name: 'Protocolo de Dominância Emocional',
                item_category: 'Upsell',
                price: 17.00,
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
    
    // Tracking genérico
    enviarEvento('upsell_cta_click', { origem, timestamp: Date.now() });
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // 🎯 REDIRECIONAMENTO PARA CHECKOUT DO UPSELL
    setTimeout(() => {
      console.log('🚀 Redirecionando para checkout do upsell...');
      window.location.href = 'https://pay.hotmart.com/D100233207O?off=r4cz8pgu';
    }, 800);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, [isLoading]);

  // CTA para recusar upsell
  const handleDeclineUpsell = useCallback(() => {
    enviarEvento('upsell_declined', { timestamp: Date.now() });
    
    setTimeout(() => {
      window.location.href = 'https://comprarplanseguro.shop/dw/';
    }, 500);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Scripts de tracking da estrutura base */}
      <link rel="preconnect" href="https://cdn.utmify.com.br" />
      <link rel="preconnect" href="https://api6.ipify.org" />
      <link rel="preconnect" href="https://pay.hotmart.com" />

      <Script id="facebook-pixel" strategy="lazyOnload">
        {`
          window.pixelId = "68d352fa2bbdabf114779dac";
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

      {/* ✅ HEADER DE SUCESSO */}
      <section ref={heroRef} className="relative py-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-emerald-900/20"></div>
        
        <div className="glass-hero max-w-4xl mx-auto relative z-10 fade-in-mobile">
          
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🎯</div>
            <h1 className="headline-mobile">
              🚨 ¡FELICIDADES! Pero Descubrimos Algo CHOCANTE Sobre Tu Futuro...
            </h1>
            <p className="subtitle-mobile">
              <strong>⚠️ NO CIERRES ESTA PÁGINA - Descubrimos algo CHOCANTE sobre tu futuro</strong>
            </p>
            <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 mb-6 max-w-md mx-auto">
              <p className="text-green-300 font-bold text-sm">
                ✅ Plan A (Estrategia de reconquista) - CONFIRMADO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ REVELACIÓN CHOCANTE */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card-mobile p-6 border-2 border-red-400 relative overflow-hidden">
            <CardContent className="p-0 relative z-10">
              
              <div className="text-center mb-6">
                <h2 className="section-title-mobile text-red-300 animate-pulse">
                  🚨 PERO ACABAMOS DE DESCUBRIR ALGO QUE VA A CAMBIAR TODO...
                </h2>
              </div>

              <div className="bg-red-500/20 border border-red-400 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-4 text-center">
                  DATOS DEVASTADORES DE 4.247 RECONQUISTAS:
                </h3>
                
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-red-400 mb-2">73%</div>
                  <div className="text-slate-300 text-sm font-semibold">
                    De los hombres que usan SOLO el Plan A logran reconquistar
                  </div>
                </div>
                
                <div className="bg-amber-500/20 border border-amber-400 rounded-lg p-4 mb-6">
                  <p className="text-amber-300 font-bold text-center">
                    PERO los que agregan el "Protocolo de Dominancia Emocional":
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">97%</div>
                    <div className="text-slate-300 text-sm">DE ÉXITO TOTAL</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">11 DÍAS</div>
                    <div className="text-slate-300 text-sm">MÁS RÁPIDO (9 días vs 20 días)</div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/20 border border-amber-400 rounded-lg p-4 text-center">
                <p className="text-amber-300 font-bold text-lg">
                  <strong>¿LA DIFERENCIA?</strong><br />
                  El Plan A te hace ATRACTIVO. El Protocolo te hace IRRESISTIBLE.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ✅ PROBLEMA CRÍTICO */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card-mobile p-6 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-t-lg"></div>
            <CardContent className="p-0">
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">💔</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  EL PROBLEMA QUE EL 73% NO VE VENIR
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong className="text-white">El Plan A te da la estrategia perfecta para reconquistar.</strong>
                </p>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong className="text-red-300">Pero NO incluye las técnicas de dominancia emocional que la vuelven OBSESIONADA contigo.</strong>
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-red-500/20 border border-red-400 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-red-400">27%</div>
                  <div className="text-xs text-red-300">Fallan completamente</div>
                </div>
                <div className="bg-red-500/20 border border-red-400 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-red-400">20 días</div>
                  <div className="text-xs text-red-300">Tiempo promedio</div>
                </div>
                <div className="bg-red-500/20 border border-red-400 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-red-400">43%</div>
                  <div className="text-xs text-red-300">Ella conoce a otro</div>
                </div>
              </div>

              <div className="bg-red-500/20 border border-red-400 rounded-lg p-4 text-center">
                <p className="text-red-300 font-bold text-sm">
                  ¿Vas a arriesgar que ella conozca a alguien más en esos 11 días extra?
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ✅ COMPARACIÓN BRUTAL */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title-mobile text-center mb-8">
            LA DIFERENCIA ENTRE SER "UNA OPCIÓN"<br />
            <span className="text-amber-400">VS SER "SU OBSESIÓN"</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* SIN PROTOCOLO */}
            <Card className="glass-card-mobile p-6 border-2 border-red-400 relative">
              <div className="absolute -top-3 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                ⚠️ PELIGRO
              </div>
              <CardContent className="p-0">
                <h4 className="text-lg font-bold text-red-300 mb-4 text-center">
                  ❌ SOLO CON PLAN A:
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-400">💔</span>
                    </div>
                    <span className="text-slate-300">Ella siente atracción por ti</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-400">💔</span>
                    </div>
                    <span className="text-slate-300">Puede volver, pero sin urgencia</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-400">💔</span>
                    </div>
                    <span className="text-slate-300">Tú la persigues sutilmente</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-400">💔</span>
                    </div>
                    <span className="text-slate-300">Resultados en 20 días promedio</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-400">💔</span>
                    </div>
                    <span className="text-slate-300">73% de probabilidad de éxito</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-400">💔</span>
                    </div>
                    <span className="text-slate-300">RIESGO: Puede cambiar de opinión</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-400">💔</span>
                    </div>
                    <span className="text-slate-300">Ella controla el ritmo</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-400">💔</span>
                    </div>
                    <span className="text-slate-300">Puede conocer a alguien más mientras tanto</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CON PROTOCOLO */}
            <Card className="glass-card-mobile p-6 border-2 border-green-400 relative">
              <div className="absolute -top-3 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                🔥 DOMINANCIA
              </div>
              <CardContent className="p-0">
                <h4 className="text-lg font-bold text-green-300 mb-4 text-center">
                  ✅ PLAN A + PROTOCOLO:
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-400">🔥</span>
                    </div>
                    <span className="text-slate-300">Ella siente OBSESIÓN por ti</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-400">🔥</span>
                    </div>
                    <span className="text-slate-300">Te busca desesperadamente</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-400">🔥</span>
                    </div>
                    <span className="text-slate-300">ELLA te persigue a ti</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-400">🔥</span>
                    </div>
                    <span className="text-slate-300">Resultados en 9 días promedio</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-400">🔥</span>
                    </div>
                    <span className="text-slate-300">97% de probabilidad de éxito</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-400">🔥</span>
                    </div>
                    <span className="text-slate-300">GARANTÍA: No podrá olvidarte</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-400">🔥</span>
                    </div>
                    <span className="text-slate-300">TÚ controlas completamente</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-400">🔥</span>
                    </div>
                    <span className="text-slate-300">Inmunidad total contra otros hombres</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ✅ TESTIMONIAL DEVASTADOR */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card-mobile p-6 border-l-4 border-blue-400">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h4 className="text-xl font-bold text-blue-300">
                  "Casi cometo el ERROR MÁS GRANDE de mi vida..."
                </h4>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "Compré el Plan A el lunes. El miércoles, casi no compro el Protocolo porque pensé que era 'innecesario'. Por suerte, algo me hizo comprarlo. En 3 días, ella me escribía a las 2 AM diciendo que no podía dejar de pensar en mí."
                </p>
                
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "La diferencia fue BRUTAL. Con solo el Plan A, ella respondía mis mensajes y salimos una vez. Pero cuando apliqué el Protocolo de Dominancia, fue como activar un interruptor en su cerebro. No podía vivir sin mí."
                </p>
              </div>
              
              <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 mb-4">
                <p className="text-green-300 font-bold text-sm">
                  <strong>Resultado:</strong> Reconquista en 8 días. Hoy estamos casados hace 2 años y ella me dice que nunca había sentido una conexión tan fuerte con alguien.
                </p>
              </div>
              
              <p className="text-blue-300 font-bold text-sm">
                - Roberto M., reconquistó en 8 días con Plan A + Protocolo
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ✅ PRODUCTO REVELACIÓN */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title-mobile text-purple-300">
              🔥 PROTOCOLO DE DOMINANCIA EMOCIONAL
            </h2>
            <p className="subtitle-mobile">
              El método "secreto" que convierte atracción en OBSESIÓN
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            <Card className="glass-card-mobile p-6">
              <CardContent className="p-0">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">🧠</div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    LOS 7 GATILLOS DE OBSESIÓN
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Técnicas neurológicas que hacen que piense en ti 24/7</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Cómo activar su instinto de "necesidad desesperante"</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">El método del "vacío emocional" que la vuelve adicta</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Protocolo de inversión total (ella te persigue)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card-mobile p-6">
              <CardContent className="p-0">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">💬</div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    FRASES DE DOMINANCIA EXACTAS
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Las 21 frases que despiertan sumisión emocional</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Mensajes que funcionan incluso si te ignora</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Técnicas de comunicación hipnótica</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Scripts para cada situación específica</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card-mobile p-6">
              <CardContent className="p-0">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    ESTRATEGIA DE DOMINANCIA SEXUAL
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Cómo despertar deseo físico intenso a distancia</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Técnicas de tensión sexual por mensajes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">El método de "hambre sexual" controlada</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Protocolo de seducción psicológica</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card-mobile p-6">
              <CardContent className="p-0">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    PROTOCOLO ANTI-COMPETENCIA
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Cómo hacerla inmune a otros hombres</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Técnicas de "marca emocional" permanente</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Sistema de comparación automática (tú siempre ganas)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-slate-300">Blindaje psicológico contra tentaciones</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ✅ PRECIO DEVASTADOR */}
      <section ref={priceRef} className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="price-section-mobile relative z-10">
            
            <Card className="glass-card-mobile p-6 border-2 border-amber-400 mb-6">
              <CardContent className="p-0">
                <h3 className="text-amber-400 font-bold mb-4 text-center text-lg">
                  🤔 PIÉNSALO ASÍ...
                </h3>
                
                <div className="space-y-4 text-center">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong className="text-white">Ya invertiste en el Plan A</strong> porque quieres reconquistarla.
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    ¿Vas a arriesgar que tome <strong className="text-amber-400">20 días en lugar de 9 días</strong> por ahorrar $17?
                  </p>
                  <p className="text-red-300 font-bold text-base">
                    ¿Vas a arriesgar que ella conozca a otro en esos 11 días extra?
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mb-6">
              <div className="price-old-mobile">Valor total: $225</div>
              <div className="price-new-mobile">$17</div>
              <div className="bg-amber-500 text-white px-6 py-2 rounded-full font-bold text-lg inline-block mb-4">
                ¡Ahorras $208!
              </div>
              <p className="text-slate-300 text-sm">
                Acceso inmediato • Garantía de 30 días
              </p>
            </div>

            <div className="text-center mb-6">
              <Button 
                onClick={(e) => handleUpsellCTA(e, 'price')}
                disabled={isLoading}
                className="btn-primary-mobile gpu-accelerated"
                aria-label="Agregar Protocolo por solo $17"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    PROCESSANDO
                    <div className="loading-dots">
                      <div className="loading-dot"></div>
                      <div className="loading-dot"></div>
                      <div className="loading-dot"></div>
                    </div>
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    🔥 SÍ, QUIERO LA DOMINANCIA TOTAL
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                )}
              </Button>
              <p className="text-xs text-slate-400 mt-2">
                Agregar Protocolo por solo $17 - Acceso inmediato
              </p>
            </div>

            <Card className="glass-card-mobile p-4 mb-6">
              <CardContent className="p-0">
                <h4 className="text-white font-bold mb-3 text-center">
                  ✅ Lo que recibes INMEDIATAMENTE:
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-slate-300">Acceso instantáneo al Protocolo completo</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-slate-300">4 módulos de dominancia específicos</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-slate-300">Plan de acción día a día para 14 días</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-slate-300">Garantía de 30 días sin riesgo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ✅ URGENCIA CRÍTICA */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="glass-card-mobile p-6 border-2 border-red-400 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              ⏰ VENTANA CRÍTICA
            </div>
            <CardContent className="p-0 text-center">
              
              <h3 className="text-xl font-bold text-red-300 mb-4 mt-4">
                ⚠️ VENTANA CRÍTICA DE OPORTUNIDAD
              </h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Esta oferta especial es <strong className="text-white">SOLO para clientes del Plan A</strong> y <strong className="text-white">SOLO en esta sesión.</strong>
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Si sales de esta página, tendrás que pagar el precio completo de $225 después.
                </p>
              </div>

              <div className="timer-compact max-w-xs mx-auto mb-6">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-red-300 font-bold text-sm">OFERTA TERMINA EN:</span>
                </div>
                <div className="flex justify-center gap-3">
                  <div className="text-center">
                    <div className="timer-digit-small">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs text-red-300">MIN</div>
                  </div>
                  <div className="timer-digit-small">:</div>
                  <div className="text-center">
                    <div className="timer-digit-small">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs text-red-300">SEG</div>
                  </div>
                </div>
              </div>

              <p className="text-red-300 text-xs">
                Después de este tiempo, esta oferta desaparece para siempre.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ✅ CTA FINAL */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          
          <Button 
            onClick={(e) => handleUpsellCTA(e, 'final')}
            disabled={isLoading}
            className="btn-primary-mobile text-lg py-6 px-8 gpu-accelerated mb-6"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                PROCESSANDO
                <div className="loading-dots">
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                </div>
              </span>
            ) : (
              <span className="flex items-center justify-center">
                🔥 SÍ, QUIERO LA DOMINANCIA TOTAL
                <Zap className="ml-2 w-6 h-6" />
              </span>
            )}
          </Button>
          
          <p className="text-slate-300 text-sm mb-8">
            ⚡ Acceso inmediato • 🛡️ Garantía 30 días • 💎 Zero riscos
          </p>

          <div className="border-t border-slate-600 pt-6">
            <button 
              onClick={handleDeclineUpsell}
              className="text-slate-400 text-sm underline hover:text-slate-300 transition-colors"
            >
              No, prefiero usar solo el Plan A (20 días promedio)
            </button>
          </div>
        </div>
      </section>

      {/* ✅ GARANTIA */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="glass-card-mobile p-6 text-center">
            <CardContent className="p-0">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                🛡️ GARANTÍA INCONDICIONAL DE 30 DÍAS
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                100% de tu dinero de vuelta si no quedas satisfecho. Sin preguntas, sin burocracia, sin complicación.
              </p>
              <p className="text-amber-400 font-bold text-lg">
                ¡EL RIESGO ES TODO NUESTRO!
              </p>
              <p className="text-slate-300 text-xs mt-2">
                Puedes probar todo el contenido por 30 días completos
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ✅ FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title-mobile text-center mb-8">
            ❓ PREGUNTAS FRECUENTES
          </h2>
          
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="item-1" className="glass-card-mobile border-none">
              <AccordionTrigger className="text-white hover:text-amber-400 px-4 text-sm">
                ¿Funciona incluso si ella me bloqueó?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 px-4 pb-4 text-xs">
                Sí. El Protocolo incluye estrategias específicas para casos extremos, incluyendo técnicas indirectas que funcionan incluso sin contacto directo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="glass-card-mobile border-none">
              <AccordionTrigger className="text-white hover:text-amber-400 px-4 text-sm">
                ¿Cuánto tiempo toma ver resultados?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 px-4 pb-4 text-xs">
                Los primeros cambios en su comportamiento se ven en 24-48 horas. La reconquista completa promedio es de 9 días vs 20 días solo con el Plan A.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="glass-card-mobile border-none">
              <AccordionTrigger className="text-white hover:text-amber-400 px-4 text-sm">
                ¿Qué pasa si no funciona conmigo?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 px-4 pb-4 text-xs">
                Tienes 30 días de garantía total. Si no ves resultados, devolvemos el 100% de tu dinero sin preguntas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="glass-card-mobile border-none">
              <AccordionTrigger className="text-white hover:text-amber-400 px-4 text-sm">
                ¿Es ético usar estas técnicas?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 px-4 pb-4 text-xs">
                Absolutamente. Son técnicas de psicología aplicada para reconectar emocionalmente. No manipulación, sino reconexión genuina y profunda.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="glass-card-mobile border-none">
              <AccordionTrigger className="text-white hover:text-amber-400 px-4 text-sm">
                ¿Puedo acceder inmediatamente?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 px-4 pb-4 text-xs">
                Sí. Recibes acceso instantáneo después del pago. Todo el contenido estará disponible en tu área de miembros en menos de 2 minutos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ✅ ÚLTIMO CTA COM URGÊNCIA MÁXIMA */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          
          <Card className="glass-card-mobile p-6 border-2 border-red-400 mb-6">
            <CardContent className="p-0 text-center">
              <h3 className="text-red-300 font-bold text-lg mb-4">
                🚨 ÚLTIMA OPORTUNIDAD
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Esta página se cerrará automáticamente cuando el timer llegue a 00:00
              </p>
              <p className="text-red-300 font-bold text-base">
                Después tendrás que pagar $225 por el Protocolo completo
              </p>
            </CardContent>
          </Card>

          <Button 
            onClick={(e) => handleUpsellCTA(e, 'ultimo')}
            disabled={isLoading}
            className="btn-primary-mobile text-xl py-6 px-8 gpu-accelerated w-full mb-4"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                PROCESSANDO
                <div className="loading-dots">
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                </div>
              </span>
            ) : (
              <span className="flex items-center justify-center">
                AGREGAR PROTOCOLO POR $17 AHORA
                <AlertTriangle className="ml-2 w-6 h-6" />
              </span>
            )}
          </Button>
          
          <p className="text-center text-slate-300 text-xs mb-6">
            ⚡ Acceso inmediato • 🛡️ Garantía 30 días • 💎 Sin riesgos
          </p>

          <div className="text-center">
            <button 
              onClick={handleDeclineUpsell}
              className="text-slate-500 text-xs underline hover:text-slate-400 transition-colors"
            >
              No gracias, continuar sin el Protocolo (acepto el riesgo de 20 días vs 9 días)
            </button>
          </div>
        </div>
      </section>

      {/* ✅ RODAPÉ MINIMALISTA */}
      <footer className="py-6 px-4 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center text-slate-400 text-xs">
          <p>© 2024 Protocolo de Dominancia Emocional - Todos los derechos reservados</p>
          <p className="mt-2">
            Este producto no garantiza la obtención de resultados. Cualquier referencia al desempeño de una estrategia no debe interpretarse como una garantía de resultados.
          </p>
        </div>
      </footer>

      {/* ✅ SCRIPT PARA TIMER E ANIMAÇÕES */}
      <Script id="upsell-scripts" strategy="afterInteractive">
        {`
          // Timer de contagem regressiva
          function initializeTimer() {
            console.log('🔥 Timer do Upsell inicializado');
          }
          
          // Animações de entrada
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
          
          // Prevenir saída
          window.addEventListener('beforeunload', function(e) {
            const confirmationMessage = '¿Estás seguro? Esta oferta especial de $17 no estará disponible después.';
            e.returnValue = confirmationMessage;
            return confirmationMessage;
          });
          
          // Inicializar quando a página carrega
          window.addEventListener('load', function() {
            initializeTimer();
            addScrollAnimations();
            console.log('🔥 Upsell Protocolo de Dominancia cargado con éxito!');
          });
        `}
      </Script>
    </main>
  )
}