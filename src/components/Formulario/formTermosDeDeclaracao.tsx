"use client";

import { useFormContext } from "react-hook-form";

export default function FormTermosDeDeclaracao() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const termos = [
    {
      id: "autorizacao_transacao",
      titulo: "AUTORIZAÇÃO PARA TRANSAÇÃO",
      texto:
        "AUTORIZO a Secretaria Municipal de Economia a realizar a transação de ofício dos créditos a serem restituídos com débitos vencidos ou vincendos de minha responsabilidade, até o limite em que se compensarem.",
    },
    {
      id: "termo_de_responsabilidade",
      titulo: "TERMO DE RESPONSABILIDADE",
      texto:
        "Declaro estar ciente de que, em caso de ausência de qualquer documentação, esta deverá ser saneada no prazo de até 72 (setenta e duas) horas, contados a partir da protocolização, sob pena de arquivamento do pleito sem análise de mérito.",
    },
    {
      id: "declaracao_de_veracidade",
      titulo: "DECLARAÇÃO DE VERACIDADE",
      texto:
        "Declaro, sob as penas da lei, que as informações e documentos apresentados são verdadeiros e autênticos.",
    },
  ];

  return (
    <section className="form-section p-5 bg-[#FAFAFA] border border-gray-300 rounded mt-10 mb-10">
      <h3 className="text-[#2c3e50] font-semibold text-lg border-b-2 border-[#3498db] pb-2 mb-6">
        7. Termos e Declarações
      </h3>

      <div className="flex flex-col gap-6">
        {termos.map((termo) => (
          <div
            key={termo.id}
            className={`bg-white p-4 rounded border border-gray-200 shadow-sm ${errors[termo.id] ? "border-red-500" : "border-gray-300r"}`}
          >
            <label
              htmlFor={termo.id}
              className="flex items-start gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                id={termo.id}
                {...register(termo.id)}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-[#70B643] focus:ring-[#70B643]"
              />
              <div className="text-sm text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-800">
                  {termo.titulo}:{" "}
                </span>
                {termo.texto} <span className="text-red-500">*</span>
              </div>
            </label>

            {errors[termo.id] && (
              <p className="text-red-500 text-xs mt-2 ml-8">
                {String(errors[termo.id]?.message)}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
