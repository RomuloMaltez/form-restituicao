import z from "zod";

export const motivacaoSchema = z
  .object({
    motivo_principal: z.string(),

    descicao_da_motivacao: z
      .string()
      .min(10, "Descreva pelo menos 10 caracteres"),

    imovel_correto: z.string().optional(),
    imovel_incorreto: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.motivo_principal ===
      "Pagamento referente a imóvel incorreto (IPTU/TRSD)"
    ) {
      if (!data.imovel_correto || data.imovel_correto.length < 5) {
        ctx.addIssue({
          path: ["imovel_correto"],
          code: "custom",
          message: "Informe a inscrição correta",
        });
      }

      if (!data.imovel_incorreto || data.imovel_incorreto.length < 5) {
        ctx.addIssue({
          path: ["imovel_incorreto"],
          code: "custom",
          message: "Informe a inscrição incorreta",
        });
      }
    }
  });
