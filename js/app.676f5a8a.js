(function(e) {
    function t(t) {
        for (var a, o, u = t[0], s = t[1], l = t[2], d = 0, p = []; d < u.length; d++)
            o = u[d],
            Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]),
            i[o] = 0;
        for (a in s)
            Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        c && c(t);
        while (p.length)
            p.shift()();
        return r.push.apply(r, l || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, u = 1; u < n.length; u++) {
                var s = n[u];
                0 !== i[s] && (a = !1)
            }
            a && (r.splice(t--, 1),
            e = o(o.s = n[0]))
        }
        return e
    }
    var a = {}
      , i = {
        app: 0
    }
      , r = [];
    function o(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o),
        n.l = !0,
        n.exports
    }
    o.m = e,
    o.c = a,
    o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                o.d(n, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return n
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "/";
    var u = window["webpackJsonp"] = window["webpackJsonp"] || []
      , s = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var l = 0; l < u.length; l++)
        t(u[l]);
    var c = s;
    r.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    1: function(e, t) {},
    3504: function(e) {
        e.exports = JSON.parse('{"token":{"name":"KCAKE","symbol":"KCAKE"},"general":{"status":{"done":"✅","prog":"⏭","pend":"⬜"},"time":{"long":{"year":"年","month":"月","week":"周","day":"日","hour":"小时","minute":"分钟","second":"秒"},"short":{"year":"年","month":"月","week":"周","day":"日","hour":"小时","minute":"分钟","second":"秒"}}},"topBar":{"address":"您的BSC钱包地址"},"rewardToken":{"name":"Pancakeswap","symbol":"CAKE"},"dashboard":{"earningsManager":"@:{\'token.name\'}分红表","enterAddress":"在右上角输入您的BSC地址看分红！","rewardsPaidToYou":"已发送给您的@:rewardToken.symbol","yourHoldings":"您持有的 @:{\'token.symbol\'}：","lastPayoutTime":"上一次分红发送时间","lastPayoutTimeFormatted":"{timeValue}{timeUnit}前","pendingPayout":"下一次@:{\'rewardToken.symbol\'}分红量","pendingPayoutTime":"{minuteValue}@:{\'general.time.short.minute\'}后","calculatingDividends":"正在计算分红，请稍等…","positionInQueue":"队列位置：{posValue}","sufficientTokensForReward":"恭喜您，您所持有的@:{\'token.name\'}足以获得分红！","insufficientTokensForReward":"抱歉，您现在所持有的@:{\'token.name\'}不足以获得分红。","totalRewardsPaid":"所有@:{\'token.name\'}持有者合计分红：","unmetBalance":"（最少需持：{minTokensForReward}，差距：{missingTokensForReward}）"},"drawer":{"languages":{"header":"语言"},"socials":{"header":"社交媒体","telegram":{"label":"中文电报群","url":"https://t.me/KCAKE_Official","caption":"与其他投资者交流！"},"twitter":{"label":"推特","caption":"留意我们的最新动态！"},"instagram":{"label":"Instagram","caption":"属于大家的故事"},"emailUs":{"label":"电邮地址","caption":"info{\'@\'}KCAKE.app"}},"smartContract":{"header":"智能合约","contractMenu":{"label":"合约","caption":"对投资者的诚诺"},"chartsMenu":{"label":"K线","caption":"在月亮见！"},"dessertFinance":{"label":"甜点金融审核","caption":"心安地食@:{\'token.name\'}"},"poocoin":{"label":"PooCoin","caption":"看K线"},"dextools":{"label":"DexTools","caption":"一起刷热搜！"},"Pancakeswap":{"label":"Pancakeswap","caption":"在薄饼上买@:{\'token.name\'}"},"bscscan":{"label":"BscScan","caption":"已验证合约"},"roadmap":{"label":"路线图","caption":"今后的计划"},"calculator":{"label":"红利计算机","caption":"预算一下红利收入！"}},"flappyDARA":{"label":"喵喵飞翔","caption":"别撞上Doge和KCAKE喔"},"tokenomics":{"header":"货币机制","redistribution":{"label":"{fee}%分红","caption":"拿好@:{\'token.symbol\'}等分红！"},"liquidity":{"label":"{fee}%入池","caption":"为资金池注资"},"marketing":{"label":"{fee}%营销","caption":"大金额营销不会停"},"sell":{"label":"1%卖出费","caption":"拿稳点吧！"}}},"roadmap":{"prelaunchTechnical":{"heading":"发射前技术准备","websiteAndDashboard":"开发网站和分红表","telegramTracker":"全新电报推广纪录系统","contractTestnet":"@:{\'token.name\'}智能合约测试","contractMainnet":"@:{\'token.name\'}智能合约推出及验证","finalizeTokenomics":"敲定货币机制","audit":"甜点金融审核"},"prelaunchMarketing":{"heading":"发射前媒体推广","initPush":"推特和Instagram官方推广","comp":"社交网站用户推广活动","campaign":"影响者宣传活动"},"launch":{"heading":"三…二…一…发射！","time":"北京时间7月25日凌晨4时公平发射！","rewards":"在分红表看@:{\'rewardToken.symbol\'}分红吧！"},"postlaunch":{"heading":"升空飞行程序","morePromo":"更多官方推广","celeb":"网红宣传","comp":"用户推广竞赛","vid":"专业推广视频","agency":"专业营销机构宣传","dextools":"Dextools 热搜活动","explorers":"CoinGecko, CMC 等专页上线"},"shortterm":{"heading":"日心轨道插入","burn":"燃烧货币","intl":"发起国际电报群","staking":"权益质押"},"midterm":{"heading":"离开太阳系…","charity":"动物收容所捐款活动－所有动物都是喵喵的朋友","other":"研究其他分红货币及机制","crosschain":"支持更多区块链","nft":"@:{\'token.name\'}商品及NFT"},"longterm":{"heading":"超越银河系","cex":"研究交易所上市方案 -- 分红币制一般难以在交易所上市，需要更多开发和研究"}},"calculator":{"title":"红利计算机","disclaimer":"（注意：以下的预算是基于过往的数据计算，可能与您确实赚取的红利有所出入。）","amount":"持币量","perDay":"每日@:{\'rewardToken.symbol\'}红利预算","perWeek":"每周@:{\'rewardToken.symbol\'}红利预算","perMonth":"每月@:{\'rewardToken.symbol\'}红利预算","perYear":"每年@:{\'rewardToken.symbol\'}红利预算"}}')
    },
    "49f8": function(e, t, n) {
        var a = {
            "./de.json": "6ce2",
            "./en.json": "edd4",
            "./es.json": "a306",
            "./zh.json": "3504"
        };
        function i(e) {
            var t = r(e);
            return n(t)
        }
        function r(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        i.keys = function() {
            return Object.keys(a)
        }
        ,
        i.resolve = r,
        e.exports = i,
        i.id = "49f8"
    },
    5636: function(e, t, n) {},
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d"),
        n("159b"),
        n("d3b7"),
        n("ddb0"),
        n("ac1f"),
        n("466d");
        var a = n("7a23")
          , i = n("47e2")
          , r = {
            class: "full-width row justify-between items-center"
        }
          , o = {
            class: "col"
        }
          , u = {
            id: "tokenTitle"
        }
          , s = {
            class: "q-ml-sm text-weight-bold"
        }
          , l = {
            class: "col col-sm-6"
        }
          , c = Object(a["j"])("div", {
            class: "col-lg"
        }, null, -1)
          , d = Object(a["j"])("div", {
            id: "background",
            class: "absolute full-width full-height"
        }, null, -1)
          , p = Object(a["j"])("div", {
            class: "col-xs-1 col-lg-2"
        }, null, -1)
          , b = {
            class: "col"
        }
          , m = Object(a["j"])("div", {
            class: "col-xs-1 col-lg-2"
        }, null, -1)
          , y = Object(a["j"])("span", {
            class: "hidden"
        }, "mexaha2696@gizmona.com", -1);
        function j(e, t, i, j, f, O) {
            var g = Object(a["B"])("q-btn")
              , h = Object(a["B"])("q-avatar")
              , v = Object(a["B"])("q-toolbar-title")
              , T = Object(a["B"])("q-input")
              , k = Object(a["B"])("q-toolbar")
              , w = Object(a["B"])("q-header")
              , x = Object(a["B"])("Drawer")
              , D = Object(a["B"])("q-drawer")
              , M = Object(a["B"])("ContractContent")
              , _ = Object(a["B"])("q-page")
              , C = Object(a["B"])("q-page-container")
              , F = Object(a["B"])("q-layout");
            return Object(a["w"])(),
            Object(a["g"])(a["a"], null, [Object(a["j"])(F, {
                view: "lHH LpR fff"
            }, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])(w, {
                        elevated: "",
                        class: "bg-pink-2"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(k, {
                                class: "full-width bg-pink-2 text-black q-my-sm"
                            }, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])("div", r, [Object(a["j"])("div", o, [Object(a["j"])(v, {
                                        class: "cursor-pointer"
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(g, {
                                                flat: "",
                                                onClick: j.toggleDrawer,
                                                round: "",
                                                dense: "",
                                                icon: "menu"
                                            }, null, 8, ["onClick"]), Object(a["j"])("a", u, [Object(a["j"])(h, {
                                                square: "",
                                                size: "3rem"
                                            }, {
                                                default: Object(a["G"])((function() {
                                                    return [Object(a["j"])("img", {
                                                        src: n("8c08"),
                                                        alt: "KCAKE Logo"
                                                    }, null, 8, ["src"])]
                                                }
                                                )),
                                                _: 1
                                            }), Object(a["j"])("span", s, Object(a["D"])(e.$t("token.name")), 1)])]
                                        }
                                        )),
                                        _: 1
                                    })]), Object(a["j"])("div", l, [Object(a["j"])(T, {
                                        outlined: "",
                                        "hide-bottom-space": "",
                                        dense: "",
                                        modelValue: j.address,
                                        "onUpdate:modelValue": t[1] || (t[1] = function(e) {
                                            return j.address = e
                                        }
                                        ),
                                        disable: !j.addressInputEnabled,
                                        "bg-color": "white",
                                        label: e.$t("topBar.address")
                                    }, null, 8, ["modelValue", "disable", "label"])]), c])]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(D, {
                        "show-if-above": "",
                        modelValue: j.drawerLeft,
                        "onUpdate:modelValue": t[2] || (t[2] = function(e) {
                            return j.drawerLeft = e
                        }
                        ),
                        side: "left",
                        elevated: "",
                        width: 300,
                        class: "bg-pink-2 text-black text-weight-bold"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(x)]
                        }
                        )),
                        _: 1
                    }, 8, ["modelValue"]), Object(a["j"])(C, null, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(_, {
                                class: "flex flex-center row justify-center"
                            }, {
                                default: Object(a["G"])((function() {
                                    return [d, p, Object(a["j"])("div", b, [Object(a["j"])(M, {
                                        ref: "contractContentRef",
                                        loading: j.loading,
                                        address: j.address,
                                        onUpdateAddressInput: j.updateAddressInput,
                                        onUpdateLoading: j.updateLoading
                                    }, null, 8, ["loading", "address", "onUpdateAddressInput", "onUpdateLoading"])]), m]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    })]
                }
                )),
                _: 1
            }), y], 64)
        }
        var f = n("1da1")
          , O = (n("96cf"),
        n("d4ec"))
          , g = n("bee2")
          , h = n("c030")
          , v = function() {
            function e() {
                Object(O["a"])(this, e)
            }
            return Object(g["a"])(e, null, [{
                key: "validateToken",
                value: function(e) {
                    var t = /^0x[0-9A-Fa-f]{40}$/g;
                    return "" !== e && t.test(e) && h["a"].utils.isAddress(e)
                }
            }, {
                key: "strequal",
                value: function(e, t) {
                    return e && t && 0 === e.localeCompare(t, void 0, {
                        sensitivity: "base"
                    })
                }
            }, {
                key: "TimeDifference",
                value: function(e, t, n) {
                    var a, i, r = 6e4, o = 60 * r, u = 24 * o, s = 30 * u, l = 365 * u, c = e - t;
                    if (c < r) {
                        var d = Math.round(c / 1e3);
                        a = d,
                        i = n("general.time.long.second", a)
                    } else if (c < o) {
                        var p = Math.round(c / r);
                        a = p,
                        i = n("general.time.long.minute", a)
                    } else if (c < u) {
                        var b = Math.round(c / o);
                        a = b,
                        i = n("general.time.long.hour", a)
                    } else if (c < s) {
                        var m = Math.round(c / u);
                        a = m,
                        i = n("general.time.long.day", a)
                    } else if (c < l) {
                        var y = Math.round(c / s);
                        a = y,
                        i = n("general.time.long.month", a)
                    } else {
                        var j = Math.round(c / l);
                        a = j,
                        i = n("general.time.long.year", a)
                    }
                    return n("dashboard.lastPayoutTimeFormatted", {
                        timeValue: a,
                        timeUnit: i
                    })
                }
            }]),
            e
        }()
          , T = {
            class: "row q-my-md full-width text-blue-8 items-center justify-center"
        }
          , k = {
            class: "row q-my-md full-width justify-center"
        }
          , w = {
            class: "q-my-sm text-weight-bold"
        }
          , x = {
            key: 0,
            class: "row full-width justify-evenly"
        }
          , D = {
            class: "row full-height items-center justify-center"
        }
          , M = {
            class: "col-xs-7 col-sm-8"
        }
          , _ = {
            class: "q-my-sm text-weight-medium"
        }
          , C = {
            key: 1,
            class: "q-my-sm text-body1 text-weight-medium"
        }
          , F = {
            class: "col-4"
        }
          , G = {
            class: "row full-height items-center justify-center"
        }
          , P = {
            class: "col-xs-7 col-sm-8"
        }
          , q = {
            class: "q-my-sm text-weight-medium"
        }
          , $ = {
            key: 1
        }
          , A = {
            class: "q-my-sm text-body1 text-weight-medium"
        }
          , z = {
            class: "q-my-sm text-body1 text-grey-8"
        }
          , S = {
            class: "col-4"
        }
          , B = {
            class: "row full-height items-center justify-center"
        }
          , E = {
            class: "col-xs-7 col-sm-8"
        }
          , I = {
            class: "q-my-sm text-weight-medium"
        }
          , R = {
            key: 1,
            class: "q-my-sm text-body1 text-weight-medium"
        }
          , V = {
            class: "col-4"
        }
          , L = {
            class: "row full-height items-center justify-center"
        }
          , U = {
            class: "col-xs-7 col-sm-8"
        }
          , Q = {
            class: "q-my-sm text-weight-medium"
        }
          , W = {
            key: 0
        }
          , H = {
            class: "q-my-sm text-body1 text-pink-12 text-weight-medium"
        }
          , K = {
            class: "q-my-sm text-body1 text-grey-8"
        }
          , N = {
            key: 1,
            class: "q-my-sm text-body1 text-pink-12 text-weight-medium"
        }
          , Y = {
            class: "q-my-sm text-body1 text-weight-medium"
        }
          , J = {
            class: "col-4"
        }
          , X = {
            key: 1,
            class: "row q-my-md full-width justify-center"
        }
          , Z = {
            class: "q-my-sm text-weight-bold"
        }
          , ee = {
            class: "row q-my-md full-width justify-center"
        }
          , te = {
            class: "q-my-sm text-weight-bold"
        }
          , ne = {
            class: "q-my-sm text-weight-bold"
        }
          , ae = {
            class: "q-my-sm text-weight-bold"
        }
          , ie = {
            key: 2,
            class: "q-my-sm text-weight-bold"
        }
          , re = {
            class: "row q-my-md full-width justify-center"
        }
          , oe = {
            class: "q-my-sm"
        }
          , ue = {
            class: "gt-xs"
        }
          , se = {
            class: "q-my-sm text-pink-12 text-weight-regular"
        }
          , le = {
            class: "q-my-sm text-grey-8"
        }
          , ce = {
            class: "lt-sm"
        }
          , de = {
            class: "q-my-sm text-pink-12 text-weight-regular"
        }
          , pe = {
            class: "q-my-sm text-grey-8"
        };
        function be(e, t, i, r, o, u) {
            var s = Object(a["B"])("q-img")
              , l = Object(a["B"])("q-linear-progress")
              , c = Object(a["B"])("q-card")
              , d = Object(a["B"])("q-spinner-CAKEs")
              , p = Object(a["B"])("q-icon")
              , b = Object(a["B"])("q-circular-progress")
              , m = Object(a["B"])("q-spinner-hourglass");
            return Object(a["w"])(),
            Object(a["g"])(a["a"], null, [Object(a["j"])("div", T, [Object(a["j"])(s, {
                src: n("cf05"),
                alt: "Kitty CAKE",
                height: "300px",
                fit: "contain",
                ratio: "1"
            }, null, 8, ["src"])]), Object(a["j"])("div", k, [Object(a["j"])(c, {
                class: "bg-pink-2 full-width text-center"
            }, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])(l, {
                        value: r.reloadProgress,
                        indeterminate: i.loading,
                        "instant-feedback": "",
                        color: "pink-12",
                        size: "5px",
                        class: "q-mt-0"
                    }, null, 8, ["value", "indeterminate"]), Object(a["j"])("h5", w, Object(a["D"])(e.$t("dashboard.earningsManager")), 1)]
                }
                )),
                _: 1
            })]), r.addressValid ? (Object(a["w"])(),
            Object(a["g"])("div", x, [Object(a["j"])(c, {
                class: "col-12 col-lg-5 q-mb-sm q-py-md bg-purple-2 text-center",
                bordered: ""
            }, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])("div", D, [Object(a["j"])("div", M, [Object(a["j"])("h5", _, Object(a["D"])(e.$t("dashboard.yourHoldings")), 1), i.loading ? (Object(a["w"])(),
                    Object(a["g"])(d, {
                        key: 0,
                        size: "md"
                    })) : (Object(a["w"])(),
                    Object(a["g"])("span", C, Object(a["D"])(e.numeralFormat(r.holdings)), 1))]), Object(a["j"])("div", F, [Object(a["j"])(p, {
                        name: "fas fa-wallet",
                        size: "2.5rem"
                    })])])]
                }
                )),
                _: 1
            }), Object(a["j"])(c, {
                class: "col-12 col-lg-5 q-mb-sm q-mt-xs-sm q-mt-lg-none q-py-md bg-pink-3 text-center",
                bordered: ""
            }, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])("div", G, [Object(a["j"])("div", P, [Object(a["j"])("h5", q, Object(a["D"])(e.$t("dashboard.rewardsPaidToYou")), 1), i.loading ? (Object(a["w"])(),
                    Object(a["g"])(d, {
                        key: 0,
                        size: "md"
                    })) : (Object(a["w"])(),
                    Object(a["g"])("div", $, [Object(a["j"])("span", A, Object(a["D"])(r.totalDARAPaid), 1), Object(a["j"])("span", z, [Object(a["j"])("em", null, " (~" + Object(a["D"])("") + ")", 1)])]))]), Object(a["j"])("div", S, [Object(a["j"])(p, {
                        name: "fas fa-hand-holding-usd",
                        size: "2.5rem"
                    })])])]
                }
                )),
                _: 1
            }), Object(a["j"])(c, {
                class: "col-12 col-lg-5 q-mt-sm q-mb-xs-sm q-mb-lg-none bg-pink-3 text-center",
                bordered: ""
            }, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])("div", B, [Object(a["j"])("div", E, [Object(a["j"])("h5", I, Object(a["D"])(e.$t("dashboard.lastPayoutTime")), 1), i.loading ? (Object(a["w"])(),
                    Object(a["g"])(d, {
                        key: 0,
                        size: "md"
                    })) : (Object(a["w"])(),
                    Object(a["g"])("span", R, Object(a["D"])(r.lastPaidText), 1))]), Object(a["j"])("div", V, [Object(a["j"])(p, {
                        name: "fas fa-stopwatch",
                        size: "2.5rem"
                    })])])]
                }
                )),
                _: 1
            }), Object(a["j"])(c, {
                class: "col-12 col-lg-5 q-mt-sm bg-purple-2 text-center",
                bordered: ""
            }, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])("div", L, [Object(a["j"])("div", U, [Object(a["j"])("h5", Q, Object(a["D"])(e.$t("dashboard.pendingPayout")), 1), i.loading ? (Object(a["w"])(),
                    Object(a["g"])(d, {
                        key: 0,
                        size: "lg"
                    })) : (Object(a["w"])(),
                    Object(a["g"])(a["a"], {
                        key: 1
                    }, ["0.0" !== r.nextPayoutValue ? (Object(a["w"])(),
                    Object(a["g"])("div", W, [Object(a["j"])("span", H, Object(a["D"])(r.nextPayoutValue), 1), Object(a["j"])("span", K, [Object(a["j"])("em", null, " (~" + Object(a["D"])("") + ")", 1)])])) : (Object(a["w"])(),
                    Object(a["g"])("span", N, " Processing... ")), Object(a["j"])("span", Y, Object(a["D"])(r.pendingPayoutText), 1)], 64))]), Object(a["j"])("div", J, [Object(a["j"])(b, {
                        "show-value": "",
                        "font-size": "10px",
                        class: "q-ma-md",
                        value: r.pendingPayoutProgress,
                        "instant-feedback": "",
                        indeterminate: i.loading || "0.0" === r.nextPayoutValue || 0 === r.lastPaid,
                        size: "70px",
                        thickness: .15,
                        color: "pink-12",
                        "track-color": "grey-2"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(p, {
                                name: "fas fa-hourglass-half",
                                size: "2.5rem"
                            })]
                        }
                        )),
                        _: 1
                    }, 8, ["value", "indeterminate", "thickness"])])])]
                }
                )),
                _: 1
            })])) : (Object(a["w"])(),
            Object(a["g"])("div", X, [Object(a["j"])(c, {
                class: "bg-purple-2 full-width text-center"
            }, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])("h5", Z, Object(a["D"])(e.$t("dashboard.enterAddress")), 1)]
                }
                )),
                _: 1
            })])), Object(a["j"])("div", ee, [Object(a["j"])(c, {
                class: "bg-pink-2 full-width text-center"
            }, {
                default: Object(a["G"])((function() {
                    return [i.loading ? (Object(a["w"])(),
                    Object(a["g"])(a["a"], {
                        key: 0
                    }, [Object(a["j"])("h5", te, Object(a["D"])(e.$t("dashboard.calculatingDividends")), 1), Object(a["j"])(d, {
                        size: "xl"
                    })], 64)) : r.eligibleForDividends ? (Object(a["w"])(),
                    Object(a["g"])("h5", ie, Object(a["D"])(e.$t("dashboard.sufficientTokensForReward")), 1)) : (Object(a["w"])(),
                    Object(a["g"])(a["a"], {
                        key: 1
                    }, [Object(a["j"])("h5", ne, Object(a["D"])(e.$t("dashboard.insufficientTokensForReward")), 1), Object(a["j"])("h6", ae, [Object(a["j"])("em", null, Object(a["D"])(r.minimumAmountText), 1)])], 64))]
                }
                )),
                _: 1
            })]), Object(a["j"])("div", re, [Object(a["j"])(c, {
                class: "q-py-md bg-purple-2 full-width text-center"
            }, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])("h4", oe, Object(a["D"])(e.$t("dashboard.totalRewardsPaid")), 1), i.loading ? (Object(a["w"])(),
                    Object(a["g"])(m, {
                        key: 0,
                        size: "6em"
                    })) : (Object(a["w"])(),
                    Object(a["g"])(a["a"], {
                        key: 1
                    }, [Object(a["j"])("div", ue, [Object(a["j"])("h2", se, Object(a["D"])(e.numeralFormat(r.totalDistributed, "0,0.00")) + " " + Object(a["D"])(e.$t("rewardToken.symbol")), 1), Object(a["j"])("h4", le, [Object(a["j"])("em", null, " ~" + Object(a["D"])(""), 1)])]), Object(a["j"])("div", ce, [Object(a["j"])("h3", de, Object(a["D"])(e.numeralFormat(r.totalDistributed, "0,0.00")) + " " + Object(a["D"])(e.$t("rewardToken.symbol")), 1), Object(a["j"])("h5", pe, [Object(a["j"])("em", null, "" + Object(a["D"])(e.numeralFormat("")), 1)])])], 64))]
                }
                )),
                _: 1
            })])], 64)
        }
        n("b680"),
        n("25f0"),
        n("a9e3");
        var me = {
            contractAddress: "0xc22e8114818a918260662375450e19ac73d32852"
        }
          , ye = n("b8cd")
          , je = n("c6e5")
          , fe = function() {
            function e() {
                Object(O["a"])(this, e),
                this._provider = new h["a"].providers.JsonRpcProvider("https://bsc-dataseed3.ninicoin.io/"),
                this.router = new h["a"].Contract("0x10ED43C718714eb63d5aA57B78B54704E256024E",ye,this._provider),
                this.bnb = {
                    address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                    decimals: 18
                },
                this.CAKE = {
                    address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
                    decimals: 18
                },
                this.busd = {
                    address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                    decimals: 18
                },
                this.contract = new h["a"].Contract(me.contractAddress,je,this._provider),
                this.contractDecimals = 18
            }
            return Object(g["a"])(e, [{
                key: "getAmountsOut",
                value: function() {
                    var e = Object(f["a"])(regeneratorRuntime.mark((function e(t, n) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.abrupt("return", this.router.getAmountsOut(t, n, {
                                        gasLimit: 4e6
                                    }));
                                case 4:
                                    return e.prev = 4,
                                    e.t0 = e["catch"](0),
                                    e.abrupt("return", 0);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 4]])
                    }
                    )));
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getTokenPrice",
                value: function() {
                    var e = Object(f["a"])(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.getAmountsOut("$".concat(Math.pow(10, this.contractDecimals)), [this.contract.address, this.bnb.address, this.busd.address]);
                                case 3:
                                    return t = e.sent,
                                    e.abrupt("return", Number(null === t || void 0 === t ? void 0 : t[2].toString()) / Math.pow(10, this.busd.decimals));
                                case 7:
                                    return e.prev = 7,
                                    e.t0 = e["catch"](0),
                                    e.abrupt("return", 0);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 7]])
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getTokenPriceInBNB",
                value: function() {
                    var e = Object(f["a"])(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.getAmountsOut("".concat(Math.pow(10, this.contractDecimals)), [this.bnb.address, this.contract.address]);
                                case 3:
                                    return t = e.sent,
                                    e.abrupt("return", Number(null === t || void 0 === t ? void 0 : t[1].toString()) / Math.pow(10, this.bnb.decimals));
                                case 7:
                                    return e.prev = 7,
                                    e.t0 = e["catch"](0),
                                    e.abrupt("return", 0);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 7]])
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getDollarPerDARA",
                value: function() {
                    var e = Object(f["a"])(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.getAmountsOut("".concat(Math.pow(10, this.bnb.decimals)), [this.KCAKE.address, this.busd.address]);
                                case 3:
                                    return t = e.sent,
                                    e.abrupt("return", Number(null === t || void 0 === t ? void 0 : t[1].toString()) / Math.pow(10, this.busd.decimals));
                                case 7:
                                    return e.prev = 7,
                                    e.t0 = e["catch"](0),
                                    e.abrupt("return", 0);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 7]])
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getBNBPerDARA",
                value: function() {
                    var e = Object(f["a"])(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.getAmountsOut("".concat(Math.pow(10, this.bnb.decimals)), [this.KCAKE.address, this.bnb.address]);
                                case 3:
                                    return t = e.sent,
                                    e.abrupt("return", Number(null === t || void 0 === t ? void 0 : t[1].toString()) / Math.pow(10, this.bnb.decimals));
                                case 7:
                                    return e.prev = 7,
                                    e.t0 = e["catch"](0),
                                    e.abrupt("return", 0);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 7]])
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getDARAPerDollar",
                value: function() {
                    var e = Object(f["a"])(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.getAmountsOut("".concat(Math.pow(10, this.busd.decimals)), [this.busd.address, this.KCAKE.address]);
                                case 3:
                                    return t = e.sent,
                                    e.abrupt("return", Number(null === t || void 0 === t ? void 0 : t[1].toString()) / Math.pow(10, this.KCAKE.decimals));
                                case 7:
                                    return e.prev = 7,
                                    e.t0 = e["catch"](0),
                                    e.abrupt("return", 0);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 7]])
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getDividendsInfo",
                value: function() {
                    var e = Object(f["a"])(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.get().getAccountDividendsInfo(t);
                                case 2:
                                    return n = e.sent,
                                    e.abrupt("return", {
                                        account: parseInt(n[0]._hex, 16),
                                        index: parseInt(n[1]._hex, 16),
                                        iterations: parseInt(n[2]._hex, 16),
                                        withdrawableDividends: parseInt(n[3]._hex, 16),
                                        totalDividends: parseInt(n[4]._hex, 16),
                                        lastClaimTime: parseInt(n[5]._hex, 16),
                                        nextClaimTime: parseInt(n[6]._hex, 16),
                                        secondsUntilAutoClaim: parseInt(n[7]._hex, 16)
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "provider",
                value: function() {
                    return this._provider
                }
            }, {
                key: "decimals",
                value: function() {
                    return this.contractDecimals
                }
            }, {
                key: "get",
                value: function() {
                    return this.contract
                }
            }]),
            e
        }()
          , Oe = new fe
          , ge = n("6612")
          , he = n.n(ge)
          , ve = n("cffa")
          , Te = {
            name: "ContractContent",
            props: ["loading", "address"],
            emits: ["updateAddressInput", "updateLoading"],
            setup: function(e, t) {
                var n = t.emit
                  , r = !1
                  , o = Object(i["b"])()
                  , u = o.t
                  , s = !1
                  , l = Object(a["z"])(Date.now())
                  , c = Object(a["z"])(Date.now() + 15e3)
                  , d = Object(a["z"])(0)
                  , p = Object(a["z"])(0)
                  , b = Object(a["z"])("0.0")
                  , m = Object(a["z"])("0.0");
                Object(a["F"])(b, (function(e) {
                    ve["a"].to(m, {
                        duration: 1,
                        ease: "power4.out",
                        value: e,
                        onUpdate: function() {
                            m.value = parseFloat(m.value).toFixed(2)
                        }
                    })
                }
                ));
                var y = Object(a["z"])("0.0")
                  , j = Object(a["z"])(!1)
                  , O = Object(a["z"])(0)
                  , g = Object(a["z"])(0)
                  , T = Object(a["z"])(3600)
                  , k = Object(a["z"])(3600)
                  , w = Object(a["z"])(0)
                  , x = Object(a["z"])(0)
                  , D = Object(a["z"])(0)
                  , M = Object(a["e"])((function() {
                    return x.value <= D.value ? D.value - x.value : w.value - x.value + D.value
                }
                ))
                  , _ = Object(a["z"])(0);
                Object(a["F"])(M, (function(e) {
                    ve["a"].to(_, {
                        duration: 1,
                        ease: "power4.out",
                        value: e,
                        onUpdate: function() {
                            _.value = parseInt(_.value.toString())
                        }
                    })
                }
                ));
                var C = Object(a["z"])("0.0");
                Object(a["F"])(O, (function(e) {
                    var t = (e / 1e18).toFixed(4);
                    ve["a"].to(C, {
                        duration: 1,
                        ease: "power4.out",
                        value: t,
                        onUpdate: function() {
                            C.value = parseFloat(C.value).toFixed(4)
                        }
                    })
                }
                ));
                var F = Object(a["z"])("0.0")
                  , G = Object(a["z"])("0.0");
                Object(a["F"])(F, (function(e) {
                    ve["a"].to(G, {
                        duration: 1,
                        ease: "power4.out",
                        value: e,
                        onUpdate: function() {
                            G.value = parseFloat(G.value).toFixed(4)
                        }
                    })
                }
                ));
                var P = Object(a["e"])((function() {
                    return parseFloat((parseFloat(G.value) * d.value).toString()).toFixed(2)
                }
                ))
                  , q = Object(a["z"])("0.0");
                Object(a["F"])(P, (function(e) {
                    ve["a"].to(q, {
                        duration: 1,
                        ease: "power4.out",
                        value: e,
                        onUpdate: function() {
                            q.value = parseFloat(q.value).toFixed(2)
                        }
                    })
                }
                ));
                var $ = Object(a["z"])(v.validateToken(e.address))
                  , A = 2e5
                  , z = Object(a["e"])((function() {
                    var e = c.value - l.value
                      , t = 15e3
                      , n = 1 - e / t;
                    return n > 1.1 ? 0 : n
                }
                ))
                  , S = Object(a["e"])((function() {
                    return 0 === g.value ? "Never" : v.TimeDifference(l.value, g.value, u)
                }
                ))
                  , B = Object(a["e"])((function() {
                    var e = Math.min((l.value - g.value) / 6e4 / 60 * 100, 100);
                    return e < 100 ? e : 100 - M.value / w.value * 100
                }
                ))
                  , E = Object(a["e"])((function() {
                    return k.value > 0 ? u("dashboard.pendingPayoutTime", {
                        minuteValue: Math.max(1, k.value / 60).toFixed(0)
                    }) : u("dashboard.positionInQueue", {
                        posValue: _.value
                    })
                }
                ))
                  , I = Object(a["e"])((function() {
                    return parseFloat((O.value / 1e18 * d.value).toString()).toFixed(2)
                }
                ))
                  , R = Object(a["z"])("0.0");
                Object(a["F"])(I, (function(e) {
                    ve["a"].to(R, {
                        duration: 1,
                        ease: "power4.out",
                        value: e,
                        onUpdate: function() {
                            R.value = parseFloat(R.value).toFixed(2)
                        }
                    })
                }
                ));
                var V = Object(a["z"])("0.0")
                  , L = Object(a["z"])("0.0");
                Object(a["F"])(V, (function(e) {
                    ve["a"].to(L, {
                        duration: 1,
                        ease: "power4.out",
                        value: e,
                        onUpdate: function() {
                            L.value = parseFloat(L.value).toFixed(2)
                        }
                    })
                }
                ));
                var U = Object(a["e"])((function() {
                    return parseFloat((L.value * d.value).toString()).toFixed(2)
                }
                ))
                  , Q = Object(a["z"])("0.0");
                Object(a["F"])(U, (function(e) {
                    ve["a"].to(Q, {
                        duration: 1,
                        ease: "power4.out",
                        value: e,
                        onUpdate: function() {
                            Q.value = parseFloat(Q.value).toFixed(2)
                        }
                    })
                }
                ));
                var W = Object(a["e"])((function() {
                    var e = A - m.value;
                    return u("dashboard.unmetBalance", {
                        minTokensForReward: "200,000,000",
                        missingTokensForReward: ""
                    })
                }
                ));
                function H() {
                    return K.apply(this, arguments)
                }
                function K() {
                    return K = Object(f["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, r, o, u, s, l, c, d, p, m, y = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return a = !(y.length > 0 && void 0 !== y[0]) || y[0],
                                    i = e.address,
                                    $.value = v.validateToken(i),
                                    a && (n("updateLoading", !0),
                                    n("updateAddressInput", !1)),
                                    r = Oe.get(),
                                    t.next = 7,
                                    r.getTotalDividendsDistributed();
                                case 7:
                                    if (o = t.sent,
                                    !$.value) {
                                        t.next = 42;
                                        break
                                    }
                                    return t.t0 = parseInt,
                                    t.next = 12,
                                    r.getNumberOfDividendTokenHolders();
                                case 12:
                                    return t.t1 = t.sent._hex,
                                    w.value = (0,
                                    t.t0)(t.t1, 16),
                                    t.t2 = parseInt,
                                    t.next = 17,
                                    r.getLastProcessedIndex();
                                case 17:
                                    return t.t3 = t.sent._hex,
                                    x.value = (0,
                                    t.t2)(t.t3, 16),
                                    t.next = 21,
                                    r.balanceOf(i);
                                case 21:
                                    return u = t.sent,
                                    t.next = 24,
                                    Oe.getDividendsInfo(i);
                                case 24:
                                    return s = t.sent,
                                    l = s.index,
                                    c = s.withdrawableDividends,
                                    d = s.totalDividends,
                                    p = s.lastClaimTime,
                                    m = s.secondsUntilAutoClaim,
                                    D.value = l,
                                    t.t4 = parseInt,
                                    t.next = 34,
                                    r.getClaimWait();
                                case 34:
                                    t.t5 = t.sent._hex,
                                    T.value = (0,
                                    t.t4)(t.t5, 16),
                                    k.value = m,
                                    b.value = (u / 1e18).toFixed(0),
                                    j.value = u.gte(h["a"].utils.parseUnits("200000", Oe.decimals())),
                                    O.value = d - c,
                                    g.value = 1e3 * p,
                                    F.value = (c / 1e18).toFixed(4);
                                case 42:
                                    V.value = parseFloat(h["a"].utils.formatUnits(o.toString())).toFixed(2),
                                    n("updateLoading", !1),
                                    n("updateAddressInput", !0);
                                case 45:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))),
                    K.apply(this, arguments)
                }
                function N() {
                    return Y.apply(this, arguments)
                }
                function Y() {
                    return Y = Object(f["a"])(regeneratorRuntime.mark((function e() {
                        var t, n = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] && n[0],
                                    clearTimeout(r),
                                    clearInterval(s),
                                    c.value = 0,
                                    Oe.getDollarPerDARA().then((function(e) {
                                        return d.value = e
                                    }
                                    )),
                                    Oe.getTokenPrice().then((function(e) {
                                        return p.value = e
                                    }
                                    )),
                                    e.next = 8,
                                    H(t);
                                case 8:
                                    r = setTimeout((function() {
                                        return N()
                                    }
                                    ), 15e3),
                                    s = setInterval((function() {
                                        return l.value = Date.now()
                                    }
                                    ), 10),
                                    c.value = Date.now() + 15e3;
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))),
                    Y.apply(this, arguments)
                }
                return {
                    reloadProgress: z,
                    holdings: m,
                    minBalanceForDividends: y,
                    eligibleForDividends: j,
                    paid: O,
                    lastPaid: g,
                    nextPayoutValue: G,
                    totalDistributed: L,
                    claimWait: T,
                    secondsUntilAutoClaim: k,
                    bnbPrice: d,
                    tokenPrice: p,
                    addressValid: $,
                    minimumAmountText: W,
                    lastPaidText: S,
                    pendingPayoutText: E,
                    nextPayoutInDollars: q,
                    totalDARAPaid: C,
                    totalDARAPaidInDollars: R,
                    pendingPayoutProgress: B,
                    totalDistributedDollar: Q,
                    updatePrices: N
                }
            }
        }
          , ke = n("068f")
          , we = n("f09f")
          , xe = n("6b1d")
          , De = n("8380")
          , Me = n("0016")
          , _e = n("58ea")
          , Ce = n("9149")
          , Fe = n("93dc")
          , Ge = n.n(Fe);
        Te.render = be;
        var Pe = Te;
        Ge()(Te, "components", {
            QImg: ke["a"],
            QCard: we["a"],
            QLinearProgress: xe["a"],
            QSpinnerKCAKEs: De["a"],
            QIcon: Me["a"],
            QCircularProgress: _e["a"],
            QSpinnerHourglass: Ce["a"]
        });
        var qe = {
            class: "col"
        }
          , $e = Object(a["j"])("iframe", {
            src: "https://flappyDARA.vercel.app/",
            style: {
                width: "100%",
                height: "100%"
            }
        }, null, -1);
        function Ae(e, t, n, i, r, o) {
            var u = Object(a["B"])("q-item-label")
              , s = Object(a["B"])("q-icon")
              , l = Object(a["B"])("q-item-section")
              , c = Object(a["B"])("q-select")
              , d = Object(a["B"])("q-item")
              , p = Object(a["B"])("q-separator")
              , b = Object(a["B"])("q-expansion-item")
              , m = Object(a["B"])("q-skeleton")
              , y = Object(a["B"])("q-list")
              , j = Object(a["B"])("Roadmap")
              , f = Object(a["B"])("q-card")
              , O = Object(a["B"])("q-dialog")
              , g = Object(a["B"])("Calculator")
              , h = Object(a["B"])("q-responsive");
            return Object(a["w"])(),
            Object(a["g"])(a["a"], null, [Object(a["j"])(y, null, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])(u, {
                        header: ""
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.languages.header")), 1)]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(d, null, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fas fa-globe"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])("div", qe, [Object(a["j"])(c, {
                                modelValue: i.locale,
                                "onUpdate:modelValue": t[1] || (t[1] = function(e) {
                                    return i.locale = e
                                }
                                ),
                                options: i.localeOptions,
                                dense: "",
                                outlined: "",
                                "emit-value": "",
                                "map-options": "",
                                "options-dense": "",
                                "bg-color": "white"
                            }, null, 8, ["modelValue", "options"])])]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(u, {
                        header: ""
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.socials.header")), 1)]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(d, {
                        clickable: "",
                        tag: "a",
                        target: "_blank",
                        rel: "noopener",
                        href: e.$t("drawer.socials.telegram.url")
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fab fa-telegram-plane"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(l, null, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.socials.telegram.label")), 1)]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.socials.telegram.caption")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }, 8, ["href"]), Object(a["j"])(d, {
                        clickable: "",
                        tag: "a",
                        target: "_blank",
                        rel: "noopener",
                        href: "https://twitter.com/KCAKE"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a[""])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fab fa-twitter"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(l, null, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.socials.twitter.label")), 1)]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.socials.twitter.caption")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(d, {
                        clickable: "",
                        tag: "a",
                        target: "_blank",
                        rel: "noopener",
                        href: "https://instagram.com/KCAKEcoin"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a[""])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fab fa-instagram"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(l, null, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.socials.instagram.label")), 1)]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.socials.instagram.caption")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(d, {
                        clickable: "",
                        tag: "a",
                        rel: "noopener",
                        href: "mailto:info@KCAKE.app"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a[""])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fas fa-envelope"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(l, null, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.socials.emailUs.label")), 1)]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.socials.emailUs.caption")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(p), Object(a["j"])(u, {
                        header: ""
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.header")), 1)]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(b, {
                        "content-inset-level": 1,
                        icon: "fas fa-file-contract",
                        label: e.$t("drawer.smartContract.contractMenu.label"),
                        caption: e.$t("drawer.smartContract.contractMenu.caption"),
                        "default-closed": ""
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(d, {
                                clickable: "",
                                tag: "a",
                                target: "_blank",
                                rel: "noopener",
                                href: "https://dessertswap.finance/audits/KCAKE%20BEP-20%20Audit%209445619.pdf"
                            }, {
                                default: Object(a["G"])((function() {
                                    return [Object(a[""])(l, {
                                        avatar: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(s, {
                                                name: "fas fa-clipboard-check"
                                            })]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(l, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(u, null, {
                                                default: Object(a["G"])((function() {
                                                    return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.dessertFinance.label")), 1)]
                                                }
                                                )),
                                                _: 1
                                            }), Object(a["j"])(u, {
                                                caption: ""
                                            }, {
                                                default: Object(a["G"])((function() {
                                                    return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.dessertFinance.caption")), 1)]
                                                }
                                                )),
                                                _: 1
                                            })]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(d, {
                                clickable: "",
                                tag: "a",
                                target: "_blank",
                                rel: "noopener",
                                href: "https://bscscan.com/token/".concat(i.contractAddress)
                            }, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(l, {
                                        avatar: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(s, {
                                                name: "fas fa-file-alt"
                                            })]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(l, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(u, null, {
                                                default: Object(a["G"])((function() {
                                                    return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.bscscan.label")), 1)]
                                                }
                                                )),
                                                _: 1
                                            }), Object(a["j"])(u, {
                                                caption: ""
                                            }, {
                                                default: Object(a["G"])((function() {
                                                    return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.bscscan.caption")), 1)]
                                                }
                                                )),
                                                _: 1
                                            })]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            }, 8, ["href"])]
                        }
                        )),
                        _: 1
                    }, 8, ["label", "caption"]), Object(a["j"])(b, {
                        "content-inset-level": 1,
                        icon: "fas fa-chart-line",
                        label: e.$t("drawer.smartContract.chartsMenu.label"),
                        caption: e.$t("drawer.smartContract.chartsMenu.caption"),
                        "default-closed": ""
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(d, {
                                clickable: "",
                                tag: "a",
                                target: "_blank",
                                rel: "noopener",
                                href: "#"
                            }, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(l, {
                                        avatar: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(s, {
                                                name: "fas fa-chart-area"
                                            })]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(l, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(u, null, {
                                                default: Object(a["G"])((function() {
                                                    return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.dextools.label")), 1)]
                                                }
                                                )),
                                                _: 1
                                            }), Object(a["j"])(u, {
                                                caption: ""
                                            }, {
                                                default: Object(a["G"])((function() {
                                                    return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.dextools.caption")), 1)]
                                                }
                                                )),
                                                _: 1
                                            })]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(d, {
                                clickable: "",
                                tag: "a",
                                target: "_blank",
                                rel: "noopener",
                                href: "https://poocoin.app/tokens/".concat(i.contractAddress)
                            }, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(l, {
                                        avatar: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(s, {
                                                name: "fas fa-poo"
                                            })]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(l, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(u, null, {
                                                default: Object(a["G"])((function() {
                                                    return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.poocoin.label")), 1)]
                                                }
                                                )),
                                                _: 1
                                            }), Object(a["j"])(u, {
                                                caption: ""
                                            }, {
                                                default: Object(a["G"])((function() {
                                                    return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.poocoin.caption")), 1)]
                                                }
                                                )),
                                                _: 1
                                            })]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            }, 8, ["href"])]
                        }
                        )),
                        _: 1
                    }, 8, ["label", "caption"]), Object(a["j"])(d, {
                        clickable: "",
                        tag: "a",
                        target: "_blank",
                        rel: "noopener",
                        href: "https://exchange.Pancakeswap.finance/#/swap?outputCurrency=".concat(i.contractAddress)
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fas fa-exchange-alt"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(l, null, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.Pancakeswap.label")), 1)]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.Pancakeswap.caption")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }, 8, ["href"]), Object(a["j"])(d, {
                        clickable: "",
                        onClick: t[2] || (t[2] = function(e) {
                            return i.roadmap = !0
                        }
                        )
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a[""])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fas fa-calendar-alt"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(l, null, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.roadmap.label")), 1)]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.roadmap.caption")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(d, {
                        clickable: "",
                        onClick: t[3] || (t[3] = function(e) {
                            return i.calculator = !0
                        }
                        )
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a[""])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fas fa-calculator"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(l, null, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.calculator.label")), 1)]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.smartContract.calculator.caption")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(d, {
                        clickable: "",
                        onClick: t[4] || (t[4] = function(e) {
                            return i.game = !0
                        }
                        )
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a[""])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fas fa-gamepad"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(l, null, {
                                default: Object(a["G"])((function() {
                                    return [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.flappyDARA.label")), 1)]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.flappyDARA.caption")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(p), Object(a["j"])(u, {
                        header: ""
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a[""])(Object(a["D"])(e.$t("drawer.tokenomics.header")), 1)]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(d, null, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a[""])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fas fa-sync"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(l, null, {
                                default: Object(a["G"])((function() {
                                    return [i.feesLoading ? (Object(a["w"])(),
                                    Object(a["g"])(a["a"], {
                                        key: 0
                                    }, [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(m, {
                                                type: "text"
                                            })]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(m, {
                                                type: "text"
                                            })]
                                        }
                                        )),
                                        _: 1
                                    })], 64)) : (Object(a["w"])(),
                                    Object(a["g"])(a["a"], {
                                        key: 1
                                    }, [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.tokenomics.redistribution.label", {
                                                fee: i.redistributionFee
                                            })), 1)]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.tokenomics.redistribution.caption")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })], 64))]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(d, null, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a[""])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fas fa-water"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(l, null, {
                                default: Object(a["G"])((function() {
                                    return [i.feesLoading ? (Object(a["w"])(),
                                    Object(a["g"])(a["a"], {
                                        key: 0
                                    }, [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(m, {
                                                type: "text"
                                            })]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(m, {
                                                type: "text"
                                            })]
                                        }
                                        )),
                                        _: 1
                                    })], 64)) : (Object(a["w"])(),
                                    Object(a["g"])(a["a"], {
                                        key: 1
                                    }, [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.tokenomics.liquidity.label", {
                                                fee: i.liquidityFee
                                            })), 1)]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.tokenomics.liquidity.caption")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })], 64))]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(d, null, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a[""])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fas fa-bullhorn"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(l, null, {
                                default: Object(a["G"])((function() {
                                    return [i.feesLoading ? (Object(a["w"])(),
                                    Object(a["g"])(a["a"], {
                                        key: 0
                                    }, [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(m, {
                                                type: "text"
                                            })]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(m, {
                                                type: "text"
                                            })]
                                        }
                                        )),
                                        _: 1
                                    })], 64)) : (Object(a["w"])(),
                                    Object(a["g"])(a["a"], {
                                        key: 1
                                    }, [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.tokenomics.marketing.label", {
                                                fee: i.marketingFee
                                            })), 1)]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.tokenomics.marketing.caption")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })], 64))]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(d, null, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(l, {
                                avatar: ""
                            }, {
                                default: Object(a[""])((function() {
                                    return [Object(a["j"])(s, {
                                        name: "fas fa-comment-dollar"
                                    })]
                                }
                                )),
                                _: 1
                            }), Object(a["j"])(l, null, {
                                default: Object(a["G"])((function() {
                                    return [i.feesLoading ? (Object(a["w"])(),
                                    Object(a["g"])(a["a"], {
                                        key: 0
                                    }, [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(m, {
                                                type: "text"
                                            })]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["j"])(m, {
                                                type: "text"
                                            })]
                                        }
                                        )),
                                        _: 1
                                    })], 64)) : (Object(a["w"])(),
                                    Object(a["g"])(a["a"], {
                                        key: 1
                                    }, [Object(a["j"])(u, null, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.tokenomics.sell.label")), 1)]
                                        }
                                        )),
                                        _: 1
                                    }), Object(a["j"])(u, {
                                        caption: ""
                                    }, {
                                        default: Object(a["G"])((function() {
                                            return [Object(a["i"])(Object(a["D"])(e.$t("drawer.tokenomics.sell.caption")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })], 64))]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    })]
                }
                )),
                _: 1
            }), Object(a["j"])(O, {
                modelValue: i.roadmap,
                "onUpdate:modelValue": t[5] || (t[5] = function(e) {
                    return i.roadmap = e
                }
                )
            }, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])(f, {
                        class: "q-px-lg q-pa-md",
                        style: {
                            width: "1000px",
                            "max-width": "80vw"
                        }
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(j)]
                        }
                        )),
                        _: 1
                    })]
                }
                )),
                _: 1
            }, 8, ["modelValue"]), Object(a["j"])(O, {
                modelValue: i.calculator,
                "onUpdate:modelValue": t[6] || (t[6] = function(e) {
                    return i.calculator = e
                }
                )
            }, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])(f, {
                        class: "q-px-lg q-pa-md",
                        style: {
                            width: "500px",
                            "max-width": "80vw"
                        }
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(g, {
                                ref: "calculatorRef",
                                "redistribution-fee": i.redistributionFee
                            }, null, 8, ["redistribution-fee"])]
                        }
                        )),
                        _: 1
                    })]
                }
                )),
                _: 1
            }, 8, ["modelValue"]), Object(a["j"])(O, {
                modelValue: i.game,
                "onUpdate:modelValue": t[7] || (t[7] = function(e) {
                    return i.game = e
                }
                )
            }, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])(h, {
                        ratio: 800 / 600,
                        class: "game"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])(f, null, {
                                default: Object(a["G"])((function() {
                                    return [$e]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    })]
                }
                )),
                _: 1
            }, 8, ["modelValue"])], 64)
        }
        n("1276");
        var ze = n("b05d")
          , Se = Object(a["i"])(" KCAKE Roadmap ")
          , Be = Object(a["j"])("br", null, null, -1)
          , Ee = Object(a["j"])("br", null, null, -1)
          , Ie = Object(a["j"])("br", null, null, -1)
          , Re = Object(a["j"])("br", null, null, -1)
          , Ve = Object(a["j"])("br", null, null, -1)
          , Le = Object(a["j"])("br", null, null, -1)
          , Ue = Object(a["j"])("br", null, null, -1)
          , Qe = Object(a["j"])("br", null, null, -1)
          , We = Object(a["j"])("br", null, null, -1)
          , He = Object(a["j"])("br", null, null, -1)
          , Ke = Object(a["j"])("br", null, null, -1)
          , Ne = Object(a["j"])("br", null, null, -1)
          , Ye = Object(a["j"])("br", null, null, -1)
          , Je = Object(a["j"])("br", null, null, -1)
          , Xe = Object(a["j"])("br", null, null, -1)
          , Ze = Object(a["j"])("br", null, null, -1)
          , et = Object(a["j"])("br", null, null, -1)
          , tt = Object(a["j"])("br", null, null, -1)
          , nt = Object(a["j"])("br", null, null, -1);
        function at(e, t, n, i, r, o) {
            var u = Object(a["B"])("q-timeline-entry")
              , s = Object(a["B"])("q-timeline");
            return Object(a["w"])(),
            Object(a["g"])(s, {
                layout: "comfortable",
                color: "secondary"
            }, {
                default: Object(a["G"])((function() {
                    return [Object(a["j"])(u, {
                        heading: ""
                    }, {
                        default: Object(a["G"])((function() {
                            return [Se]
                        }
                        )),
                        _: 1
                    }), Object(a["j"])(u, {
                        title: e.$t("roadmap.prelaunchTechnical.heading"),
                        subtitle: "Q3 2021"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])("div", null, [Object(a["i"])(Object(a["D"])(e.$t("general.status.done")) + " " + Object(a["D"])(e.$t("roadmap.prelaunchTechnical.websiteAndDashboard")) + " ", 1), Be, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.done")) + " " + Object(a["D"])(e.$t("roadmap.prelaunchTechnical.telegramTracker")) + " ", 1), Ee, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.done")) + " " + Object(a["D"])(e.$t("roadmap.prelaunchTechnical.contractTestnet")) + " ", 1), Ie, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.done")) + " " + Object(a["D"])(e.$t("roadmap.prelaunchTechnical.contractMainnet")) + " ", 1), Re, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.done")) + " " + Object(a["D"])(e.$t("roadmap.prelaunchTechnical.finalizeTokenomics")) + " ", 1), Ve, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.done")) + " " + Object(a["D"])(e.$t("roadmap.prelaunchTechnical.audit")), 1)])]
                        }
                        )),
                        _: 1
                    }, 8, ["title"]), Object(a["j"])(u, {
                        title: e.$t("roadmap.prelaunchMarketing.heading"),
                        subtitle: "Q3 2021"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])("div", null, [Object(a["i"])(Object(a["D"])(e.$t("general.status.done")) + " " + Object(a["D"])(e.$t("roadmap.prelaunchMarketing.initPush")) + " ", 1), Le, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.done")) + " " + Object(a["D"])(e.$t("roadmap.prelaunchMarketing.comp")) + " ", 1), Ue, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.done")) + " " + Object(a["D"])(e.$t("roadmap.prelaunchMarketing.campaign")), 1)])]
                        }
                        )),
                        _: 1
                    }, 8, ["title"]), Object(a["j"])(u, {
                        title: e.$t("roadmap.launch.heading"),
                        subtitle: "Q3 2021"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])("div", null, [Object(a["i"])(Object(a["D"])(e.$t("general.status.done")) + " " + Object(a["D"])(e.$t("roadmap.launch.time")) + " ", 1), Qe, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.done")) + " " + Object(a["D"])(e.$t("roadmap.launch.rewards")), 1)])]
                        }
                        )),
                        _: 1
                    }, 8, ["title"]), Object(a["j"])(u, {
                        title: e.$t("roadmap.postlaunch.heading"),
                        subtitle: "Q3 2021"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])("div", null, [Object(a["i"])(Object(a["D"])(e.$t("general.status.prog")) + " " + Object(a["D"])(e.$t("roadmap.postlaunch.morePromo")) + " ", 1), We, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.prog")) + " " + Object(a["D"])(e.$t("roadmap.postlaunch.celeb")) + " ", 1), He, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.pend")) + " " + Object(a["D"])(e.$t("roadmap.postlaunch.comp")) + " ", 1), Ke, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.pend")) + " " + Object(a["D"])(e.$t("roadmap.postlaunch.vid")) + " ", 1), Ne, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.pend")) + " " + Object(a["D"])(e.$t("roadmap.postlaunch.agency")) + " ", 1), Ye, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.pend")) + " " + Object(a["D"])(e.$t("roadmap.postlaunch.dextools")) + " ", 1), Je, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.prog")) + " " + Object(a["D"])(e.$t("roadmap.postlaunch.explorers")), 1)])]
                        }
                        )),
                        _: 1
                    }, 8, ["title"]), Object(a["j"])(u, {
                        title: e.$t("roadmap.shortterm.heading"),
                        subtitle: "Q3 2021"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])("div", null, [Object(a["i"])(Object(a["D"])(e.$t("general.status.prog")) + " " + Object(a["D"])(e.$t("roadmap.shortterm.burn")) + " ", 1), Xe, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.prog")) + " " + Object(a["D"])(e.$t("roadmap.shortterm.intl")) + " ", 1), Ze, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.pend")) + " " + Object(a["D"])(e.$t("roadmap.shortterm.staking")), 1)])]
                        }
                        )),
                        _: 1
                    }, 8, ["title"]), Object(a["j"])(u, {
                        title: e.$t("roadmap.midterm.heading"),
                        subtitle: "Q4 2021"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])("div", null, [Object(a["i"])(Object(a["D"])(e.$t("general.status.pend")) + " " + Object(a["D"])(e.$t("roadmap.midterm.charity")) + " ", 1), et, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.pend")) + " " + Object(a["D"])(e.$t("roadmap.midterm.other")) + " ", 1), tt, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.pend")) + " " + Object(a["D"])(e.$t("roadmap.midterm.crosschain")) + " ", 1), nt, Object(a["i"])(" " + Object(a["D"])(e.$t("general.status.pend")) + " " + Object(a["D"])(e.$t("roadmap.midterm.nft")), 1)])]
                        }
                        )),
                        _: 1
                    }, 8, ["title"]), Object(a["j"])(u, {
                        title: e.$t("roadmap.longterm.heading"),
                        subtitle: "Q5 2021"
                    }, {
                        default: Object(a["G"])((function() {
                            return [Object(a["j"])("div", null, Object(a["D"])(e.$t("general.status.pend")) + " " + Object(a["D"])(e.$t("roadmap.longterm.cex")), 1)]
                        }
                        )),
                        _: 1
                    }, 8, ["title"])]
                }
                )),
                _: 1
            })
        }
        var it = {
            name: "Roadmap"
        }
          , rt = n("05eb")
          , ot = n("74af");
        it.render = at;
        var ut = it;
        Ge()(it, "components", {
            QTimeline: rt["a"],
            QTimelineEntry: ot["a"]
        });
        var st = {
            class: "row items-center justify-center text-center"
        }
          , lt = {
            class: "text-h4"
        }
          , ct = {
            class: "text-h6 text-grey-8"
        }
          , dt = {
            class: "col-12 q-my-sm"
        }
          , pt = {
            class: "col-12 q-mb-lg"
        }
          , bt = {
            class: "col-12 q-my-sm"
        }
          , mt = {
            class: "col-12 q-my-sm"
        }
          , yt = {
            class: "col-12 q-my-sm"
        }
          , jt = {
            class: "col-12 q-my-sm"
        }
          , ft = {
            class: "col-12 q-my-sm"
        };
        function Ot(e, t, n, i, r, o) {
            var u = Object(a["B"])("q-input")
              , s = Object(a["B"])("q-icon")
              , l = (Object(a["B"])("q-radio"),
            Object(a["B"])("q-skeleton"));
            return Object(a["w"])(),
            Object(a["g"])("div", st, [Object(a["j"])("p", lt, Object(a["D"])(e.$t("calculator.title")), 1), Object(a["j"])("p", ct, [Object(a["j"])("em", null, Object(a["D"])(e.$t("calculator.disclaimer")), 1)]), Object(a["j"])("div", dt, [Object(a["j"])(u, {
                filled: "",
                modelValue: i.bnbInput,
                "onUpdate:modelValue": t[1] || (t[1] = function(e) {
                    return i.bnbInput = e
                }
                ),
                modelModifiers: {
                    number: !0
                },
                type: "number",
                rules: i.rules,
                suffix: "BNB",
                label: e.$t("calculator.amount"),
                "bg-color": "pink-1"
            }, null, 8, ["modelValue", "rules", "label"])]), Object(a["j"])("div", pt, [Object(a["j"])(s, {
                name: "fas fa-angle-double-down",
                size: "2.5rem"
            })]), Object(a["h"])("", !0), i.valuesLoading ? (Object(a["w"])(),
            Object(a["g"])(a["a"], {
                key: 1
            }, Object(a["A"])(5, (function(e) {
                return Object(a["j"])("div", {
                    key: e,
                    class: "col-12 q-my-sm"
                }, [Object(a["j"])(l, {
                    type: "QInput"
                })])
            }
            )), 64)) : (Object(a["w"])(),
            Object(a["g"])(a["a"], {
                key: 2
            }, [Object(a["j"])("div", bt, [Object(a["j"])(u, {
                filled: "",
                readonly: "",
                modelValue: i.tokenOutput,
                "onUpdate:modelValue": t[5] || (t[5] = function(e) {
                    return i.tokenOutput = e
                }
                ),
                modelModifiers: {
                    number: !0
                },
                suffix: e.$t("token.symbol"),
                label: e.$t("calculator.amount"),
                "bg-color": "pink-1"
            }, null, 8, ["modelValue", "suffix", "label"])]), Object(a["j"])("div", mt, [Object(a["j"])(u, {
                filled: "",
                readonly: "",
                modelValue: i.outputDay,
                "onUpdate:modelValue": t[6] || (t[6] = function(e) {
                    return i.outputDay = e
                }
                ),
                suffix: e.$t("rewardToken.symbol"),
                label: e.$t("calculator.perDay"),
                "bg-color": "pink-1"
            }, null, 8, ["modelValue", "suffix", "label"])]), Object(a["j"])("div", yt, [Object(a["j"])(u, {
                filled: "",
                readonly: "",
                modelValue: i.outputWeek,
                "onUpdate:modelValue": t[7] || (t[7] = function(e) {
                    return i.outputWeek = e
                }
                ),
                suffix: e.$t("rewardToken.symbol"),
                label: e.$t("calculator.perWeek"),
                "bg-color": "pink-1"
            }, null, 8, ["modelValue", "suffix", "label"])]), Object(a["j"])("div", jt, [Object(a["j"])(u, {
                filled: "",
                readonly: "",
                modelValue: i.outputMonth,
                "onUpdate:modelValue": t[8] || (t[8] = function(e) {
                    return i.outputMonth = e
                }
                ),
                suffix: e.$t("rewardToken.symbol"),
                label: e.$t("calculator.perMonth"),
                "bg-color": "pink-1"
            }, null, 8, ["modelValue", "suffix", "label"])]), Object(a["j"])("div", ft, [Object(a["j"])(u, {
                filled: "",
                readonly: "",
                modelValue: i.outputYear,
                "onUpdate:modelValue": t[9] || (t[9] = function(e) {
                    return i.outputYear = e
                }
                ),
                suffix: e.$t("rewardToken.symbol"),
                label: e.$t("calculator.perYear"),
                "bg-color": "pink-1"
            }, null, 8, ["modelValue", "suffix", "label"])])], 64))])
        }
        var gt = {
            name: "Calculator",
            props: ["redistributionFee"],
            setup: function(e) {
                var t, n = Object(a["z"])(1), i = Object(a["z"])(0), r = Object(a["z"])(0), o = Object(a["z"])(0), u = Object(a["z"])(0), s = Object(a["z"])(0), l = Object(a["z"])("KCAKE"), c = Object(a["z"])(!1);
                function d() {
                    return p.apply(this, arguments)
                }
                function p() {
                    return p = Object(f["a"])(regeneratorRuntime.mark((function e() {
                        var t, n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    fetch("https://api.coingecko.com/api/v3/coins/KCAKE");
                                case 2:
                                    return t = e.sent,
                                    e.next = 5,
                                    t.json();
                                case 5:
                                    return n = e.sent,
                                    e.abrupt("return", n.market_data.total_volume.usd);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))),
                    p.apply(this, arguments)
                }
                function b() {
                    return m.apply(this, arguments)
                }
                function m() {
                    return m = Object(f["a"])(regeneratorRuntime.mark((function e() {
                        var n, a = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = a.length > 0 && void 0 !== a[0] && a[0],
                                    n && (c.value = !0),
                                    e.next = 4,
                                    Oe.getTokenPriceInBNB();
                                case 4:
                                    return i.value = e.sent,
                                    e.next = 7,
                                    Oe.getDollarPerDARA();
                                case 7:
                                    return r.value = e.sent,
                                    e.next = 10,
                                    Oe.getBNBPerDARA();
                                case 10:
                                    return o.value = e.sent,
                                    e.next = 13,
                                    Oe.getDARAPerDollar();
                                case 13:
                                    return u.value = e.sent,
                                    e.next = 16,
                                    d();
                                case 16:
                                    s.value = e.sent,
                                    c.value = !1,
                                    clearTimeout(t),
                                    t = setTimeout((function() {
                                        return b()
                                    }
                                    ), 15e3);
                                case 20:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))),
                    m.apply(this, arguments)
                }
                b(!0);
                var y = 1e11
                  , j = Object(a["z"])([function(e) {
                    return e > 0 || "Needs to be more than 0!"
                }
                , function(e) {
                    return e <= 5e3 || "Needs to be less than 5,000!"
                }
                ])
                  , O = Object(a["e"])((function() {
                    return n.value * i.value
                }
                ))
                  , g = Object(a["e"])((function() {
                    return he()(O.value).format("0,0.0000")
                }
                ))
                  , h = Object(a["e"])((function() {
                    return "bnb" === l.value ? o.value : "usd" === l.value ? r.value : 1
                }
                ))
                  , v = Object(a["e"])((function() {
                    return he()(x(!1, O.value, 1)).format("0,0.0000")
                }
                ))
                  , T = Object(a["e"])((function() {
                    return he()(x(!1, O.value, 7)).format("0,0.0000")
                }
                ))
                  , k = Object(a["e"])((function() {
                    return he()(x(!1, O.value, 30)).format("0,0.0000")
                }
                ))
                  , w = Object(a["e"])((function() {
                    return he()(x(!1, O.value, 360)).format("0,0.0000")
                }
                ));
                function x(t, n) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                      , i = e.redistributionFee;
                    return t = t || i,
                    n = n || O.value,
                    -1 === t || isNaN(n) || n < 2e5 || n >= y ? "0" : s.value * (t / 100) * (n / y) * a * u.value * h.value
                }
                function D(e) {
                    x(e)
                }
                return x(),
                {
                    rules: j,
                    valuesLoading: c,
                    bnbInput: n,
                    outputCurrency: l,
                    tokenOutput: g,
                    outputDay: v,
                    outputWeek: T,
                    outputMonth: k,
                    outputYear: w,
                    updateRedistributionFee: D
                }
            }
        }
          , ht = n("27f9")
          , vt = n("3786")
          , Tt = n("293e");
        gt.render = Ot;
        var kt = gt;
        Ge()(gt, "components", {
            QInput: ht["a"],
            QIcon: Me["a"],
            QRadio: vt["a"],
            QSkeleton: Tt["a"]
        });
        var wt = {
            name: "Drawer",
            components: {
                Roadmap: ut,
                Calculator: kt
            },
            setup: function() {
                var e = Object(a["z"])(!1)
                  , t = Object(a["z"])(!1)
                  , n = Object(a["z"])(!1)
                  , r = Object(a["z"])(!1)
                  , o = Object(i["b"])({
                    useScope: "global"
                })
                  , u = o.locale
                  , s = [{
                    value: "en",
                    label: "English"
                }, {
                    value: "de",
                    label: "Deutsch"
                }, {
                    value: "zh",
                    label: "中文"
                }, {
                    value: "es",
                    label: "Español"
                }]
                  , l = Object(a["z"])(me.contractAddress);
                function c() {
                    var e, t = localStorage.getItem("locale");
                    e = t && "" !== t ? t : ze["a"].lang.getLocale().split("-")[0];
                    for (var n = !1, a = 0, i = s; a < i.length; a++) {
                        var r = i[a];
                        if (e === r.value) {
                            n = !0;
                            break
                        }
                    }
                    n || (e = "en"),
                    u.value = e
                }
                c(),
                Object(a["F"])(u, (function(e) {
                    localStorage.setItem("locale", e)
                }
                ));
                var d, p = Object(a["z"])(!1), b = Object(a["z"])(-1), m = Object(a["z"])(-1), y = Object(a["z"])(-1);
                function j() {
                    return O.apply(this, arguments)
                }
                function O() {
                    return O = Object(f["a"])(regeneratorRuntime.mark((function e() {
                        var n, a, i, r, o = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = o.length > 0 && void 0 !== o[0] && o[0],
                                    i && (p.value = !0),
                                    r = Oe.get(),
                                    e.next = 5,
                                    r.DARARewardsFee();
                                case 5:
                                    return b.value = e.sent,
                                    e.next = 8,
                                    r.liquidityFee();
                                case 8:
                                    return m.value = e.sent,
                                    e.next = 11,
                                    r.marketingFee();
                                case 11:
                                    y.value = e.sent,
                                    p.value = !1,
                                    null === (n = t.value) || void 0 === n || null === (a = n.updateRedistributionFee) || void 0 === a || a.call(n, b.value),
                                    clearTimeout(d),
                                    setTimeout((function() {
                                        return j()
                                    }
                                    ), 15e3);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))),
                    O.apply(this, arguments)
                }
                return j(!0),
                {
                    roadmap: e,
                    calculatorRef: t,
                    calculator: n,
                    game: r,
                    locale: u,
                    localeOptions: s,
                    contractAddress: l,
                    feesLoading: p,
                    redistributionFee: b,
                    liquidityFee: m,
                    marketingFee: y
                }
            }
        }
          , xt = (n("f890"),
        n("1c1c"))
          , Dt = n("0170")
          , Mt = n("66e5")
          , _t = n("4074")
          , Ct = n("ddd8")
          , Ft = n("eb85")
          , Gt = n("3b73")
          , Pt = n("24e8")
          , qt = n("0e51");
        wt.render = Ae;
        var $t = wt;
        Ge()(wt, "components", {
            QList: xt["a"],
            QItemLabel: Dt["a"],
            QItem: Mt["a"],
            QItemSection: _t["a"],
            QIcon: Me["a"],
            QSelect: Ct["a"],
            QSeparator: Ft["a"],
            QExpansionItem: Gt["a"],
            QSkeleton: Tt["a"],
            QDialog: Pt["a"],
            QCard: we["a"],
            QResponsive: qt["a"]
        });
        var At = {
            name: "Main",
            components: {
                ContractContent: Pe,
                Drawer: $t
            },
            setup: function() {
                var e = Object(a["z"])(!1);
                function t() {
                    e.value = !e.value
                }
                var n = Object(a["z"])(!0)
                  , i = Object(a["z"])("")
                  , r = Object(a["z"])(!0)
                  , o = Object(a["z"])(!1);
                function u(e) {
                    r.value = e
                }
                function s(e) {
                    n.value = e
                }
                return Object(a["t"])(Object(f["a"])(regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if ("" === localStorage.getItem("address")) {
                                    e.next = 6;
                                    break
                                }
                                if (i.value = localStorage.getItem("address"),
                                !v.validateToken(i.value)) {
                                    e.next = 6;
                                    break
                                }
                                return r.value = !1,
                                e.next = 6,
                                Object(a["p"])();
                            case 6:
                                return e.next = 8,
                                null === (t = o.value) || void 0 === t ? void 0 : t.updatePrices(!0);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))),
                Object(a["F"])(i, function() {
                    var e = Object(f["a"])(regeneratorRuntime.mark((function e(t, n) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (v.strequal(t, n) || v.strequal(t, localStorage.getItem("address"))) {
                                        e.next = 8;
                                        break
                                    }
                                    if ((v.validateToken(t) || "" === t) && localStorage.setItem("address", t),
                                    !v.validateToken(t)) {
                                        e.next = 8;
                                        break
                                    }
                                    return r.value = !1,
                                    e.next = 6,
                                    Object(a["p"])();
                                case 6:
                                    return e.next = 8,
                                    null === (i = o.value) || void 0 === i ? void 0 : i.updatePrices(!0);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                {
                    drawerLeft: e,
                    toggleDrawer: t,
                    address: i,
                    addressInputEnabled: r,
                    loading: n,
                    contractContentRef: o,
                    updateAddressInput: u,
                    updateLoading: s
                }
            }
        }
          , zt = (n("5cc5"),
        n("4d5a"))
          , St = n("e359")
          , Bt = n("65c6")
          , Et = n("6ac5")
          , It = n("9c40")
          , Rt = n("cb32")
          , Vt = n("9404")
          , Lt = n("09e3")
          , Ut = n("9989");
        At.render = j;
        var Qt = At;
        Ge()(At, "components", {
            QLayout: zt["a"],
            QHeader: St["a"],
            QToolbar: Bt["a"],
            QToolbarTitle: Et["a"],
            QBtn: It["a"],
            QAvatar: Rt["a"],
            QInput: ht["a"],
            QDrawer: Vt["a"],
            QPageContainer: Lt["a"],
            QPage: Ut["a"]
        });
        n("573e"),
        n("e54f"),
        n("63b8"),
        n("c867"),
        n("5636");
        var Wt = {
            config: {},
            plugins: {}
        }
          , Ht = n("528a")
          , Kt = n.n(Ht);
        function Nt() {
            var e = n("49f8")
              , t = {};
            return e.keys().forEach((function(n) {
                var a = n.match(/([A-Za-z0-9-_]+)\./i);
                if (a && a.length > 1) {
                    var i = a[1];
                    t[i] = e(n)
                }
            }
            )),
            t
        }
        var Yt = Object(i["a"])({
            locale: "en",
            fallbackLocale: "en",
            messages: Nt()
        });
        Object(a["f"])(Qt).use(Yt).use(ze["a"], Wt).use(Kt.a).mount("#app")
    },
    "5cc5": function(e, t, n) {
        "use strict";
        n("7948")
    },
    "6ce2": function(e) {
        e.exports = JSON.parse('{"token":{"name":"KCAKE","symbol":"KCAKE"},"general":{"status":{"done":"✅","prog":"⏭","pend":"⬜"},"time":{"long":{"year":"Jahr | Jahre","month":"Monat | Monate","week":"Woche | Wochen","day":"Tag | Tage","hour":"Stunde | Stunden","minute":"Minute | Minuten","second":"Sekunde | Sekunden"},"short":{"year":"J","month":"M","week":"W","day":"T","hour":"std","minute":"min","second":"sec"}}},"topBar":{"address":"Wallet Addresse"},"rewardToken":{"name":"Pancakeswap","symbol":"KCAKE"},"dashboard":{"earningsManager":"@:token.name Ertragsmanager","enterAddress":"Bitte gib eine Adresse ein, um deine Dividende zu sehen!","yourHoldings":"Deine Bestände","rewardsPaidToYou":"@:rewardToken.symbol an dich ausgezahlt","lastPayoutTime":"Letzte Auszahlungszeit","lastPayoutTimeFormatted":"vor {timeValue} {timeUnit}","pendingPayout":"Erwartete @:rewardToken.symbol Auszahlung","pendingPayoutTime":"in {minuteValue}@:{\'general.time.short.minute\'}","positionInQueue":"Position in der Queue: {posValue}","calculatingDividends":"Berechne erforderliche Dividende, bitte warten...","sufficientTokensForReward":"Herzlichen Glückwunsch! Du hälst genug @:token.name, um deine Dividende zu erhalten!","insufficientTokensForReward":"Du besitzt nicht genug @:token.name, um eine Dividende zu erhalten.","totalRewardsPaid":"Insgesamt an die Besitzer von @:token.name gezahlt:","unmetBalance":"(Mindestbetrag: {minTokensForReward} - Sie benötigen {missingTokensForReward} mehr.)"},"drawer":{"languages":{"header":"Sprachen"},"socials":{"header":"Soziale Medien","telegram":{"label":"Telegram","url":"https://t.me/kittycakebsc","caption":"Chatte mit anderen Investoren!"},"twitter":{"label":"Twitter","caption":"Folge unseren neuesten Updates!"},"instagram":{"label":"Instagram","caption":"Entdecke unsere Geschichten!"},"emailUs":{"label":"E-Mail","caption":"info{\'@\'}KCAKE.app"}},"smartContract":{"header":"Smart Contract","contractMenu":{"label":"Contract","caption":"Vollständig engagiert"},"chartsMenu":{"label":"Charts","caption":"Wir sehen uns auf dem Mond!"},"dessertFinance":{"label":"Dessert Finance Audit","caption":"Iss $@:{\'token.symbol\'}, fühl dich $SICHER!"},"poocoin":{"label":"PooCoin","caption":"Siehe die Chart!"},"dextools":{"label":"DexTools","caption":"Hilf uns dabei, ein Trend zu werden!"},"Pancakeswap":{"label":"Pancakeswap","caption":"Kaufe heute @:token.name!"},"bscscan":{"label":"BscScan","caption":"Verifizierter Vertrag!"},"roadmap":{"label":"Meilensteine","caption":"Was bringt die Zukunft?"},"calculator":{"label":"Dividendenrechner","caption":"Erfahre, wie viel du verdienen kannst!"}},"flappyDARA":{"label":"FlappyDARA","caption":"Stoß nicht mit Doge und KCAKE zusammen!"},"tokenomics":{"header":"Tokenomics","redistribution":{"label":"{fee}% Redistributionsgebühr","caption":"Erhalte @:rewardToken.symbol durch Halten!"},"liquidity":{"label":"{fee}% Liquidätsgebühr","caption":"In den Liquiditätspool!"},"marketing":{"label":"{fee}% Marketinggebühr","caption":"Vermarktung und volatile Bedingungen"},"sell":{"label":"1% Verkaufsgebühr","caption":"Abschreckung von Verkäufen"}}},"roadmap":{"prelaunchTechnical":{"heading":"Technischer Check vor der Markteinführung","websiteAndDashboard":"Website und @:rewardToken.symbol Verdienst-Dashboard","telegramTracker":"Brandneues Telegram-Promotion-Tracking-System","contractTestnet":"@:token.name Vertragstest im BSC Testnet","contractMainnet":"@:token.name Vertragsbereitstellung und -prüfung im BSC Mainnet","finalizeTokenomics":"Finalisierung der Tokenomics","audit":"Dessert Finance Audit"},"prelaunchMarketing":{"heading":"Social Media vor der Markteinführung","initPush":"Erste Aktionen auf Twitter und Instagram","comp":"Wettbewerb in den sozialen Medien - gewinne Geld- oder Tokenpreise!","campaign":"Werbekampagne - achte auf die großen Namen, die über dieses Projekt tweeten!"},"launch":{"heading":"3... 2... 1... Start!","time":"Verkaufsstart am 24. Juli, 8PM UTC, Handel auf Pancakeswap","rewards":"Beobachte die Auszahlung der @:rewardToken.symbol Belohnungen!"},"postlaunch":{"heading":"Flugsequenz nach dem Start","morePromo":"Weitere Werbekampagnen","celeb":"Promi-Werbepost wird gemacht","comp":"Weitere Wettbewerbe in den sozialen Medien - immer her mit den Preisen!","vid":"Professionelles Verkaufsvideo","agency":"Agentur für digitales Marketing startet Kampagnen (Vorschuss bereits bezahlt)","dextools":"Dextools-Ranking-Kampagne","explorers":"Auflistung auf Token-Explorern (CoinGecko, CoinMarketCap, etc.)"},"shortterm":{"heading":"Heliozentrische Einfügung in die Umlaufbahn","burn":"Dev verbrennt Tokens manuell","intl":"Ausweitung der internationalen Community auf Telegram und Discord","staking":"Einsatzpools und Belohnungen"},"midterm":{"heading":"Verlassen des Sonnensystems...","charity":"Charity-Aktionen zur Unterstützung von Tieren im Tierheim - alle Tiere sind Freunde von Kitty!","other":"Erkundung anderer Belohnungstokens und -mechanismen","crosschain":"Cross-chain Unterstützung","nft":"@:token.name Merchandise und NFTs"},"longterm":{"heading":"Andromeda und Jenseits","cex":"Erforschung der Integration zentraler Börsen - CEXs werden Schwierigkeiten mit dezentralen Belohnungssystemen haben, wir werden mit ihnen zusammenarbeiten."}},"calculator":{"title":"Dividendenrechner","disclaimer":"(Wir weisen darauf hin, dass diese Werte Schätzungen auf der Grundlage historischer Daten sind. Deine tatsächliche Rendite wird vom zukünftigen Handelsvolumen und anderen Faktoren abhängen)","amount":"Tokenanzahl","perDay":"Geschätzte @:rewardToken.symbol pro Tag","perWeek":"Geschätzte @:rewardToken.symbol pro Woche","perMonth":"Geschätzte @:rewardToken.symbol pro Monat","perYear":"Geschätzte @:rewardToken.symbol pro Jahr"}}')
    },
    7948: function(e, t, n) {},
    "8c08": function(e, t, n) {
        e.exports = n.p + "kittyfam/logo.png"
    },
    a306: function(e) {
        e.exports = JSON.parse('{"token":{"name":"KittyCakeToken","symbol":"KCAKE"},"general":{"status":{"done":"✅","prog":"⏭","pend":"⬜"},"time":{"long":{"year":"año | años","month":"mes | meses","week":"semana | semanas","day":"día | días","hour":"hora | horas","minute":"minutos | minutos","second":"segundos | segundos"},"short":{"year":"A","month":"M","week":"S","day":"D","hour":"h","minute":"m","second":"s"}}},"topBar":{"address":"Dirección de cartera"},"rewardToken":{"name":"Pancakeswap","symbol":"KCAKE"},"dashboard":{"earningsManager":"Dashboard de Ganancias de @:token.name","enterAddress":"¡Ingresa tu dirección para ver tus dividendos!","yourHoldings":"Valor de tu cartera","rewardsPaidToYou":"@:rewardToken.symbol Pagado a ti","lastPayoutTime":"Hora del último pago de dividendos","lastPayoutTimeFormatted":"hace {timeValue} {timeUnit}","pendingPayout":"Esperando pago de @:rewardToken.symbol","pendingPayoutTime":"en {minuteValue}@:{\'general.time.short.minute\'}","positionInQueue":"Posición en la cola: {posValue}","calculatingDividends":"Calculando tus dividendos, espere porfavor....","sufficientTokensForReward":"¡Felicidades! ¡Tienes suficiente @:token.name en tu cartera para recibir dividendos!","insufficientTokensForReward":"No tienes suficiente @:token.name para recibir dividendos.","totalRewardsPaid":"Total distribuido de @:token.name a los titulares:","unmetBalance":"(Cantidad mínima: {minTokensForReward} - necesitas {missingTokensForReward} más.)"},"drawer":{"languages":{"header":"Idiomas"},"socials":{"header":"Redes Sociales","telegram":{"label":"Telegram","url":"https://t.me/KCAKE_Official_Official","caption":"¡Chatea con otros inversionistas!"},"twitter":{"label":"Twitter","caption":"¡Siguenos para las últimas noticias!"},"instagram":{"label":"Instagram","caption":"¡Dale un vistazo a nuestras historias!"},"emailUs":{"label":"Envíanos un correo","caption":"info{\'@\'}KCAKE.app"}},"smartContract":{"header":"Contrato inteligente","contractMenu":{"label":"Contrato","caption":"Totalmente comprometidos"},"chartsMenu":{"label":"Graficas","caption":"¡Nos vemos en la luna!"},"dessertFinance":{"label":"Auditado por Dessert Finance","caption":"Come un poco de $@:{\'token.symbol\'}, siéntete $SEGURO"},"poocoin":{"label":"PooCoin","caption":"¡Dale un vistazo a las graficas!"},"dextools":{"label":"DexTools","caption":"¡Ayudanos a estar en tendencia!"},"Pancakeswap":{"label":"Pancakeswap","caption":"¡Compra @:token.name hoy mismo!"},"bscscan":{"label":"BscScan","caption":"¡Contrato verificado!"},"roadmap":{"label":"Roadmap","caption":"¿Qué nos depara el futuro?"},"calculator":{"label":"Calculadora de dividendos","caption":"¡Mira cuánto puedes ganar!"}},"flappyDARA":{"label":"FlappyDARA","caption":"¡No te topes con Doge y KCAKE!"},"tokenomics":{"header":"Tokenomics","redistribution":{"label":"{fee}% Redistribución","caption":"¡Obten @:rewardToken.symbol conservando @:token.name!"},"liquidity":{"label":"{fee}% Liquidez","caption":"¡En la pool de liquidez!"},"marketing":{"label":"{fee}% Marketing","caption":"Marketing y volatilidad"},"sell":{"label":"1% Comisión de venta","caption":"Para desincentivar las ventas"}}},"roadmap":{"prelaunchTechnical":{"heading":"Chequeo técnico pre-lanzamiento","websiteAndDashboard":"Sitio web y dashboard de ganancias de @:rewardToken.symbol","telegramTracker":"Sistema totalmente nuevo de referidos para Telegram","contractTestnet":"Pruebas de contrato de @:token.name en la Testnet de BSC","contractMainnet":"Despliegue de contrato y verificación en la Mainnet de BSC","finalizeTokenomics":"Definir Tokenomics","audit":"Contrato auditado por Finance Audit"},"prelaunchMarketing":{"heading":"Impulso de redes sociales previo al lanzamiento","initPush":"Empujes iniciales de Twitter e Instagram","comp":"Concurso de redes sociales: ¡gane premios en efectivo o airdrops!","campaign":"Campaña promocional: ¡esté atento a los influencers twittean sobre este proyecto!"},"launch":{"heading":"¡3... 2... 1... Lanzamiento!","time":"¡Lanzamiento justo el 24 de julio a las 8 p.m. UTC, tradea en Pancakeswap!","rewards":"¡Mira como se pagan dividendos de @:rewardToken.symbol!"},"postlaunch":{"heading":"Secuencia de vuelo posterior al lanzamiento","morePromo":"Más campañas promocionales","celeb":"¡Celebridades hablando sobre nosotros!","comp":"¡Aún más competiciones en redes sociales!","vid":"Video promocional de ventas en redes sociales","agency":"Inicio de agencia de marketing digital (anticipo ya pagado)","dextools":"Campaña de tendencia en Dextools.","explorers":"Listado en exploradores (CoinGecko, CoinMarketCap, etc.)"},"shortterm":{"heading":"Inserción de órbita heliocéntrica","burn":"Tokens quemados manualmente por los desarrolladores","intl":"Expansión internacional de nuestras redes sociales","staking":"Staking pools y recompensas"},"midterm":{"heading":"Saliendo del Sistema Solar ...","charity":"Campañas benéficas para ayudar a los animales protegidos: ¡todos los animales son amigos de Kitty!","other":"Explorar otros mecanismos de recompensa","crosschain":"Soporte en multiples redes","nft":"mercancía de @:token.name y NFTs"},"longterm":{"heading":"Andrómeda y más allá","cex":"¡Explore la integración de brokers: tendrán dificultades con los sistemas de recompensa, trabajaremos junto con ellos!"}},"calculator":{"title":"Calculadora de dividendos","disclaimer":"(Tenga en cuenta que estos valores son estimaciones basadas en datos históricos. Sus rendimientos reales dependerán del volumen de operaciones futuro y de otros factores)","amount":"Cantidad de tokens","perDay":"@:rewardToken.symbol estimados por día","perWeek":"@:rewardToken.symbol estimados por semana","perMonth":"@:rewardToken.symbol estimados por mes","perYear":"@:rewardToken.symbol estimados por año"}}')
    },
    b8cd: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WADA","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WADA","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountADAMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityADA","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountADA","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountADAMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityADA","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountADA","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountADAMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityADASupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountADA","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountADAMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityADAWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountADA","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountADAMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityADAWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountADA","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapADAForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactADAForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactADAForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForADA","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForADASupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactADA","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
    },
    c6e5: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"routerAddress","type":"address"},{"internalType":"address payable","name":"marketingWalletAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"accounts","type":"address[]"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeMultipleAccountsFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"newValue","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"oldValue","type":"uint256"}],"name":"GasForProcessingUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newLiquidityWallet","type":"address"},{"indexed":true,"internalType":"address","name":"oldLiquidityWallet","type":"address"}],"name":"LiquidityWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"iterations","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claims","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastProcessedIndex","type":"uint256"},{"indexed":true,"internalType":"bool","name":"automatic","type":"bool"},{"indexed":false,"internalType":"uint256","name":"gas","type":"uint256"},{"indexed":true,"internalType":"address","name":"processor","type":"address"}],"name":"ProcessedDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SendDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pair","type":"address"},{"indexed":true,"internalType":"bool","name":"value","type":"bool"}],"name":"SetAutomatedMarketMakerPair","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ADAReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateUniswapV2Router","type":"event"},{"inputs":[],"name":"KCAKE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DARARewardsFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_marketingWalletAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"automatedMarketMakerPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"blacklistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deadWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"dividendTokenBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividendTracker","outputs":[{"internalType":"contract KCAKEDividendTracker","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeMultipleAccountsFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gasForProcessing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountDividendsInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAccountDividendsInfoAtIndex","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getClaimWait","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastProcessedIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfDividendTokenHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalDividendsDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"processDividendTracker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAutomatedMarketMakerPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setDARARewardsFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setLiquiditFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setMarketingFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"wallet","type":"address"}],"name":"setMarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"claimWait","type":"uint256"}],"name":"updateClaimWait","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateDividendTracker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateGasForProcessing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_presaleAddress","type":"address"},{"internalType":"address","name":"_routerAddress","type":"address"}],"name":"whitelistDxSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"withdrawableDividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]')
    },
    c867: function(e, t, n) {},
    cf05: function(e, t, n) {
        e.exports = n.p + "kittyfam/logo.png"
    },
    e298: function(e, t, n) {},
    edd4: function(e) {
        e.exports = JSON.parse('{"token":{"name":"KittyCakeToken","symbol":"KCAKE"},"general":{"status":{"done":"✅","prog":"⏭","pend":"⬜"},"time":{"long":{"year":"year | years","month":"month | months","week":"week | weeks","day":"day | days","hour":"hour | hours","minute":"minute | minutes","second":"second | seconds"},"short":{"year":"Y","month":"M","week":"W","day":"D","hour":"h","minute":"m","second":"s"}}},"topBar":{"address":"Wallet Address"},"rewardToken":{"name":"Pancakeswap","symbol":"KCAKE"},"dashboard":{"earningsManager":"@:token.name Earnings Manager","enterAddress":"Please enter an address to see your dividends!","yourHoldings":"Your Holdings","rewardsPaidToYou":"@:rewardToken.symbol Paid to You","lastPayoutTime":"Last Payout Time","lastPayoutTimeFormatted":"{timeValue} {timeUnit} ago","pendingPayout":"Pending @:rewardToken.symbol Payout","pendingPayoutTime":"in {minuteValue}@:{\'general.time.short.minute\'}","positionInQueue":"Position in queue: {posValue}","calculatingDividends":"Calculating necessary dividends, please wait...","sufficientTokensForReward":"Congratulations! You are holding enough @:token.name to receive your dividends!","insufficientTokensForReward":"You are not holding enough @:token.name to receive dividends.","totalRewardsPaid":"Total paid to @:token.name holders:","unmetBalance":"(Minimum amount: {minTokensForReward})"},"drawer":{"languages":{"header":"Languages"},"socials":{"header":"Socials","telegram":{"label":"Telegram","url":"https://t.me/kittycakebsc","caption":"Chat with other investors!"},"twitter":{"label":"Twitter","caption":"Follow our latest updates!"},"instagram":{"label":"Instagram","caption":"Explore our stories!"},"emailUs":{"label":"Email Us","caption":"info{\'@\'}KCAKE.app"}},"smartContract":{"header":"Smart Contract","contractMenu":{"label":"Contract","caption":"Fully committed"},"chartsMenu":{"label":"Charts","caption":"See you on the moon!"},"dessertFinance":{"label":"Dessert Finance Audit","caption":"Eat $@:{\'token.symbol\'}, feel $SAFE!"},"poocoin":{"label":"PooCoin","caption":"Check out the chart!"},"dextools":{"label":"DexTools","caption":"Help us get trending!"},"Pancakeswap":{"label":"Pancakeswap","caption":"Buy @:token.name today!"},"bscscan":{"label":"BscScan","caption":"Verified contract!"},"roadmap":{"label":"Roadmap","caption":"What does the future hold?"},"calculator":{"label":"Dividends Calculator","caption":"See how much you could earn!"}},"flappyDARA":{"label":"FlappyDARA","caption":"Don\'t bump into Doge and KCAKE!"},"tokenomics":{"header":"Tokenomics","redistribution":{"label":"{fee}% Redistribution","caption":"Earn @:rewardToken.symbol by holding!"},"liquidity":{"label":"{fee}% Liquidity","caption":"Into the liquidity pool!"},"marketing":{"label":"{fee}% Marketing","caption":"Marketing and volatile conditions"},"sell":{"label":"1% Sell Fee","caption":"To disincentivize selling"}}},"roadmap":{"prelaunchTechnical":{"heading":"Pre-Launch Technical Check","websiteAndDashboard":"Website and @:rewardToken.symbol earnings dashboard","telegramTracker":"Brand new Telegram promotion tracking system","contractTestnet":"@:token.name contract testing on BSC Testnet","contractMainnet":"@:token.name contract deployment and verification on BSC Mainnet","finalizeTokenomics":"Finalizing tokenomics","audit":"Dessert Finance Audit"},"prelaunchMarketing":{"heading":"Pre-Launch Social Media Fueling","initPush":"Initial Twitter and Instagram pushes","comp":"Social media competition -- win cash or token prizes!","campaign":"Promotional campaign -- look out for big names tweeting about this project!"},"launch":{"heading":"3... 2... 1... Launch!","time":"Fair launch on July 24th, 8PM UTC, trading on Pancakeswap","rewards":"Watch @:rewardToken.symbol rewards being paid out!"},"postlaunch":{"heading":"Post-Launch Flight Sequence","morePromo":"More promotional campaigns","celeb":"Celeb promotional post drops","comp":"More social media competitions -- keep the prizes coming!","vid":"Professional promotional sales video release","agency":"Digital marketing agency start campaigns (retainer already paid)","dextools":"Dextools ranking campaign","explorers":"Listing on token explorers (CoinGecko, CoinMarketCap, etc.)"},"shortterm":{"heading":"Heliocentric Orbit Insertion","burn":"Dev manual burns","intl":"Expanding international community outreach on Telegram and Discord","staking":"Staking pools and rewards"},"midterm":{"heading":"Leaving the Solar System...","charity":"Charity drives to help sheltered animals -- all animals are friends of Kitty!","other":"Explore other reward tokens and mechanisms","crosschain":"Cross-chain support","nft":"@:token.name merchandise and NFTs"},"longterm":{"heading":"Andromeda and Beyond","cex":"Explore centralized exchange integration -- CEXs will have difficulties with decentralized reward systems, we will work with them"}},"calculator":{"title":"Dividends Calculator","disclaimer":"(Please note that these values are estimations based on historic data. Your actual returns will depend on future trading volume and other factors)","amount":"Token amount","perDay":"Estimated @:rewardToken.symbol per day","perWeek":"Estimated @:rewardToken.symbol per week","perMonth":"Estimated @:rewardToken.symbol per month","perYear":"Estimated @:rewardToken.symbol per year"}}')
    },
    f890: function(e, t, n) {
        "use strict";
        n("e298")
    }
});
//# sourceMappingURL=app.676f5a8a.js.map
