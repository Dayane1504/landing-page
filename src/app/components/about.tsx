import React from 'react'

export default function About() {
  return (
    <div className='bg-blue-950'>
      <div className="flex flex-col md:flex-row justify-center items-start px-5 py-16 gap-10 max-w-6xl mx-auto">
        
        <div className="flex-shrink-0">
          <img
            src="/Foto.jpg"
            alt="Minha foto"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
        
        <div className="md:ml-8 max-w-2xl text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">Sobre Mim</h1>
          <p className="text-white md:text-lg leading-relaxed">
            Olá! Sou uma desenvolvedora front-end em início de carreira, apaixonada por transformar ideias em interfaces bonitas, funcionais e responsivas. Tenho experiência com HTML, CSS, JavaScript e Node.Js, e venho explorando também frameworks como React, Next.Js e Tailwind CSS para construir aplicações modernas e dinâmicas.
            <br /><br />
            Além da parte técnica, valorizo a experiência do usuário e estou sempre buscando aprender mais sobre design, acessibilidade e boas práticas de código. Acredito no poder da tecnologia para criar soluções úteis e inclusivas, e estou animada para crescer profissionalmente colaborando em projetos reais.
            <br /><br />
            Atualmente, estou em busca de oportunidades para colocar em prática o que venho aprendendo, contribuir com equipes inspiradoras e continuar evoluindo como desenvolvedora.
          </p>
        </div>
      </div>
    </div>
  )
}
