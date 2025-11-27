"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Clock, CheckCircle, Shield, AlertTriangle, Award, Heart, TrendingUp, Activity } from "lucide-react"
import Image from "next/image"

// ============================================
// 🖼️ CONFIGURAÇÃO DE IMAGENS - TROQUE AQUI!
// ============================================
const IMAGES = {
  // 🔴 ATENÇÃO: Use os links DIRETOS do ImgBB (que começam com https://i.ibb.co/)
  // Formato correto: https://i.ibb.co/CODIGO/arquivo.jpg
  
  // SUAS 2 IMAGENS (obtenha os links diretos corretos):
  heroMainImage: "https://i.ibb.co/x8H0047y/5c4fa786e4bf6b95eae2720de5a6f7-1764217967139.png", // ← CORRIJA: Cole o link DIRETO aqui
  elonMuskPhoto: "https://i.ibb.co/x8H0047y/5c4fa786e4bf6b95eae2720de5a6f7-1764217967139.png",   // ← CORRIJA: Cole o link DIRETO aqui
  
  // Todas as outras imagens usarão as mesmas 2 acima (você pediu para repetir):
  zombieCellsIllustration: "https://i.ibb.co/VpmZZKq/imagem.jpg", // ← Repetindo imagem 1
  boneXray: "https://i.ibb.co/Qv3LpDk/elon.jpg",                  // ← Repetindo imagem 2
  nasaResearch: "https://i.ibb.co/VpmZZKq/imagem.jpg",            // ← Repetindo imagem 1
  productPackage: "https://i.ibb.co/Qv3LpDk/elon.jpg",            // ← Repetindo imagem 2
  testimonialHelen: "https://i.ibb.co/VpmZZKq/imagem.jpg",        // ← Repetindo imagem 1
  testimonialRuth: "https://i.ibb.co/Qv3LpDk/elon.jpg",           // ← Repetindo imagem 2
  testimonialDiane: "https://i.ibb.co/VpmZZKq/imagem.jpg",        // ← Repetindo imagem 1
  draMarina: "https://i.ibb.co/Qv3LpDk/elon.jpg",                 // ← Repetindo imagem 2
}

// ============================================
// 🔗 CONFIGURAÇÃO DE CHECKOUT
// ============================================
const CHECKOUT_URL = "https://pay.hotmart.com/P103120932I?off=r5yaffdw"

export default function ProtocoloAntiCelulasZumbis() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 })

  // Timer de contagem regressiva
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // CTA - Redirecionamento DIRETO ao checkout
  const handleCTA = () => {
    window.location.href = CHECKOUT_URL
  }

  return (
    <main className="min-h-screen bg-white">

      {/* ============================================ */}
      {/* ARTIGO PRINCIPAL */}
      {/* ============================================ */}
      
      <article className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-12">
        
        {/* CATEGORIA */}
        <div className="mb-4 sm:mb-6">
          <Badge className="bg-red-600 text-white px-3 sm:px-4 py-1 text-xs font-bold uppercase">
            Saúde • Investigação Científica
          </Badge>
        </div>

        {/* HEADLINE PRINCIPAL */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          Elon Musk: O único protocolo que todos os adultos com mais de 50 anos devem seguir para reconstruir a densidade óssea naturalmente
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          Descoberta revolucionária ligada à NASA revela como "células zumbis" destroem ossos e articulações — e como eliminá-las naturalmente
        </p>

        {/* IMAGEM HERO - MOBILE OPTIMIZED */}
        <figure className="mb-6 sm:mb-10">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-200">
            <Image 
              src={IMAGES.heroMainImage}
              alt="Mulher ativa com mais de 50 anos"
              fill
              className="object-contain sm:object-cover"
              priority
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
          </div>
          <figcaption className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 italic px-2 sm:px-0">
            Milhões de mulheres acima de 50 anos sofrem com perda óssea acelerada — mas nova descoberta pode reverter o processo. Foto: Divulgação
          </figcaption>
        </figure>

        {/* LEAD/LIDE */}
        <div className="text-base sm:text-lg leading-relaxed text-gray-800 mb-6 sm:mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          <p className="mb-4 sm:mb-6">
            <span className="font-bold text-xl sm:text-2xl float-left mr-2 leading-none">O</span>s primeiros sinais de deterioração óssea e articular são fáceis de passar despercebidos. Com muita frequência, os médicos ignoram os sinais de alerta, com consequências devastadoras; <strong>todos os meses, cerca de 1.100 pessoas morrem após fraturarem o quadril devido à baixa densidade óssea.</strong>
          </p>
        </div>

        {/* CORPO DO ARTIGO */}
        <div className="article-body text-base sm:text-lg leading-relaxed text-gray-800 space-y-4 sm:space-y-6" style={{ fontFamily: 'Georgia, serif' }}>
          
          {/* Seção 1: História Pessoal */}
          <div className="bg-gray-50 border-l-4 border-red-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4">
              Na verdade, assisti horrorizada enquanto minha mãe morria lentamente de osteoporose.
            </p>
            <p className="mb-3 sm:mb-4">
              Ver alguém que você ama morrer lentamente, em agonia, sem saber nada sobre a doença que o matou, é de partir o coração.
            </p>
            <p className="mb-3 sm:mb-4">
              <strong>A pior parte?</strong> Três médicos diferentes nos disseram que era apenas "envelhecimento normal". Que mulheres da idade dela deveriam esperar "diminuir o ritmo".
            </p>
            <p className="font-bold">
              Mas não foi o envelhecimento normal que levou minha mãe...
            </p>
          </div>

          <p>
            Porque uma nova pesquisa inovadora sugere que essa crença pode estar <strong>perigosamente errada.</strong>
          </p>

          <p>
            Na verdade, estudos clínicos mostram agora que milhões de mulheres com mais de 50 anos estão sofrendo perda óssea e de cartilagem acelerada, não simplesmente por causa do envelhecimento, mas devido a uma <strong>invasão celular oculta</strong> que silenciosamente sabota seus ossos e articulações por dentro.
          </p>

          {/* PULL QUOTE */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center py-6 sm:py-8 my-6 sm:my-8 border-y-2 border-gray-300 px-4">
            "Então, por que algumas mulheres permanecem fortes, ativas e sem dor até os 70 anos, enquanto outras começam a se deteriorar aos 50 — mesmo seguindo as recomendações médicas?"
          </blockquote>

          <p>
            Essa pergunta me levou a uma busca incessante por respostas que iam além de comprimidos de cálcio sem graça, anti-inflamatórios ou suplementos caros que nunca funcionavam.
          </p>

          <p>
            <strong>Foi então que descobri o trabalho de Elon Musk e sua equipe científica,</strong> um biólogo celular pioneiro focado nas causas ocultas da rápida deterioração óssea em mulheres idosas.
          </p>

          <p className="font-bold text-lg sm:text-xl">
            E o que ele descobriu... mudou tudo.
          </p>

          {/* Seção 2: Descoberta de Elon Musk */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
            A descoberta revolucionária de Elon Musk — e a verdade alarmante sobre a perda óssea
          </h2>

          <figure className="my-6 sm:my-8">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.elonMuskPhoto}
                alt="Elon Musk"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
            <figcaption className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 italic px-2 sm:px-0">
              Elon Musk e sua equipe descobriram conexão entre perda óssea de astronautas e envelhecimento na Terra. Foto: Arquivo
            </figcaption>
          </figure>

          <p>
            <strong>Elon Musk não estava apenas lançando foguetes</strong> — ele acidentalmente revelou uma crise silenciosa de saúde que está destruindo milhões de mulheres de dentro para fora.
          </p>

          <p>
            Durante anos, a NASA enfrentou um grande problema: os astronautas perdem rapidamente densidade óssea e força articular no espaço — <strong>da mesma forma que milhões de mulheres ao chegarem aos 50 anos.</strong> Musk queria respostas. Não apenas para os astronautas... mas para todos que envelhecem na Terra.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="font-bold mb-3 sm:mb-4">
              Sua equipe de pesquisa fez uma conexão surpreendente:
            </p>
            <p>
              O mesmo mecanismo biológico que destrói os ossos dos astronautas no espaço está silenciosamente atacando as mulheres à medida que envelhecem na Terra.
            </p>
          </div>

          <p>
            E no cerne desse problema está um grupo perturbador de células disfuncionais — agora conhecidas como <strong className="text-red-600">"células zumbis".</strong>
          </p>

          {/* Seção 3: Células Zumbis */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
            O que são "células zumbis" — e por que estão destruindo seus ossos
          </h2>

          <figure className="my-6 sm:my-8">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.zombieCellsIllustration}
                alt="Ilustração de células senescentes"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
            <figcaption className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 italic px-2 sm:px-0">
              Células senescentes (em vermelho) liberam substâncias inflamatórias que destroem ossos e cartilagens. Ilustração: Pesquisa NASA
            </figcaption>
          </figure>

          <p>
            <strong>As "células zumbis" são células senescentes que se recusam a morrer,</strong> mas, em vez disso, permanecem no corpo, inundando os tecidos circundantes com substâncias químicas inflamatórias que corroem a estrutura óssea, destroem a cartilagem e aceleram a dor e a rigidez nas articulações.
          </p>

          <p>
            Durante anos, essas células anômalas foram consideradas inofensivas. Mas a equipe de Elon Musk descobriu algo muito mais perturbador:
          </p>

          <blockquote className="text-lg sm:text-xl md:text-2xl font-bold text-red-700 italic text-center py-4 sm:py-6 my-6 sm:my-8 bg-red-50 rounded-lg px-4 sm:px-6">
            "As células zumbis não apenas envelhecem seu corpo... elas sabotam ativamente seus ossos e articulações — muitas vezes décadas antes do aparecimento dos sintomas."
          </blockquote>

          <p>
            Desde 2020, o acúmulo de células zumbis tornou-se uma epidemia invisível em mulheres idosas, roubando silenciosamente sua força, mobilidade e independência dia após dia.
          </p>

          {/* Seção 4: Como funciona o ataque */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
            "Seus ossos não estão apenas fracos — eles estão sendo atacados de dentro para fora"
          </h2>

          <p>
            No interior do seu corpo, milhões de células estão se tornando rebeldes — transformando-se no que os cientistas agora chamam de "células zumbis".
          </p>

          <p>
            Essas células disfuncionais <strong>se recusam a morrer... mas também não se curam.</strong>
          </p>

          <p>
            Em vez disso, elas liberam substâncias químicas inflamatórias tóxicas que corroem seus ossos e cartilagens de dentro para fora.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4">
              <strong>Quando você é jovem,</strong> seu corpo consegue eliminar essas células anômalas antes que elas causem muitos danos.
            </p>
            <p className="font-bold text-red-700">
              Mas depois dos 50, esse sistema de defesa começa a falhar.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
            E o que acontece a seguir é aterrador:
          </h3>

          <ul className="list-none space-y-2 sm:space-y-3 my-4 sm:my-6">
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base">A densidade óssea diminui em até <strong>2% ao ano</strong></span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base">A cartilagem articular torna-se mais fina, mais rígida e mais inflamada</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base">Sua estrutura óssea torna-se frágil, quebradiça e vulnerável até mesmo a movimentos leves</span>
            </li>
          </ul>

          <p className="font-bold text-lg sm:text-xl text-red-700">
            Você pode não sentir nada até que já seja tarde demais.
          </p>

          <p>
            Isso não é apenas rigidez. <strong>É deterioração estrutural.</strong>
          </p>

          <p className="font-bold text-lg sm:text-xl">
            Seu esqueleto está se desfazendo — pedaço por pedaço.
          </p>

          {/* Seção 5: Sintomas de Alerta */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
            Se você está apresentando esses sintomas, seus ossos e articulações podem já estar comprometidos
          </h2>

          <div className="bg-red-50 rounded-lg p-6 sm:p-8 my-6 sm:my-8">
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              Se você está enfrentando algum dos seguintes problemas, pode ser um sinal de que <strong>células zumbis já estão destruindo seus ossos e articulações de dentro para fora:</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">1</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Rigidez ou dor profunda</p>
                  <p className="text-xs sm:text-sm text-gray-600">Persistente nos quadris, joelhos ou região lombar</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">2</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Sons de rangido ou estalo</p>
                  <p className="text-xs sm:text-sm text-gray-600">Crepitação nas articulações ao se mover</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">3</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Dificuldade em levantar-se</p>
                  <p className="text-xs sm:text-sm text-gray-600">De uma cadeira sem usar os braços</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">4</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Medo de cair</p>
                  <p className="text-xs sm:text-sm text-gray-600">Especialmente em escadas ou terrenos irregulares</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">5</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Diminuição da altura</p>
                  <p className="text-xs sm:text-sm text-gray-600">Ou postura visivelmente curvada</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">6</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Fraqueza muscular</p>
                  <p className="text-xs sm:text-sm text-gray-600">Ao carregar compras, subir escadas ou caminhar</p>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-6 font-bold text-sm sm:text-base">
              E eventualmente… você começa a dizer não às coisas que davam sentido à vida:
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Jardinagem • Viajar • Brincando com os netos • Até mesmo ir à igreja ou visitar amigos.
            </p>
          </div>

          {/* Seção 6: Falha dos Tratamentos Convencionais */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
            Por que os tratamentos "padrão" não apenas falham, como também pioram a situação
          </h2>

          <div className="space-y-4 sm:space-y-6 my-6 sm:my-8">
            <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Suplementos de cálcio?</h3>
              <p className="text-sm sm:text-base">Você absorve muito pouco disso. O que você absorve pode acabar <strong>endurecendo suas artérias mais do que seus ossos.</strong></p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Bifosfonatos como Fosamax ou Boniva?</h3>
              <p className="mb-3 text-sm sm:text-base">Esses medicamentos podem retardar temporariamente a perda óssea, mas <strong>a que custo?</strong></p>
              <div className="bg-gray-100 rounded p-3 sm:p-4">
                <p className="font-bold text-xs sm:text-sm mb-2">Efeitos colaterais incluem:</p>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li>• Necrose óssea na mandíbula</li>
                  <li>• Úlceras</li>
                  <li>• Câncer de esôfago</li>
                  <li>• Alto risco de fraturas espontâneas</li>
                </ul>
              </div>
              <p className="mt-3 font-bold text-red-700 text-sm sm:text-base">
                Medicamentos destinados a prevenir fraturas podem, na verdade, causá-las.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Glucosamina e condroitina?</h3>
              <p className="text-sm sm:text-base">Estudo após estudo mostra <strong>pouca ou nenhuma melhoria mensurável</strong> no espaço articular ou na mobilidade.</p>
            </div>
          </div>

          {/* Seção 7: Urgência Emocional */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 text-center py-6 sm:py-8 my-8 sm:my-10 bg-blue-50 rounded-lg px-4 sm:px-6">
            "Se você ainda não está acamada, seu corpo ainda está implorando por cura."
          </blockquote>

          <p>
            O que você está sentindo agora não é apenas dor.
          </p>

          <p className="font-bold text-lg sm:text-xl">
            É um sinal. Um último aviso.
          </p>

          <p>
            Porque, no interior dos seus ossos e articulações, ainda existem células vivas tentando reconstruir, tentando manter a posição.
          </p>

          <p className="font-bold">
            Mas elas estão sobrecarregadas.
          </p>

          <p className="text-red-700">
            Rodeadas por inflamação. Sufocadas por células zumbis. Privadas dos estímulos necessários para sobreviver.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              <strong>Mas se você ainda sente desconforto</strong> — se seu corpo ainda está reagindo — isso significa que ainda há tempo.
            </p>
            <p className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">
              Esta ainda é uma chance de:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">Eliminar as células zumbis que desencadeiam inflamação e deterioração</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">Reativar a capacidade do seu corpo de construir ossos e reparar cartilagens</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">Sentir-se mais forte, estável e flexível semana após semana</span>
              </li>
            </ul>
          </div>

          {/* Seção 8: A Solução */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
            O protocolo revolucionário que ajuda os ossos a se regenerarem e as articulações a se revitalizarem
          </h2>

          <p>
            A descoberta de Elon Musk levou ao desenvolvimento de um <strong>protocolo revolucionário</strong> que aborda a deterioração óssea na sua origem.
          </p>

          <p>
            Em vez de tratar os sintomas, este sistema se concentra na <strong>regeneração celular,</strong> usando técnicas específicas para ajudar o corpo:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8">
            <div className="bg-green-50 rounded-lg p-4 sm:p-6 text-center">
              <Activity className="w-8 h-8 sm:w-12 sm:h-12 text-green-600 mx-auto mb-2 sm:mb-3" />
              <p className="font-bold text-sm sm:text-base">Eliminar as células senescentes "zumbis"</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 text-center">
              <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-2 sm:mb-3" />
              <p className="font-bold text-sm sm:text-base">Interromper a inflamação descontrolada</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 sm:p-6 text-center">
              <TrendingUp className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-2 sm:mb-3" />
              <p className="font-bold text-sm sm:text-base">Reativar proteínas formadoras de osso</p>
            </div>
          </div>

          <p className="text-center font-bold text-xl sm:text-2xl my-6 sm:my-8">
            Chama-se <span className="text-blue-700">Protocolo de Regeneração Óssea Anti-Células Zumbis.</span>
          </p>

          <figure className="my-8 sm:my-10">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <Image 
                src={IMAGES.productPackage}
                alt="Protocolo de Regeneração Óssea Anti-Células Zumbis"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
            <figcaption className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 italic text-center px-2 sm:px-0">
              Protocolo desenvolvido com base nas pesquisas de Elon Musk e NASA. Foto: Divulgação
            </figcaption>
          </figure>

          {/* Seção 9: Como funciona o protocolo */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
            Como o Protocolo Anti-Células Zumbis atua em nível celular
          </h2>

          <p className="mb-4 sm:mb-6">
            Este potente <strong>sistema de dupla ação</strong> contém técnicas clinicamente comprovadas, desenvolvidas para:
          </p>

          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 my-6 sm:my-8">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">🦴 Reconstruir a Densidade Óssea:</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <p className="font-bold mb-2 text-sm sm:text-base">☀️ Ativação da Vitamina D3</p>
                <p className="text-gray-700 text-xs sm:text-sm">Aumenta a absorção de cálcio e mineralização óssea através de exposição solar estratégica.</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <p className="font-bold mb-2 text-sm sm:text-base">💚 Técnica da Vitamina K2</p>
                <p className="text-gray-700 text-xs sm:text-sm">Ativa a osteocalcina, fixando cálcio nos ossos através de combinações alimentares específicas.</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <p className="font-bold mb-2 text-sm sm:text-base">🌊 Método Multimineral Marinho</p>
                <p className="text-gray-700 text-xs sm:text-sm">Protocolo baseado em algas que aumenta densidade óssea e mobilidade.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 sm:p-8 my-6 sm:my-8">
            <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-4 sm:mb-6">🦵 Aliviar Dores e Rigidez nas Articulações:</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <p className="font-bold mb-2 text-sm sm:text-base">⚡ Protocolo PEA Natural</p>
                <p className="text-gray-700 text-xs sm:text-sm">Técnica baseada em ácidos graxos naturais, mais eficaz que ibuprofeno.</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <p className="font-bold mb-2 text-sm sm:text-base">🧬 Método do Colágeno Tipo II</p>
                <p className="text-gray-700 text-xs sm:text-sm">Modula a resposta imunológica através de protocolos alimentares específicos.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">
              Juntos, esses protocolos criam o efeito <span className="text-yellow-800">"Escudo Esquelético"</span>
            </p>
            <p className="text-sm sm:text-base">
              Um sistema de defesa biológico que não apenas protege seus ossos e articulações, mas também os ajuda a se regenerar.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
            O que você pode esperar?
          </h3>

          <ul className="space-y-2 sm:space-y-3 my-4 sm:my-6">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base"><strong>Ossos mais fortes</strong> — especialmente nos quadris, coluna e joelhos</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base"><strong>Articulações suaves e flexíveis</strong> com menos atrito e rigidez</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base"><strong>Confiança nos movimentos</strong> — subir escadas, caminhar, pegar os netos sem medo</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base">Uma sensação de <strong>reconquistar o próprio corpo</strong>, um dia de cada vez</span>
            </li>
          </ul>

          {/* Seção 10: Como Aplicar */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
            Como aplicar o Protocolo Anti-Células Zumbis para alívio máximo
          </h2>

          <p>
            Obter resultados com o Protocolo Anti-Células Zumbis é <strong>simples.</strong>
          </p>

          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 my-6 sm:my-8 text-center">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              📅 Basta seguir o protocolo de 15 minutos todas as manhãs após acordar.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Para resultados mais rápidos, muitos usuários aplicam o protocolo vespertino adicional, especialmente nos primeiros 30 a 60 dias.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
            Desde a primeira aplicação, o Protocolo ativa:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-4 sm:my-6">
            <div className="bg-green-50 rounded-lg p-3 sm:p-4 flex items-center">
              <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base">Elimina as células zumbis inflamatórias</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 sm:p-4 flex items-center">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base">Ativa proteínas formadoras de osso</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 sm:p-4 flex items-center">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base">Alivia dores e inchaço nas articulações</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 sm:p-4 flex items-center">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base">Reconstrói a força de dentro para fora</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              <strong>Inicialmente,</strong> você notará mudanças sutis: Mais energia. Melhor sono. Menos rigidez ao acordar.
            </p>
            <p className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">
              Então algo incrível acontece...
            </p>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Subir escadas não te assusta. Levantar-se de uma cadeira não exige estratégia.
            </p>
            <p className="font-bold text-lg sm:text-xl text-green-800">
              Você se move com confiança. É como recuperar a própria vida.
            </p>
          </div>

          {/* Seção 11: Depoimentos */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
            O que as pessoas estão dizendo sobre o Protocolo
          </h2>

          {/* Depoimento 1 */}
          <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 rounded-full mr-3 sm:mr-4 overflow-hidden relative flex-shrink-0">
                <Image 
                  src={IMAGES.testimonialHelen}
                  alt="Helena"
                  fill
                  className="object-contain sm:object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-bold text-base sm:text-lg">Helena, 68 anos</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">
              "Senti a diferença nos meus joelhos em poucos dias."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base">
              "Tentei de tudo: cálcio, glucosamina, cremes. Mas nada fez meus joelhos se sentirem estáveis novamente. Comecei a seguir o Protocolo Anti-Células Zumbis há alguns meses e senti a diferença em poucos dias. A dor diminuiu e não me sentia mais como se estivesse a um passo de uma lesão."
            </p>
            <p className="text-gray-700 font-bold text-sm sm:text-base">
              "Agora passeio com meu cachorro todas as manhãs sem medo. Até voltei ao jardim. Sigo o protocolo todos os dias e nunca vou parar."
            </p>
          </div>

          {/* Depoimento 2 */}
          <div className="border-l-4 border-green-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 rounded-full mr-3 sm:mr-4 overflow-hidden relative flex-shrink-0">
                <Image 
                  src={IMAGES.testimonialRuth}
                  alt="Ruth"
                  fill
                  className="object-contain sm:object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-bold text-base sm:text-lg">Ruth, 64 anos</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">
              "Cada semana me aproximava de me sentir eu mesma novamente."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base">
              "Depois da primeira semana, minhas articulações não estavam mais tão rígidas. No segundo mês, conseguia me levantar sem me apoiar. No terceiro? Dancei no casamento da minha sobrinha — e quando digo dancei, é dancei mesmo."
            </p>
            <p className="text-gray-700 font-bold text-sm sm:text-base">
              "O protocolo não apenas ajudou meus ossos, como me devolveu a confiança. Sinto-me forte novamente."
            </p>
          </div>

          {/* Depoimento 3 */}
          <div className="border-l-4 border-purple-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 rounded-full mr-3 sm:mr-4 overflow-hidden relative flex-shrink-0">
                <Image 
                  src={IMAGES.testimonialDiane}
                  alt="Diane"
                  fill
                  className="object-contain sm:object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-bold text-base sm:text-lg">Diane, 66 anos</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">
              "Estava cética, mas em 10 dias me senti mais forte."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base">
              "Sigo o Protocolo há uma semana e meia, e estou impressionada com a rapidez. Antes, não conseguia dormir sem analgésicos. Meus joelhos gritavam toda vez que me levantava."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base">
              "Hoje? Atravessei a cidade, passei por três lojas e não precisei sentar nenhuma vez. A dor melhorou pelo menos 75 a 80% — e sinto-me estável. Confiante."
            </p>
            <p className="text-gray-700 font-bold text-sm sm:text-base">
              "Não uso mais almofada térmica. Pela primeira vez em muito tempo, sinto que há esperança novamente."
            </p>
          </div>

          {/* Seção 12: Autoridade Médica */}
          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              O que a comunidade médica tem a dizer
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden relative">
                <Image 
                  src={IMAGES.draMarina}
                  alt="Dra. Marina Santos"
                  fill
                  className="object-contain sm:object-cover"
                  unoptimized
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4 italic">
                  "Analisei inúmeros protocolos para densidade óssea e o <strong>Protocolo Anti-Células Zumbis é único.</strong> Se você sofre de perda óssea ou desconforto articular, recomendo este protocolo."
                </p>
                <p className="font-bold text-blue-900 flex items-center justify-center sm:justify-start text-sm sm:text-base">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Dra. Marina Santos, PhD, MSM
                </p>
              </div>
            </div>
          </div>

          {/* Seção 13: Consequências de não agir */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
            O que acontece se você não fizer nada?
          </h2>

          <p className="text-lg sm:text-xl mb-4 sm:mb-6">
            O que hoje parece <strong>"apenas uma pequena dor"...</strong> pode se transformar em uma <strong className="text-red-700">fratura que mudará sua vida amanhã.</strong>
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Imagine uma rachadura na fundação da sua casa. Com o tempo, se espalha, enfraquecendo toda a estrutura até que cause o colapso.
            </p>
            <p className="font-bold text-lg sm:text-xl">
              É exatamente isso que está acontecendo dentro do seu corpo.
            </p>
          </div>

          <ul className="space-y-2 sm:space-y-3 my-4 sm:my-6">
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base">Os ossos ficam mais finos e fracos</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base">As articulações ficam inflamadas e quebradiças</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base">Um movimento errado pode deixar você lesionada, imóvel ou pior</span>
            </li>
          </ul>

          <p className="font-bold text-lg sm:text-xl text-center my-6 sm:my-8">
            A diferença entre recuperar suas forças... e perdê-las para sempre... tudo se resume ao que você faz agora.
          </p>

          {/* Seção 14: Exclusividade */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
            Por que você não encontrará o Protocolo em livrarias ou farmácias
          </h2>

          <p className="mb-4 sm:mb-6">
            O Protocolo Anti-Células Zumbis está disponível <strong>apenas através desta página</strong> — e por um bom motivo.
          </p>

          <p className="mb-4 sm:mb-6">
            Ao eliminar intermediários, garantimos que você tenha acesso direto às descobertas mais avançadas a um preço justo.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="text-sm sm:text-base">
              Essa abordagem faz parte do compromisso de <strong>Elon Musk:</strong> tornar o suporte avançado para ossos e articulações <strong>acessível para quem mais precisa.</strong>
            </p>
          </div>

          {/* Seção 15: Preço */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center">
            E agora vem a melhor parte
          </h2>

          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-center">
            Embora o preço normal seja <span className="line-through text-red-600">€297</span>, agora mesmo você pode ter acesso por apenas <span className="line-through text-red-600">€197</span>.
          </p>

          <div className="bg-green-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10 text-center">
            <p className="text-lg sm:text-xl mb-4 sm:mb-6">
              Mas quando compartilhei minha história com a equipe, eles foram além.
            </p>
            <p className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
              Hoje, por tempo limitado, você pode experimentar o Protocolo Anti-Células Zumbis por apenas:
            </p>
            
            <div className="mb-6 sm:mb-8">
              <div className="text-gray-400 text-lg sm:text-2xl line-through mb-2">€297</div>
              <div className="text-gray-400 text-base sm:text-xl line-through mb-3 sm:mb-4">€197</div>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-green-600 mb-3 sm:mb-4">€27</div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-lg sm:text-2xl font-bold mb-3 sm:mb-4">
                Economia de €270!
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Um preço que o torna acessível para quem mais precisa.
              </p>
            </div>

            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 sm:p-6">
              <p className="font-bold text-base sm:text-lg text-blue-900">
                E você não precisa tomar uma decisão agora.
              </p>
            </div>
          </div>

          {/* CTA PRINCIPAL */}
          <div className="my-8 sm:my-12 text-center">
            <Button 
              onClick={handleCTA}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg sm:text-xl md:text-2xl py-6 sm:py-8 px-8 sm:px-16 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center text-center">
                🔥 APLICAR DESCONTO E VERIFICAR DISPONIBILIDADE
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
              </span>
            </Button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              🔒 Pagamento 100% Seguro • ⚡ Acesso Imediato • 🛡️ Garantia de 30 Dias
            </p>
          </div>

          {/* Seção 16: Garantia */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center">
            Garantia de 30 dias, sem perguntas
          </h2>

          <div className="bg-green-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <Shield className="w-20 h-20 sm:w-32 sm:h-32 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg sm:text-xl mb-3 sm:mb-4">
                  Experimente o Protocolo por <strong>30 dias completos.</strong> São 30 dias para sentir a diferença em seus ossos, articulações e no seu dia a dia.
                </p>
                <p className="text-lg sm:text-xl mb-4 sm:mb-6">
                  Se você não ficar totalmente satisfeita, você receberá <strong className="text-green-700">100% do seu dinheiro de volta.</strong>
                </p>
                
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="text-green-600 text-2xl sm:text-3xl font-bold mb-1">✓</div>
                    <p className="text-xs sm:text-sm">Sem complicações</p>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 text-2xl sm:text-3xl font-bold mb-1">✓</div>
                    <p className="text-xs sm:text-sm">Sem letras miúdas</p>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 text-2xl sm:text-3xl font-bold mb-1">✓</div>
                    <p className="text-xs sm:text-sm">Sem pegadinha</p>
                  </div>
                </div>

                <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6 text-center">
                  <p className="font-bold text-base sm:text-lg">Por que eles fariam isso?</p>
                  <p className="text-xl sm:text-2xl font-bold text-yellow-800 mt-2">Porque sabem que funciona.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 17: Urgência */}
          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <div className="text-center mb-4 sm:mb-6">
              <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-3 sm:mb-4">
                ⚠️ ATENÇÃO: Esta oferta pode estar indisponível quando você voltar!
              </h3>
            </div>

            <p className="text-lg sm:text-xl text-center mb-4 sm:mb-6">
              O Protocolo já ficou indisponível diversas vezes devido à <strong>enorme procura.</strong>
            </p>

            <p className="text-lg sm:text-xl text-center mb-6 sm:mb-8">
              Se você está interessada em reconstruir seus ossos e recuperar sua independência, <strong className="text-red-700">agora é a hora de agir.</strong>
            </p>

            {/* Timer */}
            <div className="bg-white rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 max-w-sm sm:max-w-md mx-auto">
              <div className="text-center mb-3 sm:mb-4">
                <p className="font-bold text-red-700 mb-2 text-sm sm:text-base">⏰ OFERTA EXPIRA EM:</p>
              </div>
              <div className="flex justify-center gap-2 sm:gap-4">
                <div className="text-center">
                  <div className="bg-red-600 text-white text-2xl sm:text-3xl md:text-4xl font-bold py-2 sm:py-3 px-2 sm:px-4 rounded-lg mb-1">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-bold text-red-700">HORAS</div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center">:</div>
                <div className="text-center">
                  <div className="bg-red-600 text-white text-2xl sm:text-3xl md:text-4xl font-bold py-2 sm:py-3 px-2 sm:px-4 rounded-lg mb-1">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-bold text-red-700">MINUTOS</div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center">:</div>
                <div className="text-center">
                  <div className="bg-red-600 text-white text-2xl sm:text-3xl md:text-4xl font-bold py-2 sm:py-3 px-2 sm:px-4 rounded-lg mb-1">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-bold text-red-700">SEGUNDOS</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={handleCTA}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-lg sm:text-xl md:text-2xl py-6 sm:py-8 px-8 sm:px-16 rounded-full shadow-2xl animate-pulse"
              >
                🚨 GARANTIR MINHA VAGA AGORA
              </Button>
            </div>
          </div>

          {/* Seção 18: Escolha Binária */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center">
            O verdadeiro risco? Viver com dor e arrependimento.
          </h2>

          <p className="text-lg sm:text-xl text-center mb-6 sm:mb-8">Você tem duas opções:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-10">
            
            {/* Opção 1 */}
            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 sm:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white text-2xl sm:text-3xl font-bold">✗</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-700">Opção 1: Não fazer nada</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Ossos continuarão mais finos</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Articulações mais rígidas</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Mundo cada vez menor</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Até você se perguntar: "Como cheguei a isso?"</span>
                </li>
              </ul>
            </div>

            {/* Opção 2 */}
            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 sm:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-700">Opção 2: Dar uma chance ao Protocolo</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Movimento sem medo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Ossos mais fortes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Articulações revitalizadas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Se não funcionar? Dinheiro de volta. Sem riscos.</span>
                </li>
              </ul>
              <div className="bg-green-100 border border-green-400 rounded-lg p-2 sm:p-3 text-center">
                <p className="font-bold text-green-800 text-sm sm:text-base">✅ 100% SEM RISCOS</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 sm:pl-6 py-4 sm:py-6 my-8 sm:my-10 rounded-r-lg">
            <p className="text-lg sm:text-xl mb-3 sm:mb-4">
              Ainda agradeço a Deus todos os dias por ter encontrado este protocolo.
            </p>
            <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Não mudou apenas o meu corpo — mudou o meu futuro.
            </p>
            <p className="text-lg sm:text-xl mb-3 sm:mb-4">
              Você quer continuar presa à dor e mobilidade reduzida?
            </p>
            <p className="text-xl sm:text-2xl font-bold text-yellow-800">
              Ou quer uma chance real de conquistar a força e confiança que merece?
            </p>
          </div>

          {/* CTA FINAL */}
          <div className="my-8 sm:my-12 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 sm:p-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Esta pode ser a decisão que divide sua vida em "antes" e "depois"
            </h3>
            
            <div className="mb-6 sm:mb-8">
              <div className="text-gray-400 text-lg sm:text-2xl line-through mb-2">€297</div>
              <div className="text-gray-400 text-base sm:text-xl line-through mb-3 sm:mb-4">€197</div>
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-green-600 mb-3 sm:mb-4">€27</div>
              <p className="text-xl sm:text-2xl font-bold text-yellow-700 mb-4 sm:mb-6">
                🔥 ECONOMIA DE €270 HOJE!
              </p>
            </div>

            <Button 
              onClick={handleCTA}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-xl sm:text-2xl md:text-3xl py-8 sm:py-10 px-12 sm:px-20 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center text-center">
                🛡️ APLICAR DESCONTO E VERIFICAR DISPONIBILIDADE
                <ArrowRight className="ml-2 sm:ml-3 w-6 h-6 sm:w-8 sm:h-8" />
              </span>
            </Button>

            <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base">
              🔒 Pagamento Seguro • ⚡ Acesso Imediato • 🛡️ Garantia Incondicional de 30 Dias
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            
            <AccordionItem value="item-1" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base">
                O Protocolo funciona para todos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base">
                O Protocolo foi desenvolvido especialmente para adultos acima de 50 anos que sofrem com perda óssea e desconforto articular. Funciona particularmente bem para pessoas que ainda sentem sintomas (dor, rigidez), pois isso indica que o corpo ainda está tentando se recuperar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base">
                Quanto tempo leva para ver resultados?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base">
                A maioria das pessoas nota mudanças sutis nas primeiras semanas (mais energia, melhor sono, menos rigidez matinal). Resultados mais significativos aparecem entre 30-60 dias de uso consistente do protocolo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base">
                É seguro usar junto com medicamentos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base">
                O Protocolo é baseado em técnicas naturais e alimentares. No entanto, sempre recomendamos consultar seu médico antes de iniciar qualquer novo protocolo de saúde, especialmente se você já usa medicamentos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base">
                E se o Protocolo não funcionar para mim?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base">
                Você tem 30 dias completos para experimentar o Protocolo sem riscos. Se não ficar satisfeita, basta solicitar o reembolso total — sem perguntas, sem complicações.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base">
                Como recebo o Protocolo após a compra?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base">
                O acesso é imediato! Após a confirmação do pagamento, você receberá um email com as instruções de acesso completo ao Protocolo. Você pode começar a aplicá-lo no mesmo dia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base">
                Preciso comprar suplementos caros?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base">
                Não! O Protocolo se concentra em técnicas naturais, exposição solar estratégica, combinações alimentares específicas e protocolos baseados em alimentos comuns. Não exige suplementos caros ou difíceis de encontrar.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

        </div>
      </article>

      {/* ============================================ */}
      {/* FOOTER / DISCLAIMER */}
      {/* ============================================ */}
      
      <footer className="bg-gray-100 border-t-2 border-gray-300 py-8 sm:py-12 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <p className="text-yellow-800 font-bold text-center mb-2 text-sm sm:text-base">
              ⚠️ IMPORTANTE - AVISO LEGAL
            </p>
            <p className="text-gray-700 text-xs sm:text-sm text-center leading-relaxed">
              <strong>ESTE É UM ANÚNCIO E NÃO UM ARTIGO DE NOTÍCIAS.</strong> As informações são apenas para fins educativos. Consulte sempre seu médico antes de iniciar qualquer novo protocolo de saúde.
            </p>
          </div>

          <div className="text-center text-gray-600 text-xs leading-relaxed space-y-3 sm:space-y-4">
            <p>
              © 2024 Protocolo de Regeneração Óssea Anti-Células Zumbis. Todos os direitos reservados.
            </p>
            <p>
              Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Os resultados podem variar de pessoa para pessoa.
            </p>
            <p>
              Este site não faz parte do site Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca registada da FACEBOOK, Inc.
            </p>
          </div>

        </div>
      </footer>

      {/* CSS CUSTOMIZADO */}
      <style jsx global>{`
        /* Fonte editorial */
        .article-body {
          font-family: Georgia, 'Times New Roman', serif;
        }
        
        /* Espaçamento de parágrafos */
        .article-body p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        
        /* Headings estilo jornal */
        .article-body h2,
        .article-body h3 {
          font-family: Georgia, serif;
          line-height: 1.2;
        }
        
        /* Letras capitulares (drop cap) - apenas para telas maiores */
        @media (min-width: 640px) {
          .article-body p:first-of-type::first-letter {
            font-size: 3.5rem;
            float: left;
            line-height: 0.9;
            margin-right: 0.5rem;
            font-weight: bold;
          }
        }
        
        /* Links estilo editorial */
        .article-body a {
          color: #2563eb;
          text-decoration: underline;
        }
        
        .article-body a:hover {
          color: #1d4ed8;
        }
        
        /* Blockquotes estilo jornal */
        .article-body blockquote {
          font-style: italic;
          position: relative;
        }
        
        /* Animação suave */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .8;
          }
        }

        /* Otimizações mobile para imagens */
        @media (max-width: 640px) {
          .object-contain {
            object-fit: contain !important;
          }
        }
      `}</style>

    </main>
  )
}
