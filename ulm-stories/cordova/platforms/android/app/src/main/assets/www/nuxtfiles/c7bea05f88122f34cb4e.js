(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    329: function(t, e, n) {
      "use strict";
      n(124);
      var c = n(125);
      e.a = Object(c.a)("flex");
    },
    330: function(t, e, n) {
      "use strict";
      n(124);
      var c = n(125);
      e.a = Object(c.a)("layout");
    },
    343: function(t, e, n) {
      "use strict";
      n.r(e);
      var c = { components: {} },
        r = n(40),
        l = n(64),
        o = n.n(l),
        f = n(329),
        v = n(330),
        component = Object(r.a)(
          c,
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "v-layout",
              {
                attrs: { column: "", "justify-center": "", "align-center": "" }
              },
              [
                e("v-flex", { attrs: { xs12: "", sm8: "", md6: "" } }, [
                  e("h3", [this._v("Ulm Reiseführer")])
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
      o()(component, { VFlex: f.a, VLayout: v.a });
    }
  }
]);
