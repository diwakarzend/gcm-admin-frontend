import React, { Component } from 'react';
import Select, { components } from 'react-select';
import {MSWrapper} from './style';
import { isEmpty } from '../../Utils/common';


class SelectBox extends Component {
    multiValueContainer = ({ selectProps, data }) => {
      const { label } = data;
      const allSelected = selectProps.value;
      const index = allSelected.findIndex(selected => selected.label === label);
      const isLastSelected = index === allSelected.length - 1;
      const labelSuffix = isLastSelected ? ` (${allSelected.length})` : ', ';
      const val = `${label}${labelSuffix}`;
      return val;
    };

    render() {
      const {
        label, config, error, onChange,
      } = this.props;
      const {
        multiValueContainer,
      } = this;
      let cls = '';
      cls += config.isMulti ? 'multi-select' : ' single-select';
      cls += isEmpty(config.value) ? '' : ' has-value';

      return (
          <MSWrapper className={config.dataClass}>
              <label>
                  {label}
                  {config.required ? <sup>*</sup> : ''}
                </label>
              <Select
                  {...config}
                  components={{
                      MultiValueContainer: multiValueContainer,
                    }}
                  onChange={selected => onChange(config.name, selected)}
                  className={cls}
                  classNamePrefix="select"
                />
              {error ? <Styled.Error>{error}</Styled.Error> : null}
            </MSWrapper>
      );
    }
}

export default SelectBox;
