import React from 'react';
import renderHtml from 'react-render-html';

export default function PortfolioItem(props) {
    const {img, title, description, url, tag } = props;
    return (
            <div className="single_project cat1 cat5">
                <div className="grid_item">
                    <div className="deneb_img">
                        { url ? 
                          <a href={url} target="_blank">
                            <img
                                src={img}
                                className="img-fluid"
                                alt={title}
                            />
                          </a>
                        :
                        <img
                            src={img}
                            className="img-fluid"
                            alt={title}
                        />
                       }
                        
                    </div>
                    <div className="deneb_info">
                        {url ? 
                        <h4><a href={url}>{title}</a></h4>
                        : <h4>{title}</h4> }
                        <p>{renderHtml(description.substring(0, 100))}</p><hr/>
                        <small><strong>{tag}</strong></small>
                    </div>
                </div>
            </div>
    )
}
