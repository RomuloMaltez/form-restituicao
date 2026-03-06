"use client";

import { useFormContext } from "react-hook-form";

export default function FormQualificacao() {
  const { register } = useFormContext();

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
              />{" "}
              O próprio contribuinte
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Procurador legalmente habilitado"
                {...register("qualificacao")}
              />{" "}
              Procurador legalmente habilitado
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Detentor de direito sucessório"
                {...register("qualificacao")}
              />{" "}
              Detentor de direito sucessório
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Substituto tributário"
                {...register("qualificacao")}
              />{" "}
              Substituto tributário
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Órgão público"
                {...register("qualificacao")}
              />{" "}
              Órgão público
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
