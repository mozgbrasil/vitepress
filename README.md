# vitepress

<https://vite.dev/guide/ssr>

## Development

```bash

npm create vitepress@latest -- --help

cd vitepress-project
npm install
pnpm install
npm run dev

```

## Publish

```bash

rm -fr ./docs/.vitepress/cache/ ./docs/.vitepress/dist/

npm run build

# meld /home/marcio/dados/vitepress/docs/.vitepress/dist /home/marcio/dados/mozgbrasil.github.io/docs

rm -fr /home/marcio/dados/mozgbrasil.github.io/docs

cp -r /home/marcio/dados/vitepress/docs/.vitepress/dist /home/marcio/dados/mozgbrasil.github.io/docs

echo "mozg.com.br" >> /home/marcio/dados/mozgbrasil.github.io/docs/CNAME

```
