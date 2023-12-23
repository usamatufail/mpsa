import { Field } from 'formik';

export const Input = ({ name, type, label, placeholder, customErrorLabel, className, style, customOnChange }: any) => {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors, setFieldValue }, meta }: any) => {
        const isError = meta.touched && meta.error;
        return (
          <div className="flex flex-col">
            <label htmlFor={name} className="text-[14px] mb-[4px] text-[#2EC4B6]">
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              style={style ? style : {}}
              placeholder={placeholder}
              onChange={(e: any) => {
                setFieldValue(name, e?.target?.value);
                if (customOnChange) {
                  customOnChange(e?.target?.value);
                }
              }}
              value={field?.value}
              className={`h-[56px] text-[#071538] placeholder:text-[#cfcece] px-[13px] py-[9px] rounded-[6px] border border-[#d9d9d9] hover:border-[#1677ff] cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#1677ff] ${
                isError ? 'border-red-600 border' : ''
              } ${className}`}
            />
            {customErrorLabel?.text && meta.touched && meta.error && (
              <div className="flex w-full justify-between">
                <div className="text-red-500">{meta.error}</div>
                <button type="button" onClick={() => customErrorLabel?.action()}>
                  {customErrorLabel?.text}
                </button>
              </div>
            )}
          </div>
        );
      }}
    </Field>
  );
};
