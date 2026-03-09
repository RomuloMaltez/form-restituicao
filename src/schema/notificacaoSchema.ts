import z from "zod";

export const notificacaoSchema = z.object({
  tipo_de_notificacao: z
    .array(z.string())
    .min(1, "* Selecione pelo menos um meio de notificação."),
});
