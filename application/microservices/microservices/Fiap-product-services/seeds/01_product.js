export const seed = knex =>
  // Deletes ALL existing entries
  knex("product")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("product").insert([
        {
          id: 1,
          title: "Geladeira brastemp frost free",
          description:
            "Geladeira Brastemp Frost Free Evox - Inverse 540,6L Ative BRO80 AK com as melhores condições você encontra no site do Magalu. Confira!",
          sort: "eletrodoméstico",
          price: 5496.0,
          category: "ED",
          visited: 0,
          length: "20",
          weight: "15",
          height: "20",
          width: "20",
          depth: "0",
          image:
            "https://a-static.mlcdn.com.br/618x463/geladeira-refrigerador-electrolux-frost-free-duplex-371l-dfn41-branca/magazineluiza/013080601/939410e836a1dac2eb3d039c488026d5.jpg",
        },
        {
          id: 2,
          title: "iPhone XR Apple 64GB Preto",
          description:
            "iPhone XR Apple 64GB Preto 6,1” 12MP iOS com as melhores condições você encontra no site do Magalu. Confira!",
          sort: "celulares",
          price: 3719.07,
          category: "TE",
          visited: 0,
          length: "20",
          weight: "1",
          height: "20",
          width: "20",
          depth: "0",
          image:
            "https://a-static.mlcdn.com.br/618x463/iphone-xr-apple-64gb-preto-61-12mp-ios/magazineluiza/155610600/046ca7441970f5677a701277854122db.jpg",
        },
        {
          id: 3,
          title: "Bicicleta Aro 29 Mountain Bike Caloi",
          description:
            "Bicicleta Aro 29 Mountain Bike Caloi - Velox Freio V-Brake 21 Marchas com as melhores condições você encontra no site do Magalu. Confira!",
          sort: "esporte",
          price: 1044.91,
          category: "ES",
          visited: 0,
          length: "20",
          weight: "6",
          height: "20",
          width: "20",
          depth: "0",
          image:
            "https://a-static.mlcdn.com.br/618x463/bicicleta-aro-29-21v-shimano-dropp-z3-tam-15-suspensao-preto-azul-e-rosa-lubrificante-cera-120-ml/rolmart5/9726289323/3f0df3cb307bc437077ab021c55de05b.jpg",
        },
      ])
    );
