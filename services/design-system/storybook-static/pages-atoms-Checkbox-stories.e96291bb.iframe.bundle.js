'use strict';
(self.webpackChunk_cats_cradle_design_system =
  self.webpackChunk_cats_cradle_design_system || []).push([
  [232],
  {
    '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControl/FormControlContext.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        const __WEBPACK_DEFAULT_EXPORT__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
        ).createContext(void 0);
      },
    '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControl/useFormControl.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => useFormControl });
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
          ),
          _FormControlContext__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControl/FormControlContext.js',
            );
        function useFormControl() {
          return react__WEBPACK_IMPORTED_MODULE_0__.useContext(
            _FormControlContext__WEBPACK_IMPORTED_MODULE_1__.Z,
          );
        }
      },
    '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/createSvgIcon.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => createSvgIcon });
        var esm_extends = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js',
          ),
          react = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
          ),
          objectWithoutPropertiesLoose = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js',
          ),
          clsx_m = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js',
          ),
          composeClasses = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js',
          ),
          capitalize = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/capitalize.js',
          ),
          useThemeProps = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useThemeProps.js',
          ),
          styled = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js',
          ),
          generateUtilityClasses = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js',
          ),
          generateUtilityClass = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js',
          );
        function getSvgIconUtilityClass(slot) {
          return (0, generateUtilityClass.Z)('MuiSvgIcon', slot);
        }
        (0, generateUtilityClasses.Z)('MuiSvgIcon', [
          'root',
          'colorPrimary',
          'colorSecondary',
          'colorAction',
          'colorError',
          'colorDisabled',
          'fontSizeInherit',
          'fontSizeSmall',
          'fontSizeMedium',
          'fontSizeLarge',
        ]);
        var jsx_runtime = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
        const _excluded = [
            'children',
            'className',
            'color',
            'component',
            'fontSize',
            'htmlColor',
            'inheritViewBox',
            'titleAccess',
            'viewBox',
          ],
          SvgIconRoot = (0, styled.ZP)('svg', {
            name: 'MuiSvgIcon',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props;
              return [
                styles.root,
                'inherit' !== ownerState.color &&
                  styles[`color${(0, capitalize.Z)(ownerState.color)}`],
                styles[`fontSize${(0, capitalize.Z)(ownerState.fontSize)}`],
              ];
            },
          })(({ theme, ownerState }) => {
            var _theme$transitions,
              _theme$transitions$cr,
              _theme$transitions2,
              _theme$transitions2$d,
              _theme$typography,
              _theme$typography$pxT,
              _theme$typography2,
              _theme$typography2$px,
              _theme$typography3,
              _theme$typography3$px,
              _palette$ownerState$c,
              _palette,
              _palette$ownerState$c2,
              _palette2,
              _palette2$action,
              _palette3,
              _palette3$action;
            return {
              userSelect: 'none',
              width: '1em',
              height: '1em',
              display: 'inline-block',
              fill: 'currentColor',
              flexShrink: 0,
              transition:
                null == (_theme$transitions = theme.transitions) ||
                null == (_theme$transitions$cr = _theme$transitions.create)
                  ? void 0
                  : _theme$transitions$cr.call(_theme$transitions, 'fill', {
                      duration:
                        null == (_theme$transitions2 = theme.transitions) ||
                        null ==
                          (_theme$transitions2$d = _theme$transitions2.duration)
                          ? void 0
                          : _theme$transitions2$d.shorter,
                    }),
              fontSize: {
                inherit: 'inherit',
                small:
                  (null == (_theme$typography = theme.typography) ||
                  null == (_theme$typography$pxT = _theme$typography.pxToRem)
                    ? void 0
                    : _theme$typography$pxT.call(_theme$typography, 20)) ||
                  '1.25rem',
                medium:
                  (null == (_theme$typography2 = theme.typography) ||
                  null == (_theme$typography2$px = _theme$typography2.pxToRem)
                    ? void 0
                    : _theme$typography2$px.call(_theme$typography2, 24)) ||
                  '1.5rem',
                large:
                  (null == (_theme$typography3 = theme.typography) ||
                  null == (_theme$typography3$px = _theme$typography3.pxToRem)
                    ? void 0
                    : _theme$typography3$px.call(_theme$typography3, 35)) ||
                  '2.1875rem',
              }[ownerState.fontSize],
              color:
                null !=
                (_palette$ownerState$c =
                  null == (_palette = (theme.vars || theme).palette) ||
                  null == (_palette$ownerState$c2 = _palette[ownerState.color])
                    ? void 0
                    : _palette$ownerState$c2.main)
                  ? _palette$ownerState$c
                  : {
                      action:
                        null == (_palette2 = (theme.vars || theme).palette) ||
                        null == (_palette2$action = _palette2.action)
                          ? void 0
                          : _palette2$action.active,
                      disabled:
                        null == (_palette3 = (theme.vars || theme).palette) ||
                        null == (_palette3$action = _palette3.action)
                          ? void 0
                          : _palette3$action.disabled,
                      inherit: void 0,
                    }[ownerState.color],
            };
          }),
          SvgIcon = react.forwardRef(function SvgIcon(inProps, ref) {
            const props = (0, useThemeProps.Z)({
                props: inProps,
                name: 'MuiSvgIcon',
              }),
              {
                children,
                className,
                color = 'inherit',
                component = 'svg',
                fontSize = 'medium',
                htmlColor,
                inheritViewBox = !1,
                titleAccess,
                viewBox = '0 0 24 24',
              } = props,
              other = (0, objectWithoutPropertiesLoose.Z)(props, _excluded),
              ownerState = (0, esm_extends.Z)({}, props, {
                color,
                component,
                fontSize,
                instanceFontSize: inProps.fontSize,
                inheritViewBox,
                viewBox,
              }),
              more = {};
            inheritViewBox || (more.viewBox = viewBox);
            const classes = (ownerState => {
              const { color, fontSize, classes } = ownerState,
                slots = {
                  root: [
                    'root',
                    'inherit' !== color && `color${(0, capitalize.Z)(color)}`,
                    `fontSize${(0, capitalize.Z)(fontSize)}`,
                  ],
                };
              return (0, composeClasses.Z)(
                slots,
                getSvgIconUtilityClass,
                classes,
              );
            })(ownerState);
            return (0,
            jsx_runtime.jsxs)(SvgIconRoot, (0, esm_extends.Z)({ as: component, className: (0, clsx_m.Z)(classes.root, className), focusable: 'false', color: htmlColor, 'aria-hidden': !titleAccess || void 0, role: titleAccess ? 'img' : void 0, ref }, more, other, { ownerState, children: [children, titleAccess ? (0, jsx_runtime.jsx)('title', { children: titleAccess }) : null] }));
          });
        SvgIcon.muiName = 'SvgIcon';
        const SvgIcon_SvgIcon = SvgIcon;
        function createSvgIcon(path, displayName) {
          function Component(props, ref) {
            return (0, jsx_runtime.jsx)(
              SvgIcon_SvgIcon,
              (0, esm_extends.Z)(
                { 'data-testid': `${displayName}Icon`, ref },
                props,
                { children: path },
              ),
            );
          }
          return (
            (Component.muiName = SvgIcon_SvgIcon.muiName),
            react.memo(react.forwardRef(Component))
          );
        }
      },
    '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/useControlled.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => utils_useControlled,
        });
        var react = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
        );
        const utils_useControlled = function useControlled({
          controlled,
          default: defaultProp,
          name,
          state = 'value',
        }) {
          const { current: isControlled } = react.useRef(void 0 !== controlled),
            [valueState, setValue] = react.useState(defaultProp);
          return [
            isControlled ? controlled : valueState,
            react.useCallback(newValue => {
              isControlled || setValue(newValue);
            }, []),
          ];
        };
      },
    './stories/pages/atoms/Checkbox.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _src_Checkbox__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/Checkbox.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Atoms/Checkbox',
          component: _src_Checkbox__WEBPACK_IMPORTED_MODULE_1__.X,
        },
        Default = () =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _src_Checkbox__WEBPACK_IMPORTED_MODULE_1__.X,
                  {},
                ),
                ' Label',
              ],
            },
          );
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '() => <>\n    <Checkbox /> Label\n  </>',
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ['Default'];
    },
    './src/Checkbox.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        X: () => src_Checkbox_Checkbox,
      });
      var react = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
        ),
        objectWithoutPropertiesLoose = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js',
        ),
        esm_extends = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js',
        ),
        clsx_m = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js',
        ),
        composeClasses = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js',
        ),
        colorManipulator = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+system@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react@18.2.0/node_modules/@mui/system/esm/colorManipulator.js',
        ),
        capitalize = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/capitalize.js',
        ),
        styled = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js',
        ),
        useControlled = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/useControlled.js',
        ),
        useFormControl = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControl/useFormControl.js',
        ),
        ButtonBase = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ButtonBase/ButtonBase.js',
        ),
        generateUtilityClasses = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js',
        ),
        generateUtilityClass = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js',
        );
      function getSwitchBaseUtilityClass(slot) {
        return (0, generateUtilityClass.Z)('PrivateSwitchBase', slot);
      }
      (0, generateUtilityClasses.Z)('PrivateSwitchBase', [
        'root',
        'checked',
        'disabled',
        'input',
        'edgeStart',
        'edgeEnd',
      ]);
      var jsx_runtime = __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
      );
      const _excluded = [
          'autoFocus',
          'checked',
          'checkedIcon',
          'className',
          'defaultChecked',
          'disabled',
          'disableFocusRipple',
          'edge',
          'icon',
          'id',
          'inputProps',
          'inputRef',
          'name',
          'onBlur',
          'onChange',
          'onFocus',
          'readOnly',
          'required',
          'tabIndex',
          'type',
          'value',
        ],
        SwitchBaseRoot = (0, styled.ZP)(ButtonBase.Z)(({ ownerState }) =>
          (0, esm_extends.Z)(
            { padding: 9, borderRadius: '50%' },
            'start' === ownerState.edge && {
              marginLeft: 'small' === ownerState.size ? -3 : -12,
            },
            'end' === ownerState.edge && {
              marginRight: 'small' === ownerState.size ? -3 : -12,
            },
          ),
        ),
        SwitchBaseInput = (0, styled.ZP)('input')({
          cursor: 'inherit',
          position: 'absolute',
          opacity: 0,
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1,
        }),
        internal_SwitchBase = react.forwardRef(function SwitchBase(props, ref) {
          const {
              autoFocus,
              checked: checkedProp,
              checkedIcon,
              className,
              defaultChecked,
              disabled: disabledProp,
              disableFocusRipple = !1,
              edge = !1,
              icon,
              id,
              inputProps,
              inputRef,
              name,
              onBlur,
              onChange,
              onFocus,
              readOnly,
              required = !1,
              tabIndex,
              type,
              value,
            } = props,
            other = (0, objectWithoutPropertiesLoose.Z)(props, _excluded),
            [checked, setCheckedState] = (0, useControlled.Z)({
              controlled: checkedProp,
              default: Boolean(defaultChecked),
              name: 'SwitchBase',
              state: 'checked',
            }),
            muiFormControl = (0, useFormControl.Z)();
          let disabled = disabledProp;
          muiFormControl &&
            void 0 === disabled &&
            (disabled = muiFormControl.disabled);
          const hasLabelFor = 'checkbox' === type || 'radio' === type,
            ownerState = (0, esm_extends.Z)({}, props, {
              checked,
              disabled,
              disableFocusRipple,
              edge,
            }),
            classes = (ownerState => {
              const { classes, checked, disabled, edge } = ownerState,
                slots = {
                  root: [
                    'root',
                    checked && 'checked',
                    disabled && 'disabled',
                    edge && `edge${(0, capitalize.Z)(edge)}`,
                  ],
                  input: ['input'],
                };
              return (0, composeClasses.Z)(
                slots,
                getSwitchBaseUtilityClass,
                classes,
              );
            })(ownerState);
          return (0, jsx_runtime.jsxs)(
            SwitchBaseRoot,
            (0, esm_extends.Z)(
              {
                component: 'span',
                className: (0, clsx_m.Z)(classes.root, className),
                centerRipple: !0,
                focusRipple: !disableFocusRipple,
                disabled,
                tabIndex: null,
                role: void 0,
                onFocus: event => {
                  onFocus && onFocus(event),
                    muiFormControl &&
                      muiFormControl.onFocus &&
                      muiFormControl.onFocus(event);
                },
                onBlur: event => {
                  onBlur && onBlur(event),
                    muiFormControl &&
                      muiFormControl.onBlur &&
                      muiFormControl.onBlur(event);
                },
                ownerState,
                ref,
              },
              other,
              {
                children: [
                  (0, jsx_runtime.jsx)(
                    SwitchBaseInput,
                    (0, esm_extends.Z)(
                      {
                        autoFocus,
                        checked: checkedProp,
                        defaultChecked,
                        className: classes.input,
                        disabled,
                        id: hasLabelFor ? id : void 0,
                        name,
                        onChange: event => {
                          if (event.nativeEvent.defaultPrevented) return;
                          const newChecked = event.target.checked;
                          setCheckedState(newChecked),
                            onChange && onChange(event, newChecked);
                        },
                        readOnly,
                        ref: inputRef,
                        required,
                        ownerState,
                        tabIndex,
                        type,
                      },
                      'checkbox' === type && void 0 === value ? {} : { value },
                      inputProps,
                    ),
                  ),
                  checked ? checkedIcon : icon,
                ],
              },
            ),
          );
        });
      var createSvgIcon = __webpack_require__(
        '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/createSvgIcon.js',
      );
      const CheckBoxOutlineBlank = (0, createSvgIcon.Z)(
          (0, jsx_runtime.jsx)('path', {
            d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
          }),
          'CheckBoxOutlineBlank',
        ),
        CheckBox = (0, createSvgIcon.Z)(
          (0, jsx_runtime.jsx)('path', {
            d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
          }),
          'CheckBox',
        ),
        IndeterminateCheckBox = (0, createSvgIcon.Z)(
          (0, jsx_runtime.jsx)('path', {
            d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z',
          }),
          'IndeterminateCheckBox',
        );
      var useThemeProps = __webpack_require__(
        '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useThemeProps.js',
      );
      function getCheckboxUtilityClass(slot) {
        return (0, generateUtilityClass.Z)('MuiCheckbox', slot);
      }
      const Checkbox_checkboxClasses = (0, generateUtilityClasses.Z)(
          'MuiCheckbox',
          [
            'root',
            'checked',
            'disabled',
            'indeterminate',
            'colorPrimary',
            'colorSecondary',
          ],
        ),
        Checkbox_excluded = [
          'checkedIcon',
          'color',
          'icon',
          'indeterminate',
          'indeterminateIcon',
          'inputProps',
          'size',
          'className',
        ],
        CheckboxRoot = (0, styled.ZP)(internal_SwitchBase, {
          shouldForwardProp: prop => (0, styled.FO)(prop) || 'classes' === prop,
          name: 'MuiCheckbox',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const { ownerState } = props;
            return [
              styles.root,
              ownerState.indeterminate && styles.indeterminate,
              'default' !== ownerState.color &&
                styles[`color${(0, capitalize.Z)(ownerState.color)}`],
            ];
          },
        })(({ theme, ownerState }) =>
          (0, esm_extends.Z)(
            { color: (theme.vars || theme).palette.text.secondary },
            !ownerState.disableRipple && {
              '&:hover': {
                backgroundColor: theme.vars
                  ? `rgba(${
                      'default' === ownerState.color
                        ? theme.vars.palette.action.activeChannel
                        : theme.vars.palette.primary.mainChannel
                    } / ${theme.vars.palette.action.hoverOpacity})`
                  : (0, colorManipulator.Fq)(
                      'default' === ownerState.color
                        ? theme.palette.action.active
                        : theme.palette[ownerState.color].main,
                      theme.palette.action.hoverOpacity,
                    ),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            },
            'default' !== ownerState.color && {
              [`&.${Checkbox_checkboxClasses.checked}, &.${Checkbox_checkboxClasses.indeterminate}`]:
                { color: (theme.vars || theme).palette[ownerState.color].main },
              [`&.${Checkbox_checkboxClasses.disabled}`]: {
                color: (theme.vars || theme).palette.action.disabled,
              },
            },
          ),
        ),
        defaultCheckedIcon = (0, jsx_runtime.jsx)(CheckBox, {}),
        defaultIcon = (0, jsx_runtime.jsx)(CheckBoxOutlineBlank, {}),
        defaultIndeterminateIcon = (0, jsx_runtime.jsx)(
          IndeterminateCheckBox,
          {},
        ),
        Checkbox_Checkbox = react.forwardRef(function Checkbox(inProps, ref) {
          var _icon$props$fontSize, _indeterminateIcon$pr;
          const props = (0, useThemeProps.Z)({
              props: inProps,
              name: 'MuiCheckbox',
            }),
            {
              checkedIcon = defaultCheckedIcon,
              color = 'primary',
              icon: iconProp = defaultIcon,
              indeterminate = !1,
              indeterminateIcon:
                indeterminateIconProp = defaultIndeterminateIcon,
              inputProps,
              size = 'medium',
              className,
            } = props,
            other = (0, objectWithoutPropertiesLoose.Z)(
              props,
              Checkbox_excluded,
            ),
            icon = indeterminate ? indeterminateIconProp : iconProp,
            indeterminateIcon = indeterminate
              ? indeterminateIconProp
              : checkedIcon,
            ownerState = (0, esm_extends.Z)({}, props, {
              color,
              indeterminate,
              size,
            }),
            classes = (ownerState => {
              const { classes, indeterminate, color } = ownerState,
                slots = {
                  root: [
                    'root',
                    indeterminate && 'indeterminate',
                    `color${(0, capitalize.Z)(color)}`,
                  ],
                },
                composedClasses = (0, composeClasses.Z)(
                  slots,
                  getCheckboxUtilityClass,
                  classes,
                );
              return (0, esm_extends.Z)({}, classes, composedClasses);
            })(ownerState);
          return (0,
          jsx_runtime.jsx)(CheckboxRoot, (0, esm_extends.Z)({ type: 'checkbox', inputProps: (0, esm_extends.Z)({ 'data-indeterminate': indeterminate }, inputProps), icon: react.cloneElement(icon, { fontSize: null != (_icon$props$fontSize = icon.props.fontSize) ? _icon$props$fontSize : size }), checkedIcon: react.cloneElement(indeterminateIcon, { fontSize: null != (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) ? _indeterminateIcon$pr : size }), ownerState, ref, className: (0, clsx_m.Z)(classes.root, className) }, other, { classes }));
        }),
        src_Checkbox_Checkbox = props => {
          const { ...muiProps } = props;
          return (0, jsx_runtime.jsx)(Checkbox_Checkbox, { ...muiProps });
        };
      src_Checkbox_Checkbox.displayName = 'Checkbox';
      try {
        (src_Checkbox_Checkbox.displayName = 'Checkbox'),
          (src_Checkbox_Checkbox.__docgenInfo = {
            description: '',
            displayName: 'Checkbox',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null',
                },
              },
              action: {
                defaultValue: null,
                description:
                  'A ref for imperative actions.\nIt currently only supports `focusVisible()` action.',
                name: 'action',
                required: !1,
                type: { name: 'Ref<ButtonBaseActions>' },
              },
              centerRipple: {
                defaultValue: { value: 'false' },
                description:
                  "If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",
                name: 'centerRipple',
                required: !1,
                type: { name: 'boolean' },
              },
              disableTouchRipple: {
                defaultValue: { value: 'false' },
                description: 'If `true`, the touch ripple effect is disabled.',
                name: 'disableTouchRipple',
                required: !1,
                type: { name: 'boolean' },
              },
              focusRipple: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the base button will have a keyboard focus ripple.',
                name: 'focusRipple',
                required: !1,
                type: { name: 'boolean' },
              },
              focusVisibleClassName: {
                defaultValue: null,
                description:
                  "This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",
                name: 'focusVisibleClassName',
                required: !1,
                type: { name: 'string' },
              },
              LinkComponent: {
                defaultValue: { value: "'a'" },
                description:
                  'The component used to render a link when the `href` prop is provided.',
                name: 'LinkComponent',
                required: !1,
                type: { name: 'ElementType<any>' },
              },
              onFocusVisible: {
                defaultValue: null,
                description:
                  'Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.',
                name: 'onFocusVisible',
                required: !1,
                type: { name: 'FocusEventHandler<any>' },
              },
              TouchRippleProps: {
                defaultValue: null,
                description: 'Props applied to the `TouchRipple` element.',
                name: 'TouchRippleProps',
                required: !1,
                type: { name: 'Partial<TouchRippleProps>' },
              },
              touchRippleRef: {
                defaultValue: null,
                description: 'A ref that points to the `TouchRipple` element.',
                name: 'touchRippleRef',
                required: !1,
                type: { name: 'Ref<TouchRippleActions>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Checkbox.tsx#Checkbox'] = {
              docgenInfo: src_Checkbox_Checkbox.__docgenInfo,
              name: 'Checkbox',
              path: 'src/Checkbox.tsx#Checkbox',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
