import { z } from "zod";
import { identidadeSchema } from "./identidadeSchema";
import { qualificacaoSchema } from "./qualificacaoSchema";
import { detalheSchema } from "./detalheSchema";
import { motivacaoSchema } from "./motivacaoSchema";
import { dados } from "./dadosSchema";
import { notificacaoSchema } from "./notificacaoSchema";
import { termos_declaracao } from "./termosDeclaracao";

export const schema = identidadeSchema
  .and(qualificacaoSchema)
  .and(detalheSchema)
  .and(motivacaoSchema)
  .and(dados)
  .and(notificacaoSchema)
  .and(termos_declaracao);

export type FormData = z.infer<typeof schema>;
