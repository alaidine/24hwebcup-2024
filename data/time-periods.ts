export function getPeriodByName(name: string): TimePeriod | undefined {
  return TimePeriods.find((period) => period.name === name);
}

export const TimePeriods: TimePeriod[] = [
  {
    name: "Ancient",
    start: "3000 BC",
    end: "500 AD",
    backgroundImg:
      "https://images.unsplash.com/photo-1625396706497-69135c082ab4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    foregroundImg:
      "https://images.unsplash.com/photo-1567962443865-54d86d79e090?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The ancient period is the earliest period in history.",
    locations: [
      {
        name: "Rome",
        description: "Rome is the capital city of Italy.",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Greece",
        description: "Greece is a country in southeastern Europe.",
        img: "https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Egypt",
        description: "Egypt is a country in North Africa.",
        img: "https://plus.unsplash.com/premium_photo-1664303467567-17891a27998a?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    timePoints: ["3000 BC", "2000 BC", "1000 BC", "500 BC", "0 AD"],
  },
  {
    name: "Medieval",
    start: "500 AD",
    end: "1500 AD",
    backgroundImg:
      "https://images.unsplash.com/photo-1553986782-9f6de60b51b4?q=80&w=1449&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    foregroundImg:
      "https://images.unsplash.com/photo-1600081728723-c8aa2ee3236a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The medieval period is the period between ancient and modern history.",
    locations: [
      {
        name: "Paris",
        description: "Paris is the capital city of France.",
        img: "https://plus.unsplash.com/premium_photo-1694475679694-1fb186fa7cac?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Istanbul",
        description: "Istanbul is a city in Turkey.",
        img: "https://images.unsplash.com/photo-1559081650-12d1555f66a7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Kyoto",
        description: "Kyoto is a city in Japan.",
        img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    timePoints: ["500 AD", "1000 AD", "1200 AD", "1300 AD", "1400 AD"],
  },
  {
    name: "Modern",
    start: "1500 AD",
    end: "2022 AD",
    backgroundImg:
      "https://images.unsplash.com/photo-1574787930511-8cc7a3dd36ca?q=80&w=1539&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    foregroundImg:
      "https://images.unsplash.com/photo-1562616092-74fc0205a813?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The modern period is the period from the Renaissance to the present.",
    locations: [
      {
        name: "New York",
        description: "New York is a city in the United States.",
        img: "https://images.unsplash.com/photo-1474027867902-ad216abcc1c6?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Tokyo",
        description: "Tokyo is the capital city of Japan.",
        img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "London",
        description: "London is the capital city of the United Kingdom.",
        img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    timePoints: ["1500 AD", "1600 AD", "1700 AD", "1800 AD", "1900 AD"],
  },
];
