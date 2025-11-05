const FormRow = ({ name, type, handleChange, value, labelText }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}</label>
            <input
                type={type}
                className="form-input"
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default FormRow