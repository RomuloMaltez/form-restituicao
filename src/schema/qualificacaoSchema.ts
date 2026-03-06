import { z } from "zod";

export const qualificacaoSchema = z.object({
  qualificacao: z
    .string()
    .refine(
      (value) =>
        [
          "O próprio contribuinte",
          "Procurador legalmente habilitado",
          "Detentor de direito sucessório",
          "Substituto tributário",
          "Órgão público",
        ].includes(value),
      {
        message: "Qualificação inválida",
      },
    ),
});
