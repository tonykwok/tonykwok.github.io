;(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    '3CW5': function (e, a, t) {
      'use strict'
      var n = t('FdF9'),
        l = t('Wbzz'),
        i = t('QS5V'),
        m = t.n(i)
      a.a = function (e) {
        var a = e.nextPath,
          t = e.previousPath,
          i = e.nextLabel,
          r = e.previousLabel
        return t || a
          ? n.default.createElement(
              'nav',
              { className: m.a.pagination },
              t
                ? n.default.createElement(
                    l.Link,
                    { to: t, rel: 'prev', className: m.a.item },
                    n.default.createElement(
                      'span',
                      { className: m.a.iconPrev },
                      '←'
                    ),
                    n.default.createElement(
                      'span',
                      { className: m.a.itemText },
                      r
                    )
                  )
                : n.default.createElement('div', { className: m.a.item }),
              a
                ? n.default.createElement(
                    l.Link,
                    {
                      to: a,
                      rel: 'next',
                      className: m.a.item + ' ' + m.a.itemRight,
                    },
                    n.default.createElement(
                      'span',
                      { className: m.a.itemText },
                      i
                    ),
                    n.default.createElement(
                      'span',
                      { className: m.a.iconNext },
                      '→'
                    )
                  )
                : n.default.createElement('div', { className: m.a.item })
            )
          : null
      }
    },
    MN1z: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = t('FdF9'),
        l = t('jNNy'),
        i = t('Bl7J'),
        m = t('mTGK'),
        r = t('3CW5'),
        o = t('KYHh'),
        s = t.n(o),
        c = t('5LqB'),
        u = t.n(c),
        d = t('zvvp')
      a.default = function (e) {
        var a = e.data,
          t = e.pageContext,
          o = t.nextPagePath,
          c = t.previousPagePath,
          p = t.humanPageNumber,
          f = t.numberOfPages,
          g = t.tag,
          v = a.site.siteMetadata.author,
          h = a.taxonomyYaml,
          N = h.excerpt,
          x = h.html,
          E = a.allMarkdownRemark.edges,
          P = 1 === p ? '' : ' - Page ' + p + ' of ' + f,
          b = s.a.image
        return n.default.createElement(
          i.a,
          null,
          n.default.createElement(l.a, {
            title: '' + g + P + ' - ' + s.a.title,
            path: '/tag/' + d.slugify(g) + '/',
            description: N || 'An archive of posts related to ' + g + '.',
            metaImage: b,
          }),
          n.default.createElement(
            'main',
            { id: 'main', className: u.a.main },
            n.default.createElement(
              'div',
              { className: u.a.title },
              n.default.createElement(
                'h1',
                { className: u.a.heading },
                n.default.createElement('span', null, '#', g, ' ', P)
              ),
              x &&
                1 === p &&
                n.default.createElement('div', {
                  className: u.a.intro,
                  dangerouslySetInnerHTML: { __html: x },
                })
            ),
            n.default.createElement(
              'div',
              { className: u.a.content },
              n.default.createElement(
                'div',
                { className: u.a.list },
                E.map(function (e) {
                  var a = e.node,
                    t = a.id,
                    l = a.excerpt,
                    i = a.timeToRead,
                    r = a.frontmatter,
                    o = r.title,
                    s = r.date,
                    c = r.date_pretty,
                    u = r.path,
                    d = r.author,
                    p = r.image,
                    f = r.excerpt
                  return n.default.createElement(m.a, {
                    key: t,
                    title: o,
                    date: s,
                    datePretty: c,
                    path: u,
                    author: d || v,
                    timeToRead: i,
                    image: p,
                    excerpt: f || l,
                  })
                })
              )
            )
          ),
          n.default.createElement(r.a, {
            previousPath: c,
            previousLabel: 'Newer posts',
            nextPath: o,
            nextLabel: 'Older posts',
          })
        )
      }
    },
    QS5V: function (e, a, t) {
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
  },
])
//# sourceMappingURL=component---src-templates-tags-js-2b803c3e298f40e89c53.js.map
