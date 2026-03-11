import { z } from "zod";

export const qualificacaoSchema = z
  .object({
    qualificacao: z.string(),

    req_nome: z.string().optional(),
    req_cpf: z.string().optional(),
    req_email: z.string().optional(),
    req_telefone: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.qualificacao !== "O próprio contribuinte") {
      if (!data.req_nome || data.req_nome.length < 4) {
        ctx.addIssue({
          path: ["req_nome"],
          code: "custom",
          message: "Nome obrigatório",
        });
      }

      if (!data.req_cpf || data.req_cpf.replace(/\D/g, "").length !== 11) {
        ctx.addIssue({
          path: ["req_cpf"],
          code: "custom",
          message: "CPF inválido",
        });
      }

      if (!data.req_email) {
        ctx.addIssue({
          path: ["req_email"],
          code: "custom",
          message: "E-mail obrigatório",
        });
      }

      if (
        !data.req_telefone ||
        ![10, 11].includes(data.req_telefone.replace(/\D/g, "").length)
      ) {
        ctx.addIssue({
          path: ["req_telefone"],
          code: "custom",
          message: "Telefone inválido",
        });
      }
    }
  });
