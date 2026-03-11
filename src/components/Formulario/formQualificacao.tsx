"use client";

import formater from "@/utils/formater";
import { useFormContext } from "react-hook-form";

export default function FormQualificacao() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const qualificacao = watch("qualificacao");

  const mostrarDadosRequerente = qualificacao !== "O próprio contribuinte";

  return (
    <section className="form-section p-5 bg-[#FAFAFA] border border-gray-300 rounded mt-10 mb-10">
      <h3 className="text-[#2c3e50] font-semibold text-lg border-b-2 border-[#3498db] pb-2 mb-6">
        2. Qualificação do Requerente
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div className="col-span-full bg-gray-50 p-3 rounded border border-gray-200 mb-2">
          <p className="font-semibold text-sm mb-2">
            O requerente: <span className="text-red-500">*</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="O próprio contribuinte"
                {...register("qualificacao")}
                defaultChecked
              />
              O próprio contribuinte
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Procurador legalmente habilitado"
                {...register("qualificacao")}
              />
              Procurador legalmente habilitado
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Detentor de direito sucessório"
                {...register("qualificacao")}
              />
              Detentor de direito sucessório
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Substituto tributário"
                {...register("qualificacao")}
              />
              Substituto tributário
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Órgão público"
                {...register("qualificacao")}
              />
              Órgão público
            </label>
          </div>
        </div>

        {/* CAMPOS CONDICIONAIS */}

        {mostrarDadosRequerente && (
          <div className="col-span-full bg-gray-50 p-4 rounded border border-gray-200 mt-2">
            <h4 className="font-semibold mb-4 text-[#2c3e50]">
              Dados do Requerente
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {/* Nome */}
              <div>
                <label className="block font-semibold mb-1">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("req_nome")}
                  className={`w-full border-2 rounded p-2 ${
                    errors.req_nome ? "border-red-500" : "border-gray-400"
                  }`}
                  placeholder="Nome completo do requerente"
                />

                {errors.req_nome && (
                  <p className="text-red-500 text-sm">
                    {errors.req_nome.message as string}
                  </p>
                )}
              </div>

              {/* CPF */}
              <div>
                <label className="block font-semibold mb-1">
                  CPF <span className="text-red-500">*</span>
                </label>

                <input
                  {...register("req_cpf")}
                  placeholder="000.000.000-00"
                  onChange={(e) =>
                    setValue("req_cpf", formater.cpfCnpj(e.target.value), {
                      shouldValidate: true,
                    })
                  }
                  className={`w-full border-2 rounded p-2 ${
                    errors.req_cpf ? "border-red-500" : "border-gray-400"
                  }`}
                />

                {errors.req_cpf && (
                  <p className="text-red-500 text-sm">
                    {errors.req_cpf.message as string}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold mb-1">
                  E-mail <span className="text-red-500">*</span>
                </label>

                <input
                  {...register("req_email")}
                  type="email"
                  placeholder="email@exemplo.com"
                  className={`w-full border-2 rounded p-2 ${
                    errors.req_email ? "border-red-500" : "border-gray-400"
                  }`}
                />

                {errors.req_email && (
                  <p className="text-red-500 text-sm">
                    {errors.req_email.message as string}
                  </p>
                )}
              </div>

              {/* Telefone */}
              <div>
                <label className="block font-semibold mb-1">
                  Telefone/WhatsApp <span className="text-red-500">*</span>
                </label>

                <input
                  {...register("req_telefone")}
                  placeholder="(11) 99999-9999"
                  className={`w-full border-2 rounded p-2 ${
                    errors.req_telefone ? "border-red-500" : "border-gray-400"
                  }`}
                  onChange={(e) =>
                    setValue(
                      "req_telefone",
                      formater.telefone(e.target.value),
                      { shouldValidate: true },
                    )
                  }
                />

                {errors.req_telefone && (
                  <p className="text-red-500 text-sm">
                    {errors.req_telefone.message as string}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
