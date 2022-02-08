;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    YpD0: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('dI71'),
        o = a('FdF9'),
        r = a('pQUg'),
        s = a.n(r),
        i = a('9eSz'),
        l = a.n(i),
        d = a('Wbzz'),
        c = a('jNNy'),
        u = a('Bl7J'),
        p = a('KYHh'),
        m = a.n(p),
        f = a('Ercv'),
        h = a.n(f),
        w = m.a.image
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
                title: 'PaperFaces iPad project - ' + m.a.title,
                path: '/paperfaces/',
                description:
                  'PaperFaces portraits painted digitally with Paper for iOS on an iPad. Find time lapse videos, in-process screenshots, and more.',
                metaImage: w,
              }),
              o.default.createElement(
                'main',
                { id: 'main', className: h.a.document },
                o.default.createElement(
                  'div',
                  { className: h.a.title },
                  o.default.createElement(
                    'h1',
                    { className: h.a.heading },
                    o.default.createElement(
                      'span',
                      null,
                      'PaperFaces iPad project'
                    )
                  )
                ),
                this.props.data.file.childImageSharp.fluid &&
                  o.default.createElement(l.a, {
                    fluid: this.props.data.file.childImageSharp.fluid,
                    className: h.a.cover,
                    backgroundColor: 'var(--input-background-color)',
                  }),
                o.default.createElement(
                  'div',
                  { className: h.a.content },
                  o.default.createElement(
                    'p',
                    null,
                    'PaperFaces was an illustration project by designer Michael Rose — hey that’s me! For two years I drew the faces of strangers everyday using an iPad, a stylus, and',
                    ' ',
                    o.default.createElement('strong', null, 'Paper for iOS'),
                    '. I occasionally post new portraits here, but certainly not as frequently as I used to.'
                  ),
                  o.default.createElement(
                    'p',
                    null,
                    'If you scroll down far enough you can see how my technique evolved from faceless gestures into realistic portraits.'
                  )
                ),
                o.default.createElement(
                  'div',
                  { className: h.a.gallery },
                  o.default.createElement(
                    s.a,
                    { className: h.a.grid },
                    t.slice(0, this.state.postsToShow).map(function (e) {
                      var t = e.frontmatter.thumbnail
                        ? e.frontmatter.thumbnail
                        : e.frontmatter.image
                      return o.default.createElement(
                        'div',
                        { key: e.id, className: h.a.gridItem },
                        o.default.createElement(
                          d.Link,
                          { to: e.frontmatter.path },
                          o.default.createElement(l.a, {
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
                          className: h.a.loadMore,
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
//# sourceMappingURL=component---src-pages-paperfaces-js-20d38b5625363fe09026.js.map
