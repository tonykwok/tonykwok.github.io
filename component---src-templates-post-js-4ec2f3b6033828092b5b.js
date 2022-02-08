;(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    '+pmV': function (e, t, a) {
      e.exports = {
        comments: 'post-module--comments--1alRg',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    '3CW5': function (e, t, a) {
      'use strict'
      var n = a('FdF9'),
        r = a('Wbzz'),
        i = a('QS5V'),
        o = a.n(i)
      t.a = function (e) {
        var t = e.nextPath,
          a = e.previousPath,
          i = e.nextLabel,
          s = e.previousLabel
        return a || t
          ? n.default.createElement(
              'nav',
              { className: o.a.pagination },
              a
                ? n.default.createElement(
                    r.Link,
                    { to: a, rel: 'prev', className: o.a.item },
                    n.default.createElement(
                      'span',
                      { className: o.a.iconPrev },
                      '←'
                    ),
                    n.default.createElement(
                      'span',
                      { className: o.a.itemText },
                      s
                    )
                  )
                : n.default.createElement('div', { className: o.a.item }),
              t
                ? n.default.createElement(
                    r.Link,
                    {
                      to: t,
                      rel: 'next',
                      className: o.a.item + ' ' + o.a.itemRight,
                    },
                    n.default.createElement(
                      'span',
                      { className: o.a.itemText },
                      i
                    ),
                    n.default.createElement(
                      'span',
                      { className: o.a.iconNext },
                      '→'
                    )
                  )
                : n.default.createElement('div', { className: o.a.item })
            )
          : null
      }
    },
    '6qSS': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('FdF9'),
        r = a('Wbzz')
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t]
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
          }).apply(this, arguments)
      }
      var o = new Map(),
        s = new Map(),
        l = 0
      function c(e) {
        return Object.keys(e)
          .filter(Boolean)
          .sort()
          .map(function (t) {
            return (
              t +
              '_' +
              ('root' === t
                ? (a = e.root)
                  ? (s.has(a) || ((l += 1), s.set(a, l.toString())), s.get(a))
                  : '0'
                : e[t])
            )
            var a
          })
          .toString()
      }
      function m(e, t, a) {
        if ((void 0 === a && (a = {}), !e)) return function () {}
        var n = (function (e) {
            var t = c(e),
              a = o.get(t)
            if (!a) {
              var n = new Map(),
                r = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    var a,
                      i =
                        t.isIntersecting &&
                        r.thresholds.some(function (e) {
                          return t.intersectionRatio >= e
                        })
                    e.trackVisibility &&
                      void 0 === t.isVisible &&
                      (t.isVisible = i),
                      null == (a = n.get(t.target)) ||
                        a.forEach(function (e) {
                          e(i, t)
                        })
                  })
                }, e)
              ;(a = { id: t, observer: r, elements: n }), o.set(t, a)
            }
            return a
          })(a),
          r = n.id,
          i = n.observer,
          s = n.elements,
          l = s.get(e) || []
        return (
          s.has(e) || s.set(e, l),
          l.push(t),
          i.observe(e),
          function () {
            l.splice(l.indexOf(t), 1),
              0 === l.length && (s.delete(e), i.unobserve(e)),
              0 === s.size && (i.disconnect(), o.delete(r))
          }
        )
      }
      function u(e) {
        return 'function' != typeof e.children
      }
      var d = (function (e) {
        var t, a
        function r(t) {
          var a
          return (
            ((a = e.call(this, t) || this).node = null),
            (a._unobserveCb = null),
            (a.handleNode = function (e) {
              a.node &&
                (a.unobserve(),
                e ||
                  a.props.triggerOnce ||
                  a.props.skip ||
                  a.setState({
                    inView: !!a.props.initialInView,
                    entry: void 0,
                  })),
                (a.node = e || null),
                a.observeNode()
            }),
            (a.handleChange = function (e, t) {
              e && a.props.triggerOnce && a.unobserve(),
                u(a.props) || a.setState({ inView: e, entry: t }),
                a.props.onChange && a.props.onChange(e, t)
            }),
            (a.state = { inView: !!t.initialInView, entry: void 0 }),
            a
          )
        }
        ;(a = e),
          ((t = r).prototype = Object.create(a.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = a)
        var o = r.prototype
        return (
          (o.componentDidUpdate = function (e) {
            ;(e.rootMargin === this.props.rootMargin &&
              e.root === this.props.root &&
              e.threshold === this.props.threshold &&
              e.skip === this.props.skip &&
              e.trackVisibility === this.props.trackVisibility &&
              e.delay === this.props.delay) ||
              (this.unobserve(), this.observeNode())
          }),
          (o.componentWillUnmount = function () {
            this.unobserve(), (this.node = null)
          }),
          (o.observeNode = function () {
            if (this.node && !this.props.skip) {
              var e = this.props,
                t = e.threshold,
                a = e.root,
                n = e.rootMargin,
                r = e.trackVisibility,
                i = e.delay
              this._unobserveCb = m(this.node, this.handleChange, {
                threshold: t,
                root: a,
                rootMargin: n,
                trackVisibility: r,
                delay: i,
              })
            }
          }),
          (o.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null))
          }),
          (o.render = function () {
            if (!u(this.props)) {
              var e = this.state,
                t = e.inView,
                a = e.entry
              return this.props.children({
                inView: t,
                entry: a,
                ref: this.handleNode,
              })
            }
            var r = this.props,
              o = r.children,
              s = r.as,
              l = r.tag,
              c = (function (e, t) {
                if (null == e) return {}
                var a,
                  n,
                  r = {},
                  i = Object.keys(e)
                for (n = 0; n < i.length; n++)
                  (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
                return r
              })(r, [
                'children',
                'as',
                'tag',
                'triggerOnce',
                'threshold',
                'root',
                'rootMargin',
                'onChange',
                'skip',
                'trackVisibility',
                'delay',
                'initialInView',
              ])
            return Object(n.createElement)(
              s || l || 'div',
              i({ ref: this.handleNode }, c),
              o
            )
          }),
          r
        )
      })(n.Component)
      ;(d.displayName = 'InView'),
        (d.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 })
      var f = a('jNNy'),
        p = a('Bl7J'),
        h = a('zSWs'),
        g = a('XNfU'),
        v = a.n(g),
        b = function (e) {
          var t = e.name,
            a = e.email,
            r = e.friendlyDate,
            i = e.iso8601Date,
            o = e.children
          return n.default.createElement(
            'div',
            { className: v.a.comment },
            n.default.createElement(
              'div',
              { className: v.a.avatar },
              n.default.createElement('img', {
                src:
                  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
                'data-srcset':
                  'https://www.gravatar.com/avatar/' +
                  a +
                  '?d=mm&s=60 1x, https://www.gravatar.com/avatar/' +
                  a +
                  '?d=mm&s=120 2x',
                alt: '',
                className: 'lazyload',
              })
            ),
            n.default.createElement(
              'div',
              { className: v.a.main },
              n.default.createElement(
                'header',
                { className: v.a.meta },
                n.default.createElement(
                  'strong',
                  { className: v.a.name + ' "h-card"' },
                  t
                ),
                ' on',
                ' ',
                n.default.createElement('time', { dateTime: i }, r)
              ),
              n.default.createElement('div', { className: v.a.message }, o)
            )
          )
        },
        y = a('VCHy'),
        E = a.n(y),
        w = function (e) {
          var t,
            a = e.commentsList.edges,
            r =
              a && a.length
                ? a.map(function (e) {
                    var t = e.node,
                      a = t.id,
                      r = t.frontmatter,
                      i = r.name,
                      o = r.email,
                      s = r.friendlyDate,
                      l = r.iso8601Date,
                      c = t.html
                    return n.default.createElement(
                      b,
                      {
                        key: a,
                        name: i,
                        friendlyDate: s,
                        iso8601Date: l,
                        email: o,
                      },
                      n.default.createElement('div', {
                        dangerouslySetInnerHTML: { __html: c },
                      })
                    )
                  })
                : n.default.createElement(n.default.Fragment, null)
          return n.default.createElement(
            n.default.Fragment,
            null,
            n.default.createElement(
              'h2',
              { className: E.a.title },
              (t = a.length) < 1
                ? 'No comments'
                : 1 === t
                ? '1 comment'
                : t + ' comments'
            ),
            r
          )
        },
        N = a('3CW5'),
        k = a('KYHh'),
        V = a.n(k),
        x = a('+pmV'),
        A = a.n(x),
        _ = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(25)]).then(a.bind(null, 'TmY/'))
        })
      t.default = function (e) {
        var t = e.data,
          a = e.pageContext,
          i = t.markdownRemark,
          o = i.frontmatter,
          s = o.title,
          l = o.authors,
          c = o.date,
          u = o.date_pretty,
          d = o.date_from_now,
          g = o.last_modified_at,
          v = o.last_modified_at_from_now,
          b = o.path,
          y = o.image,
          E = o.excerpt,
          k = o.tags,
          x = o.toc,
          C = o.comments,
          O = o.comments_locked,
          P = o.hide_meta,
          M = i.excerpt,
          S = i.timeToRead,
          I = i.tableOfContents,
          j = i.id,
          L = i.html,
          T = t.comments,
          F = a.next,
          R = a.previous,
          z = y ? y.childImageSharp.fixed : V.a.image,
          D = y ? 'summary_large_image' : 'summary',
          W = R && R.frontmatter.path,
          B = R && R.frontmatter.title,
          H = F && F.frontmatter.path,
          J = F && F.frontmatter.title,
          Q = (function (e) {
            var t = void 0 === e ? {} : e,
              a = t.threshold,
              r = t.delay,
              i = t.trackVisibility,
              o = t.rootMargin,
              s = t.root,
              l = t.triggerOnce,
              c = t.skip,
              u = t.initialInView,
              d = Object(n.useRef)(),
              f = Object(n.useState)({ inView: !!u }),
              p = f[0],
              h = f[1],
              g = Object(n.useCallback)(
                function (e) {
                  void 0 !== d.current && (d.current(), (d.current = void 0)),
                    c ||
                      (e &&
                        (d.current = m(
                          e,
                          function (e, t) {
                            h({ inView: e, entry: t }),
                              t.isIntersecting &&
                                l &&
                                d.current &&
                                (d.current(), (d.current = void 0))
                          },
                          {
                            root: s,
                            rootMargin: o,
                            threshold: a,
                            trackVisibility: i,
                            delay: r,
                          }
                        )))
                },
                [Array.isArray(a) ? a.toString() : a, s, o, l, c, i, r]
              )
            Object(n.useEffect)(function () {
              d.current || !p.entry || l || c || h({ inView: !!u })
            })
            var v = [g, p.inView, p.entry]
            return (v.ref = v[0]), (v.inView = v[1]), (v.entry = v[2]), v
          })({ triggerOnce: !0 }),
          U = Q[0],
          q = Q[1]
        return n.default.createElement(
          p.a,
          null,
          n.default.createElement(f.a, {
            title: s + ' - ' + V.a.titleAlt,
            path: b,
            datePublished: c,
            dateModified: g,
            description: E || M,
            metaImage: z,
            twitterCardType: D,
            article: !0,
          }),
          n.default.createElement(
            'main',
            { id: 'main' },
            n.default.createElement(h.a, {
              key: j,
              title: s,
              authors: l,
              hideMeta: P,
              datePublished: c,
              dateModified: g,
              datePretty: u,
              dateFromNow: d,
              dateModifiedFromNow: v,
              path: b,
              author: V.a.author,
              timeToRead: S,
              toc: x,
              tableOfContents: I,
              image: y,
              html: L,
              tags: k,
              previousPost: R,
              nextPost: F,
            }),
            n.default.createElement(
              'section',
              { className: A.a.comments },
              C &&
                n.default.createElement(
                  n.default.Fragment,
                  null,
                  T && n.default.createElement(w, { commentsList: T }),
                  O
                    ? n.default.createElement(
                        'div',
                        { className: 'custom-block notice' },
                        n.default.createElement(
                          'div',
                          { className: 'custom-block-heading' },
                          'Comments are closed'
                        ),
                        n.default.createElement(
                          'div',
                          { className: 'custom-block-body' },
                          'If you have a question concerning the content of this page, please feel free to ',
                          n.default.createElement(
                            r.Link,
                            { to: '/contact/' },
                            'contact me'
                          ),
                          '.'
                        )
                      )
                    : n.default.createElement(
                        'div',
                        { ref: U },
                        q &&
                          n.default.createElement(
                            n.Suspense,
                            {
                              fallback: n.default.createElement(
                                'div',
                                null,
                                'Loading...'
                              ),
                            },
                            n.default.createElement(_, { slug: b })
                          )
                      )
                )
            )
          ),
          n.default.createElement(N.a, {
            previousPath: W,
            previousLabel: B,
            nextPath: H,
            nextLabel: J,
          })
        )
      }
    },
    QS5V: function (e, t, a) {
      e.exports = {
        pagination: 'pagination-module--pagination--5u0we',
        item: 'pagination-module--item--2FbSP',
        itemText: 'pagination-module--itemText--q_ljE',
        itemRight: 'pagination-module--itemRight--2XC01',
        itemLabel: 'pagination-module--itemLabel--1yC7K',
        iconNext: 'pagination-module--iconNext--2kIia',
        iconPrev: 'pagination-module--iconPrev--1xG44',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    VCHy: function (e, t, a) {
      e.exports = {
        title: 'comments-list-module--title--1tntP',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    XNfU: function (e, t, a) {
      e.exports = {
        comment: 'comment-module--comment--97_CJ',
        avatar: 'comment-module--avatar--2IepZ',
        main: 'comment-module--main--1E3c6',
        meta: 'comment-module--meta--3GQ6j',
        message: 'comment-module--message--2jsZt',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
  },
])
//# sourceMappingURL=component---src-templates-post-js-4ec2f3b6033828092b5b.js.map
