import { Component, OnInit,EventEmitter, Input,Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input('label') label: string;
  @Input('placeholder') placeholder: string = "";
  @Input('type') type: string;
  @Input('value') value: string;
  @Input('maxlength') maxlength: number;
  @Input('disabled') disabled: boolean;
  @Input('required') required: boolean;
  @Input('pattern') pattern: RegExp;
  @Input('patternLock') patternLock: boolean = false;
  @Input('errorMessage') errorMessage: String;
  @Input('errorPattern') errorPattern: String;
  @Input() inputModel: any;

  @Output('onValueUpdate') onValueUpdate: EventEmitter<number> = new EventEmitter<number>();
  @Output() inputModelChange = new EventEmitter<string>();

  @Input('childsMarkAsTouchedTrigger') childsMarkAsTouchedTrigger: Subject<boolean>;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      inputField: new FormControl('')
    });
    this.updateRequired();

    setTimeout(() => {
      if (this.disabled === true) {

        this.form.get('inputField').disable();
      } else {
        this.form.get('inputField').enable();
      }
    }, 500);
    // if (this.disabled === true) {
    //   this.form.get('inputField').disable();
    // }
    if (this.type) {
      this.type = this.type;
    } else {
      this.type = "text";
    }

    if (this.childsMarkAsTouchedTrigger) {
      this.childsMarkAsTouchedTrigger.subscribe(() => {
        // console.log(this.form.get('inputField').value);
        this.form.get('inputField').markAsTouched();
      })
    }
  }

  ngOnChanges(value: any) {
    if (value.value) {
      if (this.required) {
        this.form = this.formBuilder.group({
          inputField: [this.value, [Validators.required, Validators.pattern(this.pattern)]]
        })
      } else {
        this.form = this.formBuilder.group({
          inputField: [this.value, [Validators.pattern(this.pattern)]]
        })
      }

      if (this.disabled === true) {
        this.form.get('inputField').disable();
      } else {
        this.form.get('inputField').enable();
      }
    }

    if (value.disabled) {
      this.disabled = value.disabled.currentValue;
      if (this.disabled === true) {
        this.form.get('inputField').disable();
      } else {
        this.form.get('inputField').enable();
      }
    }

    if (value.required) {
      // this.required = value.required.currentValue;
      this.updateRequired();
    }
  }

  private updateRequired() {
    this.form.get('inputField').setErrors(null);
    if (this.required) {
      // if (this.placeholder != '') {
      //   if (this.placeholder.indexOf('*') == -1) {
      //     this.placeholder = this.placeholder + "*";
      //   }
      // }
      this.form.get('inputField').setValidators([Validators.required, Validators.pattern(this.pattern)]);
    } else {
      // if (this.placeholder) {
      //   if (this.placeholder.indexOf('*') > -1) {
      //     this.placeholder = this.placeholder.replace('*', '');
      //   }
      // }
      this.form.get('inputField').setValidators([Validators.pattern(this.pattern)]);
    }
  }

  somethingChanged(event: any) {
    this.onValueUpdate.emit(event.target.value);
  }

  checkValidate() {
    this.form.get('inputField').updateValueAndValidity();
    this.form.get('inputField').markAsTouched();
    if (this.pattern && this.required) {
      return !this.form.get('inputField').hasError('required') && !this.form.get('inputField').hasError('pattern');
    } else if (this.pattern) {
      return !this.form.get('inputField').hasError('pattern');
    } else if (this.required) {
      return !this.form.get('inputField').hasError('required');
    }
  }

  public onValueChangeValidate(event = null) {
    if (event != null && this.pattern && this.patternLock) {
      // console.log(event);

      var keycode = event.keyCode;

      var valid =
        (keycode > 47 && keycode < 58) || // number keys
        keycode == 32 || keycode == 13 || // spacebar & return key(s) (if you want to allow carriage returns)
        (keycode > 64 && keycode < 91) || // letter keys
        (keycode > 95 && keycode < 112) || // numpad keys
        (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
        (keycode > 218 && keycode < 223);   // [\]' (in order)

      if (valid) {
        // let pattern = new RegExp(event.target.attributes.pattern.value);
        let pattern = new RegExp(this.pattern);
        // console.log('pattern = ', this.pattern);

        var value = event.target.value,
          idx = event.target.selectionStart,
          key = event.key;
        // console.log('value(before) = ', value);
        value = value.slice(0, idx) + key + value.slice(idx + Math.abs(0));
        // console.log('idx = ', idx);
        // console.log('value(after) = ', value);

        // if (pattern.test(value)) {
        //   console.log('match');
        // } else {
        //   console.log('mis-match');
        // }

        if (!pattern.test(value)) {
          //event.preventDefault();
          event.stopPropagation();
          return false;
        }
      }
    }
  }
}
