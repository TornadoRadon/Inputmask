/*!
 * dist/inputmask
 * <%= pkg.homepage %>
 * Copyright (c) 2010 - <%= grunt.template.today('yyyy') %> <%= pkg.author.name %>
 * Licensed under the <%= pkg.license %> license
 * Version: <%= pkg.version %>
 */
!function webpackUniversalModuleDefinition(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var i = t();
        for (var a in i) ("object" == typeof exports ? exports : e)[a] = i[a];
    }
}(window, function() {
    return function(i) {
        var a = {};
        function __webpack_require__(e) {
            if (a[e]) return a[e].exports;
            var t = a[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return i[e].call(t.exports, t, t.exports, __webpack_require__), t.l = !0, t.exports;
        }
        return __webpack_require__.m = i, __webpack_require__.c = a, __webpack_require__.d = function(e, t, i) {
            __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            });
        }, __webpack_require__.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, __webpack_require__.t = function(t, e) {
            if (1 & e && (t = __webpack_require__(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (__webpack_require__.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var a in t) __webpack_require__.d(i, a, function(e) {
                return t[e];
            }.bind(null, a));
            return i;
        }, __webpack_require__.n = function(e) {
            var t = e && e.__esModule ? function getDefault() {
                return e.default;
            } : function getModuleExports() {
                return e;
            };
            return __webpack_require__.d(t, "a", t), t;
        }, __webpack_require__.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
    }([ function(e, t, i) {
        "use strict";
        i(1), i(5), i(6), e.exports = i(2);
    }, function(e, t, i) {
        "use strict";
        var a = i(2);
        a.extendDefinitions({
            A: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        }), a.extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)//.*",
                autoUnmask: !1
            },
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                definitions: {
                    i: {
                        validator: function validator(e, t, i, a, n) {
                            return e = -1 < i - 1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, -1 < i - 2 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : "00" + e, 
                            new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e);
                        }
                    }
                },
                onUnMask: function onUnMask(e, t, i) {
                    return e;
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                casing: "lower",
                onBeforePaste: function onBeforePaste(e, t) {
                    return (e = e.toLowerCase()).replace("mailto:", "");
                },
                definitions: {
                    "*": {
                        validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function onUnMask(e, t, i) {
                    return e;
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            }
        }), e.exports = a;
    }, function(t, e, i) {
        "use strict";
        var T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        !function() {
            var F = i(3), M = i(4), S = M.document, e = M.navigator.userAgent, x = 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/"), P = isInputEventSupported("touchstart"), _ = /iemobile/i.test(e), E = /iphone/i.test(e) && !_;
            function Inputmask(e, t, i) {
                if (!(this instanceof Inputmask)) return new Inputmask(e, t, i);
                this.el = void 0, this.events = {}, this.maskset = void 0, !(this.refreshValue = !1) !== i && (F.isPlainObject(e) ? t = e : (t = t || {}, 
                e && (t.alias = e)), this.opts = F.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                this.userOptions = t || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, t, this.opts));
            }
            function resolveAlias(e, t, i) {
                var a = Inputmask.prototype.aliases[e];
                return a ? (a.alias && resolveAlias(a.alias, void 0, i), F.extend(!0, i, a), F.extend(!0, i, t), 
                !0) : (null === i.mask && (i.mask = e), !1);
            }
            function generateMaskSet(i, s) {
                function generateMask(e, t, i) {
                    var a = !1;
                    if (null !== e && "" !== e || (a = null !== i.regex, e = a ? (e = i.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (a = !0, 
                    ".*")), 1 === e.length && !1 === i.greedy && 0 !== i.repeat && (i.placeholder = ""), 
                    0 < i.repeat || "*" === i.repeat || "+" === i.repeat) {
                        var n = "*" === i.repeat ? 0 : "+" === i.repeat ? 1 : i.repeat;
                        e = i.groupmarker[0] + e + i.groupmarker[1] + i.quantifiermarker[0] + n + "," + i.repeat + i.quantifiermarker[1];
                    }
                    var r, o = a ? "regex_" + i.regex : i.numericInput ? e.split("").reverse().join("") : e;
                    return void 0 === Inputmask.prototype.masksCache[o] || !0 === s ? (r = {
                        mask: e,
                        maskToken: Inputmask.prototype.analyseMask(e, a, i),
                        validPositions: {},
                        _buffer: void 0,
                        buffer: void 0,
                        tests: {},
                        excludes: {},
                        metadata: t,
                        maskLength: void 0,
                        jitOffset: {}
                    }, !0 !== s && (Inputmask.prototype.masksCache[o] = r, r = F.extend(!0, {}, Inputmask.prototype.masksCache[o]))) : r = F.extend(!0, {}, Inputmask.prototype.masksCache[o]), 
                    r;
                }
                if (F.isFunction(i.mask) && (i.mask = i.mask(i)), F.isArray(i.mask)) {
                    if (1 < i.mask.length) {
                        if (null === i.keepStatic) {
                            i.keepStatic = "auto";
                            for (var e = 0; e < i.mask.length; e++) if (i.mask[e].charAt(0) !== i.mask[0].charAt(0)) {
                                i.keepStatic = !0;
                                break;
                            }
                        }
                        var a = i.groupmarker[0];
                        return F.each(i.isRTL ? i.mask.reverse() : i.mask, function(e, t) {
                            1 < a.length && (a += i.groupmarker[1] + i.alternatormarker + i.groupmarker[0]), 
                            void 0 === t.mask || F.isFunction(t.mask) ? a += t : a += t.mask;
                        }), generateMask(a += i.groupmarker[1], i.mask, i);
                    }
                    i.mask = i.mask.pop();
                }
                return i.mask && void 0 !== i.mask.mask && !F.isFunction(i.mask.mask) ? generateMask(i.mask.mask, i.mask, i) : generateMask(i.mask, i.mask, i);
            }
            function isInputEventSupported(e) {
                var t = S.createElement("input"), i = "on" + e, a = i in t;
                return a || (t.setAttribute(i, "return;"), a = "function" == typeof t[i]), t = null, 
                a;
            }
            function maskScope(e, t, N) {
                t = t || this.maskset, N = N || this.opts;
                var m, n, g, f, r, u = this, l = this.el, v = this.isRTL, o = !1, c = !1, k = !1, a = !1;
                function getMaskTemplate(e, t, i, a, n) {
                    var r = N.greedy;
                    n && (N.greedy = !1), t = t || 0;
                    var o, s, l, u = [], c = 0;
                    getLastValidPosition();
                    do {
                        if (!0 === e && getMaskSet().validPositions[c]) l = n && !0 === getMaskSet().validPositions[c].match.optionality && void 0 === getMaskSet().validPositions[c + 1] && (!0 === getMaskSet().validPositions[c].generatedInput || getMaskSet().validPositions[c].input == N.skipOptionalPartCharacter && 0 < c) ? determineTestTemplate(c, getTests(c, o, c - 1)) : getMaskSet().validPositions[c], 
                        s = l.match, o = l.locator.slice(), u.push(!0 === i ? l.input : !1 === i ? s.nativeDef : getPlaceholder(c, s)); else {
                            l = getTestTemplate(c, o, c - 1), s = l.match, o = l.locator.slice();
                            var p = !0 !== a && (!1 !== N.jitMasking ? N.jitMasking : s.jit);
                            (!1 === p || void 0 === p || "number" == typeof p && isFinite(p) && c < p) && u.push(!1 === i ? s.nativeDef : getPlaceholder(c, s));
                        }
                        "auto" === N.keepStatic && s.newBlockMarker && null !== s.fn && (N.keepStatic = c - 1), 
                        c++;
                    } while ((void 0 === g || c < g) && (null !== s.fn || "" !== s.def) || c < t);
                    return "" === u[u.length - 1] && u.pop(), !1 === i && void 0 !== getMaskSet().maskLength || (getMaskSet().maskLength = c - 1), 
                    N.greedy = r, u;
                }
                function getMaskSet() {
                    return t;
                }
                function resetMaskSet(e) {
                    var t = getMaskSet();
                    !(t.buffer = void 0) !== e && (t.validPositions = {}, t.p = 0);
                }
                function getLastValidPosition(e, t, i) {
                    var a = -1, n = -1, r = i || getMaskSet().validPositions;
                    for (var o in void 0 === e && (e = -1), r) {
                        var s = parseInt(o);
                        r[s] && (t || !0 !== r[s].generatedInput) && (s <= e && (a = s), e <= s && (n = s));
                    }
                    return -1 === a || a == e ? n : -1 == n ? a : e - a < n - e ? a : n;
                }
                function getDecisionTaker(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && 0 < t.length && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                }
                function getLocator(e, t) {
                    var i = (null != e.alternation ? e.mloc[getDecisionTaker(e)] : e.locator).join("");
                    if ("" !== i) for (;i.length < t; ) i += "0";
                    return i;
                }
                function determineTestTemplate(e, t) {
                    for (var i, a, n, r = getTest(e = 0 < e ? e - 1 : 0), o = getLocator(r), s = 0; s < t.length; s++) {
                        var l = t[s];
                        i = getLocator(l, o.length);
                        var u = Math.abs(i - o);
                        (void 0 === a || "" !== i && u < a || n && n.match.optionality && "master" === n.match.newBlockMarker && (!l.match.optionality || !l.match.newBlockMarker) || n && n.match.optionalQuantifier && !l.match.optionalQuantifier) && (a = u, 
                        n = l);
                    }
                    return n;
                }
                function getTestTemplate(e, t, i) {
                    return getMaskSet().validPositions[e] || determineTestTemplate(e, getTests(e, t ? t.slice() : t, i));
                }
                function getTest(e, t) {
                    return getMaskSet().validPositions[e] ? getMaskSet().validPositions[e] : (t || getTests(e))[0];
                }
                function positionCanMatchDefinition(e, t) {
                    for (var i = !1, a = getTests(e), n = 0; n < a.length; n++) if (a[n].match && a[n].match.def === t) {
                        i = !0;
                        break;
                    }
                    return i;
                }
                function getTests(A, e, t) {
                    var O, i = getMaskSet().maskToken, B = e ? t : 0, a = e ? e.slice() : [ 0 ], I = [], L = !1, j = e ? e.join("") : "";
                    function resolveTestFromToken(D, C, e, t) {
                        function handleMatch(e, t, i) {
                            function isFirstMatch(i, a) {
                                var n = 0 === F.inArray(i, a.matches);
                                return n || F.each(a.matches, function(e, t) {
                                    if (!0 === t.isQuantifier ? n = isFirstMatch(i, a.matches[e - 1]) : t.hasOwnProperty("matches") && (n = isFirstMatch(i, t)), 
                                    n) return !1;
                                }), n;
                            }
                            function resolveNdxInitializer(e, n, r) {
                                var o, s;
                                if ((getMaskSet().tests[e] || getMaskSet().validPositions[e]) && F.each(getMaskSet().tests[e] || [ getMaskSet().validPositions[e] ], function(e, t) {
                                    if (t.mloc[n]) return o = t, !1;
                                    var i = void 0 !== r ? r : t.alternation, a = void 0 !== t.locator[i] ? t.locator[i].toString().indexOf(n) : -1;
                                    (void 0 === s || a < s) && -1 !== a && (o = t, s = a);
                                }), o) {
                                    var t = o.locator[o.alternation], i = o.mloc[n] || o.mloc[t] || o.locator;
                                    return i.slice((void 0 !== r ? r : o.alternation) + 1);
                                }
                                return void 0 !== r ? resolveNdxInitializer(e, n) : void 0;
                            }
                            function isSubsetOf(e, t) {
                                function expand(e) {
                                    for (var t, i, a = [], n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (i = e.charCodeAt(n + 1); ++t < i; ) a.push(String.fromCharCode(t)); else t = e.charCodeAt(n), 
                                    a.push(e.charAt(n));
                                    return a.join("");
                                }
                                return N.regex && null !== e.match.fn && null !== t.match.fn ? -1 !== expand(t.match.def.replace(/[\[\]]/g, "")).indexOf(expand(e.match.def.replace(/[\[\]]/g, ""))) : e.match.def === t.match.nativeDef;
                            }
                            function setMergeLocators(e, t) {
                                if (void 0 === t || e.alternation === t.alternation && -1 === e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])) {
                                    e.mloc = e.mloc || {};
                                    var i = e.locator[e.alternation];
                                    if (void 0 !== i) {
                                        if ("string" == typeof i && (i = i.split(",")[0]), void 0 === e.mloc[i] && (e.mloc[i] = e.locator.slice()), 
                                        void 0 !== t) {
                                            for (var a in t.mloc) "string" == typeof a && (a = a.split(",")[0]), void 0 === e.mloc[a] && (e.mloc[a] = t.mloc[a]);
                                            e.locator[e.alternation] = Object.keys(e.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    e.alternation = void 0;
                                }
                                return !1;
                            }
                            if (500 < B && void 0 !== i) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                            if (B === A && void 0 === e.matches) return I.push({
                                match: e,
                                locator: t.reverse(),
                                cd: j,
                                mloc: {}
                            }), !0;
                            if (void 0 !== e.matches) {
                                if (e.isGroup && i !== e) {
                                    if (e = handleMatch(D.matches[F.inArray(e, D.matches) + 1], t, i)) return !0;
                                } else if (e.isOptional) {
                                    var a = e;
                                    if (e = resolveTestFromToken(e, C, t, i)) {
                                        if (F.each(I, function(e, t) {
                                            t.match.optionality = !0;
                                        }), O = I[I.length - 1].match, void 0 !== i || !isFirstMatch(O, a)) return !0;
                                        L = !0, B = A;
                                    }
                                } else if (e.isAlternator) {
                                    var n, r = e, o = [], s = I.slice(), l = t.length, u = 0 < C.length ? C.shift() : -1;
                                    if (-1 === u || "string" == typeof u) {
                                        var c, p = B, f = C.slice(), d = [];
                                        if ("string" == typeof u) d = u.split(","); else for (c = 0; c < r.matches.length; c++) d.push(c.toString());
                                        if (getMaskSet().excludes[A]) {
                                            for (var g = d.slice(), m = 0, v = getMaskSet().excludes[A].length; m < v; m++) d.splice(d.indexOf(getMaskSet().excludes[A][m].toString()), 1);
                                            0 === d.length && (getMaskSet().excludes[A] = void 0, d = g);
                                        }
                                        (!0 === N.keepStatic || isFinite(parseInt(N.keepStatic)) && p >= N.keepStatic) && (d = d.slice(0, 1));
                                        for (var k = !1, h = 0; h < d.length; h++) {
                                            c = parseInt(d[h]), I = [], C = "string" == typeof u && resolveNdxInitializer(B, c, l) || f.slice(), 
                                            r.matches[c] && handleMatch(r.matches[c], [ c ].concat(t), i) ? e = !0 : 0 === h && (k = !0), 
                                            n = I.slice(), B = p, I = [];
                                            for (var y = 0; y < n.length; y++) {
                                                var b = n[y], M = !1;
                                                b.match.jit = b.match.jit || k, b.alternation = b.alternation || l, setMergeLocators(b);
                                                for (var S = 0; S < o.length; S++) {
                                                    var x = o[S];
                                                    if ("string" != typeof u || void 0 !== b.alternation && -1 !== F.inArray(b.locator[b.alternation].toString(), d)) {
                                                        if (b.match.nativeDef === x.match.nativeDef) {
                                                            M = !0, setMergeLocators(x, b);
                                                            break;
                                                        }
                                                        if (isSubsetOf(b, x)) {
                                                            setMergeLocators(b, x) && (M = !0, o.splice(o.indexOf(x), 0, b));
                                                            break;
                                                        }
                                                        if (isSubsetOf(x, b)) {
                                                            setMergeLocators(x, b);
                                                            break;
                                                        }
                                                        if (w = x, void 0, !(!((T = T = b).locator.slice(T.alternation).join("") == w.locator.slice(w.alternation).join("")) || null !== T.match.fn || null === w.match.fn) && w.match.fn.test(T.match.def, getMaskSet(), A, !1, N, !1)) {
                                                            setMergeLocators(b, x) && (M = !0, o.splice(o.indexOf(x), 0, b));
                                                            break;
                                                        }
                                                    }
                                                }
                                                M || o.push(b);
                                            }
                                        }
                                        I = s.concat(o), B = A, L = 0 < I.length, e = 0 < o.length, C = f.slice();
                                    } else e = handleMatch(r.matches[u] || D.matches[u], [ u ].concat(t), i);
                                    if (e) return !0;
                                } else if (e.isQuantifier && i !== D.matches[F.inArray(e, D.matches) - 1]) for (var P = e, _ = 0 < C.length ? C.shift() : 0; _ < (isNaN(P.quantifier.max) ? _ + 1 : P.quantifier.max) && B <= A; _++) {
                                    var E = D.matches[F.inArray(P, D.matches) - 1];
                                    if (e = handleMatch(E, [ _ ].concat(t), E)) {
                                        if ((O = I[I.length - 1].match).optionalQuantifier = _ >= P.quantifier.min, O.jit = (_ || 1) * E.matches.indexOf(O) >= P.quantifier.jit, 
                                        O.optionalQuantifier && isFirstMatch(O, E)) {
                                            L = !0, B = A;
                                            break;
                                        }
                                        return O.jit && (getMaskSet().jitOffset[A] = E.matches.indexOf(O)), !0;
                                    }
                                } else if (e = resolveTestFromToken(e, C, t, i)) return !0;
                            } else B++;
                            var T, w;
                        }
                        for (var i = 0 < C.length ? C.shift() : 0; i < D.matches.length; i++) if (!0 !== D.matches[i].isQuantifier) {
                            var a = handleMatch(D.matches[i], [ i ].concat(e), t);
                            if (a && B === A) return a;
                            if (A < B) break;
                        }
                    }
                    if (-1 < A) {
                        if (void 0 === e) {
                            for (var n, r = A - 1; void 0 === (n = getMaskSet().validPositions[r] || getMaskSet().tests[r]) && -1 < r; ) r--;
                            void 0 !== n && -1 < r && (a = function mergeLocators(e, t) {
                                var a = [];
                                return F.isArray(t) || (t = [ t ]), 0 < t.length && (void 0 === t[0].alternation ? 0 === (a = determineTestTemplate(e, t.slice()).locator.slice()).length && (a = t[0].locator.slice()) : F.each(t, function(e, t) {
                                    if ("" !== t.def) if (0 === a.length) a = t.locator.slice(); else for (var i = 0; i < a.length; i++) t.locator[i] && -1 === a[i].toString().indexOf(t.locator[i]) && (a[i] += "," + t.locator[i]);
                                })), a;
                            }(r, n), j = a.join(""), B = r);
                        }
                        if (getMaskSet().tests[A] && getMaskSet().tests[A][0].cd === j) return getMaskSet().tests[A];
                        for (var o = a.shift(); o < i.length; o++) {
                            var s = resolveTestFromToken(i[o], a, [ o ]);
                            if (s && B === A || A < B) break;
                        }
                    }
                    return (0 === I.length || L) && I.push({
                        match: {
                            fn: null,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: j
                    }), void 0 !== e && getMaskSet().tests[A] ? F.extend(!0, [], I) : (getMaskSet().tests[A] = F.extend(!0, [], I), 
                    getMaskSet().tests[A]);
                }
                function getBufferTemplate() {
                    return void 0 === getMaskSet()._buffer && (getMaskSet()._buffer = getMaskTemplate(!1, 1), 
                    void 0 === getMaskSet().buffer && (getMaskSet().buffer = getMaskSet()._buffer.slice())), 
                    getMaskSet()._buffer;
                }
                function getBuffer(e) {
                    return void 0 !== getMaskSet().buffer && !0 !== e || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0), 
                    void 0 === getMaskSet()._buffer && (getMaskSet()._buffer = getMaskSet().buffer.slice())), 
                    getMaskSet().buffer;
                }
                function refreshFromBuffer(e, t, i) {
                    var a, n;
                    if (!0 === e) resetMaskSet(), e = 0, t = i.length; else for (a = e; a < t; a++) delete getMaskSet().validPositions[a];
                    for (a = n = e; a < t; a++) if (resetMaskSet(!0), i[a] !== N.skipOptionalPartCharacter) {
                        var r = isValid(n, i[a], !0, !0);
                        !1 !== r && (resetMaskSet(!0), n = void 0 !== r.caret ? r.caret : r.pos + 1);
                    }
                }
                function checkAlternationMatch(e, t, i) {
                    for (var a, n = N.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], s = 0; s < o.length; s++) -1 !== (a = e.indexOf(o[s])) && e.splice(a, 1);
                    for (var l = 0; l < e.length; l++) if (-1 !== F.inArray(e[l], n)) {
                        r = !0;
                        break;
                    }
                    return r;
                }
                function alternate(e, t, i, a, n) {
                    var r, o, s, l, u, c, p, f = F.extend(!0, {}, getMaskSet().validPositions), d = !1, g = void 0 !== n ? n : getLastValidPosition();
                    if (-1 === g && void 0 === n) l = getTest(r = 0), o = l.alternation; else for (;0 <= g; g--) if ((s = getMaskSet().validPositions[g]) && void 0 !== s.alternation) {
                        if (l && l.locator[s.alternation] !== s.locator[s.alternation]) break;
                        r = g, o = getMaskSet().validPositions[r].alternation, l = s;
                    }
                    if (void 0 !== o) {
                        p = parseInt(r), getMaskSet().excludes[p] = getMaskSet().excludes[p] || [], !0 !== e && getMaskSet().excludes[p].push(getDecisionTaker(l));
                        var m = [], v = 0;
                        for (u = p; u < getLastValidPosition(void 0, !0) + 1; u++) (c = getMaskSet().validPositions[u]) && !0 !== c.generatedInput ? m.push(c.input) : u < e && v++, 
                        delete getMaskSet().validPositions[u];
                        for (;getMaskSet().excludes[p] && getMaskSet().excludes[p].length < 10; ) {
                            var k = -1 * v, h = m.slice();
                            for (resetMaskSet(!(getMaskSet().tests[p] = void 0)), d = !0; 0 < h.length; ) {
                                var y = h.shift();
                                if (!(d = isValid(getLastValidPosition(void 0, !0) + 1, y, !1, a, !0))) break;
                            }
                            if (d && void 0 !== t) {
                                var b = getLastValidPosition(e) + 1;
                                for (u = p; u < getLastValidPosition() + 1; u++) (void 0 === (c = getMaskSet().validPositions[u]) || null == c.match.fn) && u < e + k && k++;
                                d = isValid(b < (e += k) ? b : e, t, i, a, !0);
                            }
                            if (d) break;
                            if (resetMaskSet(), l = getTest(p), getMaskSet().validPositions = F.extend(!0, {}, f), 
                            !getMaskSet().excludes[p]) {
                                d = alternate(e, t, i, a, p - 1);
                                break;
                            }
                            var M = getDecisionTaker(l);
                            if (-1 !== getMaskSet().excludes[p].indexOf(M)) {
                                d = alternate(e, t, i, a, p - 1);
                                break;
                            }
                            for (getMaskSet().excludes[p].push(M), u = p; u < getLastValidPosition(void 0, !0) + 1; u++) delete getMaskSet().validPositions[u];
                        }
                    }
                    return getMaskSet().excludes[p] = void 0, d;
                }
                function isValid(u, e, t, c, i, a) {
                    function isSelection(e) {
                        return v ? 1 < e.begin - e.end || e.begin - e.end == 1 : 1 < e.end - e.begin || e.end - e.begin == 1;
                    }
                    t = !0 === t;
                    var n = u;
                    function _isValid(r, o, s) {
                        var l = !1;
                        return F.each(getTests(r), function(e, t) {
                            var i = t.match;
                            if (getBuffer(!0), !1 !== (l = null != i.fn ? i.fn.test(o, getMaskSet(), r, s, N, isSelection(u)) : (o === i.def || o === N.skipOptionalPartCharacter) && "" !== i.def && {
                                c: getPlaceholder(r, i, !0) || i.def,
                                pos: r
                            })) {
                                var a = void 0 !== l.c ? l.c : o, n = r;
                                return a = a === N.skipOptionalPartCharacter && null === i.fn ? getPlaceholder(r, i, !0) || i.def : a, 
                                void 0 !== l.remove && (F.isArray(l.remove) || (l.remove = [ l.remove ]), F.each(l.remove.sort(function(e, t) {
                                    return t - e;
                                }), function(e, t) {
                                    revalidateMask({
                                        begin: t,
                                        end: t + 1
                                    });
                                })), void 0 !== l.insert && (F.isArray(l.insert) || (l.insert = [ l.insert ]), F.each(l.insert.sort(function(e, t) {
                                    return e - t;
                                }), function(e, t) {
                                    isValid(t.pos, t.c, !0, c);
                                })), !0 !== l && void 0 !== l.pos && l.pos !== r && (n = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c || revalidateMask(u, F.extend({}, t, {
                                    input: function casing(e, t, i) {
                                        switch (N.casing || t.casing) {
                                          case "upper":
                                            e = e.toUpperCase();
                                            break;

                                          case "lower":
                                            e = e.toLowerCase();
                                            break;

                                          case "title":
                                            var a = getMaskSet().validPositions[i - 1];
                                            e = 0 === i || a && a.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? e.toUpperCase() : e.toLowerCase();
                                            break;

                                          default:
                                            if (F.isFunction(N.casing)) {
                                                var n = Array.prototype.slice.call(arguments);
                                                n.push(getMaskSet().validPositions), e = N.casing.apply(this, n);
                                            }
                                        }
                                        return e;
                                    }(a, i, n)
                                }), c, n) || (l = !1), !1;
                            }
                        }), l;
                    }
                    void 0 !== u.begin && (n = v ? u.end : u.begin);
                    var r = !0, o = F.extend(!0, {}, getMaskSet().validPositions);
                    if (F.isFunction(N.preValidation) && !t && !0 !== c && !0 !== a && (r = N.preValidation(getBuffer(), n, e, isSelection(u), N, getMaskSet())), 
                    !0 === r) {
                        if (trackbackPositions(void 0, n, !0), (void 0 === g || n < g) && (r = _isValid(n, e, t), 
                        (!t || !0 === c) && !1 === r && !0 !== a)) {
                            var s = getMaskSet().validPositions[n];
                            if (!s || null !== s.match.fn || s.match.def !== e && e !== N.skipOptionalPartCharacter) {
                                if ((N.insertMode || void 0 === getMaskSet().validPositions[seekNext(n)]) && (!isMask(n, !0) || getMaskSet().jitOffset[n])) if (getMaskSet().jitOffset[n] && void 0 === getMaskSet().validPositions[seekNext(n)]) !1 !== (r = isValid(n + getMaskSet().jitOffset[n], e, t)) && (r.caret = n); else for (var l = n + 1, p = seekNext(n); l <= p; l++) if (!1 !== (r = _isValid(l, e, t))) {
                                    r = trackbackPositions(n, void 0 !== r.pos ? r.pos : l) || r, n = l;
                                    break;
                                }
                            } else r = {
                                caret: seekNext(n)
                            };
                        }
                        !1 !== r || !1 === N.keepStatic || null != N.regex && !isComplete(getBuffer()) || t || !0 === i || (r = alternate(n, e, t, c)), 
                        !0 === r && (r = {
                            pos: n
                        });
                    }
                    if (F.isFunction(N.postValidation) && !1 !== r && !t && !0 !== c && !0 !== a) {
                        var f = N.postValidation(getBuffer(!0), void 0 !== u.begin ? v ? u.end : u.begin : u, r, N);
                        if (void 0 !== f) {
                            if (f.refreshFromBuffer && f.buffer) {
                                var d = f.refreshFromBuffer;
                                refreshFromBuffer(!0 === d ? d : d.start, d.end, f.buffer);
                            }
                            r = !0 === f ? r : f;
                        }
                    }
                    return r && void 0 === r.pos && (r.pos = n), !1 !== r && !0 !== a || (resetMaskSet(!0), 
                    getMaskSet().validPositions = F.extend(!0, {}, o)), r;
                }
                function trackbackPositions(e, t, i) {
                    var a;
                    if (void 0 === e) for (e = t - 1; 0 < e && !getMaskSet().validPositions[e]; e--) ;
                    for (var n = e; n < t; n++) if (void 0 === getMaskSet().validPositions[n] && !isMask(n, !0)) {
                        var r = 0 == n ? getTest(n) : getMaskSet().validPositions[n - 1];
                        if (r) {
                            var o = getTests(n).slice();
                            "" === o[o.length - 1].match.def && o.pop();
                            var s = determineTestTemplate(n, o);
                            if ((s = F.extend({}, s, {
                                input: getPlaceholder(n, s.match, !0) || s.match.def
                            })).generatedInput = !0, revalidateMask(n, s, !0), !0 !== i) {
                                var l = getMaskSet().validPositions[t].input;
                                getMaskSet().validPositions[t] = void 0, a = isValid(t, l, !0, !0);
                            }
                        }
                    }
                    return a;
                }
                function revalidateMask(e, t, i, a) {
                    function IsEnclosedStatic(e, t, i) {
                        var a = t[e];
                        if (void 0 === a || (null !== a.match.fn || !0 === a.match.optionality) && a.input !== N.radixPoint) return !1;
                        var n = i.begin <= e - 1 ? t[e - 1] && null === t[e - 1].match.fn && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && null === t[e + 1].match.fn && t[e + 1] : t[e + 1];
                        return n && r;
                    }
                    var n = void 0 !== e.begin ? e.begin : e, r = void 0 !== e.end ? e.end : e;
                    if (e.begin > e.end && (n = e.end, r = e.begin), a = void 0 !== a ? a : n, n !== r || N.insertMode && void 0 !== getMaskSet().validPositions[a] && void 0 === i) {
                        var o = F.extend(!0, {}, getMaskSet().validPositions), s = getLastValidPosition(void 0, !0);
                        for (getMaskSet().p = n, f = s; n <= f; f--) getMaskSet().validPositions[f] && "+" === getMaskSet().validPositions[f].match.nativeDef && (N.isNegative = !1), 
                        delete getMaskSet().validPositions[f];
                        var l = !0, u = a, c = (getMaskSet().validPositions, !1), p = u, f = u;
                        for (t && (getMaskSet().validPositions[a] = F.extend(!0, {}, t), p++, u++, n < r && f++); f <= s; f++) {
                            var d = o[f];
                            if (void 0 !== d && (r <= f || n <= f && !0 !== d.generatedInput && IsEnclosedStatic(f, o, {
                                begin: n,
                                end: r
                            }))) {
                                for (;"" !== getTest(p).match.def; ) {
                                    if (!1 === c && o[p] && o[p].match.nativeDef === d.match.nativeDef) getMaskSet().validPositions[p] = F.extend(!0, {}, o[p]), 
                                    getMaskSet().validPositions[p].input = d.input, trackbackPositions(void 0, p, !0), 
                                    u = p + 1, l = !0; else if (N.shiftPositions && positionCanMatchDefinition(p, d.match.def)) {
                                        var g = isValid(p, d.input, !0, !0);
                                        l = !1 !== g, u = g.caret || g.insert ? getLastValidPosition() : p + 1, c = !0;
                                    } else l = !0 === d.generatedInput || d.input === N.radixPoint && !0 === N.numericInput;
                                    if (l) break;
                                    if (!l && r < p && isMask(p, !0) && (null !== d.match.fn || p > getMaskSet().maskLength)) break;
                                    p++;
                                }
                                "" == getTest(p).match.def && (l = !1), p = u;
                            }
                            if (!l) break;
                        }
                        if (!l) return getMaskSet().validPositions = F.extend(!0, {}, o), resetMaskSet(!0), 
                        !1;
                    } else t && (getMaskSet().validPositions[a] = F.extend(!0, {}, t));
                    return resetMaskSet(!0), !0;
                }
                function isMask(e, t) {
                    var i = getTestTemplate(e).match;
                    if ("" === i.def && (i = getTest(e).match), null != i.fn) return i.fn;
                    if (!0 !== t && -1 < e) {
                        var a = getTests(e);
                        return a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0);
                    }
                    return !1;
                }
                function seekNext(e, t) {
                    for (var i = e + 1; "" !== getTest(i).match.def && (!0 === t && (!0 !== getTest(i).match.newBlockMarker || !isMask(i)) || !0 !== t && !isMask(i)); ) i++;
                    return i;
                }
                function seekPrevious(e, t) {
                    var i, a = e;
                    if (a <= 0) return 0;
                    for (;0 < --a && (!0 === t && !0 !== getTest(a).match.newBlockMarker || !0 !== t && !isMask(a) && ((i = getTests(a)).length < 2 || 2 === i.length && "" === i[1].match.def)); ) ;
                    return a;
                }
                function writeBuffer(e, t, i, a, n) {
                    if (a && F.isFunction(N.onBeforeWrite)) {
                        var r = N.onBeforeWrite.call(u, a, t, i, N);
                        if (r) {
                            if (r.refreshFromBuffer) {
                                var o = r.refreshFromBuffer;
                                refreshFromBuffer(!0 === o ? o : o.start, o.end, r.buffer || t), t = getBuffer(!0);
                            }
                            void 0 !== i && (i = void 0 !== r.caret ? r.caret : i);
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type ? renderColorMask(e, i, 0 === t.length) : caret(e, i), 
                    !0 === n)) {
                        var s = F(e), l = e.inputmask._valueGet();
                        c = !0, s.trigger("input"), setTimeout(function() {
                            l === getBufferTemplate().join("") ? s.trigger("cleared") : !0 === isComplete(t) && s.trigger("complete");
                        }, 0);
                    }
                }
                function getPlaceholder(e, t, i) {
                    if (void 0 !== (t = t || getTest(e).match).placeholder || !0 === i) return F.isFunction(t.placeholder) ? t.placeholder(N) : t.placeholder;
                    if (null !== t.fn) return N.placeholder.charAt(e % N.placeholder.length);
                    if (-1 < e && void 0 === getMaskSet().validPositions[e]) {
                        var a, n = getTests(e), r = [];
                        if (n.length > 1 + ("" === n[n.length - 1].match.def ? 1 : 0)) for (var o = 0; o < n.length; o++) if (!0 !== n[o].match.optionality && !0 !== n[o].match.optionalQuantifier && (null === n[o].match.fn || void 0 === a || !1 !== n[o].match.fn.test(a.match.def, getMaskSet(), e, !0, N)) && (r.push(n[o]), 
                        null === n[o].match.fn && (a = n[o]), 1 < r.length && /[0-9a-bA-Z]/.test(r[0].match.def))) return N.placeholder.charAt(e % N.placeholder.length);
                    }
                    return t.def;
                }
                function HandleNativePlaceholder(e, t) {
                    if (x && e.inputmask._valueGet() !== t) {
                        var i = getBuffer().slice(), a = e.inputmask._valueGet();
                        a !== t && (-1 === getLastValidPosition() && a === getBufferTemplate().join("") ? i = [] : clearOptionalTail(i), 
                        writeBuffer(e, i));
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }
                var i, s = {
                    on: function on(e, t, r) {
                        var i = function ev(e) {
                            var t = this;
                            if (void 0 === t.inputmask && "FORM" !== this.nodeName) {
                                var i = F.data(t, "_inputmask_opts");
                                i ? new Inputmask(i).mask(t) : s.off(t);
                            } else {
                                if ("setvalue" === e.type || "FORM" === this.nodeName || !(t.disabled || t.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === N.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {
                                    switch (e.type) {
                                      case "input":
                                        if (!0 === c) return c = !1, e.preventDefault();
                                        if (P) {
                                            var a = arguments;
                                            return setTimeout(function() {
                                                r.apply(t, a), caret(t, t.inputmask.caretPos, void 0, !0);
                                            }, 0), !1;
                                        }
                                        break;

                                      case "keydown":
                                        c = o = !1;
                                        break;

                                      case "keypress":
                                        if (!0 === o) return e.preventDefault();
                                        o = !0;
                                        break;

                                      case "click":
                                        if (_ || E) {
                                            var a = arguments;
                                            return setTimeout(function() {
                                                r.apply(t, a);
                                            }, 0), !1;
                                        }
                                    }
                                    var n = r.apply(t, arguments);
                                    return !1 === n && (e.preventDefault(), e.stopPropagation()), n;
                                }
                                e.preventDefault();
                            }
                        };
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(i), 
                        -1 !== F.inArray(t, [ "submit", "reset" ]) ? null !== e.form && F(e.form).on(t, i) : F(e).on(t, i);
                    },
                    off: function off(a, e) {
                        var t;
                        a.inputmask && a.inputmask.events && (e ? (t = [])[e] = a.inputmask.events[e] : t = a.inputmask.events, 
                        F.each(t, function(e, t) {
                            for (;0 < t.length; ) {
                                var i = t.pop();
                                -1 !== F.inArray(e, [ "submit", "reset" ]) ? null !== a.form && F(a.form).off(e, i) : F(a).off(e, i);
                            }
                            delete a.inputmask.events[e];
                        }));
                    }
                }, h = {
                    keydownEvent: function keydownEvent(e) {
                        var t = this, i = F(t), a = e.keyCode, n = caret(t);
                        if (a === Inputmask.keyCode.BACKSPACE || a === Inputmask.keyCode.DELETE || E && a === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && a === Inputmask.keyCode.X && !isInputEventSupported("cut")) e.preventDefault(), 
                        handleRemove(0, a, n), writeBuffer(t, getBuffer(!0), getMaskSet().p, e, t.inputmask._valueGet() !== getBuffer().join("")); else if (a === Inputmask.keyCode.END || a === Inputmask.keyCode.PAGE_DOWN) {
                            e.preventDefault();
                            var r = seekNext(getLastValidPosition());
                            caret(t, e.shiftKey ? n.begin : r, r, !0);
                        } else a === Inputmask.keyCode.HOME && !e.shiftKey || a === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), 
                        caret(t, 0, e.shiftKey ? n.begin : 0, !0)) : (N.undoOnEscape && a === Inputmask.keyCode.ESCAPE || 90 === a && e.ctrlKey) && !0 !== e.altKey ? (checkVal(t, !0, !1, m.split("")), 
                        i.trigger("click")) : a !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === N.tabThrough && a === Inputmask.keyCode.TAB && (!0 === e.shiftKey ? (null === getTest(n.begin).match.fn && (n.begin = seekNext(n.begin)), 
                        n.end = seekPrevious(n.begin, !0), n.begin = seekPrevious(n.end, !0)) : (n.begin = seekNext(n.begin, !0), 
                        n.end = seekNext(n.begin, !0), n.end < getMaskSet().maskLength && n.end--), n.begin < getMaskSet().maskLength && (e.preventDefault(), 
                        caret(t, n.begin, n.end))) : (N.insertMode = !N.insertMode, t.setAttribute("im-insert", N.insertMode));
                        N.onKeyDown.call(this, e, getBuffer(), caret(t).begin, N), k = -1 !== F.inArray(a, N.ignorables);
                    },
                    keypressEvent: function keypressEvent(e, t, i, a, n) {
                        var r = this, o = F(r), s = e.which || e.charCode || e.keyCode;
                        if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || k)) return s === Inputmask.keyCode.ENTER && m !== getBuffer().join("") && (m = getBuffer().join(""), 
                        setTimeout(function() {
                            o.trigger("change");
                        }, 0)), !0;
                        if (s) {
                            46 === s && !1 === e.shiftKey && "" !== N.radixPoint && (s = N.radixPoint.charCodeAt(0));
                            var l, u = t ? {
                                begin: n,
                                end: n
                            } : caret(r), c = String.fromCharCode(s), p = 0;
                            if (N._radixDance && N.numericInput) {
                                var f = getBuffer().indexOf(N.radixPoint.charAt(0)) + 1;
                                u.begin <= f && (s === N.radixPoint.charCodeAt(0) && (p = 1), u.begin -= 1, u.end -= 1);
                            }
                            getMaskSet().writeOutBuffer = !0;
                            var d = isValid(u, c, a);
                            if (!1 !== d && (resetMaskSet(!0), l = void 0 !== d.caret ? d.caret : seekNext(d.pos.begin ? d.pos.begin : d.pos), 
                            getMaskSet().p = l), l = (N.numericInput && void 0 === d.caret ? seekPrevious(l) : l) + p, 
                            !1 !== i && (setTimeout(function() {
                                N.onKeyValidation.call(r, s, d, N);
                            }, 0), getMaskSet().writeOutBuffer && !1 !== d)) {
                                var g = getBuffer();
                                writeBuffer(r, g, l, e, !0 !== t);
                            }
                            if (e.preventDefault(), t) return !1 !== d && (d.forwardPosition = l), d;
                        }
                    },
                    pasteEvent: function pasteEvent(e) {
                        var t, i = this, a = e.originalEvent || e, n = (F(i), i.inputmask._valueGet(!0)), r = caret(i);
                        v && (t = r.end, r.end = r.begin, r.begin = t);
                        var o = n.substr(0, r.begin), s = n.substr(r.end, n.length);
                        if (o === (v ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, r.begin).join("") && (o = ""), 
                        s === (v ? getBufferTemplate().reverse() : getBufferTemplate()).slice(r.end).join("") && (s = ""), 
                        M.clipboardData && M.clipboardData.getData) n = o + M.clipboardData.getData("Text") + s; else {
                            if (!a.clipboardData || !a.clipboardData.getData) return !0;
                            n = o + a.clipboardData.getData("text/plain") + s;
                        }
                        var l = n;
                        if (F.isFunction(N.onBeforePaste)) {
                            if (!1 === (l = N.onBeforePaste.call(u, n, N))) return e.preventDefault();
                            l || (l = n);
                        }
                        return checkVal(i, !1, !1, l.toString().split("")), writeBuffer(i, getBuffer(), seekNext(getLastValidPosition()), e, m !== getBuffer().join("")), 
                        e.preventDefault();
                    },
                    inputFallBackEvent: function inputFallBackEvent(e) {
                        var a = this, t = a.inputmask._valueGet();
                        if (getBuffer().join("") !== t) {
                            var i = caret(a);
                            if (t = function ieMobileHandler(e, t, i) {
                                if (_) {
                                    var a = t.replace(getBuffer().join(""), "");
                                    if (1 === a.length) {
                                        var n = t.split("");
                                        n.splice(i.begin, 0, a), t = n.join("");
                                    }
                                }
                                return t;
                            }(0, t = function radixPointHandler(e, t, i) {
                                return "." === t.charAt(i.begin - 1) && "" !== N.radixPoint && ((t = t.split(""))[i.begin - 1] = N.radixPoint.charAt(0), 
                                t = t.join("")), t;
                            }(0, t, i), i), getBuffer().join("") !== t) {
                                var n = getBuffer().join(""), r = !N.numericInput && t.length > n.length ? -1 : 0, o = t.substr(0, i.begin), s = t.substr(i.begin), l = n.substr(0, i.begin + r), u = n.substr(i.begin + r), c = i, p = "", f = !1;
                                if (o !== l) {
                                    var d, g = (f = o.length >= l.length) ? o.length : l.length;
                                    for (d = 0; o.charAt(d) === l.charAt(d) && d < g; d++) ;
                                    f && (c.begin = d - r, p += o.slice(d, c.end));
                                }
                                if (s !== u && (s.length > u.length ? p += s.slice(0, 1) : s.length < u.length && (c.end += u.length - s.length, 
                                f || "" === N.radixPoint || "" !== s || o.charAt(c.begin + r - 1) !== N.radixPoint || (c.begin--, 
                                p = N.radixPoint))), writeBuffer(a, getBuffer(), {
                                    begin: c.begin + r,
                                    end: c.end + r
                                }), 0 < p.length) F.each(p.split(""), function(e, t) {
                                    var i = new F.Event("keypress");
                                    i.which = t.charCodeAt(0), k = !1, h.keypressEvent.call(a, i);
                                }); else {
                                    c.begin === c.end - 1 && (c.begin = seekPrevious(c.begin + 1), c.begin === c.end - 1 ? caret(a, c.begin) : caret(a, c.begin, c.end));
                                    var m = new F.Event("keydown");
                                    m.keyCode = N.numericInput ? Inputmask.keyCode.BACKSPACE : Inputmask.keyCode.DELETE, 
                                    h.keydownEvent.call(a, m);
                                }
                                e.preventDefault();
                            }
                        }
                    },
                    beforeInputEvent: function beforeInputEvent(e) {
                        if (e.cancelable) {
                            var a = this;
                            switch (e.inputType) {
                              case "insertText":
                                return F.each(e.data.split(""), function(e, t) {
                                    var i = new F.Event("keypress");
                                    i.which = t.charCodeAt(0), k = !1, h.keypressEvent.call(a, i);
                                }), e.preventDefault();

                              case "deleteContentBackward":
                                var t = new F.Event("keydown");
                                return t.keyCode = Inputmask.keyCode.BACKSPACE, h.keydownEvent.call(a, t), e.preventDefault();

                              case "deleteContentForward":
                                var t = new F.Event("keydown");
                                return t.keyCode = Inputmask.keyCode.DELETE, h.keydownEvent.call(a, t), e.preventDefault();
                            }
                        }
                    },
                    setValueEvent: function setValueEvent(e) {
                        this.inputmask.refreshValue = !1;
                        var t = e && e.detail ? e.detail[0] : arguments[1], t = t || this.inputmask._valueGet(!0);
                        F.isFunction(N.onBeforeMask) && (t = N.onBeforeMask.call(u, t, N) || t), checkVal(this, !0, !1, t = t.split("")), 
                        m = getBuffer().join(""), (N.clearMaskOnLostFocus || N.clearIncomplete) && this.inputmask._valueGet() === getBufferTemplate().join("") && this.inputmask._valueSet("");
                    },
                    focusEvent: function focusEvent(e) {
                        var t = this, i = t.inputmask._valueGet();
                        N.showMaskOnFocus && (!N.showMaskOnHover || N.showMaskOnHover && "" === i) && (t.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(t, getBuffer(), seekNext(getLastValidPosition())) : !1 === a && caret(t, seekNext(getLastValidPosition()))), 
                        !0 === N.positionCaretOnTab && !1 === a && h.clickEvent.apply(t, [ e, !0 ]), m = getBuffer().join("");
                    },
                    mouseleaveEvent: function mouseleaveEvent(e) {
                        a = !1, N.clearMaskOnLostFocus && S.activeElement !== this && HandleNativePlaceholder(this, r);
                    },
                    clickEvent: function clickEvent(e, u) {
                        var c = this;
                        setTimeout(function() {
                            if (S.activeElement === c) {
                                var e = caret(c);
                                if (u && (v ? e.end = e.begin : e.begin = e.end), e.begin === e.end) switch (N.positionCaretOnClick) {
                                  case "none":
                                    break;

                                  case "select":
                                    caret(c, 0, getBuffer().length);
                                    break;

                                  case "ignore":
                                    caret(c, seekNext(getLastValidPosition()));
                                    break;

                                  case "radixFocus":
                                    if (function doRadixFocus(e) {
                                        if ("" !== N.radixPoint) {
                                            var t = getMaskSet().validPositions;
                                            if (void 0 === t[e] || t[e].input === getPlaceholder(e)) {
                                                if (e < seekNext(-1)) return !0;
                                                var i = F.inArray(N.radixPoint, getBuffer());
                                                if (-1 !== i) {
                                                    for (var a in t) if (i < a && t[a].input !== getPlaceholder(a)) return !1;
                                                    return !0;
                                                }
                                            }
                                        }
                                        return !1;
                                    }(e.begin)) {
                                        var t = getBuffer().join("").indexOf(N.radixPoint);
                                        caret(c, N.numericInput ? seekNext(t) : t);
                                        break;
                                    }

                                  default:
                                    var i = e.begin, a = getLastValidPosition(i, !0), n = seekNext(a);
                                    if (i < n) caret(c, isMask(i, !0) || isMask(i - 1, !0) ? i : seekNext(i)); else {
                                        var r = getMaskSet().validPositions[a], o = getTestTemplate(n, r ? r.match.locator : void 0, r), s = getPlaceholder(n, o.match);
                                        if ("" !== s && getBuffer()[n] !== s && !0 !== o.match.optionalQuantifier && !0 !== o.match.newBlockMarker || !isMask(n, N.keepStatic) && o.match.def === s) {
                                            var l = seekNext(n);
                                            (l <= i || i === n) && (n = l);
                                        }
                                        caret(c, n);
                                    }
                                }
                            }
                        }, 0);
                    },
                    cutEvent: function cutEvent(e) {
                        F(this);
                        var t = caret(this), i = e.originalEvent || e, a = M.clipboardData || i.clipboardData, n = v ? getBuffer().slice(t.end, t.begin) : getBuffer().slice(t.begin, t.end);
                        a.setData("text", v ? n.reverse().join("") : n.join("")), S.execCommand && S.execCommand("copy"), 
                        handleRemove(0, Inputmask.keyCode.DELETE, t), writeBuffer(this, getBuffer(), getMaskSet().p, e, m !== getBuffer().join(""));
                    },
                    blurEvent: function blurEvent(e) {
                        var t = F(this);
                        if (this.inputmask) {
                            HandleNativePlaceholder(this, r);
                            var i = this.inputmask._valueGet(), a = getBuffer().slice();
                            "" === i && void 0 === f || (N.clearMaskOnLostFocus && (-1 === getLastValidPosition() && i === getBufferTemplate().join("") ? a = [] : clearOptionalTail(a)), 
                            !1 === isComplete(a) && (setTimeout(function() {
                                t.trigger("incomplete");
                            }, 0), N.clearIncomplete && (resetMaskSet(), a = N.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), 
                            writeBuffer(this, a, void 0, e)), m !== getBuffer().join("") && (m = a.join(""), 
                            t.trigger("change"));
                        }
                    },
                    mouseenterEvent: function mouseenterEvent(e) {
                        a = !0, S.activeElement !== this && N.showMaskOnHover && HandleNativePlaceholder(this, (v ? getBuffer().slice().reverse() : getBuffer()).join(""));
                    },
                    submitEvent: function submitEvent(e) {
                        m !== getBuffer().join("") && n.trigger("change"), N.clearMaskOnLostFocus && -1 === getLastValidPosition() && l.inputmask._valueGet && l.inputmask._valueGet() === getBufferTemplate().join("") && l.inputmask._valueSet(""), 
                        N.clearIncomplete && !1 === isComplete(getBuffer()) && l.inputmask._valueSet(""), 
                        N.removeMaskOnSubmit && (l.inputmask._valueSet(l.inputmask.unmaskedvalue(), !0), 
                        setTimeout(function() {
                            writeBuffer(l, getBuffer());
                        }, 0));
                    },
                    resetEvent: function resetEvent(e) {
                        l.inputmask.refreshValue = !0, setTimeout(function() {
                            n.trigger("setvalue");
                        }, 0);
                    }
                };
                function checkVal(n, e, r, t, i) {
                    var o = this || n.inputmask, s = t.slice(), l = "", u = -1, c = void 0;
                    if (resetMaskSet(), r || !0 === N.autoUnmask) u = seekNext(u); else {
                        var a = getBufferTemplate().slice(0, seekNext(-1)).join(""), p = s.join("").match(new RegExp("^" + Inputmask.escapeRegex(a), "g"));
                        p && 0 < p.length && (s.splice(0, p.length * a.length), u = seekNext(u));
                    }
                    -1 === u ? (getMaskSet().p = seekNext(u), u = 0) : getMaskSet().p = u, o.caretPos = {
                        begin: u
                    }, F.each(s, function(e, t) {
                        if (void 0 !== t) if (void 0 === getMaskSet().validPositions[e] && s[e] === getPlaceholder(e) && isMask(e, !0) && !1 === isValid(e, s[e], !0, void 0, void 0, !0)) getMaskSet().p++; else {
                            var i = new F.Event("_checkval");
                            i.which = t.charCodeAt(0), l += t;
                            var a = getLastValidPosition(void 0, !0);
                            !function isTemplateMatch(e, t) {
                                return -1 !== getMaskTemplate(!0, 0, !1).slice(e, seekNext(e)).join("").replace(/'/g, "").indexOf(t) && !isMask(e) && (getTest(e).match.nativeDef === t.charAt(0) || null === getTest(e).match.fn && getTest(e).match.nativeDef === "'" + t.charAt(0) || " " === getTest(e).match.nativeDef && (getTest(e + 1).match.nativeDef === t.charAt(0) || null === getTest(e + 1).match.fn && getTest(e + 1).match.nativeDef === "'" + t.charAt(0)));
                            }(u, l) ? (c = h.keypressEvent.call(n, i, !0, !1, r, o.caretPos.begin)) && (u = o.caretPos.begin + 1, 
                            l = "") : c = h.keypressEvent.call(n, i, !0, !1, r, a + 1), c && (writeBuffer(void 0, getBuffer(), c.forwardPosition, i, !1), 
                            o.caretPos = {
                                begin: c.forwardPosition,
                                end: c.forwardPosition
                            });
                        }
                    }), e && writeBuffer(n, getBuffer(), c ? c.forwardPosition : void 0, i || new F.Event("checkval"), i && "input" === i.type);
                }
                function unmaskedvalue(e) {
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && h.setValueEvent.call(e);
                    }
                    var t = [], i = getMaskSet().validPositions;
                    for (var a in i) i[a].match && null != i[a].match.fn && t.push(i[a].input);
                    var n = 0 === t.length ? "" : (v ? t.reverse() : t).join("");
                    if (F.isFunction(N.onUnMask)) {
                        var r = (v ? getBuffer().slice().reverse() : getBuffer()).join("");
                        n = N.onUnMask.call(u, r, n, N);
                    }
                    return n;
                }
                function caret(e, t, i, a) {
                    function translatePosition(e) {
                        return !v || "number" != typeof e || N.greedy && "" === N.placeholder || !l || (e = l.inputmask._valueGet().length - e), 
                        e;
                    }
                    var n;
                    if (void 0 === t) return "selectionStart" in e ? (t = e.selectionStart, i = e.selectionEnd) : M.getSelection ? (n = M.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && n.commonAncestorContainer !== e || (t = n.startOffset, 
                    i = n.endOffset) : S.selection && S.selection.createRange && (n = S.selection.createRange(), 
                    t = 0 - n.duplicate().moveStart("character", -e.inputmask._valueGet().length), i = t + n.text.length), 
                    {
                        begin: a ? t : translatePosition(t),
                        end: a ? i : translatePosition(i)
                    };
                    if (F.isArray(t) && (i = v ? t[0] : t[1], t = v ? t[1] : t[0]), void 0 !== t.begin && (i = v ? t.begin : t.end, 
                    t = v ? t.end : t.begin), "number" == typeof t) {
                        t = a ? t : translatePosition(t), i = "number" == typeof (i = a ? i : translatePosition(i)) ? i : t;
                        var r = parseInt(((e.ownerDocument.defaultView || M).getComputedStyle ? (e.ownerDocument.defaultView || M).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                        if (e.scrollLeft = r > e.scrollWidth ? r : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: i
                        }, e === S.activeElement) {
                            if ("selectionStart" in e) e.selectionStart = t, e.selectionEnd = i; else if (M.getSelection) {
                                if (n = S.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                    var o = S.createTextNode("");
                                    e.appendChild(o);
                                }
                                n.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                                n.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                                n.collapse(!0);
                                var s = M.getSelection();
                                s.removeAllRanges(), s.addRange(n);
                            } else e.createTextRange && ((n = e.createTextRange()).collapse(!0), n.moveEnd("character", i), 
                            n.moveStart("character", t), n.select());
                            renderColorMask(e, {
                                begin: t,
                                end: i
                            });
                        }
                    }
                }
                function determineLastRequiredPosition(e) {
                    var t, i, a = getMaskTemplate(!0, getLastValidPosition(), !0, !0), n = a.length, r = getLastValidPosition(), o = {}, s = getMaskSet().validPositions[r], l = void 0 !== s ? s.locator.slice() : void 0;
                    for (t = r + 1; t < a.length; t++) i = getTestTemplate(t, l, t - 1), l = i.locator.slice(), 
                    o[t] = F.extend(!0, {}, i);
                    var u = s && void 0 !== s.alternation ? s.locator[s.alternation] : void 0;
                    for (t = n - 1; r < t && ((i = o[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || u && (u !== o[t].locator[s.alternation] && null != i.match.fn || null === i.match.fn && i.locator[s.alternation] && checkAlternationMatch(i.locator[s.alternation].toString().split(","), u.toString().split(",")) && "" !== getTests(t)[0].def)) && a[t] === getPlaceholder(t, i.match); t--) n--;
                    return e ? {
                        l: n,
                        def: o[n] ? o[n].match : void 0
                    } : n;
                }
                function clearOptionalTail(e) {
                    for (var t, i = getMaskTemplate(!(e.length = 0), 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                    return e;
                }
                function isComplete(e) {
                    if (F.isFunction(N.isComplete)) return N.isComplete(e, N);
                    if ("*" !== N.repeat) {
                        var t = !1, i = determineLastRequiredPosition(!0), a = seekPrevious(i.l);
                        if (void 0 === i.def || i.def.newBlockMarker || i.def.optionality || i.def.optionalQuantifier) {
                            t = !0;
                            for (var n = 0; n <= a; n++) {
                                var r = getTestTemplate(n).match;
                                if (null !== r.fn && void 0 === getMaskSet().validPositions[n] && !0 !== r.optionality && !0 !== r.optionalQuantifier || null === r.fn && e[n] !== getPlaceholder(n, r)) {
                                    t = !1;
                                    break;
                                }
                            }
                        }
                        return t;
                    }
                }
                function handleRemove(e, t, i, a, n) {
                    if ((N.numericInput || v) && (t === Inputmask.keyCode.BACKSPACE ? t = Inputmask.keyCode.DELETE : t === Inputmask.keyCode.DELETE && (t = Inputmask.keyCode.BACKSPACE), 
                    v)) {
                        var r = i.end;
                        i.end = i.begin, i.begin = r;
                    }
                    if (t === Inputmask.keyCode.BACKSPACE && i.end - i.begin < 1 ? (i.begin = seekPrevious(i.begin), 
                    void 0 !== getMaskSet().validPositions[i.begin] && getMaskSet().validPositions[i.begin].input === N.groupSeparator && i.begin--) : t === Inputmask.keyCode.DELETE && i.begin === i.end && (i.end = isMask(i.end, !0) && getMaskSet().validPositions[i.end] && getMaskSet().validPositions[i.end].input !== N.radixPoint ? i.end + 1 : seekNext(i.end) + 1, 
                    void 0 !== getMaskSet().validPositions[i.begin] && getMaskSet().validPositions[i.begin].input === N.groupSeparator && i.end++), 
                    revalidateMask(i), !0 !== a && !1 !== N.keepStatic || null !== N.regex) {
                        var o = alternate(!0);
                        if (o) {
                            var s = void 0 !== o.caret ? o.caret : o.pos ? seekNext(o.pos.begin ? o.pos.begin : o.pos) : getLastValidPosition(-1, !0);
                            (t !== Inputmask.keyCode.DELETE || i.begin > s) && i.begin;
                        }
                    }
                    var l = getLastValidPosition(i.begin, !0);
                    if (l < i.begin || -1 === i.begin) getMaskSet().p = seekNext(l); else if (!0 !== a && (getMaskSet().p = i.begin, 
                    !0 !== n)) for (;getMaskSet().p < l && void 0 === getMaskSet().validPositions[getMaskSet().p]; ) getMaskSet().p++;
                }
                function initializeColorMask(u) {
                    var c = (u.ownerDocument.defaultView || M).getComputedStyle(u, null), e = S.createElement("div");
                    e.style.width = c.width, e.style.textAlign = c.textAlign, f = S.createElement("div"), 
                    (u.inputmask.colorMask = f).className = "im-colormask", u.parentNode.insertBefore(f, u), 
                    u.parentNode.removeChild(u), f.appendChild(u), f.appendChild(e), u.style.left = e.offsetLeft + "px", 
                    F(f).on("mouseleave", function(e) {
                        return h.mouseleaveEvent.call(u, [ e ]);
                    }), F(f).on("mouseenter", function(e) {
                        return h.mouseenterEvent.call(u, [ e ]);
                    }), F(f).on("click", function(e) {
                        return caret(u, function findCaretPos(e) {
                            var t, i = S.createElement("span");
                            for (var a in c) isNaN(a) && -1 !== a.indexOf("font") && (i.style[a] = c[a]);
                            i.style.textTransform = c.textTransform, i.style.letterSpacing = c.letterSpacing, 
                            i.style.position = "absolute", i.style.height = "auto", i.style.width = "auto", 
                            i.style.visibility = "hidden", i.style.whiteSpace = "nowrap", S.body.appendChild(i);
                            var n, r = u.inputmask._valueGet(), o = 0;
                            for (t = 0, n = r.length; t <= n; t++) {
                                if (i.innerHTML += r.charAt(t) || "_", i.offsetWidth >= e) {
                                    var s = e - o, l = i.offsetWidth - e;
                                    i.innerHTML = r.charAt(t), s -= i.offsetWidth / 3, t = s < l ? t - 1 : t;
                                    break;
                                }
                                o = i.offsetWidth;
                            }
                            return S.body.removeChild(i), t;
                        }(e.clientX)), h.clickEvent.call(u, [ e ]);
                    });
                }
                function renderColorMask(e, t, i) {
                    var a, n, r, o = [], s = !1, l = 0;
                    function setEntry(e) {
                        if (void 0 === e && (e = ""), s || null !== a.fn && void 0 !== n.input) if (s && (null !== a.fn && void 0 !== n.input || "" === a.def)) {
                            s = !1;
                            var t = o.length;
                            o[t - 1] = o[t - 1] + "</span>", o.push(e);
                        } else o.push(e); else s = !0, o.push("<span class='im-static'>" + e);
                    }
                    if (void 0 !== f) {
                        var u = getBuffer();
                        if (void 0 === t ? t = caret(e) : void 0 === t.begin && (t = {
                            begin: t,
                            end: t
                        }), !0 !== i) {
                            for (var c = getLastValidPosition(); getMaskSet().validPositions[l] ? (n = getMaskSet().validPositions[l], 
                            a = n.match, r = n.locator.slice(), setEntry(u[l])) : (n = getTestTemplate(l, r, l - 1), 
                            a = n.match, r = n.locator.slice(), !1 === N.jitMasking || l < c || "number" == typeof N.jitMasking && isFinite(N.jitMasking) && N.jitMasking > l ? setEntry(getPlaceholder(l, a)) : s = !1), 
                            l++, (void 0 === g || l < g) && (null !== a.fn || "" !== a.def) || l < c || s; ) ;
                            s && setEntry(), function setCaret() {
                                S.activeElement === e && (o.splice(t.begin, 0, t.begin === t.end || t.end > getMaskSet().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">'), 
                                o.splice(t.end + 1, 0, "</mark>"));
                            }();
                        }
                        var p = f.getElementsByTagName("div")[0];
                        p.innerHTML = o.join(""), e.inputmask.positionColorMask(e, p);
                    }
                }
                if (Inputmask.prototype.positionColorMask = function(e, t) {
                    e.style.left = t.offsetLeft + "px";
                }, void 0 !== e) switch (e.action) {
                  case "isComplete":
                    return l = e.el, isComplete(getBuffer());

                  case "unmaskedvalue":
                    return void 0 !== l && void 0 === e.value || (i = e.value, i = (F.isFunction(N.onBeforeMask) && N.onBeforeMask.call(u, i, N) || i).split(""), 
                    checkVal.call(this, void 0, !1, !1, i), F.isFunction(N.onBeforeWrite) && N.onBeforeWrite.call(u, void 0, getBuffer(), 0, N)), 
                    unmaskedvalue(l);

                  case "mask":
                    !function mask(e) {
                        function isElementTypeSupported(e, r) {
                            function patchValueProperty(e) {
                                var t, i, a;
                                function patchValhook(e) {
                                    if (F.valHooks && (void 0 === F.valHooks[e] || !0 !== F.valHooks[e].inputmaskpatch)) {
                                        var i = F.valHooks[e] && F.valHooks[e].get ? F.valHooks[e].get : function(e) {
                                            return e.value;
                                        }, n = F.valHooks[e] && F.valHooks[e].set ? F.valHooks[e].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        F.valHooks[e] = {
                                            get: function get(e) {
                                                if (e.inputmask) {
                                                    if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                                    var t = i(e);
                                                    return -1 !== getLastValidPosition(void 0, void 0, e.inputmask.maskset.validPositions) || !0 !== r.nullable ? t : "";
                                                }
                                                return i(e);
                                            },
                                            set: function set(e, t) {
                                                var i, a = F(e);
                                                return i = n(e, t), e.inputmask && a.trigger("setvalue", [ t ]), i;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }
                                function getter() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== r.nullable ? S.activeElement === this && r.clearMaskOnLostFocus ? (v ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : t.call(this) : "" : t.call(this);
                                }
                                function setter(e) {
                                    i.call(this, e), this.inputmask && F(this).trigger("setvalue", [ e ]);
                                }
                                if (!e.inputmask.__valueGet) {
                                    if (!0 !== r.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === T("test".__proto__) ? function(e) {
                                                return e.__proto__;
                                            } : function(e) {
                                                return e.constructor.prototype;
                                            });
                                            var n = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : void 0;
                                            n && n.get && n.set ? (t = n.get, i = n.set, Object.defineProperty(e, "value", {
                                                get: getter,
                                                set: setter,
                                                configurable: !0
                                            })) : "INPUT" !== e.tagName && (t = function valueGet() {
                                                return this.textContent;
                                            }, i = function valueSet(e) {
                                                this.textContent = e;
                                            }, Object.defineProperty(e, "value", {
                                                get: getter,
                                                set: setter,
                                                configurable: !0
                                            }));
                                        } else S.__lookupGetter__ && e.__lookupGetter__("value") && (t = e.__lookupGetter__("value"), 
                                        i = e.__lookupSetter__("value"), e.__defineGetter__("value", getter), e.__defineSetter__("value", setter));
                                        e.inputmask.__valueGet = t, e.inputmask.__valueSet = i;
                                    }
                                    e.inputmask._valueGet = function(e) {
                                        return v && !0 !== e ? t.call(this.el).split("").reverse().join("") : t.call(this.el);
                                    }, e.inputmask._valueSet = function(e, t) {
                                        i.call(this.el, null == e ? "" : !0 !== t && v ? e.split("").reverse().join("") : e);
                                    }, void 0 === t && (t = function valueGet() {
                                        return this.value;
                                    }, i = function valueSet(e) {
                                        this.value = e;
                                    }, patchValhook(e.type), a = e, s.on(a, "mouseenter", function(e) {
                                        var t = F(this), i = this.inputmask._valueGet();
                                        i !== getBuffer().join("") && t.trigger("setvalue");
                                    }));
                                }
                            }
                            var t = e.getAttribute("type"), i = "INPUT" === e.tagName && -1 !== F.inArray(t, r.supportsInputType) || e.isContentEditable || "TEXTAREA" === e.tagName;
                            if (!i) if ("INPUT" === e.tagName) {
                                var a = S.createElement("input");
                                a.setAttribute("type", t), i = "text" === a.type, a = null;
                            } else i = "partial";
                            return !1 !== i ? patchValueProperty(e) : e.inputmask = void 0, i;
                        }
                        s.off(e);
                        var t = isElementTypeSupported(e, N);
                        if (!1 !== t && (n = F(l = e), r = l.placeholder, -1 === (g = void 0 !== l ? l.maxLength : void 0) && (g = void 0), 
                        !0 === N.colorMask && initializeColorMask(l), P && ("inputmode" in l && (l.inputmode = N.inputmode, 
                        l.setAttribute("inputmode", N.inputmode)), !0 === N.disablePredictiveText && ("autocorrect" in l ? l.autocorrect = !1 : (!0 !== N.colorMask && initializeColorMask(l), 
                        l.type = "password"))), !0 === t && (l.setAttribute("im-insert", N.insertMode), 
                        s.on(l, "submit", h.submitEvent), s.on(l, "reset", h.resetEvent), s.on(l, "blur", h.blurEvent), 
                        s.on(l, "focus", h.focusEvent), !0 !== N.colorMask && (s.on(l, "click", h.clickEvent), 
                        s.on(l, "mouseleave", h.mouseleaveEvent), s.on(l, "mouseenter", h.mouseenterEvent)), 
                        s.on(l, "paste", h.pasteEvent), s.on(l, "cut", h.cutEvent), s.on(l, "complete", N.oncomplete), 
                        s.on(l, "incomplete", N.onincomplete), s.on(l, "cleared", N.oncleared), P || !0 === N.inputEventOnly ? l.removeAttribute("maxLength") : (s.on(l, "keydown", h.keydownEvent), 
                        s.on(l, "keypress", h.keypressEvent)), s.on(l, "input", h.inputFallBackEvent), s.on(l, "beforeinput", h.beforeInputEvent)), 
                        s.on(l, "setvalue", h.setValueEvent), m = getBufferTemplate().join(""), "" !== l.inputmask._valueGet(!0) || !1 === N.clearMaskOnLostFocus || S.activeElement === l)) {
                            var i = F.isFunction(N.onBeforeMask) && N.onBeforeMask.call(u, l.inputmask._valueGet(!0), N) || l.inputmask._valueGet(!0);
                            "" !== i && checkVal(l, !0, !1, i.split(""));
                            var a = getBuffer().slice();
                            m = a.join(""), !1 === isComplete(a) && N.clearIncomplete && resetMaskSet(), N.clearMaskOnLostFocus && S.activeElement !== l && (-1 === getLastValidPosition() ? a = [] : clearOptionalTail(a)), 
                            (!1 === N.clearMaskOnLostFocus || N.showMaskOnFocus && S.activeElement === l || "" !== l.inputmask._valueGet(!0)) && writeBuffer(l, a), 
                            S.activeElement === l && caret(l, seekNext(getLastValidPosition()));
                        }
                    }(l);
                    break;

                  case "format":
                    return i = (F.isFunction(N.onBeforeMask) && N.onBeforeMask.call(u, e.value, N) || e.value).split(""), 
                    checkVal.call(this, void 0, !0, !1, i), e.metadata ? {
                        value: v ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                        metadata: maskScope.call(this, {
                            action: "getmetadata"
                        }, t, N)
                    } : v ? getBuffer().slice().reverse().join("") : getBuffer().join("");

                  case "isValid":
                    e.value ? (i = e.value.split(""), checkVal.call(this, void 0, !0, !0, i)) : e.value = getBuffer().join("");
                    for (var p = getBuffer(), d = determineLastRequiredPosition(), y = p.length - 1; d < y && !isMask(y); y--) ;
                    return p.splice(d, y + 1 - d), isComplete(p) && e.value === getBuffer().join("");

                  case "getemptymask":
                    return getBufferTemplate().join("");

                  case "remove":
                    return l && l.inputmask && (F.data(l, "_inputmask_opts", null), n = F(l), l.inputmask._valueSet(N.autoUnmask ? unmaskedvalue(l) : l.inputmask._valueGet(!0)), 
                    s.off(l), l.inputmask.colorMask && ((f = l.inputmask.colorMask).removeChild(l), 
                    f.parentNode.insertBefore(l, f), f.parentNode.removeChild(f)), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(l), "value") && l.inputmask.__valueGet && Object.defineProperty(l, "value", {
                        get: l.inputmask.__valueGet,
                        set: l.inputmask.__valueSet,
                        configurable: !0
                    }) : S.__lookupGetter__ && l.__lookupGetter__("value") && l.inputmask.__valueGet && (l.__defineGetter__("value", l.inputmask.__valueGet), 
                    l.__defineSetter__("value", l.inputmask.__valueSet)), l.inputmask = void 0), l;

                  case "getmetadata":
                    if (F.isArray(t.metadata)) {
                        var b = getMaskTemplate(!0, 0, !1).join("");
                        return F.each(t.metadata, function(e, t) {
                            if (t.mask === b) return b = t, !1;
                        }), b;
                    }
                    return t.metadata;
                }
            }
            Inputmask.prototype = {
                dataAttribute: "data-inputmask",
                defaults: {
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: F.noop,
                    onincomplete: F.noop,
                    oncleared: F.noop,
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: F.noop,
                    onBeforeMask: null,
                    onBeforePaste: function onBeforePaste(e, t) {
                        return F.isFunction(t.onBeforeMask) ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: F.noop,
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [ "text", "tel", "password", "search" ],
                    ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "verbatim",
                    colorMask: !1,
                    disablePredictiveText: !1,
                    importDataAttributes: !0,
                    shiftPositions: !0
                },
                definitions: {
                    9: {
                        validator: "[0-9\uff11-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                },
                aliases: {},
                masksCache: {},
                mask: function mask(e) {
                    var n = this;
                    return "string" == typeof e && (e = S.getElementById(e) || S.querySelectorAll(e)), 
                    e = e.nodeName ? [ e ] : e, F.each(e, function(e, t) {
                        var i = F.extend(!0, {}, n.opts);
                        if (function importAttributeOptions(i, e, a, n) {
                            if (!0 === e.importDataAttributes) {
                                var t, r, o, s, l = function importOption(e, t) {
                                    null !== (t = void 0 !== t ? t : i.getAttribute(n + "-" + e)) && ("string" == typeof t && (0 === e.indexOf("on") ? t = M[t] : "false" === t ? t = !1 : "true" === t && (t = !0)), 
                                    a[e] = t);
                                }, u = i.getAttribute(n);
                                if (u && "" !== u && (u = u.replace(/'/g, '"'), r = JSON.parse("{" + u + "}")), 
                                r) for (s in o = void 0, r) if ("alias" === s.toLowerCase()) {
                                    o = r[s];
                                    break;
                                }
                                for (t in l("alias", o), a.alias && resolveAlias(a.alias, a, e), e) {
                                    if (r) for (s in o = void 0, r) if (s.toLowerCase() === t.toLowerCase()) {
                                        o = r[s];
                                        break;
                                    }
                                    l(t, o);
                                }
                            }
                            return F.extend(!0, e, a), ("rtl" === i.dir || e.rightAlign) && (i.style.textAlign = "right"), 
                            ("rtl" === i.dir || e.numericInput) && (i.dir = "ltr", i.removeAttribute("dir"), 
                            e.isRTL = !0), Object.keys(a).length;
                        }(t, i, F.extend(!0, {}, n.userOptions), n.dataAttribute)) {
                            var a = generateMaskSet(i, n.noMasksCache);
                            void 0 !== a && (void 0 !== t.inputmask && (t.inputmask.opts.autoUnmask = !0, t.inputmask.remove()), 
                            t.inputmask = new Inputmask(void 0, void 0, !0), t.inputmask.opts = i, t.inputmask.noMasksCache = n.noMasksCache, 
                            t.inputmask.userOptions = F.extend(!0, {}, n.userOptions), t.inputmask.isRTL = i.isRTL || i.numericInput, 
                            (t.inputmask.el = t).inputmask.maskset = a, F.data(t, "_inputmask_opts", i), maskScope.call(t.inputmask, {
                                action: "mask"
                            }));
                        }
                    }), e && e[0] && e[0].inputmask || this;
                },
                option: function option(e, t) {
                    return "string" == typeof e ? this.opts[e] : "object" === (void 0 === e ? "undefined" : T(e)) ? (F.extend(this.userOptions, e), 
                    this.el && !0 !== t && this.mask(this.el), this) : void 0;
                },
                unmaskedvalue: function unmaskedvalue(e) {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "unmaskedvalue",
                        value: e
                    });
                },
                remove: function remove() {
                    return maskScope.call(this, {
                        action: "remove"
                    });
                },
                getemptymask: function getemptymask() {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "getemptymask"
                    });
                },
                hasMaskedValue: function hasMaskedValue() {
                    return !this.opts.autoUnmask;
                },
                isComplete: function isComplete() {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "isComplete"
                    });
                },
                getmetadata: function getmetadata() {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "getmetadata"
                    });
                },
                isValid: function isValid(e) {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "isValid",
                        value: e
                    });
                },
                format: function format(e, t) {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "format",
                        value: e,
                        metadata: t
                    });
                },
                setValue: function setValue(e) {
                    this.el && F(this.el).trigger("setvalue", [ e ]);
                },
                analyseMask: function analyseMask(e, r, o) {
                    var t, i, a, n, s, l, u = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, c = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, f = new MaskToken(), d = [], g = [];
                    function MaskToken(e, t, i, a) {
                        this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                        this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = a || !1, 
                        this.quantifier = {
                            min: 1,
                            max: 1
                        };
                    }
                    function insertTestDefinition(i, e, a) {
                        a = void 0 !== a ? a : i.matches.length;
                        var n = i.matches[a - 1];
                        if (r) 0 === e.indexOf("[") || p && /\\d|\\s|\\w]/i.test(e) || "." === e ? i.matches.splice(a++, 0, {
                            fn: new RegExp(e, o.casing ? "i" : ""),
                            optionality: !1,
                            newBlockMarker: void 0 === n ? "master" : n.def !== e,
                            casing: null,
                            def: e,
                            placeholder: void 0,
                            nativeDef: e
                        }) : (p && (e = e[e.length - 1]), F.each(e.split(""), function(e, t) {
                            n = i.matches[a - 1], i.matches.splice(a++, 0, {
                                fn: null,
                                optionality: !1,
                                newBlockMarker: void 0 === n ? "master" : n.def !== t && null !== n.fn,
                                casing: null,
                                def: o.staticDefinitionSymbol || t,
                                placeholder: void 0 !== o.staticDefinitionSymbol ? t : void 0,
                                nativeDef: (p ? "'" : "") + t
                            });
                        })), p = !1; else {
                            var t = (o.definitions ? o.definitions[e] : void 0) || Inputmask.prototype.definitions[e];
                            t && !p ? i.matches.splice(a++, 0, {
                                fn: t.validator ? "string" == typeof t.validator ? new RegExp(t.validator, o.casing ? "i" : "") : new function() {
                                    this.test = t.validator;
                                }() : new RegExp("."),
                                optionality: !1,
                                newBlockMarker: void 0 === n ? "master" : n.def !== (t.definitionSymbol || e),
                                casing: t.casing,
                                def: t.definitionSymbol || e,
                                placeholder: t.placeholder,
                                nativeDef: e
                            }) : (i.matches.splice(a++, 0, {
                                fn: null,
                                optionality: !1,
                                newBlockMarker: void 0 === n ? "master" : n.def !== e && null !== n.fn,
                                casing: null,
                                def: o.staticDefinitionSymbol || e,
                                placeholder: void 0 !== o.staticDefinitionSymbol ? e : void 0,
                                nativeDef: (p ? "'" : "") + e
                            }), p = !1);
                        }
                    }
                    function defaultCase() {
                        if (0 < d.length) {
                            if (insertTestDefinition(n = d[d.length - 1], i), n.isAlternator) {
                                s = d.pop();
                                for (var e = 0; e < s.matches.length; e++) s.matches[e].isGroup && (s.matches[e].isGroup = !1);
                                0 < d.length ? (n = d[d.length - 1]).matches.push(s) : f.matches.push(s);
                            }
                        } else insertTestDefinition(f, i);
                    }
                    function groupify(e) {
                        var t = new MaskToken(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    for (r && (o.optionalmarker[0] = void 0, o.optionalmarker[1] = void 0); t = r ? c.exec(e) : u.exec(e); ) {
                        if (i = t[0], r) switch (i.charAt(0)) {
                          case "?":
                            i = "{0,1}";
                            break;

                          case "+":
                          case "*":
                            i = "{" + i + "}";
                        }
                        if (p) defaultCase(); else switch (i.charAt(0)) {
                          case "(?=":
                          case "(?!":
                          case "(?<=":
                          case "(?<!":
                            break;

                          case o.escapeChar:
                            p = !0, r && defaultCase();
                            break;

                          case o.optionalmarker[1]:
                          case o.groupmarker[1]:
                            if ((a = d.pop()).openGroup = !1, void 0 !== a) if (0 < d.length) {
                                if ((n = d[d.length - 1]).matches.push(a), n.isAlternator) {
                                    s = d.pop();
                                    for (var m = 0; m < s.matches.length; m++) s.matches[m].isGroup = !1, s.matches[m].alternatorGroup = !1;
                                    0 < d.length ? (n = d[d.length - 1]).matches.push(s) : f.matches.push(s);
                                }
                            } else f.matches.push(a); else defaultCase();
                            break;

                          case o.optionalmarker[0]:
                            d.push(new MaskToken(!1, !0));
                            break;

                          case o.groupmarker[0]:
                            d.push(new MaskToken(!0));
                            break;

                          case o.quantifiermarker[0]:
                            var v = new MaskToken(!1, !1, !0), k = (i = i.replace(/[{}]/g, "")).split("|"), h = k[0].split(","), y = isNaN(h[0]) ? h[0] : parseInt(h[0]), b = 1 === h.length ? y : isNaN(h[1]) ? h[1] : parseInt(h[1]);
                            "*" !== y && "+" !== y || (y = "*" === b ? 0 : 1), v.quantifier = {
                                min: y,
                                max: b,
                                jit: k[1]
                            };
                            var M = 0 < d.length ? d[d.length - 1].matches : f.matches;
                            if ((t = M.pop()).isAlternator) {
                                M.push(t), M = t.matches;
                                var S = new MaskToken(!0), x = M.pop();
                                M.push(S), M = S.matches, t = x;
                            }
                            t.isGroup || (t = groupify([ t ])), M.push(t), M.push(v);
                            break;

                          case o.alternatormarker:
                            var P = function groupQuantifier(e) {
                                var t = e.pop();
                                return t.isQuantifier && (t = groupify([ e.pop(), t ])), t;
                            };
                            if (0 < d.length) {
                                var _ = (n = d[d.length - 1]).matches[n.matches.length - 1];
                                l = n.openGroup && (void 0 === _.matches || !1 === _.isGroup && !1 === _.isAlternator) ? d.pop() : P(n.matches);
                            } else l = P(f.matches);
                            if (l.isAlternator) d.push(l); else if (l.alternatorGroup ? (s = d.pop(), l.alternatorGroup = !1) : s = new MaskToken(!1, !1, !1, !0), 
                            s.matches.push(l), d.push(s), l.openGroup) {
                                var E = new MaskToken(!(l.openGroup = !1));
                                E.alternatorGroup = !0, d.push(E);
                            }
                            break;

                          default:
                            defaultCase();
                        }
                    }
                    for (;0 < d.length; ) a = d.pop(), f.matches.push(a);
                    return 0 < f.matches.length && (function verifyGroupMarker(a) {
                        a && a.matches && F.each(a.matches, function(e, t) {
                            var i = a.matches[e + 1];
                            (void 0 === i || void 0 === i.matches || !1 === i.isQuantifier) && t && t.isGroup && (t.isGroup = !1, 
                            r || (insertTestDefinition(t, o.groupmarker[0], 0), !0 !== t.openGroup && insertTestDefinition(t, o.groupmarker[1]))), 
                            verifyGroupMarker(t);
                        });
                    }(f), g.push(f)), (o.numericInput || o.isRTL) && function reverseTokens(e) {
                        function reverseStatic(e) {
                            return e === o.optionalmarker[0] ? e = o.optionalmarker[1] : e === o.optionalmarker[1] ? e = o.optionalmarker[0] : e === o.groupmarker[0] ? e = o.groupmarker[1] : e === o.groupmarker[1] && (e = o.groupmarker[0]), 
                            e;
                        }
                        for (var t in e.matches = e.matches.reverse(), e.matches) if (e.matches.hasOwnProperty(t)) {
                            var i = parseInt(t);
                            if (e.matches[t].isQuantifier && e.matches[i + 1] && e.matches[i + 1].isGroup) {
                                var a = e.matches[t];
                                e.matches.splice(t, 1), e.matches.splice(i + 1, 0, a);
                            }
                            void 0 !== e.matches[t].matches ? e.matches[t] = reverseTokens(e.matches[t]) : e.matches[t] = reverseStatic(e.matches[t]);
                        }
                        return e;
                    }(g[0]), g;
                }
            }, Inputmask.extendDefaults = function(e) {
                F.extend(!0, Inputmask.prototype.defaults, e);
            }, Inputmask.extendDefinitions = function(e) {
                F.extend(!0, Inputmask.prototype.definitions, e);
            }, Inputmask.extendAliases = function(e) {
                F.extend(!0, Inputmask.prototype.aliases, e);
            }, Inputmask.format = function(e, t, i) {
                return Inputmask(t).format(e, i);
            }, Inputmask.unmask = function(e, t) {
                return Inputmask(t).unmaskedvalue(e);
            }, Inputmask.isValid = function(e, t) {
                return Inputmask(t).isValid(e);
            }, Inputmask.remove = function(e) {
                "string" == typeof e && (e = S.getElementById(e) || S.querySelectorAll(e)), e = e.nodeName ? [ e ] : e, 
                F.each(e, function(e, t) {
                    t.inputmask && t.inputmask.remove();
                });
            }, Inputmask.setValue = function(e, i) {
                "string" == typeof e && (e = S.getElementById(e) || S.querySelectorAll(e)), e = e.nodeName ? [ e ] : e, 
                F.each(e, function(e, t) {
                    t.inputmask ? t.inputmask.setValue(i) : F(t).trigger("setvalue", [ i ]);
                });
            }, Inputmask.escapeRegex = function(e) {
                return e.replace(new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim"), "\\$1");
            }, Inputmask.keyCode = {
                BACKSPACE: 8,
                BACKSPACE_SAFARI: 127,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                X: 88,
                CONTROL: 17
            }, Inputmask.dependencyLib = F, M.Inputmask = Inputmask, t.exports = Inputmask;
        }();
    }, function(e, t, i) {
        "use strict";
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, a = i(4), f = a.document;
        function isWindow(e) {
            return null != e && e === e.window;
        }
        function isValidElement(e) {
            return e instanceof Element;
        }
        function DependencyLib(e) {
            return e instanceof DependencyLib ? e : this instanceof DependencyLib ? void (null != e && e !== a && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : f.querySelector(e), 
            void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new DependencyLib(e);
        }
        DependencyLib.prototype = {
            on: function on(e, i) {
                if (isValidElement(this[0])) for (var t = function addEvent(e, t) {
                    n.addEventListener ? n.addEventListener(e, i, !1) : n.attachEvent && n.attachEvent("on" + e, i), 
                    a[e] = a[e] || {}, a[e][t] = a[e][t] || [], a[e][t].push(i);
                }, a = this[0].eventRegistry, n = this[0], r = e.split(" "), o = 0; o < r.length; o++) {
                    var s = r[o].split(".");
                    t(s[0], s[1] || "global");
                }
                return this;
            },
            off: function off(e, s) {
                if (isValidElement(this[0])) for (var t = function removeEvent(e, t, i) {
                    if (e in l == !0) if (n.removeEventListener ? n.removeEventListener(e, i, !1) : n.detachEvent && n.detachEvent("on" + e, i), 
                    "global" === t) for (var a in l[e]) l[e][a].splice(l[e][a].indexOf(i), 1); else l[e][t].splice(l[e][t].indexOf(i), 1);
                }, i = function resolveNamespace(e, t) {
                    var i, a, n = [];
                    if (0 < e.length) if (void 0 === s) for (i = 0, a = l[e][t].length; i < a; i++) n.push({
                        ev: e,
                        namespace: t && 0 < t.length ? t : "global",
                        handler: l[e][t][i]
                    }); else n.push({
                        ev: e,
                        namespace: t && 0 < t.length ? t : "global",
                        handler: s
                    }); else if (0 < t.length) for (var r in l) for (var o in l[r]) if (o === t) if (void 0 === s) for (i = 0, 
                    a = l[r][o].length; i < a; i++) n.push({
                        ev: r,
                        namespace: o,
                        handler: l[r][o][i]
                    }); else n.push({
                        ev: r,
                        namespace: o,
                        handler: s
                    });
                    return n;
                }, l = this[0].eventRegistry, n = this[0], a = e.split(" "), r = 0; r < a.length; r++) for (var o = a[r].split("."), u = i(o[0], o[1]), c = 0, p = u.length; c < p; c++) t(u[c].ev, u[c].namespace, u[c].handler);
                return this;
            },
            trigger: function trigger(e) {
                if (isValidElement(this[0])) for (var t = this[0].eventRegistry, i = this[0], a = "string" == typeof e ? e.split(" ") : [ e.type ], n = 0; n < a.length; n++) {
                    var r = a[n].split("."), o = r[0], s = r[1] || "global";
                    if (void 0 !== f && "global" === s) {
                        var l, u, c = {
                            bubbles: !0,
                            cancelable: !0,
                            detail: arguments[1]
                        };
                        if (f.createEvent) {
                            try {
                                l = new CustomEvent(o, c);
                            } catch (e) {
                                (l = f.createEvent("CustomEvent")).initCustomEvent(o, c.bubbles, c.cancelable, c.detail);
                            }
                            e.type && DependencyLib.extend(l, e), i.dispatchEvent(l);
                        } else (l = f.createEventObject()).eventType = o, l.detail = arguments[1], e.type && DependencyLib.extend(l, e), 
                        i.fireEvent("on" + l.eventType, l);
                    } else if (void 0 !== t[o]) if (e = e.type ? e : DependencyLib.Event(e), "global" === s) for (var p in t[o]) for (u = 0; u < t[o][p].length; u++) t[o][p][u].apply(i, arguments); else for (u = 0; u < t[o][s].length; u++) t[o][s][u].apply(i, arguments);
                }
                return this;
            }
        }, DependencyLib.isFunction = function(e) {
            return "function" == typeof e;
        }, DependencyLib.noop = function() {}, DependencyLib.isArray = Array.isArray, DependencyLib.inArray = function(e, t, i) {
            return null == t ? -1 : function indexOf(e, t) {
                for (var i = 0, a = e.length; i < a; i++) if (e[i] === t) return i;
                return -1;
            }(t, e);
        }, DependencyLib.valHooks = void 0, DependencyLib.isPlainObject = function(e) {
            return "object" === (void 0 === e ? "undefined" : c(e)) && !e.nodeType && !isWindow(e) && !(e.constructor && !Object.hasOwnProperty.call(e.constructor.prototype, "isPrototypeOf"));
        }, DependencyLib.extend = function() {
            var e, t, i, a, n, r, o = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" === (void 0 === o ? "undefined" : c(o)) || DependencyLib.isFunction(o) || (o = {}), 
            s === l && (o = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) i = o[t], 
            o !== (a = e[t]) && (u && a && (DependencyLib.isPlainObject(a) || (n = DependencyLib.isArray(a))) ? (r = n ? (n = !1, 
            i && DependencyLib.isArray(i) ? i : []) : i && DependencyLib.isPlainObject(i) ? i : {}, 
            o[t] = DependencyLib.extend(u, r, a)) : void 0 !== a && (o[t] = a));
            return o;
        }, DependencyLib.each = function(e, t) {
            var i = 0;
            if (function isArraylike(e) {
                var t = "length" in e && e.length, i = void 0 === e ? "undefined" : c(e);
                return "function" !== i && !isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
            }(e)) for (var a = e.length; i < a && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
        }, DependencyLib.data = function(e, t, i) {
            if (void 0 === i) return e.__data ? e.__data[t] : null;
            e.__data = e.__data || {}, e.__data[t] = i;
        }, "function" == typeof a.CustomEvent ? DependencyLib.Event = a.CustomEvent : (DependencyLib.Event = function(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = f.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
        }).prototype = a.Event.prototype, e.exports = DependencyLib;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window;
        }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }, function(e, t, i) {
        "use strict";
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, s = i(2), l = s.dependencyLib, c = {
            d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
            dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                return pad(Date.prototype.getDate.call(this), 2);
            } ],
            ddd: [ "" ],
            dddd: [ "" ],
            m: [ "[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return Date.prototype.getMonth.call(this) + 1;
            } ],
            mm: [ "0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return pad(Date.prototype.getMonth.call(this) + 1, 2);
            } ],
            mmm: [ "" ],
            mmmm: [ "" ],
            yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                return pad(Date.prototype.getFullYear.call(this), 2);
            } ],
            yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                return pad(Date.prototype.getFullYear.call(this), 4);
            } ],
            h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                return pad(Date.prototype.getHours.call(this), 2);
            } ],
            hhh: [ "[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            HH: [ "[01][0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                return pad(Date.prototype.getHours.call(this), 2);
            } ],
            HHH: [ "[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
            MM: [ "[0-5][0-9]", Date.prototype.setMinutes, "minutes", function() {
                return pad(Date.prototype.getMinutes.call(this), 2);
            } ],
            s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
            ss: [ "[0-5][0-9]", Date.prototype.setSeconds, "seconds", function() {
                return pad(Date.prototype.getSeconds.call(this), 2);
            } ],
            l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return pad(Date.prototype.getMilliseconds.call(this), 3);
            } ],
            L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return pad(Date.prototype.getMilliseconds.call(this), 2);
            } ],
            t: [ "[ap]" ],
            tt: [ "[ap]m" ],
            T: [ "[AP]" ],
            TT: [ "[AP]M" ],
            Z: [ "" ],
            o: [ "" ],
            S: [ "" ]
        }, a = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };
        function getTokenizer(e) {
            if (!e.tokenizer) {
                var t = [];
                for (var i in c) -1 === t.indexOf(i[0]) && t.push(i[0]);
                e.tokenizer = "(" + t.join("+|") + ")+?|.", e.tokenizer = new RegExp(e.tokenizer, "g");
            }
            return e.tokenizer;
        }
        function parse(e, t, i, a) {
            for (var n, r = ""; n = getTokenizer(i).exec(e); ) {
                if (void 0 === t) if (c[n[0]]) r += "(" + c[n[0]][0] + ")"; else switch (n[0]) {
                  case "[":
                    r += "(";
                    break;

                  case "]":
                    r += ")?";
                    break;

                  default:
                    r += s.escapeRegex(n[0]);
                } else if (c[n[0]]) if (!0 !== a && c[n[0]][3]) r += c[n[0]][3].call(t.date); else c[n[0]][2] ? r += t["raw" + c[n[0]][2]] : r += n[0]; else r += n[0];
            }
            return r;
        }
        function pad(e, t) {
            for (e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
            return e;
        }
        function analyseMask(e, t, r) {
            var o, i, a, n = {
                date: new Date(1, 0, 1)
            }, s = e;
            function setValue(e, t, i) {
                e[o] = function extendProperty(e) {
                    var t = e.replace(/[^0-9]/g, "0");
                    if (t != e) {
                        var i = e.replace(/[^0-9]/g, ""), a = (r.min && r.min[o] || e).toString(), n = (r.max && r.max[o] || e).toString();
                        t = i + (i < a.slice(0, i.length) ? a.slice(i.length) : i > n.slice(0, i.length) ? n.slice(i.length) : t.toString().slice(i.length));
                    }
                    return t;
                }(t), e["raw" + o] = t, void 0 !== a && a.call(e.date, "month" == o ? parseInt(e[o]) - 1 : e[o]);
            }
            if ("string" == typeof s) {
                for (;i = getTokenizer(r).exec(t); ) {
                    var l = s.slice(0, i[0].length);
                    c.hasOwnProperty(i[0]) && (c[i[0]][0], o = c[i[0]][2], a = c[i[0]][1], setValue(n, l)), 
                    s = s.slice(l.length);
                }
                return n;
            }
            if (s && "object" === (void 0 === s ? "undefined" : u(s)) && s.hasOwnProperty("date")) return s;
        }
        s.extendAliases({
            datetime: {
                mask: function mask(e) {
                    return c.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = a[e.inputFormat] || e.inputFormat, 
                    e.displayFormat = a[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = a[e.outputFormat] || e.outputFormat || e.inputFormat, 
                    e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[\[\]]/, ""), 
                    e.regex = parse(e.inputFormat, void 0, e), null;
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: void 0,
                outputFormat: void 0,
                min: null,
                max: null,
                i18n: {
                    dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                    monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                    ordinalSuffix: [ "st", "nd", "rd", "th" ]
                },
                postValidation: function postValidation(e, t, i, a) {
                    a.min = analyseMask(a.min, a.inputFormat, a), a.max = analyseMask(a.max, a.inputFormat, a);
                    var n = i, r = analyseMask(e.join(""), a.inputFormat, a);
                    return n && r.date.getTime() == r.date.getTime() && (n = (n = function isValidDate(e, t) {
                        return (!isFinite(e.rawday) || "29" == e.day && !isFinite(e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) && t;
                    }(r, n)) && function isDateInRange(e, t) {
                        var i = !0;
                        if (t.min) {
                            if (e.rawyear) {
                                var a = e.rawyear.replace(/[^0-9]/g, "");
                                i = t.min.year.substr(0, a.length) <= a;
                            }
                            e.year === e.rawyear && t.min.date.getTime() == t.min.date.getTime() && (i = t.min.date.getTime() <= e.date.getTime());
                        }
                        return i && t.max && t.max.date.getTime() == t.max.date.getTime() && (i = t.max.date.getTime() >= e.date.getTime()), 
                        i;
                    }(r, a)), t && n && i.pos !== t ? {
                        buffer: parse(a.inputFormat, r, a),
                        refreshFromBuffer: {
                            start: t,
                            end: i.pos
                        }
                    } : n;
                },
                onKeyDown: function onKeyDown(e, t, i, a) {
                    if (e.ctrlKey && e.keyCode === s.keyCode.RIGHT) {
                        for (var n, r = new Date(), o = ""; n = getTokenizer(a).exec(a.inputFormat); ) "d" === n[0].charAt(0) ? o += pad(r.getDate(), n[0].length) : "m" === n[0].charAt(0) ? o += pad(r.getMonth() + 1, n[0].length) : "yyyy" === n[0] ? o += r.getFullYear().toString() : "y" === n[0].charAt(0) && (o += pad(r.getYear(), n[0].length));
                        this.inputmask._valueSet(o), l(this).trigger("setvalue");
                    }
                },
                onUnMask: function onUnMask(e, t, i) {
                    return parse(i.outputFormat, analyseMask(e, i.inputFormat, i), i, !0);
                },
                casing: function casing(e, t, i, a) {
                    return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                },
                insertMode: !1,
                shiftPositions: !1
            }
        }), e.exports = s;
    }, function(e, t, i) {
        "use strict";
        var v = i(2), k = v.dependencyLib;
        function autoEscape(e, t) {
            for (var i = "", a = 0; a < e.length; a++) v.prototype.definitions[e.charAt(a)] || t.definitions[e.charAt(a)] || t.optionalmarker.start === e.charAt(a) || t.optionalmarker.end === e.charAt(a) || t.quantifiermarker.start === e.charAt(a) || t.quantifiermarker.end === e.charAt(a) || t.groupmarker.start === e.charAt(a) || t.groupmarker.end === e.charAt(a) || t.alternatormarker === e.charAt(a) ? i += "\\" + e.charAt(a) : i += e.charAt(a);
            return i;
        }
        v.extendAliases({
            numeric: {
                mask: function mask(e) {
                    if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, 
                    e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                    " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, 
                    e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), 
                    isFinite(e.integerDigits))) {
                        var t = Math.floor(e.integerDigits / e.groupSize), i = e.integerDigits % e.groupSize;
                        e.integerDigits = parseInt(e.integerDigits) + (0 === i ? t - 1 : t), e.integerDigits < 1 && (e.integerDigits = "*");
                    }
                    1 < e.placeholder.length && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && !1 === e.integerOptional && (e.positionCaretOnClick = "lvp"), 
                    e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~", 
                    !0 === e.numericInput && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                    e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
                    var mask = "[+]";
                    if (mask += autoEscape(e.prefix, e), !0 === e.integerOptional ? mask += "~{1," + e.integerDigits + "}" : mask += "~{" + e.integerDigits + "}", 
                    void 0 !== e.digits) {
                        var a = e.decimalProtect ? ":" : e.radixPoint, n = e.digits.toString().split(",");
                        isFinite(n[0]) && n[1] && isFinite(n[1]) ? mask += a + ";{" + e.digits + "}" : (isNaN(e.digits) || 0 < parseInt(e.digits)) && (e.digitsOptional ? mask += "[" + a + ";{1," + e.digits + "}]" : mask += a + ";{" + e.digits + "}");
                    }
                    return mask += autoEscape(e.suffix, e), mask += "[-]", e.greedy = !1, mask;
                },
                placeholder: "",
                greedy: !1,
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: !1,
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                integerDigits: "+",
                integerOptional: !0,
                prefix: "",
                suffix: "",
                rightAlign: !0,
                decimalProtect: !0,
                min: null,
                max: null,
                step: 1,
                insertMode: !0,
                autoUnmask: !1,
                unmaskAsNumber: !1,
                inputType: "text",
                inputmode: "numeric",
                preValidation: function preValidation(e, t, i, a, n, r) {
                    if ("-" === i || i === n.negationSymbol.front) return !0 === n.allowMinus && (n.isNegative = void 0 === n.isNegative || !n.isNegative, 
                    "" === e.join("") || {
                        caret: r.validPositions[t] ? t : void 0,
                        dopost: !0
                    });
                    if (!1 === a && i === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || 0 < parseInt(n.digits))) {
                        var o = k.inArray(n.radixPoint, e);
                        if (-1 !== o && void 0 !== r.validPositions[o]) return !0 === n.numericInput ? t === o : {
                            caret: o + 1
                        };
                    }
                    return !0;
                },
                postValidation: function postValidation(e, t, i, a) {
                    var n = a.suffix.split(""), r = a.prefix.split("");
                    if (void 0 === i.pos && void 0 !== i.caret && !0 !== i.dopost) return i;
                    var o = void 0 !== i.caret ? i.caret : i.pos, s = e.slice();
                    a.numericInput && (o = s.length - o - 1, s = s.reverse());
                    var l = s[o];
                    if (l === a.groupSeparator && (l = s[o += 1]), o === s.length - a.suffix.length - 1 && l === a.radixPoint) return i;
                    void 0 !== l && l !== a.radixPoint && l !== a.negationSymbol.front && l !== a.negationSymbol.back && (s[o] = "?", 
                    0 < a.prefix.length && o >= (!1 === a.isNegative ? 1 : 0) && o < a.prefix.length - 1 + (!1 === a.isNegative ? 1 : 0) ? r[o - (!1 === a.isNegative ? 1 : 0)] = "?" : 0 < a.suffix.length && o >= s.length - a.suffix.length - (!1 === a.isNegative ? 1 : 0) && (n[o - (s.length - a.suffix.length - (!1 === a.isNegative ? 1 : 0))] = "?")), 
                    r = r.join(""), n = n.join("");
                    var u = s.join("").replace(r, "");
                    if (u = (u = (u = (u = u.replace(n, "")).replace(new RegExp(v.escapeRegex(a.groupSeparator), "g"), "")).replace(new RegExp("[-" + v.escapeRegex(a.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(v.escapeRegex(a.negationSymbol.back) + "$"), ""), 
                    isNaN(a.placeholder) && (u = u.replace(new RegExp(v.escapeRegex(a.placeholder), "g"), "")), 
                    1 < u.length && 1 !== u.indexOf(a.radixPoint) && ("0" === l && (u = u.replace(/^\?/g, "")), 
                    u = u.replace(/^0/g, "")), u.charAt(0) === a.radixPoint && "" !== a.radixPoint && !0 !== a.numericInput && (u = "0" + u), 
                    "" !== u) {
                        if (u = u.split(""), (!a.digitsOptional || a.enforceDigitsOnBlur && "blur" === i.event) && isFinite(a.digits)) {
                            var c = k.inArray(a.radixPoint, u), p = k.inArray(a.radixPoint, s);
                            -1 === c && (u.push(a.radixPoint), c = u.length - 1);
                            for (var f = 1; f <= a.digits; f++) a.digitsOptional && (!a.enforceDigitsOnBlur || "blur" !== i.event) || void 0 !== u[c + f] && u[c + f] !== a.placeholder.charAt(0) ? -1 !== p && void 0 !== s[p + f] && (u[c + f] = u[c + f] || s[p + f]) : u[c + f] = i.placeholder || a.placeholder.charAt(0);
                        }
                        if (!0 !== a.autoGroup || "" === a.groupSeparator || l === a.radixPoint && void 0 === i.pos && !i.dopost) u = u.join(""); else {
                            var d = u[u.length - 1] === a.radixPoint && i.c === a.radixPoint;
                            u = v(function buildPostMask(e, t) {
                                var i = "";
                                if (i += "(" + t.groupSeparator + "*{" + t.groupSize + "}){*}", "" !== t.radixPoint) {
                                    var a = e.join("").split(t.radixPoint);
                                    a[1] && (i += t.radixPoint + "*{" + a[1].match(/^\d*\??\d*/)[0].length + "}");
                                }
                                return i;
                            }(u, a), {
                                numericInput: !0,
                                jitMasking: !0,
                                definitions: {
                                    "*": {
                                        validator: "[0-9?]",
                                        cardinality: 1
                                    }
                                }
                            }).format(u.join("")), d && (u += a.radixPoint), u.charAt(0) === a.groupSeparator && u.substr(1);
                        }
                    }
                    if (a.isNegative && "blur" === i.event && (a.isNegative = "0" !== u), u = r + u, 
                    u += n, a.isNegative && (u = a.negationSymbol.front + u, u += a.negationSymbol.back), 
                    u = u.split(""), void 0 !== l) if (l !== a.radixPoint && l !== a.negationSymbol.front && l !== a.negationSymbol.back) -1 < (o = k.inArray("?", u)) ? u[o] = l : o = i.caret || 0; else if (l === a.radixPoint || l === a.negationSymbol.front || l === a.negationSymbol.back) {
                        var g = k.inArray(l, u);
                        -1 !== g && (o = g);
                    }
                    a.numericInput && (o = u.length - o - 1, u = u.reverse());
                    var m = {
                        caret: void 0 !== l && void 0 === i.pos || void 0 === o ? o : o + (a.numericInput ? -1 : 1),
                        buffer: u,
                        refreshFromBuffer: i.dopost || e.join("") !== u.join("")
                    };
                    return m.refreshFromBuffer ? m : i;
                },
                onBeforeWrite: function onBeforeWrite(e, t, i, a) {
                    if (e) switch (e.type) {
                      case "keydown":
                        return a.postValidation(t, i, {
                            caret: i,
                            dopost: !0
                        }, a);

                      case "blur":
                      case "checkval":
                        var n;
                        if (function parseMinMaxOptions(e) {
                            void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp(v.escapeRegex(e.groupSeparator), "g"), ""), 
                            "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, 
                            isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp(v.escapeRegex(e.groupSeparator), "g"), ""), 
                            "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                            isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                        }(a), null !== a.min || null !== a.max) {
                            if (n = a.onUnMask(t.join(""), void 0, k.extend({}, a, {
                                unmaskAsNumber: !0
                            })), null !== a.min && n < a.min) return a.isNegative = a.min < 0, a.postValidation(a.min.toString().replace(".", a.radixPoint).split(""), i, {
                                caret: i,
                                dopost: !0,
                                placeholder: "0"
                            }, a);
                            if (null !== a.max && n > a.max) return a.isNegative = a.max < 0, a.postValidation(a.max.toString().replace(".", a.radixPoint).split(""), i, {
                                caret: i,
                                dopost: !0,
                                placeholder: "0"
                            }, a);
                        }
                        return a.postValidation(t, i, {
                            caret: i,
                            placeholder: "0",
                            event: "blur"
                        }, a);

                      case "_checkval":
                        return {
                            caret: i
                        };
                    }
                },
                regex: {
                    integerPart: function integerPart(e, t) {
                        return t ? new RegExp("[" + v.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + v.escapeRegex(e.negationSymbol.front) + "+]?\\d+");
                    },
                    integerNPart: function integerNPart(e) {
                        return new RegExp("[\\d" + v.escapeRegex(e.groupSeparator) + v.escapeRegex(e.placeholder.charAt(0)) + "]+");
                    }
                },
                definitions: {
                    "~": {
                        validator: function validator(e, t, i, a, n, r) {
                            var o;
                            if ("k" === e || "m" === e) {
                                o = {
                                    insert: [],
                                    c: 0
                                };
                                for (var s = 0, l = "k" === e ? 2 : 5; s < l; s++) o.insert.push({
                                    pos: i + s,
                                    c: 0
                                });
                                return o.pos = i + l, o;
                            }
                            if (!0 === (o = a ? new RegExp("[0-9" + v.escapeRegex(n.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e))) {
                                if (!0 !== n.numericInput && void 0 !== t.validPositions[i] && "~" === t.validPositions[i].match.def && !r) {
                                    var u = t.buffer.join(""), c = (u = (u = u.replace(new RegExp("[-" + v.escapeRegex(n.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(v.escapeRegex(n.negationSymbol.back) + "$"), "")).split(n.radixPoint);
                                    1 < c.length && (c[1] = c[1].replace(/0/g, n.placeholder.charAt(0))), "0" === c[0] && (c[0] = c[0].replace(/0/g, n.placeholder.charAt(0))), 
                                    u = c[0] + n.radixPoint + c[1] || "";
                                    var p = t._buffer.join("");
                                    for (u === n.radixPoint && (u = p); null === u.match(v.escapeRegex(p) + "$"); ) p = p.slice(1);
                                    o = void 0 === (u = (u = u.replace(p, "")).split(""))[i] ? {
                                        pos: i,
                                        remove: i
                                    } : {
                                        pos: i
                                    };
                                }
                            } else a || e !== n.radixPoint || void 0 !== t.validPositions[i - 1] || (o = {
                                insert: {
                                    pos: i,
                                    c: 0
                                },
                                pos: i + 1
                            });
                            return o;
                        },
                        cardinality: 1
                    },
                    "+": {
                        validator: function validator(e, t, i, a, n) {
                            return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    "-": {
                        validator: function validator(e, t, i, a, n) {
                            return n.allowMinus && e === n.negationSymbol.back;
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    ":": {
                        validator: function validator(e, t, i, a, n) {
                            var r = "[" + v.escapeRegex(n.radixPoint) + "]", o = new RegExp(r).test(e);
                            return o && t.validPositions[i] && t.validPositions[i].match.placeholder === n.radixPoint && (o = {
                                caret: i + 1
                            }), o;
                        },
                        cardinality: 1,
                        placeholder: function placeholder(e) {
                            return e.radixPoint;
                        }
                    }
                },
                onUnMask: function onUnMask(e, t, i) {
                    if ("" === t && !0 === i.nullable) return t;
                    var a = e.replace(i.prefix, "");
                    return a = (a = a.replace(i.suffix, "")).replace(new RegExp(v.escapeRegex(i.groupSeparator), "g"), ""), 
                    "" !== i.placeholder.charAt(0) && (a = a.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                    i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== a.indexOf(i.radixPoint) && (a = a.replace(v.escapeRegex.call(this, i.radixPoint), ".")), 
                    a = (a = a.replace(new RegExp("^" + v.escapeRegex(i.negationSymbol.front)), "-")).replace(new RegExp(v.escapeRegex(i.negationSymbol.back) + "$"), ""), 
                    Number(a)) : a;
                },
                isComplete: function isComplete(e, t) {
                    var i = (t.numericInput ? e.slice().reverse() : e).join("");
                    return i = (i = (i = (i = (i = i.replace(new RegExp("^" + v.escapeRegex(t.negationSymbol.front)), "-")).replace(new RegExp(v.escapeRegex(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp(v.escapeRegex(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), 
                    "," === t.radixPoint && (i = i.replace(v.escapeRegex(t.radixPoint), ".")), isFinite(i);
                },
                onBeforeMask: function onBeforeMask(e, t) {
                    t.isNegative = void 0;
                    var i = t.radixPoint || ",";
                    "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                    var a = e.split(i), n = a[0].replace(/[^\-0-9]/g, ""), r = 1 < a.length ? a[1].replace(/[^0-9]/g, "") : "";
                    e = n + ("" !== r ? i + r : r);
                    var o = 0;
                    if ("" !== i && (o = r.length, "" !== r)) {
                        var s = Math.pow(10, o || 1);
                        isFinite(t.digits) && (o = parseInt(t.digits), s = Math.pow(10, o)), e = e.replace(v.escapeRegex(i), "."), 
                        isFinite(e) && (e = Math.round(parseFloat(e) * s) / s), e = e.toString().replace(".", i);
                    }
                    return 0 === t.digits && -1 !== e.indexOf(v.escapeRegex(i)) && (e = e.substring(0, e.indexOf(v.escapeRegex(i)))), 
                    function alignDigits(e, t, i) {
                        if (0 < t) {
                            var a = k.inArray(i.radixPoint, e);
                            -1 === a && (e.push(i.radixPoint), a = e.length - 1);
                            for (var n = 1; n <= t; n++) e[a + n] = e[a + n] || "0";
                        }
                        return e;
                    }(e.toString().split(""), o, t).join("");
                },
                onKeyDown: function onKeyDown(e, t, i, a) {
                    var n = k(this);
                    if (e.ctrlKey) switch (e.keyCode) {
                      case v.keyCode.UP:
                        n.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(a.step)), n.trigger("setvalue");
                        break;

                      case v.keyCode.DOWN:
                        n.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(a.step)), n.trigger("setvalue");
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: !0,
                digits: 2,
                digitsOptional: !1,
                clearMaskOnLostFocus: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0,
                radixPoint: ""
            },
            percentage: {
                alias: "numeric",
                digits: 2,
                digitsOptional: !0,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: !1,
                min: 0,
                max: 100,
                suffix: " %",
                allowMinus: !1
            }
        }), e.exports = v;
    } ]);
});
//# sourceMappingURL=inputmask.js.map