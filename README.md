# DDD (Domain-Driven Design)

Design dirigido à domínio;

## Domínio

- Domain Experts
    - Conversa
- Linguagem ubíqua

- Usuário
    - Cliente
    - Fornecedor
    - Atendente

- Agregados
- Value Objects
- Eventos de domínio
- Subdomínios (Bounded Contexts)
- Entidades
- Casos de uso

# Subdomínios

- Core: O que dá dinheiro
- Supporting: Dá suporte para o core funcionar
- Generic: Você precisa, mas não são tão importantes

## Exemplos

### Core
- Compra
- Catálogo
- Pagamento
- Entrega
- Faturamento

### Supporting
- Estoque

### Generic
- Notificação ao cliente
- Promoções
- Chat



# Comandos
npm init -y
npm i typescript @types/node -D
npx tsc --init


npm i vite-tsconfig-paths -D
