# 🌱 Papel Vivo: Do Lixo à Vida

![Status](https://img.shields.io/badge/Status-Concluído-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat&logo=bootstrap&logoColor=white)

O projeto **"Papel Vivo"** é uma iniciativa escolar interdisciplinar focada na sustentabilidade. Ele transforma o papel descartado nas instituições de ensino em "papel semente" artesanal e ecológico. 

Este repositório contém o código-fonte do site oficial do projeto, desenvolvido para divulgar o passo a passo da iniciativa e permitir que este modelo sustentável seja facilmente replicado por outras comunidades escolares.

---

## 🌍 Sobre o Projeto Escolar

Além da reciclagem convencional, o projeto se destaca por integrar tecnologia, ciências e artes:
* **Sementes Nativas e Culturais:** Uso de sementes de Cacau, Urucum e Açafrão da Terra no corpo do papel.
* **Pigmentação Natural:** Pintura e arte realizadas com tintas extraídas das próprias sementes e Carvão Mineral, dispensando químicos agressivos.
* **Estufa Automatizada:** O papel é seco em uma estufa controlada por **Arduino** (mantendo a temperatura entre 35°C e 40°C para não matar as sementes), alimentada por **energia solar**.

---

## 💻 Estrutura Técnica (Arquitetura de 3 Camadas)

O site foi construído seguindo a arquitetura clássica de 3 camadas para aplicações estáticas, garantindo leveza e alta performance no **GitHub Pages**:

1.  **Estrutura (HTML5):** Semântica e acessibilidade. Formato *Single Page* (Página Única).
2.  **Apresentação (CSS3 + Bootstrap 5):** Estilização responsiva (Mobile First), utilizando variáveis CSS nativas e o sistema de grids do Bootstrap.
3.  **Comportamento (JavaScript):** Interatividade leve para controle de navegação (fechamento automático do menu mobile).

### Árvore de Arquivos
```text
papelVivo/
│
├── index.html          # Estrutura principal da Single Page
├── README.md           # Documentação do projeto
├── css/
│   └── style.css       # Estilos personalizados e sobrescritas do Bootstrap
├── js/
│   └── script.js       # Lógica de interatividade do menu mobile
└── img/                # Diretório de mídias e assets
    ├── logo.jpeg
    ├── professores.jpeg
    ├── coleta.jpeg
    ├── maceracao.jpeg
    ├── moldagem.jpeg
    ├── secagem.jpeg
    ├── carvao.jpeg
    ├── urucum.jpeg
    ├── acafrao.jpeg
    ├── cacau.jpeg
    └── (Fotos da equipe)
