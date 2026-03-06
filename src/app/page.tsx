"use client";

import Footer from "@/components/Footer/Footer";
import FormDetalhe from "@/components/Formulario/formDetalhes";
import FormHeader from "@/components/Formulario/formHeader";
import FormIdentidade from "@/components/Formulario/formIdentidade";
import FormQualificacao from "@/components/Formulario/formQualificacao";
import Header from "@/components/Header/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  // Primeira sessao
  tipo_pessoa: z
    .string()
    .min(1, "Selecione o tipo de pessoa")
    .refine((value) => ["Pessoa Física", "Pessoa Jurídica"].includes(value), {
      message: "Tipo de pessoa inválido",
    }),
  nome: z.string().min(4, "Nome é obrigatório!"),
  cpfCnpj: z.string().min(14, "CPF/CNPJ inválido"),
  cep: z.string().min(9, "CEP inválido"),
  logradouro: z.string().min(1, "Logradouro é obrigatório"),
  numero: z.string().min(1, "Número obrigatório"),
  complemento: z.string().optional(),
  bairro: z.string().min(2, "Bairro obrigatório"),
  cidade: z.string().min(2, "Cidade obrigatório"),
  estado: z
    .string()
    .min(2, "Estado obrigatório")
    .max(2, "Utilize apenas a sigla"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(14, "Telefone inválido"),

  // segunda sessao
  qualificacao: z
    .string()
    .refine(
      (value) =>
        [
          "O próprio contribuinte",
          "Procurador legalmente habilitado",
          "Detentor de direito sucessório",
          "Substituto tributário",
          "Órgão público",
        ].includes(value),
      {
        message: "Tipo de pessoa inválido",
      },
    ),

  // terceira sessao
  motivo_pricipal: z
    .string()
    .refine(
      (value) =>
        [
          "IPTU - Imposto Predial e Territorial Urbano",
          "ITBI - Imposto sobre Transmissão de Bens Imóveis",
          "TRSD - Taxa de Coleta de Resíduo (Lixo)",
          "ISS - Imposto Sobre Serviços",
          "Taxas Municipais",
          "Outras Rendas",
        ].includes(value),
      {
        message: "Motivo inválido",
      },
    ),
  num_dan: z.string().min(1, "Número do DAM/Guia é obrigatório!"),
  valor_pago: z
    .string()
    .regex(
      /^(\d{1,3}(\.\d{3})*|\d+),\d{2}$/,
      "Informe um valor válido (ex: 1.234,56)",
    ),
  data_pagamento: z
    .string()
    .regex(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Informe uma data válida (ex: 25/12/2025)",
    ),
});

export type FormData = z.infer<typeof schema>;

export default function Home() {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  async function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div className="min-h-screen bg-pv-gray-100 font-poppins">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 border border-gray-200">
          <FormHeader />

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <FormIdentidade />
              <FormQualificacao />
              <FormDetalhe />
              {/* <IdentificacaoRequerente />
                <IdentificacaoImovel />
                <InformacoesAdicionais />
                <DataAssinatura /> */}

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="bg-[#70B643] text-white px-6 py-3 rounded-md hover:bg-[#2980b9] transition"
                >
                  Gerar PDF
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </main>

      <Footer />
    </div>
  );
}
