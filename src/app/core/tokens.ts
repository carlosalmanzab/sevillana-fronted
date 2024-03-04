import { IArticuloService } from '@shared/services/iArticuloService.service';
import { InjectionToken } from '@angular/core';

export const I_ARTICULO_SERVICE_TOKEN = new InjectionToken<IArticuloService>('IArticuloService');
