import { z } from "zod";

export const detalheSchema = z.object({
  tributo_objeto_da_restituição: z
    .string()
    .refine(
      (value) =>
        [
          "IPTU - Imposto Predial e Territorial Urbano",
          "ITBI - Imposto sobre Transmissão de Bens Imóveis",
          "TRSD - Taxa de Coleta de Resíduo (Lixo)",
          "ISS - Imposto Sobre Serviços",
          "Taxas Municipais",
          "Outras Rendas",
        ].includes(value),
      {
        message: "Motivo inválido",
      },
    ),

  num_dan: z.string().min(1, "Número do DAM/Guia é obrigatório!"),

  valor_pago: z
    .string()
    .regex(
      /^(\d{1,3}(\.\d{3})*|\d+),\d{2}$/,
      "Informe um valor válido (ex: 1.234,56)",
    ),

  data_pagamento: z
    .string()
    .regex(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Informe uma data válida (ex: 25/12/2025)",
    ),
});
