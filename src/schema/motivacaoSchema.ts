import z from "zod";

export const motivacaoSchema = z.object({
  motivo_principal: z
    .string()
    .refine(
      (value) =>
        [
          "Pagamento em duplicidade",
          "Erro na identificação do sujeito passivo",
          "Erro na alíquota, base de cálculo ou apuração do valor",
          "Pagamento referente a imóvel incorreto (IPTU/TRSD)",
          "Decisão administrativa/judicial",
        ].includes(value),
      {
        message: "Selecione um motivo principal!",
      },
    ),
  descicao_da_motivacao: z
    .string()
    .min(10, "Descreva pelo menos 10 caracteres"),
});
