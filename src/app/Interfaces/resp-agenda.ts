import { Contacto } from "./contacto";

export interface RespAgenda {
  success: boolean;
  message: string;
  data?: Contacto[];
}

