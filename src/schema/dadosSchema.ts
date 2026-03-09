import z from "zod";

export const dados = z.object({
  titular_da_conta: z
    .string()
    .refine(
      (value) =>
        ["O próprio contribuinte/requerente", "Terceiro"].includes(value),
      {
        message: "Titular inválido",
      },
    ),

  nome_titular: z.string().min(4, "Nome completo do titular é obrigatório!"),
  cpfCnpj_do_titular: z.string().refine((value) => {
    const number = value.replace(/\D/g, "");

    return number.length === 11 || number.length === 14;
  }, "Digite um CPF ou CNPJ completo"),
  banco: z.string().min(1, "Banco é obrigatório!"),
  agencia: z.string().regex(/^\d{4}-?\d?$/, "Agência inválida"),
  tipo_de_conta: z
    .string()
    .refine((value) => ["Conta Corrente", "Conta Poupança"].includes(value), {
      message: "Tipo de conta inválido",
    }),
});
