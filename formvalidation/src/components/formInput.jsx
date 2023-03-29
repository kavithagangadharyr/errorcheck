import "./formInput.css";

const FormInput = (props) => {
    const {label, errorMessage, onChange, id, ...inputProps} = props;
    return(
        <div className="formInput">
            <label>{label}</label>
            <input 
                onChange={onChange}
                {...inputProps}
            />
            <span>
                {errorMessage}
            </span>
        </div>
    );
}

export default FormInput;