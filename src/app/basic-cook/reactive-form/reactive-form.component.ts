import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder,FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '../directive/forbinden-name.directive';
import { DialogService } from '../../core/guard/dialog';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.less']
})
export class ReactiveFormComponent implements OnInit {
  myForm : FormGroup;
  sexs : any[] = [{'name':'女','value':'famale'},{'name':'男','value':'male'}];
  likes : any[] = [{'name':'看电视','value':'Watch Tv','isChecked':false},
    {'name':'读书','value':'Book','isChecked':false}];
  selectedLikes : any[] = [];
  baocuns : any[] = [{'name':'是','value':'Yes','isChecked':false},{'name':'否','value':'No','isChecked':false}];
  skillList : any[] = [{'value':'Java'},{'value':'Scala'}];

  constructor(private fb : FormBuilder,private dialogService : DialogService) {
    this.myForm = this.fb.group({
      name: ['Jack',
        [Validators.required,Validators.minLength(4),forbiddenNameValidator(/[@\$&0-9]/)]],
      sex: ['male',Validators.required],
      shengri: ['1990-01-01',Validators.required],
      password: ['',Validators.required],
      address: this.fb.array([]),
      like: [],
      baocun:'',
      skills: this.fb.array([])
    });
  }

  ngOnInit() {
    this.initAdressList();
    this.initSkillList();

  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.name && !this.password) {
      return true;
    }

    return this.dialogService.confirm('已有修改未保存，确定离开吗?');
  }

  get name() { return this.myForm.get('name');}

  get password() { return this.myForm.get('password');}

  selectLikes(flag: any,value : any) {
    if(flag.target.checked) {
      this.selectedLikes.push(value);
    } else {
      this.selectedLikes = this.selectedLikes.filter((like) => {
        return like !== value;
      });
    }
    this.myForm.patchValue({
      like: this.selectedLikes
    });
  }

  initAdressList() {
    const tempArray = [this.fb.group({country: 'China', city: 'shanghai'})];
    const adressFormArray = this.fb.array(tempArray);
    this.myForm.setControl('address', adressFormArray)
  }

  addAdress() {
    let temp = this.fb.group({country: '', city: ''});
    this.address.push(temp);
  }

  delAdress(index : any) {
    this.address.removeAt(index);
  }

  get address(): FormArray {
    return this.myForm.get('address') as FormArray;
  };

  initSkillList() {
    const tempArray = this.skillList.map((skill) => new FormControl(skill.value));
    const skillFormArray = this.fb.array(tempArray);
    this.myForm.setControl('skills', skillFormArray)
  }

  addSkill() {
    let temp = new FormControl();
    this.skills.push(temp);
  }

  delSkill(index : any) {
    this.skills.removeAt(index);
  }

  get skills(): FormArray {
    return this.myForm.get('skills') as FormArray;
  };

}
