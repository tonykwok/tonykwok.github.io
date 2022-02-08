/*! For license information please see component---src-pages-author-js-95ff9f4ad11b54159b51.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    '4Eig': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('Wbzz'),
        i = n('FdF9'),
        a = n('Bl7J'),
        o = n('jNNy'),
        u = n('KYHh'),
        c = n.n(u),
        l = n('5LqB'),
        s = n.n(l),
        f = n('zvvp'),
        d = c.a.image
      t.default = function (e) {
        var t,
          n = e.data,
          u = n.allAuthorYaml.nodes,
          l = n.allMarkdownRemark.group,
          m = u.reduce(function (e, t) {
            return (e[t.id] = t.name), e
          }, {})
        return (
          console.log(m),
          i.default.createElement(
            a.a,
            null,
            i.default.createElement(o.a, {
              title: 'All Authors | ' + c.a.titleAlt,
              path: '/author/',
              description: 'An archive of posts organized by author.',
              metaImage: d,
            }),
            i.default.createElement(
              'main',
              { id: 'main', className: s.a.main },
              i.default.createElement(
                'div',
                { className: s.a.title },
                i.default.createElement(
                  'h1',
                  { className: s.a.heading },
                  i.default.createElement('span', null, 'All authors')
                )
              ),
              i.default.createElement(
                'div',
                { className: s.a.content },
                i.default.createElement(
                  'h2',
                  { className: s.a.subHeading },
                  i.default.createElement('span', null, 'Browse by author')
                ),
                i.default.createElement(
                  'div',
                  { className: s.a.columnList },
                  i.default.createElement(
                    'ul',
                    null,
                    l
                      .sort(
                        ((t = 'fieldValue'),
                        function (e, n) {
                          return e[t].toLowerCase() == n[t].toLowerCase()
                            ? 0
                            : e[t].toLowerCase() < n[t].toLowerCase()
                            ? -1
                            : 1
                        })
                      )
                      .map(function (e) {
                        var t = m[e.fieldValue],
                          n = t || e.fieldValue
                        return i.default.createElement(
                          'li',
                          { key: e.fieldValue },
                          i.default.createElement(
                            r.Link,
                            { to: '/author/' + f.slugify(e.fieldValue) + '/' },
                            i.default.createElement('strong', null, n),
                            ' ',
                            i.default.createElement(
                              'span',
                              { className: s.a.count },
                              e.totalCount
                            )
                          )
                        )
                      })
                  )
                )
              )
            )
          )
        )
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
    YuTi: function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function () {
                return e.l
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function () {
                return e.i
              },
            }),
            (e.webpackPolyfill = 1)),
          e
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
        var a = function (e, t) {
          if (Array.isArray(e)) return e
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                r = !0,
                i = !1,
                a = void 0
              try {
                for (
                  var o, u = e[Symbol.iterator]();
                  !(r = (o = u.next()).done) &&
                  (n.push(o.value), !t || n.length !== t);
                  r = !0
                );
              } catch (c) {
                ;(i = !0), (a = c)
              } finally {
                try {
                  !r && u.return && u.return()
                } finally {
                  if (i) throw a
                }
              }
              return n
            })(e, t)
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          )
        }
        function o() {
          var t = e.reverse(arguments),
            n = e.take(t, 2),
            r = a(n, 2),
            i = r[0],
            o = r[1],
            u = e.nth(t, 2) || {}
          return e.set(u, o, i)
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
                  a = 1;
                a < r;
                a++
              )
                i[a - 1] = arguments[a]
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
                a = ''
              return (
                e.times(r(t, 16), function () {
                  a += n.charAt(e.random(i))
                }),
                a
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
            objectWith: o,
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
            with: o,
          }),
          e
        )
      })(n('LvDl'))
    },
  },
])
//# sourceMappingURL=component---src-pages-author-js-95ff9f4ad11b54159b51.js.map
