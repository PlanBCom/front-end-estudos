O grupo de front-end da Plan B, está se reunindo frequemente para alinhar o conhecimento e estudar novas tecnologias da área. Inicialmente, criamos um [boilerplate][boilerplate-planb] em [HTML5][html5] com [meta tags do Facebook][meta-tags-facebook], [apple-touch-icon-precomposed][apple-touch], [modernizr][modernizr] e [JQuery][jquery].   
Para criar esse [boilerplate][boilerplate-planb], começamos por estudar as novas tags [HTML5][html5], manipulação de [DOM][code-dir-dom] e [javascript (sem o uso de JQuery para manipular o DOM)][code-dir-javascript].    

**Veja como ficou nossa resumida pesquisa:**
***

[boilerplate-planb]: https://github.com/PlanBCom/html5-boilerplate
[html5]: http://www.w3c.br/Home/WebHome
[meta-tags-facebook]: https://developers.facebook.com/docs/opengraphprotocol/
[apple-touch]: http://developer.apple.com/library/ios/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html
[modernizr]: http://modernizr.com/
[jquery]: http://jquery.com/
[code-dir-dom]: https://github.com/PlanBCom/front-end-estudos/tree/master/dom
[code-dir-javascript]: https://github.com/PlanBCom/front-end-estudos/tree/master/javascript

# HTML5
## Novos elementos de semântica e estrutura:

  
`<article>`   
Representa uma seção de conteúdo importante do site, que forma uma parte independente do documento Esta tag é provavelmente a melhor adição do ponto de vista de SEO, pois deve ser usada para marcar o conteúdo de blogs, revistas e jornais online ou de qualquer conteúdo nesse sentido. Ela visa facilitar que Search Engines identifiquem onde, de fato, está o conteúdo de uma página. De acordo com vários especialistas, o conteúdo que estiver dentro desta tag provavelmente terá peso maior para os motores de busca.  
[Exemplo: (Exceto:IE8-)][1]  
  
`<section>`   
Usada para identificar grupos de conteúdo temático dentro da página. Normalmente, uma seção marcada com essa tag possui um cabeçalho(`<header>`) e um rodapé(`<footer>`).  
[Exemplo: (Exceto:IE8-)][2]

`<main>`  
**(Está em rascunho)** - Representa o conteúdo principal do body de um documento ou aplicativo. Consiste na area de conteúdo que está diretamente relacionada ou expande-se sobre o tema central de um documento ou a funcionalidade central de um aplicativo  
[Exemplo: (exceto:ie8-)][3]

`<aside>`   
Especifica o conteúdo relacionado com o artigo dentro de um artigo ou página web, geralmente usadas em colunas laterais.   
[Exemplo: (exceto:ie8-)][4]  
  
`<details>`   
O elemento detalhes representa um widget de divulgação a partir do qual o usuário pode obter informações adicionais ou controles(abre e fecha).   
[Exemplo: (ch,sa)][5]

`<summary>`   
Legenda do elemento `<details>`  
[Exemplo: (ch,sa)][6]

`<figure>`   
Destina-se a marcar uma unidade de conteúdo e opcionalmente uma legenda para o conteúdo que se constitue em uma peça isolada do fluxo principal do documento e pode ser retirada daquele fluxo sem alterar o significado do documento.   
[Exemplo: (exceto:ie8-)][7]
  
`<figcaption>`   
Destina-se a marcar o cabeçalho ou a legenda para uma figura.  
[Exemplo: (exceto:ie8-)][8]  
  
`<footer>`   
O elemento footer representa o rodapé para a seção que se aplica  
[Exemplo(exceto:ie8-).][9]

`<header>`   
É uma tag especializada para cabeçalhos, onde você pode adicionar elementos de cabeçalho(H1, H2, H3, etc…), parágrafos de texto, links ou qualquer elemento que achar relevante para seu cabeçalho.  
[Exemplo: (exceto:ie8-)][10]

`<hgroup>`   
Representa um grupo de titulos `<h1>` a `<h6>`.   
[Exemplo: (exceto:ie8-).][11]

`<mark>`   
Representa uma série de texto em um documento marcados ou destacados para fins de referência, devido a sua relevância em outro contexto.  
[Exemplo: (exceto:ie8-)][12]

`<meter>`   
É usado para indicar uma medição escalar dentro de um intervalo conhecido, ou um valor fraccional.
[Exemplo: (exceto:ie)][13]

`<nav>`   
O elemento nav representa uma seção de um documento com links para outros documentos ou para peças dentro do próprio documento, isto é, uma seção de links de navegação.   
[Exemplo: (exceto:ie8-)][14]

`<progress>`   
Representa o progresso realização de uma tarefa.   
[Exemplo: (exceto:ie9-)][15]

`<time>`   
Definir data/tempo.   
[Exemplo: (exceto:ie8-)][16]

`<wbr>`	  
O elemento wbr representa uma oportunidade de quebra de linha.  
[Exemplo(exceto:ie)][17]  

***    
## Novos elementos de mídia:

`<audio>`   
Representa um stream de audio.   
[Exemplo: (exceto:ie8-)][18]

`<video>`   
Representa um video.   
[Exemplo: (exceto:ie8-)][19]

`<source>`
Permite múltiplas fontes de mídia a ser especificado para áudio e elementos de vídeo.   
[Exemplo: (exceto:ie8-)][20]

`<embed>`  
O elemento embed representa um ponto de integração para conteúdo externo.  
[Exemplo][21]

###O novo elemento de desenhos de gráficos.

`<canvas>`  
Criar gráficos, composições de fotos e animações usando JavaScript  
[Exemplo 1: (exceto:ie8-)][22]  
[Exemplo 2: (poder do canvas)][23]  

***  
## Novos elementos de formulário:

  
`<datalist>`  
Input com opções pré definidas.  
[Exemplo: (exceto ie9-, sa)][24]

`<keygen>`   
O elemento keygen representa um controle para gerar um par de chaves pública-privada e para a apresentação destas chaves.   
[Exemplo: (exceto ie)][25]

`<output>`   
Representa o resultado de um cálculo   
[Exemplo: (exceto ie)][26]

`Input Type`  
**color**   
Selecionados de cor.   
[Exemplo: (ch,op)][27]

`Input Type`  
**date**  
Selecionador de data.   
[Exemplo: (ch, op, sa)][28]

`Input Type`  
**datetime-local**  
O tipo datetime-local permite que o usuário selecione uma data e hora (sem fuso horário).   
[Exemplo: (sa, op)][29]

`Input Type`  
**email**  
Valida email.  
[Exemplo: (exceto sa, ie9-)][30]

`Input Type`  
**month**  
Selecionador de mês e ano.   
[Exemplo: (ch, sa, op)][31]

`Input Type`  
**number**
O tipo de número é usado para campos de entrada que devem conter um valor numérico.   
[Exemplo: (ie10, ch, sa, op)][32]

`Input Type`  
**range**    
O tipo ragne é utilizada para campos de entrada que deve conter um valor a partir de uma variação de números.   
[Exemplo: (ie10, ch, sa, op)][33]

`Input Type`  
**time**
Seleciona tempo (hh:mm)  
[Exemplo: (ch, sa, op)][34]

`Input Type`  
**week**  
Permite selecionar semana e ano.  
[Exemplo: (ch, sa, po)][35]

***  
### Referências

[http://dev.w3.org/html5/markup/][36]  
[http://www.w3.org/html/wg/drafts/html/master/][37]  
[http://www.w3schools.com/html/][38]  
[http://www.w3schools.com/tags/][39]  
[http://www.mestreseo.com.br/seo/html-5-seo][40]  
[http://tableless.com.br/section-elemento-article/][41]

***
# Estudo sobre DOM e javacript  

1. [DOM][code-dir-dom]  
2. [javascript][code-dir-javascript]

[code-dir-dom]: https://github.com/PlanBCom/front-end-estudos/tree/master/dom
[code-dir-javascript]: https://github.com/PlanBCom/front-end-estudos/tree/master/javascript

[1]: http://www.w3.org/html/wg/drafts/html/master/sections.html#the-article-element
[2]: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_section
[3]: http://www.w3.org/html/wg/drafts/html/master/grouping-content.html#the-main-element
[4]: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_aside
[5]: http://jsbin.com/egefop/2#html,live
[6]: http://media02.hongkiat.com/html5-details-summary-tags/demo/index.html
[7]: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_figure
[8]: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_figcaption
[9]: http://www.w3schools.com/tags/tag_footer.asp
[10]: http://www.w3schools.com/tags/tag_header.asp
[11]: http://www.w3schools.com/tags/tag_hgroup.asp
[12]: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_mark
[13]: http://www.quackit.com/html_5/tags/html_meter_tag.cfm
[14]: http://www.w3schools.com/tags/tag_nav.asp
[15]: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_progress
[16]: http://www.w3schools.com/tags/tag_time.asp
[17]: http://www.w3schools.com/tags/tag_wbr.asp
[18]: http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_audio_all
[19]: http://www.quackit.com/html_5/tags/html_video_tag.cfm
[20]: http://www.w3schools.com/tags/tag_source.asp
[21]: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_embed
[22]: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas
[23]: http://helloracer.com/webgl/
[24]: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_datalist
[25]: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_keygen
[26]: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_output
[27]: http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_type_color
[28]: http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_type_date
[29]: http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_type_datetime-local
[30]: http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_type_email
[31]: http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_type_month
[32]: http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_type_number
[33]: http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_type_range
[34]: http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_type_time
[35]: http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_type_week
[36]: http://dev.w3.org/html5/markup/
[37]: http://www.w3.org/html/wg/drafts/html/master/
[38]: http://www.w3schools.com/html/
[39]: http://www.w3schools.com/tags/
[40]: http://www.mestreseo.com.br/seo/html-5-seo
[41]: http://tableless.com.br/section-elemento-article/
