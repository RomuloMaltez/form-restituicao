"use client";

import Footer from "@/components/Footer/Footer";
import FormDetalhe from "@/components/Formulario/formDetalhes";
import FormHeader from "@/components/Formulario/formHeader";
import FormIdentidade from "@/components/Formulario/formIdentidade";
import FormQualificacao from "@/components/Formulario/formQualificacao";
import Header from "@/components/Header/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { schema, FormData } from "@/schema/formSchema";
import FormMotivacao from "@/components/Formulario/formMotivacao";
import FormDadosBancarios from "@/components/Formulario/formDadosBancarios";

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
              <FormMotivacao />
              <FormDadosBancarios />
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
