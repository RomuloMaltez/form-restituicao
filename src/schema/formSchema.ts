import { z } from "zod";
import { identidadeSchema } from "./identidadeSchema";
import { qualificacaoSchema } from "./qualificacaoSchema";
import { detalheSchema } from "./detalheSchema";
import { motivacaoSchema } from "./motivacaoSchema";
import { dados } from "./dadosSchema";
import { notificacaoSchema } from "./notificacaoSchema";

export const schema = z.object({
  ...identidadeSchema.shape,
  ...qualificacaoSchema.shape,
  ...detalheSchema.shape,
  ...motivacaoSchema.shape,
  ...dados.shape,
  ...notificacaoSchema.shape,
});

export type FormData = z.infer<typeof schema>;
