export interface UserCredentials {
  username: string;
  password: string;
  email: string;
}

export interface JwtPayload {
  username: string;
  id: string;
}

export interface TokenStructure {
  token: string;
}

export interface ErrorResponseStructure {
  error: string;
}

export interface RelationShipRequestStructure {
  userId: string;
  user2Id: string;
  relationtype: string;
}

export interface RelationshipResponseStructure {
  response: string;
}
