import React from 'react'
import "./NewCrop.css"

export default function AddCrop() {
  return (
    <div className='addCropMain'>

    <div className='addCropHeader'>
      <button>
        <img src="./src/images/home.svg" alt="back" />
      </button>
      </div>

      <h1>Add Crop to follow</h1>
      <button>Clear</button>

      <div className='cropButtons'>


        <button>Beans <span><img src="./src/images/plus.svg" alt="plus" /></span> </button>
        <button>Potatoes <span><img src="./src/images/plus.svg" alt="plus" /></span> </button>
        <button>Cassava <span><img src="./src/images/plus.svg" alt="plus" /></span> </button>
        <button>Irish-Potatoes <span><img src="./src/images/plus.svg" alt="plus" /></span> </button>
        <button>Rice <span><img src="./src/images/plus.svg" alt="plus" /></span> </button>
        <button>Tomatoes <span><img src="./src/images/plus.svg" alt="plus" /></span> </button>
        <button>Coffee <span><img src="./src/images/plus.svg" alt="plus" /></span> </button>
        <button>Cotton <span><img src="./src/images/plus.svg" alt="plus" /></span> </button>
        <button>Cocoa <span><img src="./src/images/plus.svg" alt="plus" /></span> </button>
        <button>Millet <span><img src="./src/images/plus.svg" alt="plus" /></span> </button>


      </div>
    </div>
  )
}
