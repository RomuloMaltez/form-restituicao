"use client";
import { useFormContext } from "react-hook-form";

export default function FormMotivacao() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="form-section p-5 bg-[#FAFAFA] border border-gray-300 rounded mt-10 mb-10">
      <h3 className="text-[#2c3e50] font-semibold text-lg border-b-2 border-[#3498db] pb-2 mb-6">
        4. Motivação da Restituição
      </h3>

      <p className="font-semibold text-sm mb-4 text-gray-700">
        Selecione o motivo principal : <span className="text-red-500">*</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <label className="flex items-start gap-2 text-sm cursor-pointer p-2 hover:bg-gray-100 rounded transition">
          <input
            type="radio"
            className="mt-1"
            value="Pagamento em duplicidade"
            {...register("motivo_principal")}
          />
          <span>Pagamento em duplicidade</span>
        </label>

        <label className="flex items-start gap-2 text-sm cursor-pointer p-2 hover:bg-gray-100 rounded transition">
          <input
            type="radio"
            className="mt-1"
            value="Erro na identificação do sujeito passivo"
            {...register("motivo_principal")}
          />
          <span>Erro na identificação do sujeito passivo</span>
        </label>

        <label className="flex items-start gap-2 text-sm cursor-pointer p-2 hover:bg-gray-100 rounded transition">
          <input
            type="radio"
            className="mt-1"
            value="Erro na alíquota, base de cálculo ou apuração do valor"
            {...register("motivo_principal")}
          />
          <span>Erro na alíquota, base de cálculo ou apuração do valor</span>
        </label>

        <label className="flex items-start gap-2 text-sm cursor-pointer p-2 hover:bg-gray-100 rounded transition">
          <input
            type="radio"
            className="mt-1"
            value="Pagamento referente a imóvel incorreto (IPTU/TRSD)"
            {...register("motivo_principal")}
          />
          <span>Pagamento referente a imóvel incorreto (IPTU/TRSD)</span>
        </label>

        <label className="flex items-start gap-2 text-sm cursor-pointer p-2 hover:bg-gray-100 rounded transition">
          <input
            type="radio"
            className="mt-1"
            value="Decisão administrativa/judicial"
            {...register("motivo_principal")}
          />
          <span>Decisão administrativa/judicial</span>
        </label>
      </div>

      <div className="w-full mt-4">
        <label className="block font-semibold mb-2 text-gray-700">
          Descrição Detalhada da Motivação{" "}
          <span className="text-red-500">*</span>
        </label>

        <textarea
          {...register("descicao_da_motivacao")}
          rows={5}
          className={`w-full border-2 rounded p-3 resize-none ${
            errors.descicao_da_motivacao ? "border-red-500" : "border-gray-400"
          }`}
          placeholder="Digite aqui informações adicionais que possam auxiliar na análise..."
        />

        {errors.descicao_da_motivacao && (
          <p className="text-red-500 text-sm mt-1">
            {errors.descicao_da_motivacao.message as string}
          </p>
        )}
      </div>
    </section>
  );
}
