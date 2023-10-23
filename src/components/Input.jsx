import PropTypes from 'prop-types'
import { BsExclamationTriangleFill } from 'react-icons/bs'

const Input = ({ label, value, type, error, onChange }) => {
  return (
    <div className='input mb-4'>
      <label className="row mb-1">
        {label}
      </label>
      <input className="row w-100 px-2 py-1"
        value={value}
        type={type}
        onChange={onChange}
      />
      {
        error &&
        <div className='row error mt-1 centered-label'>
          <span><BsExclamationTriangleFill size={16}/> {error}</span>
        </div>
      }
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func
}

export default Input

