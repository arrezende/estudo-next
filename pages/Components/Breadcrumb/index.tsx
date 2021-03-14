import React from 'react'
interface BreadcrumbValue {
    title: string,
    link: string
}

export function Breadcrumb({title,link}:BreadcrumbValue){
    return(
        <section className="banner_area" style={{backgroundImage:'url(/img/banner/banner-2.jpg)'}}>
            <div className="banner_inner d-flex align-items-center">
                <div className="container">
                    <div
                    className="banner_content d-md-flex justify-content-between align-items-center"
                    >
                        <div className="mb-3 mb-md-0">
                            <h1>{title}</h1>
                        </div>
                        <div className="page_link">
                            <a href="/">Home</a>
                            <a href={link}>{title}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}