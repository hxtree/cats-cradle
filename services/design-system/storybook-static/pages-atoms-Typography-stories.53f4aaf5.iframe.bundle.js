'use strict';
(self.webpackChunk_cats_cradle_design_system =
  self.webpackChunk_cats_cradle_design_system || []).push([
  [675],
  {
    '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => Typography_Typography,
        });
        var objectWithoutPropertiesLoose = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js',
          ),
          esm_extends = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js',
          ),
          react = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
          ),
          clsx_m = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js',
          ),
          extendSxProp = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+system@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react@18.2.0/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js',
          ),
          composeClasses = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js',
          ),
          styled = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js',
          ),
          useThemeProps = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useThemeProps.js',
          ),
          capitalize = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/capitalize.js',
          ),
          generateUtilityClasses = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js',
          ),
          generateUtilityClass = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js',
          );
        function getTypographyUtilityClass(slot) {
          return (0, generateUtilityClass.Z)('MuiTypography', slot);
        }
        (0, generateUtilityClasses.Z)('MuiTypography', [
          'root',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'subtitle1',
          'subtitle2',
          'body1',
          'body2',
          'inherit',
          'button',
          'caption',
          'overline',
          'alignLeft',
          'alignRight',
          'alignCenter',
          'alignJustify',
          'noWrap',
          'gutterBottom',
          'paragraph',
        ]);
        var jsx_runtime = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
        const _excluded = [
            'align',
            'className',
            'component',
            'gutterBottom',
            'noWrap',
            'paragraph',
            'variant',
            'variantMapping',
          ],
          TypographyRoot = (0, styled.ZP)('span', {
            name: 'MuiTypography',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props;
              return [
                styles.root,
                ownerState.variant && styles[ownerState.variant],
                'inherit' !== ownerState.align &&
                  styles[`align${(0, capitalize.Z)(ownerState.align)}`],
                ownerState.noWrap && styles.noWrap,
                ownerState.gutterBottom && styles.gutterBottom,
                ownerState.paragraph && styles.paragraph,
              ];
            },
          })(({ theme, ownerState }) =>
            (0, esm_extends.Z)(
              { margin: 0 },
              ownerState.variant && theme.typography[ownerState.variant],
              'inherit' !== ownerState.align && { textAlign: ownerState.align },
              ownerState.noWrap && {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              },
              ownerState.gutterBottom && { marginBottom: '0.35em' },
              ownerState.paragraph && { marginBottom: 16 },
            ),
          ),
          defaultVariantMapping = {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            subtitle1: 'h6',
            subtitle2: 'h6',
            body1: 'p',
            body2: 'p',
            inherit: 'p',
          },
          colorTransformations = {
            primary: 'primary.main',
            textPrimary: 'text.primary',
            secondary: 'secondary.main',
            textSecondary: 'text.secondary',
            error: 'error.main',
          },
          Typography_Typography = react.forwardRef(function Typography(
            inProps,
            ref,
          ) {
            const themeProps = (0, useThemeProps.Z)({
                props: inProps,
                name: 'MuiTypography',
              }),
              color = (color => colorTransformations[color] || color)(
                themeProps.color,
              ),
              props = (0, extendSxProp.Z)(
                (0, esm_extends.Z)({}, themeProps, { color }),
              ),
              {
                align = 'inherit',
                className,
                component,
                gutterBottom = !1,
                noWrap = !1,
                paragraph = !1,
                variant = 'body1',
                variantMapping = defaultVariantMapping,
              } = props,
              other = (0, objectWithoutPropertiesLoose.Z)(props, _excluded),
              ownerState = (0, esm_extends.Z)({}, props, {
                align,
                color,
                className,
                component,
                gutterBottom,
                noWrap,
                paragraph,
                variant,
                variantMapping,
              }),
              Component =
                component ||
                (paragraph
                  ? 'p'
                  : variantMapping[variant] ||
                    defaultVariantMapping[variant]) ||
                'span',
              classes = (ownerState => {
                const {
                    align,
                    gutterBottom,
                    noWrap,
                    paragraph,
                    variant,
                    classes,
                  } = ownerState,
                  slots = {
                    root: [
                      'root',
                      variant,
                      'inherit' !== ownerState.align &&
                        `align${(0, capitalize.Z)(align)}`,
                      gutterBottom && 'gutterBottom',
                      noWrap && 'noWrap',
                      paragraph && 'paragraph',
                    ],
                  };
                return (0, composeClasses.Z)(
                  slots,
                  getTypographyUtilityClass,
                  classes,
                );
              })(ownerState);
            return (0, jsx_runtime.jsx)(
              TypographyRoot,
              (0, esm_extends.Z)(
                {
                  as: Component,
                  ref,
                  ownerState,
                  className: (0, clsx_m.Z)(classes.root, className),
                },
                other,
              ),
            );
          });
      },
    '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/capitalize.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        const __WEBPACK_DEFAULT_EXPORT__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/capitalize.js',
        ).Z;
      },
    '../../common/temp/node_modules/.pnpm/@mui+system@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react@18.2.0/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => extendSxProp });
        var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../common/temp/node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js',
            ),
          _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../common/temp/node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js',
            ),
          _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/deepmerge.js',
          ),
          _defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+system@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react@18.2.0/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js',
          );
        const _excluded = ['sx'],
          splitProps = props => {
            var _props$theme$unstable, _props$theme;
            const result = { systemProps: {}, otherProps: {} },
              config =
                null !=
                (_props$theme$unstable =
                  null == props || null == (_props$theme = props.theme)
                    ? void 0
                    : _props$theme.unstable_sxConfig)
                  ? _props$theme$unstable
                  : _defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__.Z;
            return (
              Object.keys(props).forEach(prop => {
                config[prop]
                  ? (result.systemProps[prop] = props[prop])
                  : (result.otherProps[prop] = props[prop]);
              }),
              result
            );
          };
        function extendSxProp(props) {
          const { sx: inSx } = props,
            other = (0,
            _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(
              props,
              _excluded,
            ),
            { systemProps, otherProps } = splitProps(other);
          let finalSx;
          return (
            (finalSx = Array.isArray(inSx)
              ? [systemProps, ...inSx]
              : 'function' == typeof inSx
              ? (...args) => {
                  const result = inSx(...args);
                  return (0, _mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)
                    ? (0,
                      _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        {},
                        systemProps,
                        result,
                      )
                    : systemProps;
                }
              : (0,
                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)(
                  {},
                  systemProps,
                  inSx,
                )),
            (0,
            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              otherProps,
              { sx: finalSx },
            )
          );
        }
      },
    '../../common/temp/node_modules/.pnpm/@mui+system@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react@18.2.0/node_modules/@mui/system/esm/styled.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        const __WEBPACK_DEFAULT_EXPORT__ = (0,
        __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+system@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react@18.2.0/node_modules/@mui/system/esm/createStyled.js',
        ).ZP)();
      },
    './stories/pages/atoms/Typography.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Body1: () => Body1,
          Heading1: () => Heading1,
          Heading2: () => Heading2,
          Heading3: () => Heading3,
          Heading4: () => Heading4,
          Heading5: () => Heading5,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _src_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/Typography.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Atoms/Typography',
          component: _src_Typography__WEBPACK_IMPORTED_MODULE_1__.Z,
        },
        Heading1 = () =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _src_Typography__WEBPACK_IMPORTED_MODULE_1__.Z,
            { variant: 'h1', children: 'Heading1' },
          );
      Heading1.displayName = 'Heading1';
      const Heading2 = () =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _src_Typography__WEBPACK_IMPORTED_MODULE_1__.Z,
          { variant: 'h2', children: 'Heading2' },
        );
      Heading2.displayName = 'Heading2';
      const Heading3 = () =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _src_Typography__WEBPACK_IMPORTED_MODULE_1__.Z,
          { variant: 'h3', children: 'Heading3' },
        );
      Heading3.displayName = 'Heading3';
      const Heading4 = () =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _src_Typography__WEBPACK_IMPORTED_MODULE_1__.Z,
          { variant: 'h4', children: 'Heading4' },
        );
      Heading4.displayName = 'Heading4';
      const Heading5 = () =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _src_Typography__WEBPACK_IMPORTED_MODULE_1__.Z,
          { variant: 'h3', children: 'Heading5' },
        );
      Heading5.displayName = 'Heading5';
      const Body1 = () =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _src_Typography__WEBPACK_IMPORTED_MODULE_1__.Z,
          { variant: 'body1', children: 'Body1' },
        );
      (Body1.displayName = 'Body1'),
        (Heading1.parameters = {
          ...Heading1.parameters,
          docs: {
            ...Heading1.parameters?.docs,
            source: {
              originalSource:
                '() => <Typography variant="h1">Heading1</Typography>',
              ...Heading1.parameters?.docs?.source,
            },
            description: {
              story:
                'Page heading1, there should only be one per page at the top level\n@returns',
              ...Heading1.parameters?.docs?.description,
            },
          },
        }),
        (Heading2.parameters = {
          ...Heading2.parameters,
          docs: {
            ...Heading2.parameters?.docs,
            source: {
              originalSource:
                '() => <Typography variant="h2">Heading2</Typography>',
              ...Heading2.parameters?.docs?.source,
            },
            description: {
              story:
                'Page heading2, should reside under a page heading2. May be multiple per page.\n@returns',
              ...Heading2.parameters?.docs?.description,
            },
          },
        }),
        (Heading3.parameters = {
          ...Heading3.parameters,
          docs: {
            ...Heading3.parameters?.docs,
            source: {
              originalSource:
                '() => <Typography variant="h3">Heading3</Typography>',
              ...Heading3.parameters?.docs?.source,
            },
          },
        }),
        (Heading4.parameters = {
          ...Heading4.parameters,
          docs: {
            ...Heading4.parameters?.docs,
            source: {
              originalSource:
                '() => <Typography variant="h4">Heading4</Typography>',
              ...Heading4.parameters?.docs?.source,
            },
          },
        }),
        (Heading5.parameters = {
          ...Heading5.parameters,
          docs: {
            ...Heading5.parameters?.docs,
            source: {
              originalSource:
                '() => <Typography variant="h3">Heading5</Typography>',
              ...Heading5.parameters?.docs?.source,
            },
          },
        }),
        (Body1.parameters = {
          ...Body1.parameters,
          docs: {
            ...Body1.parameters?.docs,
            source: {
              originalSource:
                '() => <Typography variant="body1">Body1</Typography>',
              ...Body1.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = [
        'Heading1',
        'Heading2',
        'Heading3',
        'Heading4',
        'Heading5',
        'Body1',
      ];
      try {
        (Heading1.displayName = 'Heading1'),
          (Heading1.__docgenInfo = {
            description:
              'Page heading1, there should only be one per page at the top level',
            displayName: 'Heading1',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/pages/atoms/Typography.stories.tsx#Heading1'
            ] = {
              docgenInfo: Heading1.__docgenInfo,
              name: 'Heading1',
              path: 'stories/pages/atoms/Typography.stories.tsx#Heading1',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Heading2.displayName = 'Heading2'),
          (Heading2.__docgenInfo = {
            description:
              'Page heading2, should reside under a page heading2. May be multiple per page.',
            displayName: 'Heading2',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/pages/atoms/Typography.stories.tsx#Heading2'
            ] = {
              docgenInfo: Heading2.__docgenInfo,
              name: 'Heading2',
              path: 'stories/pages/atoms/Typography.stories.tsx#Heading2',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/Typography.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => Typography });
      var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js',
      );
      const Typography = (0,
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/@mui+system@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react@18.2.0/node_modules/@mui/system/esm/styled.js',
      ).Z)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Z)(() => ({
        '&.center': { textAlign: 'center' },
        '&.MuiTypography-h1': {
          fontFamily: '"Eczar", serif',
          fontWeight: '800',
          fontSize: '2rem',
          color: 'var(--primary)',
          padding: '12px 0',
          '&.fill': {
            borderRadius: '5px',
            padding: '13px',
            color: 'var(--primary)',
          },
          '&.border': {
            fontSize: '4rem',
            width: '100%',
            position: 'relative',
            padding: { xs: '5px 0', sm: '10px 0' },
            paddingLeft: '15px',
            fontWeight: '600',
            verticalAlign: 'center',
            borderBottom: 'none',
            '&:before': {
              content: '""',
              position: 'absolute',
              width: '2px',
              height: '100%',
              top: 0,
              bottom: 0,
              left: '0',
              margin: 'auto',
              background: 'linear-gradient(180deg, #31aaff  0%, #2cd0ff 100%)',
              borderRadius: '3px',
            },
          },
        },
        '&.MuiTypography-h2': {
          fontSize: '2rem',
          color: 'var(--primary)',
          fontWeight: 'bold',
          padding: '12px 0',
          '&.border': {
            fontSize: '1.4rem',
            width: '100%',
            position: 'relative',
            padding: { xs: '5px 0', sm: '10px 0' },
            paddingLeft: '15px',
            fontWeight: '600',
            verticalAlign: 'center',
            borderBottom: 'none',
            '&:before': {
              content: '""',
              position: 'absolute',
              width: '2px',
              height: '100%',
              top: 0,
              bottom: 0,
              left: '0',
              margin: 'auto',
              background: 'linear-gradient(180deg, #31aaff  0%, #2cd0ff 100%)',
              borderRadius: '3px',
            },
          },
          '&.fill': {
            borderRadius: '5px',
            padding: '20px 13px',
            color: 'var(--primary)',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            borderBottom: 'none',
          },
        },
        '&.MuiTypography-h3': {
          fontFamily: 'Helvetica,Arial,sans-serif',
          fontWeight: '400',
          fontSize: '1.05rem',
        },
        '&.MuiTypography-h4': {
          fontFamily: 'Helvetica,Arial,sans-serif',
          fontWeight: '400',
          fontSize: '1rem',
        },
        '&.MuiTypography-h5': {
          fontFamily: 'Helvetica,Arial,sans-serif',
          fontWeight: '400',
          fontSize: '1rem',
        },
        '&.MuiTypography-h6': {
          fontFamily: 'Helvetica,Arial,sans-serif',
          fontWeight: '400',
          fontSize: '1rem',
        },
        '&.MuiTypography-body1': {
          fontFamily: 'Helvetica,Arial,sans-serif',
          fontWeight: '400',
          fontSize: '1rem',
        },
      }));
      try {
        (Typography.displayName = 'Typography'),
          (Typography.__docgenInfo = {
            description: '',
            displayName: 'Typography',
            props: {
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Width<string | number> | NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Height<string | number> | NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<string[] | Color>)',
                },
              },
              margin: {
                defaultValue: null,
                description: '',
                name: 'margin',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              p: {
                defaultValue: null,
                description: '',
                name: 'p',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              border: {
                defaultValue: null,
                description: '',
                name: 'border',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<number | "red" | "hidden" | "medium" | (string & {}) | "inset" | "none" | "inherit" | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset" | "aliceblue" | "antiquewhite" | ... 184 more ...> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              boxShadow: {
                defaultValue: null,
                description: '',
                name: 'boxShadow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)',
                },
              },
              fontWeight: {
                defaultValue: null,
                description: '',
                name: 'fontWeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)',
                },
              },
              zIndex: {
                defaultValue: null,
                description: '',
                name: 'zIndex',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)',
                },
              },
              alignContent: {
                defaultValue: null,
                description: '',
                name: 'alignContent',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignContent>)',
                },
              },
              alignItems: {
                defaultValue: null,
                description: '',
                name: 'alignItems',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)',
                },
              },
              alignSelf: {
                defaultValue: null,
                description: '',
                name: 'alignSelf',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignSelf>)',
                },
              },
              bottom: {
                defaultValue: null,
                description: '',
                name: 'bottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Bottom<string | number> | NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              boxSizing: {
                defaultValue: null,
                description: '',
                name: 'boxSizing',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BoxSizing | NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              columnGap: {
                defaultValue: null,
                description: '',
                name: 'columnGap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<ColumnGap<string | number> | NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              display: {
                defaultValue: null,
                description: '',
                name: 'display',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)',
                },
              },
              flexBasis: {
                defaultValue: null,
                description: '',
                name: 'flexBasis',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexBasis<string | number> | NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexDirection: {
                defaultValue: null,
                description: '',
                name: 'flexDirection',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexDirection | NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexGrow: {
                defaultValue: null,
                description: '',
                name: 'flexGrow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexGrow | NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexShrink: {
                defaultValue: null,
                description: '',
                name: 'flexShrink',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexShrink | NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexWrap: {
                defaultValue: null,
                description: '',
                name: 'flexWrap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexWrap | NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              fontFamily: {
                defaultValue: null,
                description: '',
                name: 'fontFamily',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontFamily>)',
                },
              },
              fontSize: {
                defaultValue: null,
                description: '',
                name: 'fontSize',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FontSize<string | number> | NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              fontStyle: {
                defaultValue: null,
                description: '',
                name: 'fontStyle',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontStyle>)',
                },
              },
              gridAutoColumns: {
                defaultValue: null,
                description: '',
                name: 'gridAutoColumns',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridAutoColumns<string | number> | NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridAutoFlow: {
                defaultValue: null,
                description: '',
                name: 'gridAutoFlow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridAutoFlow>)',
                },
              },
              gridAutoRows: {
                defaultValue: null,
                description: '',
                name: 'gridAutoRows',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridAutoRows<string | number> | NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridTemplateAreas: {
                defaultValue: null,
                description: '',
                name: 'gridTemplateAreas',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridTemplateAreas>)',
                },
              },
              gridTemplateColumns: {
                defaultValue: null,
                description: '',
                name: 'gridTemplateColumns',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridTemplateColumns<string | number> | NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridTemplateRows: {
                defaultValue: null,
                description: '',
                name: 'gridTemplateRows',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridTemplateRows<string | number> | NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              justifyContent: {
                defaultValue: null,
                description: '',
                name: 'justifyContent',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyContent>)',
                },
              },
              justifyItems: {
                defaultValue: null,
                description: '',
                name: 'justifyItems',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyItems>)',
                },
              },
              justifySelf: {
                defaultValue: null,
                description: '',
                name: 'justifySelf',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifySelf>)',
                },
              },
              left: {
                defaultValue: null,
                description: '',
                name: 'left',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Left<string | number> | NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              letterSpacing: {
                defaultValue: null,
                description: '',
                name: 'letterSpacing',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<LetterSpacing<string | number> | NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              lineHeight: {
                defaultValue: null,
                description: '',
                name: 'lineHeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<LineHeight<string | number> | NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginBottom: {
                defaultValue: null,
                description: '',
                name: 'marginBottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginLeft: {
                defaultValue: null,
                description: '',
                name: 'marginLeft',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginRight: {
                defaultValue: null,
                description: '',
                name: 'marginRight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginTop: {
                defaultValue: null,
                description: '',
                name: 'marginTop',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              maxHeight: {
                defaultValue: null,
                description: '',
                name: 'maxHeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MaxHeight<string | number> | NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              maxWidth: {
                defaultValue: null,
                description: '',
                name: 'maxWidth',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MaxWidth<string | number> | NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              minHeight: {
                defaultValue: null,
                description: '',
                name: 'minHeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MinHeight<string | number> | NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              minWidth: {
                defaultValue: null,
                description: '',
                name: 'minWidth',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MinWidth<string | number> | NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              order: {
                defaultValue: null,
                description: '',
                name: 'order',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Order | NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | NonNullable<...>[] | undefined>)',
                },
              },
              paddingBottom: {
                defaultValue: null,
                description: '',
                name: 'paddingBottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingLeft: {
                defaultValue: null,
                description: '',
                name: 'paddingLeft',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingRight: {
                defaultValue: null,
                description: '',
                name: 'paddingRight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingTop: {
                defaultValue: null,
                description: '',
                name: 'paddingTop',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              position: {
                defaultValue: null,
                description: '',
                name: 'position',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Position | NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              right: {
                defaultValue: null,
                description: '',
                name: 'right',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Right<string | number> | NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              rowGap: {
                defaultValue: null,
                description: '',
                name: 'rowGap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<RowGap<string | number> | NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              textAlign: {
                defaultValue: null,
                description: '',
                name: 'textAlign',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<TextAlign | NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              textOverflow: {
                defaultValue: null,
                description: '',
                name: 'textOverflow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | TextOverflow>)',
                },
              },
              textTransform: {
                defaultValue: null,
                description: '',
                name: 'textTransform',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<TextTransform | NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              top: {
                defaultValue: null,
                description: '',
                name: 'top',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Top<string | number> | NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              visibility: {
                defaultValue: null,
                description: '',
                name: 'visibility',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Visibility | NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              whiteSpace: {
                defaultValue: null,
                description: '',
                name: 'whiteSpace',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<WhiteSpace | NonNullable<WhiteSpace>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderBottom: {
                defaultValue: null,
                description: '',
                name: 'borderBottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderBottom<string | number> | NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderColor: {
                defaultValue: null,
                description: '',
                name: 'borderColor',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BorderColor>)',
                },
              },
              borderLeft: {
                defaultValue: null,
                description: '',
                name: 'borderLeft',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderLeft<string | number> | NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderRadius: {
                defaultValue: null,
                description: '',
                name: 'borderRadius',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderRadius<string | number> | NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderRight: {
                defaultValue: null,
                description: '',
                name: 'borderRight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderRight<string | number> | NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderTop: {
                defaultValue: null,
                description: '',
                name: 'borderTop',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderTop<string | number> | NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flex: {
                defaultValue: null,
                description: '',
                name: 'flex',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Flex<string | number> | NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gap: {
                defaultValue: null,
                description: '',
                name: 'gap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Gap<string | number> | NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridArea: {
                defaultValue: null,
                description: '',
                name: 'gridArea',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridArea | NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridColumn: {
                defaultValue: null,
                description: '',
                name: 'gridColumn',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridColumn | NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridRow: {
                defaultValue: null,
                description: '',
                name: 'gridRow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | NonNullable<...>[] | undefined>)',
                },
              },
              overflow: {
                defaultValue: null,
                description: '',
                name: 'overflow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | Overflow>)',
                },
              },
              padding: {
                defaultValue: null,
                description: '',
                name: 'padding',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              bgcolor: {
                defaultValue: null,
                description: '',
                name: 'bgcolor',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BackgroundColor>)',
                },
              },
              m: {
                defaultValue: null,
                description: '',
                name: 'm',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mt: {
                defaultValue: null,
                description: '',
                name: 'mt',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mr: {
                defaultValue: null,
                description: '',
                name: 'mr',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mb: {
                defaultValue: null,
                description: '',
                name: 'mb',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              ml: {
                defaultValue: null,
                description: '',
                name: 'ml',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mx: {
                defaultValue: null,
                description: '',
                name: 'mx',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginX: {
                defaultValue: null,
                description: '',
                name: 'marginX',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              my: {
                defaultValue: null,
                description: '',
                name: 'my',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginY: {
                defaultValue: null,
                description: '',
                name: 'marginY',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pt: {
                defaultValue: null,
                description: '',
                name: 'pt',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pr: {
                defaultValue: null,
                description: '',
                name: 'pr',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pb: {
                defaultValue: null,
                description: '',
                name: 'pb',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pl: {
                defaultValue: null,
                description: '',
                name: 'pl',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              px: {
                defaultValue: null,
                description: '',
                name: 'px',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingX: {
                defaultValue: null,
                description: '',
                name: 'paddingX',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              py: {
                defaultValue: null,
                description: '',
                name: 'py',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingY: {
                defaultValue: null,
                description: '',
                name: 'paddingY',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              typography: {
                defaultValue: null,
                description: '',
                name: 'typography',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)',
                },
              },
              displayPrint: {
                defaultValue: null,
                description: '',
                name: 'displayPrint',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)',
                },
              },
              align: {
                defaultValue: { value: "'inherit'" },
                description: 'Set the text-align on the component.',
                name: 'align',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"center"' },
                    { value: '"left"' },
                    { value: '"right"' },
                    { value: '"inherit"' },
                    { value: '"justify"' },
                  ],
                },
              },
              children: {
                defaultValue: null,
                description: 'The content of the component.',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<TypographyClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              gutterBottom: {
                defaultValue: { value: 'false' },
                description: 'If `true`, the text will have a bottom margin.',
                name: 'gutterBottom',
                required: !1,
                type: { name: 'boolean' },
              },
              noWrap: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.\n\nNote that text overflow can only happen with block or inline-block level elements\n(the element needs to have a width in order to overflow).',
                name: 'noWrap',
                required: !1,
                type: { name: 'boolean' },
              },
              paragraph: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the element will be a paragraph element.',
                name: 'paragraph',
                required: !1,
                type: { name: 'boolean' },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: {
                  name: '((SystemCssProperties<Theme> | CSSPseudoSelectorProps<Theme> | CSSSelectorObjectOrCssVariables<Theme> | ((theme: Theme) => SystemStyleObject<...>) | readonly (boolean | ... 1 more ... | ((theme: Theme) => SystemStyleObject<...>))[]) & (SystemCssProperties<...> | ... 3 more ... | readonly (boolean | ... 1 more ... | ...',
                },
              },
              variant: {
                defaultValue: { value: "'body1'" },
                description: 'Applies the theme typography styles.',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"button"' },
                    { value: '"caption"' },
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"h5"' },
                    { value: '"h6"' },
                    { value: '"inherit"' },
                    { value: '"overline"' },
                    { value: '"subtitle1"' },
                    { value: '"subtitle2"' },
                    { value: '"body1"' },
                    { value: '"body2"' },
                  ],
                },
              },
              variantMapping: {
                defaultValue: {
                  value:
                    "{\nh1: 'h1',\nh2: 'h2',\nh3: 'h3',\nh4: 'h4',\nh5: 'h5',\nh6: 'h6',\nsubtitle1: 'h6',\nsubtitle2: 'h6',\nbody1: 'p',\nbody2: 'p',\ninherit: 'p',\n}",
                },
                description:
                  'The component maps the variant prop to a range of different HTML element types.\nFor instance, subtitle1 to `<h6>`.\nIf you wish to change that mapping, you can provide your own.\nAlternatively, you can use the `component` prop.',
                name: 'variantMapping',
                required: !1,
                type: {
                  name: 'Partial<Record<OverridableStringUnion<"inherit" | Variant, TypographyPropsVariantOverrides>, string>>',
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Typography.tsx#Typography'] = {
              docgenInfo: Typography.__docgenInfo,
              name: 'Typography',
              path: 'src/Typography.tsx#Typography',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
