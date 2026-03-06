import { z } from "zod";
import { identidadeSchema } from "./identidadeSchema";
import { qualificacaoSchema } from "./qualificacaoSchema";
import { detalheSchema } from "./detalheSchema";

export const schema = identidadeSchema
  .merge(qualificacaoSchema)
  .merge(detalheSchema);

export type FormData = z.infer<typeof schema>;
