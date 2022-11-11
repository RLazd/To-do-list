import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faCopyright, faLock} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm?: FormGroup;
    image = 'https://picsum.photos/id/237/200/300';
    faLock = faLock;
    faCopyright = faCopyright;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]], //formControlName in html. validators []
            password: ['', [Validators.required]],
            remember: true,
        });
    }

    login(): void {
        this.loginForm?.markAllAsTouched();
        if (this.loginForm?.valid) {
            //login
        }
        //console.log('login form value', this.loginForm?.value);
    }

    forgotPassword(): void {
        //...
    }

}
