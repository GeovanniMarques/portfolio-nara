# Uma renderização lenta e um desempenho inferior do site (carregamento demorado) geralmente são causados por uma combinação de recursos pesados, infraestrutura inadequada e código não otimizado. Sites que demoram mais de 3 segundos para carregar sofrem com alta taxa de rejeição e pior posicionamento no Google. 
Aqui estão as principais causas e soluções para um site lento:
Principais Causas de Lento Desempenho
Imagens não otimizadas: Imagens de alta resolução e tamanho exagerado são a causa número um de lentidão.
Hospedagem de baixa qualidade: Servidores compartilhados sobrecarregados, com pouca CPU/RAM ou distantes geograficamente dos usuários geram alta latência.
Bloqueio de renderização (JS/CSS): Arquivos JavaScript e CSS carregados antes do conteúdo visual impedem que a página seja exibida rapidamente.
Excesso de plugins e scripts de terceiros: Muitos plugins (especialmente em WordPress) e scripts externos (anúncios, rastreadores) sobrecarregam o navegador.
Falta de Cache: A ausência de mecanismos de cache obriga o servidor a processar a mesma página repetidamente.
Código "bloat" (inchado): Códigos CSS e JavaScript desnecessários ou não minificados. 
Como Melhorar a Renderização e Desempenho
Otimize Imagens: Utilize formatos modernos como WebP ou AVIF e comprima imagens usando ferramentas como TinyPNG ou Squoosh.
Use uma CDN (Content Delivery Network): Distribua o conteúdo do site em servidores globais para reduzir a distância física entre o usuário e o servidor.
Implemente Cache: Utilize plugins de cache (em CMS) ou configurações do servidor (como LiteSpeed Cache) para armazenar páginas estáticas.
Minifique e Adie o JS/CSS: Minifique arquivos (remova espaços e comentários) e use async ou defer no JavaScript para não bloquear a renderização.
Atualize a Hospedagem: Considere mudar para uma hospedagem VPS ou Cloud se a atual for compartilhada e insatisfatória.
Reduza o Caminho de Renderização Crítico: Priorize o carregamento do que aparece primeiro na tela (acima da dobra). 
Ferramentas para diagnosticar: Google PageSpeed Insights, GTmetrix e Lighthouse. 

## Pontos de atenção

1. **Aria-labels**
2. **SEO friendly**
3. **Hero section**


## Conversa com Claude.ai
> Meu hero section, na verdade, pretendia fazer inicialmente, como se fosse um enorme "header", depois, no ato de scroll, apareceria com uma pequena logo.

> O atributo HTML pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" é usado para especificar uma expressão regular que o valor de um campo de entrada (como <input type="text"> ou <input type="email">) deve corresponder para ser considerado válido durante a validação de formulário [1].
Neste caso específico, a expressão regular fornecida é projetada para validar um endereço de e-mail: 
[a-z0-9._%+-]+: Corresponde a um ou mais caracteres que podem ser letras minúsculas, números ou os símbolos '.', '_', '%', '+' ou '-'. Isso cobre a parte do nome de usuário do e-mail.
@: Corresponde ao símbolo literal '@'.
[a-z0-9.-]+: Corresponde a um ou mais caracteres que podem ser letras minúsculas, números, pontos ou hífens. Isso cobre o nome do domínio (por exemplo, 'gmail', 'outlook').
\.: Corresponde a um ponto literal (o caractere \ "escapa" o ponto, pois o ponto sozinho em regex tem um significado especial).
[a-z]{2,}: Corresponde a duas ou mais letras minúsculas. Isso cobre o domínio de nível superior (por exemplo, 'com', 'br', 'org').
$: Marca o fim da string, garantindo que não haja caracteres adicionais após o domínio de nível superior. 
Portanto, ele garante que o usuário insira um valor que se parece com um endereço de e-mail válido antes que o formulário possa ser enviado. Se o padrão não for correspondido, o navegador exibirá uma mensagem de erro padrão (que pode ser personalizada com o atributo title ou oninvalid) e impedirá o envio do formulário [1]. 

## 2. O que nunca pode faltar: Validação no Back-end
Embora o HTML e o JavaScript ajudem o usuário, eles não garantem segurança. Qualquer usuário avançado pode desativar o JavaScript ou alterar o HTML via console do navegador. 
Regra de Ouro: Sempre valide os dados novamente no seu servidor (Back-end) antes de salvá-los no banco de dados. 
Em resumo: Use type="email" e pattern para cobrir 90% dos casos de formato de forma simples e leve. Deixe o JavaScript apenas para refinamentos visuais ou lógicas que dependam de múltiplos campos. 

## 🎨 O que é SVG?
SVG = Scalable Vector Graphics (Gráficos Vetoriais Escaláveis)
São imagens feitas com código em vez de pixels. Por isso:

✅ Nunca pixelizam (ficam nítidas em qualquer tamanho)
✅ São super leves (poucos bytes)
✅ Podem ser estilizadas com CSS
✅ Podem ser animadas


📐 Estrutura básica do SVG
html<svg viewBox="0 0 24 24" width="50" height="50">
    <!-- Aqui dentro vão os desenhos -->
</svg>
O atributo viewBox:
htmlviewBox="0 0 24 24"
         │ │ │  │
         │ │ │  └─ Altura da "tela" (24 unidades)
         │ │ └──── Largura da "tela" (24 unidades)
         │ └────── Posição Y inicial (0)
         └──────── Posição X inicial (0)
Pense assim: É como uma folha de papel quadriculado de 24x24 quadradinhos onde você vai desenhar.

✏️ A tag <path> - Desenhando formas
<path> é o "lápis" do SVG. Você dá comandos de onde o lápis deve ir.
Comandos básicos:
html<path d="M 10 10 L 20 20" />
       │  │      │
       │  │      └─ Comando L = Line (linha até esse ponto)
       │  └──────── Comando M = Move (move o lápis sem desenhar)
       └─────────── d = "data" (os comandos de desenho)
Principais comandos:
ComandoNomeO que fazM x yMoveMove o lápis para a posição (x, y)L x yLineDesenha linha reta até (x, y)CCurveDesenha curva (Bézier)ZCloseFecha o caminho (volta ao início)

## Padrões de Contraste (WCAG 2.1/2.2)

> Para saber se a razão de contraste está ideal, você deve seguir as diretrizes internacionais de acessibilidade conhecidas como WCAG (Web Content Accessibility Guidelines).