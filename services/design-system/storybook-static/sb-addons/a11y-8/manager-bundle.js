try {
  var I = 'storybook/a11y',
    X = `${I}/panel`,
    ue = 'a11y',
    et = `${I}/result`,
    tt = `${I}/request`,
    rt = `${I}/running`,
    nt = `${I}/error`,
    at = `${I}/manual`,
    N = { RESULT: et, REQUEST: tt, RUNNING: rt, ERROR: nt, MANUAL: at };
  var a = __REACT__,
    {
      Children: vn,
      Component: it,
      Fragment: $,
      Profiler: _n,
      PureComponent: de,
      StrictMode: Sn,
      Suspense: On,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: xn,
      cloneElement: G,
      createContext: fe,
      createElement: g,
      createFactory: Cn,
      createRef: me,
      forwardRef: ot,
      isValidElement: pe,
      lazy: In,
      memo: An,
      useCallback: A,
      useContext: ge,
      useDebugValue: kn,
      useEffect: B,
      useImperativeHandle: wn,
      useLayoutEffect: he,
      useMemo: j,
      useReducer: Dn,
      useRef: z,
      useState: k,
      version: Nn,
    } = __REACT__;
  var Bn = __STORYBOOKAPI__,
    {
      ActiveTabs: Mn,
      Consumer: $n,
      ManagerContext: Gn,
      Provider: jn,
      addons: W,
      combineParameters: zn,
      controlOrMetaKey: Wn,
      controlOrMetaSymbol: Fn,
      eventMatchesShortcut: Un,
      eventToShortcut: Yn,
      isMacLike: Vn,
      isShortcutTaken: Kn,
      keyToSymbol: Xn,
      merge: qn,
      mockChannel: Qn,
      optionOrAltSymbol: Jn,
      shortcutMatchesShortcut: Zn,
      shortcutToHumanString: ea,
      types: q,
      useAddonState: Re,
      useArgTypes: ta,
      useArgs: ra,
      useChannel: Q,
      useGlobalTypes: na,
      useGlobals: aa,
      useParameter: ye,
      useSharedState: ia,
      useStoryPrepared: oa,
      useStorybookApi: be,
      useStorybookState: Te,
    } = __STORYBOOKAPI__;
  var da = __STORYBOOKTHEMING__,
    {
      CacheProvider: fa,
      ClassNames: ma,
      Global: ve,
      ThemeProvider: pa,
      background: ga,
      color: ha,
      convert: F,
      create: Ea,
      createCache: Ra,
      createGlobal: ya,
      createReset: ba,
      css: Ta,
      darken: va,
      ensure: _a,
      ignoreSsrWarning: Sa,
      isPropValid: Oa,
      jsx: xa,
      keyframes: Ca,
      lighten: Ia,
      styled: s,
      themes: U,
      typography: Aa,
      useTheme: ka,
      withTheme: wa,
    } = __STORYBOOKTHEMING__;
  var Pa = __STORYBOOKCOMPONENTS__,
    {
      A: Ba,
      ActionBar: J,
      AddonPanel: Ma,
      Badge: _e,
      Bar: $a,
      Blockquote: Ga,
      Button: ja,
      Code: za,
      DL: Wa,
      Div: Fa,
      DocumentWrapper: Ua,
      ErrorFormatter: Ya,
      FlexBar: Va,
      Form: Ka,
      H1: Xa,
      H2: qa,
      H3: Qa,
      H4: Ja,
      H5: Za,
      H6: ei,
      HR: ti,
      IconButton: Se,
      IconButtonSkeleton: ri,
      Icons: Y,
      Img: ni,
      LI: ai,
      Link: ii,
      ListItem: oi,
      Loader: li,
      OL: ci,
      P: si,
      Placeholder: Oe,
      Pre: ui,
      ResetWrapper: di,
      ScrollArea: xe,
      Separator: fi,
      Spaced: mi,
      Span: pi,
      StorybookIcon: gi,
      StorybookLogo: hi,
      Symbols: Ei,
      SyntaxHighlighter: Ri,
      TT: yi,
      TabBar: bi,
      TabButton: Ti,
      TabWrapper: vi,
      Table: _i,
      Tabs: Si,
      TabsState: Oi,
      TooltipLinkList: Ce,
      TooltipMessage: xi,
      TooltipNote: Ci,
      UL: Ii,
      WithTooltip: Ie,
      WithTooltipPure: Ai,
      Zoom: ki,
      codeCommon: wi,
      components: Di,
      createCopyToClipboardFunction: Ni,
      getStoryHref: Hi,
      icons: Li,
      interleaveSeparators: Pi,
      nameSpaceClassNames: Bi,
      resetComponents: Mi,
      withReset: $i,
    } = __STORYBOOKCOMPONENTS__;
  var Fi = __REACTDOM__,
    {
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ui,
      createPortal: Yi,
      findDOMNode: Ae,
      flushSync: Vi,
      hydrate: Ki,
      render: Xi,
      unmountComponentAtNode: qi,
      unstable_batchedUpdates: Qi,
      unstable_createPortal: Ji,
      unstable_renderSubtreeIntoContainer: Zi,
      version: eo,
    } = __REACTDOM__;
  var ee = function (e, r) {
    return (
      (ee =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, t) {
            n.__proto__ = t;
          }) ||
        function (n, t) {
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        }),
      ee(e, r)
    );
  };
  function lt(e, r) {
    if (typeof r != 'function' && r !== null)
      throw new TypeError(
        'Class extends value ' + String(r) + ' is not a constructor or null',
      );
    ee(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype =
      r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
  }
  var te = function () {
    return (
      (te =
        Object.assign ||
        function (r) {
          for (var n, t = 1, i = arguments.length; t < i; t++) {
            n = arguments[t];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (r[l] = n[l]);
          }
          return r;
        }),
      te.apply(this, arguments)
    );
  };
  function ct(e, r) {
    var n = {};
    for (var t in e)
      Object.prototype.hasOwnProperty.call(e, t) &&
        r.indexOf(t) < 0 &&
        (n[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++)
        r.indexOf(t[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, t[i]) &&
          (n[t[i]] = e[t[i]]);
    return n;
  }
  var V =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u' || typeof window < 'u'
      ? window
      : typeof self < 'u'
      ? self
      : {};
  function st(e) {
    var r = typeof e;
    return e != null && (r == 'object' || r == 'function');
  }
  var ne = st,
    ut = typeof V == 'object' && V && V.Object === Object && V,
    dt = ut,
    ft = dt,
    mt = typeof self == 'object' && self && self.Object === Object && self,
    pt = ft || mt || Function('return this')(),
    Be = pt,
    gt = Be,
    ht = function () {
      return gt.Date.now();
    },
    Et = ht,
    Rt = /\s/;
  function yt(e) {
    for (var r = e.length; r-- && Rt.test(e.charAt(r)); );
    return r;
  }
  var bt = yt,
    Tt = bt,
    vt = /^\s+/;
  function _t(e) {
    return e && e.slice(0, Tt(e) + 1).replace(vt, '');
  }
  var St = _t,
    Ot = Be,
    xt = Ot.Symbol,
    Me = xt,
    ke = Me,
    $e = Object.prototype,
    Ct = $e.hasOwnProperty,
    It = $e.toString,
    M = ke ? ke.toStringTag : void 0;
  function At(e) {
    var r = Ct.call(e, M),
      n = e[M];
    try {
      e[M] = void 0;
      var t = !0;
    } catch {}
    var i = It.call(e);
    return t && (r ? (e[M] = n) : delete e[M]), i;
  }
  var kt = At,
    wt = Object.prototype,
    Dt = wt.toString;
  function Nt(e) {
    return Dt.call(e);
  }
  var Ht = Nt,
    we = Me,
    Lt = kt,
    Pt = Ht,
    Bt = '[object Null]',
    Mt = '[object Undefined]',
    De = we ? we.toStringTag : void 0;
  function $t(e) {
    return e == null
      ? e === void 0
        ? Mt
        : Bt
      : De && De in Object(e)
      ? Lt(e)
      : Pt(e);
  }
  var Gt = $t;
  function jt(e) {
    return e != null && typeof e == 'object';
  }
  var zt = jt,
    Wt = Gt,
    Ft = zt,
    Ut = '[object Symbol]';
  function Yt(e) {
    return typeof e == 'symbol' || (Ft(e) && Wt(e) == Ut);
  }
  var Vt = Yt,
    Kt = St,
    Ne = ne,
    Xt = Vt,
    He = 0 / 0,
    qt = /^[-+]0x[0-9a-f]+$/i,
    Qt = /^0b[01]+$/i,
    Jt = /^0o[0-7]+$/i,
    Zt = parseInt;
  function er(e) {
    if (typeof e == 'number') return e;
    if (Xt(e)) return He;
    if (Ne(e)) {
      var r = typeof e.valueOf == 'function' ? e.valueOf() : e;
      e = Ne(r) ? r + '' : r;
    }
    if (typeof e != 'string') return e === 0 ? e : +e;
    e = Kt(e);
    var n = Qt.test(e);
    return n || Jt.test(e) ? Zt(e.slice(2), n ? 2 : 8) : qt.test(e) ? He : +e;
  }
  var tr = er,
    rr = ne,
    Z = Et,
    Le = tr,
    nr = 'Expected a function',
    ar = Math.max,
    ir = Math.min;
  function or(e, r, n) {
    var t,
      i,
      l,
      u,
      c,
      m,
      p = 0,
      d = !1,
      f = !1,
      o = !0;
    if (typeof e != 'function') throw new TypeError(nr);
    (r = Le(r) || 0),
      rr(n) &&
        ((d = !!n.leading),
        (f = 'maxWait' in n),
        (l = f ? ar(Le(n.maxWait) || 0, r) : l),
        (o = 'trailing' in n ? !!n.trailing : o));
    function y(h) {
      var _ = t,
        S = i;
      return (t = i = void 0), (p = h), (u = e.apply(S, _)), u;
    }
    function b(h) {
      return (p = h), (c = setTimeout(R, r)), d ? y(h) : u;
    }
    function T(h) {
      var _ = h - m,
        S = h - p,
        P = r - _;
      return f ? ir(P, l - S) : P;
    }
    function E(h) {
      var _ = h - m,
        S = h - p;
      return m === void 0 || _ >= r || _ < 0 || (f && S >= l);
    }
    function R() {
      var h = Z();
      if (E(h)) return v(h);
      c = setTimeout(R, T(h));
    }
    function v(h) {
      return (c = void 0), o && t ? y(h) : ((t = i = void 0), u);
    }
    function H() {
      c !== void 0 && clearTimeout(c), (p = 0), (t = m = i = c = void 0);
    }
    function L() {
      return c === void 0 ? u : v(Z());
    }
    function D() {
      var h = Z(),
        _ = E(h);
      if (((t = arguments), (i = this), (m = h), _)) {
        if (c === void 0) return b(m);
        if (f) return clearTimeout(c), (c = setTimeout(R, r)), y(m);
      }
      return c === void 0 && (c = setTimeout(R, r)), u;
    }
    return (D.cancel = H), (D.flush = L), D;
  }
  var Ge = or,
    lr = Ge,
    cr = ne,
    sr = 'Expected a function';
  function ur(e, r, n) {
    var t = !0,
      i = !0;
    if (typeof e != 'function') throw new TypeError(sr);
    return (
      cr(n) &&
        ((t = 'leading' in n ? !!n.leading : t),
        (i = 'trailing' in n ? !!n.trailing : i)),
      lr(e, r, { leading: t, maxWait: r, trailing: i })
    );
  }
  var dr = ur,
    je = function (e, r, n, t) {
      switch (r) {
        case 'debounce':
          return Ge(e, n, t);
        case 'throttle':
          return dr(e, n, t);
        default:
          return e;
      }
    },
    re = function (e) {
      return typeof e == 'function';
    },
    w = function () {
      return typeof window > 'u';
    },
    Pe = function (e) {
      return e instanceof Element || e instanceof HTMLDocument;
    },
    ze = function (e, r, n, t) {
      return function (i) {
        var l = i.width,
          u = i.height;
        r(function (c) {
          return (c.width === l && c.height === u) ||
            (c.width === l && !t) ||
            (c.height === u && !n)
            ? c
            : (e && re(e) && e(l, u), { width: l, height: u });
        });
      };
    },
    lo = (function (e) {
      lt(r, e);
      function r(n) {
        var t = e.call(this, n) || this;
        (t.cancelHandler = function () {
          t.resizeHandler &&
            t.resizeHandler.cancel &&
            (t.resizeHandler.cancel(), (t.resizeHandler = null));
        }),
          (t.attachObserver = function () {
            var p = t.props,
              d = p.targetRef,
              f = p.observerOptions;
            if (!w()) {
              d && d.current && (t.targetRef.current = d.current);
              var o = t.getElement();
              o &&
                ((t.observableElement && t.observableElement === o) ||
                  ((t.observableElement = o), t.resizeObserver.observe(o, f)));
            }
          }),
          (t.getElement = function () {
            var p = t.props,
              d = p.querySelector,
              f = p.targetDomEl;
            if (w()) return null;
            if (d) return document.querySelector(d);
            if (f && Pe(f)) return f;
            if (t.targetRef && Pe(t.targetRef.current))
              return t.targetRef.current;
            var o = Ae(t);
            if (!o) return null;
            var y = t.getRenderType();
            switch (y) {
              case 'renderProp':
                return o;
              case 'childFunction':
                return o;
              case 'child':
                return o;
              case 'childArray':
                return o;
              default:
                return o.parentElement;
            }
          }),
          (t.createResizeHandler = function (p) {
            var d = t.props,
              f = d.handleWidth,
              o = f === void 0 ? !0 : f,
              y = d.handleHeight,
              b = y === void 0 ? !0 : y,
              T = d.onResize;
            if (!(!o && !b)) {
              var E = ze(T, t.setState.bind(t), o, b);
              p.forEach(function (R) {
                var v = (R && R.contentRect) || {},
                  H = v.width,
                  L = v.height,
                  D = !t.skipOnMount && !w();
                D && E({ width: H, height: L }), (t.skipOnMount = !1);
              });
            }
          }),
          (t.getRenderType = function () {
            var p = t.props,
              d = p.render,
              f = p.children;
            return re(d)
              ? 'renderProp'
              : re(f)
              ? 'childFunction'
              : pe(f)
              ? 'child'
              : Array.isArray(f)
              ? 'childArray'
              : 'parent';
          });
        var i = n.skipOnMount,
          l = n.refreshMode,
          u = n.refreshRate,
          c = u === void 0 ? 1e3 : u,
          m = n.refreshOptions;
        return (
          (t.state = { width: void 0, height: void 0 }),
          (t.skipOnMount = i),
          (t.targetRef = me()),
          (t.observableElement = null),
          w() ||
            ((t.resizeHandler = je(t.createResizeHandler, l, c, m)),
            (t.resizeObserver = new window.ResizeObserver(t.resizeHandler))),
          t
        );
      }
      return (
        (r.prototype.componentDidMount = function () {
          this.attachObserver();
        }),
        (r.prototype.componentDidUpdate = function () {
          this.attachObserver();
        }),
        (r.prototype.componentWillUnmount = function () {
          w() ||
            ((this.observableElement = null),
            this.resizeObserver.disconnect(),
            this.cancelHandler());
        }),
        (r.prototype.render = function () {
          var n = this.props,
            t = n.render,
            i = n.children,
            l = n.nodeType,
            u = l === void 0 ? 'div' : l,
            c = this.state,
            m = c.width,
            p = c.height,
            d = { width: m, height: p, targetRef: this.targetRef },
            f = this.getRenderType(),
            o;
          switch (f) {
            case 'renderProp':
              return t && t(d);
            case 'childFunction':
              return (o = i), o(d);
            case 'child':
              if (((o = i), o.type && typeof o.type == 'string')) {
                d.targetRef;
                var y = ct(d, ['targetRef']);
                return G(o, y);
              }
              return G(o, d);
            case 'childArray':
              return (
                (o = i),
                o.map(function (b) {
                  return !!b && G(b, d);
                })
              );
            default:
              return g(u, null);
          }
        }),
        r
      );
    })(de);
  var fr = w() ? B : he;
  function ae(e) {
    e === void 0 && (e = {});
    var r = e.skipOnMount,
      n = r === void 0 ? !1 : r,
      t = e.refreshMode,
      i = e.refreshRate,
      l = i === void 0 ? 1e3 : i,
      u = e.refreshOptions,
      c = e.handleWidth,
      m = c === void 0 ? !0 : c,
      p = e.handleHeight,
      d = p === void 0 ? !0 : p,
      f = e.targetRef,
      o = e.observerOptions,
      y = e.onResize,
      b = z(n),
      T = z(null),
      E = f ?? T,
      R = z(),
      v = k({ width: void 0, height: void 0 }),
      H = v[0],
      L = v[1];
    return (
      fr(
        function () {
          if (!w()) {
            var D = ze(y, L, m, d),
              h = function (S) {
                (!m && !d) ||
                  S.forEach(function (P) {
                    var se = (P && P.contentRect) || {},
                      Qe = se.width,
                      Je = se.height,
                      Ze = !b.current && !w();
                    Ze && D({ width: Qe, height: Je }), (b.current = !1);
                  });
              };
            R.current = je(h, t, l, u);
            var _ = new window.ResizeObserver(R.current);
            return (
              E.current && _.observe(E.current, o),
              function () {
                _.disconnect();
                var S = R.current;
                S && S.cancel && S.cancel();
              }
            );
          }
        },
        [t, l, u, m, d, y, o, E.current],
      ),
      te({ ref: E }, H)
    );
  }
  var mo = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: po,
      CONFIG_ERROR: go,
      CURRENT_STORY_WAS_SET: ho,
      DOCS_PREPARED: Eo,
      DOCS_RENDERED: Ro,
      FORCE_REMOUNT: yo,
      FORCE_RE_RENDER: bo,
      GLOBALS_UPDATED: To,
      IGNORED_EXCEPTION: vo,
      NAVIGATE_URL: _o,
      PLAY_FUNCTION_THREW_EXCEPTION: So,
      PRELOAD_ENTRIES: Oo,
      PREVIEW_BUILDER_PROGRESS: xo,
      PREVIEW_KEYDOWN: Co,
      REGISTER_SUBSCRIPTION: Io,
      RESET_STORY_ARGS: Ao,
      SELECT_STORY: ko,
      SET_CONFIG: wo,
      SET_CURRENT_STORY: Do,
      SET_GLOBALS: No,
      SET_INDEX: Ho,
      SET_STORIES: Lo,
      SHARED_STATE_CHANGED: Po,
      SHARED_STATE_SET: Bo,
      STORIES_COLLAPSE_ALL: Mo,
      STORIES_EXPAND_ALL: $o,
      STORY_ARGS_UPDATED: Go,
      STORY_CHANGED: We,
      STORY_ERRORED: jo,
      STORY_INDEX_INVALIDATED: zo,
      STORY_MISSING: Wo,
      STORY_PREPARED: Fo,
      STORY_RENDERED: Fe,
      STORY_RENDER_PHASE_CHANGED: Uo,
      STORY_SPECIFIED: Yo,
      STORY_THREW_EXCEPTION: Vo,
      STORY_UNCHANGED: Ko,
      UPDATE_GLOBALS: Xo,
      UPDATE_QUERY_PARAMS: qo,
      UPDATE_STORY_ARGS: Qo,
    } = __STORYBOOKCOREEVENTS__;
  var Ue = 'storybook/highlight';
  var ie = `${Ue}/add`,
    mr = `${Ue}/reset`;
  var pr = e =>
      g(
        'svg',
        { ...e },
        g(
          'defs',
          null,
          g(
            'filter',
            { id: 'protanopia' },
            g('feColorMatrix', {
              in: 'SourceGraphic',
              type: 'matrix',
              values:
                '0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0',
            }),
          ),
          g(
            'filter',
            { id: 'protanomaly' },
            g('feColorMatrix', {
              in: 'SourceGraphic',
              type: 'matrix',
              values:
                '0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0',
            }),
          ),
          g(
            'filter',
            { id: 'deuteranopia' },
            g('feColorMatrix', {
              in: 'SourceGraphic',
              type: 'matrix',
              values:
                '0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0',
            }),
          ),
          g(
            'filter',
            { id: 'deuteranomaly' },
            g('feColorMatrix', {
              in: 'SourceGraphic',
              type: 'matrix',
              values:
                '0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0',
            }),
          ),
          g(
            'filter',
            { id: 'tritanopia' },
            g('feColorMatrix', {
              in: 'SourceGraphic',
              type: 'matrix',
              values:
                '0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0',
            }),
          ),
          g(
            'filter',
            { id: 'tritanomaly' },
            g('feColorMatrix', {
              in: 'SourceGraphic',
              type: 'matrix',
              values:
                '0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0',
            }),
          ),
          g(
            'filter',
            { id: 'achromatopsia' },
            g('feColorMatrix', {
              in: 'SourceGraphic',
              type: 'matrix',
              values:
                '0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0',
            }),
          ),
        ),
      ),
    gr = 'storybook-preview-iframe',
    hr = [
      { name: 'blurred vision', percentage: 22.9 },
      { name: 'deuteranomaly', percentage: 2.7 },
      { name: 'deuteranopia', percentage: 0.56 },
      { name: 'protanomaly', percentage: 0.66 },
      { name: 'protanopia', percentage: 0.59 },
      { name: 'tritanomaly', percentage: 0.01 },
      { name: 'tritanopia', percentage: 0.016 },
      { name: 'achromatopsia', percentage: 1e-4 },
      { name: 'grayscale' },
    ],
    Ke = e =>
      e
        ? e === 'blurred vision'
          ? 'blur(2px)'
          : e === 'grayscale'
          ? 'grayscale(100%)'
          : `url('#${e}')`
        : 'none',
    Er = s.div(() => ({
      '&, & svg': { position: 'absolute', width: 0, height: 0 },
    })),
    Rr = s.span(
      {
        background:
          'linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)',
        borderRadius: '1rem',
        display: 'block',
        height: '1rem',
        width: '1rem',
      },
      ({ filter: e }) => ({ filter: Ke(e) }),
      ({ theme: e }) => ({ boxShadow: `${e.appBorderColor} 0 0 0 1px inset` }),
    ),
    yr = s.span({ display: 'flex', flexDirection: 'column' }),
    br = s.span({ textTransform: 'capitalize' }),
    Tr = s.span(({ theme: e }) => ({ fontSize: 11, color: e.textMutedColor })),
    vr = (e, r) => [
      ...(e !== null
        ? [
            {
              id: 'reset',
              title: 'Reset color filter',
              onClick: () => {
                r(null);
              },
              right: void 0,
              active: !1,
            },
          ]
        : []),
      ...hr.map(n => {
        let t = n.percentage !== void 0 ? `${n.percentage}% of users` : void 0;
        return {
          id: n.name,
          title: a.createElement(
            yr,
            null,
            a.createElement(br, null, n.name),
            t && a.createElement(Tr, null, t),
          ),
          onClick: () => {
            r(n);
          },
          right: a.createElement(Rr, { filter: n.name }),
          active: e === n,
        };
      }),
    ],
    _r = () => {
      let [e, r] = k(null);
      return a.createElement(
        a.Fragment,
        null,
        e &&
          a.createElement(ve, {
            styles: { [`#${gr}`]: { filter: Ke(e.name) } },
          }),
        a.createElement(
          Ie,
          {
            placement: 'top',
            tooltip: ({ onHide: n }) => {
              let t = vr(e, i => {
                r(i), n();
              });
              return a.createElement(Ce, { links: t });
            },
            closeOnOutsideClick: !0,
            onDoubleClick: () => r(null),
          },
          a.createElement(
            Se,
            { key: 'filter', active: !!e, title: 'Vision simulator' },
            a.createElement(Y, { icon: 'accessibility' }),
          ),
        ),
        a.createElement(Er, null, a.createElement(pr, null)),
      );
    },
    Sr = s.div({ padding: 12, marginBottom: 10 }),
    Or = s.p({ margin: '0 0 12px' }),
    xr = s.a({
      marginTop: 12,
      textDecoration: 'underline',
      color: 'inherit',
      display: 'block',
    }),
    Cr = ({ item: e }) =>
      a.createElement(
        Sr,
        null,
        a.createElement(Or, null, e.description),
        a.createElement(
          xr,
          { href: e.helpUrl, target: '_blank' },
          'More info...',
        ),
      ),
    Ir = s.div({
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 4,
      paddingRight: 4,
      paddingTop: 4,
      fontWeight: 400,
    }),
    Ar = s.div(({ elementWidth: e }) => ({
      flexDirection: e > 407 ? 'row' : 'inherit',
      marginBottom: e > 407 ? 6 : 12,
      display: e > 407 ? 'flex' : 'block',
    })),
    kr = s(_e)({
      padding: '2px 8px',
      marginBottom: 3,
      minWidth: 65,
      maxWidth: 'fit-content',
      width: '100%',
      textAlign: 'center',
    }),
    wr = s.div({ paddingLeft: 6, paddingRight: 23 }),
    Dr = e => e.charAt(0).toUpperCase().concat(e.slice(1)),
    Nr = ({ rule: e }) => {
      let { ref: r, width: n } = ae({
          refreshMode: 'debounce',
          handleHeight: !1,
          handleWidth: !0,
        }),
        t = null;
      switch (e.impact) {
        case 'critical':
          t = 'critical';
          break;
        case 'serious':
          t = 'negative';
          break;
        case 'moderate':
          t = 'warning';
          break;
        case 'minor':
          t = 'neutral';
          break;
      }
      return a.createElement(
        Ar,
        { ref: r, elementWidth: n || 0 },
        a.createElement(kr, { status: t }, Dr(e.impact)),
        a.createElement(wr, null, e.message),
      );
    },
    Hr = ({ rules: e }) =>
      a.createElement(
        Ir,
        null,
        e.map((r, n) => a.createElement(Nr, { rule: r, key: n })),
      ),
    Lr = [
      F(U.light).color.negative,
      F(U.light).color.positive,
      F(U.light).color.warning,
    ],
    Xe = fe({
      results: { passes: [], incomplete: [], violations: [] },
      setResults: () => {},
      highlighted: [],
      toggleHighlight: () => {},
      clearHighlights: () => {},
      tab: 0,
      setTab: () => {},
    }),
    Ye = { passes: [], incomplete: [], violations: [] },
    Pr = ({ active: e, ...r }) => {
      let [n, t] = Re(I, Ye),
        [i, l] = k(0),
        [u, c] = k([]),
        m = be().getCurrentStoryData(),
        p = A((T, E) => {
          c(R => (E ? [...R, ...T] : R.filter(v => !T.includes(v))));
        }, []),
        d = T => {
          b(N.REQUEST, T);
        },
        f = A(() => c([]), []),
        o = A(T => {
          f(), l(T);
        }, []),
        y = A(() => {
          l(0), t(Ye);
        }, []),
        b = Q({ [Fe]: d, [We]: y });
      return (
        B(() => {
          b(ie, { elements: u, color: Lr[i] });
        }, [u, i]),
        B(() => {
          e && m?.type === 'story' ? d(m.id) : f();
        }, [e, f, b, m]),
        e
          ? g(Xe.Provider, {
              value: {
                results: n,
                setResults: t,
                highlighted: u,
                toggleHighlight: p,
                clearHighlights: f,
                tab: i,
                setTab: o,
              },
              ...r,
            })
          : null
      );
    },
    le = () => ge(Xe),
    Br = s.input(({ disabled: e }) => ({
      cursor: e ? 'not-allowed' : 'pointer',
    }));
  function Ve(e, r) {
    let n = e.filter(t => r.includes(t.target[0])).length;
    return n === 0 ? 1 : n === e.length ? 0 : 2;
  }
  var Mr = ({ toggleId: e, elementsToHighlight: r = [] }) => {
      let { toggleHighlight: n, highlighted: t } = le(),
        i = a.useRef(null),
        [l, u] = a.useState(Ve(r, t));
      a.useEffect(() => {
        let m = Ve(r, t);
        i.current && (i.current.indeterminate = m === 2), u(m);
      }, [r, t]);
      let c = a.useCallback(() => {
        n(
          r.map(m => m.target[0]),
          l !== 0,
        );
      }, [r, l, n]);
      return a.createElement(Br, {
        ref: i,
        id: e,
        type: 'checkbox',
        'aria-label': 'Highlight result',
        disabled: !r.length,
        onChange: c,
        checked: l === 0,
      });
    },
    ce = Mr,
    $r = s.li({ fontWeight: 600 }),
    Gr = s.span(({ theme: e }) => ({
      borderBottom: `1px solid ${e.appBorderColor}`,
      width: '100%',
      display: 'flex',
      paddingBottom: 6,
      marginBottom: 6,
      justifyContent: 'space-between',
    })),
    jr = s.span({
      fontWeight: 'normal',
      alignSelf: 'center',
      paddingRight: 15,
      input: { margin: 0, display: 'block' },
    }),
    zr = ({ element: e, type: r }) => {
      let { any: n, all: t, none: i } = e,
        l = [...n, ...t, ...i],
        u = `${r}-${e.target[0]}`;
      return a.createElement(
        $r,
        null,
        a.createElement(
          Gr,
          null,
          e.target[0],
          a.createElement(
            jr,
            null,
            a.createElement(ce, { toggleId: u, elementsToHighlight: [e] }),
          ),
        ),
        a.createElement(Hr, { rules: l }),
      );
    },
    Wr = ({ elements: e, type: r }) =>
      a.createElement(
        'ol',
        null,
        e.map((n, t) => a.createElement(zr, { element: n, key: t, type: r })),
      ),
    Fr = s.div({ display: 'flex', flexWrap: 'wrap', margin: '12px 0' }),
    Ur = s.div(({ theme: e }) => ({
      margin: '0 6px',
      padding: 5,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: e.appBorderRadius,
    })),
    Yr = ({ tags: e }) =>
      a.createElement(
        Fr,
        null,
        e.map(r => a.createElement(Ur, { key: r }, r)),
      ),
    Vr = s.div(({ theme: e }) => ({
      display: 'flex',
      width: '100%',
      borderBottom: `1px solid ${e.appBorderColor}`,
      '&:hover': { background: e.background.hoverable },
    })),
    Kr = s(Y)(({ theme: e }) => ({
      height: 10,
      width: 10,
      minWidth: 10,
      color: e.textMutedColor,
      marginRight: 10,
      transition: 'transform 0.1s ease-in-out',
      alignSelf: 'center',
      display: 'inline-flex',
    })),
    Xr = s.div(({ theme: e }) => ({
      padding: e.layoutMargin,
      paddingLeft: e.layoutMargin - 3,
      lineHeight: '20px',
      background: 'none',
      color: 'inherit',
      textAlign: 'left',
      cursor: 'pointer',
      borderLeft: '3px solid transparent',
      width: '100%',
      '&:focus': {
        outline: '0 none',
        borderLeft: `3px solid ${e.color.secondary}`,
      },
    })),
    qr = s.span({
      fontWeight: 'normal',
      float: 'right',
      marginRight: 15,
      alignSelf: 'center',
      input: { margin: 0, display: 'block' },
    }),
    Qr = e => {
      let [r, n] = k(!1),
        { item: t, type: i } = e,
        l = `${i}-${t.id}`;
      return a.createElement(
        $,
        null,
        a.createElement(
          Vr,
          null,
          a.createElement(
            Xr,
            { onClick: () => n(!r), role: 'button' },
            a.createElement(Kr, {
              icon: 'arrowdown',
              color: '#9DA5AB',
              style: { transform: `rotate(${r ? 0 : -90}deg)` },
            }),
            t.help,
          ),
          a.createElement(
            qr,
            null,
            a.createElement(ce, { toggleId: l, elementsToHighlight: t.nodes }),
          ),
        ),
        r
          ? a.createElement(
              $,
              null,
              a.createElement(Cr, { item: t, key: 'info' }),
              a.createElement(Wr, {
                elements: t.nodes,
                type: i,
                key: 'elements',
              }),
              a.createElement(Yr, { tags: t.tags, key: 'tags' }),
            )
          : null,
      );
    },
    oe = ({ items: e, empty: r, type: n }) =>
      a.createElement(
        $,
        null,
        e && e.length
          ? e.map(t =>
              a.createElement(Qr, { item: t, key: `${n}:${t.id}`, type: n }),
            )
          : a.createElement(Oe, { key: 'placeholder' }, r),
      ),
    Jr = s.div({ width: '100%', position: 'relative', minHeight: '100%' }),
    Zr = s.label(({ theme: e }) => ({
      cursor: 'pointer',
      userSelect: 'none',
      color: e.color.dark,
    })),
    en = s.div(({ elementWidth: e, theme: r }) => ({
      cursor: 'pointer',
      fontSize: 13,
      lineHeight: '20px',
      padding: e > 450 ? '10px 15px 10px 0' : '10px 0px 10px 15px',
      height: '40px',
      border: 'none',
      marginTop: e > 450 ? -40 : 0,
      float: e > 450 ? 'right' : 'left',
      display: 'flex',
      alignItems: 'center',
      width: e > 450 ? 'auto' : '100%',
      borderBottom: e > 450 ? 'none' : `1px solid ${r.appBorderColor}`,
      input: { marginLeft: 10, marginRight: 0, marginTop: -1, marginBottom: 0 },
    })),
    tn = s.button(
      ({ theme: e }) => ({
        textDecoration: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: 1,
        height: 40,
        border: 'none',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        background: 'transparent',
        '&:focus': {
          outline: '0 none',
          borderBottom: `3px solid ${e.color.secondary}`,
        },
      }),
      ({ active: e, theme: r }) =>
        e ? { opacity: 1, borderBottom: `3px solid ${r.color.secondary}` } : {},
    ),
    rn = s.div({}),
    nn = s.div(({ theme: e }) => ({
      boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
      background: e.background.app,
      display: 'flex',
      justifyContent: 'space-between',
      whiteSpace: 'nowrap',
    }));
  function an(e) {
    return e.reduce((r, n) => r.concat(n.nodes), []);
  }
  var on = ({ tabs: e }) => {
      let { ref: r, width: n } = ae({
          refreshMode: 'debounce',
          handleHeight: !1,
          handleWidth: !0,
        }),
        { tab: t, setTab: i } = le(),
        l = A(
          m => {
            i(parseInt(m.currentTarget.getAttribute('data-index') || '', 10));
          },
          [i],
        ),
        u = `${e[t].type}-global-checkbox`,
        c = 'Highlight results';
      return g(
        Jr,
        { ref: r },
        g(
          nn,
          null,
          g(
            rn,
            null,
            e.map((m, p) =>
              g(
                tn,
                { key: p, 'data-index': p, active: t === p, onClick: l },
                m.label,
              ),
            ),
          ),
        ),
        e[t].items.length > 0
          ? g(
              en,
              { elementWidth: n || 0 },
              g(Zr, { htmlFor: u }, c),
              g(ce, { toggleId: u, elementsToHighlight: an(e[t].items) }),
            )
          : null,
        e[t].panel,
      );
    },
    qe = s(Y)({ height: 12, width: 12, marginRight: 4 }),
    ln = s(qe)(({ theme: e }) => ({
      animation: `${e.animation.rotate360} 1s linear infinite;`,
    })),
    cn = s.span(({ theme: e }) => ({ color: e.color.positiveText })),
    sn = s.span(({ theme: e }) => ({ color: e.color.negativeText })),
    un = s.span(({ theme: e }) => ({ color: e.color.warningText })),
    K = s.span({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }),
    dn = () => {
      let { manual: e } = ye('a11y', { manual: !1 }),
        [r, n] = k(e ? 'manual' : 'initial'),
        [t, i] = a.useState(void 0),
        { setResults: l, results: u } = le(),
        { storyId: c } = Te();
      a.useEffect(() => {
        n(e ? 'manual' : 'initial');
      }, [e]);
      let m = E => {
          n('ran'),
            l(E),
            setTimeout(() => {
              r === 'ran' && n('ready');
            }, 900);
        },
        p = A(() => {
          n('running');
        }, []),
        d = A(E => {
          n('error'), i(E);
        }, []),
        f = Q({ [N.RUNNING]: p, [N.RESULT]: m, [N.ERROR]: d }),
        o = A(() => {
          n('running'), f(N.MANUAL, c);
        }, [c]),
        y = j(() => [{ title: 'Run test', onClick: o }], [o]),
        b = j(
          () => [
            {
              title:
                r === 'ready'
                  ? 'Rerun tests'
                  : a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(qe, { icon: 'check' }),
                      ' Tests completed',
                    ),
              onClick: o,
            },
          ],
          [r, o],
        ),
        T = j(() => {
          let { passes: E, incomplete: R, violations: v } = u;
          return [
            {
              label: a.createElement(sn, null, v.length, ' Violations'),
              panel: a.createElement(oe, {
                items: v,
                type: 0,
                empty: 'No accessibility violations found.',
              }),
              items: v,
              type: 0,
            },
            {
              label: a.createElement(cn, null, E.length, ' Passes'),
              panel: a.createElement(oe, {
                items: E,
                type: 1,
                empty: 'No accessibility checks passed.',
              }),
              items: E,
              type: 1,
            },
            {
              label: a.createElement(un, null, R.length, ' Incomplete'),
              panel: a.createElement(oe, {
                items: R,
                type: 2,
                empty: 'No accessibility checks incomplete.',
              }),
              items: R,
              type: 2,
            },
          ];
        }, [u]);
      return a.createElement(
        a.Fragment,
        null,
        r === 'initial' && a.createElement(K, null, 'Initializing...'),
        r === 'manual' &&
          a.createElement(
            a.Fragment,
            null,
            a.createElement(K, null, 'Manually run the accessibility scan.'),
            a.createElement(J, { key: 'actionbar', actionItems: y }),
          ),
        r === 'running' &&
          a.createElement(
            K,
            null,
            a.createElement(ln, { icon: 'sync' }),
            ' Please wait while the accessibility scan is running ...',
          ),
        (r === 'ready' || r === 'ran') &&
          a.createElement(
            a.Fragment,
            null,
            a.createElement(
              xe,
              { vertical: !0, horizontal: !0 },
              a.createElement(on, { key: 'tabs', tabs: T }),
            ),
            a.createElement(J, { key: 'actionbar', actionItems: b }),
          ),
        r === 'error' &&
          a.createElement(
            K,
            null,
            'The accessibility scan encountered an error.',
            a.createElement('br', null),
            typeof t == 'string' ? t : JSON.stringify(t),
          ),
      );
    };
  W.register(I, e => {
    W.add(X, {
      title: '',
      type: q.TOOL,
      match: ({ viewMode: r }) => r === 'story',
      render: () => a.createElement(_r, null),
    }),
      W.add(X, {
        title() {
          let r = e?.getAddonState(I),
            n = r?.violations?.length || 0,
            t = r?.incomplete?.length || 0,
            i = n + t;
          return i !== 0 ? `Accessibility (${i})` : 'Accessibility';
        },
        id: 'accessibility',
        type: q.PANEL,
        render: ({ active: r = !0, key: n }) =>
          a.createElement(Pr, { key: n, active: r }, a.createElement(dn, null)),
        paramKey: ue,
      });
  });
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e,
  );
}
//# sourceMappingURL=manager-bundle.js.map
