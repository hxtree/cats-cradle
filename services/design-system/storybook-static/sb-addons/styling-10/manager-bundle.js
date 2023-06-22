try {
  var W = __STORYBOOKAPI__,
    {
      ActiveTabs: w,
      Consumer: $,
      ManagerContext: z,
      Provider: U,
      addons: m,
      combineParameters: V,
      controlOrMetaKey: j,
      controlOrMetaSymbol: q,
      eventMatchesShortcut: Z,
      eventToShortcut: J,
      isMacLike: Q,
      isShortcutTaken: X,
      keyToSymbol: ee,
      merge: te,
      mockChannel: oe,
      optionOrAltSymbol: re,
      shortcutMatchesShortcut: ae,
      shortcutToHumanString: se,
      types: p,
      useAddonState: ne,
      useArgTypes: le,
      useArgs: ie,
      useChannel: me,
      useGlobalTypes: ce,
      useGlobals: ue,
      useParameter: Se,
      useSharedState: pe,
      useStoryPrepared: he,
      useStorybookApi: Te,
      useStorybookState: de,
    } = __STORYBOOKAPI__;
  var t = __REACT__,
    {
      Children: be,
      Component: ge,
      Fragment: h,
      Profiler: Ce,
      PureComponent: ke,
      StrictMode: fe,
      Suspense: Re,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Pe,
      cloneElement: ve,
      createContext: Ae,
      createElement: Me,
      createFactory: Le,
      createRef: Ie,
      forwardRef: Be,
      isValidElement: He,
      lazy: xe,
      memo: Ge,
      useCallback: Ne,
      useContext: Ke,
      useDebugValue: De,
      useEffect: Ye,
      useImperativeHandle: Fe,
      useLayoutEffect: We,
      useMemo: T,
      useReducer: we,
      useRef: $e,
      useState: ze,
      version: Ue,
    } = __REACT__;
  var Je = __STORYBOOKAPI__,
    {
      ActiveTabs: Qe,
      Consumer: Xe,
      ManagerContext: et,
      Provider: tt,
      addons: ot,
      combineParameters: rt,
      controlOrMetaKey: at,
      controlOrMetaSymbol: st,
      eventMatchesShortcut: nt,
      eventToShortcut: lt,
      isMacLike: it,
      isShortcutTaken: mt,
      keyToSymbol: ct,
      merge: ut,
      mockChannel: St,
      optionOrAltSymbol: pt,
      shortcutMatchesShortcut: ht,
      shortcutToHumanString: Tt,
      types: dt,
      useAddonState: d,
      useArgTypes: _t,
      useArgs: yt,
      useChannel: _,
      useGlobalTypes: Ot,
      useGlobals: y,
      useParameter: O,
      useSharedState: Et,
      useStoryPrepared: bt,
      useStorybookApi: gt,
      useStorybookState: Ct,
    } = __STORYBOOKAPI__;
  var vt = __STORYBOOKTHEMING__,
    {
      CacheProvider: At,
      ClassNames: Mt,
      Global: Lt,
      ThemeProvider: It,
      background: Bt,
      color: Ht,
      convert: xt,
      create: Gt,
      createCache: Nt,
      createGlobal: Kt,
      createReset: Dt,
      css: Yt,
      darken: Ft,
      ensure: Wt,
      ignoreSsrWarning: wt,
      isPropValid: $t,
      jsx: zt,
      keyframes: Ut,
      lighten: Vt,
      styled: E,
      themes: jt,
      typography: qt,
      useTheme: Zt,
      withTheme: Jt,
    } = __STORYBOOKTHEMING__;
  var oo = __STORYBOOKCOMPONENTS__,
    {
      A: ro,
      ActionBar: ao,
      AddonPanel: so,
      Badge: no,
      Bar: lo,
      Blockquote: io,
      Button: mo,
      Code: co,
      DL: uo,
      Div: So,
      DocumentWrapper: po,
      ErrorFormatter: ho,
      FlexBar: To,
      Form: _o,
      H1: yo,
      H2: Oo,
      H3: Eo,
      H4: bo,
      H5: go,
      H6: Co,
      HR: ko,
      IconButton: b,
      IconButtonSkeleton: fo,
      Icons: g,
      Img: Ro,
      LI: Po,
      Link: vo,
      ListItem: Ao,
      Loader: Mo,
      OL: Lo,
      P: Io,
      Placeholder: Bo,
      Pre: Ho,
      ResetWrapper: xo,
      ScrollArea: Go,
      Separator: No,
      Spaced: Ko,
      Span: Do,
      StorybookIcon: Yo,
      StorybookLogo: Fo,
      Symbols: Wo,
      SyntaxHighlighter: wo,
      TT: $o,
      TabBar: zo,
      TabButton: Uo,
      TabWrapper: Vo,
      Table: jo,
      Tabs: qo,
      TabsState: Zo,
      TooltipLinkList: C,
      TooltipMessage: Jo,
      TooltipNote: Qo,
      UL: Xo,
      WithTooltip: k,
      WithTooltipPure: er,
      Zoom: tr,
      codeCommon: or,
      components: rr,
      createCopyToClipboardFunction: ar,
      getStoryHref: sr,
      icons: nr,
      interleaveSeparators: lr,
      nameSpaceClassNames: ir,
      resetComponents: mr,
      withReset: cr,
    } = __STORYBOOKCOMPONENTS__;
  var f = '@storybook/addon-styling',
    i = `${f}/theme-switcher`,
    R = 'theming',
    M = { themesList: [], themeDefault: void 0 },
    L = {},
    I = { REGISTER_THEMES: `${i}/REGISTER_THEMES` },
    B = E.div(({ theme: e }) => ({
      fontSize: e.typography.size.s2 - 1,
      marginLeft: 10,
    })),
    H = e => e.length > 1,
    x = () => {
      let { themeOverride: e } = O(R, L),
        [{ theme: o }, P] = y(),
        [{ themesList: c, themeDefault: u }, v] = d(i, M);
      _({
        [I.REGISTER_THEMES]: ({ themes: r, defaultTheme: a }) => {
          v(A => ({ ...A, themesList: r, themeDefault: a }));
        },
      });
      let S = T(() => {
        if (e) return 'Story override';
        let r = o || u;
        return r && `${r} theme`;
      }, [e, u, o]);
      return (
        H(c) &&
        t.createElement(
          h,
          null,
          t.createElement(
            k,
            {
              placement: 'top',
              trigger: 'click',
              closeOnClick: !0,
              tooltip: ({ onHide: r }) =>
                t.createElement(C, {
                  links: c.map(a => ({
                    id: a,
                    title: a,
                    active: o === a,
                    onClick: () => {
                      P({ theme: a }), r();
                    },
                  })),
                }),
            },
            t.createElement(
              b,
              { key: i, active: !e, title: 'Theme' },
              t.createElement(g, { icon: 'paintbrush' }),
              S && t.createElement(B, null, S),
            ),
          ),
        )
      );
    };
  m.register(f, e => {
    m.add(i, {
      type: p.TOOL,
      title: 'Theme',
      match: ({ viewMode: o }) => !!(o && o.match(/^(story|docs)$/)),
      render: x,
      paramKey: R,
    });
  });
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e,
  );
}
//# sourceMappingURL=manager-bundle.js.map
