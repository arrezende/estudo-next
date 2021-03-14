import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Card({title,img,content,link}){
    return (
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <div className="service h-100">
                <Image src={img} width={300}
        height={200}/>
                <h3 className="text-center mt-3">{title}</h3>
                <p>{content}</p>
                <p><Link href={link} ><a className="readmore">Learn more</a></Link></p>
            </div>
        </div>
    )
}