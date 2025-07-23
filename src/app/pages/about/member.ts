export interface Member {
    id: number;
    name: string;
    photo: string;
    taille: string;
    age: number;
    specialite: string;
    performances: string[];
  }

  export const members: Member[] = [
    {
      id: 1,
      name: 'Antoine Buresi',
      photo: 'assets/antoine.jpg',
      taille: '1m80',
      age: 21,
      specialite: 'Artiste du spectacle vivant, spécialisé dans les disciplines acrobatique et parkour',
      performances: [
        'Participation à la cérémonie de clôture des Jeux Olympiques de Paris 2024',
        'Collaboration avec le cirque du soleil à travers la création de shows mêlant parkour et performance scénique',
        'Testeur officiel pour les deux dernières saisons de Ninja Warrior',
      ]
    },
    {
      id: 2,
      name: 'Victor Rodrigues',
      photo: 'assets/victor.jpg',
      taille: '1m67',
      age: 27,
      specialite: 'Préparateur physique et éducateur spécialisé diplômé d\'une licence en entraînement sportif, d\'un master en éducation et motricité, ainsi que d\'une licence d\'éducateur spécialisé',
      performances: [
        'Athlète de Street workout depuis plus de 10 ans, avec une spécialisation poussée en handbalancing (équilibre sur les mains)',
        'Testeur et participant des championnats du monde Ninja Warrior',
        'Participation aux championnats de France de Street workout',
        'Coordination de spectacles urbains'
      ]
    },
    {
      id: 3,
      name: 'Ismail Hamaimou',
      photo: 'assets/ismail.jpg',
      taille: '1m70',
      age: 25,
      specialite: 'Athlète de parkour et cascadeur depuis plus de 10 ans, avec une spécialisation poussée en acrobaties',
      performances: [
        'Doublure de parkour dans une publicité "La vache qui rit"',
        'Doublure dans un film cinématographique marocain "Burning Casablanca"',
        'Participation aux championnats de France de Parkour',
        '3ème place aux championnats du maroc de parkour en 2020'
      ]
    },
    {
        id: 4,
        name: 'Enzo Marcat',
        photo: 'assets/enzo.jpg',
        taille: '1m70',
        age: 20,
        specialite: 'athlète de parkour en speedrun et entraîneur de gym et parkour',
        performances: [
          'Représentation de la france aux championnats du monde de parkour au FISE de Montpellier',
          'Participation à Ninja Warrior saison 7',
          'Participation aux championnats de France de Parkour',
        ]
      },
      {
        id: 5,
        name: 'Hervé',
        photo: 'assets/herve.jpg',
        taille: '1m64',
        age: 27,
        specialite: 'Acrobate & athlète Freerun diplômé d\'un BPJEPS Activités Gymniques Acrobatiques.',
        performances: [
          'Participation aux championnats de France de Parkour',
          'Participation à Ninja Warrior',
        ]
      },
      {
        id: 6,
        name: 'Tristan Vignot',
        photo: 'assets/tristan.jpg',
        taille: '1m70',
        age: 22,
        specialite: 'Athlète, acrobate et étudiant en 3 eme année de staps, filière éducation motricité et sportive',
        performances: [
          'Participation aux championnats de France de Parkour',
          'Pratiquant de nombreux sports, surtout des sports extrêmes: ski, escalade, parkour, cliff diving,etc…',
        ]
      }
  ];
