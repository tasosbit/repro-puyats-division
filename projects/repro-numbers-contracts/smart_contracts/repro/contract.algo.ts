import { Contract } from '@algorandfoundation/algorand-typescript'

export class Repro extends Contract {
  public hello(name: string): string {
    return `Hello, ${name}`
  }
}
