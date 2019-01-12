import PropTypes from '../_util/vue-types'

export const SelectPropTypes = {
  defaultActiveFirstOption: PropTypes.bool,
  multiple: PropTypes.bool,
  filterOption: PropTypes.any,
  // children: PropTypes.any,
  showSearch: PropTypes.bool,
  disabled: PropTypes.bool,
  allowClear: PropTypes.bool,
  showArrow: PropTypes.bool,
  tags: PropTypes.bool,
  prefixCls: PropTypes.string,
  // className: PropTypes.string,
  transitionName: PropTypes.string,
  optionLabelProp: PropTypes.string,
  optionFilterProp: PropTypes.string,
  animation: PropTypes.string,
  choiceTransitionName: PropTypes.string,
  open: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  // onChange: PropTypes.func,
  // onBlur: PropTypes.func,
  // onFocus: PropTypes.func,
  // onSelect: PropTypes.func,
  // onSearch: PropTypes.func,
  // onPopupScroll: PropTypes.func,
  // onMouseEnter: PropTypes.func,
  // onMouseLeave: PropTypes.func,
  // onInputKeyDown: PropTypes.func,
  placeholder: PropTypes.any,
  // onDeselect: PropTypes.func,
  labelInValue: PropTypes.bool,
  loading: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  dropdownStyle: PropTypes.object,
  dropdownClassName: PropTypes.string,
  maxTagTextLength: PropTypes.number,
  maxTagCount: PropTypes.number,
  maxTagPlaceholder: PropTypes.any,
  tokenSeparators: PropTypes.arrayOf(PropTypes.string),
  getInputElement: PropTypes.func,
  showAction: PropTypes.arrayOf(PropTypes.string),
  autoFocus: PropTypes.bool,
  getPopupContainer: PropTypes.func,
  clearIcon: PropTypes.any,
  inputIcon: PropTypes.any,
  removeIcon: PropTypes.any,
  menuItemSelectedIcon: PropTypes.any,
  dropdownRender: PropTypes.func,
  mode: PropTypes.oneOf(['multiple', 'tags']),
  backfill: PropTypes.bool,
  dropdownAlign: PropTypes.any,
  dropdownMatchSelectWidth: PropTypes.bool,
  dropdownMenuStyle: PropTypes.object,
  notFoundContent: PropTypes.oneOfType([String, Number]),
  tabIndex: PropTypes.oneOfType([String, Number]),
}
