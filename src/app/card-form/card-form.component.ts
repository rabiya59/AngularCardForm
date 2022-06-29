import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  users: any[] = []
  user: FormGroup = this.forBuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required], 
    email: ['', Validators.required],
    entreprise: ['', Validators.required],
    telephone: ['', Validators.required]
  })
  submitted: boolean = false;

  constructor(private forBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public addCard(): void {
    this.users.push(this.user.value)
    this.user.reset()
    this.submitted = false
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.user.valid) {
      this.addCard()
    } else {
      console.log('form invalide')
    }
  }
  get form (){
    return this.user.controls
  }
}
