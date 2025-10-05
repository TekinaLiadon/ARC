# Archetype Roleplay Constructor

## Заметки для поднятия дев сервера и вообще

### Node
Нукст требователен к версии ноды. Можно применить ноду нужной проекту версии командой. 
```bash
nvm use
```

### CORS
Чтобы небыло корсовых ошибок можно запустить хром в незащищенном режиме. 
На маке делается этой командой:
```bash
open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/Chrome dev session" --disable-web-security
```
Вообще вот полезная [ссылка](https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome) 
о том как вырубить корс в браузере, но можно, например, просто hosts отредачить и не парится.

### Чистим кэши
После установки зависимостей можно быстро пересобирать девсервер командой
```bash
nvm use && nuxt cleanup && nuxt prepare && yarn dev 
```
Вебшторм закинул вообще свои приколы в репозиторий и должна быть доступна команда fresh-restart в Run/Debug
которая делает именно это + прерывает процессы в терминале (яндексмузыка попадает под раздачу, лол)

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
