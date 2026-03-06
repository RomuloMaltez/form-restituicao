"use client";

import formater from "@/utils/formater";
import { useFormContext } from "react-hook-form";

export default function FormDetalhe() {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  return (
    <section className="form-section p-5 bg-[#FAFAFA] border border-gray-300 rounded mt-10 mb-10">
      <h3 className="text-[#2c3e50] font-semibold text-lg border-b-2 border-[#3498db] pb-2 mb-6">
        3. Detalhes do Crédito a ser Restituído
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div className="col-span-full bg-gray-50 p-3 rounded border border-gray-200 mb-2">
          <p className="font-semibold text-sm mb-2">
            Selecione o motivo principal :{" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="IPTU - Imposto Predial e Territorial Urbano"
                {...register("motivo_pricipal")}
                defaultChecked
              />{" "}
              IPTU - Imposto Predial e Territorial Urbano
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="ITBI - Imposto sobre Transmissão de Bens Imóveis"
                {...register("motivo_pricipal")}
              />{" "}
              ITBI - Imposto sobre Transmissão de Bens Imóveis
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="TRSD - Taxa de Coleta de Resíduo (Lixo)"
                {...register("motivo_pricipal")}
              />{" "}
              TRSD - Taxa de Coleta de Resíduo (Lixo)
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="ISS - Imposto Sobre Serviços"
                {...register("motivo_pricipal")}
              />{" "}
              ISS - Imposto Sobre Serviços
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Taxas Municipais"
                {...register("motivo_pricipal")}
              />{" "}
              Taxas Municipais
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Outras Rendas"
                {...register("motivo_pricipal")}
              />{" "}
              Outras Rendas
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div>
          <label className="block font-semibold mb-1">
            Número do DAM/Guia <span className="text-red-500">*</span>
          </label>
          <input
            {...register("num_dan")}
            type="number"
            placeholder="Ex: 123456789"
            className={`w-full border-2 rounded p-2 ${errors.num_dan ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.num_dan && (
            <p className="text-red-500 text-sm">
              {errors.num_dan.message as string}
            </p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Data do pagamento <span className="text-red-500">*</span>
          </label>

          <input
            type="date"
            {...register("data_pagamento", {
              setValueAs: (value) => formater.dataBR(value),
            })}
            className="w-full border-2 border-gray-400 rounded p-2"
          />

          {errors.data_pagamento && (
            <p className="text-red-500 text-sm">
              {errors.data_pagamento.message as string}
            </p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1 w-full">
            Valor Pago (R$) <span className="text-red-500">*</span>
          </label>
          <input
            {...register("valor_pago")}
            onChange={(element) => {
              setValue("valor_pago", formater.dinheiro(element.target.value), {
                shouldValidate: true,
              });
            }}
            type="text"
            inputMode="numeric"
            placeholder="1500.00"
            className="w-full border-2 border-gray-400 rounded p-2"
          />
          {errors.valor_pago && (
            <p className="text-red-500 text-sm">
              {errors.valor_pago.message as string}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
