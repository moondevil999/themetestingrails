/*
 * MIXITUP - A CSS3 & JQuery Filter and Sort Plugin
 * Version: 1.4.0
 * Author: Patrick Kunka
 * Copyright 2012-2013 Patrick Kunka, All Rights Reserved
 * FREE FOR NON-COMMERCIAL USE
 * http://www.mixitup.io
 */

(function(e) {
    function m(d, b, h, c, a) {
        function j() {
            k.unbind();
            b && v(b, h, c, a);
            a.startOrder = [];
            a.newOrder = [];
            a.origSort = [];
            a.checkSort = [];
            u.removeStyle(a.prefix + "filter, filter, " + a.prefix + "transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");
            window.atob || u.css({
                display: "none",
                opacity: "0"
            });
            k.removeStyle(a.prefix + "transition, transition, " + a.prefix + "perspective, perspective, " + a.prefix + "perspective-origin, perspective-origin, " + (a.resizeContainer ? "height" : ""));
            "list" == a.layoutMode ?
                (q.css({
                    display: a.targetDisplayList,
                    opacity: "1"
                }), a.origDisplay = a.targetDisplayList) : (q.css({
                    display: a.targetDisplayGrid,
                    opacity: "1"
                }), a.origDisplay = a.targetDisplayGrid);
            a.origLayout = a.layoutMode;
            setTimeout(function() {
                u.removeStyle(a.prefix + "transition, transition");
                a.mixing = !1;
                if ("function" == typeof a.onMixEnd) {
                    var b = a.onMixEnd.call(this, a);
                    a = b ? b : a
                }
            })
        }
        clearInterval(a.failsafe);
        a.mixing = !0;
        if ("function" == typeof a.onMixStart) {
            var f = a.onMixStart.call(this, a);
            a = f ? f : a
        }
        for (var g = a.transitionSpeed, f = 0; 2 >
            f; f++) {
            var n = 0 == f ? n = a.prefix : "";
            a.transition[n + "transition"] = "all " + g + "ms linear";
            a.transition[n + "transform"] = n + "translate3d(0,0,0)";
            a.perspective[n + "perspective"] = a.perspectiveDistance + "px";
            a.perspective[n + "perspective-origin"] = a.perspectiveOrigin
        }
        var r = a.targetSelector,
            u = c.find(r);
        u.each(function() {
            this.data = {}
        });
        var k = u.parent();
        k.css(a.perspective);
        a.easingFallback = "ease-in-out";
        "smooth" == a.easing && (a.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)");
        "snap" == a.easing && (a.easing = "cubic-bezier(0.77, 0, 0.175, 1)");
        "windback" == a.easing && (a.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)", a.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)");
        "windup" == a.easing && (a.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)", a.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)");
        f = "list" == a.layoutMode && null != a.listEffects ? a.listEffects : a.effects;
        Array.prototype.indexOf && (a.fade = -1 < f.indexOf("fade") ? "0" : "", a.scale = -1 < f.indexOf("scale") ? "scale(.01)" : "", a.rotateZ = -1 < f.indexOf("rotateZ") ? "rotate(180deg)" : "", a.rotateY = -1 <
            f.indexOf("rotateY") ? "rotateY(90deg)" : "", a.rotateX = -1 < f.indexOf("rotateX") ? "rotateX(90deg)" : "", a.blur = -1 < f.indexOf("blur") ? "blur(8px)" : "", a.grayscale = -1 < f.indexOf("grayscale") ? "grayscale(100%)" : "");
        d = d.replace(/\s|\//g, ".");
        var q = e(),
            s = e();
        if ("or" == a.filterLogic) {
            var m = d.split(".");
            !0 == a.multiFilter && "" == m[0] && m.shift();
            1 > m.length ? s = s.add(c.find(r + ":visible")) : u.each(function() {
                for (var a = 0, b = e(this), c = 0; c < m.length; c++) b.hasClass(m[c]) && (q = q.add(b), a++);
                0 == a && (s = s.add(b))
            })
        } else q = q.add(k.find(r + "." +
            d)), s = s.add(k.find(r + ":not(." + d + "):visible"));
        d = q.length;
        var t = e(),
            p = e(),
            l = e();
        s.each(function() {
            var a = e(this);
            "none" != a.css("display") && (t = t.add(a), l = l.add(a))
        });
        if (q.filter(":visible").length == d && !t.length && !b) {
            if (a.origLayout == a.layoutMode) return j(), !1;
            if (1 == q.length) return "list" == a.layoutMode ? (c.addClass(a.listClass), c.removeClass(a.gridClass), l.css("display", a.targetDisplayList)) : (c.addClass(a.gridClass), c.removeClass(a.listClass), l.css("display", a.targetDisplayGrid)), j(), !1
        }
        a.origHeight = k.height();
        if (q.length) {
            c.removeClass(a.failClass);
            q.each(function() {
                var a = e(this);
                "none" == a.css("display") ? p = p.add(a) : l = l.add(a)
            });
            if (a.origLayout != a.layoutMode && !1 == a.animateGridList) return "list" == a.layoutMode ? (c.addClass(a.listClass), c.removeClass(a.gridClass), l.css("display", a.targetDisplayList)) : (c.addClass(a.gridClass), c.removeClass(a.listClass), l.css("display", a.targetDisplayGrid)), j(), !1;
            if (!window.atob) return j(), !1;
            u.css(a.clean);
            l.each(function() {
                this.data.origPos = e(this).offset()
            });
            "list" == a.layoutMode ?
                (c.addClass(a.listClass), c.removeClass(a.gridClass), p.css("display", a.targetDisplayList)) : (c.addClass(a.gridClass), c.removeClass(a.listClass), p.css("display", a.targetDisplayGrid));
            p.each(function() {
                this.data.showInterPos = e(this).offset()
            });
            t.each(function() {
                this.data.hideInterPos = e(this).offset()
            });
            l.each(function() {
                this.data.preInterPos = e(this).offset()
            });
            "list" == a.layoutMode ? l.css("display", a.targetDisplayList) : l.css("display", a.targetDisplayGrid);
            b && v(b, h, c, a);
            if (b && a.origSort.compare(a.checkSort)) return j(), !1;
            t.hide();
            p.each(function() {
                this.data.finalPos = e(this).offset()
            });
            l.each(function() {
                this.data.finalPrePos = e(this).offset()
            });
            a.newHeight = k.height();
            b && v("reset", null, c, a);
            p.hide();
            l.css("display", a.origDisplay);
            "block" == a.origDisplay ? (c.addClass(a.listClass), p.css("display", a.targetDisplayList)) : (c.removeClass(a.listClass), p.css("display", a.targetDisplayGrid));
            a.resizeContainer && k.css("height", a.origHeight + "px");
            d = {};
            for (f = 0; 2 > f; f++) n = 0 == f ? n = a.prefix : "", d[n + "transform"] = a.scale + " " + a.rotateX + " " +
                a.rotateY + " " + a.rotateZ, d[n + "filter"] = a.blur + " " + a.grayscale;
            p.css(d);
            l.each(function() {
                var b = this.data,
                    c = e(this);
                c.hasClass("mix_tohide") ? (b.preTX = b.origPos.left - b.hideInterPos.left, b.preTY = b.origPos.top - b.hideInterPos.top) : (b.preTX = b.origPos.left - b.preInterPos.left, b.preTY = b.origPos.top - b.preInterPos.top);
                for (var d = {}, g = 0; 2 > g; g++) {
                    var f = 0 == g ? f = a.prefix : "";
                    d[f + "transform"] = "translate(" + b.preTX + "px," + b.preTY + "px)"
                }
                c.css(d)
            });
            "list" == a.layoutMode ? (c.addClass(a.listClass), c.removeClass(a.gridClass)) :
                (c.addClass(a.gridClass), c.removeClass(a.listClass));
            setTimeout(function() {
                if (a.resizeContainer) {
                    for (var b = {}, c = 0; 2 > c; c++) {
                        var d = 0 == c ? d = a.prefix : "";
                        b[d + "transition"] = "all " + g + "ms ease-in-out";
                        b.height = a.newHeight + "px"
                    }
                    k.css(b)
                }
                t.css("opacity", a.fade);
                p.css("opacity", 1);
                p.each(function() {
                    var b = this.data;
                    b.tX = b.finalPos.left - b.showInterPos.left;
                    b.tY = b.finalPos.top - b.showInterPos.top;
                    for (var c = {}, d = 0; 2 > d; d++) {
                        var f = 0 == d ? f = a.prefix : "";
                        c[f + "transition-property"] = f + "transform, " + f + "filter, opacity";
                        c[f +
                            "transition-timing-function"] = a.easing + ", linear, linear";
                        c[f + "transition-duration"] = g + "ms";
                        c[f + "transition-delay"] = "0";
                        c[f + "transform"] = "translate(" + b.tX + "px," + b.tY + "px)";
                        c[f + "filter"] = "none"
                    }
                    e(this).css("-webkit-transition", "all " + g + "ms " + a.easingFallback).css(c)
                });
                l.each(function() {
                    var b = this.data;
                    b.tX = 0 != b.finalPrePos.left ? b.finalPrePos.left - b.preInterPos.left : 0;
                    b.tY = 0 != b.finalPrePos.left ? b.finalPrePos.top - b.preInterPos.top : 0;
                    for (var c = {}, d = 0; 2 > d; d++) {
                        var f = 0 == d ? f = a.prefix : "";
                        c[f + "transition"] =
                            "all " + g + "ms " + a.easing;
                        c[f + "transform"] = "translate(" + b.tX + "px," + b.tY + "px)"
                    }
                    e(this).css("-webkit-transition", "all " + g + "ms " + a.easingFallback).css(c)
                });
                b = {};
                for (c = 0; 2 > c; c++) d = 0 == c ? d = a.prefix : "", b[d + "transition"] = "all " + g + "ms " + a.easing + ", " + d + "filter " + g + "ms linear, opacity " + g + "ms linear", b[d + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ, b[d + "filter"] = a.blur + " " + a.grayscale, b.opacity = a.fade;
                t.css(b);
                k.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(a) {
                    if (-1 <
                        a.originalEvent.propertyName.indexOf("transform") || -1 < a.originalEvent.propertyName.indexOf("opacity")) - 1 < r.indexOf(".") ? e(a.target).hasClass(r.replace(".", "")) && j() : e(a.target).is(r) && j()
                })
            }, 10);
            a.failsafe = setTimeout(function() {
                a.mixing && j()
            }, g + 400)
        } else {
            a.resizeContainer && k.css("height", a.origHeight + "px");
            if (!window.atob) return j(), !1;
            t = s;
            setTimeout(function() {
                k.css(a.perspective);
                if (a.resizeContainer) {
                    for (var b = {}, d = 0; 2 > d; d++) {
                        var e = 0 == d ? e = a.prefix : "";
                        b[e + "transition"] = "height " + g + "ms ease-in-out";
                        b.height = a.minHeight + "px"
                    }
                    k.css(b)
                }
                u.css(a.transition);
                if (s.length) {
                    b = {};
                    for (d = 0; 2 > d; d++) e = 0 == d ? e = a.prefix : "", b[e + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ, b[e + "filter"] = a.blur + " " + a.grayscale, b.opacity = a.fade;
                    t.css(b);
                    k.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(b) {
                        if (-1 < b.originalEvent.propertyName.indexOf("transform") || -1 < b.originalEvent.propertyName.indexOf("opacity")) c.addClass(a.failClass), j()
                    })
                } else a.mixing = !1
            }, 10)
        }
    }

    function v(d, b,
        h, c) {
        function a(a, b) {
            return 1 * a.attr(d).toLowerCase() < 1 * b.attr(d).toLowerCase() ? -1 : 1 * a.attr(d).toLowerCase() > 1 * b.attr(d).toLowerCase() ? 1 : 0
        }

        function j(a) {
            "asc" == b ? f.prepend(a).prepend(" \
	") : f.append(a).append(" \
	")
        }
        h.find(c.targetSelector).wrapAll('<div class="mix_sorter"/>');
        var f = h.find(".mix_sorter");
        c.origSort.length || f.find(c.targetSelector + ":visible").each(function() {
            e(this).wrap("<s/>");
            c.origSort.push(e(this).parent().html().replace(/\s+/g, ""));
            e(this).unwrap()
        });
        f.empty();
        if ("reset" == d) e.each(c.startOrder,
            function() {
                f.append(this).append(" \
	")
            });
        else if ("default" == d) e.each(c.origOrder, function() {
            j(this)
        });
        else if ("random" == d) {
            if (!c.newOrder.length) {
                for (var g = c.startOrder.slice(), n = g.length, r = n; r--;) {
                    var m = parseInt(Math.random() * n),
                        k = g[r];
                    g[r] = g[m];
                    g[m] = k
                }
                c.newOrder = g
            }
            e.each(c.newOrder, function() {
                f.append(this).append(" \
	")
            })
        } else "custom" == d ? e.each(b, function() {
            j(this)
        }) : ("undefined" === typeof c.origOrder[0].attr(d) && console.log("No such attribute found. Terminating"), c.newOrder.length || (e.each(c.origOrder,
            function() {
                c.newOrder.push(e(this))
            }), c.newOrder.sort(a)), e.each(c.newOrder, function() {
            j(this)
        }));
        c.checkSort = [];
        f.find(c.targetSelector + ":visible").each(function(a) {
            var b = e(this);
            0 == a && b.attr("data-checksum", "1");
            b.wrap("<s/>");
            c.checkSort.push(b.parent().html().replace(/\s+/g, ""));
            b.unwrap()
        });
        h.find(c.targetSelector).unwrap()
    }
    var w = {
        init: function(d) {
            return this.each(function() {
                var b = {
                    targetSelector: ".mix",
                    filterSelector: ".filter",
                    sortSelector: ".sort",
                    buttonEvent: "click",
                    effects: ["fade", "scale"],
                    listEffects: null,
                    easing: "smooth",
                    layoutMode: "grid",
                    targetDisplayGrid: "inline-block",
                    targetDisplayList: "block",
                    listClass: "",
                    gridClass: "",
                    transitionSpeed: 600,
                    showOnLoad: "all",
                    multiFilter: !1,
                    filterLogic: "or",
                    resizeContainer: !0,
                    minHeight: 0,
                    failClass: "fail",
                    perspectiveDistance: "3000",
                    perspectiveOrigin: "50% 50%",
                    animateGridList: !0,
                    onMixLoad: null,
                    onMixStart: null,
                    onMixEnd: null,
                    container: null,
                    origOrder: [],
                    startOrder: [],
                    newOrder: [],
                    origSort: [],
                    checkSort: [],
                    filter: "",
                    mixing: !1,
                    origDisplay: "",
                    origLayout: "",
                    origHeight: 0,
                    newHeight: 0,
                    isTouch: !1,
                    resetDelay: 0,
                    failsafe: null,
                    prefix: "",
                    easingFallback: "ease-in-out",
                    transition: {},
                    perspective: {},
                    clean: {},
                    fade: "1",
                    scale: "",
                    rotateX: "",
                    rotateY: "",
                    rotateZ: "",
                    blur: "",
                    grayscale: ""
                };
                d && e.extend(b, d);
                this.config = b;
                e.support.touch = "ontouchend" in document;
                e.support.touch && (b.isTouch = !0, b.resetDelay = 350);
                b.container = e(this);
                var h = b.container,
                    c;
                a: {
                    c = h[0];
                    for (var a = ["Webkit", "Moz", "O", "ms"], j = 0; j < a.length; j++)
                        if (a[j] + "Transition" in c.style) {
                            c = a[j];
                            break a
                        }
                    c = "transition" in c.style ? "" : !1
                }
                b.prefix =
                    c;
                b.prefix = b.prefix ? "-" + b.prefix.toLowerCase() + "-" : "";
                h.find(b.targetSelector).each(function() {
                    b.origOrder.push(e(this))
                });
                for (c = 0; 2 > c; c++) a = 0 == c ? a = b.prefix : "", b.transition[a + "transition"] = "all " + b.transitionSpeed + "ms ease-in-out", b.perspective[a + "perspective"] = b.perspectiveDistance + "px", b.perspective[a + "perspective-origin"] = b.perspectiveOrigin;
                for (c = 0; 2 > c; c++) a = 0 == c ? a = b.prefix : "", b.clean[a + "transition"] = "none";
                "list" == b.layoutMode ? (h.addClass(b.listClass), b.origDisplay = b.targetDisplayList) : (h.addClass(b.gridClass),
                    b.origDisplay = b.targetDisplayGrid);
                b.origLayout = b.layoutMode;
                c = b.showOnLoad.split(" ");
                e.each(c, function() {
                    e(b.filterSelector + '[data-filter="' + this + '"]').addClass("active")
                });
                h.find(b.targetSelector).addClass("mix_all");
                "all" == c[0] && (c[0] = "mix_all", b.showOnLoad = "mix_all");
                var f = e();
                e.each(c, function() {
                    f = f.add(e("." + this))
                });
                f.each(function() {
                    var a = e(this);
                    "list" == b.layoutMode ? a.css("display", b.targetDisplayList) : a.css("display", b.targetDisplayGrid);
                    a.css(b.transition)
                });
                setTimeout(function() {
                    b.mixing = !0;
                    f.css("opacity", "1");
                    setTimeout(function() {
                        "list" == b.layoutMode ? f.removeStyle(b.prefix + "transition, transition").css({
                            display: b.targetDisplayList,
                            opacity: 1
                        }) : f.removeStyle(b.prefix + "transition, transition").css({
                            display: b.targetDisplayGrid,
                            opacity: 1
                        });
                        b.mixing = !1;
                        if ("function" == typeof b.onMixLoad) {
                            var a = b.onMixLoad.call(this, b);
                            b = a ? a : b
                        }
                    }, b.transitionSpeed)
                }, 10);
                b.filter = b.showOnLoad;
                e(b.sortSelector).bind(b.buttonEvent, function() {
                    if (!b.mixing) {
                        var a = e(this),
                            c = a.attr("data-sort"),
                            d = a.attr("data-order");
                        if (a.hasClass("active")) {
                            if ("random" != c) return !1
                        } else e(b.sortSelector).removeClass("active"), a.addClass("active");
                        h.find(b.targetSelector).each(function() {
                            b.startOrder.push(e(this))
                        });
                        m(b.filter, c, d, h, b)
                    }
                });
                e(b.filterSelector).bind(b.buttonEvent, function() {
                    if (!b.mixing) {
                        var a = e(this);
                        if (!1 == b.multiFilter) e(b.filterSelector).removeClass("active"), a.addClass("active"), b.filter = a.attr("data-filter"), e(b.filterSelector + '[data-filter="' + b.filter + '"]').addClass("active"), "all" == b.filter && (b.filter = "mix_all");
                        else {
                            var c = a.attr("data-filter");
                            "all" == c && (c = "mix_all");
                            a.hasClass("active") ? (a.removeClass("active"), b.filter = b.filter.replace(RegExp("(\\s|^)" + c), "")) : (a.addClass("active"), b.filter = b.filter + " " + c)
                        }
                        m(b.filter, null, null, h, b)
                    }
                })
            })
        },
        toGrid: function() {
            return this.each(function() {
                var d = this.config;
                "grid" != d.layoutMode && (d.layoutMode = "grid", m(d.filter, null, null, e(this), d))
            })
        },
        toList: function() {
            return this.each(function() {
                var d = this.config;
                "list" != d.layoutMode && (d.layoutMode = "list", m(d.filter, null, null,
                    e(this), d))
            })
        },
        filter: function(d) {
            return this.each(function() {
                var b = this.config;
                e(b.filterSelector).removeClass("active");
                e(b.filterSelector + '[data-filter="' + d + '"]').addClass("active");
                "all" == d && (d = "mix_all");
                b.mixing || (b.filter = d, m(d, null, null, e(this), b))
            })
        },
        sort: function(d) {
            return this.each(function() {
                var b = this.config;
                if (e.isArray(d)) var h = d[0],
                    c = d[1];
                else h = d, c = "desc";
                b.mixing || (e(this).find(b.targetSelector).each(function() {
                    b.startOrder.push(e(this))
                }), m(b.filter, h, c, e(this), b))
            })
        }
    };
    e.fn.mixitup =
        function(d, b) {
            if (w[d]) return w[d].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" === typeof d || !d) return w.init.apply(this, arguments)
        };
    e.fn.removeStyle = function(d) {
        return this.each(function() {
            var b = e(this);
            d = d.replace(/\s+/g, "");
            var h = d.split(",");
            e.each(h, function() {
                var c = RegExp(this.toString() + "[^;]+;?", "g");
                b.attr("style", function(a, b) {
                    if (b) return b.replace(c, "")
                })
            })
        })
    };
    Array.prototype.compare = function(d) {
        if (this.length != d.length) return !1;
        for (var b = 0; b < d.length; b++)
            if (this[b].compare &&
                !this[b].compare(d[b]) || this[b] !== d[b]) return !1;
        return !0
    }
})(jQuery);
