// eslint-disable-next-line no-unused-vars
import React from 'react'

function NewPost() {
  return (
    <div className='new post'>
      <h2>
        Novo post
      </h2>
      <form >
       <div className='form-control'>
         <label 
         htmlFor='title' 
         type="text" 
         id="title"
         placeholder="digite o conteúdo"
         >
          Novo Post
         </label>
       </div>
       
       <div className='form-control'>
         <label htmlFor='body'> Conteudo </label>
         <textarea name="body" id="body" placeholder='digite o conteudo '></textarea>
       </div>
       
       <input type="submit" value="Criar post" className='btn' />

      </form>
      
      </div>
  )
}

export default NewPost