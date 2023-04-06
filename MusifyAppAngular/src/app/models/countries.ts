export class Countries {
  id: number;
  name: string;
  iso: string;


  constructor(iso: string) {
    this.iso = iso;
  }
}
