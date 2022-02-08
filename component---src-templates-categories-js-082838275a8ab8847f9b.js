;(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    '3CW5': function (e, t, a) {
      'use strict'
      var l = a('FdF9'),
        n = a('Wbzz'),
        i = a('QS5V'),
        m = a.n(i)
      t.a = function (e) {
        var t = e.nextPath,
          a = e.previousPath,
          i = e.nextLabel,
          r = e.previousLabel
        return a || t
          ? l.default.createElement(
              'nav',
              { className: m.a.pagination },
              a
                ? l.default.createElement(
                    n.Link,
                    { to: a, rel: 'prev', className: m.a.item },
                    l.default.createElement(
                      'span',
                      { className: m.a.iconPrev },
                      '←'
                    ),
                    l.default.createElement(
                      'span',
                      { className: m.a.itemText },
                      r
                    )
                  )
                : l.default.createElement('div', { className: m.a.item }),
              t
                ? l.default.createElement(
                    n.Link,
                    {
                      to: t,
                      rel: 'next',
                      className: m.a.item + ' ' + m.a.itemRight,
                    },
                    l.default.createElement(
                      'span',
                      { className: m.a.itemText },
                      i
                    ),
                    l.default.createElement(
                      'span',
                      { className: m.a.iconNext },
                      '→'
                    )
                  )
                : l.default.createElement('div', { className: m.a.item })
            )
          : null
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
    m0YG: function (e, t, a) {
      'use strict'
      a.r(t)
      var l = a('FdF9'),
        n = a('Wbzz'),
        i = a('jNNy'),
        m = a('Bl7J'),
        r = a('mTGK'),
        o = a('3CW5'),
        s = a('KYHh'),
        u = a.n(s),
        c = a('5LqB'),
        d = a.n(c),
        p = a('zvvp')
      t.default = function (e) {
        var t,
          a = e.data,
          s = e.pageContext,
          c = s.nextPagePath,
          f = s.previousPagePath,
          g = s.humanPageNumber,
          E = s.numberOfPages,
          v = s.category,
          N = a.site.siteMetadata.author,
          h = a.taxonomyYaml,
          x = h.name,
          P = h.excerpt,
          L = h.html,
          b = a.allMarkdownRemark,
          w = b.group,
          y = b.edges,
          k = 1 === g ? '' : ' - Page ' + g + ' of ' + E,
          C = u.a.image
        return l.default.createElement(
          m.a,
          null,
          l.default.createElement(i.a, {
            title: '' + x + k + ' - ' + u.a.title,
            path: '/' + p.slugify(v) + '/',
            description: P || 'An archive of posts related to ' + x + '.',
            metaImage: C,
          }),
          l.default.createElement(
            'main',
            { id: 'main', className: d.a.main },
            l.default.createElement(
              'div',
              { className: d.a.title },
              l.default.createElement(
                'h1',
                { className: d.a.heading },
                l.default.createElement('span', null, x, ' ', k)
              ),
              L &&
                1 === g &&
                l.default.createElement('div', {
                  className: d.a.intro,
                  dangerouslySetInnerHTML: { __html: L },
                })
            ),
            l.default.createElement(
              'div',
              { className: d.a.content },
              l.default.createElement(
                'h2',
                { className: d.a.subHeading },
                l.default.createElement('span', null, 'Browse by topic')
              ),
              l.default.createElement(
                'div',
                { className: d.a.columnList, style: { marginBottom: '3rem' } },
                l.default.createElement(
                  'ul',
                  null,
                  w
                    .sort(
                      ((t = 'fieldValue'),
                      function (e, a) {
                        return e[t].toLowerCase() === a[t].toLowerCase()
                          ? 0
                          : e[t].toLowerCase() < a[t].toLowerCase()
                          ? -1
                          : 1
                      })
                    )
                    .map(function (e) {
                      return l.default.createElement(
                        'li',
                        { key: e.fieldValue },
                        l.default.createElement(
                          n.Link,
                          { to: '/tag/' + p.slugify(e.fieldValue) + '/' },
                          l.default.createElement('strong', null, e.fieldValue),
                          ' ',
                          l.default.createElement(
                            'span',
                            { className: d.a.count },
                            e.totalCount
                          )
                        )
                      )
                    })
                )
              ),
              l.default.createElement(
                'div',
                { className: d.a.list },
                y.map(function (e) {
                  var t = e.node,
                    a = t.id,
                    n = t.excerpt,
                    i = t.timeToRead,
                    m = t.frontmatter,
                    o = m.title,
                    s = m.date,
                    u = m.date_pretty,
                    c = m.path,
                    d = m.author,
                    p = m.image,
                    f = m.excerpt
                  return l.default.createElement(r.a, {
                    key: a,
                    title: o,
                    date: s,
                    datePretty: u,
                    path: c,
                    author: d || N,
                    timeToRead: i,
                    image: p,
                    excerpt: f || n,
                  })
                })
              )
            )
          ),
          l.default.createElement(o.a, {
            previousPath: f,
            previousLabel: 'Newer posts',
            nextPath: c,
            nextLabel: 'Older posts',
          })
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-templates-categories-js-082838275a8ab8847f9b.js.map
