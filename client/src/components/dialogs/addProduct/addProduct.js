import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../../firebase';

import { setProducts } from '../../../redux-store/action';

import ServerSettings from '../../../services/serverSettings';

import { AddProductModal } from'./styled';

const AddProduct = () => {
  const [ file, setFile ] = useState( null );
  const [ cat, setCat ] = useState( [] );
  const [ form, setForm ] = useState( {
    title: '',
    desc: '',
    size: '',
    price: '',
    color: '',
  } );

  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const changeCat = (e) => {
    setCat( e.target.value.split(',') )
  }

  const addNewProduct = ( e ) => {
    e.preventDefault();

    const server = new ServerSettings();

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL)
          const product = { ...form, img: downloadURL, categories: cat };
          const res = axios.post(`${server.getApi()}products`, product );
          if(res.data){
            dispatch( setProducts( res.data ) )
            setForm({
              title: '',
              desc: '',
              size: '',
              price: '',
              color: '',
            })
          }
        });
      }
    );
  }

  

  return (
    <AddProductModal>
      <form>
        <h2>Add new product</h2>
        <input placeholder={'title'} name={ 'title' } onChange={ changeHandler } required/>
        <input placeholder={'desc'} name={ 'desc' } onChange={ changeHandler }/>
        <input placeholder={'size'} name={ 'size' } onChange={ changeHandler }/>
        <input placeholder={'price'} name={ 'price' } onChange={ changeHandler } required/>
        <input placeholder={'color'} name={ 'color' } onChange={ changeHandler }/>
        <input placeholder={'image'} type={'file'} onChange={ ( e ) => setFile( e.target.files[0] ) } />
        <input placeholder={'categories'} onChange={ changeCat }/>
        <button onClick={ addNewProduct }>add</button>
      </form>
    </AddProductModal>
  )
}

export default AddProduct;