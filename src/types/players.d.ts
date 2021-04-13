type Player = {
  displayName: string;
  pictureUrl: string;
  cards: CardConnection;
};

type Card = {
  rarity: string;
  price: string;
  tradeableStatus: string;
  publicSingleBuyOfferMinPrice: {
    amount: string;
  };
  latestAuction: {
    bestBid: {
      amount: string;
    };
  };
  user: {
    nickname: string;
  };
  userOwner: {
    price: string;
  };
};

type CardConnection = {
  edges: Array<CardEdge>;
  nodes: Array<Card>;
  pageInfo: PageInfo;
};

type CardEdge = {
  cursor: string;
  node: Card;
};

type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: boolean;
};
