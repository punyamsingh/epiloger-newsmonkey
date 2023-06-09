import React,{ Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { title,description,imageUrl,newsUrl,author,date,source } = this.props;
        return (
            <div className="my-3 text-left-align center">
                <div className="card">
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success">
                        {source}
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="card-footer">
                            <small className="text-body-secondary">Auth: <strong>{author ? author : "Unknown"}</strong>, {new Date(date).toLocaleString()}</small>
                        </div>
                        <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-primary d-flex justify-content-center my-2">Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;

