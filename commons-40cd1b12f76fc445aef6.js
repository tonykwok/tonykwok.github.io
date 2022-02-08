;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    '2ZsY': function (e, t, n) {
      e.exports = {
        customMedia: {
          '--small-up': '(min-width: 576px)',
          '--medium-up': '(min-width: 768px)',
          '--large-up': '(min-width: 992px)',
          '--extra-large-up': '(min-width: 1200px)',
          '--extra-small-down': '(max-width: 575.98px)',
          '--small-down': '(max-width: 767.98px)',
          '--medium-down': '(max-width: 991.98px)',
          '--large-down': '(max-width: 1199.98px)',
          '--extra-small-only': '(max-width: 575.98px)',
          '--small-only': '(min-width: 576px) and (max-width: 767.98px)',
          '--medium-only': '(min-width: 768px) and (max-width: 991.98px)',
          '--large-only': '(min-width: 992px) and (max-width: 1199.98px)',
          '--extra-large-only': '(min-width: 1200px)',
        },
        customProperties: {
          '--background-color': '#fffff8',
          '--background-secondary-color':
            'color-mod(var(--primary-color) tint(95%))',
          '--background-alert-color': 'color-mod(var(--alert-color) tint(95%))',
          '--background-danger-color':
            'color-mod(var(--danger-color) tint(95%))',
          '--background-success-color':
            'color-mod(var(--success-color) tint(95%))',
          '--primary-color': '#393e46',
          '--secondary-color': '#00638a',
          '--alert-color': 'var(--muted-text-color)',
          '--danger-color': '#b11313',
          '--success-color': '#1a882e',
          '--text-color': '#112',
          '--muted-text-color': 'color-mod(var(--text-color) tint(40%))',
          '--link-color': '#00638a',
          '--shadow-color': 'rgb(57,62,70, 0.1)',
          '--shadow-color-alpha': 'rgb(57,62,70, 0.05)',
          '--border-color': 'color-mod(var(--primary-color) tint(80%))',
          '--input-background-color': '#f2f2f2',
          '--button-text-color': '#fff',
          '--button-background-color': '#111',
          '--code-text-color': '#111',
          '--code-background-color': '#f5f5f6',
          '--theme-toggle-primary-color': '#ccc',
          '--theme-toggle-secondary-color': '#112',
          '--facebook-color': '#3b5998',
          '--flickr-color': '#0063dc',
          '--github-color': '#181717',
          '--google-plus-color': '#dc4e41',
          '--instagram-color': '#e4405f',
          '--rss-color': '#ffa500',
          '--twitter-color': '#1da1f2',
          '--youtube-color': '#cd201f',
          '--base-font-size': '112.5%',
          '--line-height': '1.55',
          '--font-size': '1em',
          '--base-ratio': '1.2',
          '--heading-ratio': '1.125',
          '--text-width': '35rem',
          '--container-width': '50rem',
          '--text-xs': '0.75em',
          '--text-sm': '0.875em',
          '--text-base': '1rem',
          '--text-lg': '1.125em',
          '--text-xl': '1.25em',
          '--text-2xl': '1.5em',
          '--text-3xl': '1.875em',
          '--text-4xl': '2.25em',
          '--text-5xl': '3em',
          '--sans-serif-font':
            "'Brandon Grotesque', 'Apercu',\n   'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
          '--serif-font':
            "'Calluna', 'et-book', 'DM Serif Display', Georgia, serif",
          '--monospace-font':
            "\"SFMono-Regular\", Menlo, Monaco, Consolas, 'Fira Mono', 'Liberation Mono', 'Courier New',\n    monospace",
          '--border-radius': '0.125rem',
          '--global-transition': 'all 0.4s ease',
          '--avatar-size': '30px',
          '--two-col-gap': '1rem',
          '--two-col-width': 'calc(50% - (0.5 * var(--two-col-gap)))',
          '--three-col-gap': '1rem',
          '--three-col-width': 'calc(33.3333% - (0.75 * var(--three-col-gap)))',
          '--grid-list-size': '15rem',
          '--grid-list-col-gap': '2rem',
          '--grid-list-exp-size': '10rem',
          '--grid-list-exp-col-gap': '3rem',
          '--col-list-gap': '1rem',
          '--col-list-width': 'calc(33.3333% - var(--col-list-gap))',
        },
        customSelectors: {},
      }
    },
    '8+s/': function (e, t, n) {
      'use strict'
      var r,
        a = n('FdF9'),
        o = (r = a) && 'object' == typeof r && 'default' in r ? r.default : r
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      var l = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.createElement
      )
      e.exports = function (e, t, n) {
        if ('function' != typeof e)
          throw new Error('Expected reducePropsToState to be a function.')
        if ('function' != typeof t)
          throw new Error(
            'Expected handleStateChangeOnClient to be a function.'
          )
        if (void 0 !== n && 'function' != typeof n)
          throw new Error(
            'Expected mapStateOnServer to either be undefined or a function.'
          )
        return function (r) {
          if ('function' != typeof r)
            throw new Error(
              'Expected WrappedComponent to be a React component.'
            )
          var c,
            u = []
          function s() {
            ;(c = e(
              u.map(function (e) {
                return e.props
              })
            )),
              m.canUseDOM ? t(c) : n && (c = n(c))
          }
          var m = (function (e) {
            var t, n
            function a() {
              return e.apply(this, arguments) || this
            }
            ;(n = e),
              ((t = a).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (a.peek = function () {
                return c
              }),
              (a.rewind = function () {
                if (a.canUseDOM)
                  throw new Error(
                    'You may only call rewind() on the server. Call peek() to read the current state.'
                  )
                var e = c
                return (c = void 0), (u = []), e
              })
            var i = a.prototype
            return (
              (i.UNSAFE_componentWillMount = function () {
                u.push(this), s()
              }),
              (i.componentDidUpdate = function () {
                s()
              }),
              (i.componentWillUnmount = function () {
                var e = u.indexOf(this)
                u.splice(e, 1), s()
              }),
              (i.render = function () {
                return o.createElement(r, this.props)
              }),
              a
            )
          })(a.PureComponent)
          return (
            i(
              m,
              'displayName',
              'SideEffect(' +
                (function (e) {
                  return e.displayName || e.name || 'Component'
                })(r) +
                ')'
            ),
            i(m, 'canUseDOM', l),
            m
          )
        }
      }
    },
    Bl7J: function (e, t, n) {
      'use strict'
      var r = n('FdF9'),
        a = n('Wbzz'),
        o = n('qhky'),
        i = n('Eax7'),
        l = n.n(i)
      function c(e) {
        var t = e.className
        return r.default.createElement(
          'svg',
          {
            'aria-hidden': 'true',
            xmlns: 'http://www.w3.org/2000/svg',
            width: '38.652000',
            height: '38.652000',
            viewBox: '0 0 180.000000 180.000000',
            preserveAspectRatio: 'xMidYMid meet',
            className: t + ' ' + l.a.logo,
          },
          r.default.createElement(
            'g',
            {
              transform:
                'translate(0.000000,180.000000) scale(0.100000,-0.100000)',
              stroke: 'none',
            },
            r.default.createElement('path', {
              d:
                'M820 1571 c0 -5 11 -28 24 -52 53 -95 79 -196 84 -329 4 -110 1 -137 -21 -228 -15 -58 -47 -148 -75 -205 -48 -100 -155 -269 -214 -336 -16 -18 -27 -35 -25 -38 3 -2 43 21 90 52 108 70 272 154 358 183 36 13 97 26 136 29 61 5 78 3 118 -17 39 -19 49 -20 56 -9 14 22 10 240 -5 321 -16 85 -53 188 -92 255 -73 128 -220 270 -361 348 -65 37 -73 40 -73 26z',
            }),
            r.default.createElement('path', {
              d:
                'M590 1555 c0 -3 13 -31 29 -63 75 -149 102 -300 82 -446 -16 -107 -56 -237 -104 -333 -35 -69 -154 -250 -203 -311 -34 -41 -24 -52 18 -20 32 24 139 90 188 116 40 21 54 34 87 82 59 87 112 196 150 305 38 110 38 110 37 270 0 126 -4 169 -17 204 -19 50 -18 49 -149 136 -88 59 -118 74 -118 60z',
            }),
            r.default.createElement('path', {
              d:
                'M1480 561 c-210 -19 -571 -121 -814 -230 -23 -10 -72 -32 -111 -49 -187 -82 -436 -213 -416 -220 7 -2 23 0 34 6 103 51 658 236 832 276 39 9 89 22 113 28 23 6 91 11 150 11 135 1 167 -13 218 -99 10 -18 14 -16 56 18 70 57 117 107 159 169 50 74 50 89 2 89 -21 0 -60 2 -88 4 -27 2 -88 1 -135 -3z',
            })
          )
        )
      }
      c.defaultProps = { className: void 0 }
      var u = c,
        s = n('WnXS'),
        m = n.n(s),
        d = function (e) {
          var t = e.mainMenu.slice(0).map(function (e, t) {
            return r.default.createElement(
              'li',
              { key: t, className: m.a.primaryMenuItem },
              r.default.createElement(
                a.Link,
                {
                  to: e.path,
                  itemProp: 'url',
                  activeStyle: { textDecoration: 'line-through' },
                  partiallyActive: !0,
                },
                e.title
              )
            )
          })
          return r.default.createElement(
            'ul',
            { className: m.a.primaryMenu },
            t
          )
        },
        f = function (e) {
          var t = e.mainMenu,
            n = e.onChangeTheme
          return r.default.createElement(
            r.default.Fragment,
            null,
            r.default.createElement(
              'nav',
              {
                id: 'nav-primary',
                itemScope: !0,
                itemType: 'http://schema.org/SiteNavigationElement',
                'aria-label': 'Primary navigation',
                className: m.a.primaryNavigation,
              },
              r.default.createElement(d, { mainMenu: t })
            ),
            r.default.createElement(
              'div',
              { className: m.a.siteControls },
              r.default.createElement(
                'button',
                {
                  className: m.a.themeToggleButton,
                  onClick: n,
                  type: 'button',
                  'aria-label': 'Toggle dark mode',
                  title: 'Toggle dark mode',
                },
                r.default.createElement('div', {
                  className: m.a.themeToggleButtonIcon,
                })
              )
            )
          )
        },
        p = n('OUhe'),
        h = n.n(p),
        g = function (e) {
          var t = e.siteTitle,
            n = e.mainMenu,
            i = e.defaultTheme,
            l =
              ('undefined' != typeof window &&
                window.localStorage.getItem('theme')) ||
              null,
            c = Object(r.useState)(l),
            s = c[0],
            m = c[1]
          return r.default.createElement(
            r.default.Fragment,
            null,
            r.default.createElement(
              o.a,
              null,
              r.default.createElement('body', {
                'data-theme': 'light' === (s || i) ? 'light' : 'dark',
              })
            ),
            r.default.createElement(
              'nav',
              { className: h.a.skipLinks },
              r.default.createElement(
                'ul',
                null,
                r.default.createElement(
                  'li',
                  null,
                  r.default.createElement(
                    'a',
                    { href: '#nav-primary', className: h.a.shortcut },
                    'Skip to primary navigation'
                  )
                ),
                r.default.createElement(
                  'li',
                  null,
                  r.default.createElement(
                    'a',
                    { href: '#main', className: h.a.shortcut },
                    'Skip to content'
                  )
                ),
                r.default.createElement(
                  'li',
                  null,
                  r.default.createElement(
                    'a',
                    { href: '#footer', className: h.a.shortcut },
                    'Skip to footer'
                  )
                )
              )
            ),
            r.default.createElement(
              'header',
              { className: h.a.header },
              r.default.createElement(
                'div',
                { className: h.a.name },
                r.default.createElement(
                  a.Link,
                  { to: '/' },
                  r.default.createElement(u, null),
                  r.default.createElement(
                    'span',
                    { className: h.a.logoLabel },
                    t
                  )
                )
              ),
              r.default.createElement(f, {
                mainMenu: n,
                onChangeTheme: function () {
                  var e = 'light' === (s || i) ? 'dark' : 'light'
                  m(e),
                    'undefined' != typeof window &&
                      window.localStorage.setItem('theme', e)
                },
              })
            )
          )
        }
      function y(e) {
        var t = e.className
        return r.default.createElement(
          'svg',
          {
            'aria-hidden': 'true',
            viewBox: '0 0 16 16',
            height: '16',
            width: '16',
            xmlns: 'http://www.w3.org/2000/svg',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: '1.414',
            className: t + ' ' + l.a.icon,
          },
          r.default.createElement('path', {
            d:
              'M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z',
            fillRule: 'nonzero',
          })
        )
      }
      y.defaultProps = { className: void 0 }
      var b = y
      function w(e) {
        var t = e.className
        return r.default.createElement(
          'svg',
          {
            'aria-hidden': 'true',
            viewBox: '0 0 16 16',
            height: '16',
            width: '16',
            xmlns: 'http://www.w3.org/2000/svg',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: '1.414',
            className: t + ' ' + l.a.icon,
          },
          r.default.createElement('path', {
            d:
              'M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8',
          })
        )
      }
      w.defaultProps = { className: void 0 }
      var v = w
      function E(e) {
        var t = e.className
        return r.default.createElement(
          'svg',
          {
            'aria-hidden': 'true',
            viewBox: '0 0 16 16',
            height: '16',
            width: '16',
            xmlns: 'http://www.w3.org/2000/svg',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: '1.414',
            className: t + ' ' + l.a.icon,
          },
          r.default.createElement('path', {
            d:
              'M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.203-.28 1.485-.15.374-.32.64-.6.92-.28.28-.55.453-.92.598-.28.11-.71.24-1.49.276-.85.038-1.1.047-3.24.047s-2.39-.01-3.24-.05c-.78-.04-1.21-.17-1.49-.28-.38-.15-.64-.32-.92-.6-.28-.28-.46-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.03-.84-.04-1.1-.04-3.23s.01-2.39.04-3.24c.04-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z',
          })
        )
      }
      E.defaultProps = { className: void 0 }
      var T = E
      function x(e) {
        var t = e.className
        return r.default.createElement(
          'svg',
          {
            'aria-hidden': 'true',
            viewBox: '0 0 16 16',
            height: '16',
            width: '16',
            xmlns: 'http://www.w3.org/2000/svg',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: '1.414',
            className: t + ' ' + l.a.icon,
          },
          r.default.createElement('path', {
            d:
              'M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194C.98 16 0 15.017 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z',
          })
        )
      }
      x.defaultProps = { className: void 0 }
      var S = x,
        k = n('RwA0'),
        A = n.n(k),
        C = function (e) {
          return e.footerMenu.slice(0).map(function (e, t) {
            return r.default.createElement(
              'li',
              { key: t },
              r.default.createElement(a.Link, { to: e.path }, e.title)
            )
          })
        },
        O = function (e) {
          var t = e.footerMenu,
            n = e.twitter,
            a = e.github,
            o = e.instagram,
            i = e.feed,
            l = e.copyrights
          return r.default.createElement(
            'footer',
            { id: 'footer', className: A.a.footer },
            r.default.createElement(
              'ul',
              { className: A.a.menu },
              r.default.createElement(C, { footerMenu: t })
            ),
            r.default.createElement(
              'ul',
              { className: A.a.menuSocial },
              n &&
                r.default.createElement(
                  'li',
                  null,
                  r.default.createElement(
                    'a',
                    { href: n, rel: 'nofollow' },
                    r.default.createElement(b, null),
                    r.default.createElement(
                      'span',
                      { className: A.a.iconLabel },
                      'Twitter'
                    )
                  )
                ),
              a &&
                r.default.createElement(
                  'li',
                  null,
                  r.default.createElement(
                    'a',
                    { href: a, rel: 'nofollow' },
                    r.default.createElement(v, null),
                    r.default.createElement(
                      'span',
                      { className: A.a.iconLabel },
                      'GitHub'
                    )
                  )
                ),
              o &&
                r.default.createElement(
                  'li',
                  null,
                  r.default.createElement(
                    'a',
                    { href: o, rel: 'nofollow' },
                    r.default.createElement(T, null),
                    r.default.createElement(
                      'span',
                      { className: A.a.iconLabel },
                      'Instagram'
                    )
                  )
                ),
              i &&
                r.default.createElement(
                  'li',
                  null,
                  r.default.createElement(
                    'a',
                    { href: i },
                    r.default.createElement(S, null),
                    r.default.createElement(
                      'span',
                      { className: A.a.iconLabel },
                      'RSS feed'
                    )
                  )
                )
            ),
            l &&
              r.default.createElement('div', {
                className: A.a.copyright,
                dangerouslySetInnerHTML: { __html: l },
              })
          )
        },
        M = (n('2ZsY'), n('NKpe')),
        L = n.n(M)
      t.a = function (e) {
        var t = e.children,
          n = Object(a.useStaticQuery)('3443189517').site.siteMetadata,
          o = n.title,
          i = n.defaultTheme,
          l = n.mainMenu,
          c = n.footerMenu,
          u = n.twitterUrl,
          s = n.githubUrl,
          m = n.instagramUrl,
          d = n.feedUrl,
          f = n.copyrights
        return r.default.createElement(
          'div',
          { className: L.a.wrapper },
          r.default.createElement(g, {
            siteTitle: o,
            defaultTheme: i,
            mainMenu: l,
          }),
          t,
          r.default.createElement(O, {
            footerMenu: c,
            twitter: u,
            github: s,
            instagram: m,
            feed: d,
            copyrights: f,
          })
        )
      }
    },
    Eax7: function (e, t, n) {
      e.exports = {
        icon: 'icon-module--icon--1ihz7',
        spin: 'icon-module--spin--1SY71',
        logo: 'icon-module--logo--10fpX',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    KYHh: function (e, t) {
      e.exports = {
        title: 'Reisen',
        titleAlt: 'Reisen',
        description: "Things I've Found on the Way Getting There",
        url: 'https://kwapoong.github.io',
        siteLanguage: 'en',
        image: {
          src: '/images/made-mistakes-logo.png',
          width: 512,
          height: 512,
        },
        ogLanguage: 'en_US',
        pingbackUrl: 'https://webmention.io/mademistakes.com/xmlrpc',
        webmentionUrl: 'https://webmention.io/mademistakes.com/webmention',
        micropubUrl:
          'https://mm-micropub-to-github.herokuapp.com/micropub/main',
        coilUrl: '$coil.xrptipbot.com/AbwB-yidQNanSI2lYyTJJw',
        googleAnalyticsID: '',
        staticmanApi:
          'https://mm-staticman.herokuapp.com/v2/entry/mmistakes/made-mistakes-gatsby/master/comments',
        favicon: '/images/made-mistakes-logo.png',
        shortName: 'Reisen',
        author: { name: 'Tony Guo', url: 'https://kwapoong.github.io' },
        themeColor: '#ffffff',
        backgroundColor: '#111111',
        twitter: '@kwapoong',
        twitterUrl: 'https://twitter.com/kwapoong',
        facebook: 'kwapoong',
        githubUrl: 'https://github.com/kwapoong',
        instagramUrl: 'https://www.instagram.com/kwapoong/',
        feedUrl: '/atom.xml',
        githubApiToken: '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',
        githubApiQuery:
          'query ($number_of_repos: Int!) {\n    viewer {\n      name\n      avatarUrl\n      isHireable\n      resourcePath\n      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {\n        nodes {\n          name\n          description\n          homepageUrl\n          forkCount\n          createdAt\n          updatedAt\n          resourcePath\n          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {\n            edges {\n              node {\n                name\n                color\n              }\n            }\n          }\n          licenseInfo {\n            name\n          }\n          stargazers {\n            totalCount\n          }\n        }\n      }\n    }\n  }',
        githubApiVariables: { number_of_repos: 5 },
        reCaptcha: {
          siteKey: '6LdRBykTAAAAAFB46MnIu6ixuxwu9W1ihFF8G60Q',
          secret:
            'uK2DH+wELCxTtM0MmfKfT0W5GPt0B+dGVZ3L4IeYtnKRQ7a/zkdRUmi0z6J7K4BumST/CKuKnk4l3EUpDxWnA0E29kpMzbmhukm0vXCZfGg6zLETxcPXTWcrRchAp59oe77OdRlXjNe01nqL6fohmFv5lBT1SrxfORvBxvSsyTrrBXG1b5JJLleP9o4LGDK15lPCASEehWxpNTs+jxE/VUemMvedGautUBQyK5PRGaKJQb+xe9wl+9GgwueASRbGPl6yUnytUFy3V59yg+WbhbJJhA3dEKW4vnUu4jcgLL8FusCQQjDSvy0Ypqq3Dfx35L5YVfmLW+FrtYNvoD6zhA==',
        },
      }
    },
    NKpe: function (e, t, n) {
      e.exports = {
        wrapper: 'grid-module--wrapper--RI2IH',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    OUhe: function (e, t, n) {
      e.exports = {
        header: 'header-module--header--tFeG9',
        skipLinks: 'header-module--skipLinks--eySEU',
        shortcut: 'header-module--shortcut--12jJ4',
        name: 'header-module--name--nOZGB',
        logoLabel: 'header-module--logoLabel--2Jq0l',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    RwA0: function (e, t, n) {
      e.exports = {
        footer: 'footer-module--footer--cs6wc',
        iconLabel: 'footer-module--iconLabel--1exMh',
        menu: 'footer-module--menu--15r5_',
        menuSocial: 'footer-module--menuSocial--3ma6m',
        copyright: 'footer-module--copyright--1-FxK',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    WnXS: function (e, t, n) {
      e.exports = {
        primaryNavigation: 'menu-module--primaryNavigation--H5ivo',
        primaryMenu: 'menu-module--primaryMenu--1gilF',
        primaryMenuItem: 'menu-module--primaryMenuItem--1EVGy',
        siteControls: 'menu-module--siteControls--aku8L',
        menuToggle: 'menu-module--menuToggle--1QSxK',
        themeToggle: 'menu-module--themeToggle--2E8ye',
        themeToggleInner: 'menu-module--themeToggleInner--3dwRA',
        themeToggleIcon: 'menu-module--themeToggleIcon--2fQdu',
        themeToggleLabel: 'menu-module--themeToggleLabel--2Zd5G',
        themeToggleButton: 'menu-module--themeToggleButton--3S4wt',
        themeToggleButtonIcon: 'menu-module--themeToggleButtonIcon--TH6jW',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    YVoz: function (e, t, n) {
      'use strict'
      e.exports = Object.assign
    },
    bmMU: function (e, t) {
      var n = 'undefined' != typeof Element,
        r = 'function' == typeof Map,
        a = 'function' == typeof Set,
        o = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView
      e.exports = function (e, t) {
        try {
          return (function e(t, i) {
            if (t === i) return !0
            if (t && i && 'object' == typeof t && 'object' == typeof i) {
              if (t.constructor !== i.constructor) return !1
              var l, c, u, s
              if (Array.isArray(t)) {
                if ((l = t.length) != i.length) return !1
                for (c = l; 0 != c--; ) if (!e(t[c], i[c])) return !1
                return !0
              }
              if (r && t instanceof Map && i instanceof Map) {
                if (t.size !== i.size) return !1
                for (s = t.entries(); !(c = s.next()).done; )
                  if (!i.has(c.value[0])) return !1
                for (s = t.entries(); !(c = s.next()).done; )
                  if (!e(c.value[1], i.get(c.value[0]))) return !1
                return !0
              }
              if (a && t instanceof Set && i instanceof Set) {
                if (t.size !== i.size) return !1
                for (s = t.entries(); !(c = s.next()).done; )
                  if (!i.has(c.value[0])) return !1
                return !0
              }
              if (o && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
                if ((l = t.length) != i.length) return !1
                for (c = l; 0 != c--; ) if (t[c] !== i[c]) return !1
                return !0
              }
              if (t.constructor === RegExp)
                return t.source === i.source && t.flags === i.flags
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === i.valueOf()
              if (t.toString !== Object.prototype.toString)
                return t.toString() === i.toString()
              if ((l = (u = Object.keys(t)).length) !== Object.keys(i).length)
                return !1
              for (c = l; 0 != c--; )
                if (!Object.prototype.hasOwnProperty.call(i, u[c])) return !1
              if (n && t instanceof Element) return !1
              for (c = l; 0 != c--; )
                if (
                  (('_owner' !== u[c] && '__v' !== u[c] && '__o' !== u[c]) ||
                    !t.$$typeof) &&
                  !e(t[u[c]], i[u[c]])
                )
                  return !1
              return !0
            }
            return t != t && i != i
          })(e, t)
        } catch (i) {
          if ((i.message || '').match(/stack|recursion/i))
            return (
              console.warn('react-fast-compare cannot handle circular refs'), !1
            )
          throw i
        }
      }
    },
    jNNy: function (e, t, n) {
      'use strict'
      var r = n('FdF9'),
        a = n('qhky'),
        o = n('Wbzz'),
        i = function (e) {
          var t = e.url,
            n = e.name,
            o = e.type,
            i = e.title,
            l = e.description,
            c = e.image,
            u = e.width,
            s = e.height,
            m = e.locale
          return r.default.createElement(
            a.a,
            null,
            n &&
              r.default.createElement('meta', {
                property: 'og:site_name',
                content: n,
              }),
            r.default.createElement('meta', {
              property: 'og:locale',
              content: m,
            }),
            r.default.createElement('meta', { property: 'og:url', content: t }),
            r.default.createElement('meta', {
              property: 'og:type',
              content: o,
            }),
            r.default.createElement('meta', {
              property: 'og:title',
              content: i,
            }),
            r.default.createElement('meta', {
              property: 'og:description',
              content: l,
            }),
            r.default.createElement('meta', {
              property: 'og:image',
              content: c,
            }),
            u &&
              r.default.createElement('meta', {
                property: 'og:image:width',
                content: u,
              }),
            s &&
              r.default.createElement('meta', {
                property: 'og:image:height',
                content: s,
              })
          )
        },
        l = i
      i.defaultProps = { type: 'website', name: null }
      var c = function (e) {
          var t = e.type,
            n = e.username,
            o = e.title,
            i = e.description,
            l = e.image
          return r.default.createElement(
            a.a,
            null,
            n &&
              r.default.createElement('meta', {
                name: 'twitter:creator',
                content: n,
              }),
            r.default.createElement('meta', {
              name: 'twitter:card',
              content: t,
            }),
            r.default.createElement('meta', {
              name: 'twitter:title',
              content: o,
            }),
            r.default.createElement('meta', {
              name: 'twitter:description',
              content: i,
            }),
            r.default.createElement('meta', {
              name: 'twitter:image',
              content: l,
            })
          )
        },
        u = c
      c.defaultProps = { type: 'summary', username: null }
      var s = function (e) {
        var t = e.title,
          n = e.description,
          i = e.metaImage,
          c = e.twitterCardType,
          s = e.path,
          d = e.article,
          f = e.datePublished,
          p = e.dateModified,
          h = Object(o.useStaticQuery)(m).site,
          g = h.buildTime,
          y = h.siteMetadata,
          b = y.siteUrl,
          w = y.defaultTitle,
          v = y.defaultDescription,
          E = y.defaultBanner,
          T = y.siteLanguage,
          x = y.ogLanguage,
          S = y.pingbackUrl,
          k = y.webmentionUrl,
          A = y.micropubUrl,
          C = y.coilUrl,
          O = y.author,
          M = y.twitter,
          L = y.facebook,
          N = {
            title: t || w,
            description: n || v,
            image: '' + b + (i.src || E),
            url: '' + b + (s || ''),
          },
          P = {
            '@context': 'http://schema.org',
            '@type': 'WebPage',
            url: b,
            inLanguage: T,
            mainEntityOfPage: b,
            description: v,
            name: w,
            author: { '@type': 'Person', name: O.name },
            copyrightHolder: { '@type': 'Person', name: O.name },
            creator: { '@type': 'Person', name: O.name },
            publisher: {
              '@type': 'Organization',
              name: w,
              logo: { '@type': 'ImageObject', url: '' + b + E },
            },
            datePublished: f,
            dateModified: g,
            image: { '@type': 'ImageObject', url: N.image },
          },
          j = null
        return (
          d &&
            (j = {
              '@context': 'http://schema.org',
              '@type': 'Article',
              author: { '@type': 'Person', name: O.name },
              creator: { '@type': 'Person', name: O.name },
              publisher: {
                '@type': 'Organization',
                name: w,
                logo: { '@type': 'ImageObject', url: '' + b + E },
              },
              headline: N.title,
              datePublished: f,
              dateModified: p,
              description: N.description,
              inLanguage: T,
              url: N.url,
              name: N.title,
              image: { '@type': 'ImageObject', url: N.image },
              mainEntityOfPage: N.url,
            }),
          r.default.createElement(
            r.default.Fragment,
            null,
            r.default.createElement(
              a.a,
              { title: N.title },
              r.default.createElement('html', { lang: T }),
              r.default.createElement('link', {
                rel: 'canonical',
                href: N.url,
              }),
              S &&
                r.default.createElement('link', { rel: 'pingback', href: S }),
              k &&
                r.default.createElement('link', { rel: 'webmention', href: k }),
              A &&
                r.default.createElement('link', { rel: 'micropub', href: A }),
              C &&
                r.default.createElement('meta', {
                  name: 'monetization',
                  content: C,
                }),
              r.default.createElement('meta', {
                name: 'description',
                content: N.description,
              }),
              r.default.createElement('meta', {
                name: 'image',
                content: N.image,
              }),
              !d &&
                r.default.createElement(
                  'script',
                  { type: 'application/ld+json' },
                  JSON.stringify(P)
                ),
              d &&
                r.default.createElement(
                  'script',
                  { type: 'application/ld+json' },
                  JSON.stringify(j)
                )
            ),
            r.default.createElement(l, {
              description: N.description,
              image: N.image,
              title: N.title,
              type: d ? 'article' : 'website',
              url: N.url,
              locale: x,
              name: L,
            }),
            r.default.createElement(u, {
              type: c,
              title: N.title,
              image: N.image,
              description: N.description,
              username: M,
            })
          )
        )
      }
      t.a = s
      s.defaultProps = {
        title: null,
        description: null,
        datePublished: null,
        dateModified: null,
        metaImage: null,
        path: null,
        article: !1,
      }
      var m = '215131063'
    },
    qhky: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'a', function () {
          return pe
        })
        var r,
          a,
          o,
          i,
          l = n('17x9'),
          c = n.n(l),
          u = n('8+s/'),
          s = n.n(u),
          m = n('bmMU'),
          d = n.n(m),
          f = n('FdF9'),
          p = n('YVoz'),
          h = n.n(p),
          g = 'bodyAttributes',
          y = 'htmlAttributes',
          b = 'titleAttributes',
          w = {
            BASE: 'base',
            BODY: 'body',
            HEAD: 'head',
            HTML: 'html',
            LINK: 'link',
            META: 'meta',
            NOSCRIPT: 'noscript',
            SCRIPT: 'script',
            STYLE: 'style',
            TITLE: 'title',
          },
          v =
            (Object.keys(w).map(function (e) {
              return w[e]
            }),
            'charset'),
          E = 'cssText',
          T = 'href',
          x = 'http-equiv',
          S = 'innerHTML',
          k = 'itemprop',
          A = 'name',
          C = 'property',
          O = 'rel',
          M = 'src',
          L = 'target',
          N = {
            accesskey: 'accessKey',
            charset: 'charSet',
            class: 'className',
            contenteditable: 'contentEditable',
            contextmenu: 'contextMenu',
            'http-equiv': 'httpEquiv',
            itemprop: 'itemProp',
            tabindex: 'tabIndex',
          },
          P = 'defaultTitle',
          j = 'defer',
          I = 'encodeSpecialCharacters',
          R = 'onChangeClientState',
          U = 'titleTemplate',
          B = Object.keys(N).reduce(function (e, t) {
            return (e[N[t]] = t), e
          }, {}),
          z = [w.NOSCRIPT, w.SCRIPT, w.STYLE],
          F =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                },
          _ = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          },
          D = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n]
                ;(r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r)
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t
            }
          })(),
          H =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            },
          Y = function (e, t) {
            var n = {}
            for (var r in e)
              t.indexOf(r) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
            return n
          },
          q = function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          },
          K = function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
            return !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#x27;')
          },
          G = function (e) {
            var t = X(e, w.TITLE),
              n = X(e, U)
            if (n && t)
              return n.replace(/%s/g, function () {
                return Array.isArray(t) ? t.join('') : t
              })
            var r = X(e, P)
            return t || r || void 0
          },
          W = function (e) {
            return X(e, R) || function () {}
          },
          J = function (e, t) {
            return t
              .filter(function (t) {
                return void 0 !== t[e]
              })
              .map(function (t) {
                return t[e]
              })
              .reduce(function (e, t) {
                return H({}, e, t)
              }, {})
          },
          Q = function (e, t) {
            return t
              .filter(function (e) {
                return void 0 !== e[w.BASE]
              })
              .map(function (e) {
                return e[w.BASE]
              })
              .reverse()
              .reduce(function (t, n) {
                if (!t.length)
                  for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                    var o = r[a].toLowerCase()
                    if (-1 !== e.indexOf(o) && n[o]) return t.concat(n)
                  }
                return t
              }, [])
          },
          V = function (e, t, n) {
            var r = {}
            return n
              .filter(function (t) {
                return (
                  !!Array.isArray(t[e]) ||
                  (void 0 !== t[e] &&
                    ne(
                      'Helmet: ' +
                        e +
                        ' should be of type "Array". Instead found type "' +
                        F(t[e]) +
                        '"'
                    ),
                  !1)
                )
              })
              .map(function (t) {
                return t[e]
              })
              .reverse()
              .reduce(function (e, n) {
                var a = {}
                n.filter(function (e) {
                  for (
                    var n = void 0, o = Object.keys(e), i = 0;
                    i < o.length;
                    i++
                  ) {
                    var l = o[i],
                      c = l.toLowerCase()
                    ;-1 === t.indexOf(c) ||
                      (n === O && 'canonical' === e[n].toLowerCase()) ||
                      (c === O && 'stylesheet' === e[c].toLowerCase()) ||
                      (n = c),
                      -1 === t.indexOf(l) ||
                        (l !== S && l !== E && l !== k) ||
                        (n = l)
                  }
                  if (!n || !e[n]) return !1
                  var u = e[n].toLowerCase()
                  return (
                    r[n] || (r[n] = {}),
                    a[n] || (a[n] = {}),
                    !r[n][u] && ((a[n][u] = !0), !0)
                  )
                })
                  .reverse()
                  .forEach(function (t) {
                    return e.push(t)
                  })
                for (var o = Object.keys(a), i = 0; i < o.length; i++) {
                  var l = o[i],
                    c = h()({}, r[l], a[l])
                  r[l] = c
                }
                return e
              }, [])
              .reverse()
          },
          X = function (e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
              var r = e[n]
              if (r.hasOwnProperty(t)) return r[t]
            }
            return null
          },
          Z =
            ((r = Date.now()),
            function (e) {
              var t = Date.now()
              t - r > 16
                ? ((r = t), e(t))
                : setTimeout(function () {
                    Z(e)
                  }, 0)
            }),
          $ = function (e) {
            return clearTimeout(e)
          },
          ee =
            'undefined' != typeof window
              ? (window.requestAnimationFrame &&
                  window.requestAnimationFrame.bind(window)) ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                Z
              : e.requestAnimationFrame || Z,
          te =
            'undefined' != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                $
              : e.cancelAnimationFrame || $,
          ne = function (e) {
            return (
              console && 'function' == typeof console.warn && console.warn(e)
            )
          },
          re = null,
          ae = function (e, t) {
            var n = e.baseTag,
              r = e.bodyAttributes,
              a = e.htmlAttributes,
              o = e.linkTags,
              i = e.metaTags,
              l = e.noscriptTags,
              c = e.onChangeClientState,
              u = e.scriptTags,
              s = e.styleTags,
              m = e.title,
              d = e.titleAttributes
            le(w.BODY, r), le(w.HTML, a), ie(m, d)
            var f = {
                baseTag: ce(w.BASE, n),
                linkTags: ce(w.LINK, o),
                metaTags: ce(w.META, i),
                noscriptTags: ce(w.NOSCRIPT, l),
                scriptTags: ce(w.SCRIPT, u),
                styleTags: ce(w.STYLE, s),
              },
              p = {},
              h = {}
            Object.keys(f).forEach(function (e) {
              var t = f[e],
                n = t.newTags,
                r = t.oldTags
              n.length && (p[e] = n), r.length && (h[e] = f[e].oldTags)
            }),
              t && t(),
              c(e, p, h)
          },
          oe = function (e) {
            return Array.isArray(e) ? e.join('') : e
          },
          ie = function (e, t) {
            void 0 !== e && document.title !== e && (document.title = oe(e)),
              le(w.TITLE, t)
          },
          le = function (e, t) {
            var n = document.getElementsByTagName(e)[0]
            if (n) {
              for (
                var r = n.getAttribute('data-react-helmet'),
                  a = r ? r.split(',') : [],
                  o = [].concat(a),
                  i = Object.keys(t),
                  l = 0;
                l < i.length;
                l++
              ) {
                var c = i[l],
                  u = t[c] || ''
                n.getAttribute(c) !== u && n.setAttribute(c, u),
                  -1 === a.indexOf(c) && a.push(c)
                var s = o.indexOf(c)
                ;-1 !== s && o.splice(s, 1)
              }
              for (var m = o.length - 1; m >= 0; m--) n.removeAttribute(o[m])
              a.length === o.length
                ? n.removeAttribute('data-react-helmet')
                : n.getAttribute('data-react-helmet') !== i.join(',') &&
                  n.setAttribute('data-react-helmet', i.join(','))
            }
          },
          ce = function (e, t) {
            var n = document.head || document.querySelector(w.HEAD),
              r = n.querySelectorAll(e + '[data-react-helmet]'),
              a = Array.prototype.slice.call(r),
              o = [],
              i = void 0
            return (
              t &&
                t.length &&
                t.forEach(function (t) {
                  var n = document.createElement(e)
                  for (var r in t)
                    if (t.hasOwnProperty(r))
                      if (r === S) n.innerHTML = t.innerHTML
                      else if (r === E)
                        n.styleSheet
                          ? (n.styleSheet.cssText = t.cssText)
                          : n.appendChild(document.createTextNode(t.cssText))
                      else {
                        var l = void 0 === t[r] ? '' : t[r]
                        n.setAttribute(r, l)
                      }
                  n.setAttribute('data-react-helmet', 'true'),
                    a.some(function (e, t) {
                      return (i = t), n.isEqualNode(e)
                    })
                      ? a.splice(i, 1)
                      : o.push(n)
                }),
              a.forEach(function (e) {
                return e.parentNode.removeChild(e)
              }),
              o.forEach(function (e) {
                return n.appendChild(e)
              }),
              { oldTags: a, newTags: o }
            )
          },
          ue = function (e) {
            return Object.keys(e).reduce(function (t, n) {
              var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : '' + n
              return t ? t + ' ' + r : r
            }, '')
          },
          se = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            return Object.keys(e).reduce(function (t, n) {
              return (t[N[n] || n] = e[n]), t
            }, t)
          },
          me = function (e, t, n) {
            switch (e) {
              case w.TITLE:
                return {
                  toComponent: function () {
                    return (
                      (e = t.title),
                      (n = t.titleAttributes),
                      ((r = { key: e })['data-react-helmet'] = !0),
                      (a = se(n, r)),
                      [f.default.createElement(w.TITLE, a, e)]
                    )
                    var e, n, r, a
                  },
                  toString: function () {
                    return (function (e, t, n, r) {
                      var a = ue(n),
                        o = oe(t)
                      return a
                        ? '<' +
                            e +
                            ' data-react-helmet="true" ' +
                            a +
                            '>' +
                            K(o, r) +
                            '</' +
                            e +
                            '>'
                        : '<' +
                            e +
                            ' data-react-helmet="true">' +
                            K(o, r) +
                            '</' +
                            e +
                            '>'
                    })(e, t.title, t.titleAttributes, n)
                  },
                }
              case g:
              case y:
                return {
                  toComponent: function () {
                    return se(t)
                  },
                  toString: function () {
                    return ue(t)
                  },
                }
              default:
                return {
                  toComponent: function () {
                    return (function (e, t) {
                      return t.map(function (t, n) {
                        var r,
                          a = (((r = { key: n })['data-react-helmet'] = !0), r)
                        return (
                          Object.keys(t).forEach(function (e) {
                            var n = N[e] || e
                            if (n === S || n === E) {
                              var r = t.innerHTML || t.cssText
                              a.dangerouslySetInnerHTML = { __html: r }
                            } else a[n] = t[e]
                          }),
                          f.default.createElement(e, a)
                        )
                      })
                    })(e, t)
                  },
                  toString: function () {
                    return (function (e, t, n) {
                      return t.reduce(function (t, r) {
                        var a = Object.keys(r)
                            .filter(function (e) {
                              return !(e === S || e === E)
                            })
                            .reduce(function (e, t) {
                              var a =
                                void 0 === r[t]
                                  ? t
                                  : t + '="' + K(r[t], n) + '"'
                              return e ? e + ' ' + a : a
                            }, ''),
                          o = r.innerHTML || r.cssText || '',
                          i = -1 === z.indexOf(e)
                        return (
                          t +
                          '<' +
                          e +
                          ' data-react-helmet="true" ' +
                          a +
                          (i ? '/>' : '>' + o + '</' + e + '>')
                        )
                      }, '')
                    })(e, t, n)
                  },
                }
            }
          },
          de = function (e) {
            var t = e.baseTag,
              n = e.bodyAttributes,
              r = e.encode,
              a = e.htmlAttributes,
              o = e.linkTags,
              i = e.metaTags,
              l = e.noscriptTags,
              c = e.scriptTags,
              u = e.styleTags,
              s = e.title,
              m = void 0 === s ? '' : s,
              d = e.titleAttributes
            return {
              base: me(w.BASE, t, r),
              bodyAttributes: me(g, n, r),
              htmlAttributes: me(y, a, r),
              link: me(w.LINK, o, r),
              meta: me(w.META, i, r),
              noscript: me(w.NOSCRIPT, l, r),
              script: me(w.SCRIPT, c, r),
              style: me(w.STYLE, u, r),
              title: me(w.TITLE, { title: m, titleAttributes: d }, r),
            }
          },
          fe = s()(
            function (e) {
              return {
                baseTag: Q([T, L], e),
                bodyAttributes: J(g, e),
                defer: X(e, j),
                encode: X(e, I),
                htmlAttributes: J(y, e),
                linkTags: V(w.LINK, [O, T], e),
                metaTags: V(w.META, [A, v, x, C, k], e),
                noscriptTags: V(w.NOSCRIPT, [S], e),
                onChangeClientState: W(e),
                scriptTags: V(w.SCRIPT, [M, S], e),
                styleTags: V(w.STYLE, [E], e),
                title: G(e),
                titleAttributes: J(b, e),
              }
            },
            function (e) {
              re && te(re),
                e.defer
                  ? (re = ee(function () {
                      ae(e, function () {
                        re = null
                      })
                    }))
                  : (ae(e), (re = null))
            },
            de
          )(function () {
            return null
          }),
          pe =
            ((a = fe),
            (i = o = (function (e) {
              function t() {
                return _(this, t), q(this, e.apply(this, arguments))
              }
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof t
                    )
                  ;(e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t))
                })(t, e),
                (t.prototype.shouldComponentUpdate = function (e) {
                  return !d()(this.props, e)
                }),
                (t.prototype.mapNestedChildrenToProps = function (e, t) {
                  if (!t) return null
                  switch (e.type) {
                    case w.SCRIPT:
                    case w.NOSCRIPT:
                      return { innerHTML: t }
                    case w.STYLE:
                      return { cssText: t }
                  }
                  throw new Error(
                    '<' +
                      e.type +
                      ' /> elements are self-closing and can not contain children. Refer to our API for more information.'
                  )
                }),
                (t.prototype.flattenArrayTypeChildren = function (e) {
                  var t,
                    n = e.child,
                    r = e.arrayTypeChildren,
                    a = e.newChildProps,
                    o = e.nestedChildren
                  return H(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                      H({}, a, this.mapNestedChildrenToProps(n, o)),
                    ])),
                    t)
                  )
                }),
                (t.prototype.mapObjectTypeChildren = function (e) {
                  var t,
                    n,
                    r = e.child,
                    a = e.newProps,
                    o = e.newChildProps,
                    i = e.nestedChildren
                  switch (r.type) {
                    case w.TITLE:
                      return H(
                        {},
                        a,
                        (((t = {})[r.type] = i),
                        (t.titleAttributes = H({}, o)),
                        t)
                      )
                    case w.BODY:
                      return H({}, a, { bodyAttributes: H({}, o) })
                    case w.HTML:
                      return H({}, a, { htmlAttributes: H({}, o) })
                  }
                  return H({}, a, (((n = {})[r.type] = H({}, o)), n))
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                  var n = H({}, t)
                  return (
                    Object.keys(e).forEach(function (t) {
                      var r
                      n = H({}, n, (((r = {})[t] = e[t]), r))
                    }),
                    n
                  )
                }),
                (t.prototype.warnOnInvalidChildren = function (e, t) {
                  return !0
                }),
                (t.prototype.mapChildrenToProps = function (e, t) {
                  var n = this,
                    r = {}
                  return (
                    f.default.Children.forEach(e, function (e) {
                      if (e && e.props) {
                        var a = e.props,
                          o = a.children,
                          i = (function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            return Object.keys(e).reduce(function (t, n) {
                              return (t[B[n] || n] = e[n]), t
                            }, t)
                          })(Y(a, ['children']))
                        switch ((n.warnOnInvalidChildren(e, o), e.type)) {
                          case w.LINK:
                          case w.META:
                          case w.NOSCRIPT:
                          case w.SCRIPT:
                          case w.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: e,
                              arrayTypeChildren: r,
                              newChildProps: i,
                              nestedChildren: o,
                            })
                            break
                          default:
                            t = n.mapObjectTypeChildren({
                              child: e,
                              newProps: t,
                              newChildProps: i,
                              nestedChildren: o,
                            })
                        }
                      }
                    }),
                    (t = this.mapArrayTypeChildrenToProps(r, t))
                  )
                }),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.children,
                    n = Y(e, ['children']),
                    r = H({}, n)
                  return (
                    t && (r = this.mapChildrenToProps(t, r)),
                    f.default.createElement(a, r)
                  )
                }),
                D(t, null, [
                  {
                    key: 'canUseDOM',
                    set: function (e) {
                      a.canUseDOM = e
                    },
                  },
                ]),
                t
              )
            })(f.default.Component)),
            (o.propTypes = {
              base: c.a.object,
              bodyAttributes: c.a.object,
              children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node]),
              defaultTitle: c.a.string,
              defer: c.a.bool,
              encodeSpecialCharacters: c.a.bool,
              htmlAttributes: c.a.object,
              link: c.a.arrayOf(c.a.object),
              meta: c.a.arrayOf(c.a.object),
              noscript: c.a.arrayOf(c.a.object),
              onChangeClientState: c.a.func,
              script: c.a.arrayOf(c.a.object),
              style: c.a.arrayOf(c.a.object),
              title: c.a.string,
              titleAttributes: c.a.object,
              titleTemplate: c.a.string,
            }),
            (o.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
            (o.peek = a.peek),
            (o.rewind = function () {
              var e = a.rewind()
              return (
                e ||
                  (e = de({
                    baseTag: [],
                    bodyAttributes: {},
                    encodeSpecialCharacters: !0,
                    htmlAttributes: {},
                    linkTags: [],
                    metaTags: [],
                    noscriptTags: [],
                    scriptTags: [],
                    styleTags: [],
                    title: '',
                    titleAttributes: {},
                  })),
                e
              )
            }),
            i)
        pe.renderStatic = pe.rewind
      }.call(this, n('yLpj')))
    },
    yLpj: function (e, t) {
      var n
      n = (function () {
        return this
      })()
      try {
        n = n || new Function('return this')()
      } catch (r) {
        'object' == typeof window && (n = window)
      }
      e.exports = n
    },
  },
])
//# sourceMappingURL=commons-40cd1b12f76fc445aef6.js.map
