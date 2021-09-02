import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {
  anagramForm: FormGroup;
  isAnagram : Boolean = false;
  isSubmited :Boolean =  false;
  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {

    this.anagramForm = this.fb.group({
      stringA: ['', [Validators.required]],
      stringB: ['',  [Validators.required]],
    });
  }

  onSubmit(){
    let strA =  this.anagramForm.value.stringA.trim();
    let strB =  this.anagramForm.value.stringB.trim();
    this.isSubmited = true;
    this.checkAnagram(strA, strB);
  }

  checkAnagram(strA:string, strB:string){
    let n1 = [...strA.toLowerCase()];
    let n2 = [...strB.toLowerCase()];
    console.log(n1);
    console.log(n2);

    if (n1.length != n2.length){
       this.isAnagram = false;
    }
    n1.sort();
    n2.sort();

   this.isAnagram = n1.every((x, i) =>  x == n2[i]);
   console.log(this.isAnagram);

  }

}
