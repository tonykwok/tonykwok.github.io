;(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    sweJ: function (e, t, a) {
      'use strict'
      a.r(t)
      var d = a('FdF9'),
        i = a('jNNy'),
        r = a('Bl7J'),
        m = a('zSWs'),
        l = a('KYHh'),
        o = a.n(l)
      t.default = function (e) {
        var t = e.data.markdownRemark,
          a = t.frontmatter,
          l = a.title,
          n = a.date,
          u = a.date_pretty,
          c = a.date_from_now,
          f = a.last_modified_at,
          h = a.last_modified_at_from_now,
          p = a.path,
          s = a.image,
          w = a.excerpt,
          _ = a.toc,
          g = t.excerpt,
          y = t.id,
          k = t.html,
          b = s ? s.childImageSharp.fixed : o.a.image,
          E = s ? 'summary_large_image' : 'summary'
        return d.default.createElement(
          r.a,
          null,
          d.default.createElement(i.a, {
            title: l + ' - ' + o.a.titleAlt,
            path: p,
            datePublished: n,
            dateModified: f,
            description: w || g,
            metaImage: b,
            twitterCardType: E,
            article: !0,
          }),
          d.default.createElement(
            'main',
            { id: 'main' },
            d.default.createElement(m.a, {
              key: y,
              title: l,
              hideMeta: !0,
              datePublished: n,
              dateModified: f,
              datePretty: u,
              dateFromNow: c,
              dateModifiedFromNow: h,
              path: p,
              image: s,
              toc: _,
              html: k,
              author: o.a.author,
            })
          )
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-templates-page-js-4e213db66a102f3df615.js.map
