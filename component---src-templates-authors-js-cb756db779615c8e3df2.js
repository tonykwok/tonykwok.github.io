;(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
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
    rfbz: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = t('FdF9'),
        l = t('jNNy'),
        i = t('Bl7J'),
        m = t('mTGK'),
        r = t('3CW5'),
        o = t('KYHh'),
        s = t.n(o),
        u = t('5LqB'),
        c = t.n(u),
        d = t('zvvp')
      a.default = function (e) {
        var a = e.data,
          t = e.pageContext,
          o = t.nextPagePath,
          u = t.previousPagePath,
          p = t.humanPageNumber,
          f = t.numberOfPages,
          h = t.author,
          g = a.site.siteMetadata.author,
          v = a.authorYaml,
          E = v.name,
          N = v.bio,
          x = a.allMarkdownRemark.edges,
          P = 1 === p ? '' : ' - Page ' + p + ' of ' + f,
          b = s.a.image
        return n.default.createElement(
          i.a,
          null,
          n.default.createElement(l.a, {
            title: '' + E + P + ' - ' + s.a.title,
            path: '/author/' + d.slugify(h) + '/',
            description: 'An archive of posts written by ' + E + '.',
            metaImage: b,
          }),
          n.default.createElement(
            'main',
            { id: 'main', className: c.a.main },
            n.default.createElement(
              'div',
              { className: c.a.title },
              n.default.createElement(
                'h1',
                { className: c.a.heading },
                n.default.createElement('span', null, E, ' ', P)
              ),
              n.default.createElement('h2', null, x.length),
              N &&
                1 === p &&
                n.default.createElement('div', {
                  className: c.a.intro,
                  dangerouslySetInnerHTML: { __html: N },
                })
            ),
            n.default.createElement(
              'div',
              { className: c.a.content },
              n.default.createElement(
                'div',
                { className: c.a.list },
                x.map(function (e) {
                  var a = e.node,
                    t = a.id,
                    l = a.excerpt,
                    i = a.timeToRead,
                    r = a.frontmatter,
                    o = r.title,
                    s = r.date,
                    u = r.date_pretty,
                    c = r.path,
                    d = r.author,
                    p = r.authors,
                    f = r.image,
                    h = r.excerpt
                  return n.default.createElement(m.a, {
                    key: t,
                    title: o,
                    date: s,
                    datePretty: u,
                    path: c,
                    author: d || g,
                    authors: p,
                    timeToRead: i,
                    image: f,
                    excerpt: h || l,
                  })
                })
              )
            )
          ),
          n.default.createElement(r.a, {
            previousPath: u,
            previousLabel: 'Newer posts',
            nextPath: o,
            nextLabel: 'Older posts',
          })
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-templates-authors-js-cb756db779615c8e3df2.js.map
