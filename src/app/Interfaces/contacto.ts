import { Persona } from "./persona";

export interface Contacto extends Persona { 
  direccion: string;
  telefono: number;
}
