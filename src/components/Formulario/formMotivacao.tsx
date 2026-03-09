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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div className="col-span-full bg-gray-50 p-3 rounded border border-gray-200 mb-2">
          <p className="font-semibold text-sm mb-2">
            Selecione o motivo principal :{" "}
            <span className="text-red-500">*</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-5">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Pagamento em duplicidade"
                {...register("motivo_principal")}
                defaultChecked
              />{" "}
              Pagamento em duplicidade
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Erro na identificação do sujeito passivo"
                {...register("motivo_principal")}
              />{" "}
              Erro na identificação do sujeito passivo
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Erro na alíquota, base de cálculo ou apuração do valor"
                {...register("motivo_principal")}
              />{" "}
              Erro na alíquota, base de cálculo ou apuração do valor
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Pagamento referente a imóvel incorreto (IPTU/TRSD)"
                {...register("motivo_principal")}
              />{" "}
              Pagamento referente a imóvel incorreto (IPTU/TRSD)
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Decisão administrativa/judicial"
                {...register("motivo_principal")}
              />{" "}
              Decisão administrativa/judicial
            </label>
          </div>

          <label className="block font-semibold mb-1">
            Descrição Detalhada da Motivação{" "}
            <span className="text-red-500">*</span>
          </label>

          <textarea
            {...register("descicao_da_motivacao")}
            rows={5}
            className={`w-full border-2 rounded p-3 resize-none ${
              errors.descicao_da_motivacao
                ? "border-red-500"
                : "border-gray-400"
            }`}
            placeholder="Digite aqui informações adicionais que possam auxiliar na análise..."
          />

          {errors.descicao_da_motivacao && (
            <p className="text-red-500 text-sm mt-1">
              {errors.descicao_da_motivacao.message as string}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
