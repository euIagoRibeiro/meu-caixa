# Meu Caixa

Aplicativo mobile de controle financeiro pessoal, criado como projeto de estudo com foco em simplicidade, organização e evolução gradual.

## Ideia do projeto

O objetivo é construir um app para registrar manualmente a vida financeira do dia a dia, começando com armazenamento local e sem integrações bancárias automáticas.

No futuro, o app poderá apoiar:

- despesas diárias;
- receitas;
- reservas e dinheiro guardado;
- dinheiro mantido para outras pessoas;
- empréstimos informais;
- dívidas de cartão de crédito;
- compras parceladas;
- pagamentos pagos e pendentes;
- acompanhamento manual de investimentos;
- categorias;
- relatórios e dashboards.

## Decisões iniciais

Stack inicial:

- React Native;
- Expo;
- TypeScript.

Essas tecnologias foram escolhidas porque permitem criar um app mobile real com menos configuração nativa, mantendo uma base moderna e adequada para Android e iOS.

## Direção técnica

O projeto começará simples:

- entrada manual de dados;
- armazenamento local primeiro;
- sem autenticação no início;
- sem sincronização automática no início.

A arquitetura deve permitir evolução futura para:

- SQLite local;
- Supabase;
- autenticação;
- backup em nuvem;
- sincronização entre dispositivos.

## Como rodar

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm start
```

Depois, use o aplicativo Expo Go no celular ou um emulador para abrir o app.
