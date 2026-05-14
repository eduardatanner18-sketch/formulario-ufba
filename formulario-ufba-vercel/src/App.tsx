import { useState, useEffect, useRef } from "react";

const LANGS = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

const T = {
  pt: {
    formTitle:
      "Identidade cultural, comunidade e experiências interculturais de estudantes de países africanos na UFBA",
    formDesc:
      "Este formulário busca compreender as experiências culturais, comunitárias e identitárias de estudantes de países africanos na UFBA, especialmente suas vivências em Salvador e seus encontros, diálogos, aproximações e tensões com as culturas afro-baianas.\n\nNos interessa compreender como diferentes formas de pertencimento, convivência e identidade cultural são construídas no cotidiano universitário e urbano.\n\nNão existem respostas certas ou erradas. O mais importante é sua experiência pessoal.\n\nA participação é voluntária, anônima e destinada exclusivamente a fins acadêmicos. Você pode interromper o preenchimento a qualquer momento.\n\nTempo estimado de resposta: 10–15 minutos.",
    consent: {
      title: "Termo de Consentimento",
      text: "Ao prosseguir com este formulário, você declara que:\n\n• Tem 18 anos ou mais;\n• Leu e compreendeu as informações acima;\n• Concorda em participar voluntariamente desta pesquisa;\n• Está ciente de que sua participação é anônima e que os dados serão usados exclusivamente para fins acadêmicos;\n• Sabe que pode interromper sua participação a qualquer momento, sem qualquer consequência.",
      agree: "Li e concordo com o Termo de Consentimento",
      required: "Você precisa aceitar o termo para continuar.",
    },
    sections: [
      {
        title: "Seção 1 — Perfil e Trajetória",
        desc: "Esta seção busca compreender aspectos gerais da sua trajetória e contexto cultural.",
      },
      {
        title: "Seção 2 — Chegada, Expectativas e Adaptação",
        desc: "Esta seção aborda suas primeiras experiências no Brasil e em Salvador.",
      },
      {
        title: "Seção 3 — Cultura, Cotidiano e Pertencimento",
        desc: "Esta seção aborda experiências culturais e formas de pertencimento no cotidiano.",
      },
      {
        title: "Seção 4 — Identidade, Raça e Relações Interculturais",
        desc: "As próximas perguntas abordam experiências relacionadas à identidade cultural, raça e convivência social.",
      },
      {
        title: "Seção 5 — Redes de Apoio e Experiência Pessoal",
        desc: "Esta seção final aborda apoio social, bem-estar e experiências pessoais. Responda apenas o que se sentir confortável para compartilhar.",
      },
    ],
    questions: [
      {
        id: "q1",
        section: 0,
        type: "short",
        label: "Qual é o seu país de origem?",
        required: true,
      },
      {
        id: "q2",
        section: 0,
        type: "short",
        label: "Qual é sua idade?",
        required: true,
      },
      {
        id: "q3",
        section: 0,
        type: "radio",
        label: "Como você identifica seu gênero?",
        required: false,
        options: [
          "Mulher",
          "Homem",
          "Não-binário",
          "Outro",
          "Prefiro não responder",
        ],
      },
      {
        id: "q4",
        section: 0,
        type: "short",
        label: "Quais idiomas você fala?",
        required: true,
      },
      {
        id: "q5",
        section: 0,
        type: "short",
        label:
          "Você pertence a algum grupo étnico, povo ou comunidade específica no seu país? Se desejar, explique.",
        required: false,
      },
      {
        id: "q6",
        section: 0,
        type: "short",
        label: "Qual é seu curso na UFBA?",
        required: true,
      },
      {
        id: "q7",
        section: 0,
        type: "radio",
        label: "Há quanto tempo você vive em Salvador?",
        required: true,
        options: [
          "Menos de 6 meses",
          "Entre 6 meses e 1 ano",
          "Entre 1 e 3 anos",
          "Mais de 3 anos",
        ],
      },
      {
        id: "q8",
        section: 1,
        type: "radio",
        label:
          "Antes de vir ao Brasil, você já conhecia algo sobre Salvador ou sobre as culturas afro-baianas?",
        required: true,
        options: [
          "Sim, bastante",
          "Sim, um pouco",
          "Muito pouco",
          "Não conhecia",
        ],
      },
      {
        id: "q9",
        section: 1,
        type: "long",
        label:
          "Como eram suas expectativas sobre o Brasil antes da chegada? A experiência em Salvador foi diferente do que você imaginava?",
        required: false,
      },
      {
        id: "q10",
        section: 1,
        type: "long",
        label:
          "Como tem sido sua experiência com o português falado em Salvador? Existem aspectos da língua, sotaque ou comunicação cotidiana que impactam sua convivência?",
        required: false,
      },
      {
        id: "q11",
        section: 1,
        type: "radio",
        label:
          "Você sente que seu sotaque, idioma de origem ou forma de falar influencia a maneira como as pessoas interagem com você?",
        required: true,
        options: [
          "Sim, muito",
          "Um pouco",
          "Não percebo diferença",
          "Nunca pensei sobre isso",
        ],
      },
      {
        id: "q12",
        section: 1,
        type: "long",
        label: "Se desejar, dê um exemplo de como isso acontece.",
        required: false,
      },
      {
        id: "q13",
        section: 2,
        type: "checkbox",
        label:
          "Quais aspectos da vida cultural em Salvador mais marcaram você até agora? (Pode marcar mais de uma opção.)",
        required: false,
        options: [
          "Música",
          "Religião",
          "Dança",
          "Festas populares",
          "Gastronomia",
          "Relações sociais",
          "Cultura afro-baiana",
          "Universidade",
          "Linguagem/gírias",
          "Moda/estilo",
        ],
      },
      {
        id: "q14",
        section: 2,
        type: "long",
        label:
          "Você sente que viver em Salvador mudou seus hábitos culturais, sua rotina ou sua forma de viver o cotidiano? Como?",
        required: false,
      },
      {
        id: "q15",
        section: 2,
        type: "long",
        label:
          "Existiram momentos em Salvador em que você sentiu proximidade cultural, identificação ou familiaridade com práticas, músicas, religiões, costumes ou experiências afro-baianas?",
        required: false,
      },
      {
        id: "q16",
        section: 2,
        type: "long",
        label:
          "Houve aspectos da cultura baiana ou brasileira que causaram estranhamento, desconforto, surpresa ou choque cultural?",
        required: false,
      },
      {
        id: "q17",
        section: 2,
        type: "long",
        label:
          "Você sente que existe uma comunidade de estudantes africanos na UFBA? Como você percebe essa convivência?",
        required: false,
      },
      {
        id: "q18",
        section: 2,
        type: "radio",
        label: "Você costuma conviver mais com:",
        required: true,
        options: [
          "Pessoas do meu próprio país",
          "Pessoas de outros países africanos",
          "Brasileiros",
          "Um grupo misto",
          "Não tenho um grupo específico",
        ],
      },
      {
        id: "q19",
        section: 2,
        type: "long",
        label:
          "Em quais espaços da universidade ou da cidade você mais sente pertencimento, acolhimento ou identificação cultural?",
        required: false,
      },
      {
        id: "q20",
        section: 3,
        type: "long",
        label:
          "Como foi perceber as relações raciais e culturais no Brasil em comparação com o seu país de origem?",
        required: false,
      },
      {
        id: "q21",
        section: 3,
        type: "radio",
        label:
          "Você sente que as pessoas no Brasil possuem estereótipos ou visões simplificadas sobre países africanos ou sobre o continente africano?",
        required: true,
        options: ["Frequentemente", "Às vezes", "Raramente", "Nunca"],
      },
      {
        id: "q22",
        section: 3,
        type: "long",
        label:
          "Se desejar, explique quais diferenças você percebe entre essas visões e a realidade da sua experiência cultural.",
        required: false,
      },
      {
        id: "q23",
        section: 3,
        type: "long",
        label:
          "Como você percebe as relações entre estudantes de países africanos e estudantes brasileiros negros na universidade?",
        required: false,
      },
      {
        id: "q24",
        section: 3,
        type: "long",
        label:
          "Você já viveu experiências marcantes de acolhimento, solidariedade, preconceito, exotização, discriminação ou mal-entendidos culturais em Salvador ou na UFBA? Se desejar, relate.",
        required: false,
      },
      {
        id: "q25",
        section: 4,
        type: "long",
        label:
          "O que mais tem ajudado você a manter seu bem-estar emocional vivendo longe do seu país de origem?",
        required: false,
      },
      {
        id: "q26",
        section: 4,
        type: "radio",
        label:
          "As relações com outros estudantes internacionais ajudam você a se sentir acolhido(a) em Salvador?",
        required: true,
        options: ["Muito", "Um pouco", "Pouco", "Não"],
      },
      {
        id: "q27",
        section: 4,
        type: "long",
        label:
          "Existe alguma experiência, reflexão ou aspecto da sua vivência em Salvador que você considera importante compartilhar e que não apareceu nas perguntas anteriores?",
        required: false,
      },
    ],
    nav: {
      next: "Próxima seção",
      prev: "Seção anterior",
      submit: "Enviar respostas",
      consent: "Continuar",
    },
    required_msg: "Este campo é obrigatório.",
    success_title: "Respostas enviadas!",
    success_msg:
      "Obrigado(a) pela sua participação. Suas respostas foram registradas com sucesso.",
    error_msg: "Ocorreu um erro ao enviar. Por favor, tente novamente.",
    sending: "Enviando...",
    optional: "opcional",
    other_placeholder: "Outro: descreva aqui",
    progress: "Seção",
    of: "de",
  },
  en: {
    formTitle:
      "Cultural identity, community and intercultural experiences of students from African countries at UFBA",
    formDesc:
      "This form seeks to understand the cultural, community and identity experiences of students from African countries at UFBA, especially their experiences in Salvador and their encounters, dialogues, approximations and tensions with Afro-Bahian cultures.\n\nWe are interested in understanding how different forms of belonging, coexistence and cultural identity are constructed in everyday university and urban life.\n\nThere are no right or wrong answers. What matters most is your personal experience.\n\nParticipation is voluntary, anonymous and intended exclusively for academic purposes. You can stop filling in the form at any time.\n\nEstimated response time: 10–15 minutes.",
    consent: {
      title: "Informed Consent",
      text: "By proceeding with this form, you declare that:\n\n• You are 18 years of age or older;\n• You have read and understood the information above;\n• You agree to participate voluntarily in this research;\n• You are aware that your participation is anonymous and that the data will be used exclusively for academic purposes;\n• You know that you may withdraw your participation at any time, without any consequence.",
      agree: "I have read and agree to the Informed Consent",
      required: "You must accept the consent form to continue.",
    },
    sections: [
      {
        title: "Section 1 — Profile and Background",
        desc: "This section seeks to understand general aspects of your trajectory and cultural context.",
      },
      {
        title: "Section 2 — Arrival, Expectations and Adaptation",
        desc: "This section addresses your first experiences in Brazil and in Salvador.",
      },
      {
        title: "Section 3 — Culture, Everyday Life and Belonging",
        desc: "This section addresses cultural experiences and forms of belonging in everyday life.",
      },
      {
        title: "Section 4 — Identity, Race and Intercultural Relations",
        desc: "The following questions address experiences related to cultural identity, race and social coexistence.",
      },
      {
        title: "Section 5 — Support Networks and Personal Experience",
        desc: "This final section addresses social support, well-being and personal experiences. Answer only what you feel comfortable sharing.",
      },
    ],
    questions: [
      {
        id: "q1",
        section: 0,
        type: "short",
        label: "What is your country of origin?",
        required: true,
      },
      {
        id: "q2",
        section: 0,
        type: "short",
        label: "How old are you?",
        required: true,
      },
      {
        id: "q3",
        section: 0,
        type: "radio",
        label: "How do you identify your gender?",
        required: false,
        options: ["Woman", "Man", "Non-binary", "Other", "Prefer not to say"],
      },
      {
        id: "q4",
        section: 0,
        type: "short",
        label: "What languages do you speak?",
        required: true,
      },
      {
        id: "q5",
        section: 0,
        type: "short",
        label:
          "Do you belong to a specific ethnic group, people or community in your country? If you wish, explain.",
        required: false,
      },
      {
        id: "q6",
        section: 0,
        type: "short",
        label: "What is your course at UFBA?",
        required: true,
      },
      {
        id: "q7",
        section: 0,
        type: "radio",
        label: "How long have you lived in Salvador?",
        required: true,
        options: [
          "Less than 6 months",
          "Between 6 months and 1 year",
          "Between 1 and 3 years",
          "More than 3 years",
        ],
      },
      {
        id: "q8",
        section: 1,
        type: "radio",
        label:
          "Before coming to Brazil, did you already know anything about Salvador or Afro-Bahian cultures?",
        required: true,
        options: [
          "Yes, quite a lot",
          "Yes, a little",
          "Very little",
          "I did not know",
        ],
      },
      {
        id: "q9",
        section: 1,
        type: "long",
        label:
          "What were your expectations about Brazil before arriving? Was the experience in Salvador different from what you imagined?",
        required: false,
      },
      {
        id: "q10",
        section: 1,
        type: "long",
        label:
          "How has your experience with Portuguese spoken in Salvador been? Are there aspects of the language, accent or everyday communication that impact your daily life?",
        required: false,
      },
      {
        id: "q11",
        section: 1,
        type: "radio",
        label:
          "Do you feel that your accent, mother tongue or way of speaking influences how people interact with you?",
        required: true,
        options: [
          "Yes, a lot",
          "A little",
          "I notice no difference",
          "I have never thought about it",
        ],
      },
      {
        id: "q12",
        section: 1,
        type: "long",
        label: "If you wish, give an example of how this happens.",
        required: false,
      },
      {
        id: "q13",
        section: 2,
        type: "checkbox",
        label:
          "Which aspects of cultural life in Salvador have stood out to you the most? (You may select more than one.)",
        required: false,
        options: [
          "Music",
          "Religion",
          "Dance",
          "Popular festivals",
          "Gastronomy",
          "Social relations",
          "Afro-Bahian culture",
          "University",
          "Language/slang",
          "Fashion/style",
        ],
      },
      {
        id: "q14",
        section: 2,
        type: "long",
        label:
          "Do you feel that living in Salvador has changed your cultural habits, routine or way of experiencing everyday life? How?",
        required: false,
      },
      {
        id: "q15",
        section: 2,
        type: "long",
        label:
          "Have there been moments in Salvador when you felt cultural closeness, identification or familiarity with Afro-Bahian practices, music, religions, customs or experiences?",
        required: false,
      },
      {
        id: "q16",
        section: 2,
        type: "long",
        label:
          "Were there aspects of Bahian or Brazilian culture that caused you strangeness, discomfort, surprise or cultural shock?",
        required: false,
      },
      {
        id: "q17",
        section: 2,
        type: "long",
        label:
          "Do you feel there is a community of African students at UFBA? How do you perceive this coexistence?",
        required: false,
      },
      {
        id: "q18",
        section: 2,
        type: "radio",
        label: "You tend to socialise most with:",
        required: true,
        options: [
          "People from my own country",
          "People from other African countries",
          "Brazilians",
          "A mixed group",
          "I do not have a specific group",
        ],
      },
      {
        id: "q19",
        section: 2,
        type: "long",
        label:
          "In which spaces of the university or city do you most feel belonging, welcome or cultural identification?",
        required: false,
      },
      {
        id: "q20",
        section: 3,
        type: "long",
        label:
          "What was it like to perceive racial and cultural relations in Brazil compared to your country of origin?",
        required: false,
      },
      {
        id: "q21",
        section: 3,
        type: "radio",
        label:
          "Do you feel that people in Brazil hold stereotypes or oversimplified views about African countries or the African continent?",
        required: true,
        options: ["Frequently", "Sometimes", "Rarely", "Never"],
      },
      {
        id: "q22",
        section: 3,
        type: "long",
        label:
          "If you wish, explain what differences you perceive between these views and the reality of your cultural experience.",
        required: false,
      },
      {
        id: "q23",
        section: 3,
        type: "long",
        label:
          "How do you perceive the relations between students from African countries and Black Brazilian students at the university?",
        required: false,
      },
      {
        id: "q24",
        section: 3,
        type: "long",
        label:
          "Have you had notable experiences of welcome, solidarity, prejudice, exoticisation, discrimination or cultural misunderstandings in Salvador or at UFBA? If you wish, describe them.",
        required: false,
      },
      {
        id: "q25",
        section: 4,
        type: "long",
        label:
          "What has helped you the most to maintain your emotional well-being living away from your country of origin?",
        required: false,
      },
      {
        id: "q26",
        section: 4,
        type: "radio",
        label:
          "Do relations with other international students help you feel welcomed in Salvador?",
        required: true,
        options: ["Very much", "A little", "Not much", "No"],
      },
      {
        id: "q27",
        section: 4,
        type: "long",
        label:
          "Is there any experience, reflection or aspect of your life in Salvador that you consider important to share and that did not appear in the previous questions?",
        required: false,
      },
    ],
    nav: {
      next: "Next section",
      prev: "Previous section",
      submit: "Submit answers",
      consent: "Continue",
    },
    required_msg: "This field is required.",
    success_title: "Answers submitted!",
    success_msg:
      "Thank you for your participation. Your answers have been successfully recorded.",
    error_msg: "An error occurred while submitting. Please try again.",
    sending: "Sending...",
    optional: "optional",
    other_placeholder: "Other: describe here",
    progress: "Section",
    of: "of",
  },
  fr: {
    formTitle:
      "Identité culturelle, communauté et expériences interculturelles d'étudiants de pays africains à l'UFBA",
    formDesc:
      "Ce formulaire cherche à comprendre les expériences culturelles, communautaires et identitaires des étudiants de pays africains à l'UFBA, notamment leurs expériences à Salvador et leurs rencontres, dialogues, rapprochements et tensions avec les cultures afro-bahianaises.\n\nNous souhaitons comprendre comment différentes formes d'appartenance, de coexistence et d'identité culturelle se construisent dans la vie universitaire et urbaine quotidienne.\n\nIl n'y a pas de bonnes ou de mauvaises réponses. Ce qui compte le plus, c'est votre expérience personnelle.\n\nLa participation est volontaire, anonyme et destinée exclusivement à des fins académiques. Vous pouvez interrompre le remplissage à tout moment.\n\nTemps de réponse estimé : 10–15 minutes.",
    consent: {
      title: "Consentement éclairé",
      text: "En poursuivant ce formulaire, vous déclarez que :\n\n• Vous avez 18 ans ou plus ;\n• Vous avez lu et compris les informations ci-dessus ;\n• Vous acceptez de participer volontairement à cette recherche ;\n• Vous êtes conscient(e) que votre participation est anonyme et que les données seront utilisées exclusivement à des fins académiques ;\n• Vous savez que vous pouvez mettre fin à votre participation à tout moment, sans aucune conséquence.",
      agree: "J'ai lu et j'accepte le consentement éclairé",
      required:
        "Vous devez accepter le formulaire de consentement pour continuer.",
    },
    sections: [
      {
        title: "Section 1 — Profil et trajectoire",
        desc: "Cette section vise à comprendre les aspects généraux de votre trajectoire et contexte culturel.",
      },
      {
        title: "Section 2 — Arrivée, attentes et adaptation",
        desc: "Cette section aborde vos premières expériences au Brésil et à Salvador.",
      },
      {
        title: "Section 3 — Culture, quotidien et appartenance",
        desc: "Cette section aborde les expériences culturelles et les formes d'appartenance au quotidien.",
      },
      {
        title: "Section 4 — Identité, race et relations interculturelles",
        desc: "Les prochaines questions portent sur des expériences liées à l'identité culturelle, à la race et à la coexistence sociale.",
      },
      {
        title: "Section 5 — Réseaux de soutien et expérience personnelle",
        desc: "Cette dernière section porte sur le soutien social, le bien-être et les expériences personnelles. Répondez uniquement à ce avec quoi vous vous sentez à l'aise.",
      },
    ],
    questions: [
      {
        id: "q1",
        section: 0,
        type: "short",
        label: "Quel est votre pays d'origine ?",
        required: true,
      },
      {
        id: "q2",
        section: 0,
        type: "short",
        label: "Quel âge avez-vous ?",
        required: true,
      },
      {
        id: "q3",
        section: 0,
        type: "radio",
        label: "Comment identifiez-vous votre genre ?",
        required: false,
        options: [
          "Femme",
          "Homme",
          "Non-binaire",
          "Autre",
          "Préfère ne pas répondre",
        ],
      },
      {
        id: "q4",
        section: 0,
        type: "short",
        label: "Quelles langues parlez-vous ?",
        required: true,
      },
      {
        id: "q5",
        section: 0,
        type: "short",
        label:
          "Appartenez-vous à un groupe ethnique, un peuple ou une communauté spécifique dans votre pays ? Si vous le souhaitez, expliquez.",
        required: false,
      },
      {
        id: "q6",
        section: 0,
        type: "short",
        label: "Quel est votre cours à l'UFBA ?",
        required: true,
      },
      {
        id: "q7",
        section: 0,
        type: "radio",
        label: "Depuis combien de temps vivez-vous à Salvador ?",
        required: true,
        options: [
          "Moins de 6 mois",
          "Entre 6 mois et 1 an",
          "Entre 1 et 3 ans",
          "Plus de 3 ans",
        ],
      },
      {
        id: "q8",
        section: 1,
        type: "radio",
        label:
          "Avant de venir au Brésil, connaissiez-vous déjà quelque chose sur Salvador ou sur les cultures afro-bahianaises ?",
        required: true,
        options: [
          "Oui, beaucoup",
          "Oui, un peu",
          "Très peu",
          "Je ne connaissais pas",
        ],
      },
      {
        id: "q9",
        section: 1,
        type: "long",
        label:
          "Quelles étaient vos attentes concernant le Brésil avant votre arrivée ? L'expérience à Salvador a-t-elle été différente de ce que vous imaginiez ?",
        required: false,
      },
      {
        id: "q10",
        section: 1,
        type: "long",
        label:
          "Comment s'est passée votre expérience avec le portugais parlé à Salvador ? Y a-t-il des aspects de la langue, de l'accent ou de la communication quotidienne qui ont un impact sur votre vie quotidienne ?",
        required: false,
      },
      {
        id: "q11",
        section: 1,
        type: "radio",
        label:
          "Avez-vous l'impression que votre accent, votre langue maternelle ou votre façon de parler influence la manière dont les gens interagissent avec vous ?",
        required: true,
        options: [
          "Oui, beaucoup",
          "Un peu",
          "Je ne perçois aucune différence",
          "Je n'y ai jamais pensé",
        ],
      },
      {
        id: "q12",
        section: 1,
        type: "long",
        label:
          "Si vous le souhaitez, donnez un exemple de la façon dont cela se produit.",
        required: false,
      },
      {
        id: "q13",
        section: 2,
        type: "checkbox",
        label:
          "Quels aspects de la vie culturelle à Salvador vous ont le plus marqué(e) jusqu'à présent ? (Vous pouvez sélectionner plusieurs options.)",
        required: false,
        options: [
          "Musique",
          "Religion",
          "Danse",
          "Fêtes populaires",
          "Gastronomie",
          "Relations sociales",
          "Culture afro-bahianaise",
          "Université",
          "Langage/argot",
          "Mode/style",
        ],
      },
      {
        id: "q14",
        section: 2,
        type: "long",
        label:
          "Avez-vous l'impression que vivre à Salvador a changé vos habitudes culturelles, votre routine ou votre façon de vivre au quotidien ? Comment ?",
        required: false,
      },
      {
        id: "q15",
        section: 2,
        type: "long",
        label:
          "Y a-t-il eu des moments à Salvador où vous avez ressenti une proximité culturelle, une identification ou une familiarité avec des pratiques, de la musique, des religions, des coutumes ou des expériences afro-bahianaises ?",
        required: false,
      },
      {
        id: "q16",
        section: 2,
        type: "long",
        label:
          "Y a-t-il eu des aspects de la culture bahianaise ou brésilienne qui ont provoqué chez vous de l'étrangeté, un inconfort, une surprise ou un choc culturel ?",
        required: false,
      },
      {
        id: "q17",
        section: 2,
        type: "long",
        label:
          "Avez-vous l'impression qu'il existe une communauté d'étudiants africains à l'UFBA ? Comment percevez-vous cette coexistence ?",
        required: false,
      },
      {
        id: "q18",
        section: 2,
        type: "radio",
        label: "Vous côtoyez le plus souvent :",
        required: true,
        options: [
          "Des personnes de mon propre pays",
          "Des personnes d'autres pays africains",
          "Des Brésiliens",
          "Un groupe mixte",
          "Je n'ai pas de groupe spécifique",
        ],
      },
      {
        id: "q19",
        section: 2,
        type: "long",
        label:
          "Dans quels espaces de l'université ou de la ville ressentez-vous le plus un sentiment d'appartenance, d'accueil ou d'identification culturelle ?",
        required: false,
      },
      {
        id: "q20",
        section: 3,
        type: "long",
        label:
          "Comment avez-vous perçu les relations raciales et culturelles au Brésil par rapport à votre pays d'origine ?",
        required: false,
      },
      {
        id: "q21",
        section: 3,
        type: "radio",
        label:
          "Avez-vous l'impression que les gens au Brésil ont des stéréotypes ou des visions simplifiées sur les pays africains ou le continent africain ?",
        required: true,
        options: ["Fréquemment", "Parfois", "Rarement", "Jamais"],
      },
      {
        id: "q22",
        section: 3,
        type: "long",
        label:
          "Si vous le souhaitez, expliquez quelles différences vous percevez entre ces visions et la réalité de votre expérience culturelle.",
        required: false,
      },
      {
        id: "q23",
        section: 3,
        type: "long",
        label:
          "Comment percevez-vous les relations entre les étudiants de pays africains et les étudiants brésiliens noirs à l'université ?",
        required: false,
      },
      {
        id: "q24",
        section: 3,
        type: "long",
        label:
          "Avez-vous vécu des expériences marquantes d'accueil, de solidarité, de préjugé, d'exotisation, de discrimination ou de malentendus culturels à Salvador ou à l'UFBA ? Si vous le souhaitez, relatez-les.",
        required: false,
      },
      {
        id: "q25",
        section: 4,
        type: "long",
        label:
          "Qu'est-ce qui vous a le plus aidé(e) à maintenir votre bien-être émotionnel en vivant loin de votre pays d'origine ?",
        required: false,
      },
      {
        id: "q26",
        section: 4,
        type: "radio",
        label:
          "Les relations avec d'autres étudiants internationaux vous aident-elles à vous sentir accueilli(e) à Salvador ?",
        required: true,
        options: ["Beaucoup", "Un peu", "Peu", "Non"],
      },
      {
        id: "q27",
        section: 4,
        type: "long",
        label:
          "Y a-t-il une expérience, une réflexion ou un aspect de votre vie à Salvador que vous jugez important de partager et qui n'est pas apparu dans les questions précédentes ?",
        required: false,
      },
    ],
    nav: {
      next: "Section suivante",
      prev: "Section précédente",
      submit: "Soumettre les réponses",
      consent: "Continuer",
    },
    required_msg: "Ce champ est obligatoire.",
    success_title: "Réponses soumises !",
    success_msg:
      "Merci pour votre participation. Vos réponses ont été enregistrées avec succès.",
    error_msg: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
    sending: "Envoi en cours...",
    optional: "optionnel",
    other_placeholder: "Autre : décrivez ici",
    progress: "Section",
    of: "sur",
  },
  es: {
    formTitle:
      "Identidad cultural, comunidad y experiencias interculturales de estudiantes de países africanos en la UFBA",
    formDesc:
      "Este formulario busca comprender las experiencias culturales, comunitarias e identitarias de estudiantes de países africanos en la UFBA, especialmente sus vivencias en Salvador y sus encuentros, diálogos, acercamientos y tensiones con las culturas afrobahianas.\n\nNos interesa comprender cómo se construyen diferentes formas de pertenencia, convivencia e identidad cultural en la vida universitaria y urbana cotidiana.\n\nNo hay respuestas correctas ni incorrectas. Lo más importante es su experiencia personal.\n\nLa participación es voluntaria, anónima y destinada exclusivamente a fines académicos. Puede interrumpir el llenado en cualquier momento.\n\nTiempo estimado de respuesta: 10–15 minutos.",
    consent: {
      title: "Consentimiento informado",
      text: "Al continuar con este formulario, usted declara que:\n\n• Tiene 18 años o más;\n• Ha leído y comprendido la información anterior;\n• Acepta participar voluntariamente en esta investigación;\n• Es consciente de que su participación es anónima y que los datos serán utilizados exclusivamente con fines académicos;\n• Sabe que puede interrumpir su participación en cualquier momento, sin ninguna consecuencia.",
      agree: "He leído y acepto el consentimiento informado",
      required: "Debe aceptar el formulario de consentimiento para continuar.",
    },
    sections: [
      {
        title: "Sección 1 — Perfil y trayectoria",
        desc: "Esta sección busca comprender aspectos generales de su trayectoria y contexto cultural.",
      },
      {
        title: "Sección 2 — Llegada, expectativas y adaptación",
        desc: "Esta sección aborda sus primeras experiencias en Brasil y en Salvador.",
      },
      {
        title: "Sección 3 — Cultura, vida cotidiana y pertenencia",
        desc: "Esta sección aborda experiencias culturales y formas de pertenencia en la vida cotidiana.",
      },
      {
        title: "Sección 4 — Identidad, raza y relaciones interculturales",
        desc: "Las siguientes preguntas abordan experiencias relacionadas con la identidad cultural, la raza y la convivencia social.",
      },
      {
        title: "Sección 5 — Redes de apoyo y experiencia personal",
        desc: "Esta sección final aborda el apoyo social, el bienestar y las experiencias personales. Responda solo lo que se sienta cómodo/a compartiendo.",
      },
    ],
    questions: [
      {
        id: "q1",
        section: 0,
        type: "short",
        label: "¿Cuál es su país de origen?",
        required: true,
      },
      {
        id: "q2",
        section: 0,
        type: "short",
        label: "¿Cuántos años tiene?",
        required: true,
      },
      {
        id: "q3",
        section: 0,
        type: "radio",
        label: "¿Cómo identifica su género?",
        required: false,
        options: [
          "Mujer",
          "Hombre",
          "No binario",
          "Otro",
          "Prefiero no responder",
        ],
      },
      {
        id: "q4",
        section: 0,
        type: "short",
        label: "¿Qué idiomas habla?",
        required: true,
      },
      {
        id: "q5",
        section: 0,
        type: "short",
        label:
          "¿Pertenece a algún grupo étnico, pueblo o comunidad específica en su país? Si lo desea, explique.",
        required: false,
      },
      {
        id: "q6",
        section: 0,
        type: "short",
        label: "¿Cuál es su carrera en la UFBA?",
        required: true,
      },
      {
        id: "q7",
        section: 0,
        type: "radio",
        label: "¿Cuánto tiempo lleva viviendo en Salvador?",
        required: true,
        options: [
          "Menos de 6 meses",
          "Entre 6 meses y 1 año",
          "Entre 1 y 3 años",
          "Más de 3 años",
        ],
      },
      {
        id: "q8",
        section: 1,
        type: "radio",
        label:
          "Antes de venir a Brasil, ¿ya conocía algo sobre Salvador o sobre las culturas afrobahianas?",
        required: true,
        options: ["Sí, bastante", "Sí, un poco", "Muy poco", "No conocía"],
      },
      {
        id: "q9",
        section: 1,
        type: "long",
        label:
          "¿Cuáles eran sus expectativas sobre Brasil antes de llegar? ¿La experiencia en Salvador fue diferente a lo que imaginaba?",
        required: false,
      },
      {
        id: "q10",
        section: 1,
        type: "long",
        label:
          "¿Cómo ha sido su experiencia con el portugués hablado en Salvador? ¿Hay aspectos del idioma, el acento o la comunicación cotidiana que impacten su vida diaria?",
        required: false,
      },
      {
        id: "q11",
        section: 1,
        type: "radio",
        label:
          "¿Siente que su acento, idioma de origen o forma de hablar influye en la manera en que las personas interactúan con usted?",
        required: true,
        options: [
          "Sí, mucho",
          "Un poco",
          "No percibo diferencia",
          "Nunca lo he pensado",
        ],
      },
      {
        id: "q12",
        section: 1,
        type: "long",
        label: "Si lo desea, dé un ejemplo de cómo ocurre esto.",
        required: false,
      },
      {
        id: "q13",
        section: 2,
        type: "checkbox",
        label:
          "¿Qué aspectos de la vida cultural en Salvador le han marcado más hasta ahora? (Puede marcar más de una opción.)",
        required: false,
        options: [
          "Música",
          "Religión",
          "Danza",
          "Fiestas populares",
          "Gastronomía",
          "Relaciones sociales",
          "Cultura afrobahiana",
          "Universidad",
          "Lenguaje/jergas",
          "Moda/estilo",
        ],
      },
      {
        id: "q14",
        section: 2,
        type: "long",
        label:
          "¿Siente que vivir en Salvador ha cambiado sus hábitos culturales, su rutina o su forma de vivir el día a día? ¿Cómo?",
        required: false,
      },
      {
        id: "q15",
        section: 2,
        type: "long",
        label:
          "¿Ha habido momentos en Salvador en los que sintió proximidad cultural, identificación o familiaridad con prácticas, músicas, religiones, costumbres o experiencias afrobahianas?",
        required: false,
      },
      {
        id: "q16",
        section: 2,
        type: "long",
        label:
          "¿Hubo aspectos de la cultura bahiana o brasileña que le causaron extrañeza, incomodidad, sorpresa o choque cultural?",
        required: false,
      },
      {
        id: "q17",
        section: 2,
        type: "long",
        label:
          "¿Siente que existe una comunidad de estudiantes africanos en la UFBA? ¿Cómo percibe esa convivencia?",
        required: false,
      },
      {
        id: "q18",
        section: 2,
        type: "radio",
        label: "Usted suele convivir más con:",
        required: true,
        options: [
          "Personas de mi propio país",
          "Personas de otros países africanos",
          "Brasileños",
          "Un grupo mixto",
          "No tengo un grupo específico",
        ],
      },
      {
        id: "q19",
        section: 2,
        type: "long",
        label:
          "¿En qué espacios de la universidad o la ciudad siente más pertenencia, acogida o identificación cultural?",
        required: false,
      },
      {
        id: "q20",
        section: 3,
        type: "long",
        label:
          "¿Cómo fue percibir las relaciones raciales y culturales en Brasil en comparación con su país de origen?",
        required: false,
      },
      {
        id: "q21",
        section: 3,
        type: "radio",
        label:
          "¿Siente que las personas en Brasil tienen estereotipos o visiones simplificadas sobre los países africanos o el continente africano?",
        required: true,
        options: ["Frecuentemente", "A veces", "Raramente", "Nunca"],
      },
      {
        id: "q22",
        section: 3,
        type: "long",
        label:
          "Si lo desea, explique qué diferencias percibe entre esas visiones y la realidad de su experiencia cultural.",
        required: false,
      },
      {
        id: "q23",
        section: 3,
        type: "long",
        label:
          "¿Cómo percibe las relaciones entre estudiantes de países africanos y estudiantes brasileños negros en la universidad?",
        required: false,
      },
      {
        id: "q24",
        section: 3,
        type: "long",
        label:
          "¿Ha vivido experiencias marcantes de acogida, solidaridad, prejuicio, exotización, discriminación o malentendidos culturales en Salvador o en la UFBA? Si lo desea, relátelas.",
        required: false,
      },
      {
        id: "q25",
        section: 4,
        type: "long",
        label:
          "¿Qué es lo que más le ha ayudado a mantener su bienestar emocional viviendo lejos de su país de origen?",
        required: false,
      },
      {
        id: "q26",
        section: 4,
        type: "radio",
        label:
          "¿Las relaciones con otros estudiantes internacionales le ayudan a sentirse acogido(a) en Salvador?",
        required: true,
        options: ["Mucho", "Un poco", "Poco", "No"],
      },
      {
        id: "q27",
        section: 4,
        type: "long",
        label:
          "¿Hay alguna experiencia, reflexión o aspecto de su vida en Salvador que considere importante compartir y que no haya aparecido en las preguntas anteriores?",
        required: false,
      },
    ],
    nav: {
      next: "Siguiente sección",
      prev: "Sección anterior",
      submit: "Enviar respuestas",
      consent: "Continuar",
    },
    required_msg: "Este campo es obligatorio.",
    success_title: "¡Respuestas enviadas!",
    success_msg:
      "Gracias por su participación. Sus respuestas han sido registradas con éxito.",
    error_msg: "Se produjo un error al enviar. Por favor, inténtelo de nuevo.",
    sending: "Enviando...",
    optional: "opcional",
    other_placeholder: "Otro: describa aquí",
    progress: "Sección",
    of: "de",
  },
};

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydT_zGDT91hnC869-9PwzTi-Y38myxdgSo8qZCSCPs-sfAl6ckWigeI5Od9pzkorwk/exec";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #0d0d0d; --surface: #161616; --surface2: #1e1e1e; --border: #2a2a2a;
    --accent: #c9a96e; --accent2: #e8c98a; --text: #e8e3dc; --text-muted: #7a7268;
    --text-dim: #4a4540; --error: #e06060; --success: #6ab887; --r: 6px;
  }
  body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; min-height: 100vh; }
  .lang-screen { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; position: relative; overflow: hidden; }
  .lang-screen::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,110,0.08) 0%, transparent 70%); pointer-events: none; }
  .lang-logo { font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 2.5vw, 1.4rem); color: var(--accent); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.5rem; text-align: center; }
  .lang-divider { width: 40px; height: 1px; background: var(--accent); margin: 1.5rem auto; opacity: 0.5; }
  .lang-title { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 400; text-align: center; line-height: 1.3; max-width: 640px; margin-bottom: 0.8rem; }
  .lang-subtitle { color: var(--text-muted); font-size: 0.9rem; text-align: center; margin-bottom: 3rem; letter-spacing: 0.05em; }
  .lang-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; width: 100%; max-width: 480px; }
  .lang-btn { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 1.4rem 1.2rem; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 0.6rem; transition: all 0.2s ease; color: var(--text); }
  .lang-btn:hover { border-color: var(--accent); background: var(--surface2); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,169,110,0.12); }
  .lang-btn .flag { font-size: 2rem; }
  .lang-btn .lname { font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 500; }
  .form-wrap { max-width: 720px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }
  .form-header { padding: 3rem 0 2rem; border-bottom: 1px solid var(--border); margin-bottom: 2.5rem; }
  .form-header-top { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
  .back-btn { background: none; border: 1px solid var(--border); border-radius: 4px; color: var(--text-muted); padding: 0.4rem 0.8rem; font-size: 0.8rem; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: all 0.15s; }
  .back-btn:hover { border-color: var(--accent); color: var(--accent); }
  .form-title { font-family: 'Playfair Display', serif; font-size: clamp(1.3rem, 3vw, 1.8rem); font-weight: 400; line-height: 1.35; margin-bottom: 1.2rem; }
  .form-desc { color: var(--text-muted); font-size: 0.88rem; line-height: 1.7; white-space: pre-line; }
  .progress-bar-wrap { margin-bottom: 2.5rem; }
  .progress-label { display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.6rem; letter-spacing: 0.04em; text-transform: uppercase; }
  .progress-track { height: 2px; background: var(--border); border-radius: 99px; overflow: hidden; }
  .progress-fill { height: 100%; background: var(--accent); border-radius: 99px; transition: width 0.4s ease; }
  .consent-box { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 2rem; margin-bottom: 2rem; }
  .consent-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 1rem; color: var(--accent); }
  .consent-text { font-size: 0.85rem; line-height: 1.8; color: var(--text-muted); white-space: pre-line; margin-bottom: 1.5rem; }
  .consent-check { display: flex; align-items: flex-start; gap: 0.8rem; cursor: pointer; }
  .consent-check input[type="checkbox"] { width: 18px; height: 18px; flex-shrink: 0; margin-top: 2px; accent-color: var(--accent); cursor: pointer; }
  .consent-check-label { font-size: 0.88rem; line-height: 1.5; }
  .consent-error { color: var(--error); font-size: 0.8rem; margin-top: 0.8rem; }
  .section-header { margin-bottom: 2rem; }
  .section-title { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 400; color: var(--accent); margin-bottom: 0.5rem; }
  .section-desc { font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; }
  .question-block { margin-bottom: 2rem; animation: fadeUp 0.3s ease both; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  .q-label { font-size: 0.92rem; line-height: 1.55; margin-bottom: 0.8rem; font-weight: 500; }
  .q-label .req { color: var(--accent); margin-left: 3px; }
  .q-label .opt { color: var(--text-dim); font-size: 0.78rem; font-weight: 400; margin-left: 6px; }
  input[type="text"], textarea { width: 100%; background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 0.75rem 1rem; color: var(--text); font-family: 'DM Sans', sans-serif; font-size: 0.9rem; transition: border-color 0.15s; outline: none; resize: vertical; }
  input[type="text"]:focus, textarea:focus { border-color: var(--accent); }
  input[type="text"].error, textarea.error { border-color: var(--error); }
  textarea { min-height: 110px; }
  .radio-group, .check-group { display: flex; flex-direction: column; gap: 0.55rem; }
  .radio-item, .check-item { display: flex; align-items: center; gap: 0.7rem; background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 0.7rem 1rem; cursor: pointer; transition: all 0.15s; font-size: 0.88rem; }
  .radio-item:hover, .check-item:hover { border-color: var(--accent); }
  .radio-item.selected, .check-item.selected { border-color: var(--accent); background: rgba(201,169,110,0.07); color: var(--accent2); }
  .radio-item input, .check-item input { accent-color: var(--accent); cursor: pointer; }
  .q-error { color: var(--error); font-size: 0.78rem; margin-top: 0.4rem; }
  .nav-row { display: flex; justify-content: space-between; align-items: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border); gap: 1rem; }
  .btn { font-family: 'DM Sans', sans-serif; font-size: 0.88rem; font-weight: 500; border-radius: var(--r); padding: 0.75rem 1.6rem; cursor: pointer; transition: all 0.2s ease; letter-spacing: 0.03em; }
  .btn-ghost { background: none; border: 1px solid var(--border); color: var(--text-muted); }
  .btn-ghost:hover { border-color: var(--text-muted); color: var(--text); }
  .btn-primary { background: var(--accent); border: 1px solid var(--accent); color: #0d0d0d; font-weight: 600; }
  .btn-primary:hover { background: var(--accent2); border-color: var(--accent2); }
  .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
  .success-screen { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; }
  .success-icon { font-size: 3rem; margin-bottom: 1.5rem; }
  .success-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 400; margin-bottom: 1rem; color: var(--accent); }
  .success-msg { color: var(--text-muted); font-size: 0.9rem; max-width: 400px; line-height: 1.6; }
  @media (max-width: 480px) { .lang-grid { grid-template-columns: 1fr; max-width: 280px; } .nav-row { flex-direction: column-reverse; } .btn { width: 100%; text-align: center; } }
`;

export default function App() {
  const [lang, setLang] = useState(null);
  const [phase, setPhase] = useState("lang");
  const [consentChecked, setConsentChecked] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [section, setSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const topRef = useRef(null);

  const t = lang ? T[lang] : null;
  const NUM_SECTIONS = 5;

  useEffect(() => {
    const el = document.getElementById("survey-style");
    if (!el) {
      const s = document.createElement("style");
      s.id = "survey-style";
      s.textContent = styles;
      document.head.appendChild(s);
    }
  }, []);

  const scrollTop = () => {
    if (topRef.current) topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const selectLang = (code) => {
    setLang(code);
    setPhase("consent");
    setAnswers({});
    setErrors({});
    setSection(0);
    setConsentChecked(false);
  };

  const handleConsent = () => {
    if (!consentChecked) {
      setConsentError(true);
      return;
    }
    setPhase("form");
    scrollTop();
  };

  const sectionQuestions = (s) => t.questions.filter((q) => q.section === s);

  const setAnswer = (id, val) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
    setErrors((prev) => {
      const n = { ...prev };
      delete n[id];
      return n;
    });
  };

  const toggleCheckbox = (id, opt) => {
    const current = answers[id] || [];
    const next = current.includes(opt)
      ? current.filter((o) => o !== opt)
      : [...current, opt];
    setAnswer(id, next);
  };

  const validateSection = () => {
    const qs = sectionQuestions(section);
    const newErrors = {};
    qs.forEach((q) => {
      if (!q.required) return;
      const val = answers[q.id];
      if (!val || (Array.isArray(val) && val.length === 0) || val === "")
        newErrors[q.id] = t.required_msg;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextSection = () => {
    if (!validateSection()) {
      scrollTop();
      return;
    }
    if (section < NUM_SECTIONS - 1) {
      setSection((s) => s + 1);
      scrollTop();
    } else submitForm();
  };

  const prevSection = () => {
    setSection((s) => s - 1);
    scrollTop();
  };

  const submitForm = async () => {
    setSending(true);
    const payload = {
      lang,
      timestamp: new Date().toISOString(),
      answers: t.questions.reduce((acc, q) => {
        acc[q.id + "_" + q.label.slice(0, 40)] = Array.isArray(answers[q.id])
          ? (answers[q.id] || []).join("; ")
          : answers[q.id] || "";
        return acc;
      }, {}),
    };
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setPhase("success");
    } catch (e) {
      setPhase("error");
    } finally {
      setSending(false);
    }
  };

  if (phase === "lang")
    return (
      <div className="lang-screen">
        <div className="lang-logo">UFBA — Pesquisa Acadêmica</div>
        <div className="lang-divider" />
        <h1 className="lang-title">Selecione o idioma do formulário</h1>
        <p className="lang-subtitle">
          Select language · Sélectionnez la langue · Seleccione el idioma
        </p>
        <div className="lang-grid">
          {LANGS.map((l) => (
            <button
              key={l.code}
              className="lang-btn"
              onClick={() => selectLang(l.code)}
            >
              <span className="flag">{l.flag}</span>
              <span className="lname">{l.label}</span>
            </button>
          ))}
        </div>
      </div>
    );

  if (phase === "success")
    return (
      <div className="success-screen">
        <div className="success-icon">✦</div>
        <h2 className="success-title">{t.success_title}</h2>
        <p className="success-msg">{t.success_msg}</p>
      </div>
    );

  if (phase === "error")
    return (
      <div className="success-screen">
        <div className="success-icon" style={{ color: "var(--error)" }}>
          ⚠
        </div>
        <h2 className="success-title" style={{ color: "var(--error)" }}>
          {t.error_msg}
        </h2>
        <button
          className="btn btn-primary"
          style={{ marginTop: "1.5rem" }}
          onClick={() => {
            setPhase("form");
            setSending(false);
          }}
        >
          ← Voltar
        </button>
      </div>
    );

  const qs = sectionQuestions(section);
  const progressPct = ((section + 1) / NUM_SECTIONS) * 100;

  return (
    <div className="form-wrap" ref={topRef}>
      <div className="form-header">
        <div className="form-header-top">
          <button className="back-btn" onClick={() => setPhase("lang")}>
            ← {LANGS.find((l) => l.code === lang)?.flag} {lang.toUpperCase()}
          </button>
        </div>
        <h1 className="form-title">{t.formTitle}</h1>
        <p className="form-desc">{t.formDesc}</p>
      </div>

      {phase === "consent" && (
        <>
          <div className="consent-box">
            <div className="consent-title">{t.consent.title}</div>
            <div className="consent-text">{t.consent.text}</div>
            <label className="consent-check">
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={(e) => {
                  setConsentChecked(e.target.checked);
                  setConsentError(false);
                }}
              />
              <span className="consent-check-label">{t.consent.agree}</span>
            </label>
            {consentError && (
              <div className="consent-error">{t.consent.required}</div>
            )}
          </div>
          <div className="nav-row" style={{ justifyContent: "flex-end" }}>
            <button className="btn btn-primary" onClick={handleConsent}>
              {t.nav.consent} →
            </button>
          </div>
        </>
      )}

      {phase === "form" && (
        <>
          <div className="progress-bar-wrap">
            <div className="progress-label">
              <span>
                {t.progress} {section + 1} {t.of} {NUM_SECTIONS}
              </span>
              <span>{Math.round(progressPct)}%</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          <div className="section-header">
            <div className="section-title">{t.sections[section].title}</div>
            <div className="section-desc">{t.sections[section].desc}</div>
          </div>

          {qs.map((q, i) => (
            <div
              key={q.id}
              className="question-block"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="q-label">
                {q.label}
                {q.required && <span className="req">*</span>}
                {!q.required && <span className="opt">({t.optional})</span>}
              </div>

              {q.type === "short" && (
                <input
                  type="text"
                  className={errors[q.id] ? "error" : ""}
                  value={answers[q.id] || ""}
                  onChange={(e) => setAnswer(q.id, e.target.value)}
                />
              )}
              {q.type === "long" && (
                <textarea
                  className={errors[q.id] ? "error" : ""}
                  value={answers[q.id] || ""}
                  onChange={(e) => setAnswer(q.id, e.target.value)}
                  rows={4}
                />
              )}
              {q.type === "radio" && (
                <div className="radio-group">
                  {q.options.map((opt) => (
                    <label
                      key={opt}
                      className={`radio-item ${
                        answers[q.id] === opt ? "selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={opt}
                        checked={answers[q.id] === opt}
                        onChange={() => setAnswer(q.id, opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              )}
              {q.type === "checkbox" && (
                <div className="check-group">
                  {q.options.map((opt) => (
                    <label
                      key={opt}
                      className={`check-item ${
                        (answers[q.id] || []).includes(opt) ? "selected" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={(answers[q.id] || []).includes(opt)}
                        onChange={() => toggleCheckbox(q.id, opt)}
                      />
                      {opt}
                    </label>
                  ))}
                  <label
                    className={`check-item ${
                      (answers[q.id] || []).some((o) => !q.options.includes(o))
                        ? "selected"
                        : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={(answers[q.id] || []).some(
                        (o) => !q.options.includes(o)
                      )}
                      onChange={(e) => {
                        if (!e.target.checked)
                          setAnswer(
                            q.id,
                            (answers[q.id] || []).filter((o) =>
                              q.options.includes(o)
                            )
                          );
                      }}
                    />
                    <input
                      type="text"
                      placeholder={t.other_placeholder}
                      style={{
                        border: "none",
                        background: "transparent",
                        outline: "none",
                        flex: 1,
                        fontSize: "0.88rem",
                        color: "var(--text)",
                        fontFamily: "DM Sans, sans-serif",
                      }}
                      value={
                        (answers[q.id] || []).find(
                          (o) => !q.options.includes(o)
                        ) || ""
                      }
                      onChange={(e) => {
                        const val = e.target.value;
                        const base = (answers[q.id] || []).filter((o) =>
                          q.options.includes(o)
                        );
                        setAnswer(q.id, val ? [...base, val] : base);
                      }}
                    />
                  </label>
                </div>
              )}
              {errors[q.id] && <div className="q-error">{errors[q.id]}</div>}
            </div>
          ))}

          <div className="nav-row">
            {section > 0 ? (
              <button className="btn btn-ghost" onClick={prevSection}>
                ← {t.nav.prev}
              </button>
            ) : (
              <span />
            )}
            <button
              className="btn btn-primary"
              onClick={nextSection}
              disabled={sending}
            >
              {sending
                ? t.sending
                : section < NUM_SECTIONS - 1
                ? `${t.nav.next} →`
                : t.nav.submit}
            </button>
          </div>
        </>
      )}
    </div>
  );
}