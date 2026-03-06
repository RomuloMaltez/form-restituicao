"use client";

import Footer from "@/components/Footer/Footer";
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
    .min(1, "Selecione o tipo de qualificação")
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
