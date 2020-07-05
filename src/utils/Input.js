import React from "react";
import Select from "react-select";


export const Input = props => {
    let inputElement = null;
    const inputClasses = [];
    let cls = "";
    if (props.invalid && props.shouldValidate && props.touched) {
      cls = "invalid";
    } else {
      cls = "valid";
    }
    switch (props.elementType) {
      case "input":
        inputElement = (
          <input
            className={cls}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            onFocus={props.focus}
            onKeyPress={props.onKeyPress}
            required
          />
        );
        break;
      case "checkbox":
        inputElement = (
          <input
            className={cls}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            onFocus={props.focus}
            onKeyPress={props.onKeyPress}
            required
          />
        );
        break;
      case "textarea":
        inputElement = (
          <textarea
            className={cls}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            required
          />
        );
        break;
      case "select":
        inputElement = (
          <Select
            className={cls}
            value={props.value}
            onChange={props.changed}
            disabled={props.elementConfig.disabled ? true : false}
            options={props.options}
            multi={props.elementConfig.isMulti}
            placeholder={props.elementConfig.placeholder}
          />
        );
        break;
      default:
        inputElement = (
          <input
            className={cls}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        );
    }
  
    if (props.elementType == "select") {
      return (
        <div className={props.disabled ? "select-box disabled" : "select-box"}>
          <label>{props.label}</label>
          {inputElement}
        </div>
      );
    }
  
    if (props.elementType == "checkbox") {
      return (
        <div className="input-checkbox">
          <label className="checkbox">
            {inputElement}
            <i />
            <span>{props.label}</span>
          </label>
        </div>
      );
    }
    return (
      <div className={`${props.className} input-text`}>
         <label>{props.label}</label>
        {inputElement}
       
      </div>
    );
  };

const Label = ({ label, required }) => {
  if (!label) {
    return null;
  }

  return (
    <label className="label">
      {label} {required && <sup>*</sup>}
    </label>
  );
};

export const InputV2 = props => {
  let inputElement = null;
  let elementStyle = "";
  let disabled = props.disabled ? "disabled" : "";
  if (props.valid) {
    elementStyle = `${props.className} ${disabled}`;
  } else {
    elementStyle = `${props.className} ${disabled} invalid`;
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.onChange}
          onFocus={props.focus}
          onKeyPress={props.onKeyPress}
          required={props.required}
          placeholder={props.placeholder}
          className={elementStyle}
        />
      );
      break;
    case "checkbox":
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.onChange}
          onFocus={props.focus}
          onKeyPress={props.onKeyPress}
          required={props.required}
          className={elementStyle}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
          className={elementStyle}
        />
      );
      break;
    case "select":
      inputElement = (
        <Select
          value={props.value}
          onChange={props.onChange}
          disabled={props.elementConfig.disabled ? true : false}
          options={props.options}
          placeholder={props.elementConfig.placeholder}
          multi={props.elementConfig.isMulti}
          className={elementStyle}
          onBlur={props.onBlur}
          keepOpen="true"
        />
      );
      break;
    // case "asyncselect":
    //   inputElement = (
    //     <AsyncSelect
    //       value={props.value}
    //       onChange={props.onChange}
    //       disabled={props.elementConfig.disabled ? true : false}
    //       options={props.options}
    //       placeholder={props.elementConfig.placeholder}
    //       multi={props.elementConfig.isMulti}
    //       className={elementStyle}
    //       onBlur={props.onBlur}
    //     />
    //   );
    //   break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.onChange}
          className={elementStyle}
        />
      );
  }
  let label = props.label ? <Label label={props.label} required={props.isValidate.required} /> : null;
  if (props.elementType == "checkbox") {
    return (
      <div className="input-checkbox pd-top">
        <label className="checkbox">
          {inputElement}
          <i />
          <span>{props.label}</span>
        </label>
      </div>
    );
  }
  return (
    <div>
      {label}
      {inputElement}
    </div>
  );
};
