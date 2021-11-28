import styled from "styled-components";
export default styled.div`
.layout__content__form{
    
    
    border: 1px solid #DFE0EB;
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        
    .form-control{
        opacity: 0.8;
        border: 1px solid #ACACAC;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
    }
    .form__title{
        margin: 17px 27px;
        font-family: 'Mulish', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
        h2{
            text-align: center;
        }
        &__select{
            width: 150px;
            opacity: 0.8;
            border: 1px solid #ACACAC;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
        }
    }
    .form__body{
        margin: 27px 34px ;
        
        label{

        }
        
        
        .content{
            margin: 30px auto;
            
        }

        .upload{
            display: flex;
            padding: 20px;
            &__button{
                background: #3751FF;
                box-shadow: 5px 10px 8px rgb(127 174 236);
                border: #3751FF ;
                border-radius: 8px;
                color: #FFFFFF;
                margin: auto;
                width: 100%;
                padding: 10px;
                transition-duration: 0.4s;
                transition-property: all;
              
                &:hover{
                   
                    background: #131526;
                }
                &:active{
                    box-shadow: 1px 8px 4px rgb(127 174 236);
                    transform: translateY(4px);
                }

                .fa-upload{
                    margin-left: 15px;
                    
                }
            }
            
        }
        .show-file{
            background: #FCFDFE;
            border: 2px solid #ACACAC;
            box-sizing: border-box;
            border-radius: 8px;
            height: 124px;
            margin: 16px auto;
            overflow-y: scroll;
            
        }
       &__buttonSend{
           
           display: flex;
           justify-content: end;
           .send{
                
                background: #3751FF;
                box-shadow: 6px 12px 12px  rgb(127 174 236);
                border-radius: 8px;
                border: #FCFDFE;
                &:hover{
                    background: #131526;
                }
                &:active{
                    box-shadow: 2px 8px 4px rgb(127 174 236);
                    transform: translateY(4px);
                }
            }

       }

    }
    
    
}
`