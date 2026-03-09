import z from "zod";

export const termos_declaracao = z.object({
  autorizacao_transacao: z.boolean().refine((value) => value === true, {
    message: "Você precisa autorizar a transação para continuar.",
  }),

  termo_de_responsabilidade: z.boolean().refine((value) => value === true, {
    message: "Você aceitar o termo de responsabilidade para continuar.",
  }),

  declaracao_de_veracidade: z.boolean().refine((value) => value === true, {
    message: "Você deve declarar a veracidade das informações.",
  }),
});
