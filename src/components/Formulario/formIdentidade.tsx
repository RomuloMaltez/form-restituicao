"use client";

import formater from "@/utils/formater";
import { useFormContext } from "react-hook-form";

export default function FormIdentidade() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const tipoPessoa = watch("tipo_pessoa");
  const isPessoaFisica = tipoPessoa !== "Pessoa Jurídica";
  const documento = tipoPessoa === "Pessoa Física" ? "cpf" : "cnpj";

  return (
    <section className="form-section p-5 bg-[#FAFAFA] border border-gray-300 rounded">
      {/* Título Padronizado */}
      <h3 className="text-[#2c3e50] font-semibold text-lg border-b-2 border-[#3498db] pb-2 mb-6">
        1. Identificação do Sujeito Passivo/Requerente
      </h3>

      {/* Grid de 2 Colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {/* Tipo de Pessoa - Ocupa a linha toda para não quebrar o alinhamento dos campos abaixo */}
        <div className="col-span-full bg-gray-50 p-3 rounded border border-gray-200 mb-2">
          <p className="font-semibold text-sm mb-2">
            Tipo de Pessoa <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Pessoa Física"
                {...register("tipo_pessoa")}
                defaultChecked
              />{" "}
              Pessoa Física
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Pessoa Jurídica"
                {...register("tipo_pessoa")}
              />{" "}
              Pessoa Jurídica
            </label>
          </div>
        </div>

        {/* Nome / Razão Social */}
        <div>
          <label className="block font-semibold mb-1">
            Nome/Razão Social <span className="text-red-500">*</span>
          </label>
          <input
            {...register("nome")}
            className={`w-full border-2 rounded p-2 ${errors.nome ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.nome && (
            <p className="text-red-500 text-sm">
              {errors.nome.message as string}
            </p>
          )}
        </div>

        {/* CPF / CNPJ */}
        <div>
          <label className="block font-semibold mb-1">
            {isPessoaFisica ? "CPF" : "CNPJ"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            {...register("cpfCnpj")}
            onChange={(e) =>
              setValue(
                "cpfCnpj",
                formater.cpfOrCnpj(e.target.value, documento),
                {
                  shouldValidate: true,
                },
              )
            }
            className={`w-full border-2 rounded p-2 ${errors.cpfCnpj ? "border-red-500" : "border-gray-400"}`}
            placeholder={
              isPessoaFisica ? "000.000.000-00" : "00.000.000/0000-00"
            }
          />
          {errors.cpfCnpj && (
            <p className="text-red-500 text-sm">
              {errors.cpfCnpj.message as string}
            </p>
          )}
        </div>

        {/* CEP */}
        <div>
          <label className="block font-semibold mb-1">
            CEP <span className="text-red-500">*</span>
          </label>
          <input
            {...register("cep")}
            onChange={(e) =>
              setValue("cep", formater.cep(e.target.value), {
                shouldValidate: true,
              })
            }
            className={`w-full border-2 rounded p-2 ${errors.cep ? "border-red-500" : "border-gray-400"}`}
            placeholder="00000-000"
          />
          {errors.cep && (
            <p className="text-red-500 text-sm">
              {errors.cep.message as string}
            </p>
          )}
        </div>

        {/* Logradouro */}
        <div>
          <label className="block font-semibold mb-1">
            Logradouro <span className="text-red-500">*</span>
          </label>
          <input
            {...register("logradouro")}
            className={`w-full border-2 rounded p-2 ${errors.logradouro ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.logradouro && (
            <p className="text-red-500 text-sm">
              {errors.logradouro.message as string}
            </p>
          )}
        </div>

        {/* Número */}
        <div>
          <label className="block font-semibold mb-1">
            Nº <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            {...register("numero")}
            className={`w-full border-2 rounded p-2 ${errors.numero ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.numero && (
            <p className="text-red-500 text-sm">
              {errors.numero.message as string}
            </p>
          )}
        </div>

        {/* Complemento */}
        <div>
          <label className="block font-semibold mb-1">Complemento</label>
          <input
            {...register("complemento")}
            className="w-full border-2 rounded p-2 border-gray-400"
          />
        </div>

        {/* Bairro */}
        <div>
          <label className="block font-semibold mb-1">
            Bairro <span className="text-red-500">*</span>
          </label>
          <input
            {...register("bairro")}
            className={`w-full border-2 rounded p-2 ${errors.bairro ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.bairro && (
            <p className="text-red-500 text-sm">
              {errors.bairro.message as string}
            </p>
          )}
        </div>

        {/* Cidade */}
        <div>
          <label className="block font-semibold mb-1">
            Cidade <span className="text-red-500">*</span>
          </label>
          <input
            {...register("cidade")}
            className={`w-full border-2 rounded p-2 ${errors.cidade ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.cidade && (
            <p className="text-red-500 text-sm">
              {errors.cidade.message as string}
            </p>
          )}
        </div>

        {/* UF */}
        <div>
          <label className="block font-semibold mb-1">
            Estado (UF) <span className="text-red-500">*</span>
          </label>
          <input
            {...register("estado")}
            onChange={(element) => {
              setValue("estado", formater.estado(element.target.value), {
                shouldValidate: true,
              });
            }}
            maxLength={2}
            className={`w-full border-2 rounded p-2 uppercase ${errors.estado ? "border-red-500" : "border-gray-400"}`}
            placeholder="RO"
          />
          {errors.estado && (
            <p className="text-red-500 text-sm">
              {errors.estado.message as string}
            </p>
          )}
        </div>

        {/* E-mail */}
        <div>
          <label className="block font-semibold mb-1">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className={`w-full border-2 rounded p-2 ${errors.email ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message as string}
            </p>
          )}
        </div>

        {/* Telefone - OCUPA A LINHA TODA (Final) */}
        <div className="col-span-full">
          <label className="block font-semibold mb-1">
            Telefone/Celular <span className="text-red-500">*</span>
          </label>
          <input
            {...register("telefone")}
            className={`w-full border-2 rounded p-2 ${errors.telefone ? "border-red-500" : "border-gray-400"}`}
            onChange={(e) =>
              setValue("telefone", formater.telefone(e.target.value), {
                shouldValidate: true,
              })
            }
            placeholder="(00) 00000-0000"
          />
          {errors.telefone && (
            <p className="text-red-500 text-sm">
              {errors.telefone.message as string}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
