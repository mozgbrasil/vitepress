# O que é Mozg?

Se trata de um projeto criado em Fevereiro de 2016 por <a href="https://mozg.com.br/jekyll/curriculum.pdf">Marcio dos Santos Amorim</a>

<style>

.container-grid {
  /* background-color:red; */
  display: grid; /* Define o container como um grid */
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Configura colunas responsivas */
  gap: 16px; /* Espaçamento entre os elementos */
  padding: 16px; /* Espaçamento interno do container */
}

.item-grid {
  background-color: #f0f0f0; /* Cor de fundo dos itens */
  border: 1px solid #ddd; /* Borda opcional */
  padding: 16px; /* Espaçamento interno dos itens */
  text-align: center; /* Alinhamento do conteúdo dentro do item */
  border-radius: 8px; /* Bordas arredondadas */
}

</style>

<div class="container-grid">

<div class="item-grid" >

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/mozgbrasil.png',
    name: 'Marcio',
    title: '@mozgbrasil',
    links: [
      { icon: 'github', link: 'https://github.com/mozgbrasil' },
      { icon: 'twitter', link: 'https://twitter.com/mozgbrasil' },
    ]
  },
 
]
</script>

<VPTeamMembers size="small" :members="members" />

</div>
<div class="item-grid" >

<div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="mozgbrasil" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/mozgbrasil?trk=profile-badge">Marcio dos Santos Amorim</a></div>

</div>
 
</div>
