;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    RXBc: function (e, t, a) {
      'use strict'
      a.r(t)
      var l = a('FdF9'),
        r = a('Bl7J'),
        n = a('jNNy'),
        i = a('mTGK'),
        s = a('5LqB'),
        o = a.n(s),
        d = a('KYHh'),
        c = a.n(d)
      t.default = function (e) {
        var t = e.data,
          a = t.site.siteMetadata.author,
          s = t.featuredPosts.edges,
          d = t.recentPosts.edges
        return l.default.createElement(
          r.a,
          null,
          l.default.createElement(n.a, {
            title: c.a.title + ' - ' + c.a.description,
            path: '/',
            description: c.a.description,
            metaImage: c.a.image,
          }),
          l.default.createElement(
            'main',
            { id: 'main', className: o.a.main },
            l.default.createElement(
              'div',
              { className: o.a.title },
              l.default.createElement(
                'h1',
                { className: o.a.heading },
                l.default.createElement(
                  'span',
                  null,
                  "Welcome to the website where I share things I've found on the way getting into the ",
                  l.default.createElement(
                    'a',
                    { href: '/tag/' },
                    '#programming'
                  ),
                  ' ',
                  'world.'
                )
              )
            ),
            l.default.createElement(
              'div',
              { className: o.a.content },
              l.default.createElement(
                'div',
                { className: o.a.gridList },
                s.map(function (e) {
                  var t = e.node,
                    r = t.id,
                    n = t.excerpt,
                    s = t.timeToRead,
                    o = t.frontmatter,
                    d = o.title,
                    c = o.date,
                    p = o.date_pretty,
                    m = o.path,
                    u = o.tags,
                    h = o.author,
                    f = o.authors,
                    g = o.excerpt,
                    k = o.image
                  return l.default.createElement(i.a, {
                    key: r,
                    title: d,
                    date: c,
                    datePretty: p,
                    path: m,
                    authors: f,
                    author: h || a,
                    timeToRead: s,
                    image: k,
                    excerpt: g || n,
                    tags: u,
                  })
                })
              ),
              l.default.createElement(
                'h2',
                { className: o.a.subHeading },
                l.default.createElement('span', null, 'Recent posts')
              ),
              l.default.createElement(
                'div',
                { className: o.a.list },
                d.map(function (e) {
                  var t = e.node,
                    r = t.id,
                    n = t.excerpt,
                    s = t.timeToRead,
                    o = t.frontmatter,
                    d = o.title,
                    c = o.date,
                    p = o.date_pretty,
                    m = o.path,
                    u = o.author,
                    h = o.authors,
                    f = o.excerpt,
                    g = o.tags
                  return l.default.createElement(i.a, {
                    key: r,
                    title: d,
                    date: c,
                    datePretty: p,
                    path: m,
                    author: u || a,
                    authors: h,
                    timeToRead: s,
                    excerpt: f || n,
                    tags: g,
                  })
                })
              ),
              l.default.createElement(
                'h2',
                { className: o.a.subHeading },
                l.default.createElement(
                  'span',
                  null,
                  'Explore more on this site'
                )
              ),
              l.default.createElement(
                'div',
                null,
                l.default.createElement(
                  'ul',
                  { className: o.a.gridListExpanded + ' ' + o.a.navList },
                  l.default.createElement(
                    'li',
                    { key: 'articles' },
                    l.default.createElement(i.a, {
                      key: 'articles-home-link',
                      title: 'Articles',
                      path: '/articles/',
                      excerpt:
                        '<p>Long form writing mostly about design and web development.</p>',
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'notes' },
                    l.default.createElement(i.a, {
                      key: 'notes-home-link',
                      title: 'Notes',
                      path: '/notes/',
                      excerpt:
                        '<p>Thoughts, inspiration, mistakes, and other minutia you’d find in a blog.</p>',
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'works' },
                    l.default.createElement(i.a, {
                      key: 'works-home-link',
                      title: 'Works',
                      path: '/work/',
                      excerpt:
                        "<p>Hand-picked selection of things I've designed, illustrated, and developed.</p>",
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'mastering-paper' },
                    l.default.createElement(i.a, {
                      key: 'mastering-paper-home-link',
                      title: 'Mastering Paper',
                      path: '/mastering-paper/',
                      excerpt:
                        '<p>Tutorials to help master the iOS drawing app— Paper</p>',
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'contact' },
                    l.default.createElement(i.a, {
                      key: 'contact-home-link',
                      title: 'Contact',
                      path: '/contact/',
                      excerpt:
                        '<p>Preferred methods of sending questions, messages, and love letters to me.</p>',
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'support' },
                    l.default.createElement(i.a, {
                      key: 'support-home-link',
                      title: 'Show your support',
                      path: '/support/',
                      excerpt:
                        '<p>Give thanks for the free open source goodies I provide.</p>',
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'faqs' },
                    l.default.createElement(i.a, {
                      key: 'faqs-home-link',
                      title: 'Frequently asked questions',
                      path: '/faqs/',
                      excerpt:
                        '<p>There’s no such thing as a dumb question…</p>',
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'topics' },
                    l.default.createElement(i.a, {
                      key: 'topics-home-link',
                      title: 'All topics',
                      path: '/tag/',
                      excerpt:
                        '<p>Archive of all posts organized by topic.</p>',
                    })
                  )
                )
              )
            )
          )
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-dc08cd93d407cd7e2883.js.map
