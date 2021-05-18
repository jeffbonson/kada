import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private firestore: AngularFirestore) {}

  createCategory(data){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("categories")
          .add(data)
          .then(res => {}, err => reject(err));
  });
  }

  getCategories() {
    return this.firestore.collection("categories", ref => ref.orderBy('name')).snapshotChanges();
  }

}
