const Input = ({ label, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
