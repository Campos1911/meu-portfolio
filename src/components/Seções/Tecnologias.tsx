"use client";

import React from "react";
import { Tecs } from "../Tecs";
import { Element } from "react-scroll";

const Tecnologias = () => {
  return (
    <Element name="tecs">
      <section className="flex flex-col w-full md:pt-10 pt-20 px-2 items-center">
        <div className="flex w-full items-center justify-center gap-10">
          <div className="border-b-2 w-[20%]"></div>
          <p className="md:text-4xl text-2xl font-bold">Tecnologias</p>
          <div className="border-b-2 w-[20%]"></div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 px-4 md:px-4 lg:px-0 pt-10 lg: gap-5 md:gap-x-5 lg:gap-x-10">
          {tecs.map((tecnologia, index) => (
            <Tecs nome={tecnologia.nome} path={tecnologia.path} key={index} />
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Tecnologias;

const tecs = [
  {
    nome: "React",
    path: "/assets/react.svg",
  },
  {
    nome: "Next",
    path: "/assets/next.svg",
  },
  {
    nome: "Javascript",
    path: "/assets/javascript.svg",
  },
  {
    nome: "HTML",
    path: "/assets/html.svg",
  },
  {
    nome: "CSS",
    path: "/assets/css.svg",
  },
  {
    nome: "Supabase",
    path: "/assets/supabase.svg",
  },
  {
    nome: "Wordpress",
    path: "/assets/wordpress.svg",
  },
  {
    nome: "Typescript",
    path: "/assets/typescript.svg",
  },
];
