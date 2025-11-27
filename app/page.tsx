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
  
  // DEPOIMENTOS
  testimonialHelen: "/images/testimonial-helen.jpg", // ← Helen, 68 anos
  testimonialRuth: "/images/testimonial-ruth.jpg", // ← Ruth, 64 anos
  testimonialDiane: "/images/testimonial-diane.jpg", // ← Diane, 66 anos
  
  // AUTORIDADE MÉDICA
  draMarina: "/images/dra-marina-santos.jpg", // ← Dra. Marina Santos
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
      {/* HEADER ESTILO JORNAL */}
      {/* ============================================ */}
      
      <header className="border-b-2 border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                Saúde & Ciência
              </h1>
              <p className="text-xs text-gray-500">Descobertas Médicas</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">
                {new Date().toLocaleDateString('pt-PT', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================ */}
      {/* ARTIGO PRINCIPAL */}
      {/* ============================================ */}
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        {/* CATEGORIA */}
        <div className="mb-6">
          <Badge className="bg-red-600 text-white px-4 py-1 text-xs font-bold uppercase">
            Saúde • Investigação Científica
          </Badge>
        </div>

        {/* HEADLINE PRINCIPAL */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          Elon Musk: O único protocolo que todos os adultos com mais de 50 anos devem seguir para reconstruir a densidade óssea naturalmente
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          Descoberta revolucionária ligada à NASA revela como "células zumbis" destroem ossos e articulações — e como eliminá-las naturalmente
        </p>

        {/* METADADOS DO ARTIGO */}
        <div className="flex items-center text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center mr-6">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
            <div>
              <p className="font-semibold text-gray-700">Redação Saúde & Ciência</p>
              <p className="text-xs">Investigação Especial</p>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>Leitura: 12 min</span>
          </div>
        </div>

        {/* IMAGEM HERO */}
        <figure className="mb-10">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image 
              src={IMAGES.heroMainImage}
              alt="Mulher ativa com mais de 50 anos"
              fill
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="text-sm text-gray-500 mt-3 italic">
            Milhões de mulheres acima de 50 anos sofrem com perda óssea acelerada — mas nova descoberta pode reverter o processo. Foto: Divulgação
          </figcaption>
        </figure>

        {/* LEAD/LIDE */}
        <div className="text-lg leading-relaxed text-gray-800 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          <p className="mb-6">
            <span className="font-bold text-2xl float-left mr-2 leading-none">O</span>s primeiros sinais de deterioração óssea e articular são fáceis de passar despercebidos. Com muita frequência, os médicos ignoram os sinais de alerta, com consequências devastadoras; <strong>todos os meses, cerca de 1.100 pessoas morrem após fraturarem o quadril devido à baixa densidade óssea.</strong>
          </p>
        </div>

        {/* CORPO DO ARTIGO */}
        <div className="article-body text-lg leading-relaxed text-gray-800 space-y-6" style={{ fontFamily: 'Georgia, serif' }}>
          
          {/* Seção 1: História Pessoal */}
          <div className="bg-gray-50 border-l-4 border-red-600 pl-6 py-6 my-8">
            <p className="mb-4">
              Na verdade, assisti horrorizada enquanto minha mãe morria lentamente de osteoporose.
            </p>
            <p className="mb-4">
              Ver alguém que você ama morrer lentamente, em agonia, sem saber nada sobre a doença que o matou, é de partir o coração.
            </p>
            <p className="mb-4">
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
          <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 text-center py-8 my-8 border-y-2 border-gray-300">
            "Então, por que algumas mulheres permanecem fortes, ativas e sem dor até os 70 anos, enquanto outras começam a se deteriorar aos 50 — mesmo seguindo as recomendações médicas?"
          </blockquote>

          <p>
            Essa pergunta me levou a uma busca incessante por respostas que iam além de comprimidos de cálcio sem graça, anti-inflamatórios ou suplementos caros que nunca funcionavam.
          </p>

          <p>
            <strong>Foi então que descobri o trabalho de Elon Musk e sua equipe científica,</strong> um biólogo celular pioneiro focado nas causas ocultas da rápida deterioração óssea em mulheres idosas.
          </p>

          <p className="font-bold text-xl">
            E o que ele descobriu... mudou tudo.
          </p>

          {/* Seção 2: Descoberta de Elon Musk */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
            A descoberta revolucionária de Elon Musk — e a verdade alarmante sobre a perda óssea
          </h2>

          <figure className="my-8">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image 
                src={IMAGES.elonMuskPhoto}
                alt="Elon Musk"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-sm text-gray-500 mt-3 italic">
              Elon Musk e sua equipe descobriram conexão entre perda óssea de astronautas e envelhecimento na Terra. Foto: Arquivo
            </figcaption>
          </figure>

          <p>
            <strong>Elon Musk não estava apenas lançando foguetes</strong> — ele acidentalmente revelou uma crise silenciosa de saúde que está destruindo milhões de mulheres de dentro para fora.
          </p>

          <p>
            Durante anos, a NASA enfrentou um grande problema: os astronautas perdem rapidamente densidade óssea e força articular no espaço — <strong>da mesma forma que milhões de mulheres ao chegarem aos 50 anos.</strong> Musk queria respostas. Não apenas para os astronautas... mas para todos que envelhecem na Terra.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 py-6 my-8">
            <p className="font-bold mb-4">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
            O que são "células zumbis" — e por que estão destruindo seus ossos
          </h2>

          <figure className="my-8">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image 
                src={IMAGES.zombieCellsIllustration}
                alt="Ilustração de células senescentes"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-sm text-gray-500 mt-3 italic">
              Células senescentes (em vermelho) liberam substâncias inflamatórias que destroem ossos e cartilagens. Ilustração: Pesquisa NASA
            </figcaption>
          </figure>

          <p>
            <strong>As "células zumbis" são células senescentes que se recusam a morrer,</strong> mas, em vez disso, permanecem no corpo, inundando os tecidos circundantes com substâncias químicas inflamatórias que corroem a estrutura óssea, destroem a cartilagem e aceleram a dor e a rigidez nas articulações.
          </p>

          <p>
            Durante anos, essas células anômalas foram consideradas inofensivas. Mas a equipe de Elon Musk descobriu algo muito mais perturbador:
          </p>

          <blockquote className="text-xl md:text-2xl font-bold text-red-700 italic text-center py-6 my-8 bg-red-50 rounded-lg px-6">
            "As células zumbis não apenas envelhecem seu corpo... elas sabotam ativamente seus ossos e articulações — muitas vezes décadas antes do aparecimento dos sintomas."
          </blockquote>

          <p>
            Desde 2020, o acúmulo de células zumbis tornou-se uma epidemia invisível em mulheres idosas, roubando silenciosamente sua força, mobilidade e independência dia após dia.
          </p>

          {/* Seção 4: Como funciona o ataque */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
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

          <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-6 py-6 my-8">
            <p className="mb-4">
              <strong>Quando você é jovem,</strong> seu corpo consegue eliminar essas células anômalas antes que elas causem muitos danos.
            </p>
            <p className="font-bold text-red-700">
              Mas depois dos 50, esse sistema de defesa começa a falhar.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            E o que acontece a seguir é aterrador:
          </h3>

          <ul className="list-none space-y-3 my-6">
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <span>A densidade óssea diminui em até <strong>2% ao ano</strong></span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <span>A cartilagem articular torna-se mais fina, mais rígida e mais inflamada</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <span>Sua estrutura óssea torna-se frágil, quebradiça e vulnerável até mesmo a movimentos leves</span>
            </li>
          </ul>

          <p className="font-bold text-xl text-red-700">
            Você pode não sentir nada até que já seja tarde demais.
          </p>

          <p>
            Isso não é apenas rigidez. <strong>É deterioração estrutural.</strong>
          </p>

          <p className="font-bold text-xl">
            Seu esqueleto está se desfazendo — pedaço por pedaço.
          </p>

          {/* Seção 5: Sintomas de Alerta */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
            Se você está apresentando esses sintomas, seus ossos e articulações podem já estar comprometidos
          </h2>

          <div className="bg-red-50 rounded-lg p-8 my-8">
            <p className="mb-6">
              Se você está enfrentando algum dos seguintes problemas, pode ser um sinal de que <strong>células zumbis já estão destruindo seus ossos e articulações de dentro para fora:</strong>
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">1</div>
                <div>
                  <p className="font-bold">Rigidez ou dor profunda</p>
                  <p className="text-sm text-gray-600">Persistente nos quadris, joelhos ou região lombar</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">2</div>
                <div>
                  <p className="font-bold">Sons de rangido ou estalo</p>
                  <p className="text-sm text-gray-600">Crepitação nas articulações ao se mover</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">3</div>
                <div>
                  <p className="font-bold">Dificuldade em levantar-se</p>
                  <p className="text-sm text-gray-600">De uma cadeira sem usar os braços</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">4</div>
                <div>
                  <p className="font-bold">Medo de cair</p>
                  <p className="text-sm text-gray-600">Especialmente em escadas ou terrenos irregulares</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">5</div>
                <div>
                  <p className="font-bold">Diminuição da altura</p>
                  <p className="text-sm text-gray-600">Ou postura visivelmente curvada</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">6</div>
                <div>
                  <p className="font-bold">Fraqueza muscular</p>
                  <p className="text-sm text-gray-600">Ao carregar compras, subir escadas ou caminhar</p>
                </div>
              </div>
            </div>

            <p className="mt-6 font-bold">
              E eventualmente… você começa a dizer não às coisas que davam sentido à vida:
            </p>
            <p className="text-gray-600">
              Jardinagem • Viajar • Brincando com os netos • Até mesmo ir à igreja ou visitar amigos.
            </p>
          </div>

          {/* Seção 6: Falha dos Tratamentos Convencionais */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
            Por que os tratamentos "padrão" não apenas falham, como também pioram a situação
          </h2>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-bold mb-2">Suplementos de cálcio?</h3>
              <p>Você absorve muito pouco disso. O que você absorve pode acabar <strong>endurecendo suas artérias mais do que seus ossos.</strong></p>
            </div>

            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-bold mb-2">Bifosfonatos como Fosamax ou Boniva?</h3>
              <p className="mb-3">Esses medicamentos podem retardar temporariamente a perda óssea, mas <strong>a que custo?</strong></p>
              <div className="bg-gray-100 rounded p-4">
                <p className="font-bold text-sm mb-2">Efeitos colaterais incluem:</p>
                <ul className="text-sm space-y-1">
                  <li>• Necrose óssea na mandíbula</li>
                  <li>• Úlceras</li>
                  <li>• Câncer de esôfago</li>
                  <li>• Alto risco de fraturas espontâneas</li>
                </ul>
              </div>
              <p className="mt-3 font-bold text-red-700">
                Medicamentos destinados a prevenir fraturas podem, na verdade, causá-las.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-bold mb-2">Glucosamina e condroitina?</h3>
              <p>Estudo após estudo mostra <strong>pouca ou nenhuma melhoria mensurável</strong> no espaço articular ou na mobilidade.</p>
            </div>
          </div>

          {/* Seção 7: Urgência Emocional */}
          <blockquote className="text-2xl md:text-3xl font-bold text-blue-900 text-center py-8 my-10 bg-blue-50 rounded-lg px-6">
            "Se você ainda não está acamada, seu corpo ainda está implorando por cura."
          </blockquote>

          <p>
            O que você está sentindo agora não é apenas dor.
          </p>

          <p className="font-bold text-xl">
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

          <div className="bg-green-50 border-l-4 border-green-600 pl-6 py-6 my-8">
            <p className="mb-4">
              <strong>Mas se você ainda sente desconforto</strong> — se seu corpo ainda está reagindo — isso significa que ainda há tempo.
            </p>
            <p className="font-bold text-xl mb-4">
              Esta ainda é uma chance de:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>Eliminar as células zumbis que desencadeiam inflamação e deterioração</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>Reativar a capacidade do seu corpo de construir ossos e reparar cartilagens</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>Sentir-se mais forte, estável e flexível semana após semana</span>
              </li>
            </ul>
          </div>

          {/* Seção 8: A Solução */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
            O protocolo revolucionário que ajuda os ossos a se regenerarem e as articulações a se revitalizarem
          </h2>

          <p>
            A descoberta de Elon Musk levou ao desenvolvimento de um <strong>protocolo revolucionário</strong> que aborda a deterioração óssea na sua origem.
          </p>

          <p>
            Em vez de tratar os sintomas, este sistema se concentra na <strong>regeneração celular,</strong> usando técnicas específicas para ajudar o corpo:
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <Activity className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="font-bold">Eliminar as células senescentes "zumbis"</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <p className="font-bold">Interromper a inflamação descontrolada</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <p className="font-bold">Reativar proteínas formadoras de osso</p>
            </div>
          </div>

          <p className="text-center font-bold text-2xl my-8">
            Chama-se <span className="text-blue-700">Protocolo de Regeneração Óssea Anti-Células Zumbis.</span>
          </p>

          <figure className="my-10">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={IMAGES.productPackage}
                alt="Protocolo de Regeneração Óssea Anti-Células Zumbis"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-sm text-gray-500 mt-3 italic text-center">
              Protocolo desenvolvido com base nas pesquisas de Elon Musk e NASA. Foto: Divulgação
            </figcaption>
          </figure>

          {/* Seção 9: Como funciona o protocolo */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
            Como o Protocolo Anti-Células Zumbis atua em nível celular
          </h2>

          <p className="mb-6">
            Este potente <strong>sistema de dupla ação</strong> contém técnicas clinicamente comprovadas, desenvolvidas para:
          </p>

          <div className="bg-blue-50 rounded-lg p-8 my-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">🦴 Reconstruir a Densidade Óssea:</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold mb-2">☀️ Ativação da Vitamina D3</p>
                <p className="text-gray-700">Aumenta a absorção de cálcio e mineralização óssea através de exposição solar estratégica.</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold mb-2">💚 Técnica da Vitamina K2</p>
                <p className="text-gray-700">Ativa a osteocalcina, fixando cálcio nos ossos através de combinações alimentares específicas.</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold mb-2">🌊 Método Multimineral Marinho</p>
                <p className="text-gray-700">Protocolo baseado em algas que aumenta densidade óssea e mobilidade.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-8 my-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6">🦵 Aliviar Dores e Rigidez nas Articulações:</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold mb-2">⚡ Protocolo PEA Natural</p>
                <p className="text-gray-700">Técnica baseada em ácidos graxos naturais, mais eficaz que ibuprofeno.</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold mb-2">🧬 Método do Colágeno Tipo II</p>
                <p className="text-gray-700">Modula a resposta imunológica através de protocolos alimentares específicos.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-6 py-6 my-8">
            <p className="font-bold text-xl mb-3">
              Juntos, esses protocolos criam o efeito <span className="text-yellow-800">"Escudo Esquelético"</span>
            </p>
            <p>
              Um sistema de defesa biológico que não apenas protege seus ossos e articulações, mas também os ajuda a se regenerar.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            O que você pode esperar?
          </h3>

          <ul className="space-y-3 my-6">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <span><strong>Ossos mais fortes</strong> — especialmente nos quadris, coluna e joelhos</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <span><strong>Articulações suaves e flexíveis</strong> com menos atrito e rigidez</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <span><strong>Confiança nos movimentos</strong> — subir escadas, caminhar, pegar os netos sem medo</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <span>Uma sensação de <strong>reconquistar o próprio corpo</strong>, um dia de cada vez</span>
            </li>
          </ul>

          {/* Seção 10: Como Aplicar */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
            Como aplicar o Protocolo Anti-Células Zumbis para alívio máximo
          </h2>

          <p>
            Obter resultados com o Protocolo Anti-Células Zumbis é <strong>simples.</strong>
          </p>

          <div className="bg-blue-50 rounded-lg p-8 my-8 text-center">
            <p className="text-xl font-bold mb-4">
              📅 Basta seguir o protocolo de 15 minutos todas as manhãs após acordar.
            </p>
            <p className="text-gray-700">
              Para resultados mais rápidos, muitos usuários aplicam o protocolo vespertino adicional, especialmente nos primeiros 30 a 60 dias.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Desde a primeira aplicação, o Protocolo ativa:
          </h3>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 rounded-lg p-4 flex items-center">
              <Activity className="w-8 h-8 text-green-600 mr-3 flex-shrink-0" />
              <p className="font-bold">Elimina as células zumbis inflamatórias</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 flex items-center">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0" />
              <p className="font-bold">Ativa proteínas formadoras de osso</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 flex items-center">
              <Heart className="w-8 h-8 text-purple-600 mr-3 flex-shrink-0" />
              <p className="font-bold">Alivia dores e inchaço nas articulações</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 flex items-center">
              <Award className="w-8 h-8 text-yellow-600 mr-3 flex-shrink-0" />
              <p className="font-bold">Reconstrói a força de dentro para fora</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 pl-6 py-6 my-8">
            <p className="mb-4">
              <strong>Inicialmente,</strong> você notará mudanças sutis: Mais energia. Melhor sono. Menos rigidez ao acordar.
            </p>
            <p className="font-bold text-xl mb-4">
              Então algo incrível acontece...
            </p>
            <p className="mb-4">
              Subir escadas não te assusta. Levantar-se de uma cadeira não exige estratégia.
            </p>
            <p className="font-bold text-xl text-green-800">
              Você se move com confiança. É como recuperar a própria vida.
            </p>
          </div>

          {/* Seção 11: Depoimentos */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
            O que as pessoas estão dizendo sobre o Protocolo
          </h2>

          {/* Depoimento 1 */}
          <div className="border-l-4 border-blue-600 pl-6 py-6 my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-bold text-lg">Helena, 68 anos</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-xl mb-3">
              "Senti a diferença nos meus joelhos em poucos dias."
            </p>
            <p className="text-gray-700 mb-3 italic">
              "Tentei de tudo: cálcio, glucosamina, cremes. Mas nada fez meus joelhos se sentirem estáveis novamente. Comecei a seguir o Protocolo Anti-Células Zumbis há alguns meses e senti a diferença em poucos dias. A dor diminuiu e não me sentia mais como se estivesse a um passo de uma lesão."
            </p>
            <p className="text-gray-700 font-bold">
              "Agora passeio com meu cachorro todas as manhãs sem medo. Até voltei ao jardim. Sigo o protocolo todos os dias e nunca vou parar."
            </p>
          </div>

          {/* Depoimento 2 */}
          <div className="border-l-4 border-green-600 pl-6 py-6 my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-bold text-lg">Ruth, 64 anos</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-xl mb-3">
              "Cada semana me aproximava de me sentir eu mesma novamente."
            </p>
            <p className="text-gray-700 mb-3 italic">
              "Depois da primeira semana, minhas articulações não estavam mais tão rígidas. No segundo mês, conseguia me levantar sem me apoiar. No terceiro? Dancei no casamento da minha sobrinha — e quando digo dancei, é dancei mesmo."
            </p>
            <p className="text-gray-700 font-bold">
              "O protocolo não apenas ajudou meus ossos, como me devolveu a confiança. Sinto-me forte novamente."
            </p>
          </div>

          {/* Depoimento 3 */}
          <div className="border-l-4 border-purple-600 pl-6 py-6 my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-bold text-lg">Diane, 66 anos</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-xl mb-3">
              "Estava cética, mas em 10 dias me senti mais forte."
            </p>
            <p className="text-gray-700 mb-3 italic">
              "Sigo o Protocolo há uma semana e meia, e estou impressionada com a rapidez. Antes, não conseguia dormir sem analgésicos. Meus joelhos gritavam toda vez que me levantava."
            </p>
            <p className="text-gray-700 mb-3 italic">
              "Hoje? Atravessei a cidade, passei por três lojas e não precisei sentar nenhuma vez. A dor melhorou pelo menos 75 a 80% — e sinto-me estável. Confiante."
            </p>
            <p className="text-gray-700 font-bold">
              "Não uso mais almofada térmica. Pela primeira vez em muito tempo, sinto que há esperança novamente."
            </p>
          </div>

          {/* Seção 12: Autoridade Médica */}
          <div className="bg-blue-50 rounded-lg p-8 my-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              O que a comunidade médica tem a dizer
            </h3>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-xl text-gray-800 mb-4 italic">
                  "Analisei inúmeros protocolos para densidade óssea e o <strong>Protocolo Anti-Células Zumbis é único.</strong> Se você sofre de perda óssea ou desconforto articular, recomendo este protocolo."
                </p>
                <p className="font-bold text-blue-900 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Dra. Marina Santos, PhD, MSM
                </p>
              </div>
            </div>
          </div>

          {/* Seção 13: Consequências de não agir */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
            O que acontece se você não fizer nada?
          </h2>

          <p className="text-xl mb-6">
            O que hoje parece <strong>"apenas uma pequena dor"...</strong> pode se transformar em uma <strong className="text-red-700">fratura que mudará sua vida amanhã.</strong>
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 pl-6 py-6 my-8">
            <p className="mb-4">
              Imagine uma rachadura na fundação da sua casa. Com o tempo, se espalha, enfraquecendo toda a estrutura até que cause o colapso.
            </p>
            <p className="font-bold text-xl">
              É exatamente isso que está acontecendo dentro do seu corpo.
            </p>
          </div>

          <ul className="space-y-3 my-6">
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <span>Os ossos ficam mais finos e fracos</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <span>As articulações ficam inflamadas e quebradiças</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <span>Um movimento errado pode deixar você lesionada, imóvel ou pior</span>
            </li>
          </ul>

          <p className="font-bold text-xl text-center my-8">
            A diferença entre recuperar suas forças... e perdê-las para sempre... tudo se resume ao que você faz agora.
          </p>

          {/* Seção 14: Exclusividade */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
            Por que você não encontrará o Protocolo em livrarias ou farmácias
          </h2>

          <p className="mb-6">
            O Protocolo Anti-Células Zumbis está disponível <strong>apenas através desta página</strong> — e por um bom motivo.
          </p>

          <p className="mb-6">
            Ao eliminar intermediários, garantimos que você tenha acesso direto às descobertas mais avançadas a um preço justo.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-600 pl-6 py-6 my-8">
            <p>
              Essa abordagem faz parte do compromisso de <strong>Elon Musk:</strong> tornar o suporte avançado para ossos e articulações <strong>acessível para quem mais precisa.</strong>
            </p>
          </div>

          {/* Seção 15: Preço */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6 text-center">
            E agora vem a melhor parte
          </h2>

          <p className="text-xl mb-8 text-center">
            Embora o preço normal seja <span className="line-through text-red-600">€297</span>, agora mesmo você pode ter acesso por apenas <span className="line-through text-red-600">€197</span>.
          </p>

          <div className="bg-green-50 rounded-lg p-8 my-10 text-center">
            <p className="text-xl mb-6">
              Mas quando compartilhei minha história com a equipe, eles foram além.
            </p>
            <p className="text-2xl font-bold mb-8">
              Hoje, por tempo limitado, você pode experimentar o Protocolo Anti-Células Zumbis por apenas:
            </p>
            
            <div className="mb-8">
              <div className="text-gray-400 text-2xl line-through mb-2">€297</div>
              <div className="text-gray-400 text-xl line-through mb-4">€197</div>
              <div className="text-7xl md:text-8xl font-bold text-green-600 mb-4">€27</div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-2xl font-bold mb-4">
                Economia de €270!
              </div>
              <p className="text-gray-600">
                Um preço que o torna acessível para quem mais precisa.
              </p>
            </div>

            <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
              <p className="font-bold text-lg text-blue-900">
                E você não precisa tomar uma decisão agora.
              </p>
            </div>
          </div>

          {/* CTA PRINCIPAL */}
          <div className="my-12 text-center">
            <Button 
              onClick={handleCTA}
              className="w-full md:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-2xl py-8 px-16 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                🔥 APLICAR DESCONTO E VERIFICAR DISPONIBILIDADE
                <ArrowRight className="ml-3 w-6 h-6" />
              </span>
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              🔒 Pagamento 100% Seguro • ⚡ Acesso Imediato • 🛡️ Garantia de 30 Dias
            </p>
          </div>

          {/* Seção 16: Garantia */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6 text-center">
            Garantia de 30 dias, sem perguntas
          </h2>

          <div className="bg-green-50 rounded-lg p-8 my-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Shield className="w-32 h-32 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-xl mb-4">
                  Experimente o Protocolo por <strong>30 dias completos.</strong> São 30 dias para sentir a diferença em seus ossos, articulações e no seu dia a dia.
                </p>
                <p className="text-xl mb-6">
                  Se você não ficar totalmente satisfeita, você receberá <strong className="text-green-700">100% do seu dinheiro de volta.</strong>
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-green-600 text-3xl font-bold mb-1">✓</div>
                    <p className="text-sm">Sem complicações</p>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 text-3xl font-bold mb-1">✓</div>
                    <p className="text-sm">Sem letras miúdas</p>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 text-3xl font-bold mb-1">✓</div>
                    <p className="text-sm">Sem pegadinha</p>
                  </div>
                </div>

                <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4 mt-6 text-center">
                  <p className="font-bold text-lg">Por que eles fariam isso?</p>
                  <p className="text-2xl font-bold text-yellow-800 mt-2">Porque sabem que funciona.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 17: Urgência */}
          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-8 my-10">
            <div className="text-center mb-6">
              <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-red-700 mb-4">
                ⚠️ ATENÇÃO: Esta oferta pode estar indisponível quando você voltar!
              </h3>
            </div>

            <p className="text-xl text-center mb-6">
              O Protocolo já ficou indisponível diversas vezes devido à <strong>enorme procura.</strong>
            </p>

            <p className="text-xl text-center mb-8">
              Se você está interessada em reconstruir seus ossos e recuperar sua independência, <strong className="text-red-700">agora é a hora de agir.</strong>
            </p>

            {/* Timer */}
            <div className="bg-white rounded-lg p-6 mb-8 max-w-md mx-auto">
              <div className="text-center mb-4">
                <p className="font-bold text-red-700 mb-2">⏰ OFERTA EXPIRA EM:</p>
              </div>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="bg-red-600 text-white text-4xl font-bold py-3 px-4 rounded-lg mb-1">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-bold text-red-700">HORAS</div>
                </div>
                <div className="text-4xl font-bold flex items-center">:</div>
                <div className="text-center">
                  <div className="bg-red-600 text-white text-4xl font-bold py-3 px-4 rounded-lg mb-1">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-bold text-red-700">MINUTOS</div>
                </div>
                <div className="text-4xl font-bold flex items-center">:</div>
                <div className="text-center">
                  <div className="bg-red-600 text-white text-4xl font-bold py-3 px-4 rounded-lg mb-1">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-bold text-red-700">SEGUNDOS</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={handleCTA}
                className="w-full md:w-auto bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-2xl py-8 px-16 rounded-full shadow-2xl animate-pulse"
              >
                🚨 GARANTIR MINHA VAGA AGORA
              </Button>
            </div>
          </div>

          {/* Seção 18: Escolha Binária */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6 text-center">
            O verdadeiro risco? Viver com dor e arrependimento.
          </h2>

          <p className="text-xl text-center mb-8">Você tem duas opções:</p>

          <div className="grid md:grid-cols-2 gap-8 my-10">
            
            {/* Opção 1 */}
            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl font-bold">✗</span>
                </div>
                <h3 className="text-2xl font-bold text-red-700">Opção 1: Não fazer nada</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Ossos continuarão mais finos</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Articulações mais rígidas</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Mundo cada vez menor</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Até você se perguntar: "Como cheguei a isso?"</span>
                </li>
              </ul>
            </div>

            {/* Opção 2 */}
            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-700">Opção 2: Dar uma chance ao Protocolo</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Movimento sem medo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Ossos mais fortes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Articulações revitalizadas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Se não funcionar? Dinheiro de volta. Sem riscos.</span>
                </li>
              </ul>
              <div className="bg-green-100 border border-green-400 rounded-lg p-3 text-center">
                <p className="font-bold text-green-800">✅ 100% SEM RISCOS</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-6 py-6 my-10">
            <p className="text-xl mb-4">
              Ainda agradeço a Deus todos os dias por ter encontrado este protocolo.
            </p>
            <p className="text-2xl font-bold mb-6">
              Não mudou apenas o meu corpo — mudou o meu futuro.
            </p>
            <p className="text-xl mb-4">
              Você quer continuar presa à dor e mobilidade reduzida?
            </p>
            <p className="text-2xl font-bold text-yellow-800">
              Ou quer uma chance real de conquistar a força e confiança que merece?
            </p>
          </div>

          {/* CTA FINAL */}
          <div className="my-12 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-10">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Esta pode ser a decisão que divide sua vida em "antes" e "depois"
            </h3>
            
            <div className="mb-8">
              <div className="text-gray-400 text-2xl line-through mb-2">€297</div>
              <div className="text-gray-400 text-xl line-through mb-4">€197</div>
              <div className="text-8xl font-bold text-green-600 mb-4">€27</div>
              <p className="text-2xl font-bold text-yellow-700 mb-6">
                🔥 ECONOMIA DE €270 HOJE!
              </p>
            </div>

            <Button 
              onClick={handleCTA}
              className="w-full md:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-3xl py-10 px-20 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                🛡️ APLICAR DESCONTO E VERIFICAR DISPONIBILIDADE
                <ArrowRight className="ml-3 w-8 h-8" />
              </span>
            </Button>

            <p className="text-gray-600 mt-6">
              🔒 Pagamento Seguro • ⚡ Acesso Imediato • 🛡️ Garantia Incondicional de 30 Dias
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            
            <AccordionItem value="item-1" className="bg-gray-50 border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold">
                O Protocolo funciona para todos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                O Protocolo foi desenvolvido especialmente para adultos acima de 50 anos que sofrem com perda óssea e desconforto articular. Funciona particularmente bem para pessoas que ainda sentem sintomas (dor, rigidez), pois isso indica que o corpo ainda está tentando se recuperar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-50 border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold">
                Quanto tempo leva para ver resultados?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                A maioria das pessoas nota mudanças sutis nas primeiras semanas (mais energia, melhor sono, menos rigidez matinal). Resultados mais significativos aparecem entre 30-60 dias de uso consistente do protocolo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-50 border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold">
                É seguro usar junto com medicamentos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                O Protocolo é baseado em técnicas naturais e alimentares. No entanto, sempre recomendamos consultar seu médico antes de iniciar qualquer novo protocolo de saúde, especialmente se você já usa medicamentos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-50 border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold">
                E se o Protocolo não funcionar para mim?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                Você tem 30 dias completos para experimentar o Protocolo sem riscos. Se não ficar satisfeita, basta solicitar o reembolso total — sem perguntas, sem complicações.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gray-50 border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold">
                Como recebo o Protocolo após a compra?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                O acesso é imediato! Após a confirmação do pagamento, você receberá um email com as instruções de acesso completo ao Protocolo. Você pode começar a aplicá-lo no mesmo dia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gray-50 border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold">
                Preciso comprar suplementos caros?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                Não! O Protocolo se concentra em técnicas naturais, exposição solar estratégica, combinações alimentares específicas e protocolos baseados em alimentos comuns. Não exige suplementos caros ou difíceis de encontrar.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

        </div>
      </article>

      {/* ============================================ */}
      {/* FOOTER / DISCLAIMER */}
      {/* ============================================ */}
      
      <footer className="bg-gray-100 border-t-2 border-gray-300 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-6 mb-8">
            <p className="text-yellow-800 font-bold text-center mb-2">
              ⚠️ IMPORTANTE - AVISO LEGAL
            </p>
            <p className="text-gray-700 text-sm text-center leading-relaxed">
              <strong>ESTE É UM ANÚNCIO E NÃO UM ARTIGO DE NOTÍCIAS.</strong> As informações são apenas para fins educativos. Consulte sempre seu médico antes de iniciar qualquer novo protocolo de saúde.
            </p>
          </div>

          <div className="text-center text-gray-600 text-xs leading-relaxed space-y-4">
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
        
        /* Letras capitulares (drop cap) */
        .article-body p:first-of-type::first-letter {
          font-size: 3.5rem;
          float: left;
          line-height: 0.9;
          margin-right: 0.5rem;
          font-weight: bold;
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
      `}</style>

    </main>
  )
}
