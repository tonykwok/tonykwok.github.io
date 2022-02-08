/*! For license information please see 70dc6fec9efdf59f3b6f7a02312b81d37eceea80-426334f559afe71c6f16.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    '0TdT': function (e, t, n) {
      e.exports = {
        entry: 'entry-module--entry--22LZB',
        title: 'entry-module--title--3Yzff',
        meta: 'entry-module--meta--13AY1',
        excerpt: 'entry-module--excerpt--1Jg-M',
        cover: 'entry-module--cover--uvbo5',
        grain: 'entry-module--grain--QUP2_',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    '5LqB': function (e, t, n) {
      e.exports = {
        icon: 'archive-module--icon--89JmZ',
        spin: 'archive-module--spin--14aNj',
        logo: 'archive-module--logo--3c8aR',
        title: 'archive-module--title--3ZGBp',
        cover: 'archive-module--cover--2sv0o',
        heading: 'archive-module--heading--GjChR',
        subHeading: 'archive-module--subHeading--3rgl2',
        intro: 'archive-module--intro--2EflT',
        grain: 'archive-module--grain--5gDu8',
        content: 'archive-module--content--2dCC9',
        navList: 'archive-module--navList--3yIMk',
        list: 'archive-module--list--W5ZBJ',
        gridList: 'archive-module--gridList--2iz3T',
        gridListExpanded: 'archive-module--gridListExpanded--1L2X2',
        columnList: 'archive-module--columnList--3dK8g',
        count: 'archive-module--count--RREhZ',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    mTGK: function (e, t, n) {
      'use strict'
      var r = n('FdF9'),
        i = n('Wbzz'),
        o = n('9eSz'),
        a = n.n(o),
        u = n('0TdT'),
        c = n.n(u)
      n('zvvp')
      t.a = function (e) {
        var t = e.title,
          n = (e.authors, e.date),
          o = e.datePretty,
          u = e.path,
          l = e.image,
          s = (e.author, e.timeToRead),
          d = e.excerpt
        e.tags
        return r.default.createElement(
          r.default.Fragment,
          null,
          r.default.createElement(
            'article',
            { className: c.a.entry + ' h-entry' },
            r.default.createElement(
              'h2',
              { className: c.a.title + ' p-name' },
              r.default.createElement(i.Link, { to: u }, t)
            ),
            r.default.createElement(
              'div',
              { className: c.a.meta },
              n &&
                r.default.createElement(
                  r.default.Fragment,
                  null,
                  ' ',
                  r.default.createElement(
                    'time',
                    { className: c.a.date + ' dt-published', dateTime: n },
                    o
                  )
                ),
              s &&
                r.default.createElement(
                  r.default.Fragment,
                  null,
                  ' ',
                  r.default.createElement(
                    'span',
                    { className: c.a.readTime },
                    s,
                    ' min read'
                  )
                )
            ),
            l &&
              r.default.createElement(a.a, {
                fluid: l.childImageSharp.fluid,
                className: c.a.cover,
                backgroundColor: 'var(--input-background-color)',
              }),
            r.default.createElement('div', {
              className: c.a.excerpt + ' p-summary',
              dangerouslySetInnerHTML: { __html: d },
            })
          )
        )
      }
    },
    zvvp: function (e, t, n) {
      e.exports = (function (e) {
        'use strict'
        function t(t, n) {
          return e.transform(
            t,
            function (e, r, i) {
              n(r, i, t) && e.push(i)
            },
            []
          )
        }
        function n(e, t, n, r) {
          return e(n) ? n : e(r) ? r : t
        }
        function r(t, r) {
          return n(e.isNumber, 0, t, r)
        }
        function i(e) {
          return Boolean(e)
        }
        var o = function (e, t) {
          if (Array.isArray(e)) return e
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                r = !0,
                i = !1,
                o = void 0
              try {
                for (
                  var a, u = e[Symbol.iterator]();
                  !(r = (a = u.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  r = !0
                );
              } catch (c) {
                ;(i = !0), (o = c)
              } finally {
                try {
                  !r && u.return && u.return()
                } finally {
                  if (i) throw o
                }
              }
              return n
            })(e, t)
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          )
        }
        function a() {
          var t = e.reverse(arguments),
            n = e.take(t, 2),
            r = o(n, 2),
            i = r[0],
            a = r[1],
            u = e.nth(t, 2) || {}
          return e.set(u, a, i)
        }
        function u(t) {
          return e.transform(
            e.toString(t).split('&'),
            function (e, t) {
              var n = t.split('=')
              e[decodeURIComponent(n[0])] = decodeURIComponent(n[1])
            },
            {}
          )
        }
        function c(e) {
          return new Date(e)
        }
        return (
          e.mixin({
            check: function (t) {
              for (
                var n = !1,
                  r = arguments.length,
                  i = Array(r > 1 ? r - 1 : 0),
                  o = 1;
                o < r;
                o++
              )
                i[o - 1] = arguments[o]
              if (
                (e.each(i, function (e) {
                  return !(n = e(t))
                }),
                !n)
              )
                throw new TypeError(
                  'Argument is not any of the accepted types.'
                )
            },
            differenceKeys: function (e, n) {
              return t(e, function (e, t) {
                return e !== n[t]
              })
            },
            filterKeys: t,
            generateKey: function (t) {
              var n =
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                i = n.length - 1,
                o = ''
              return (
                e.times(r(t, 16), function () {
                  o += n.charAt(e.random(i))
                }),
                o
              )
            },
            getArray: function (t, r) {
              return n(e.isArray, [], t, r)
            },
            getBoolean: function (t, r) {
              return n(e.isBoolean, !1, t, r)
            },
            getFinite: function (t, r) {
              return n(e.isFinite, 0, t, r)
            },
            getFunction: function (t, r) {
              return n(e.isFunction, e.noop, t, r)
            },
            getMap: function (t, r) {
              return n(e.isMap, new Map(), t, r)
            },
            getNumber: r,
            getObject: function (t, r) {
              return n(e.isObject, {}, t, r)
            },
            getPlainObject: function (t, r) {
              return n(e.isPlainObject, {}, t, r)
            },
            getPrototype: function (t) {
              var n = void 0
              return (
                e.isUndefined(t) ||
                  e.isNull(t) ||
                  (n = e.isObject(t)
                    ? e.isFunction(t)
                      ? t.prototype
                      : Object.getPrototypeOf(t)
                    : t.constructor.prototype),
                n
              )
            },
            getSet: function (t, r) {
              return n(e.isSet, new Set(), t, r)
            },
            getString: function (t, r) {
              return n(e.isString, '', t, r)
            },
            getWeakMap: function (t, r) {
              return n(e.isWeakMap, new WeakMap(), t, r)
            },
            getWeakSet: function (t, r) {
              return n(e.isWeakSet, new WeakSet(), t, r)
            },
            hasInOfType: function (t, n, r) {
              return !!e.hasIn(t, n) && r(e.get(t, n))
            },
            hasOfType: function (t, n, r) {
              return !!e.has(t, n) && r(e.get(t, n))
            },
            isIterable: function (t) {
              return i(t) && e.isFunction(t[Symbol.iterator])
            },
            isNonEmptyString: function (t) {
              return e.isString(t) && '' !== t.trim()
            },
            objectWith: a,
            parseQueryString: u,
            sign: function (t) {
              var n = NaN
              return (
                e.isNumber(t) &&
                  (0 === t ? (n = t) : t >= 1 ? (n = 1) : t <= -1 && (n = -1)),
                n
              )
            },
            slugify: function (t) {
              return e
                .deburr(t)
                .trim()
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/([^a-zA-Z0-9\._-]+)/, '')
            },
            toBool: i,
            toDate: c,
            toQueryString: function (t) {
              return e
                .transform(
                  t,
                  function (e, t, n) {
                    e.push(encodeURIComponent(n) + '=' + encodeURIComponent(t))
                  },
                  []
                )
                .join('&')
            },
            transformValueMap: function (t, n, r) {
              return (
                e.each(t, function (t) {
                  var i = e.get(t, n)
                  e.isUndefined(i) || e.set(t, n, r(i))
                }),
                t
              )
            },
            fromQueryString: u,
            parseDate: c,
            with: a,
          }),
          e
        )
      })(n('LvDl'))
    },
  },
])
//# sourceMappingURL=70dc6fec9efdf59f3b6f7a02312b81d37eceea80-426334f559afe71c6f16.js.map
