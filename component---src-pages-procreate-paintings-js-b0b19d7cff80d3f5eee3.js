;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    pbld: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('dI71'),
        o = a('FdF9'),
        i = a('pQUg'),
        r = a.n(i),
        l = a('9eSz'),
        s = a.n(l),
        d = a('Wbzz'),
        c = a('jNNy'),
        u = a('Bl7J'),
        m = a('KYHh'),
        p = a.n(m),
        h = a('Ercv'),
        f = a.n(h),
        w = p.a.image
      'undefined' != typeof window && (window.postsToShow = 20)
      var g = (function (e) {
        function t() {
          var t
          ;(t = e.call(this) || this).handleScroll = function () {
            t.ticking ||
              ((t.ticking = !0),
              requestAnimationFrame(function () {
                return t.update()
              }))
          }
          var a = 20
          return (
            'undefined' != typeof window && (a = window.postsToShow),
            (t.state = { showingMore: a > 20, postsToShow: a }),
            t
          )
        }
        Object(n.a)(t, e)
        var a = t.prototype
        return (
          (a.componentDidMount = function () {
            window.addEventListener('scroll', this.handleScroll)
          }),
          (a.componentWillUnmount = function () {
            window.removeEventListener('scroll', this.handleScroll),
              (window.postsToShow = this.state.postsToShow)
          }),
          (a.update = function () {
            var e =
              document.documentElement.offsetHeight -
              (window.pageYOffset + window.innerHeight)
            this.state.showingMore &&
              e < 100 &&
              this.setState(function (e) {
                return { postsToShow: e.postsToShow + 20 }
              }),
              (this.ticking = !1)
          }),
          (a.render = function () {
            var e = this,
              t = this.props.data.allMarkdownRemark.edges.map(function (e) {
                return e.node
              }),
              a = this.props.data.allMarkdownRemark.edges.length
            return o.default.createElement(
              u.a,
              null,
              o.default.createElement(c.a, {
                title: 'Procreate iPad paintings - ' + p.a.title,
                path: '/procreate-paintings/',
                description:
                  'Gallery of digital paintings created with Procreate on an iPad. Find time lapse videos, in-process screenshots, and more.',
                metaImage: w,
              }),
              o.default.createElement(
                'main',
                { id: 'main', className: f.a.document },
                o.default.createElement(
                  'div',
                  { className: f.a.title },
                  o.default.createElement(
                    'h1',
                    { className: f.a.heading },
                    o.default.createElement(
                      'span',
                      null,
                      o.default.createElement(
                        'span',
                        null,
                        'Procreate iPad paintings'
                      )
                    )
                  )
                ),
                this.props.data.file.childImageSharp.fluid &&
                  o.default.createElement(s.a, {
                    fluid: this.props.data.file.childImageSharp.fluid,
                    className: f.a.cover,
                    backgroundColor: 'var(--input-background-color)',
                  }),
                o.default.createElement(
                  'div',
                  { className: f.a.content },
                  o.default.createElement(
                    'p',
                    null,
                    'Digital paintings created on an iPad using the iOS app',
                    ' ',
                    o.default.createElement(
                      'a',
                      { href: 'http://procreate.si/' },
                      o.default.createElement('strong', null, 'Procreate'),
                      ' by Savage Interactive'
                    ),
                    '.'
                  )
                ),
                o.default.createElement(
                  'div',
                  { className: f.a.gallery },
                  o.default.createElement(
                    r.a,
                    { className: f.a.grid },
                    t.slice(0, this.state.postsToShow).map(function (e) {
                      var t = e.frontmatter.thumbnail
                        ? e.frontmatter.thumbnail
                        : e.frontmatter.image
                      return o.default.createElement(
                        'div',
                        { key: e.id, className: f.a.gridItem },
                        o.default.createElement(
                          d.Link,
                          { to: e.frontmatter.path },
                          o.default.createElement(s.a, {
                            fluid: t.childImageSharp.fluid,
                            backgroundColor: 'var(--input-background-color)',
                          })
                        )
                      )
                    })
                  ),
                  a <= this.postsToShow ||
                    (!this.state.showingMore &&
                      o.default.createElement(
                        'button',
                        {
                          type: 'button',
                          'data-testid': 'load-more',
                          className: f.a.loadMore,
                          onClick: function () {
                            e.setState({
                              postsToShow: e.state.postsToShow + 20,
                              showingMore: !0,
                            })
                          },
                        },
                        'Load more'
                      ))
                )
              )
            )
          }),
          t
        )
      })(o.default.Component)
      t.default = g
    },
  },
])
//# sourceMappingURL=component---src-pages-procreate-paintings-js-b0b19d7cff80d3f5eee3.js.map
