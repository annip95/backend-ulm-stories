(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    213: function(t, e, r) {
      var content = r(217);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(32).default)("f40fa3b0", content, !0, { sourceMap: !1 });
    },
    216: function(t, e, r) {
      "use strict";
      var o = r(213);
      r.n(o).a;
    },
    217: function(t, e, r) {
      (e = r(31)(!1)).push([
        t.i,
        "body[data-v-ad61df2a]{margin:0;padding:0}",
        ""
      ]),
        (t.exports = e);
    },
    223: function(t, e, r) {
      "use strict";
      r.r(e);
      r(76), r(24), r(20), r(17), r(60);
      var o = r(55),
        n = r(73);

      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }

      var l = {
          name: "LeafletMap",
          computed: (function(t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function(e) {
                    Object(o.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : c(Object(source)).forEach(function(e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })(
            {
              userLocation: function() {
                return {
                  lat: this.$store.state.geolocation.lat,
                  lng: this.$store.state.geolocation.lng,
                  acc: this.$store.state.geolocation.acc,
                  alt: this.$store.state.geolocation.alt,
                  altAcc: this.$store.state.geolocation.altAcc,
                  head: this.$store.state.geolocation.head,
                  spd: this.$store.state.geolocation.spd,
                  ts: this.$store.state.geolocation.ts
                };
              },
              error: function() {
                return this.$store.state.geolocation.error;
              }
            },
            Object(n.b)("npcLocation", ["allLocations"])
          ),
          methods: {
            getLink: function(t) {
              return "/game/".concat(t.chapter, "/").concat(t.characterID);
            }
          }
        },
        f = r(16),
        h = {
          name: "Map",
          components: {
            LeafletMap: Object(f.a)(
              l,
              function() {
                var t = this,
                  e = t.$createElement,
                  r = t._self._c || e;
                return r(
                  "div",
                  {
                    staticStyle: { height: "100vh" },
                    attrs: { id: "map-wrap" }
                  },
                  [
                    r(
                      "l-map",
                      { attrs: { zoom: 13, center: t.userLocation } },
                      [
                        r("l-tile-layer", {
                          attrs: {
                            url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                          }
                        }),
                        t._v(" "),
                        r("l-marker", { attrs: { "lat-lng": t.userLocation } }),
                        t._v(" "),
                        t._l(t.allLocations, function(e, o) {
                          return r(
                            "l-marker",
                            { key: o, attrs: { "lat-lng": e.latlng } },
                            [
                              r(
                                "l-popup",
                                [
                                  r(
                                    "nuxt-link",
                                    { attrs: { to: t.getLink(e) } },
                                    [t._v(t._s(e.characterName))]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          );
                        })
                      ],
                      2
                    )
                  ],
                  1
                );
              },
              [],
              !1,
              null,
              "d8772a94",
              null
            ).exports
          },
          data: function() {
            return {};
          }
        },
        d =
          (r(216),
          Object(f.a)(
            h,
            function() {
              var t = this.$createElement;
              return (this._self._c || t)("LeafletMap");
            },
            [],
            !1,
            null,
            "ad61df2a",
            null
          ));
      e.default = d.exports;
    }
  }
]);
