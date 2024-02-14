export default function(imgData){
    return(
 <div>
        {
          imgData.imgData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
</div>
    )
  }
