
export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
}

export type ActionItem = {
  id: string;
  text: string;
  dueby: Date;
  ownerid: string;
  complete: boolean;
}