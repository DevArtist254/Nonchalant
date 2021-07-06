import "./form.styles.scss"

const FormInput = ({inputChange, label, ...otherProps}) => (
  <form className="group">
    <input onChange={inputChange} {...otherProps} className="form-input" />
    {label && (
      <label
        className={`${
          otherProps.value.length ? `shrink` : ``
        } form-input-label`}
      >
        {label}
      </label>
    )}
  </form>
)

export default FormInput
