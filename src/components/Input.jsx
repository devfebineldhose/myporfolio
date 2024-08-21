export default function CustomInput({
  type = "",
  errorMessage = "",
  isErrorEnabled = false,
  className,
  ...params
}) {
  return (
    <>
      {type == "textArea" ? (
        <textarea
          {...params}
          className={
            isErrorEnabled ? `border-2 flex flex-col ${className}` : className
          }
        />
      ) : (
        <input
          {...params}
          className={
            isErrorEnabled ? `border-2 flex flex-col ${className}` : className
          }
        />
      )}
      {isErrorEnabled && errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}
    </>
  );
}
