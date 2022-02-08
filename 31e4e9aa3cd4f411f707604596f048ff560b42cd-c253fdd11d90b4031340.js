/*! For license information please see 31e4e9aa3cd4f411f707604596f048ff560b42cd-c253fdd11d90b4031340.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    Ercv: function (e, t, n) {
      e.exports = {
        document: 'document-module--document--1Lycb',
        title: 'document-module--title--1PjmY',
        heading: 'document-module--heading--Y8-yS',
        meta: 'document-module--meta--3MKTa',
        readTime: 'document-module--readTime--1MnG7',
        tags: 'document-module--tags--v5jW9',
        tag: 'document-module--tag--1yvzk',
        authors: 'document-module--authors--3mYFp',
        author: 'document-module--author--3S58z',
        tocWrap: 'document-module--tocWrap--_5cZQ',
        tocTitle: 'document-module--tocTitle--2ybLY',
        toc: 'document-module--toc--2M3e3',
        cover: 'document-module--cover--2yqPV',
        grain: 'document-module--grain--27TJO',
        content: 'document-module--content--JBd-i',
        imageGrid: 'document-module--imageGrid--1pjv7',
        gridItem: 'document-module--gridItem--2inPu',
        loadMore: 'document-module--loadMore--1m8aw',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    zSWs: function (e, t, n) {
      'use strict'
      var a = n('FdF9'),
        r = n('Wbzz'),
        o = n('9eSz'),
        u = n.n(o),
        i = n('Ercv'),
        c = n.n(i),
        l = n('zvvp')
      t.a = function (e) {
        var t = e.title,
          n = e.authors,
          o = e.hideMeta,
          i = e.datePublished,
          d = e.dateModified,
          m = e.dateFromNow,
          s = e.dateModifiedFromNow,
          f = e.image,
          p = e.author,
          g = e.timeToRead,
          y = e.toc,
          h = e.tableOfContents,
          v = e.tags,
          E = e.html
        return a.default.createElement(
          'article',
          { className: c.a.document + ' h-entry' },
          a.default.createElement(
            'div',
            { className: c.a.title },
            a.default.createElement(
              'h1',
              { className: c.a.heading + ' p-name' },
              t
            ),
            a.default.createElement(
              'div',
              { className: c.a.meta },
              n
                ? a.default.createElement(
                    'div',
                    { className: c.a.authors },
                    n.map(function (e) {
                      return a.default.createElement(
                        r.Link,
                        {
                          className: c.a.author,
                          to: '/author/' + l.slugify(e.id) + '/',
                          key: l.slugify(e.id),
                        },
                        a.default.createElement('span', null, e.name)
                      )
                    })
                  )
                : null,
              a.default.createElement(
                'div',
                { style: { display: o && 'none' } },
                a.default.createElement(
                  'span',
                  null,
                  p &&
                    a.default.createElement(
                      a.default.Fragment,
                      null,
                      d ? 'Updated' : 'Published',
                      ' ',
                      a.default.createElement(
                        'span',
                        { style: { display: 'none' } },
                        'by',
                        ' ',
                        a.default.createElement(
                          'a',
                          { className: 'p-author h-card', href: p.url },
                          p.name
                        )
                      )
                    ),
                  i &&
                    a.default.createElement(
                      'span',
                      { style: { display: d && 'none' } },
                      ' ',
                      a.default.createElement(
                        'time',
                        { className: 'dt-published', dateTime: i },
                        m
                      )
                    ),
                  d &&
                    a.default.createElement(
                      a.default.Fragment,
                      null,
                      ' ',
                      a.default.createElement(
                        'time',
                        { className: 'dt-updated', dateTime: d },
                        s
                      )
                    )
                ),
                g &&
                  a.default.createElement(
                    a.default.Fragment,
                    null,
                    ' ',
                    a.default.createElement(
                      'span',
                      { className: c.a.readTime },
                      g,
                      ' min read'
                    )
                  )
              ),
              v
                ? a.default.createElement(
                    'div',
                    { className: c.a.tags },
                    v.map(function (e) {
                      return a.default.createElement(
                        r.Link,
                        {
                          className: c.a.tag,
                          to: '/tag/' + l.slugify(e) + '/',
                          key: l.slugify(e),
                        },
                        a.default.createElement('span', null, '#', e)
                      )
                    })
                  )
                : null
            )
          ),
          f &&
            a.default.createElement(u.a, {
              fluid: f.childImageSharp.fluid,
              className: c.a.cover,
              backgroundColor: 'var(--input-background-color)',
            }),
          y &&
            a.default.createElement(
              'details',
              { className: c.a.tocWrap },
              a.default.createElement(
                'summary',
                { className: c.a.tocTitle },
                'Table of contents'
              ),
              a.default.createElement('div', {
                className: c.a.toc,
                dangerouslySetInnerHTML: { __html: h },
              })
            ),
          a.default.createElement('div', {
            className: c.a.content + ' e-content',
            dangerouslySetInnerHTML: { __html: E },
          })
        )
      }
    },
    zvvp: function (e, t, n) {
      e.exports = (function (e) {
        'use strict'
        function t(t, n) {
          return e.transform(
            t,
            function (e, a, r) {
              n(a, r, t) && e.push(r)
            },
            []
          )
        }
        function n(e, t, n, a) {
          return e(n) ? n : e(a) ? a : t
        }
        function a(t, a) {
          return n(e.isNumber, 0, t, a)
        }
        function r(e) {
          return Boolean(e)
        }
        var o = function (e, t) {
          if (Array.isArray(e)) return e
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                a = !0,
                r = !1,
                o = void 0
              try {
                for (
                  var u, i = e[Symbol.iterator]();
                  !(a = (u = i.next()).done) &&
                  (n.push(u.value), !t || n.length !== t);
                  a = !0
                );
              } catch (c) {
                ;(r = !0), (o = c)
              } finally {
                try {
                  !a && i.return && i.return()
                } finally {
                  if (r) throw o
                }
              }
              return n
            })(e, t)
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          )
        }
        function u() {
          var t = e.reverse(arguments),
            n = e.take(t, 2),
            a = o(n, 2),
            r = a[0],
            u = a[1],
            i = e.nth(t, 2) || {}
          return e.set(i, u, r)
        }
        function i(t) {
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
                  a = arguments.length,
                  r = Array(a > 1 ? a - 1 : 0),
                  o = 1;
                o < a;
                o++
              )
                r[o - 1] = arguments[o]
              if (
                (e.each(r, function (e) {
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
                r = n.length - 1,
                o = ''
              return (
                e.times(a(t, 16), function () {
                  o += n.charAt(e.random(r))
                }),
                o
              )
            },
            getArray: function (t, a) {
              return n(e.isArray, [], t, a)
            },
            getBoolean: function (t, a) {
              return n(e.isBoolean, !1, t, a)
            },
            getFinite: function (t, a) {
              return n(e.isFinite, 0, t, a)
            },
            getFunction: function (t, a) {
              return n(e.isFunction, e.noop, t, a)
            },
            getMap: function (t, a) {
              return n(e.isMap, new Map(), t, a)
            },
            getNumber: a,
            getObject: function (t, a) {
              return n(e.isObject, {}, t, a)
            },
            getPlainObject: function (t, a) {
              return n(e.isPlainObject, {}, t, a)
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
            getSet: function (t, a) {
              return n(e.isSet, new Set(), t, a)
            },
            getString: function (t, a) {
              return n(e.isString, '', t, a)
            },
            getWeakMap: function (t, a) {
              return n(e.isWeakMap, new WeakMap(), t, a)
            },
            getWeakSet: function (t, a) {
              return n(e.isWeakSet, new WeakSet(), t, a)
            },
            hasInOfType: function (t, n, a) {
              return !!e.hasIn(t, n) && a(e.get(t, n))
            },
            hasOfType: function (t, n, a) {
              return !!e.has(t, n) && a(e.get(t, n))
            },
            isIterable: function (t) {
              return r(t) && e.isFunction(t[Symbol.iterator])
            },
            isNonEmptyString: function (t) {
              return e.isString(t) && '' !== t.trim()
            },
            objectWith: u,
            parseQueryString: i,
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
            toBool: r,
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
            transformValueMap: function (t, n, a) {
              return (
                e.each(t, function (t) {
                  var r = e.get(t, n)
                  e.isUndefined(r) || e.set(t, n, a(r))
                }),
                t
              )
            },
            fromQueryString: i,
            parseDate: c,
            with: u,
          }),
          e
        )
      })(n('LvDl'))
    },
  },
])
//# sourceMappingURL=31e4e9aa3cd4f411f707604596f048ff560b42cd-c253fdd11d90b4031340.js.map
