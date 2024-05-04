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
            img: "https://images.unsplash.com/photo-1527684650226-26e8f3b6e6e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Greece",
            description: "Greece is a country in southeastern Europe.",
            img: "https://images.unsplash.com/photo-1606783415859-0d3b3b8e6c5a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Egypt",
            description: "Egypt is a country in North Africa.",
            img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            img: "https://images.unsplash.com/photo-1560184897-7a3b0d9e6d4d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Istanbul",
            description: "Istanbul is a city in Turkey.",
            img: "https://images.unsplash.com/photo-1560184897-7a3b0d9e6d4d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Kyoto",
            description: "Kyoto is a city in Japan.",
            img: "https://images.unsplash.com/photo-1560184897-7a3b0d9e6d4d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            img: "https://images.unsplash.com/photo-1560184897-7a3b0d9e6d4d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Tokyo",
            description: "Tokyo is the capital city of Japan.",
            img: "https://images.unsplash.com/photo-1560184897-7a3b0d9e6d4d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "London",
            description: "London is the capital city of the United Kingdom.",
            img: "https://images.unsplash.com/photo-1560184897-7a3b0d9e6d4d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ],
    timePoints: ["1500 AD", "1600 AD", "1700 AD", "1800 AD", "1900 AD"],
  },
];
