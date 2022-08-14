```
  // //Get current user ID from the document (VERSION 1)
      // const userInfo = await getDocs(collection(db, "users"))
      // const userInfoID = userInfo._firestore._authCredentials.currentUser.uid
      // console.log(userInfoID);



      // // (VERSION 2)
      // const docRef = doc(db, "users", "J1ab7yc49cakzpEFMV8F")
      // getDoc(docRef).then(doc => {
      //   // console.log(doc._document.data.value.mapValue.fields.fullname)
      // })
```
