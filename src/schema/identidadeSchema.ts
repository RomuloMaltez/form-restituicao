import z from "zod";

export const identidadeSchema = z
  .object({
    tipo_pessoa: z
      .string()
      .min(1, "Selecione o tipo de pessoa")
      .refine((value) => ["Pessoa Física", "Pessoa Jurídica"].includes(value), {
        message: "Tipo de pessoa inválido",
      }),
    nome: z.string().min(4, "Nome é obrigatório!"),
    cpfCnpj: z.string().min(1, "O documento é obrigatório"),
    cep: z.string().min(9, "CEP inválido"),
    logradouro: z.string().min(1, "Logradouro é obrigatório"),
    numero: z.string().min(1, "Número obrigatório"),
    complemento: z.string().optional(),
    bairro: z.string().min(2, "Bairro obrigatório"),
    cidade: z.string().min(2, "Cidade obrigatório"),
    estado: z
      .string()
      .min(2, "Estado obrigatório")
      .max(2, "Utilize apenas a sigla"),
    email: z.string().email("E-mail inválido"),
    telefone: z.string().refine((value) => {
      const numbers = value.replace(/\D/g, "");

      return numbers.length === 10 || numbers.length === 11;
    }, "Digite corretamente o telefone"),
  })
  .refine(
    (data) => {
      const digits = data.cpfCnpj.replace(/\D/g, "");
      if (data.tipo_pessoa === "Pessoa Física") {
        return digits.length === 11;
      }
      if (data.tipo_pessoa === "Pessoa Jurídica") {
        return digits.length === 14;
      }
      return false;
    },
    {
      message: "Documento incompleto para o tipo selecionado",
      path: ["cpfCnpj"], // O erro será atribuído ao campo cpfCnpj
    },
  );
