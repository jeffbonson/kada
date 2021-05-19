import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private firestore: AngularFirestore) {}


  getCategories() {
    return this.firestore.collection("categories", ref => ref.orderBy('name')).snapshotChanges();
  }

  createCategory(category: Category): void {
    this.firestore.collection("categories").add({...category});
  }

  updateCategory(key: string, value: any): Promise<void> {
    return this.firestore.collection("categories").doc(key).update(value);
  }

  deleteCategory(key: string): Promise<void> {
    return this.firestore.collection("categories").doc(key).delete();
  }
  deleteAll() {
    this.firestore.collection("categories").get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }

}
