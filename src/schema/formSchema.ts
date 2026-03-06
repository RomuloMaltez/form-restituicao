import { z } from "zod";
import { identidadeSchema } from "./identidadeSchema";
import { qualificacaoSchema } from "./qualificacaoSchema";
import { detalheSchema } from "./detalheSchema";
import { motivacaoSchema } from "./motivacaoSchema";

export const schema = z.object({
  ...identidadeSchema.shape,
  ...qualificacaoSchema.shape,
  ...detalheSchema.shape,
  ...motivacaoSchema.shape,
});

export type FormData = z.infer<typeof schema>;
