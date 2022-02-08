;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '5LqB': function (e, t, a) {
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
    JEua: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('Wbzz'),
        l = a('FdF9'),
        i = a('Bl7J'),
        o = a('jNNy'),
        r = a('KYHh'),
        d = a.n(r),
        u = a('5LqB'),
        c = a.n(u),
        s = d.a.image
      t.default = function (e) {
        var t = e.data.allMarkdownRemark.edges
        return l.default.createElement(
          i.a,
          null,
          l.default.createElement(o.a, {
            title: 'Frequently asked questions | ' + d.a.titleAlt,
            path: '/faqs/',
            description:
              "Because no one likes to repeat things here's a compilation of answers to questions I'm often asked.",
            metaImage: s,
          }),
          l.default.createElement(
            'main',
            { className: c.a.main },
            l.default.createElement(
              'div',
              { className: c.a.title },
              l.default.createElement(
                'h1',
                { className: c.a.heading },
                l.default.createElement(
                  'span',
                  null,
                  'Frequently asked questions'
                )
              )
            ),
            l.default.createElement(
              'div',
              { className: c.a.content },
              l.default.createElement(
                'p',
                null,
                'Did I leave something out that you were looking for an answer to? Feel free to reach out and ',
                l.default.createElement(n.Link, { to: '/contact/' }, 'ask me'),
                '.'
              ),
              l.default.createElement(
                'ul',
                null,
                t.map(function (e) {
                  return l.default.createElement(
                    'li',
                    { key: e.node.id },
                    l.default.createElement(
                      n.Link,
                      { to: e.node.frontmatter.path },
                      e.node.frontmatter.title
                    )
                  )
                })
              )
            )
          )
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-faqs-index-js-255cdbb2e2faf15a0c9f.js.map
