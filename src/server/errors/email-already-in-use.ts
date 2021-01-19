import { DomainError } from "./domain-error";

export class EmailAlreadyInUseError extends Error implements DomainError {
  statusCode: number = 400;
  
  constructor(email: string) {
    super(`The e-mail "${email}" already in use`);
    this.name = "EmailAlreadyInUse";
  }
}
