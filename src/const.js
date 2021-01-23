export const cardlist = [
  { name: "Amex Centurion", fee: 5000, type: "Personal", issuer: "American Express", image: "./static/amexcenturion.jpg" },
  { name: "Amex Gold", fee: 250, type: "Personal", issuer: "American Express", image: "./static/amexgold.png" },
  { name: "Amex Platinum", fee: 550, type: "Personal", issuer: "American Express", image: "./static/amexplat.png" },
  { name: "BoA Cash Rewards", fee: 0, type: "Personal", issuer: "Bank of America", image: "./static/boacash.png" },
  { name: "BoA Travel Rewards", fee: 0, type: "Personal", issuer: "Bank of America", image: "./static/boatravel.png" },
  { name: "Chase Freedom Flex", fee: 0, type: "Personal", issuer: "Chase", image: "./static/cff.jpg" },
  { name: "Chase Freedom Unlimited", fee: 0, type: "Personal", issuer: "Chase", image: "./static/cfu.jpg" },
  { name: "Chase Ink Cash", fee: 0, type: "Business", issuer: "Chase", image: "./static/cic.png" },
  { name: "Chase Ink Preferred", fee: 95, type: "Business", issuer: "Chase", image: "./static/cip.png" },
  { name: "Chase Sapphire Preferred", fee: 95, type: "Business", issuer: "Chase", image: "./static/csp.png" },
  { name: "Chase Sapphire Reserve", fee: 550, type: "Personal", issuer: "Chase", image: "./static/csr.png" },
  { name: "JetBlue Plus", fee: 99, type: "Personal", issuer: "Barclaycard", image: "./static/jbp.jpg" },
];

export const CardTypes = {
  ALL_TYPES: "All Types",
  BUSINESS: "Business",
  PERSONAL: "Personal",
};

export const Issuers = {
  ALL_ISSUERS: "All Issuers",
  AMEX: "American Express",
  BOA: "Bank of America",
  CHASE: "Chase",
  BARC: "Barclaycard",
};

export const AnnualFees = {
  ALL_FEES: "Any Annual Fee",
  ZERO: "None",
  LESSTHAN300: "<$300",
  MORETHAN300: ">$300",
};

export const SortTypes = {
  NAME: "Name (A to Z)",
  BONUS: "Bonus (Highest to Lowest)",
  FEE: "Annual Fee (Lowest to Highest)",
}