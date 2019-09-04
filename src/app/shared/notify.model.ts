export class Notify {
  public type: string;
  public message: string;
  public fired: boolean;
 
  constructor(type: string, message: string, fired: boolean){
    this.type = type;
    this.message = message;
    this.fired = fired;
  }
}