(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    336: function(t, e, n) {
      "use strict";
      n(123);
      var l = n(124);
      e.a = Object(l.a)("flex");
    },
    337: function(t, e, n) {
      "use strict";
      n(123);
      var l = n(124);
      e.a = Object(l.a)("layout");
    },
    350: function(t, e, n) {
      "use strict";
      n.r(e);
      var l = n(40),
        o = n(63),
        c = n.n(o),
        r = n(336),
        h = n(337),
        component = Object(l.a)(
          {},
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "v-layout",
              [
                e("v-flex", { staticClass: "text-center" }, [
                  e("img", {
                    staticClass: "mb-5",
                    attrs: { src: "../v.png", alt: "Vuetify.js" }
                  }),
                  this._v(" "),
                  e("blockquote", { staticClass: "blockquote" }, [
                    this._v(
                      "\n      “First, solve the problem. Then, write the code.”\n      "
                    ),
                    e("footer", [
                      e("small", [e("em", [this._v("—John Johnson")])])
                    ])
                  ])
                ])
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      c()(component, { VFlex: r.a, VLayout: h.a });
    }
  }
]);
