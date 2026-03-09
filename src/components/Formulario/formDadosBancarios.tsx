"use client";
import { useFormContext } from "react-hook-form";
import formater from "@/utils/formater";

export default function FormDadosBancarios() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  return (
    <section className="form-section p-5 bg-[#FAFAFA] border border-gray-300 rounded mt-10 mb-10">
      <h3 className="text-[#2c3e50] font-semibold text-lg border-b-2 border-[#3498db] pb-2 mb-6">
        5. Dados Bancários para Restituição
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div className="col-span-full bg-gray-50 p-3 rounded border border-gray-200 mb-2">
          <p className="font-semibold text-sm mb-2">
            Titular da Conta : <span className="text-red-500">*</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-5">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="O próprio contribuinte/requerente"
                {...register("titular_da_conta")}
                defaultChecked
              />{" "}
              O próprio contribuinte/requerente
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Terceiro"
                {...register("titular_da_conta")}
              />{" "}
              Terceiro
            </label>
          </div>

          <label className="block font-semibold mb-1">
            Descrição Detalhada da Motivação{" "}
            <span className="text-red-500">*</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div>
          <label className="block font-semibold mb-1">
            Nome Completo do Titular <span className="text-red-500">*</span>
          </label>
          <input
            {...register("nome_titular")}
            className={`w-full border-2 rounded p-2 ${errors.nome_titular ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.nome_titular && (
            <p className="text-red-500 text-sm">
              {errors.nome_titular.message as string}
            </p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">
            CPF/CNPJ do Titular <span className="text-red-500">*</span>
          </label>
          <input
            {...register("cpfCnpj_do_titular")}
            onChange={(element) =>
              setValue(
                "cpfCnpj_do_titular",
                formater.cpfCnpj(element.target.value),
                {
                  shouldValidate: true,
                },
              )
            }
            className={`w-full border-2 rounded p-2 ${errors.cpfCnpj_do_titular ? "border-red-500" : "border-gray-400"}`}
            placeholder="000.000.000-00 - 00.000.000/0000-00"
          />
          {errors.cpfCnpj_do_titular && (
            <p className="text-red-500 text-sm">
              {errors.cpfCnpj_do_titular.message as string}
            </p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Banco <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="EX: Banco do Brasil, Caixa, itáu..."
            {...register("banco")}
            className={`w-full border-2 rounded p-2 ${errors.banco ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.banco && (
            <p className="text-red-500 text-sm">
              {errors.banco.message as string}
            </p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Agẽncia <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="0000/0000-0"
            {...register("agencia")}
            onChange={(element) => {
              setValue("agencia", formater.agencia(element.target.value), {
                shouldValidate: true,
              });
            }}
            className={`w-full border-2 rounded p-2 ${errors.banco ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.agencia && (
            <p className="text-red-500 text-sm">
              {errors.agencia.message as string}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="col-span-full bg-gray-50 p-3 rounded border border-gray-200 mb-2">
            <p className="font-semibold text-sm mb-2">
              Tipo da Conta : <span className="text-red-500">*</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-5">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  value="Conta Corrente"
                  {...register("tipo_de_conta")}
                  defaultChecked
                />
                Conta Corrente
              </label>

              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  value="Conta Poupança"
                  {...register("tipo_de_conta")}
                />
                Conta Poupança
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
