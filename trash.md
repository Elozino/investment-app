    const q = query(
      collection(db, "users"),
      where("uid", "==", currentUserId)
    );
    // doc.data() is never undefined for query doc
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserName(doc.data().fullname);
      setEmail(doc.data().email);
      setUsd(doc.data().usdAmount);
      setBtc(doc.data().btcAmount);
    });

    await addDoc(collection(db, "users"), {
      //   uid: user.uid,
      //   ...formData,
      //   usdAmount: 0.00,
      //   btcAmount: 0.00,
      //   authProvider: "local",
      // });

        const actionCodeSettings = {
      url: 'http://localhost:3000/signin',
      // handleCodeInApp: true
    };
    
    try {
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      alert(`Password reset link sent to ${email}!`);
      setEmail("")
    } catch (err) {
      console.error(err);
      alert(err.message);
    }