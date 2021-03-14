import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Cta(){
    return(
        <section className="hotline-area text-center area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Fale Conosco</h2>
                        <span>(26) 49-3882</span>
                        <p className="pt-3">Estamos sempre prontos para melhor atendê-los.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}