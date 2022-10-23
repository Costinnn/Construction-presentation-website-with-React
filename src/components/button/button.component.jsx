import './button.style.scss'

const BUTTON_TYPE = {
    hidden:'hidden',
    nomargin:'nomargin'
};

const Button = ({children, buttonType}) =>{
    return(
        <button className={`main-button ${BUTTON_TYPE[buttonType]}`}>{children}</button>
    )
}

export default Button;