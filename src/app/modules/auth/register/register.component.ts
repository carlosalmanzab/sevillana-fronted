import { Component } from '@angular/core';
import { img_paths } from '@constants';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [
		StyleClassModule,
		InputTextModule,
		ButtonModule,
		RippleModule,
		ImageModule,
		InputGroupModule,
		InputGroupAddonModule,
		InputNumberModule,
		DropdownModule,
		PasswordModule,
		DividerModule
	],
	templateUrl: './register.component.html',
	styleUrl: './register.component.scss'
})
export default class RegisterComponent {
	imgBackground = img_paths.backgroundRegister;
	roles = [{ rol: 'empleado' }, { rol: 'administrador' }, { rol: 'desarrollador' }];
}
