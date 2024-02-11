import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { img_paths } from '@constants';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [StyleClassModule, CheckboxModule, InputTextModule, ButtonModule, RippleModule, ImageModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export default class LoginComponent {
	imgBackground = img_paths.backgroundLogin;
}
