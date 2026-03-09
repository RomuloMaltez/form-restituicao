"use client";

import { useFormContext } from "react-hook-form";

export default function FormNotificacao() {
  const { register } = useFormContext();

  return (
    <section className="form-section p-5 bg-[#FAFAFA] border border-gray-300 rounded">
      <h3 className="text-[#2c3e50] font-semibold text-lg border-b-2 border-[#3498db] pb-2 mb-6">
        6. Forma de Notificação
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div className="col-span-full bg-gray-50 p-3 rounded border border-gray-200 mb-2">
          <p className="font-semibold text-sm mb-2">
            Tipo de Pessoa <span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-2 gap-y-5">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                value="Domicílio Tributário Eletrônico (DT-e)"
                {...register("tipo_de_notificacao")}
                defaultChecked
              />{" "}
              Domicílio Tributário Eletrônico (DT-e)
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                value="Correio eletrônico (e-mail)"
                {...register("tipo_de_notificacao")}
              />{" "}
              Correio eletrônico (e-mail)
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                value="Aplicativo de mensagens (WhatsApp)"
                {...register("tipo_de_notificacao")}
              />{" "}
              Aplicativo de mensagens (WhatsApp)
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                value="Envio por via postal com AR"
                {...register("tipo_de_notificacao")}
              />{" "}
              Envio por via postal com AR
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
