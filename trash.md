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

    const fetchDocuments = () =>
  client.fetch(`*[_type == 'author' && defined(name)][0...100] {_id, _rev, name}`)

const buildPatches = docs =>
  docs.map(doc => ({
    id: doc._id,
    patch: {
      set: {fullname: doc.name},
      unset: ['name'],
      // this will cause the transaction to fail if the documents has been
      // modified since it was fetched.
      ifRevisionID: doc._rev
    }
  }))

const createTransaction = patches =>
  patches.reduce((tx, patch) => tx.patch(patch.id, patch.patch), client.transaction())

const commitTransaction = tx => tx.commit()

const migrateNextBatch = async () => {
  const documents = await fetchDocuments()
  const patches = buildPatches(documents)
  if (patches.length === 0) {
    console.log('No more documents to migrate!')
    return null
  }
  console.log(
    `Migrating batch:\n %s`,
    patches.map(patch => `${patch.id} => ${JSON.stringify(patch.patch)}`).join('\n')
  )
  const transaction = createTransaction(patches)
  await commitTransaction(transaction)
  return migrateNextBatch()
}

migrateNextBatch().catch(err => {
  console.error(err)
  process.exit(1)
})

/////////////////////////////////////////////
const mutations = [{
  createOrReplace: {
    _id: '123',
    _type: 'cms.article',
    title: 'An article'
  }
}]

fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${datasetName}`, {
  method: 'post',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${tokenWithWriteAccess}`
  },
  body: JSON.stringify({mutations})
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error))