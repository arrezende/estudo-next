import Image from 'next/image'

export function Slider({item}){
  
  let c = 0
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {item.map((element, i) => {
              return (
                <div className={`carousel-item ${i ==0 && 'active'}`}>
                  <Image src={element} className="d-block w-100" layout="responsive" width={1900}
      height={600}/>
                </div>
              )
            })}
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    )
}