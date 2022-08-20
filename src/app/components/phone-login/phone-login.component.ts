import { Component, OnInit } from '@angular/core';  
import { PhoneNumber } from 'src/app/models/player.model';
import { WindowService } from 'src/app/window.service';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";

@Component({
  selector: 'phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {

  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;

  user: any;

  constructor(private win: WindowService) { }

  ngOnInit() {
    const auth = getAuth();
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container', {
        //   'size': 'invisible',
        //   'callback': (response) => {
        //     // reCAPTCHA solved, allow signInWithPhoneNumber.
        //     onSignInSubmit();
        }, auth)

    this.windowRef.recaptchaVerifier.render()
  }


  sendLoginCode() {

    // const appVerifier = this.windowRef.recaptchaVerifier;

    // const num = this.phoneNumber.e164;
    // const auth = getAuth();

const phoneNumber = this.phoneNumber;
const appVerifier = this.windowRef.recaptchaVerifier;

const auth = getAuth();
   signInWithPhoneNumber(auth, phoneNumber.e164, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }


}
