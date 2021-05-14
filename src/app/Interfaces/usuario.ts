import { Persona } from "./persona";

export interface Usuario extends Persona {
  usuario: string;
  clave: string;
}
