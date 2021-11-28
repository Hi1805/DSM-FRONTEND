import React from 'react'
import Style from './style'
export const SendEmail = () => {
    return (
        <Style>
            <form className="layout__content__form">
                <div className="form__title">
                    <h2>From :  Admin</h2>
                    <h4>Send email to all</h4>
                    <select className="form__title__select form-select">
                        <option value={"teachers"} selected> Teachers </option>
                        <option value={"students"}>Students</option>
                        
                    </select> 
                </div>
                <div className="form__body">
                    <div className="form-group form__body__title">
                        <label htmlFor="title_email">Title</label>
                        <input type="text" className="form-control" id="title_email" placeholder="title" />
                    </div>
                    <div className="form-group content">
                        <label htmlFor="content_email">Content</label>
                        
                        <textarea name="content_email" id="input_content_email" className="form-control" rows={5} placeholder="type content..." />
                    </div>
                    <div className="upload">
                        <button type="submit" className="upload__button">Upload file
                        <i className="fas fa-upload"></i>
                        </button>
                    </div>
                    <div className="show-file">

                    </div>
                
                    <div className="form__body__buttonSend">
                        <button type="button" className="btn btn-success send">Send</button>
                    </div>
                
                </div>
                
            </form>
        </Style>
    )
}
