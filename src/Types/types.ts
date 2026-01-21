enum VanTypes {
  simple = "simple",
  rugged = "rugged",
  luxury = "luxury",
}

export interface Vans {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: VanTypes;
  hostId?: string;
}
