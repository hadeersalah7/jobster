const FormRowSelect = ({
    labelText,
    name,
    list,
    value,
    handleChange,
}) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                className="form-select"
            >
                {list.map((itemValue, index) => (
                    <option key={index} value={itemValue}>
                        {itemValue}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FormRowSelect;
