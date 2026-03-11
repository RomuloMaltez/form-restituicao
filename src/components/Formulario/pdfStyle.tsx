"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { FormData } from "@/schema/formSchema";

// Design Tokens extraídos de pdf-styles.js
const COLORS = {
  primaryBlue: "#1e3a5f",
  accentGreen: "#70b643",
  textDark: "#374151",
  textMedium: "#6b7280",
  borderLight: "#e5e7eb",
  backgroundSection: "#f5f5f5",
  white: "#ffffff",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingHorizontal: 40,
    paddingBottom: 80,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: COLORS.textDark,
  },
  // Cabeçalho institucional [cite: 7]
  headerInstitucional: {
    backgroundColor: COLORS.backgroundSection,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.accentGreen,
    paddingVertical: 12,
    marginBottom: 15,
    textAlign: "center",
  },
  headerTitle: { fontSize: 12, fontWeight: "bold", color: COLORS.primaryBlue },
  headerSubtitle: { fontSize: 9, color: COLORS.primaryBlue, marginTop: 2 },

  // Blocos de Seção
  sectionContainer: { marginBottom: 12 },
  sectionHeader: {
    backgroundColor: COLORS.primaryBlue,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: COLORS.white,
  },
  sectionBody: {
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    borderTopWidth: 0,
    padding: 10,
  },

  // Layout de Grid para melhor disposição
  row: {
    flexDirection: "row",
    marginBottom: 8,
    gap: 10,
  },
  fieldGroup: {
    flexDirection: "column",
  },
  label: {
    fontSize: 7.5,
    fontWeight: "bold",
    color: COLORS.primaryBlue,
    marginBottom: 2,
    textTransform: "uppercase",
  },
  value: {
    fontSize: 9,
    color: COLORS.textDark,
    backgroundColor: "#fafafa", // Leve fundo para destacar o dado
    padding: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.borderLight,
  },

  // Rodapé
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.borderLight,
    paddingTop: 8,
  },
  footerTextRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  footerLabel: { fontSize: 7, color: COLORS.textMedium },
  footerCenter: {
    textAlign: "center",
    fontSize: 7,
    color: COLORS.textMedium,
    fontStyle: "italic",
  },
});

// Componente de Campo com largura flexível
const Field = ({
  label,
  value,
  width = "100%",
}: {
  label: string;
  value?: string;
  width?: string | number;
}) => (
  <View style={[styles.fieldGroup, { width }]}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value || "-"}</Text>
  </View>
);

export const PdfStyle = ({ data }: { data: FormData }) => {
  const dataGeracao = new Date().toLocaleDateString("pt-BR");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Cabeçalho [cite: 7] */}
        <View style={styles.headerInstitucional}>
          <Text style={styles.headerTitle}>
            PREFEITURA MUNICIPAL DE PORTO VELHO
          </Text>
          <Text style={styles.headerSubtitle}>
            SECRETARIA MUNICIPAL DE ECONOMIA
          </Text>
        </View>

        <Text
          style={{
            fontSize: 11,
            fontWeight: "bold",
            color: COLORS.accentGreen,
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          REQUERIMENTO DE RESTITUIÇÃO / COMPENSAÇÃO
        </Text>

        {/* 1. Identificação do Sujeito Passivo  */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              1. IDENTIFICAÇÃO DO SUJEITO PASSIVO / REQUERENTE
            </Text>
          </View>

          <View style={styles.sectionBody}>
            {/* Linha 1: Tipo e Documento */}
            <View style={styles.row}>
              <Field
                label="Tipo de Pessoa"
                value={data.tipo_pessoa}
                width="30%"
              />
              <Field label="CPF / CNPJ" value={data.cpfCnpj} width="70%" />
            </View>

            {/* Linha 2: Nome Completo */}
            <View style={styles.row}>
              <Field
                label="Nome / Razão Social"
                value={data.nome}
                width="100%"
              />
            </View>

            {/* Linha 3: Endereço Base */}
            <View style={styles.row}>
              <Field label="CEP" value={data.cep} width="20%" />
              <Field label="Logradouro" value={data.logradouro} width="60%" />
              <Field label="Nº" value={data.numero} width="20%" />
            </View>

            {/* Linha 4: Localização Detalhada */}
            <View style={styles.row}>
              <Field label="Bairro" value={data.bairro} width="40%" />
              <Field label="Cidade" value={data.cidade} width="40%" />
              <Field label="UF" value={data.estado} width="20%" />
            </View>

            {/* Linha 5: Contato e Complemento */}
            <View style={styles.row}>
              <Field label="E-mail" value={data.email} width="50%" />
              <Field label="Telefone" value={data.telefone} width="50%" />
            </View>

            {data.complemento && (
              <View style={styles.row}>
                <Field
                  label="Complemento"
                  value={data.complemento}
                  width="100%"
                />
              </View>
            )}
          </View>
        </View>

        {/* 2. Qualificação do Requerente */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              2. QUALIFICAÇÃO DO REQUERENTE
            </Text>
          </View>

          <View style={styles.sectionBody}>
            {/* Linha da Qualificação Principal */}
            <View style={styles.row}>
              <View style={[styles.fieldGroup, { width: "100%" }]}>
                <Text style={styles.label}>O REQUERENTE É:</Text>
                <Text
                  style={[
                    styles.value,
                    { color: COLORS.primaryBlue, fontWeight: "bold" },
                  ]}
                >
                  {data.qualificacao}
                </Text>
              </View>
            </View>

            {/* Renderização Condicional: Dados do Representante/Requerente */}
            {data.qualificacao !== "O próprio contribuinte" && (
              <View
                style={{
                  marginTop: 10,
                  paddingTop: 10,
                  borderTopWidth: 1,
                  borderTopColor: COLORS.borderLight,
                }}
              >
                <Text
                  style={[
                    styles.label,
                    { marginBottom: 8, color: COLORS.textMedium },
                  ]}
                >
                  DADOS DO REPRESENTANTE LEGAL / REQUERENTE:
                </Text>

                <View style={styles.row}>
                  <Field
                    label="Nome Completo"
                    value={data.req_nome}
                    width="70%"
                  />
                  <Field label="CPF" value={data.req_cpf} width="30%" />
                </View>

                <View style={styles.row}>
                  <Field label="E-mail" value={data.req_email} width="60%" />
                  <Field
                    label="Telefone / WhatsApp"
                    value={data.req_telefone}
                    width="40%"
                  />
                </View>
              </View>
            )}
          </View>
        </View>

        {/* 3. Detalhes do Crédito a ser Restituído */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              3. DETALHES DO CRÉDITO A SER RESTITUÍDO
            </Text>
          </View>

          <View style={styles.sectionBody}>
            {/* Linha do Tributo - Ocupa toda a largura por ser um texto longo */}
            <View style={styles.row}>
              <View style={[styles.fieldGroup, { width: "100%" }]}>
                <Text style={styles.label}>TRIBUTO OBJETO DA RESTITUIÇÃO</Text>
                <Text
                  style={[
                    styles.value,
                    { backgroundColor: "#f0f4f8", fontWeight: "bold" },
                  ]}
                >
                  {data.tributo_objeto_da_restituição}
                </Text>
              </View>
            </View>

            {/* Linha de Dados Financeiros e Identificação */}
            <View style={styles.row}>
              {/* Número do DAM/Guia */}
              <Field
                label="Nº DO DAM / GUIA"
                value={data.num_dan}
                width="40%"
              />

              {/* Data do Pagamento */}
              <Field
                label="DATA DO PAGAMENTO"
                value={data.data_pagamento}
                width="30%"
              />

              {/* Valor Pago - Com destaque para moeda */}
              <View style={[styles.fieldGroup, { width: "30%" }]}>
                <Text style={styles.label}>VALOR PAGO (R$)</Text>
                <Text
                  style={[
                    styles.value,
                    { color: "#27ae60", fontWeight: "bold" },
                  ]}
                >
                  {data.valor_pago}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* 4. Motivação da Restituição */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>4. MOTIVAÇÃO DA RESTITUIÇÃO</Text>
          </View>

          <View style={styles.sectionBody}>
            {/* Motivo Principal Selecionado */}
            <View style={styles.row}>
              <View style={[styles.fieldGroup, { width: "100%" }]}>
                <Text style={styles.label}>MOTIVO PRINCIPAL</Text>
                <Text
                  style={[
                    styles.value,
                    { color: COLORS.primaryBlue, fontWeight: "bold" },
                  ]}
                >
                  {data.motivo_principal}
                </Text>
              </View>
            </View>

            {/* Renderização Condicional: Dados dos Imóveis */}
            {data.motivo_principal ===
              "Pagamento referente a imóvel incorreto (IPTU/TRSD)" && (
              <View
                style={{
                  marginTop: 5,
                  marginBottom: 10,
                  padding: 8,
                  backgroundColor: "#f9fafb",
                  borderWidth: 1,
                  borderColor: COLORS.borderLight,
                  borderRadius: 2,
                }}
              >
                <Text
                  style={[
                    styles.label,
                    { marginBottom: 6, color: COLORS.textMedium },
                  ]}
                >
                  DETALHAMENTO DOS IMÓVEIS:
                </Text>
                <View style={styles.row}>
                  <Field
                    label="INSCRIÇÃO IMÓVEL CORRETO"
                    value={data.imovel_correto}
                    width="50%"
                  />
                  <Field
                    label="INSCRIÇÃO IMÓVEL INCORRETO"
                    value={data.imovel_incorreto}
                    width="50%"
                  />
                </View>
              </View>
            )}

            {/* Descrição Detalhada - Área de Texto */}
            <View style={{ marginTop: 5 }}>
              <Text style={styles.label}>DESCRIÇÃO DETALHADA DA MOTIVAÇÃO</Text>
              <View
                style={{
                  marginTop: 4,
                  padding: 8,
                  backgroundColor: "#fafafa",
                  borderWidth: 0.5,
                  borderColor: COLORS.borderLight,
                  minHeight: 60, // Garante um espaço visual mínimo mesmo para textos curtos
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                    color: COLORS.textDark,
                    lineHeight: 1.5,
                    textAlign: "justify",
                  }}
                >
                  {data.descicao_da_motivacao}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* 5. Dados Bancários para Restituição */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              5. DADOS BANCÁRIOS PARA RESTITUIÇÃO
            </Text>
          </View>

          <View style={styles.sectionBody}>
            {/* Linha 1: Titularidade e Tipo de Conta */}
            <View style={styles.row}>
              <Field
                label="TITULAR DA CONTA"
                value={data.titular_da_conta}
                width="60%"
              />
              <Field
                label="TIPO DA CONTA"
                value={data.tipo_de_conta}
                width="40%"
              />
            </View>

            {/* Linha 2: Dados Nominais do Titular */}
            <View style={styles.row}>
              <Field
                label="NOME COMPLETO DO TITULAR"
                value={data.nome_titular}
                width="65%"
              />
              <Field
                label="CPF / CNPJ DO TITULAR"
                value={data.cpfCnpj_do_titular}
                width="35%"
              />
            </View>

            {/* Linha 3: Dados da Instituição Financeira */}
            <View style={[styles.row, { marginBottom: 0 }]}>
              <Field label="BANCO" value={data.banco} width="65%" />
              <Field label="AGÊNCIA" value={data.agencia} width="35%" />
            </View>
          </View>
        </View>

        {/* 6. Forma de Notificação */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>6. FORMA DE NOTIFICAÇÃO</Text>
          </View>

          <View style={styles.sectionBody}>
            <Text style={[styles.label, { marginBottom: 6 }]}>
              MEIOS DE NOTIFICAÇÃO SELECIONADOS PELO REQUERENTE:
            </Text>

            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
              {data.tipo_de_notificacao.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#f9fafb", // Fundo levemente verde para destacar a seleção
                    padding: 5,
                    paddingHorizontal: 8,
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: COLORS.accentGreen,
                    marginBottom: 4,
                  }}
                >
                  {/* Símbolo de Checkbox Marcado */}
                  <Text
                    style={{
                      color: COLORS.accentGreen,
                      fontWeight: "bold",
                      marginRight: 6,
                      fontSize: 10,
                    }}
                  >
                    [X]
                  </Text>
                  <Text
                    style={{
                      fontSize: 8.5,
                      color: COLORS.textDark,
                      fontWeight: "bold",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </View>

            <Text
              style={{
                fontSize: 7,
                color: COLORS.textMedium,
                marginTop: 8,
                fontStyle: "italic",
              }}
            >
              * O requerente declara estar ciente de que as notificações
              enviadas pelos meios acima possuem validade jurídica para todos os
              fins.
            </Text>
          </View>
        </View>

        {/* 7. Termos e Declarações */}
        {/* Removemos o break e usamos wrap={false} para evitar o pulo desnecessário */}
        <View style={styles.sectionContainer} wrap={false}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>7. TERMOS E DECLARAÇÕES</Text>
          </View>

          <View style={styles.sectionBody}>
            <View style={{ gap: 6 }}>
              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text
                  style={{
                    fontSize: 9,
                    marginRight: 5,
                    color: COLORS.accentGreen,
                  }}
                >
                  [X]
                </Text>
                <Text style={{ fontSize: 8, textAlign: "justify", flex: 1 }}>
                  <Text style={{ fontWeight: "bold" }}>
                    AUTORIZAÇÃO PARA TRANSAÇÃO:{" "}
                  </Text>
                  AUTORIZO a Secretaria Municipal de Fazenda a realizar a
                  transação de ofício dos créditos a serem restituídos com
                  débitos vencidos ou vincendos de minha responsabilidade.
                </Text>
              </View>

              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text
                  style={{
                    fontSize: 9,
                    marginRight: 5,
                    color: COLORS.accentGreen,
                  }}
                >
                  [X]
                </Text>
                <Text style={{ fontSize: 8, textAlign: "justify", flex: 1 }}>
                  <Text style={{ fontWeight: "bold" }}>
                    TERMO DE RESPONSABILIDADE:{" "}
                  </Text>
                  Declaro estar ciente de que, em caso de ausência de qualquer
                  documentação, esta deverá ser saneada no prazo de até 72 horas
                  sob pena de arquivamento.
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 9,
                    marginRight: 5,
                    color: COLORS.accentGreen,
                  }}
                >
                  [X]
                </Text>
                <Text style={{ fontSize: 8, textAlign: "justify", flex: 1 }}>
                  <Text style={{ fontWeight: "bold" }}>
                    DECLARAÇÃO DE VERACIDADE:{" "}
                  </Text>
                  Declaro, sob as penas da lei, que as informações e documentos
                  apresentados são verdadeiros e autênticos.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bloco de Assinaturas agrupado para não separar da seção 7 */}
        <View style={{ marginTop: 50, marginBottom: 20 }} wrap={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 40,
            }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.textDark,
                  width: "100%",
                  marginBottom: 4,
                }}
              />
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: "bold",
                  color: COLORS.primaryBlue,
                }}
              >
                {data.qualificacao === "O próprio contribuinte"
                  ? data.nome
                  : data.req_nome}
              </Text>
              <Text style={{ fontSize: 7, color: COLORS.textMedium }}>
                Assinatura do Requerente
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 9, color: COLORS.textDark }}>
                Porto Velho - RO, {new Date().toLocaleDateString("pt-BR")}
              </Text>
            </View>
          </View>
        </View>

        {/* Rodapé institucional conforme Instrução Normativa [cite: 1, 2, 6] */}
        <View style={styles.footer} fixed>
          <View style={styles.footerTextRow}>
            <Text style={styles.footerLabel}>
              Anexo I – Requerimento de Uso de Sistema
            </Text>
            <Text
              style={styles.footerLabel}
              render={({ pageNumber, totalPages }) =>
                `Pág. ${pageNumber} / ${totalPages}`
              }
            />
          </View>
          <Text style={styles.footerCenter}>
            Instrução Normativa n.º 002/2024/GAB/SEMFAZ
          </Text>
          <Text style={styles.footerCenter}>
            Documento gerado eletronicamente em {dataGeracao}
          </Text>
        </View>
      </Page>
    </Document>
  );
};
