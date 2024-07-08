(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
    [2244],
    {
      75425: (e, t, a) => {
        "use strict";
        a.d(t, { Nb: () => f, ku: () => g, f$: () => w });
        const n = new Map();
        function i(e) {
          if (0 === e.length) throw new Error("No more operands in queue");
          return e.pop();
        }
        const r = {
          "&": {
            priority: 1,
            exec: (e) => {
              const t = i(e),
                a = i(e);
              return (...e) => a(...e) && t(...e);
            },
          },
          "|": {
            priority: 1,
            exec: (e) => {
              const t = i(e),
                a = i(e);
              return (...e) => a(...e) || t(...e);
            },
          },
          "~": {
            priority: 2,
            exec: (e) => {
              const t = i(e);
              return (...e) => !t(...e);
            },
          },
          "!": {
            priority: 2,
            exec: (e) => {
              const t = i(e);
              return (...e) => !t(...e);
            },
          },
        };
        function o(e, t, a) {
          for (; e.length > 0; ) {
            let i = (n = e)[n.length - 1];
            if ("(" === i || (a && r[a].priority > r[i].priority)) return i;
            e.pop(), t.push(r[i].exec(t));
          }
          var n;
          return null;
        }
        function l(e) {
          const t = [],
            a = [];
          if (
            (e.replace(/([&|()~!]|[a-zA-Z0-9._]+)/g, (e) => {
              if (e in r) o(a, t, e), a.push(e);
              else if ("(" === e) a.push(e);
              else if (")" === e) {
                "(" === o(a, t) && a.pop();
              } else t.push(((n = e), (e) => Boolean(e(n))));
              var n;
            }),
            "(" === o(a, t))
          )
            throw new Error("Unexpected left bracket");
          if (0 === t.length) throw new Error("Too few operands to resolve");
          if (t.length > 1) throw new Error("Too many operands unresolved");
          return t[0];
        }
        const s = (e) => {
            let t = n.get(e);
            if (!t) {
              try {
                t = l(e);
              } catch (t) {
                throw (
                  ((a = new Error(`Invalid expression: "${e}"`)),
                  null == (i = t) ||
                    ((a.stack =
                      a.stack +
                      "\nCaused by: " +
                      (i.stack || i.toString() || "(unknown error)")),
                    i.code && (a.code = i)),
                  a)
                );
              }
              n.set(e, t);
            }
            var a, i;
            return t;
          },
          d = {
            enabled: Number.MAX_SAFE_INTEGER,
            disabled: Number.MIN_SAFE_INTEGER,
            default: 1,
            selection: 2,
            snowbrush: 64,
            mindmap: 64,
            focus: 256,
            editor: 2048,
            mode: 2 << 20,
          },
          c = 0,
          u = Number.MAX_SAFE_INTEGER,
          m = Number.MIN_SAFE_INTEGER,
          v = Number.MAX_SAFE_INTEGER - 1,
          p = Number.MIN_SAFE_INTEGER + 1;
        function h(e) {
          return d[e] || c;
        }
        function g({ contexts: e = {}, expr: t, testFn: a }) {
          if (!t && !a)
            throw new Error(
              "There must be at least one of string expression and test expression.",
            );
          const n = { enabled: !0, disabled: !0, default: !0, ...e };
          let i = !1,
            r = !a;
          if (t) {
            i = s(t)((e) => n[e]);
          }
          if ((a && (r = a()), !t)) return r ? Number.MAX_SAFE_INTEGER : 0;
          const o = (function (e) {
            let t = 0;
            if (!Array.isArray(e)) return t;
            for (let a of e) {
              const e = h(a.split(".")[0]);
              if (e === Number.MAX_SAFE_INTEGER || e === Number.MIN_SAFE_INTEGER)
                return e;
              t += e;
            }
            return t;
          })(t.match(/[a-zA-Z0-9._]+/g));
          return i && r
            ? o
            : (function (e) {
                return e === Number.MAX_SAFE_INTEGER;
              })(o)
            ? v
            : (function (e) {
                return e === Number.MIN_SAFE_INTEGER;
              })(o)
            ? p
            : 0;
        }
        function f(e) {
          const t = {};
          return (
            e.forEach((e) => {
              let a = { ...e };
              a.enabled === m
                ? (a.enabled = !1)
                : a.enabled === u
                ? (a.enabled = !0)
                : a.enabled === v && (a.enabled = !1);
              let n = t[a.id];
              return n
                ? "boolean" != typeof n.enabled &&
                  ("boolean" == typeof a.enabled || n.enabled < a.enabled)
                  ? (t[a.id] = { enabled: a.enabled, command: a })
                  : void 0
                : (t[a.id] = { enabled: a.enabled, command: a });
            }),
            Object.keys(t).map((e) => {
              let a = t[e].command;
              return (a.enabled = !!a.enabled), a;
            })
          );
        }
        function w(e) {
          return e === u || (e !== v && e !== m && e !== p && !!e);
        }
      },
      5893: (e, t, a) => {
        "use strict";
        a.d(t, {
          AK: () => f,
          N6: () => b,
          Nw: () => g,
          Uy: () => S,
          ab: () => m,
          cs: () => y,
          iZ: () => p,
          o_: () => w,
          u3: () => v,
        });
        var n = a(71017),
          i = a.n(n),
          r = a(57310),
          o = a.n(r),
          l = (a(6113), a(81296)),
          s = a.n(l);
        const d = Symbol("query"),
          c = 97,
          u = 122;
        function m(e) {
          return e.startsWith("file://") ? i().basename(p(e)) : "";
        }
        function v(e) {
          return o().pathToFileURL(e).toString();
        }
        function p(e) {
          if ("string" == typeof e) e = new URL(e);
          else if (null == e || !e[d] || !e[d][d])
            throw new Error(`Invalid arg type: ${e}`);
          if ("file:" !== e.protocol)
            throw new Error(`Invalid url scheme file: ${e}`);
          return (function (e) {
            const t = e.hostname;
            for (var a = e.pathname, n = 0; n < a.length; n++)
              if ("%" === a[n]) {
                var i = 32 | a.codePointAt(n + 2);
                if (
                  ("2" === a[n + 1] && 102 === i) ||
                  ("5" === a[n + 1] && 99 === i)
                )
                  throw new Error("must not include encoded \\ or / characters");
              }
            if (((a = a.replace(h, "\\")), (a = decodeURIComponent(a)), "" !== t))
              return `\\\\${o().domainToUnicode(t)}${a}`;
            var r = 32 | a.codePointAt(1),
              l = a[2];
            return r < c || r > u || ":" !== l ? `\\${a}` : a.slice(1);
          })(e);
        }
        const h = /\//g;
        function g(e) {
          const t = /[\r\n]/gm;
          let a = e;
          return t.test(a) && (a = a.replace(t, " ").trim()), a;
        }
        function f(e, t) {
          let a = i().join(e, t),
            n = s().existsSync(a);
          if (!n) return t;
          const r = i().parse(t),
            o = r.name;
          let l,
            d = 1;
          for (; d < 100 && n; )
            (l = `${o} ${d}${r.ext}`),
              (a = i().join(e, l)),
              (n = s().existsSync(a)),
              ++d;
          if (n) throw new Error("Can not suggest a file name.");
          return l;
        }
        function w(e, t, a = "") {
          const n = (t, r = 0) => {
            let o = t;
            return (
              r > 0 && (o += " - " + r),
              (o = i().resolve(e, `${o}${a}`)),
              s().existsSync(o) ? n(t, ++r) : o
            );
          };
          return n(t);
        }
        async function y(e) {
          const t = await s().stat(e);
          if (t.isDirectory()) {
            const t = await s().readdir(e);
            return (await Promise.all(t.map((t) => y(i().join(e, t))))).reduce(
              (e, t) => e + t,
              0,
            );
          }
          return t.size;
        }
        function b(e) {
          if ("string" == typeof e) return e.replace(/[\\/:*?"<>|\n\r]/g, "");
          throw new Error("Only support string, but got:", typeof e);
        }
        function S(e) {
          {
            const t = encodeURIComponent(e);
            return decodeURIComponent(
              (function (e) {
                const t = [
                  "%EF%80%A2",
                  "%EF%80%A6",
                  "%EF%80%A1",
                  "%EF%80%A5",
                  "%EF%80%A0",
                  "%EF%80%A3",
                  "%EF%80%A4",
                  "%EF%80%A7",
                  "%EF%80%8A",
                  "%EF%80%8D",
                ];
                if ("string" == typeof e)
                  return e.replace(new RegExp(t.join("|"), "g"), "");
                throw new Error("Only support string, but got:", typeof e);
              })(t),
            );
          }
        }
      },
      81296: (e, t, a) => {
        const n = a(71017),
          i = a(57147),
          { promisify: r } = a(73837),
          o = r(i.stat),
          l = r(i.realpath),
          s = r(i.readdir),
          d = r(i.mkdir),
          c = r(i.rmdir),
          u = r(i.rename),
          m = r(i.unlink),
          v = r(i.copyFile),
          p = r(i.readFile),
          h = r(i.writeFile),
          g = r(i.access);
        async function f(e) {
          try {
            if ((await o(e)).isDirectory()) {
              for (let t of await s(e)) await f(n.join(e, t));
              await c(e);
            } else await m(e);
          } catch (e) {
            if ("ENOENT" === e.code) return;
            throw e;
          }
        }
        function w(e) {
          try {
            if (i.statSync(e).isDirectory()) {
              for (let t of i.readdirSync(e)) w(n.join(e, t));
              i.rmdirSync(e);
            } else i.unlinkSync(e);
          } catch (e) {
            if ("ENOENT" === e.code) return;
            throw e;
          }
        }
        e.exports = {
          existsSync: i.existsSync,
          stat: o,
          statSync: i.statSync,
          realpath: l,
          readdir: s,
          readdirSync: i.readdirSync,
          mkdir: d,
          mkdirSync: i.mkdirSync,
          rmdir: c,
          rmdirSync: i.rmdirSync,
          ensureDir: async function e(t) {
            try {
              await d(t);
            } catch (a) {
              if ("ENOENT" !== a.code) {
                try {
                  if ((await o(t)).isDirectory()) return;
                } catch (e) {}
                throw a;
              }
              if (n.dirname(t) === t) throw a;
              await e(n.dirname(t)), await d(t);
            }
          },
          ensureDirSync: function e(t) {
            try {
              i.mkdirSync(t);
            } catch (a) {
              if ("ENOENT" !== a.code) {
                try {
                  if (i.statSync(t).isDirectory()) return;
                } catch (e) {}
                throw a;
              }
              if (n.dirname(t) === t) throw a;
              e(n.dirname(t)), i.mkdirSync(t);
            }
          },
          isDirectory: async function (e) {
            return (await o(e)).isDirectory();
          },
          isDirectorySync: function (e) {
            return i.statSync(e).isDirectory();
          },
          emptyDir: async function (e) {
            const t = (await s(e)).map((t) => f((t = n.join(e, t))));
            return Promise.all(t);
          },
          emptyDirSync: function (e) {
            i.readdirSync(e).forEach((t) => {
              w((t = n.join(e, t)));
            });
          },
          rename: u,
          renameSync: i.renameSync,
          unlink: m,
          unlinkSync: i.unlinkSync,
          remove: f,
          removeSync: w,
          copyFile: v,
          copyFileSync: i.copyFileSync,
          readFile: p,
          readFileSync: i.readFileSync,
          writeFile: h,
          writeFileSync: i.writeFileSync,
          createReadStream: i.createReadStream,
          createWriteStream: i.createWriteStream,
          access: g,
          accessSync: i.accessSync,
          constants: i.constants,
        };
      },
      54856: (e, t, a) => {
        "use strict";
        a.d(t, {
          A6: () => u,
          AM: () => f,
          Ak: () => K,
          B_: () => R,
          Bh: () => V,
          EV: () => c,
          Fx: () => o,
          Gy: () => z,
          IB: () => S,
          K3: () => T,
          Lk: () => $,
          NF: () => m,
          O0: () => w,
          OV: () => M,
          Pp: () => r,
          QN: () => W,
          Qv: () => D,
          S5: () => L,
          Tb: () => j,
          Tg: () => k,
          XG: () => U,
          Xv: () => G,
          Yo: () => C,
          ZW: () => p,
          Zm: () => Z,
          _L: () => O,
          _v: () => P,
          _z: () => d,
          de: () => n,
          dm: () => I,
          g_: () => s,
          hR: () => B,
          iM: () => l,
          jJ: () => x,
          lf: () => H,
          oH: () => y,
          qz: () => N,
          rM: () => v,
          s2: () => h,
          tt: () => _,
          uT: () => g,
          vN: () => E,
          w6: () => i,
          wZ: () => A,
          xr: () => b,
          zj: () => F,
        });
        const n = "GET /pinia/store/state",
          i = "PATCH /pinia/store/state",
          r = "POST /pinia/store/mutations",
          o = "POST /windows",
          l = (e) => `PUT /windows/${e}/result`,
          s = "POST /windows/close",
          d = "POST /windows/getid",
          c = (e) => `POST /windows/${e}/method`,
          u = (e, t) => `POST /windows/${e}/callback/${t}`,
          m = "POST /editors",
          v = "POST /frames/show-editor",
          p = "POST /frames/show-editor-debounce",
          h = "DELETE /editors",
          g = (e) => `DESTROY /editors/${e}`,
          f = "POST /editors/update-index",
          w = "POST /editors/enter-zen-mode",
          y = "POST /editors/leave-zen-mode",
          b = "POST /editors/change-source",
          S = "POST /editor/fullscreen",
          T = (e) => `POST /editors/${e}/close-document`,
          E = (e) => `GET /editors/${e}/sheet-preview-image-data`,
          C = (e, t) => `GET /editors/${e}/${t}/sheet-smart-split-image-data`,
          I = (e) => `POST /editors/${e}/share`,
          A = (e) => `POST /editors/${e}/share-to-evernote`,
          k = (e) => `GET /editors/${e}/current-sheet-theme`,
          O = (e) => `POST /editors/${e}/current-sheet-theme`,
          F = (e) => `GET /editors/${e}/document-data`,
          L = "POST /file-cache/remove",
          N = "GET /fonts/all-fonts",
          P = "POST /activation/mas-iap/refresh-products",
          D = "POST /activation/mas-iap/purchase",
          x = "POST /activation/mas-iap/restore-transactions",
          _ = "POST /activation/mas-iap/check-receipt",
          H = {
            FEEDBACK: "POST /xos/feedback",
            LIBRARY_ITEMS: "GET /xos/library/items",
            LIBRARY_DOWNLOAD: "GET /xos/library/download",
            FILE_DOWNLOAD: "POST /xos/files/download",
            EVENTS: "GET /xos/events",
            SIGN_IN: "POST /xos/sign-in",
            REDEEM_SUB_INFO: "GET /xos/redeem-sub",
            REDEEM_SUB: "POST /xos/redeem-sub",
            UPDATE_USER_INFO: "GET /xos/update-user-info",
            SUBSCRIPTION_DETAILS: "GET /xos/subscription",
            DEVICE_BIND: "POST /xos/devices",
            BUY_PRICING_TABLE: "GET /xos/buy/pricing-table",
            LICENSE_ACTIVATE: "POST /xos/license-activations",
            SME_LICENSE_ACTIVATE: "POST /xos/sme-license-activations",
            MAS_IAP_VERIFY_RECEIPT: "POST /xos/mas-iap-verify-receipt",
            CREATE_UPLOAD_SESSION: "POST /xos/create-upload-session",
            UPLOAD_MAP: "POST /xos/upload-map",
            SEND_USAGE_REPORT_REGION: "POST /xos/send-usage-report-region",
            SEND_USAGE_REPORT: "POST /xos/send-usage-report",
            SEARCH_ICONS8: "GET /xos/search-icons8",
            ICONS8_PACK: "GET /xos/icons8-pack",
            ICONS8_POPULAR_PACKS: "GET /xos/icons8-popular-packs",
            ICONS8_AVAILABLE_STYLES: "GET /xos/icons8-available-styles",
            DOWNLOAD_ICONS8_ICON: "GET /xos/download-icons8-icon",
            FETCH_URL_METADATA: "GET /xos/fetch-url-metadata",
            VALIDATE_TRIAL_FEATURE: "GET /xos/validate-trial-feature",
            CHECK_TRIAL: "POST /xos/check_vana_trial",
            URL_DETAILS: "GET /xos/url-details",
            GO_HELP: "GET /xos/go/help",
            GO_LIBRARY_MORE_MAPS: "GET /xos/go/library/more-maps",
            GO_ACCOUNT_PROFILE: "GET /xos/go/account/profile",
            GO_ACCOUNT_PROFILE_MAS: "GET /xos/go/account/mas-profile",
            GO_ACCOUNT_FORGOT_PASSWORD: "GET /xos/go/account/forgot-password",
            GO_ACCOUNT_FORGOT_PASSWORD_MAS:
              "GET /xos/go/account/mas-forgot-password",
            GO_ACCOUNT_MIGRATE_TO_CN: "GET /xos/go/account/migrate-to-cn",
            GO_ACCOUNT_SIGN_UP: "GET /xos/go/account/sign-up",
            GO_ACCOUNT_SIGN_UP_MAS: "GET /xos/go/account/mas-sign-up",
            GO_TERMS: "GET /xos/go/terms",
            GO_TERMS_MAS: "GET /xos/go/terms-mas",
            GO_PRIVACY: "GET /xos/go/privacy",
            GO_PRIVACY_MAS: "GET /xos/go/privacy-mas",
            GO_BUY: "GET /xos/go/buy",
            GO_BUY_RENEW: "GET /xos/go/buy-renew",
            GO_BUY_LICENSE: "GET /xos/go/buy/license",
            GO_DOWNLOAD: "GET /xos/go/download",
            GO_ZEN: "GET /xos/go/zen",
            GO_EQUATION_HELP: "GET /xos/go/equation-help",
            GO_DIFFERENCE_TRIAL_FULLVERSION:
              "GET /xos/go/difference-trial-full-version",
            GO_BLOG: "GET /xos/go/blog",
            GO_BLOG_MAS: "GET /xos/go/blog-mas",
            GO_VERIFY_EMAIL: "GET /xos/go/verify-email",
            LENOVO_CREATE_ORDER: "POST /xos/lenovo/create-order",
            LENOVO_GET_ORDER_STATUS: "GET /xos/lenovo/get-order-status",
          },
          M = {
            CONNECT_MAIN: (e, t, a = null) =>
              `POST /pitch/connectMain/${e}/${t ?? ""}${a ? "/" + a : ""}`,
            SUB_EVENT: (e, t, a = "") => `POST /pitch/subEvent/${e}/${t}/${a}`,
            SUB_COMMAND: (e) => `POST /pitch/subCommand/${e}`,
          },
          R = (e) => `POST /command/handle/${e}`,
          B = "POST /command/handle/computedMain",
          U = "POST /theme-editor/conflict",
          V = "POST /smart-color/conflict",
          G = "DELETE /theme-editor/close",
          j = "POST /video-viewer/openUrl",
          z = "GET /feature-trial/request",
          K = "GET /feature-trial/check",
          W = "GET /mas-demo/disable",
          Z = "POST /generate/image",
          $ = "POST /generate/image/check-alive";
      },
      58659: (e, t, a) => {
        "use strict";
        a.d(t, {
          H9: () => m,
          Wb: () => d,
          ic: () => v,
          o4: () => u,
          sn: () => l,
          xr: () => s,
        });
        const n = {
            Meta: 32768,
            Ctrl: 16384,
            Shift: 8192,
            Alt: 4096,
            Arrow: 2048,
            OneToSeven: 1024,
            OneToNine: 512,
            Char: 4095,
          },
          i = {
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            65: "A",
            66: "B",
            67: "C",
            68: "D",
            69: "E",
            70: "F",
            71: "G",
            72: "H",
            73: "I",
            74: "J",
            75: "K",
            76: "L",
            77: "M",
            78: "N",
            79: "O",
            80: "P",
            81: "Q",
            82: "R",
            83: "S",
            84: "T",
            85: "U",
            86: "V",
            87: "W",
            88: "X",
            89: "Y",
            90: "Z",
            188: ",",
            190: ".",
            186: ";",
            219: "[",
            221: "]",
            192: "`",
            189: "-",
            187: "=",
            220: "\\",
            222: "'",
            191: "/",
            18: "Alt",
            20: "CapsLock",
            17: "Control",
            16: "Shift",
            13: "Enter",
            32: "Space",
            9: "Tab",
            8: "Backspace",
            46: "Delete",
            35: "End",
            36: "Home",
            45: "Insert",
            34: "PageDown",
            33: "PageUp",
            40: "Down",
            37: "Left",
            39: "Right",
            38: "Up",
            27: "Escape",
            44: "PrintScreen",
            145: "ScrollLock",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            124: "F13",
            125: "F14",
            126: "F15",
            127: "F16",
            128: "F17",
            129: "F18",
            130: "F19",
            131: "F20",
            132: "F21",
            133: "F22",
            134: "F23",
            135: "F24",
            144: "NumLock",
            96: "Numpad0",
            97: "Numpad1",
            98: "Numpad2",
            99: "Numpad3",
            100: "Numpad4",
            101: "Numpad5",
            102: "Numpad6",
            103: "Numpad7",
            104: "Numpad8",
            105: "Numpad9",
            107: "NumpadAdd",
            194: "NumpadComma",
            110: "NumpadDecimal",
            111: "NumpadDivide",
            12: "NumpadEqual",
            106: "NumpadMultiply",
            109: "NumpadSubtract",
          },
          r = {
            AltLeft: "Alt",
            AltRight: "Alt",
            ArrowDown: "Down",
            ArrowLeft: "Left",
            ArrowRight: "Right",
            ArrowUp: "Up",
            Backquote: "`",
            Backslash: "\\",
            Backspace: "Backspace",
            BracketLeft: "[",
            BracketRight: "]",
            CapsLock: "CapsLock",
            Comma: ",",
            ControlLeft: "Control",
            ControlRight: "Control",
            Delete: "Delete",
            Digit0: "0",
            Digit1: "1",
            Digit2: "2",
            Digit3: "3",
            Digit4: "4",
            Digit5: "5",
            Digit6: "6",
            Digit7: "7",
            Digit8: "8",
            Digit9: "9",
            End: "End",
            Enter: "Enter",
            Equal: "=",
            Escape: "Escape",
            F1: "F1",
            F2: "F2",
            F3: "F3",
            F4: "F4",
            F5: "F5",
            F6: "F6",
            F7: "F7",
            F8: "F8",
            F9: "F9",
            F10: "F10",
            F11: "F11",
            F12: "F12",
            F13: "F13",
            F14: "F14",
            F15: "F15",
            F16: "F16",
            F17: "F17",
            F18: "F18",
            F19: "F19",
            F20: "F20",
            F21: "F21",
            F22: "F22",
            F23: "F23",
            F24: "F24",
            Home: "Home",
            Insert: "Insert",
            KeyA: "A",
            KeyB: "B",
            KeyC: "C",
            KeyD: "D",
            KeyE: "E",
            KeyF: "F",
            KeyG: "G",
            KeyH: "H",
            KeyI: "I",
            KeyJ: "J",
            KeyK: "K",
            KeyL: "L",
            KeyM: "M",
            KeyN: "N",
            KeyO: "O",
            KeyP: "P",
            KeyQ: "Q",
            KeyR: "R",
            KeyS: "S",
            KeyT: "T",
            KeyU: "U",
            KeyV: "V",
            KeyW: "W",
            KeyX: "X",
            KeyY: "Y",
            KeyZ: "Z",
            Minus: "-",
            NumLock: "NumLock",
            Numpad0: "Numpad0",
            Numpad1: "Numpad1",
            Numpad2: "Numpad2",
            Numpad3: "Numpad3",
            Numpad4: "Numpad4",
            Numpad5: "Numpad5",
            Numpad6: "Numpad6",
            Numpad7: "Numpad7",
            Numpad8: "Numpad8",
            Numpad9: "Numpad9",
            NumpadAdd: "NumpadAdd",
            NumpadComma: "NumpadComma",
            NumpadDecimal: "NumpadDecimal",
            NumpadDivide: "NumpadDivide",
            NumpadEnter: "NumpadEnter",
            NumpadEqual: "NumpadEqual",
            NumpadMultiply: "NumpadMultiply",
            NumpadSubtract: "NumpadSubtract",
            PageDown: "PageDown",
            PageUp: "PageUp",
            Period: ".",
            PrintScreen: "PrintScreen",
            Quote: "'",
            ScrollLock: "ScrollLock",
            Semicolon: ";",
            ShiftLeft: "Shift",
            ShiftRight: "Shift",
            Space: "Space",
            Tab: "Tab",
            Slash: "/",
          },
          o = {
            0: 48,
            1: 49,
            2: 50,
            3: 51,
            4: 52,
            5: 53,
            6: 54,
            7: 55,
            8: 56,
            9: 57,
            Backspace: 8,
            Tab: 9,
            Enter: 13,
            Shift: 16,
            Control: 17,
            Alt: 18,
            CapsLock: 20,
            Escape: 27,
            Space: 32,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            Left: 37,
            Up: 38,
            Right: 39,
            Down: 40,
            PrintScreen: 44,
            Insert: 45,
            Delete: 46,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            Numpad0: 96,
            Numpad1: 97,
            Numpad2: 98,
            Numpad3: 99,
            Numpad4: 100,
            Numpad5: 101,
            Numpad6: 102,
            Numpad7: 103,
            Numpad8: 104,
            Numpad9: 105,
            NumpadMultiply: 106,
            NumpadAdd: 107,
            NumpadSubtract: 109,
            NumpadDecimal: 110,
            NumpadDivide: 111,
            NumpadEqual: 12,
            NumpadEnter: 13,
            NumpadComma: 194,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            F13: 124,
            F14: 125,
            F15: 126,
            F16: 127,
            F17: 128,
            F18: 129,
            F19: 130,
            F20: 131,
            F21: 132,
            F22: 133,
            F23: 134,
            F24: 135,
            NumLock: 144,
            ScrollLock: 145,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222,
          };
        function l(e) {
          let t = e.split("+"),
            a = 0;
          for (let e of t)
            switch (e) {
              case "Command":
              case "Cmd":
                a |= n.Meta;
                break;
              case "Control":
              case "Ctrl":
              case "CommandOrCtrl":
              case "CmdOrCtrl":
                a |= n.Ctrl;
                break;
              case "Shift":
                a |= n.Shift;
                break;
              case "Alt":
              case "Option":
                a |= n.Alt;
                break;
              case "AltGr":
              case "Super":
                break;
              case "Arrow":
                a |= n.Arrow;
                break;
              case "1~7":
                a |= n.OneToSeven;
                break;
              case "1~9":
                a |= n.OneToNine;
                break;
              default:
                e in o && (a |= o[e]);
            }
          return a;
        }
        function s(e) {
          let t = "";
          (t += e & n.Ctrl ? "Ctrl+" : ""), (t += e & n.Shift ? "Shift+" : "");
          return (
            (t += e & n.Alt ? "Alt+" : ""),
            e & n.Arrow
              ? (t += "Arrow")
              : e & n.OneToSeven
              ? (t += "1~7")
              : e & n.OneToNine
              ? (t += "1~9")
              : (t += i[e & n.Char]),
            t
          );
        }
        function d(e, t) {
          e = c(e);
          let a = "";
          (a += t.hasCtrl ? "Ctrl+" : ""), (a += t.hasShift ? "Shift+" : "");
          return (a += t.hasAlt ? "Alt+" : ""), (a += e), a;
        }
        function c(e) {
          let t =
            { " ": "Space", NumpadEnter: "Enter" }[
              (e = e && (e.length > 1 ? e : e.toUpperCase()))
            ] || e;
          return t in o || (t = ""), t;
        }
        function u(e, t) {
          if (!(e = c(e))) return !1;
          if (
            ["ALT", "META", "CONTROL", "SHIFT", "SUPER"].includes(e.toUpperCase())
          )
            return !1;
          if (
            [
              " ",
              "SPACE",
              "TAB",
              "ENTER",
              "UP",
              "DOWN",
              "LEFT",
              "RIGHT",
              "DELETE",
              "INSERT",
              "ESCAPE",
              "BACKSPACE",
            ].includes(e.toUpperCase())
          )
            return !0;
          if (e.toUpperCase().startsWith("F") && e.length > 1) return !0;
          return (
            !(t.hasShift && !t.hasAlt && !t.hasCtrl && !t.hasMeta) &&
            Object.values(t).some((e) => !0 === e)
          );
        }
        function m(e, t) {
          let a = t && t[e];
          return (a = c(a)), a || (a = r[e]), a;
        }
        function v(e) {
          let t = e;
          return "string" == typeof e && (t = e.replace("=", "Plus")), t;
        }
      },
      31945: (e, t, a) => {
        "use strict";
        a.d(t, { aJ: () => i, b3: () => r, v3: () => n, zN: () => o });
        const n = (e) => `frame-shared-${e}`,
          i = (e) => `editor-shared-${e}`,
          r = (e) => `window-${e}`,
          o = (e, t) => `${e}-${t}`;
      },
      19532: (e, t, a) => {
        "use strict";
        a.d(t, { Z: () => n });
        const n = {
          editor: {
            selection: !0,
            "selection.none": !1,
            "selection.single": !1,
            "selection.couple": !1,
            "selection.greaterThanCouple": !1,
            "selection.some": !1,
            "selection.multiple": !1,
            "selection.hasTopic": !1,
            "selection.hasCentralTopic": !1,
            "selection.hasActivatedTopBranch": !1,
            "selection.hasBoundary": !1,
            "selection.hasRelationship": !1,
            "selection.hasSummary": !1,
            "selection.hasCallout": !1,
            "selection.hasFloatingTopic": !1,
            "selection.hasImage": !1,
            "selection.hasEquation": !1,
            "selection.hasImageLoadingFailed": !1,
            "selection.onlyCentralTopic": !1,
            "selection.onlyActivatedTopBranch": !1,
            "selection.allTopics": !1,
            "selection.allBoundaries": !1,
            "selection.allRelationships": !1,
            "selection.allSummaries": !1,
            "selection.allCallout": !1,
            "selection.allFloatingTopic": !1,
            "selection.allImages": !1,
            "selection.allEquations": !1,
            "selection.text": !1,
            "selection.hasTreeTableCell": !1,
            "selection.hasFinebone": !1,
            "selection.hasTopicWithTitle": !1,
            "selection.hasTopicWithMarker": !1,
            "selection.hasTopicWithLabel": !1,
            "selection.hasTopicWithLink": !1,
            "selection.onlyTopicWithMarker": !1,
            "selection.onlyTopicWithLabel": !1,
            "selection.onlyTopicWithTask": !1,
            "selection.onlyTopicWithLink": !1,
            "focus.editor": !1,
            "focus.mindMap": !1,
            "focus.outliner": !1,
            "focus.searchPanel": !1,
            "focus.formatPanel": !1,
            "focus.editTitleInput": !1,
            "focus.input": !1,
            "focus.popover": !1,
            "focus.outlinerNotes": !1,
            "editor.inZenMode": !1,
            "editor.inBeginnerMode": !1,
            "editor.inIMEMode": !1,
            "editor.inMapShotMode": !1,
            "editor.inTryPitchMode": !1,
            "editor.inBeginnerDialog": !1,
            "editor.inPopoverMode": !1,
            "snowbrush.inEditTitleMode": !1,
            "snowbrush.inDraggingMode": !1,
            "snowbrush.inBranchOnly": !1,
            "snowbrush.canUndo": !1,
            "snowbrush.canRedo": !1,
            "snowbrush.canPasteStyle": !1,
            "mindmap.inEditTitleMode": !1,
            "mindmap.inDraggingMode": !1,
            "mindmap.inBranchOnly": !1,
            "mindmap.canUndo": !1,
            "mindmap.canRedo": !1,
            "mindmap.canPasteStyle": !1,
          },
          frame: {},
          window: { themeEditor: !1 },
        };
      },
      22244: (e, t, a) => {
        "use strict";
        a.d(t, { Z: () => we });
        var n = a(54856);
        var i = a(86633),
          r = a(90435);
        const o =
            window.location.pathname.match(/\/([a-zA-Z0-9-]+)\.html$/)[1] ||
            "default",
          l = (0, i.ZP)(`error:${o}`),
          s = new (class {
            constructor(e, { dialog: t = null, ipc: a = null } = {}) {
              (this.logger = e), (this.dialog = t), (this.ipc = a);
            }
            handle(e) {
              let t = "Unknown Error";
              e && (t = e.stack || e.message || e.toString()),
                this.logger.error(t),
                this.ipc
                  ? this.ipc
                      .fetch(n.Fx, {
                        name: "dialog-err",
                        payload: {
                          name: e.name,
                          message: e.message,
                          stack: e.stack,
                          code: e.code,
                        },
                      })
                      .then(() => {})
                      .catch((e) => {
                        this.logger.error(e);
                      })
                  : this.dialog &&
                    this.dialog.showMessageBox({
                      type: "error",
                      title: "Xmind",
                      message: "Oops, some error occurred!",
                      detail: t,
                      buttons: ["OK"],
                      cancelId: 0,
                    });
            }
          })(l, { ipc: r.ZP });
        window.addEventListener("error", function (e) {
          const t = e.error;
          t && s.handle(t);
        }),
          window.addEventListener("unhandledrejection", function (e) {
            const t = e.reason;
            t && s.handle(t);
          });
        const d = s;
        var c = a(2954),
          u = a(63477),
          m = a.n(u),
          v = a(72298),
          p = a(67657),
          h = a(95588),
          g = a.n(h),
          f = a(30266),
          w = a(31945),
          y = a(82361),
          b = a.n(y),
          S = a(28914);
        const T = new (b())(),
          E = T.emit;
        (T.emit = function (e, ...t) {
          E.call(T, e, ...t), I(e) && S.Z.send("revents:broadcast", [e, ...t]);
        }),
          T.on("newListener", (e) => {
            if (I(e)) {
              0 === T.eventNames().filter(I).length &&
                S.Z.send("revents:register");
            }
          }),
          T.on("removeListener", (e) => {
            if (I(e)) {
              0 === T.eventNames().filter(I).length &&
                S.Z.send("revents:unregister");
            }
          });
        const C = T.removeAllListeners;
        function I(e) {
          return "newListener" !== e && "removeListener" !== e;
        }
        (T.removeAllListeners = function (e) {
          if (!e) throw new Error("revents's removeAllListeners is forbidden!");
          if ("newListener" === e || "removeListener" === e)
            throw new Error(
              'revents\'s "newListener" and "removeListener" handler should not be removed',
            );
          C.call(T, e);
        }),
          S.Z.on("revents:broadcast", (e, t) => {
            let a = JSON.parse(t);
            E.apply(T, a);
          }),
          window.addEventListener("unload", () => {
            S.Z.send("revents:unregister");
          });
        const A = T;
        var k = a(56222),
          O = a(77412);
        const F = {
          install(e) {
            const t = "vana-ref";
            e.directive(t, {
              bind: function (e, t, a) {
                t.value(a.componentInstance || e, a.key);
              },
              update: function (e, a, n, i) {
                if (i.data && i.data.directives) {
                  var r = i.data.directives.find(function (e) {
                    return e.name === t;
                  });
                  if (r && r.value !== a.value)
                    return (
                      r && r.value(null, i.key),
                      void a.value(n.componentInstance || e, n.key)
                    );
                }
                (n.componentInstance === i.componentInstance &&
                  n.elm === i.elm) ||
                  a.value(n.componentInstance || e, n.key);
              },
              unbind: function (e, t, a) {
                t.value(null, a.key);
              },
            });
          },
        };
        var L = a(78152);
        const N = {
          install(e) {
            e.prototype.$T = function (e, ...t) {
              return (0, L.JE)().T(e, ...t);
            };
          },
        };
        var P = a(96829);
        const D = (0, i.ZP)("safe-runner");
        const x = class {
          constructor(e) {
            this.errorHandler = e;
          }
          _handleError(e) {
            "function" == typeof this.errorHandler
              ? this.errorHandler(e)
              : D.error((0, P.SC)(e));
          }
          install(e) {
            const t = this;
            e.prototype.$safeRun = function (e) {
              try {
                let a = e();
                return a && a.then && a.catch
                  ? a.then((e) => e).catch((e) => t._handleError(e))
                  : a;
              } catch (e) {
                t._handleError(e);
              }
            };
          }
        };
        var _ = a(69931);
        const H = {
          install(e) {
            (e.prototype.$toResourceURL = (...e) =>
              (0, _.ju)(...e)
                .replace("(", "%28")
                .replace(")", "%29")),
              (e.prototype.$loadResource = _.zD);
          },
        };
        var M = a(53775),
          R = a(59474);
        var B = a(30247),
          U = a(2563),
          V = a(65428),
          G = function (e, t) {
            var a = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                t.indexOf(n) < 0 &&
                (a[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
              var i = 0;
              for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                t.indexOf(n[i]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                  (a[n[i]] = e[n[i]]);
            }
            return a;
          };
        const j = (0, i.ZP)("font");
        var z = a(22037),
          K = a.n(z),
          W = a(38629);
        const Z = (0, i.ZP)("performance");
        function $(e) {
          e
            ? document.body.style.setProperty("--uk-system-accent-color", e)
            : document.body.style.removeProperty("--uk-system-accent-color");
        }
        var J = a(63111),
          X = a(18621),
          q = a(69297),
          Q = a(20993),
          Y = function (e, t, a, n) {
            return new (a || (a = Promise))(function (i, r) {
              function o(e) {
                try {
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof a
                      ? t
                      : new a(function (e) {
                          e(t);
                        })).then(o, l);
              }
              s((n = n.apply(e, t || [])).next());
            });
          };
        var ee = function (e, t, a, n) {
          return new (a || (a = Promise))(function (i, r) {
            function o(e) {
              try {
                s(n.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof a
                    ? t
                    : new a(function (e) {
                        e(t);
                      })).then(o, l);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
        const te = {
            start: () => {
              const e = (0, R.i)();
              e.startJob();
              const t = (0, c.YP)(
                () => e.pendingJobs,
                (a) => {
                  a > 0 || (t(), e.markReady());
                },
              );
              setTimeout(() => e.endJob(), 0);
            },
          },
          ae = (() => {
            const e = [],
              t = new Map();
            return {
              start: () => {
                const e = (0, R.i)();
                e.startJob(),
                  r.ZP.fetch(n.de).then((t) => {
                    Object.keys(t).forEach((e) => {
                      var a;
                      const n = (0, L.F_)(e);
                      null === (a = null == n ? void 0 : n()) ||
                        void 0 === a ||
                        a.$patch(t[e]);
                    }),
                      A.on("piniaStoreDidUpdateState", (e) => {
                        e.forEach(({ id: e, state: t }) => {
                          var a;
                          const n = (0, L.F_)(e);
                          null === (a = null == n ? void 0 : n()) ||
                            void 0 === a ||
                            a.$patch((0, c.qj)(t));
                        });
                      }),
                      e.endJob();
                  });
              },
              plugin: (a) => {
                (0, L.W$)(a.store.$id) &&
                  a.store.$subscribe((i, o) => {
                    if (a.store.$id !== i.storeId) return;
                    const l = t.get(i.storeId);
                    t.set(i.storeId, !0),
                      (null === window || void 0 === window
                        ? void 0
                        : window.isEditorFrame) ||
                        (l &&
                          i.type !== O.x1.patchObject &&
                          (0, L.W$)(i.storeId) &&
                          (e.push({
                            id: i.storeId,
                            state: JSON.parse(JSON.stringify(o)),
                          }),
                          Promise.resolve().then(() => {
                            r.ZP.fetch(n.w6, { states: e }), (e.length = 0);
                          })));
                  });
              },
            };
          })(),
          ne = {
            start: () => {
              (0, V.r)();
              const e = (0, _.ju)("/static/snowbird/resource/"),
                t = (function () {
                  const e = {};
                  return (
                    B.Fy((t, a) => {
                      e[t] = a.map((e) =>
                        Object.assign(Object.assign({}, e), { family: t }),
                      );
                    }),
                    e
                  );
                })(),
                a = Object.values(t)
                  .flat()
                  .map((t) =>
                    (function (
                      {
                        family: e,
                        src: t,
                        italic: a,
                        weight: n,
                        "unicode-range": i,
                      },
                      r,
                    ) {
                      const o = new URL(t, r).href;
                      let l = { family: e, source: `url("${o}")`, url: o };
                      return (
                        void 0 !== a &&
                          (l = Object.assign(Object.assign({}, l), {
                            style: a ? "italic" : "normal",
                          })),
                        void 0 !== n &&
                          (l = Object.assign(Object.assign({}, l), {
                            weight: n.toString(),
                          })),
                        void 0 !== i &&
                          (l = Object.assign(Object.assign({}, l), {
                            unicodeRange: i,
                          })),
                        l
                      );
                    })(t, e),
                  );
              !(function (e) {
                Promise.all(
                  e.map((e) => {
                    var { family: t, source: a } = e,
                      n = G(e, ["family", "source"]);
                    const i = new FontFace(t, a, n);
                    return i
                      .load()
                      .then(() => {
                        document.fonts.add(i);
                      })
                      .catch(() => {
                        j.error("faild to load css font from", a);
                      });
                  }),
                );
              })(a),
                (function () {
                  const e = document.createElement("style"),
                    t = B.Hn();
                  (e.innerHTML = t),
                    document.head.appendChild(e),
                    document.body.style.setProperty("--info-button-font", B.o6);
                })(),
                (0, U.O)().updateBuiltinFontFamilies(
                  Array.from(new Set(Object.keys(t))),
                );
            },
          },
          ie = {
            start: () => {
              const e = (0, R.i)(),
                { _apr: t, _acc: a } = m().parse(location.search.slice(1));
              t &&
                (e.startJob(),
                Z.debug("About to load CSS using _apr query parameter:", t),
                (0, W.Z)(t, () => {
                  Z.debug("Loaded CSS using _apr query parameter:", t),
                    setTimeout(() => {
                      e.endJob();
                    }, 10);
                })),
                a && $(a),
                "darwin" === K().platform() &&
                  parseFloat(K().release()) >= 20 &&
                  document.body.classList.add("uk-darwin-bigsur"),
                (0, c.YP)(
                  () => (0, L.S)().language,
                  (e, t) => {
                    t && document.body.classList.remove(`uk-lang-${t}`),
                      e && document.body.classList.add(`uk-lang-${e}`);
                  },
                );
              const n = (0, c.YP)(
                () => (0, R.i)().ready,
                (e) => {
                  e &&
                    (n(),
                    (0, c.YP)(
                      () => [
                        (0, L.S)().appearance,
                        (0, U.O)().ignoreAppearanceChanged,
                      ],
                      ([e, t]) => {
                        t || (0, W.Z)(e);
                      },
                    ),
                    (0, c.YP)(
                      () => (0, L.qr)().systemAccentColor,
                      (e) => $(e),
                    ),
                    (0, c.YP)(
                      () => (0, L.S)().systemScrollbarSetting,
                      (e) =>
                        (function (e) {
                          const t = "uk-global-scrollbar";
                          document.body.classList.forEach((e) => {
                            e.startsWith(t) && document.body.classList.remove(e);
                          }),
                            document.body.classList.add(
                              `${t}-${(e || "always").toLowerCase()}`,
                            );
                        })(e),
                      { immediate: !0 },
                    ));
                },
              );
            },
          },
          re = {
            start: () => {
              J.nd &&
                J.qu.forEach((e) => {
                  (0, L.JX)().appendBeforeHandler(e, () =>
                    Y(void 0, void 0, void 0, function* () {
                      return yield r.ZP.fetch(n.QN), "interruption";
                    }),
                  );
                }),
                Object.keys(J.JN)
                  .concat(Object.keys(J.oF))
                  .forEach((e) => {
                    (0, L.JX)().appendBeforeHandler(e, () =>
                      ((e) =>
                        Y(void 0, void 0, void 0, function* () {
                          if (!(yield r.ZP.fetch(n.Gy, e))) return "interruption";
                        }))(e),
                    );
                  }),
                J.ZK.forEach((e) => {
                  (0, L.JX)().appendAfterHandler(e, () => {
                    const t = e.split(".")[1];
                    (0, X.L9)({
                      eventCategory: "Edit",
                      eventAction: t,
                      eventValue: 1,
                    });
                  });
                }),
                J.ff.forEach((e) => {
                  (0, L.JX)().appendAfterHandler(e, () => {
                    (0, X.L9)({
                      eventCategory: "Share",
                      eventAction: e,
                      eventValue: 1,
                    });
                  });
                }),
                J.y_.forEach((e) => {
                  (0, L.JX)().appendBeforeHandler(e, () => {
                    (0, q.Kl)();
                  });
                }),
                J.xk.forEach((e) => {
                  (0, L.JX)().appendBeforeHandler(e, () => {
                    (0, q.fv)();
                  });
                }),
                J.wp.forEach((e) => {
                  (0, L.JX)().appendBeforeHandler(e, () => {
                    (0, q.nz)();
                  });
                }),
                (0, L.JX)().appendAfterHandler("editor.addTask", Q.l5),
                (0, L.JX)().appendAfterHandler("editor.cancelTask", Q.DY),
                (0, L.JX)().appendAfterHandler("editor.checkTask", () => {
                  (0, Q.fR)("checkTask");
                }),
                (0, L.JX)().appendAfterHandler("editor.uncheckTask", () => {
                  (0, Q.fR)("uncheckTask");
                });
            },
          },
          oe = {
            start: () => {
              const e = (0, R.i)();
              e.startJob(),
                (0, L.JX)().injectDoHandleCommand((e, t) =>
                  ee(void 0, void 0, void 0, function* () {
                    return r.ZP.fetch(n.hR, { commandId: e, handlerArgs: t });
                  }),
                ),
                e.endJob();
            },
          },
          le = [ae.plugin],
          se = m().parse(window.location.search.slice(1)),
          de = !0,
          ce = !!se.isBrowserView,
          ue = !!se.isEditorFrame;
        let me = p.getCurrentWindow;
        ce &&
          (me = function () {
            const e = S.Z.sendSync("get-current-window-id");
            return p.BrowserWindow.fromId(parseInt(e));
          });
        const ve =
            window.location.pathname.match(/\/([a-zA-Z0-9-]+)\.html$/)[1] ||
            "default",
          pe = (0, i.ZP)("performance");
        pe.debug("Initializing page:", ve),
          v.webFrame.setVisualZoomLevelLimits(1, 1),
          document.body.classList.add("uk-win32"),
          Object.defineProperty(window, "id", { get: () => me().id }),
          (window.getWindowIdAsync = async () =>
            await (0, k.A)("get-current-window-id"));
        (window.getCurrentWindowAsync = async () => {
          const e = await window.getWindowIdAsync();
          return p.BrowserWindow.fromId(parseInt(e));
        }),
          (window.isEditorFrame = ue);
        const he = c.ZP.observable({
          isBeingDestroyed: !1,
          isDestroyed: !1,
          isShown: !1,
        });
        ["isBeingDestroyed", "isDestroyed", "isShown"].forEach((e) => {
          Object.defineProperty(window, e, {
            get: () => he[e],
            set(t) {
              he[e] = t;
            },
          });
        }),
          (window.show = () => {
            me().show();
          }),
          (window.hide = () => {
            me().hide();
          }),
          (window.close = () => {
            me().close();
          }),
          (window.minimize = () => {
            me().minimize();
          }),
          (window.maximize = () => {
            me().maximize();
          }),
          (window.restore = () => {
            me().unmaximize();
          }),
          (window.isMinimized = () => me().isMinimized()),
          (window.isMaximized = () => me().isMaximized()),
          (window.isFullScreen = () => me().isFullScreen()),
          (window.resizeTo = (e, t) => {
            me().setContentSize(e, t);
          }),
          (window.resizeBy = (e, t) => {
            let [a, n] = me().getContentSize();
            me().setContentSize(a + e, n + t);
          }),
          (window.moveTo = (e, t) => {
            me().setPosition(e, t);
          }),
          (window.moveBy = (e, t) => {
            let [a, n] = me().getPosition();
            me().setPosition(a + e, n + t);
          }),
          A.on("window-maximize", () => {
            document.body.classList.add("uk-window-maximized"),
              window.dispatchEvent(new Event("maximize"));
          }),
          A.on("window-unmaximize", () => {
            document.body.classList.remove("uk-window-maximized"),
              window.dispatchEvent(new Event("restore"));
          }),
          A.on("window-minimize", () => {
            window.dispatchEvent(new Event("minimize"));
          }),
          A.on("window-unminimize", () => {
            window.dispatchEvent(new Event("unminimize"));
          }),
          A.on("window-focus", () => {
            document.body.classList.remove("uk-window-inactive");
          }),
          A.on("window-blur", () => {
            document.body.classList.add("uk-window-inactive");
          }),
          A.on("window-enter-full-screen", () => {
            document.body.classList.add("uk-window-full-screen"),
              window.dispatchEvent(new Event("enter-full-screen"));
          }),
          A.on("window-leave-full-screen", () => {
            document.body.classList.remove("uk-window-full-screen"),
              window.dispatchEvent(new Event("leave-full-screen"));
          }),
          A.on("window-sheet-begin", () => {
            document.body.classList.add("uk-disabled"),
              window.dispatchEvent(new Event("sheet-begin"));
          }),
          A.on("window-sheet-end", () => {
            document.body.classList.remove("uk-disabled"),
              window.dispatchEvent(new Event("sheet-end"));
          }),
          A.on("window-show", () => {
            window.dispatchEvent(new Event("window-show"));
          });
        const ge = me && me();
        if (
          (ge &&
            ge.isMaximized() &&
            document.body.classList.add("uk-window-maximized"),
          ge &&
            ge.isFullScreen() &&
            document.body.classList.add("uk-window-full-screen"),
          ge &&
            !ge.isFocused() &&
            document.body.classList.add("uk-window-inactive"),
          document.addEventListener("keydown", (e) => {
            27 === e.keyCode &&
              document.body.querySelector(".uk-window-dialog") &&
              setTimeout(() => {
                if (e.defaultPrevented) return;
                const t = new Event("close");
                window.dispatchEvent(t) && window.close();
              }, 0);
          }),
          ge && ge.isMaximizable && ge.isMaximizable())
        ) {
          const e = ["a", "button", "select", "input"];
          document.addEventListener("dblclick", (t) => {
            const { target: a, defaultPrevented: n } = t;
            if (n) return;
            let i = a;
            for (; i && "function" == typeof i.matches; ) {
              if (e.some((e) => i.matches(e))) return;
              i = i.parentNode;
            }
            let r =
              document.querySelector(".uk-window-expanded-title-bar") ||
              document.querySelector(".uk-window-title-bar");
            r &&
              r.contains(a) &&
              (window.isMaximized() ? window.restore() : window.maximize());
          });
        }
        c.ZP.use(O.og),
          c.ZP.use(new x((e) => d.handle(e))),
          c.ZP.use(g()),
          c.ZP.use(N),
          c.ZP.use(H),
          c.ZP.use(F),
          c.ZP.use(f.ZP.Plugin),
          pe.debug("Initialized page:", ve);
        const fe = (0, O.WB)();
        async function we(
          e,
          {
            mountTarget: t = "#app",
            name: a = null,
            plugins: i = [],
            runAfterPiniaPlugin: o,
            editorId: l = null,
          } = {},
        ) {
          pe.debug("Bootstrapping:", ve);
          for (let e of i) c.ZP.use(e);
          let s;
          return (
            (0, L._t)((0, w.b3)(window.id)),
            "dialog-err" === a && (0, L.VE)((0, w.zN)("dialog-err", window.id)),
            "dialog-problem" === a &&
              (0, L.ym)((0, w.zN)("dialog-problem", window.id)),
            l && (0, L.OD)((0, w.aJ)(l)),
            await new Promise((a) => {
              let i = (0, c.YP)(
                () => (0, R.i)().ready,
                (l) => {
                  l &&
                    (i(),
                    document.body.classList.add(`uk-lang-${(0, L.S)().language}`),
                    o?.(fe),
                    pe.debug("About to create Vue instance:", ve),
                    (s = new c.ZP({ ...e, pinia: fe })),
                    pe.debug("Created Vue instance:", ve),
                    window.addEventListener("unload", () => {
                      (window.isBeingDestroyed = !0),
                        s.$destroy(),
                        (window.isDestroyed = !0);
                    }),
                    pe.debug("About to mount Vue instance:", ve),
                    s.$mount(t || "#app"),
                    pe.debug("Mounted Vue instance:", ve),
                    (0, M.qJ)().then(async () => {
                      const e = await window.getWindowIdAsync();
                      !de && (await r.ZP.fetch((0, n.EV)(e), "show")),
                        de && (await r.ZP.fetch((0, n.EV)(e), "moveToShow")),
                        (window.isShown = !0);
                    }),
                    a(s));
                },
              );
            }),
            s
          );
        }
        (0, O.uX)(fe),
          le.forEach((e) => fe.use(e)),
          Object.values(L.rx).forEach((e) => e()),
          te.start(),
          ae.start(),
          ne.start(),
          ie.start(),
          re.start(),
          oe.start();
      },
      94593: (e, t, a) => {
        "use strict";
        a.d(t, { Z: () => o });
        var n = a(81296),
          i = a.n(n);
        const r = (0, a(86633).ZP)("ipc:proxy:"),
          o = new Proxy(i(), {
            get(e, t) {
              let a = Reflect.get(e, t);
              return "function" == typeof a
                ? (...n) => {
                    if (!window.isDestroyed) return a.apply(e, n);
                    r.error(
                      `window has been destroyed, we should not invoke fsp.${t})`,
                    );
                  }
                : a;
            },
          });
      },
      56222: (e, t, a) => {
        "use strict";
        a.d(t, { A: () => r });
        var n = a(72298);
        let i = 0;
        function r(e, t) {
          return new Promise((a) => {
            const r = i++;
            n.ipcRenderer.once(
              `internal-ipc-api-reply:${e}:${r}`,
              (e, { data: t = null }) => {
                a(t);
              },
            ),
              n.ipcRenderer.send(`internal-ipc-api:${e}`, { payload: t, seq: r });
          });
        }
      },
      28914: (e, t, a) => {
        "use strict";
        a.d(t, { Z: () => r });
        var n = a(72298);
        const i = (0, a(86633).ZP)("ipc:proxy:"),
          r = new Proxy(n.ipcRenderer, {
            get(e, t) {
              let a = Reflect.get(e, t);
              return "function" == typeof a
                ? (...n) => {
                    if (!window.isDestroyed) return a.apply(e, n);
                    i.error(
                      `window has been destroyed, we should not invoke ipcRenderer.${t} with args (${JSON.stringify(
                        n,
                      )})`,
                    );
                  }
                : a;
            },
          });
      },
      90435: (e, t, a) => {
        "use strict";
        a.d(t, { ZP: () => s, he: () => l });
        var n = a(96829),
          i = a(28914);
        const r = new Map();
        let o = 0;
        function l(e, t) {
          const a = r.get(e);
          return a
            ? Promise.resolve().then(() => a(t))
            : new Promise((a, r) => {
                const l = o++;
                i.Z.once(
                  `ipc-api-reply:${e}:${l}`,
                  (e, { error: t = null, data: i = null }) => {
                    t ? r((0, n.aq)(t)) : a(i);
                  },
                ),
                  i.Z.send(`ipc-api:${e}`, { payload: t, seq: l });
              });
        }
        const s = {
          fetch: l,
          route: function (e, t) {
            if ("function" != typeof t)
              throw new Error(
                `IPC API "${e}" is routed to invalid handler: ${typeof t}`,
              );
            if (r.has(e)) throw new Error(`IPC API "${e}" is routed twice`);
            const a = `ipc-api:${e}`;
            if (i.Z.eventNames().includes(a))
              throw new Error(`IPC API "${e}" is routed twice`);
            const o = (a, { payload: r = null, seq: o = 0 } = {}) => {
              const l = `ipc-api-reply:${e}:${o}`;
              Promise.resolve()
                .then(() => t(r))
                .then((e) => {
                  i.Z.send(l, { data: e });
                })
                .catch((e) => {
                  i.Z.send(l, { error: (0, n.SC)(e) });
                });
            };
            return (
              r.set(e, t),
              i.Z.on(a, o),
              i.Z.send("ipc-api-register", { apiName: e }),
              () => {
                i.Z.send("ipc-api-unregister", { apiName: e }),
                  i.Z.removeListener(a, o),
                  r.delete(e);
              }
            );
          },
        };
      },
      86633: (e, t, a) => {
        "use strict";
        a.d(t, { ZP: () => u });
        var n = a(73837);
        const i = {
          reset: "[39m",
          debug: "[32m",
          info: "[37m",
          warn: "[33m",
          error: "[31m",
        };
        class r {
          constructor(e, t = "root") {
            (this.handler = e), (this.moduleName = t), (this.debugAllowed = null);
          }
          logger(e) {
            return e
              ? new r(
                  this.handler,
                  "root" === this.moduleName ? e : this.moduleName + ":" + e,
                )
              : this;
          }
          debug(e, ...t) {
            return (
              !0 !== this.debugAllowed &&
                !1 !== this.debugAllowed &&
                (this.handler && "boolean" == typeof this.handler.isDebugging
                  ? (this.debugAllowed = this.handler.isDebugging)
                  : this.handler && "function" == typeof this.handler.isDebugging
                  ? (this.debugAllowed = Boolean(
                      this.handler.isDebugging(
                        "xmind:" + this.moduleName + ":verbose",
                      ) ||
                        this.handler.isDebugging(
                          "xmind:verbose:" + this.moduleName,
                        ),
                    ))
                  : (this.debugAllowed = !1)),
              this.debugAllowed ? (this._handle("debug", e, t), this) : this
            );
          }
          info(e, ...t) {
            return this._handle("info", e, t), this;
          }
          warn(e, ...t) {
            return this._handle("warn", e, t), this;
          }
          error(e, ...t) {
            return this._handle("error", e, t), this;
          }
          _handle(e, t, a) {
            this.handler &&
              this.handler.handle &&
              this.handler.handle({
                moduleName: this.moduleName,
                timestamp: new Date().toISOString(),
                level: e,
                message: t,
                args: a,
              });
          }
        }
        var o = a(96829),
          l = a(79409),
          s = a(72298);
        const d = new (class {
            constructor(e, { colorful: t = !1 } = {}) {
              (this.console = e), (this.colorful = t);
            }
            handle(e) {
              this.writeLogToConsole(e);
            }
            writeLogToConsole(e) {
              if (this.console)
                try {
                  let t = this.console,
                    a = t[e.level] || t.log;
                  a || ((t = global.console), (a = t[e.level] || t.log));
                  let r = (function (e) {
                    return `[${e.level[0].toUpperCase()} ${e.timestamp} ${
                      e.moduleName
                    }] ${(0, n.format)(e.message, ...e.args)}`;
                  })(e);
                  this.colorful && (r = (i[e.level] || i.reset) + r + i.reset),
                    a.call(t, r);
                } catch (t) {
                  global.console &&
                    global.console.trace(
                      "Failed to write log message",
                      e,
                      "to console.",
                    );
                }
            }
          })(global.console, { colorful: !1 }),
          c = new r({
            isDebugging:
              (0, l.Z)("version").indexOf("-alpha") >= 0 ||
              (0, l.Z)("version").indexOf("-dev") >= 0 ||
              o.x,
            handle(e) {
              d.handle(e),
                (function (e) {
                  s.ipcRenderer.send("logger:handleLogEvent", e);
                })(e);
            },
          }),
          u = (e = null) => c.logger(e);
      },
      79409: (e, t, a) => {
        "use strict";
        a.d(t, { Z: () => d });
        var n = a(71017),
          i = a.n(n),
          r = a(57147),
          o = a.n(r),
          l = a(7104);
        let s = null;
        function d(e = null) {
          return (
            s ||
              (s = JSON.parse(
                o().readFileSync(i().join((0, l.bY)(), "package.json")),
              )),
            e ? s[e] : s
          );
        }
      },
      69931: (e, t, a) => {
        "use strict";
        a.d(t, { Al: () => u, ju: () => s, pP: () => d, zD: () => c });
        var n = a(71017),
          i = a.n(n),
          r = a(94593),
          o = a(7104),
          l = a(5893);
        function s(e) {
          return (0, l.u3)(i().join((0, o.bY)(), e));
        }
        function d(e) {
          return (0, l.u3)(i().join((0, o.D8)(), e));
        }
        function c(e) {
          return r.Z.readFile(i().join((0, o.bY)(), e));
        }
        const u = (...e) =>
          s(...e)
            .replace("(", "%28")
            .replace(")", "%29");
      },
      69297: (e, t, a) => {
        "use strict";
        a.d(t, {
          Do: () => r,
          Kl: () => o,
          N1: () => i,
          fv: () => l,
          nz: () => s,
        });
        var n = a(28914);
        function i() {
          return n.Z.sendSync("usage-stats:data");
        }
        function r() {
          n.Z.send("usage-stats:increase", {
            type: "dwellTimeInZenMode",
            value: 1e3,
          });
        }
        function o(e = 1) {
          n.Z.send("usage-stats:increase", { type: "topicsAdded", value: e });
        }
        function l(e = 1) {
          n.Z.send("usage-stats:increase", { type: "sheetsAdded", value: e });
        }
        function s(e = 1) {
          n.Z.send("usage-stats:increase", { type: "eventsTriggered", value: e });
        }
      },
      18621: (e, t, a) => {
        "use strict";
        a.d(t, { Fk: () => r, L9: () => i });
        var n = a(28914);
        function i(e) {
          n.Z.send("usage-tracker:track-event", { event: e });
        }
        function r(e) {
          n.Z.send("usage-tracker:track-view", { view: e });
        }
      },
      7104: (e, t, a) => {
        "use strict";
        a.d(t, {
          D8: () => c,
          Im: () => p,
          L2: () => m,
          N8: () => u,
          Xl: () => h,
          bY: () => d,
          tY: () => v,
        });
        var n = a(71017),
          i = a.n(n),
          r = a(72298),
          o = a(56222);
        let l = null;
        let s = null;
        function d() {
          return s || (s = r.ipcRenderer.sendSync("workspace:appPath")), s;
        }
        function c() {
          return i().join(
            (l || (l = r.ipcRenderer.sendSync("workspace:userData")), l),
            "vana",
          );
        }
        function u() {
          return i().join(c(), "workbooks");
        }
        function m() {
          return i().join(c(), "file-cache");
        }
        function v() {
          return i().join(c(), "theme");
        }
        function p() {
          return i().join(c(), "smart-color");
        }
        async function h() {
          return (
            l || (l = await (0, o.A)("workspace:userData")),
            i().join(l, "vana", "workbooks")
          );
        }
      },
      38629: (e, t, a) => {
        "use strict";
        a.d(t, { Z: () => i });
        var n = a(69931);
        function i(e, t = null) {
          document.documentElement.setAttribute(
            "color-scheme",
            "default" === e ? "light" : "dark",
          );
          if (document.querySelector("#appearance_link"))
            return void ("function" == typeof t && t());
          const a = (0, n.ju)("static/vanakit/themes/vana.css"),
            i = document.createElement("link");
          (i.type = "text/css"),
            (i.id = "appearance_link"),
            (i.rel = "stylesheet"),
            (i.href = a),
            i.setAttribute("data-appearance", e),
            "function" == typeof t && (i.onload = () => t()),
            document.head.appendChild(i);
        }
      },
      63111: (e, t, a) => {
        "use strict";
        a.d(t, {
          $9: () => b,
          DJ: () => E,
          DU: () => g,
          E7: () => V,
          IQ: () => j,
          J9: () => Z,
          JN: () => A,
          N1: () => I,
          P8: () => C,
          Pq: () => c,
          TK: () => O,
          Us: () => T,
          Vl: () => P,
          W1: () => f,
          X_: () => H,
          Xb: () => h,
          ZK: () => F,
          Zr: () => p,
          _1: () => l,
          c0: () => M,
          cT: () => G,
          ff: () => L,
          hO: () => d,
          i_: () => s,
          lX: () => v,
          nd: () => R,
          oF: () => k,
          oM: () => y,
          oY: () => D,
          pD: () => U,
          q4: () => w,
          qu: () => B,
          rJ: () => m,
          sq: () => S,
          sv: () => _,
          tL: () => o,
          tZ: () => N,
          wi: () => u,
          wp: () => W,
          xk: () => K,
          y_: () => z,
          zr: () => x,
        });
        const n = 540,
          i = 640,
          r = 740,
          o = "All Themes",
          l = "icon-and-text",
          s = "icon-only",
          d = "snowbrush",
          c = "outliner",
          u = {
            TRIAL: String.fromCharCode(116, 114, 105, 97, 108),
            VALID: String.fromCharCode(118, 97, 108, 105, 100),
            EXPIRED: String.fromCharCode(101, 120, 112, 105, 114, 101, 100),
          },
          m = {
            VALID: String.fromCharCode(115, 117, 98),
            EXPIRED: String.fromCharCode(101, 120, 112, 105, 114, 101, 100),
            TRIAL: String.fromCharCode(116, 114, 105, 97, 108),
          },
          v = {
            VALID: 0,
            E_LICENSE_MISSING: 4001,
            E_KEY_INVALID: 4002,
            E_OUTDATED: 4003,
            E_MAJOR_VERSION_UNMATCHED: 4004,
            E_MACHINE_ID_UNMATCHED: 4005,
          },
          p = {
            VALID: 200,
            E_KEY_BIND_TO_ANOTHER_MACHINE: 403,
            E_KEY_NOT_EXIST: 404,
            E_PARAM_MISSING: 400,
            E_SERVER_ERR: 500,
          },
          h = { E_KEY_NOT_EXIST: 404, E_PARAM_MISSING: 400 },
          g = {
            UPLOADING: "uploading",
            PROCESSING: "processing",
            FINISHED: "finished",
            ERROR: "error",
          },
          f = 401,
          w = "4031",
          y = "4032",
          b = { NONE: "none", EVALUATING: "evaluating" },
          S = ["close", "hide", "show"],
          T = {
            "mas-demo": {
              title: "MAS Demo",
              dialogLike: !0,
              singleton: !0,
              resizable: !1,
              width: 740,
              height: 428,
            },
            welcome: {
              title: "What's New",
              singleton: !0,
              dialogLike: !0,
              resizable: !1,
              width: r,
              height: 560,
            },
            about: {
              title: "About Xmind",
              dialogLike: !0,
              singleton: !0,
              resizable: !1,
              width: 360,
              height: 420,
            },
            preferences: {
              title: "Preferences",
              dialogLike: !0,
              singleton: !0,
              resizable: !1,
              width: i,
              height: 557,
            },
            "dialog-file-cache": {
              title: "File Cache",
              dialogLike: !0,
              singleton: !0,
              resizable: !1,
              width: i,
              height: 360,
            },
            new: {
              title: "New",
              dialogLike: !0,
              singleton: !0,
              resizable: !1,
              width: 960,
              height: 648,
            },
            feedback: {
              title: "Feedback",
              dialogLike: !0,
              resizable: !1,
              singleton: !0,
              width: n,
              height: 476,
              alwaysOnTop: !0,
            },
            "video-viewer": {
              title: "Video Viewer",
              resizable: !0,
              singleton: !0,
              width: 1024,
              height: 600,
            },
            "dialog-color-theme": {
              title: "color theme",
              dialogLike: !0,
              modal: !0,
              resizable: !1,
              height: 521,
              width: r,
            },
            "dialog-signin": {
              title: "Sign In",
              dialogLike: !0,
              resizable: !1,
              singleton: !0,
              height: 560,
              width: r,
            },
            "dialog-gift-card": {
              title: "Redeem Gift Card",
              dialogLike: !0,
              resizable: !1,
              singleton: !0,
              height: 445,
              width: i,
            },
            "dialog-err": {
              title: "Send Error to Xmind",
              dialogLike: !0,
              resizable: !1,
              width: n,
              height: 240,
              alwaysOnTop: !0,
            },
            "dialog-problem": {
              title: "Problem Occurred",
              dialogLike: !0,
              resizable: !1,
              width: n,
              height: 252,
            },
            "dialog-keyassist": {
              title: "Key Assist",
              dialogLike: !0,
              resizable: !1,
              singleton: !0,
              height: 540,
              width: n,
            },
            "dialog-congratulate": {
              title: "Upgrade Successful",
              dialogLike: !0,
              resizable: !1,
              width: i,
              height: 390,
              alwaysOnTop: !0,
            },
            "dialog-setpassword": {
              title: "Set Password",
              dialogLike: !0,
              resizable: !1,
              width: n,
              height: 340,
              modal: !0,
            },
            "editor-frame": {
              resizable: !0,
              dialogLike: !1,
              trafficLightPosition: { x: 20, y: 18 },
            },
            editor: { resizable: !0, dialogLike: !1, titleBarStyle: "default" },
            "dialog-share": {
              title: "Share",
              dialogLike: !0,
              resizable: !1,
              width: n,
              height: 272,
              modal: !0,
            },
            "dialog-share-to-gallery": {
              title: "Share To Gallery",
              dialogLike: !0,
              resizable: !1,
              width: i,
              height: 400,
              modal: !0,
            },
            "dialog-checkforupdate": {
              title: "Check For Updates",
              dialogLike: !0,
              resizable: !1,
              singleton: !0,
              width: i,
              height: 400,
            },
            "dialog-auto-updater": {
              title: "Check For Updates",
              dialogLike: !0,
              resizable: !1,
              singleton: !0,
              width: n,
              height: 363,
            },
            "dialog-print": {
              title: "Print",
              dialogLike: !0,
              resizable: !1,
              width: r,
              height: 505,
              modal: !0,
            },
            "dialog-activate": {
              title: "Activate Xmind",
              dialogLike: !0,
              resizable: !1,
              singleton: !0,
              width: 740,
              height: 670,
              modal: !0,
              trafficLightPosition: { x: 8, y: 14 },
            },
            "dialog-evaluation-mode": {
              dialogLike: !0,
              resizable: !1,
              singletonInParentWindow: !0,
              width: 640,
              height: 390,
              modal: !0,
              alwaysOnTop: !0,
            },
            "dialog-start-evaluation": {
              dialogLike: !0,
              resizable: !1,
              singletonInParentWindow: !0,
              width: 541,
              height: 635,
              modal: !0,
            },
            "dialog-free-evaluation": {
              dialogLike: !0,
              resizable: !1,
              singletonInParentWindow: !0,
              width: 541,
              height: 604,
              modal: !0,
            },
            "dialog-activateAlert": {
              dialogLike: !0,
              resizable: !1,
              singleton: !0,
              width: i,
              height: 355,
              modal: !0,
              alwaysOnTop: !0,
            },
            "dialog-quick-entry-guide": {
              dialogLike: !0,
              resizable: !1,
              singleton: !0,
              width: i,
              height: 400,
              modal: !0,
              alwaysOnTop: !0,
            },
            "dialog-evernote": {
              title: "Share to Evernote",
              dialogLike: !0,
              resizable: !1,
              width: 466,
              height: 286,
              modal: !0,
            },
            "dialog-copy-link-to-share": {
              title: "Share",
              dialogLike: !0,
              resizable: !1,
              width: n,
              height: 242,
              modal: !0,
            },
            "dialog-enterpassword": {
              title: "Enter Password",
              dialogLike: !0,
              resizable: !1,
              width: n,
              height: 285,
              modal: !0,
            },
            "dialog-license": {
              title: "Enter License",
              dialogLike: !0,
              resizable: !1,
              singleton: !0,
              width: 740,
              height: 560,
            },
            "dialog-topiclink": {
              title: "Topic Link",
              dialogLike: !0,
              resizable: !1,
              width: n,
              height: 458,
              modal: !0,
              singletonInParentWindow: !0,
            },
            "dialog-hyperlink": {
              title: "Hyper Link",
              dialogLike: !0,
              resizable: !1,
              width: 460,
              height: 287,
              modal: !0,
            },
            evernote: {
              title: "Share to Evernote",
              singleton: !0,
              dialogLike: !0,
              resizable: !1,
              width: r,
              height: 511,
            },
            biggerplate: {
              title: "Share to Biggerplate",
              singleton: !0,
              dialogLike: !0,
              resizable: !1,
              width: n,
              height: 600,
            },
            "dialog-rate": {
              title: "Enjoy Xmind?",
              singleton: !0,
              dialogLike: !0,
              resizable: !1,
              width: i,
              height: 355,
              modal: !0,
            },
            "dialog-progress": {
              title: "Processing",
              dialogLike: !0,
              resizable: !1,
              width: 540,
              height: 124,
              modal: !0,
            },
            "dialog-merging-options": {
              title: "Merge Xmind Files",
              dialogLike: !0,
              resizable: !1,
              width: 540,
              height: 274,
              modal: !0,
            },
            "dialog-export-to-image": {
              title: "Export to Image",
              dialogLike: !0,
              resizable: !1,
              width: i,
              height: 420,
              modal: !0,
            },
            "dialog-export-to-pdf": {
              title: "Export to PDF",
              dialogLike: !0,
              resizable: !1,
              width: 540,
              height: 375,
              modal: !0,
            },
            "_dev-dialog-theme-preview-creator": {
              title: "Dev Theme Preview Creator",
              dialogLike: !0,
              resizable: !0,
              singleton: !0,
              maximizable: !0,
              minimizable: !0,
              fullscreenable: !1,
            },
            "dialog-theme-editor": {
              title: "Theme Editor",
              dialogLike: !0,
              resizable: !0,
              singleton: !0,
              maximizable: !0,
              minimizable: !0,
              fullscreenable: !1,
              trafficLightPosition: { x: 20, y: 20 },
            },
            presentation: {
              title: "Presentation",
              dialogLike: !1,
              resizable: !1,
              singleton: !1,
              maximizable: !1,
              minimizable: !1,
              fullscreenable: !0,
            },
            presentationwindowed: {
              title: "Pitch Mode",
              dialogLike: !1,
              resizable: !0,
              fullscreenable: !0,
            },
            "dialog-smart-color-theme": {
              title: "Dialog Smart Color Theme",
              singleton: !0,
              dialogLike: !0,
              resizable: !1,
              width: 540,
              height: 480,
            },
            "dialog-lenovo-purchase": {
              title: "Lenovo purchase",
              singleton: !0,
              dialogLike: !0,
              resizable: !1,
              width: 680,
              height: 580,
            },
          },
          E = 1900,
          C = {
            bundle: "net.xmind.zen.subscription.vanaplusios.monthly",
            bundleYearly: "net.xmind.zen.subscription.vanaplusios.yearly",
          },
          I = {
            DEFAULT: null,
            PURCHASING: "purchasing",
            PURCHASED: "purchased",
            FAILED: "failed",
            RESTORED: "restored",
            RESTORING: "restoring",
            DEFERRED: "deferred",
          },
          A = {
            "editor.addAudioOnNewTopic": "insertAudio",
            "editor.showEquationEditor": "insertEquation",
            "outliner.showEquationEditor": "insertEquation",
            "editor.showTopiclinkEditor": "insertTopicLink",
            "editor.addFileLink": "insertFileLink",
            "editor.addFolderLink": "insertFolderLink",
            "editor.addAttachment": "insertAttachment",
            "editor.addAttachmentOnNewTopic": "insertAttachment",
            "editor.addTask": "insertTask",
            "editor.checkTask": "editTask",
            "editor.uncheckTask": "editTask",
            "workbench.exportSvg1": "exportSVG",
            "workbench.exportSvg2": "exportSVG",
            "workbench.exportBranchSvg": "exportSVG",
            "workbench.exportMd": "exportMarkdown",
            "workbench.exportBranchMd": "exportMarkdown",
            "workbench.exportExcel": "exportExcel",
            "workbench.exportWord": "exportWord",
            "workbench.exportOPML": "exportOPML",
            "workbench.exportTextBundle": "exportTextBundle",
            "workbench.setpassword": "setPassword",
            "workbench.exportPowerPoint": "exportPowerPoint",
            "workbench.highlightCurrentLabel": "highlightCurrentLabel",
            "workbench.highlightCurrentMarker": "highlightCurrentMarker",
            "workbench.highlightCurrentTask": "highlightCurrentTask",
            mergeXMindFiles: "mergeXMind",
            themeEditor: "themeEditor",
            createTheme: "themeEditor",
            "editor.saveAsEquation": "saveAsEquation",
            "outliner.saveAsEquation": "saveAsEquation",
            "editor.saveAsImage": "saveAsImage",
            "outliner.saveAsImage": "saveAsImage",
            "editor.showBranchOnly": "showBranchOnly",
            "editor.alignTopicsToLeft": "alignFloatingTopic",
            "editor.alignTopicsToCenter": "alignFloatingTopic",
            "editor.alignTopicsToRight": "alignFloatingTopic",
            "editor.alignTopicsToTop": "alignFloatingTopic",
            "editor.alignTopicsToMiddle": "alignFloatingTopic",
            "editor.alignTopicsToBottom": "alignFloatingTopic",
            "editor.distributeTopicsHorizontally": "divideFloatingTopic",
            "editor.distributeTopicsVertically": "divideFloatingTopic",
            "action.topicFilter": "topicFilter",
            "action.export2ScalePdf": "export2ScalePdf",
            "action.export2ScaleImage": "export2ScaleImage",
            "action.export2ScopeFileImage": "export2ScopeFileImage",
            "action.export2ScopeFilePdf": "export2ScopeFilePdf",
            "action.switchZenModeColor": "switchZenModeColor",
            "action.switchColorBranch": "switchColorBranch",
            "action.pitchModeNextSlide": "action.pitchModeNextSlide",
            dndFile: "dndFile",
            dndFolder: "dndFolder",
            insertFolder: "insertFolderLink",
            insertAttachment: "insertAttachment",
          },
          k = {
            "workbench.showZenMode": "zenMode",
            showMapShot: "mapShot",
            "editor.enterPitchMode": "pitch",
            "editor.enterPitchModeWindowed": "pitch",
            "editor.enterPitchPresenterViewMode": "pitch",
          },
          O = [
            ...Object.keys(A),
            "customizeTheme",
            "editor.toggleBranchOnly",
            "workbench.showMarkerNavigationPanelAndSelect",
            "workbench.showLabelNavigationPanelAndSelect",
            "workbench.showTaskNavigationPanelAndSelect",
          ],
          F = [
            "editor.addTopic",
            "editor.addSubTopic",
            "editor.addTopicBefore",
            "editor.addParentTopic",
          ],
          L = [
            "shareXmindLink",
            "shareXmindLinkOfCN",
            "shareFacebook",
            "shareTwitter",
            "sharePinterest",
            "shareEvernote",
            "shareBiggerPlate",
            "sharePublic",
            "sharePrivate",
            "shareBlog",
            "shareMail",
          ],
          N = {
            AREA_SIZE: 16e6,
            XAP_COUNT: 30,
            TOPIC_COUNT: 2e3,
            FILE_SIZE: 52428800,
          },
          P = {
            Command: "⌘",
            Shift: "⇧",
            Ctrl: "⌃",
            Alt: "⌥",
            Option: "⌥",
            DELETE: "⌦",
            Backspace: "⌫",
            Enter: "↩",
            CapsLock: "⇪",
            Up: "↑",
            Down: "↓",
            Left: "←",
            Right: "→",
            Arrow: "←↑↓→",
            "1~7": "1~7",
            "1~9": "1~9",
          },
          D = 1e3,
          x = !1,
          _ = !1,
          H = !1,
          M = !x && "vana_win32".startsWith("vana") && !0,
          R = !1,
          B = [
            ...L,
            "workbench.exportPng1",
            "workbench.exportPng2",
            "workbench.exportSvg1",
            "workbench.exportSvg2",
            "workbench.exportPdf",
            "workbench.exportMd",
            "workbench.exportWord",
            "workbench.exportExcel",
            "workbench.exportPowerPoint",
            "workbench.exportOPML",
            "workbench.exportTextBundle",
            "exportTheme",
            "feedback",
            "signIn",
            "newFromLibrary",
            "editor.addAttachment",
            "editor.addAttachmentOnNewTopic",
            "mapShot",
            "print",
            "customizeTheme",
            "openQuickEntry",
            "createTheme",
            "save",
            "saveAs",
            "saveSheetAs",
            "editor.saveAsAttachment",
            "editor.saveAsAudioNote",
            "editor.saveAsEquation",
            "outliner.saveAsImage",
            "outliner.saveAsEquation",
            "outliner.saveAsAttachment",
            "outliner.clickAttachmentWithSaveAs",
            "outliner.saveAsAudioNote",
            "fileCache",
            "workbench.setpassword",
          ],
          U = 500,
          V = {
            en: "en-US",
            "en-US": "en-US",
            de: "de-DE",
            "de-DE": "de-DE",
            fr: "fr-FR",
            "fr-FR": "fr-FR",
            ja: "ja-JP",
            "ja-JP": "ja-JP",
            zh: "zh-CN",
            "zh-CN": "zh-CN",
            "zh-TW": "zh-TW",
            es: "es",
            "es-ES": "es",
            id: "id",
            "id-ID": "id",
            "it-IT": "it-IT",
            it: "it-IT",
            ko: "ko",
            "ko-KR": "ko",
            "pt-PT": "pt-PT",
            pt: "pt-PT",
            ru: "ru-RU",
            "ru-RU": "ru-RU",
            th: "th",
            "th-TH": "th",
          },
          G = {
            "zh-CN": "cn",
            "de-DE": "de",
            "fr-FR": "fr",
            "ja-JP": "jp",
            "zh-TW": "zh_tw",
            es: "es",
            id: "id",
            "it-IT": "it",
            ko: "ko",
            "pt-PT": "pt",
            "ru-RU": "ru",
            th: "th",
          },
          j = { win32: "window", darwin: "macos", linux: "linux" },
          z = [
            "editor.addTopic",
            "editor.addSubTopic",
            "editor.addTopicBefore",
            "editor.addParentTopic",
            "editor.addCallout",
            "editor.preAddFloatingTopic",
            "editor.addSummary",
          ],
          K = [
            "editor.addSheet",
            "editor.newSheetFromTopic",
            "new",
            "frame.addNewTab",
            "importMarkdown",
            "importOPML",
            "importTextBundle",
            "importWord",
          ],
          W = [
            ...z,
            "editor.addBoundary",
            "editor.addRelationship",
            "editor.showNotesEditor",
            "editor.showLabelEditor",
            "editor.showHyperlinkEditor",
            "editor.showTopiclinkEditor",
            "editor.addFileLink",
            "editor.addFolderLink",
            "editor.addAttachmentOnNewTopic",
            "editor.addAudioOnNewTopic",
            "editor.changeImage",
            "editor.addMarker",
            "editor.addLocalImage",
            "editor.showEquationEditor",
          ],
          Z = [];
      },
      51189: (e, t, a) => {
        "use strict";
        a.d(t, { A8: () => n, F5: () => l, Mn: () => r, _Q: () => i });
        var n,
          i,
          r,
          o = a(96829);
        !(function (e) {
          (e.UNCHECKED = "unchecked"),
            (e.CHECKING = "checking"),
            (e.CHECK_FAILED = "check_failed"),
            (e.UPDATE_AVAILABLE = "update_available"),
            (e.UPDATE_UNAVAILABLE = "update_unavailable"),
            (e.DOWNLOADING = "downloading"),
            (e.DOWNLOADED = "downloaded"),
            (e.DOWNLOAD_FAILED = "download_failed"),
            (e.INSTALLING = "installing"),
            (e.INSTALLED = "installed"),
            (e.INSTALL_ERROR = "install_error");
        })(n || (n = {})),
          (function (e) {
            (e.RETRY = "retry"),
              (e.DOWNLOAD = "download"),
              (e.UPDATE_AUTO_CHECKED = "update_auto_checked"),
              (e.INSTALL_NOW = "install_now"),
              (e.INSTALL_NEXT_TIME = "install_next_time"),
              (e.SKIP_VERSION = "skip_version"),
              (e.STOP_DOWNLOAD = "stop_download"),
              (e.CHECK_FOR_UPDATES = "check_for_updates"),
              (e.CHECK_AUTO_UPDATE = "check_auto_update"),
              (e.LAUNCH_TIMING_TASK = "launch_timing_task"),
              (e.TRACK_LAUNCH_EVENTS = "track_launch_events");
          })(i || (i = {})),
          (function (e) {
            (e.AUTO = "auto"), (e.MANUAL = "manual"), (e.NOT = "not");
          })(r || (r = {}));
        const l = {
          CHECK_FOR_UPDATES: (0, o.$T)("Check For Updates"),
          CHECKING: (0, o.$T)("Checking"),
          RELAUNCH_TO_UPDATE: (0, o.$T)("Relaunch To Update"),
          DOWNLOADING: (0, o.$T)("Downloading Update"),
        };
      },
      82647: (e, t, a) => {
        "use strict";
        a.d(t, { Nc: () => p, Tx: () => v, Wj: () => m });
        var n = a(96829),
          i = a(6113),
          r = a.n(i),
          o = a(11227);
        const l = "X",
          s = 225,
          d = 12,
          c = 8,
          u = {
            A: {
              verifierSuffix: "Ae;\t&2}w#n`If5!nu6#{!hBA1IMDx%\n",
              publicKey: String.fromCharCode(
                45,
                45,
                45,
                45,
                45,
                66,
                69,
                71,
                73,
                78,
                32,
                80,
                85,
                66,
                76,
                73,
                67,
                32,
                75,
                69,
                89,
                45,
                45,
                45,
                45,
                45,
                10,
                77,
                73,
                71,
                102,
                77,
                65,
                48,
                71,
                67,
                83,
                113,
                71,
                83,
                73,
                98,
                51,
                68,
                81,
                69,
                66,
                65,
                81,
                85,
                65,
                65,
                52,
                71,
                78,
                65,
                68,
                67,
                66,
                105,
                81,
                75,
                66,
                103,
                81,
                67,
                110,
                47,
                79,
                88,
                111,
                85,
                112,
                98,
                87,
                70,
                81,
                117,
                54,
                78,
                104,
                55,
                72,
                85,
                83,
                66,
                47,
                115,
                100,
                74,
                100,
                10,
                114,
                87,
                110,
                98,
                72,
                97,
                74,
                108,
                75,
                120,
                87,
                53,
                76,
                77,
                69,
                85,
                88,
                114,
                75,
                119,
                47,
                88,
                85,
                87,
                65,
                107,
                81,
                53,
                100,
                114,
                69,
                51,
                89,
                106,
                66,
                101,
                84,
                53,
                47,
                90,
                87,
                71,
                110,
                79,
                85,
                50,
                81,
                84,
                108,
                68,
                48,
                75,
                72,
                71,
                87,
                86,
                48,
                82,
                122,
                79,
                110,
                106,
                97,
                108,
                10,
                119,
                71,
                122,
                85,
                85,
                50,
                116,
                54,
                87,
                113,
                84,
                67,
                118,
                101,
                104,
                117,
                55,
                70,
                84,
                113,
                52,
                47,
                105,
                110,
                119,
                89,
                48,
                81,
                83,
                113,
                47,
                114,
                97,
                107,
                116,
                121,
                51,
                69,
                74,
                52,
                76,
                52,
                70,
                75,
                100,
                69,
                122,
                117,
                113,
                100,
                82,
                84,
                109,
                79,
                77,
                107,
                47,
                52,
                78,
                73,
                54,
                79,
                57,
                77,
                10,
                50,
                89,
                55,
                115,
                99,
                80,
                81,
                82,
                79,
                55,
                83,
                97,
                97,
                100,
                67,
                55,
                47,
                81,
                73,
                68,
                65,
                81,
                65,
                66,
                10,
                45,
                45,
                45,
                45,
                45,
                69,
                78,
                68,
                32,
                80,
                85,
                66,
                76,
                73,
                67,
                32,
                75,
                69,
                89,
                45,
                45,
                45,
                45,
                45,
              ),
            },
            B: {
              verifierSuffix: '/[{%R<M$MP\t%6$(hp}Cs=49<JQ"V4m\n',
              publicKey: "",
            },
            C: {
              verifierSuffix: "VqNMK{?5o<8SdD^hNb#.\n\\5}pN4<_L\t",
              publicKey: "",
            },
            S: {
              verifierSuffix: "K=2jp<02#AZwwXgb<AW^BD(Q2(d.eoL",
              publicKey: String.fromCharCode(
                45,
                45,
                45,
                45,
                45,
                66,
                69,
                71,
                73,
                78,
                32,
                80,
                85,
                66,
                76,
                73,
                67,
                32,
                75,
                69,
                89,
                45,
                45,
                45,
                45,
                45,
                10,
                77,
                73,
                71,
                102,
                77,
                65,
                48,
                71,
                67,
                83,
                113,
                71,
                83,
                73,
                98,
                51,
                68,
                81,
                69,
                66,
                65,
                81,
                85,
                65,
                65,
                52,
                71,
                78,
                65,
                68,
                67,
                66,
                105,
                81,
                75,
                66,
                103,
                81,
                68,
                88,
                77,
                76,
                57,
                50,
                113,
                82,
                80,
                77,
                79,
                43,
                89,
                76,
                86,
                69,
                52,
                107,
                88,
                85,
                75,
                49,
                84,
                76,
                55,
                107,
                10,
                121,
                49,
                66,
                108,
                54,
                114,
                113,
                51,
                120,
                114,
                78,
                115,
                86,
                99,
                108,
                114,
                74,
                117,
                83,
                100,
                78,
                71,
                85,
                90,
                70,
                118,
                116,
                102,
                67,
                48,
                100,
                66,
                119,
                79,
                78,
                47,
                66,
                77,
                112,
                77,
                87,
                117,
                88,
                74,
                118,
                66,
                116,
                77,
                69,
                116,
                69,
                107,
                84,
                72,
                118,
                73,
                111,
                110,
                77,
                55,
                75,
                108,
                53,
                85,
                10,
                116,
                116,
                103,
                89,
                115,
                87,
                97,
                87,
                67,
                118,
                85,
                104,
                71,
                97,
                74,
                52,
                101,
                77,
                67,
                108,
                43,
                67,
                74,
                112,
                107,
                79,
                57,
                118,
                119,
                65,
                80,
                118,
                75,
                48,
                49,
                107,
                117,
                43,
                117,
                81,
                50,
                104,
                49,
                71,
                120,
                100,
                82,
                74,
                120,
                80,
                97,
                110,
                102,
                80,
                47,
                78,
                89,
                71,
                119,
                117,
                81,
                68,
                73,
                86,
                10,
                90,
                43,
                112,
                81,
                84,
                105,
                78,
                51,
                101,
                82,
                79,
                65,
                110,
                117,
                118,
                99,
                89,
                81,
                73,
                68,
                65,
                81,
                65,
                66,
                10,
                45,
                45,
                45,
                45,
                45,
                69,
                78,
                68,
                32,
                80,
                85,
                66,
                76,
                73,
                67,
                32,
                75,
                69,
                89,
                45,
                45,
                45,
                45,
                45,
              ),
            },
          };
        function m(e) {
          const t = (e = p(e)).slice(0, d);
          if (12 !== t.length)
            throw new Error("Invalid length of license key header: " + t.length);
          const a = t.slice(0, 1);
          if (l !== a) throw new Error("Invalid license key header: " + t);
          return {
            type: t.slice(1, 2),
            vendorName: t.slice(2, 4),
            majorVersion: (0, n.jp)(t.slice(4, 5)),
            minorVersion: (0, n.jp)(t.slice(5, 6)),
            licenseeType: t.slice(6, 7),
            yearsOfUpgrade: (0, n.jp)(t.slice(7, 9)),
          };
        }
        function v(e, t) {
          if (((e = p(e)), o.log("License Length: ", e.length), e.length !== s))
            return !1;
          t = t.toLowerCase();
          const a = m(e),
            { verifierSuffix: i, publicKey: l } = u[a.type],
            v = e.slice(0, d + c) + t + i,
            h = e.slice(d + c) + "===",
            g = new Uint8Array((0, n.AI)(h.toUpperCase()));
          o.log(
            `License: ${e}\n\n`,
            `Email: ${t}\n\n`,
            `License Header: ${JSON.stringify(a)}\n\n`,
            `Verifier Suffix: ${i}\n\n`,
            `Public Key: ${l}\n\n`,
            `Base: ${v}\n\n`,
            `Base32 Encoded Signature(${h.length}): ${h}\n\n`,
            `Signature: ${g}\n\n`,
          );
          try {
            const e = r().createVerify("RSA-SHA256");
            e.update(v), e.end();
            const t = e.verify(l, g);
            return o.log("Verify License: ", t), t;
          } catch (e) {
            return o.log("Verify License Error: ", e), !1;
          }
        }
        function p(e) {
          let t = (e = e.trim().toUpperCase()).indexOf("---BEGIN LICENSE KEY---");
          t < 0 ? (t = 0) : (t += 23);
          let a = e.indexOf("---END LICENSE KEY---");
          return (
            a < 0 && (a = e.length),
            (e = e.substring(t, a).replace(/[^A-Z0-9]/gm, ""))
          );
        }
      },
      31422: (e, t, a) => {
        "use strict";
        a.d(t, { G: () => s, J: () => d });
        var n = a(77412),
          i = a(2954),
          r = a(75425),
          o = a(11975),
          l = function (e, t, a, n) {
            return new (a || (a = Promise))(function (i, r) {
              function o(e) {
                try {
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof a
                      ? t
                      : new a(function (e) {
                          e(t);
                        })).then(o, l);
              }
              s((n = n.apply(e, t || [])).next());
            });
          };
        const s = "commands",
          d = (0, n.Q_)(s, () => {
            const e = (0, i.iH)([]),
              t = (0, i.Fl)(() => {
                const t = (0, o.H)();
                return e.value.concat(t.commands);
              }),
              a = (0, i.Fl)(() => (0, r.Nb)(t.value)),
              n = u(),
              s = n.overallHandleCommand,
              d = c(),
              m = d.assistantHandleCommand,
              v = c(),
              p = v.assistantHandleCommand,
              h = u(),
              g = h.overallHandleCommand,
              f = n.appendOverallHandler,
              w = d.appendAssistantHandler,
              y = v.appendAssistantHandler,
              b = h.appendOverallHandler,
              S = (e, t) =>
                l(void 0, void 0, void 0, function* () {
                  return T(e, t);
                });
            let T = (e, t) =>
              l(void 0, void 0, void 0, function* () {
                return Promise.resolve("interruption");
              });
            return {
              mainCommands: e,
              updateMainCommands: (t) => (e.value = t),
              commands: t,
              aggregatedCommands: a,
              commandById: (e) => {
                if (null == e) return null;
                let t;
                for (const n of a.value)
                  if (n.id === e) {
                    t = n;
                    break;
                  }
                return t;
              },
              appendBeforeAllHandler: f,
              appendBeforeHandler: w,
              appendAfterHandler: y,
              appendAfterAllHandler: b,
              handleCommand: (e, t) =>
                s(e, t)
                  .then((a) => {
                    if ("interruption" !== a) return m(e, t);
                  })
                  .then((a) => {
                    if ("interruption" !== a) return S(e, t);
                  })
                  .then((a) => {
                    if ("interruption" !== a) return p(e, t);
                  })
                  .then((a) => {
                    if ("interruption" !== a) return g(e, t);
                  }),
              injectDoHandleCommand: (e) => (T = e),
              doHandleCommand: S,
            };
          });
        function c() {
          const e = {},
            t = new Proxy(e, {
              get(e, t) {
                const a = Reflect.get(e, t);
                return "function" == typeof a ? a : () => Promise.resolve();
              },
            });
          return {
            appendAssistantHandler: (t, a) => {
              const n = e[t];
              e[t] = (...e) =>
                l(this, void 0, void 0, function* () {
                  const t = n && (yield n(...e));
                  return t || (yield a(...e));
                });
            },
            assistantHandleCommand: (e, a) =>
              l(this, void 0, void 0, function* () {
                return (0, t[e])(e, a);
              }),
          };
        }
        function u() {
          const e = { forAllCommands: null };
          return {
            appendOverallHandler: (t) => {
              const a = e.forAllCommands;
              e.forAllCommands = (...e) =>
                l(this, void 0, void 0, function* () {
                  const n = a && (yield a(...e));
                  return n || (yield t(...e));
                });
            },
            overallHandleCommand: (t, a) =>
              l(this, void 0, void 0, function* () {
                const n = e.forAllCommands;
                return n ? n(t, a) : Promise.resolve();
              }),
          };
        }
      },
      60880: (e, t, a) => {
        "use strict";
        a.d(t, { F: () => o, s: () => l });
        var n = a(77412),
          i = a(2954),
          r = a(11975);
        const o = "contexts",
          l = (0, n.Q_)(o, () => {
            const e = (0, i.iH)({}),
              t = (0, i.Fl)(() => {
                const t = (0, r.H)().contexts;
                return Object.assign(Object.assign({}, e.value), t);
              });
            return {
              mainContexts: e,
              updateMainContexts: (t) =>
                (e.value = Object.assign(Object.assign({}, e.value), t)),
              contexts: t,
            };
          });
      },
      84157: (e, t, a) => {
        "use strict";
        a.d(t, { x: () => c });
        var n = a(77412),
          i = a(2954),
          r = a(75425),
          o = a(19532),
          l = a(63111),
          s = a(60880),
          d = a(31422);
        const c = (e) =>
          (0, n.Q_)(e, () => {
            const e = (0, i.iH)(),
              t = (0, i.iH)(),
              a = (0, i.iH)(!1),
              n = (0, i.iH)(!1),
              c = (0, i.iH)(!1),
              u = (0, i.iH)(!1),
              m = (0, i.iH)(!1),
              v = (0, i.iH)(0),
              p = (0, i.iH)(l.hO),
              h = (0, i.Fl)(() => p.value === l.Pq),
              g = (0, i.iH)([]),
              f = (0, i.iH)(null),
              w = (0, i.iH)(Object.assign({}, o.Z.editor)),
              y = (e) => (w.value = Object.assign(Object.assign({}, w.value), e)),
              b = (function () {
                let e = !1;
                const t = {};
                return (a) => {
                  Object.assign(t, a),
                    e ||
                      ((e = !0),
                      setTimeout(() => {
                        (e = !1), y(t);
                      }, 16));
                };
              })(),
              S = (0, i.Fl)(() => w.value),
              T = (0, i.Fl)(() => {
                const e = (0, s.s)();
                return Object.assign(Object.assign({}, e.mainContexts), S.value);
              }),
              E = (0, i.Fl)(() => (f.value ? f.value : g.value)),
              C = (0, i.Fl)(() => {
                const e = (0, d.J)();
                return (0, r.Nb)(e.mainCommands.concat(E.value));
              });
            return {
              ownerFrameId: e,
              changeOwnerFrameId: (t) => (e.value = t),
              title: t,
              changeTitle: (e) => (t.value = e),
              isDirty: a,
              changeIsDirty: (e) => (a.value = e),
              isAlive: n,
              setAlive: (e) => (n.value = e),
              saving: c,
              setSaving: (e) => (c.value = e),
              exporting: u,
              setExporting: (e) => (u.value = e),
              merging: m,
              setMerging: (e) => (m.value = e),
              mergingCount: v,
              updateMergingProgress: (e) => {
                void 0 !== e ? (v.value = e) : v.value++;
              },
              editorMode: p,
              setEditorMode: (e) => (p.value = e),
              isOutlinerMode: h,
              contexts: S,
              aggregatedContexts: T,
              updateContexts: b,
              updateContextsSync: y,
              commandsState: g,
              contextsState: w,
              commands: E,
              aggregatedCommands: C,
              updateInternalCommands: (e = []) => (f.value = e),
              updateCommands: (e = []) => {
                (f.value = e), (g.value = e);
              },
              commandById: (e) => {
                let t;
                for (const a of C.value)
                  if (a.id === e) {
                    t = a;
                    break;
                  }
                return t;
              },
            };
          });
      },
      78152: (e, t, a) => {
        "use strict";
        a.d(t, {
          g8: () => ie,
          rx: () => Ae,
          d1: () => w,
          JS: () => k,
          F_: () => ke,
          W$: () => Oe,
          c7: () => D,
          Yh: () => W,
          qr: () => _,
          _I: () => q,
          Fw: () => J,
          vF: () => Y,
          jR: () => R,
          JX: () => d.J,
          VE: () => I,
          ym: () => E,
          OD: () => y,
          km: () => N,
          Ak: () => te,
          c: () => ne,
          yj: () => re,
          M4: () => f,
          f7: () => ue,
          JE: () => H.C,
          tP: () => ve,
          Gu: () => he,
          rs: () => fe,
          S: () => x.E,
          Rg: () => ye,
          EJ: () => Se,
          fl: () => Ee,
          _t: () => S,
          HA: () => F.H,
        });
        var n = a(2954),
          i = a(77412),
          r = a(75425),
          o = a(19532),
          l = a(31945),
          s = a(60880),
          d = a(31422);
        var c = a(84157);
        const u = new Map(),
          m = {
            frame: (e) => {
              const t = e.substring(13);
              return (0, i.Q_)(e, () => {
                const e = (0, n.iH)([]),
                  a = (0, n.iH)(),
                  i = (0, n.iH)(!1),
                  c = (0, n.iH)(!1),
                  u = (0, n.iH)(!1),
                  m = (0, n.iH)(!1),
                  v = (0, n.iH)([]),
                  p = (0, n.iH)(Object.assign({}, o.Z.frame)),
                  h = (0, n.iH)(0),
                  g = (0, n.Fl)(() => {
                    var e;
                    const t = ke((0, l.aJ)(a.value)),
                      n =
                        null !== (e = null == t ? void 0 : t().contexts) &&
                        void 0 !== e
                          ? e
                          : {};
                    return Object.assign(Object.assign({}, p.value), n);
                  }),
                  f = (0, n.Fl)(() => {
                    const e = (0, s.s)();
                    return Object.assign(
                      Object.assign({}, e.mainContexts),
                      g.value,
                    );
                  }),
                  w = (0, n.Fl)(() => {
                    var e;
                    const t = ke((0, l.aJ)(a.value)),
                      n =
                        null !== (e = null == t ? void 0 : t().commands) &&
                        void 0 !== e
                          ? e
                          : [];
                    return [...v.value, ...n];
                  }),
                  y = (0, n.Fl)(() => {
                    const e = (0, d.J)();
                    return (0, r.Nb)(e.mainCommands.concat(w.value));
                  });
                return {
                  frameId: t,
                  editorViewInfos: e,
                  updateEditorViewInfos: (t) => {
                    e.value = [...t];
                  },
                  updateEditorViewInfo: (t) => {
                    e.value = [
                      ...e.value.map((e) =>
                        e.id === t.id
                          ? Object.assign(Object.assign({}, e), t)
                          : Object.assign({}, e),
                      ),
                    ];
                  },
                  insertEditorViewInfo: (t, a) => {
                    const n = e.value.length,
                      i = void 0 === a ? n : Math.min(a, n);
                    e.value = [...e.value]
                      .slice(0, i)
                      .concat([Object.assign({}, t), ...e.value.slice(i)]);
                  },
                  removeEditorViewInfo: (t) =>
                    (e.value = e.value.filter((e) => e.id !== t)),
                  activeEditorId: a,
                  changeActiveEditorId: (e) => {
                    a.value = e;
                  },
                  isEmptyFrame: i,
                  setIsEmptyFrame: (e) => {
                    i.value = e;
                  },
                  isShowTabBar: c,
                  setIsShowTabBar: (e) => {
                    c.value = e;
                  },
                  isFullScreen: u,
                  setIsFullScreen: (e) => (u.value = e),
                  isZenMode: m,
                  setIsZenMode: (e) => (m.value = e),
                  contexts: g,
                  aggregatedContexts: f,
                  updateContexts: (e) =>
                    (p.value = Object.assign(Object.assign({}, p.value), e)),
                  commands: w,
                  aggregatedCommands: y,
                  updateCommands: (e = []) => (v.value = e),
                  commandById: (e) => {
                    let t;
                    for (const a of y.value)
                      if (a.id === e) {
                        t = a;
                        break;
                      }
                    return t;
                  },
                  tabbarScrollLeft: h,
                  updateTabbarScrollLeft: (e) => {
                    h.value = e;
                  },
                  commandsState: v,
                  contextsState: p,
                };
              });
            },
            editor: c.x,
            window: (e) =>
              (0, i.Q_)(e, () => {
                const e = (0, n.iH)([]),
                  t = (0, n.iH)(null),
                  a = (0, n.iH)([]),
                  i = (0, n.iH)(Object.assign({}, o.Z.window)),
                  l = (0, n.Fl)(() => {
                    const e = ke(t.value);
                    return Object.assign(
                      Object.assign({}, i.value),
                      null == e ? void 0 : e().contexts,
                    );
                  }),
                  c = (0, n.Fl)(() => {
                    const e = (0, s.s)();
                    return Object.assign(
                      Object.assign({}, e.mainContexts),
                      l.value,
                    );
                  }),
                  u = (0, n.Fl)(() => {
                    const e = ke(t.value),
                      n = (null == e ? void 0 : e().commands) || [];
                    return [...a.value, ...n];
                  }),
                  m = (0, n.Fl)(() => {
                    const e = (0, d.J)();
                    return (0, r.Nb)(e.mainCommands.concat(u.value));
                  });
                return {
                  touchBarItems: e,
                  updateTouchBarItems: (t) => (e.value = t || []),
                  contentModuleName: t,
                  updateContentModuleName: (e) => (t.value = e),
                  contexts: l,
                  aggregatedContexts: c,
                  updateContexts: (e) =>
                    (i.value = Object.assign(Object.assign({}, i.value), e)),
                  commands: u,
                  aggregatedCommands: m,
                  updateCommands: (e = []) => (a.value = e),
                  commandsState: a,
                  contextsState: i,
                };
              }),
            "dialog-err": (e) =>
              (0, i.Q_)(e, () => {
                const e = (0, n.iH)({
                  name: "",
                  message: "",
                  stack: "",
                  code: "",
                  isCustomError: !1,
                  autoExpand: !1,
                  expansionHeight: void 0,
                });
                return {
                  error: e,
                  init: (t) => {
                    e.value = Object.assign({}, t);
                  },
                };
              }),
            "dialog-problem": (e) =>
              (0, i.Q_)(e, () => {
                const e = (0, n.iH)({
                  name: "",
                  message: "",
                  stack: "",
                  code: "",
                });
                return {
                  error: e,
                  init: (t) => {
                    e.value = Object.assign({}, t);
                  },
                };
              }),
          },
          v = {},
          p = Object.keys(m)
            .map((e) => ({ [e]: null }))
            .reduce((e, t) => Object.assign(Object.assign({}, e), t));
        let h;
        const g = () => h || (h = (0, n.iH)(p)),
          { useStoreFactory: f, disposeStore: w } = O("frame"),
          { useStoreFactory: y, disposeStore: b } = O("editor"),
          { useStoreFactory: S, disposeStore: T } = O("window"),
          { useStoreFactory: E, disposeStore: C } = O("dialog-problem"),
          { useStoreFactory: I, disposeStore: A } = O("dialog-err"),
          k = (e) => {
            const t = ((e) => v[e])(e),
              a = g().value[e];
            return a ? (null == t ? void 0 : t(a)) : null;
          };
        function O(e) {
          const t = m[e],
            a = (a) => {
              let i = u.get(a);
              if (!i) {
                (i = t(a)), u.set(a, i);
                const r = g();
                (0, n.t8)(r.value, e, a);
              }
              return i;
            };
          return (
            (v[e] = a),
            {
              useStoreFactory: a,
              disposeStore: (t) => {
                u.delete(t);
                const a = g();
                (0, n.t8)(a.value, e, null);
                const i = u.get(t);
                null == i || i().$dispose();
              },
            }
          );
        }
        var F = a(11975);
        const L = "editors",
          N = (0, i.Q_)(L, () => {
            const e = (0, n.iH)([]),
              t = (0, n.iH)(""),
              a = (0, n.iH)(!1),
              i = (0, n.iH)(!1),
              r = (0, n.iH)(!1),
              o = (0, n.iH)(!1),
              l = (0, n.iH)([]),
              s = (0, n.iH)([]),
              d = (0, n.iH)([]),
              c = (0, n.Fl)(() => {
                const n = {};
                return (
                  e.value.length > 0 && (n.recentlyOpenedItems = e.value),
                  t.value && (n.lastSaveDirectory = t.value),
                  l.value.length > 0 && (n.recentFontFamilies = l.value),
                  a.value && (n.hasShownTutorial = a.value),
                  "boolean" == typeof r.value &&
                    (n.hasShownTryPicthMode = r.value),
                  "boolean" == typeof o.value &&
                    (n.hasShownPitchModeSetting = o.value),
                  s.value.length > 0 && (n.recentlyUsedColors = s.value),
                  d.value.length > 0 && (n.lastViewStatuses = d.value),
                  n
                );
              });
            return {
              recentlyOpenedItems: e,
              recentFontFamilies: l,
              lastSaveDirectory: t,
              hasShownTutorial: a,
              hasShownTryPicthMode: r,
              hasShownPitchModeSetting: o,
              isAutoBeginnerModeVisible: i,
              recentlyUsedColors: s,
              lastViewStatuses: d,
              memento: c,
              appendRecentlyOpenedItem: ({
                source: t,
                timestamp: a,
                previewUrl: n,
              }) => {
                e.value = [{ source: t, timestamp: a, previewUrl: n }]
                  .concat(
                    e.value.filter(
                      (e) =>
                        e.source &&
                        e.source !== t &&
                        e.source.startsWith("file:"),
                    ),
                  )
                  .slice(0, 100);
              },
              removeRecentlyOpenedItem: (t) => {
                e.value = e.value.filter((e) => e.source !== t);
              },
              clearRecentlyOpenedItems: () => {
                e.value = [];
              },
              setRecentFontFamilies: (e) => (l.value = e),
              setTutorialShowSign: (e) => (a.value = e),
              updateAutoBeginnerModeVisible: (e) => (i.value = e),
              updateTryPicthModeShow: (e) => (r.value = e),
              updateHasShownPitchModeSetting: (e) => (o.value = e),
              setLastSaveDirectory: (e) => (t.value = e),
              updateRecentlyUsedColor: (e) =>
                (s.value = [e]
                  .concat(s.value.filter((t) => t !== e))
                  .slice(0, 9)),
              updateLastViewStatuses: (e) =>
                (d.value = [e]
                  .concat(d.value.filter((t) => t.id !== e.id))
                  .slice(0, 100)),
              restoreMemento: (n) => {
                !(function (e) {
                  "recentlyOpenedItems" in e &&
                    (Array.isArray(e.recentlyOpenedItems) ||
                      (e.recentlyOpenedItems = []),
                    (e.recentlyOpenedItems = e.recentlyOpenedItems.filter(
                      (e) => !!e.source && e.source.startsWith("file:///"),
                    )));
                  "recentFontFamilies" in e &&
                    (Array.isArray(e.recentFontFamilies) ||
                      (e.recentFontFamilies = []),
                    (e.recentFontFamilies = e.recentFontFamilies.filter(
                      (e) => "string" == typeof e,
                    )));
                })(n),
                  "recentlyOpenedItems" in n && (e.value = n.recentlyOpenedItems),
                  "lastSaveDirectory" in n && (t.value = n.lastSaveDirectory),
                  "recentFontFamilies" in n && (l.value = n.recentFontFamilies),
                  "hasShownTutorial" in n && (a.value = n.hasShownTutorial),
                  "hasShownTryPicthMode" in n &&
                    (r.value = n.hasShownTryPicthMode),
                  "hasShownPitchModeSetting" in n &&
                    (o.value = n.hasShownPitchModeSetting),
                  "recentlyUsedColors" in n && (s.value = n.recentlyUsedColors),
                  "lastViewStatuses" in n && (d.value = n.lastViewStatuses);
              },
            };
          });
        const P = "account",
          D = (0, i.Q_)(P, () => {
            const e = (0, n.iH)("us"),
              t = (0, n.iH)(""),
              a = (0, n.iH)(""),
              i = (0, n.iH)(""),
              r = (0, n.iH)(""),
              o = (0, n.iH)(""),
              l = (0, n.iH)(""),
              s = (0, n.iH)(""),
              d = (0, n.iH)(""),
              c = (0, n.iH)({}),
              u = (0, n.iH)(null),
              m = (0, n.Fl)(() => {
                const n = {};
                return (
                  e.value && (n.region = e.value),
                  t.value && (n.user = t.value),
                  a.value && (n.token = a.value),
                  i.value && (n.uid = i.value),
                  r.value && (n.primaryEmail = r.value),
                  o.value && (n.fullname = o.value),
                  l.value && (n.groupName = l.value),
                  s.value && (n.phone = s.value),
                  d.value && (n.rawSubscriptionData = d.value),
                  u.value && (n.openActivateDialogDate = u.value),
                  n
                );
              }),
              v = (0, n.Fl)(() => {
                if (!u.value) return !1;
                const e = new Date(),
                  t = new Date(u.value);
                return (
                  e.getFullYear() === t.getFullYear() &&
                  e.getMonth() === t.getMonth()
                );
              });
            return {
              region: e,
              user: t,
              token: a,
              uid: i,
              primaryEmail: r,
              fullname: o,
              groupName: l,
              phone: s,
              rawSubscriptionData: d,
              subscriptionDetails: c,
              openActivateDialogDate: u,
              restoreMemento: (n) => {
                "region" in n && (e.value = n.region),
                  "user" in n && (t.value = n.user),
                  "token" in n && (a.value = n.token),
                  "uid" in n && (i.value = n.uid),
                  "primaryEmail" in n && (r.value = n.primaryEmail),
                  "fullname" in n && (o.value = n.fullname),
                  "groupName" in n && (l.value = n.groupName),
                  "phone" in n && (s.value = n.phone),
                  "rawSubscriptionData" in n && (d.value = n.rawSubscriptionData),
                  "openActivateDialogDate" in n &&
                    (u.value = n.openActivateDialogDate);
              },
              updateAccount: (n) => {
                "region" in n && (e.value = n.region),
                  "user" in n && (t.value = n.user),
                  "token" in n && (a.value = n.token),
                  "uid" in n && (i.value = n.uid),
                  "primaryEmail" in n && (r.value = n.primaryEmail),
                  "fullname" in n && (o.value = n.fullname),
                  "groupName" in n && (l.value = n.groupName),
                  "phone" in n && (s.value = n.phone),
                  "rawSubscriptionData" in n && (d.value = n.rawSubscriptionData),
                  "subscriptionDetails" in n && (c.value = n.subscriptionDetails);
              },
              updateOpenActivateDialogDate: (e) => {
                u.value = e;
              },
              clearAccount: () => {
                (a.value = ""),
                  (i.value = ""),
                  (t.value = ""),
                  (r.value = ""),
                  (l.value = ""),
                  (c.value = {}),
                  (d.value = null);
              },
              memento: m,
              isOpenedActivateDialogThisMonth: v,
            };
          });
        var x = a(13908);
        const _ = (0, i.Q_)("app", () => {
          const e = (0, n.iH)([]),
            t = (0, n.iH)("2"),
            a = (0, n.iH)(!1),
            i = (0, n.iH)(!1),
            r = (0, n.iH)(!1),
            o = (0, n.iH)([]),
            l = (0, n.iH)(""),
            s = (0, n.iH)(""),
            d = (0, n.iH)(""),
            c = (0, n.iH)(""),
            u = (0, n.iH)(!1),
            m = (0, n.iH)(null),
            v = (0, n.iH)(null),
            p = (0, n.iH)(!0),
            h = (0, n.Fl)(() => e.value.includes(t.value)),
            g = (0, n.Fl)(() => {
              const e = D();
              if (e.user && e.token && e.region) return e.region;
              {
                const e = (0, x.E)().language;
                return "CN" === v.value || "zh-CN" === e ? "cn" : "us";
              }
            }),
            f = (0, n.Fl)(() => {
              let e = [];
              return (
                (e =
                  "cn" === g.value
                    ? ["facebook", "twitter", "pinterest", "blog", "xmind share"]
                    : ["xmind-share-of-cn"]),
                e
              );
            }),
            w = (0, n.Fl)(() => {
              const e = f.value,
                t = (0, x.E)(),
                a = t.supportedShareItems,
                n = t.preferredHiddenShareItems;
              return a.filter((t) => !n.includes(t) && !e.includes(t));
            }),
            y = (0, n.Fl)(() => !m.value || Number(m.value) < 8),
            b = (0, n.Fl)(() => {
              const t = {};
              return (
                e.value.length > 0 && (t.acceptedEULAVersions = e.value),
                u.value && (t.quickEntryGuided = u.value),
                m.value && (t.lastWelcomeVersion = m.value),
                t
              );
            });
          return {
            acceptedEULAVersions: e,
            currentEULAVersion: t,
            ready: a,
            initialized: i,
            quitting: r,
            pendingOpenRequests: o,
            systemAccentColor: l,
            deviceName: s,
            deviceId: d,
            hardwareFingerprint: c,
            quickEntryGuided: u,
            lastWelcomeVersion: m,
            localeCountryCode: v,
            eulaAccepted: h,
            serviceRegion: g,
            blockedShareItems: f,
            usableShareItems: w,
            hasWelcomeVersionChanged: y,
            memento: b,
            isAppActive: p,
            restoreMemento: (t) => {
              "acceptedEULAVersions" in t && (e.value = t.acceptedEULAVersions),
                "quickEntryGuided" in t && (u.value = t.quickEntryGuided),
                "lastWelcomeVersion" in t && (m.value = t.lastWelcomeVersion);
            },
            acceptEULA: () => {
              e.value = e.value.concat(t.value);
            },
            markReady: () => {
              a.value = !0;
            },
            markInitialized: () => {
              i.value = !0;
            },
            quit: () => {
              r.value = !0;
            },
            appendOpenRequests: ({ uris: e = null }) => {
              e &&
                Array.isArray(e) &&
                e.length > 0 &&
                (o.value = o.value.concat(e));
            },
            clearPendingOpenRequests: () => {
              o.value = [];
            },
            setSystemAccentColor: (e) => {
              l.value = e;
            },
            setDeviceName: (e) => {
              s.value = e;
            },
            setDeviceId: (e) => {
              d.value || (d.value = e);
            },
            setHardwareFingerprint: (e) => {
              c.value || (c.value = e);
            },
            quickEntryGuide: () => {
              u.value = !0;
            },
            updateWelcomeVersion: () => {
              m.value = 8;
            },
            setLocaleCountryCode: (e) => {
              v.value = e;
            },
            setAppActive: (e) => {
              p.value = e;
            },
          };
        });
        var H = a(86842);
        const M = "cache",
          R = (0, i.Q_)(M, () => {
            const e = (0, n.iH)([]),
              t = (0, n.iH)({}),
              a = (0, n.iH)([]),
              i = (0, n.iH)({}),
              r = (0, n.Fl)(() => {
                const n = {};
                return (
                  e.value && (n.libraryItems = e.value),
                  t.value && (n.pricingV2 = t.value),
                  a.value && (n.MASProductsV2 = a.value),
                  i.value && (n.resourceItems = i.value),
                  n
                );
              });
            return {
              libraryItems: e,
              MASProductsV2: a,
              pricingV2: t,
              resourceItems: i,
              memento: r,
              updateLibraryItems: (t) => (e.value = [...t]),
              updatePricing: (e) => (t.value = Object.assign({}, e)),
              updateMASProducts: (e) => (a.value = [...e]),
              updateResourceItems: (e) => (i.value[e.cacheId] = e.path),
              restoreMemento: (n) => {
                "libraryItems" in n && (e.value = n.libraryItems),
                  "pricingV2" in n && (t.value = n.pricingV2),
                  "MASProductsV2" in n && (a.value = n.MASProductsV2),
                  "resourceItems" in n && (i.value = n.resourceItems);
              },
            };
          });
        var B = a(6113),
          U = a.n(B),
          V = a(82647),
          G = a(63111);
        const j = "23.08.02122".split(".")[0],
          z = String.fromCharCode(
            45,
            45,
            45,
            45,
            45,
            66,
            69,
            71,
            73,
            78,
            32,
            80,
            85,
            66,
            76,
            73,
            67,
            32,
            75,
            69,
            89,
            45,
            45,
            45,
            45,
            45,
            10,
            77,
            73,
            71,
            102,
            77,
            65,
            48,
            71,
            67,
            83,
            113,
            71,
            83,
            73,
            98,
            51,
            68,
            81,
            69,
            66,
            65,
            81,
            85,
            65,
            65,
            52,
            71,
            78,
            65,
            68,
            67,
            66,
            105,
            81,
            75,
            66,
            103,
            81,
            67,
            68,
            89,
            72,
            51,
            49,
            108,
            48,
            108,
            108,
            105,
            99,
            66,
            97,
            118,
            98,
            85,
            90,
            82,
            103,
            48,
            121,
            49,
            76,
            110,
            73,
            10,
            50,
            74,
            74,
            117,
            80,
            90,
            97,
            107,
            48,
            52,
            57,
            56,
            119,
            71,
            109,
            75,
            48,
            78,
            43,
            107,
            115,
            113,
            67,
            122,
            65,
            48,
            88,
            85,
            102,
            67,
            103,
            81,
            53,
            69,
            57,
            105,
            116,
            89,
            121,
            80,
            117,
            84,
            43,
            122,
            54,
            80,
            122,
            47,
            43,
            48,
            113,
            54,
            78,
            101,
            65,
            112,
            107,
            87,
            99,
            110,
            67,
            47,
            84,
            104,
            10,
            87,
            81,
            89,
            54,
            90,
            108,
            69,
            79,
            77,
            111,
            110,
            114,
            104,
            80,
            117,
            98,
            56,
            122,
            115,
            87,
            89,
            79,
            90,
            122,
            99,
            107,
            81,
            117,
            116,
            120,
            51,
            106,
            110,
            54,
            107,
            43,
            54,
            90,
            88,
            120,
            55,
            121,
            85,
            98,
            98,
            107,
            120,
            73,
            107,
            43,
            119,
            113,
            87,
            103,
            110,
            108,
            81,
            120,
            110,
            120,
            54,
            84,
            77,
            100,
            10,
            83,
            51,
            114,
            103,
            111,
            51,
            114,
            52,
            98,
            108,
            70,
            84,
            87,
            105,
            54,
            69,
            69,
            81,
            73,
            68,
            65,
            81,
            65,
            66,
            10,
            45,
            45,
            45,
            45,
            45,
            69,
            78,
            68,
            32,
            80,
            85,
            66,
            76,
            73,
            67,
            32,
            75,
            69,
            89,
            45,
            45,
            45,
            45,
            45,
          ),
          K = "activation",
          W = (0, i.Q_)(K, () => {
            const e = (0, n.iH)({}),
              t = (0, n.iH)([]),
              a = (0, n.iH)(G.wi.TRIAL),
              i = (0, n.iH)(0),
              r = (0, n.iH)(""),
              o = (0, n.iH)(new Date().getTime()),
              l = (0, n.iH)(!1),
              s = (0, n.iH)(G.N1.DEFAULT),
              d = (0, n.Fl)(() => {
                if (!r.value)
                  return { openTrialStartTime: "", openTrialEndTime: "" };
                const { start: e, end: t } = A(r.value);
                return { openTrialStartTime: e, openTrialEndTime: t };
              }),
              c = (0, n.Fl)(() => {
                const { openTrialStartTime: e, openTrialEndTime: t } = d.value;
                return (
                  "" !== e &&
                  "" !== t &&
                  new Date(e).getTime() <= Date.now() &&
                  new Date(t).getTime() >= Date.now()
                );
              }),
              u = (0, n.Fl)(() =>
                p.value === G.wi.VALID
                  ? G.wi.VALID
                  : a.value === G.wi.EXPIRED ||
                    p.value === G.wi.EXPIRED ||
                    w.value === G.wi.EXPIRED
                  ? G.wi.EXPIRED
                  : G.wi.TRIAL,
              ),
              m = (0, n.Fl)(() => u.value === G.wi.VALID),
              v = (0, n.Fl)(() => {
                const e = D();
                if (!e.rawSubscriptionData) return null;
                try {
                  return A(e.rawSubscriptionData);
                } catch (e) {
                  return null;
                }
              }),
              p = (0, n.Fl)(() => {
                if (!v.value) return G.wi.TRIAL;
                {
                  const { status: e, expireTime: t } = v.value && v.value;
                  if (e && e === G.rJ.EXPIRED) return G.wi.EXPIRED;
                  if (e && e === G.rJ.VALID)
                    return t && o.value && new Date(t) < new Date(o.value)
                      ? G.wi.EXPIRED
                      : G.wi.VALID;
                }
              }),
              h = (0, n.Fl)(() => e.value[j] || null),
              g = (0, n.Fl)(() => !(!h.value || !h.value.data)),
              f = (0, n.Fl)(() => {
                if (!h.value) return null;
                try {
                  return E(h.value);
                } catch (e) {
                  return null;
                }
              }),
              w = (0, n.Fl)(() => {
                const e = C(f.value);
                return e === G.lX.E_OUTDATED
                  ? G.wi.EXPIRED
                  : e === G.lX.VALID
                  ? G.wi.VALID
                  : G.wi.TRIAL;
              }),
              y = (0, n.Fl)(() =>
                Math.max(0, Math.floor((o.value - i.value) / 864e5)),
              ),
              b = (0, n.Fl)(() => u.value !== G.wi.VALID),
              S = (0, n.Fl)(() => (b.value ? G.$9.EVALUATING : G.$9.NONE)),
              T = (0, n.Fl)(() => {
                const n = {};
                return (
                  e.value && Object.keys(e.value).length > 0 && (n.mld = e.value),
                  t.value && (n.lbl = t.value),
                  a.value !== G.wi.TRIAL && (n.machineStatus = a.value),
                  i.value && (n.trialStartTime = i.value),
                  l.value && (n.isDidRemindWillExpire = l.value),
                  r.value && (n.trialTimeRawData = r.value),
                  n
                );
              }),
              E = (e) => {
                const { data: t, email: a, key: n } = e,
                  i = (0, V.Nc)(n);
                return t
                  ? { email: a, key: i, name: t, data: t }
                  : { email: a, key: i };
              },
              C = (e) => {
                if (!e || "object" != typeof e) return G.lX.E_LICENSE_MISSING;
                if (!_().hardwareFingerprint) return G.lX.E_MACHINE_ID_UNMATCHED;
                const { key: t, email: a } = e,
                  n = I(t, a);
                return n !== G.lX.VALID ? n : G.lX.VALID;
              },
              I = (e, a) => {
                if (((e = (0, V.Nc)(e)), t.value.includes(e)))
                  return G.lX.E_KEY_INVALID;
                const n = (0, V.Wj)(e);
                if ("object" != typeof n) return G.lX.E_KEY_INVALID;
                const { majorVersion: i } = n;
                return i < 0
                  ? G.lX.E_KEY_INVALID
                  : i > 0 && j !== (i + 9).toString()
                  ? G.lX.E_MAJOR_VERSION_UNMATCHED
                  : (0, V.Tx)(e, a)
                  ? G.lX.VALID
                  : G.lX.E_KEY_INVALID;
              },
              A = (e) => {
                const t = Buffer.from(e, "base64"),
                  a = U().publicDecrypt(
                    { key: z, padding: U().constants.RSA_PKCS1_PADDING },
                    t,
                  );
                return JSON.parse(a.toString());
              };
            return {
              machineStatus: a,
              trialStartTime: i,
              checkpointTime: o,
              trialTimeRawData: r,
              licenseBlackList: t,
              masTransactionState: s,
              isDidRemindWillExpire: l,
              rawPerMachineLicenseDataForAllVersions: e,
              status: u,
              isStatusValid: m,
              openTrialTime: d,
              watermarkType: S,
              subscriptionData: v,
              trialElapsedDays: y,
              subscriptionStatus: p,
              inOpenTrialDuration: c,
              forcesUsingWatermark: b,
              perMachineLicenseData: f,
              perMachineLicenseStatus: w,
              rawPerMachineLicenseData: h,
              hasRawPerMachineLicenseDataValidated: g,
              checkpoint: () => {
                o.value = new Date().getTime();
              },
              updateStartTrial: (e = !1) => {
                (i.value && !e) || (i.value = new Date().getTime());
              },
              setOpenTrialTime: ({ rawData: e }) => {
                r.value = e;
              },
              expireMachineStatus: () => {
                a.value = G.wi.EXPIRED;
              },
              didRemindWillExpire: () => {
                l.value = !0;
              },
              parseSubscriptionData: A,
              updateLicenseBlackList: ({ blackList: e }) => {
                Array.isArray(e) && (t.value = e);
              },
              updateMASTransactionState: ({ transactionState: e }) => {
                s.value = e;
              },
              parsePerMachineLicenseData: E,
              clearPerMachineLicenseData: () => {
                const t = Object.assign({}, e.value);
                delete t[j], (e.value = t);
              },
              validatePerMachineLicenseData: C,
              updateRawPerMachineLicenseData: ({ rawData: t }) => {
                e.value = Object.assign({}, e.value, { [j]: t });
              },
              memento: T,
              restoreMemento: (n) => {
                "mld" in n && (e.value = n.mld),
                  "lbl" in n && (t.value = n.lbl),
                  "machineStatus" in n && (a.value = n.machineStatus),
                  "trialStartTime" in n && (i.value = n.trialStartTime),
                  "isDidRemindWillExpire" in n &&
                    (l.value = n.isDidRemindWillExpire),
                  "trialTimeRawData" in n && (r.value = n.trialTimeRawData),
                  (o.value = new Date().getTime());
              },
            };
          });
        var Z = a(51189);
        const $ = "auto-updater",
          J = (0, i.Q_)($, () => {
            const e = (0, n.iH)(),
              t = (0, n.iH)(Z.F5.CHECK_FOR_UPDATES),
              a = (0, n.iH)(0),
              i = (0, n.iH)(""),
              r = (0, n.iH)(),
              o = (0, n.iH)({}),
              l = (0, n.iH)({}),
              s = (0, n.iH)(0),
              d = (0, n.iH)(0),
              c = (0, n.iH)(!1),
              u = (0, n.iH)(!1),
              m = (0, n.Fl)(
                () => e.value === Z.A8.INSTALLING || e.value === Z.A8.INSTALLED,
              );
            return {
              status: e,
              label: t,
              action: i,
              actionId: a,
              actionPayload: r,
              userConfig: o,
              version: l,
              currentDownload: s,
              totalDownload: d,
              openedByUser: c,
              autoInstall: u,
              installing: m,
              setStatus: (t) => (e.value = t),
              setLabel: (e) => (t.value = e),
              setAction: ({ type: e, payload: t }) => {
                (i.value = e), (r.value = t), a.value++;
              },
              setUserConfig: (e) => (o.value = e),
              setVersion: (e) => (l.value = e),
              setDownloadProgress: (e) => {
                const t = e[0],
                  a = e[1];
                (t > s.value || 0 === t) && (s.value = t), (d.value = a);
              },
              setOpenedByUser: (e) => (c.value = e),
              setAutoInstall: () => (u.value = !0),
            };
          }),
          X = "attachment",
          q = (0, i.Q_)(X, () => {
            const e = (0, n.iH)(""),
              t = (0, n.iH)(""),
              a = (0, n.iH)(!1),
              i = (0, n.Fl)(() => {
                const n = {};
                return (
                  e.value && (n.lastSaveDirectoryBookmark = e.value),
                  t.value && (n.lastSaveDirectory = t.value),
                  a.value && (n.doNotShowAttachmentMessageAgain = a.value),
                  n
                );
              });
            return {
              lastSaveDirectory: t,
              lastSaveDirectoryBookmark: e,
              doNotShowAttachmentMessageAgain: a,
              setLastDirectory: (e) => {
                "lastSaveDirectory" in e && (t.value = e.lastSaveDirectory);
              },
              setDoNotShowAttachmentMessageAgain: () => {
                a.value = !0;
              },
              memento: i,
              restoreMemento: (e) => {
                "doNotShowAttachmentMessageAgain" in e &&
                  (a.value = e.doNotShowAttachmentMessageAgain),
                  "lastSaveDirectory" in e && (t.value = e.lastSaveDirectory);
              },
            };
          }),
          Q = "biggerplate",
          Y = (0, i.Q_)(Q, () => {
            const e = (0, n.iH)(""),
              t = (0, n.iH)(0),
              a = (0, n.iH)(""),
              i = (0, n.Fl)(() => {
                const n = {};
                return (
                  e.value && (n.accessToken = e.value),
                  t.value && (n.realExpireTime = t.value),
                  a.value && (n.refreshToken = a.value),
                  n
                );
              });
            return {
              accessToken: e,
              refreshToken: a,
              realExpireTime: t,
              clearBiggerplate: () => {
                (e.value = ""), (t.value = 0), (a.value = "");
              },
              updateBiggerplate: (n) => {
                "accessToken" in n && (e.value = n.accessToken),
                  "realExpireTime" in n && (t.value = n.realExpireTime),
                  "refreshToken" in n && (a.value = n.refreshToken);
              },
              memento: i,
              restoreMemento: (n) => {
                "accessToken" in n && (e.value = n.accessToken),
                  "realExpireTime" in n && (t.value = n.realExpireTime),
                  "refreshToken" in n && (a.value = n.refreshToken);
              },
            };
          }),
          ee = "evernote",
          te = (0, i.Q_)(ee, () => {
            const e = (0, n.iH)(""),
              t = (0, n.iH)(""),
              a = (0, n.iH)(!1),
              i = (0, n.Fl)(() => {
                const n = {};
                return (
                  e.value && (n.oauthToken = e.value),
                  t.value && (n.username = t.value),
                  a.value && (n.china = a.value),
                  n
                );
              });
            return {
              china: a,
              username: t,
              oauthToken: e,
              clearEvernote: () => {
                (e.value = ""), (t.value = ""), (a.value = !1);
              },
              updateEvernote: (n) => {
                "oauthToken" in n && (e.value = n.oauthToken),
                  "username" in n && (t.value = n.username),
                  "china" in n && (a.value = n.china);
              },
              memento: i,
              restoreMemento: (n) => {
                "oauthToken" in n && (e.value = n.oauthToken),
                  "username" in n && (t.value = n.username),
                  "china" in n && (a.value = n.china);
              },
            };
          }),
          ae = "feedback",
          ne = (0, i.Q_)(ae, () => {
            const e = (0, n.iH)(""),
              t = (0, n.Fl)(() => {
                const t = {};
                return e.value && (t.email = e.value), t;
              });
            return {
              email: e,
              updateFeedback: (t) => {
                e.value = t;
              },
              memento: t,
              restoreMemento: (t) => {
                "email" in t && (e.value = t.email);
              },
            };
          }),
          ie = "fileCache",
          re = (0, i.Q_)(ie, () => {
            const e = (0, n.iH)([]),
              t = (t) => e.value.find((e) => e.srcPath === t),
              a = (0, n.Fl)(() => {
                const t = {};
                return e.value && (t.fileCacheItems = e.value), t;
              });
            return {
              fileCacheItems: e,
              addSnapshot: (t) => {
                let a = null;
                if (
                  ((a = t.fileCacheId
                    ? e.value.find((e) => e.fileCacheId === t.fileCacheId)
                    : e.value.find((e) => e.srcPath === t.srcPath)),
                  a)
                )
                  a.snapshots.push({ id: t.snapshotId, timestamp: Date.now() }),
                    (a.timestamp = Date.now()),
                    t.filename && (a.filename = t.filename),
                    t.srcPath && (a.srcPath = t.srcPath);
                else {
                  const a = {
                    fileCacheId: t.fileCacheId,
                    filename: t.filename,
                    srcPath: t.srcPath,
                    timestamp: Date.now(),
                    firstSnapshotId: t.snapshotId,
                    snapshots: [{ id: t.snapshotId, timestamp: Date.now() }],
                  };
                  e.value.push(a);
                }
              },
              lastSnapshot: (e) => {
                const a = t(e);
                if (a && a.snapshots.length > 0) {
                  const e = a.snapshots.length;
                  return a.snapshots[e - 1];
                }
                return null;
              },
              totalSnapshot: (e) => {
                const a = t(e);
                return (a && a.snapshots.length) || 0;
              },
              fileCacheItem: t,
              removeSnapshot: (t) => {
                const a = e.value.find((e) => e.fileCacheId === t.fileCacheId);
                a &&
                  a.snapshots.forEach((e, n) => {
                    e.id === t.snapshotId && a.snapshots.splice(n, 1);
                  });
              },
              removeFileCache: (t) => {
                e.value.forEach((a, n) => {
                  a.fileCacheId === t.fileCacheId && e.value.splice(n, 1);
                });
              },
              fileCacheItemById: (t) => e.value.find((e) => e.fileCacheId === t),
              removeAllFileCache: () => {
                e.value = [];
              },
              memento: a,
              restoreMemento: (t) => {
                "fileCacheItems" in t && (e.value = t.fileCacheItems);
              },
            };
          }),
          oe = [
            { commandId: "new", accelerator: "CmdOrCtrl+N" },
            { commandId: "open", accelerator: "CmdOrCtrl+O" },
            { commandId: "save", accelerator: "CmdOrCtrl+S" },
            { commandId: "saveAs", accelerator: "CmdOrCtrl+Shift+S" },
            { commandId: "print", accelerator: "CmdOrCtrl+P" },
            { commandId: "closeSimpleWindow", accelerator: "CmdOrCtrl+W" },
            { commandId: "editor.addSheet", accelerator: "CmdOrCtrl+Alt+N" },
            {
              commandId: "editor.previousSheet",
              accelerator: "Shift+CmdOrCtrl+[",
            },
            { commandId: "editor.nextSheet", accelerator: "Shift+CmdOrCtrl+]" },
            { commandId: "frame.addNewTab", accelerator: "CmdOrCtrl+T" },
            {
              commandId: "frame.previousTab",
              accelerator: "Shift+CmdOrCtrl+Tab",
              darwin: { accelerator: "Shift+Ctrl+Tab" },
            },
            {
              commandId: "frame.nextTab",
              accelerator: "CmdOrCtrl+Tab",
              darwin: { accelerator: "Ctrl+Tab" },
            },
            { commandId: "undo", accelerator: "CmdOrCtrl+Z" },
            {
              commandId: "redo",
              accelerator: "CmdOrCtrl+Y",
              darwin: { accelerator: "Cmd+Shift+Z" },
            },
            { commandId: "cut", accelerator: "CmdOrCtrl+X" },
            { commandId: "copy", accelerator: "CmdOrCtrl+C" },
            { commandId: "paste", accelerator: "CmdOrCtrl+V" },
            { commandId: "duplicate", accelerator: "CmdOrCtrl+D" },
            { commandId: "editor.copyStyle", accelerator: "CmdOrCtrl+Alt+C" },
            { commandId: "editor.pasteStyle", accelerator: "CmdOrCtrl+Alt+V" },
            { commandId: "editor.resetStyle", accelerator: "CmdOrCtrl+Alt+0" },
            { commandId: "delete", accelerator: "Delete" },
            { commandId: "delete", accelerator: "Backspace", primary: !0 },
            { commandId: "deleteSingleTopic", accelerator: "CmdOrCtrl+Delete" },
            {
              commandId: "deleteSingleTopic",
              accelerator: "CmdOrCtrl+Backspace",
              primary: !0,
            },
            { commandId: "selectAll", accelerator: "CmdOrCtrl+A" },
            {
              commandId: "workbench.toggleFindAndReplace",
              accelerator: "CmdOrCtrl+F",
            },
            { commandId: "editor.addSubTopic", accelerator: "Tab", primary: !0 },
            { commandId: "editor.addSubTopic", accelerator: "Insert" },
            { commandId: "editor.addTopic", accelerator: "Enter" },
            { commandId: "editor.addTopicBefore", accelerator: "Shift+Enter" },
            {
              commandId: "editor.addParentTopic",
              accelerator: "CmdOrCtrl+Enter",
            },
            {
              commandId: "editor.addRelationship",
              accelerator: "Shift+CmdOrCtrl+R",
            },
            { commandId: "editor.addBoundary", accelerator: "Shift+CmdOrCtrl+B" },
            {
              commandId: "editor.showNotesEditor",
              accelerator: "Shift+CmdOrCtrl+N",
            },
            {
              commandId: "editor.showLabelEditor",
              accelerator: "Shift+CmdOrCtrl+L",
            },
            {
              commandId: "editor.showHyperlinkEditor",
              accelerator: "CmdOrCtrl+K",
            },
            { commandId: "editor.addTask", accelerator: "CmdOrCtrl+Alt+T" },
            {
              commandId: "editor.addLocalImage",
              accelerator: "Shift+CmdOrCtrl+I",
            },
            {
              commandId: "editor.keepTextOnly",
              accelerator: "Shift+CmdOrCtrl+-",
            },
            {
              commandId: "editor.showEditBox",
              accelerator: "Space",
              primary: !0,
            },
            { commandId: "editor.showEditBox", accelerator: "F2" },
            { commandId: "editor.boldText", accelerator: "CmdOrCtrl+B" },
            { commandId: "editor.italicText", accelerator: "CmdOrCtrl+I" },
            {
              commandId: "editor.increaseFontSize",
              accelerator: "Shift+CmdOrCtrl+.",
            },
            {
              commandId: "editor.decreaseFontSize",
              accelerator: "Shift+CmdOrCtrl+,",
            },
            {
              commandId: "editor.setStyleAsVeryImportant",
              accelerator: "Shift+Alt+1",
            },
            {
              commandId: "editor.setStyleAsImportant",
              accelerator: "Shift+Alt+2",
            },
            {
              commandId: "editor.setStyleAsCrossOut",
              accelerator: "Shift+Alt+3",
            },
            { commandId: "editor.setStyleAsDefault", accelerator: "Shift+Alt+0" },
            {
              commandId: "editor.updateStyleToSameTypeTopics",
              accelerator: "Alt+CmdOrCtrl+U",
            },
            { commandId: "editor.selectionNavigateUp", accelerator: "Up" },
            { commandId: "editor.selectionNavigateDown", accelerator: "Down" },
            { commandId: "editor.selectionNavigateLeft", accelerator: "Left" },
            { commandId: "editor.selectionNavigateRight", accelerator: "Right" },
            {
              commandId: "editor.selectionNavigateLeftWithShift",
              accelerator: "Shift+Left",
            },
            {
              commandId: "editor.selectionNavigateRightWithShift",
              accelerator: "Shift+Right",
            },
            {
              commandId: "editor.selectionNavigateUpWithShift",
              accelerator: "Shift+Up",
            },
            {
              commandId: "editor.selectionNavigateDownWithShift",
              accelerator: "Shift+Down",
            },
            {
              commandId: "editor.focusAndSelectCenter",
              accelerator: "CmdOrCtrl+R",
            },
            { commandId: "editor.exchangeSiblingTopicUp", accelerator: "Alt+Up" },
            {
              commandId: "editor.exchangeSiblingTopicDown",
              accelerator: "Alt+Down",
            },
            {
              commandId: "editor.exchangeSiblingTopicLeft",
              accelerator: "Alt+Left",
            },
            {
              commandId: "editor.exchangeSiblingTopicRight",
              accelerator: "Alt+Right",
            },
            {
              commandId: "editor.moveTopicToTop",
              accelerator: "Alt+CmdOrCtrl+Up",
            },
            {
              commandId: "editor.moveTopicToBottom",
              accelerator: "Alt+CmdOrCtrl+Down",
            },
            {
              commandId: "workbench.switchToMapOrOutliner",
              accelerator: "Shift+CmdOrCtrl+M",
            },
            { commandId: "editor.toggleBranch", accelerator: "CmdOrCtrl+/" },
            {
              commandId: "editor.toggleAllBranch",
              accelerator: "CmdOrCtrl+Alt+/",
            },
            { commandId: "editor.toggleBranchOnly", accelerator: "CmdOrCtrl+;" },
            { commandId: "toggleFullScreen", accelerator: "Command+Ctrl+F" },
            {
              commandId: "editor.zoomIn",
              accelerator: "CmdOrCtrl+=",
              primary: !0,
            },
            { commandId: "editor.zoomIn", accelerator: "Shift+CmdOrCtrl+=" },
            { commandId: "editor.zoomOut", accelerator: "CmdOrCtrl+-" },
            { commandId: "editor.resetZoom", accelerator: "CmdOrCtrl+0" },
            { commandId: "frame.toggleTabbar", accelerator: "CmdOrCtrl+Shift+T" },
            {
              commandId: "workbench.toggleTopicPanel",
              accelerator: "CmdOrCtrl+]",
            },
            {
              commandId: "mapShot",
              accelerator: "F7",
              darwin: { accelerator: "Cmd+Shift+P" },
            },
            {
              commandId: "workbench.toggleZenMode",
              accelerator: "CmdOrCtrl+Alt+F",
            },
            {
              commandId: "editor.enterPitchMode",
              accelerator: "CmdOrCtrl+Alt+P",
            },
            { commandId: "keyAssist", accelerator: "Ctrl+Shift+/", primary: !0 },
            { commandId: "keyAssist", darwin: { accelerator: "Ctrl+/" } },
            {
              commandId: "preferences",
              accelerator: "CmdOrCtrl+Shift+P",
              darwin: { accelerator: "Cmd+," },
            },
            { commandId: "escape", accelerator: "Escape" },
            { commandId: "closeComplexWindow", accelerator: "CmdOrCtrl+Shift+W" },
            { commandId: "editor.addMarkerOne", accelerator: "CmdOrCtrl+1" },
            { commandId: "editor.addMarkerTwo", accelerator: "CmdOrCtrl+2" },
            { commandId: "editor.addMarkerThree", accelerator: "CmdOrCtrl+3" },
            { commandId: "editor.addMarkerFour", accelerator: "CmdOrCtrl+4" },
            { commandId: "editor.addMarkerFive", accelerator: "CmdOrCtrl+5" },
            { commandId: "editor.addMarkerSix", accelerator: "CmdOrCtrl+6" },
            { commandId: "editor.addMarkerSeven", accelerator: "CmdOrCtrl+7" },
            {
              commandId: "editor.toggleBranchLevelOne",
              accelerator: "Alt+CmdOrCtrl+1",
            },
            {
              commandId: "editor.toggleBranchLevelTwo",
              accelerator: "Alt+CmdOrCtrl+2",
            },
            {
              commandId: "editor.toggleBranchLevelThree",
              accelerator: "Alt+CmdOrCtrl+3",
            },
            {
              commandId: "editor.toggleBranchLevelFour",
              accelerator: "Alt+CmdOrCtrl+4",
            },
            {
              commandId: "editor.toggleBranchLevelFive",
              accelerator: "Alt+CmdOrCtrl+5",
            },
            {
              commandId: "editor.toggleBranchLevelSix",
              accelerator: "Alt+CmdOrCtrl+6",
            },
            {
              commandId: "editor.toggleBranchLevelSeven",
              accelerator: "Alt+CmdOrCtrl+7",
            },
            {
              commandId: "editor.toggleBranchLevelEight",
              accelerator: "Alt+CmdOrCtrl+8",
            },
            {
              commandId: "editor.toggleBranchLevelNine",
              accelerator: "Alt+CmdOrCtrl+9",
            },
          ].filter(Boolean),
          le = [
            "new",
            "newFromTemplate",
            "newFromLibrary",
            "open",
            "save",
            "saveAs",
            "print",
            "closeSimpleWindow",
            "closeAllWindows",
            "switchBetweenXMindWindows",
            "mergeAllWindows",
            "editor.addSheet",
            "editor.newSheetFromTopic",
            "editor.previousSheet",
            "editor.nextSheet",
            "frame.addNewTab",
            "frame.previousTab",
            "frame.nextTab",
            "undo",
            "redo",
            "cut",
            "copy",
            "paste",
            "duplicate",
            "delete",
            "selectAll",
            "workbench.toggleFindAndReplace",
            "editor.showNotesEditor",
            "editor.showLabelEditor",
            "editor.showHyperlinkEditor",
            "editor.showTopiclinkEditor",
            "editor.addFileLink",
            "editor.addFolderLink",
            "editor.addAttachmentOnNewTopic",
            "editor.addAudioOnNewTopic",
            "workbench.toggleMarkerPanel",
            "workbench.toggleStickerPanel",
            "workbench.toggleIllustrationPanel",
            "editor.addLocalImage",
            "editor.showEquationEditor",
            "editor.addMarkerOne",
            "editor.addMarkerTwo",
            "editor.addMarkerThree",
            "editor.addMarkerFour",
            "editor.addMarkerFive",
            "editor.addMarkerSix",
            "editor.addMarkerSeven",
            "editor.removeMarker",
            "editor.removeStickerOrImageOrEquation",
            "editor.removeLabel",
            "editor.removeLink",
            "editor.removeNote",
            "editor.keepTextOnly",
            "workbench.switchToMapOrOutliner",
            "editor.toggleBranch",
            "editor.toggleBranchLevelOne",
            "editor.toggleBranchLevelTwo",
            "editor.toggleBranchLevelThree",
            "editor.toggleBranchLevelFour",
            "editor.toggleBranchLevelFive",
            "editor.toggleBranchLevelSix",
            "editor.toggleBranchLevelSeven",
            "editor.toggleBranchLevelEight",
            "editor.toggleBranchLevelNine",
            "editor.toggleAllBranch",
            "editor.toggleBranchOnly",
            "toggleFullScreen",
            "editor.zoomIn",
            "editor.zoomOut",
            "editor.resetZoom",
            "frame.toggleTabbar",
            "editor.toggleTopicCountLabel",
            "editor.toggleSheetBar",
            "workbench.exportPdf",
            "workbench.exportMd",
            "workbench.exportWord",
            "workbench.exportExcel",
            "workbench.exportOPML",
            "workbench.exportTextBundle",
            "mergeXMindFiles",
            "keyAssist",
            "workbench.setpassword",
            "preferences",
            "workbench.toggleTopicNavigationPanel",
          ],
          se = {
            default: oe,
            outliner: [
              { commandId: "outliner.deleteWithDel", accelerator: "Delete" },
              { commandId: "outliner.addTopic", accelerator: "Enter" },
              {
                commandId: "outliner.deleteTopic",
                accelerator: "Shift+CmdOrCtrl+Backspace",
              },
              { commandId: "outliner.indent", accelerator: "Tab" },
              { commandId: "outliner.outdent", accelerator: "Shift+Tab" },
              {
                commandId: "outliner.multiSelectionNavigateUp",
                accelerator: "Shift+Up",
              },
              {
                commandId: "outliner.multiSelectionNavigateDown",
                accelerator: "Shift+Down",
              },
              {
                commandId: "outliner.exchangeSiblingTopicUp",
                accelerator: "Alt+Up",
              },
              {
                commandId: "outliner.exchangeSiblingTopicDown",
                accelerator: "Alt+Down",
              },
              {
                commandId: "outliner.moveCaretCharacterToBeginning",
                accelerator: "CmdOrCtrl+Left",
              },
              {
                commandId: "outliner.moveCaretCharacterToEnd",
                accelerator: "CmdOrCtrl+Right",
              },
              {
                commandId: "outliner.moveCaretCharacterToAboveSiblingTopic",
                accelerator: "CmdOrCtrl+Up",
              },
              {
                commandId: "outliner.moveCaretCharacterToBelowSiblingTopic",
                accelerator: "CmdOrCtrl+Down",
              },
              {
                commandId: "editor.enterLineBreak",
                accelerator: "CmdOrCtrl+Enter",
              },
              {
                commandId: "editor.enterLineBreak",
                darwin: { accelerator: "Ctrl+Enter" },
              },
            ],
          };
        var de = a(58659);
        const ce = "keybindings",
          ue = (0, i.Q_)(ce, () => {
            const e = (0, n.iH)({
                default: {
                  defaultBinaryKeybindings: {},
                  userBinaryKeybindings: {},
                },
                outliner: {
                  defaultBinaryKeybindings: {},
                  userBinaryKeybindings: {},
                },
              }),
              t = (0, n.iH)([]),
              a = (0, n.iH)(!0),
              i = (0, n.iH)(null),
              r = (0, n.Fl)(() => {
                const t = { groups: {} },
                  a = Object.keys(e.value);
                for (const n of a) {
                  const a = e.value[n].userBinaryKeybindings;
                  a &&
                    ("default" === n
                      ? (t.userBinaryKeybindings = a)
                      : (t.groups[n] = { userBinaryKeybindings: a }));
                }
                return t;
              }),
              o = ({ key: e, modifiers: t, keybinding: a, groupName: n }) => {
                void 0 === a && (a = u(e, t));
                const i = (0, de.sn)(a),
                  r = s(n)[i];
                return r && r.keybinding && r.commandId;
              },
              l = (e, t = "default") => {
                let a;
                const n = s(t);
                for (const t in n) {
                  const i = n[t];
                  if (i.commandId === e && ((a = i), i.primary)) break;
                }
                return a && a.keybinding;
              },
              s = (t) => {
                const a = {},
                  n = e.value[t];
                if (n) {
                  for (const e in n.defaultBinaryKeybindings)
                    a[e] = Object.assign({}, n.defaultBinaryKeybindings[e]);
                  for (const e in n.userBinaryKeybindings)
                    a[e] = Object.assign({}, n.userBinaryKeybindings[e]);
                }
                return a;
              },
              c = () => {
                const e = [];
                return (
                  t.value.forEach((t) => {
                    e.push(l(t, "default")), e.push(l(t, "outliner"));
                  }),
                  e.filter((e) => !!e)
                );
              },
              u = (e, t) => (0, de.Wb)(e, t),
              m = ({ keybinding: t, groupName: a = "default" }) => {
                const i = (0, de.sn)(t),
                  r = e.value[a];
                r &&
                  (r.defaultBinaryKeybindings[i]
                    ? n.ZP.set(r.userBinaryKeybindings, i, {
                        commandId: "",
                        keybinding: "",
                      })
                    : n.ZP.delete(r.userBinaryKeybindings, i));
              };
            return {
              groups: e,
              enabled: a,
              codeTokeyMap: i,
              forbitConflictCommandIds: t,
              memento: r,
              commandIdByKeybinding: o,
              keybindingByCommandIdAndGroup: l,
              keybindingsByCommandIdAndGroup: (e, t = "default") => {
                const a = [],
                  n = s(t);
                for (const t in n) {
                  const i = n[t];
                  i.commandId === e && a.push(i);
                }
                return a
                  .sort((e, t) => (e.primary ? -1 : t.primary ? 1 : 0))
                  .map((e) => e.keybinding)
                  .filter((e) => !!e);
              },
              keybindingByCommandId: (e) => {
                let t;
                for (const a of (0, d.J)().aggregatedCommands)
                  if (a && a.id === e) {
                    t = a;
                    break;
                  }
                const a = (t && t.group) || "default";
                let n;
                const i = s(a);
                for (const t in i) {
                  const a = i[t];
                  if (a.commandId === e && ((n = a), a.primary)) break;
                }
                return n && n.keybinding;
              },
              keybindingExists: (e, t = "default") => {
                const a = (0, de.sn)(e),
                  n = s(t),
                  i = n && n[a];
                return i && i.commandId;
              },
              keybindingsForbit: c,
              codeToKey: (e) => (0, de.H9)(e, i.value),
              formarKeybindingForMenu: (e) => (0, de.ic)(e),
              isValidShortcut: (e, t) => (0, de.o4)(e, t),
              generateKeybindingByKey: u,
              commandByKeybinding: ({ key: t, modifiers: a, keybinding: n }) => {
                void 0 === n && (n = u(t, a));
                const i = (0, de.sn)(n),
                  r = [];
                for (const t in e.value) {
                  const e = s(t)[i];
                  e &&
                    r.push({ commandId: e.commandId, keybinding: e.keybinding });
                }
                let o;
                for (const e of r)
                  (0, d.J)()
                    .aggregatedCommands.filter((t) => e.commandId === t.id)
                    .forEach((e) => {
                      e && (o = e);
                    });
                return o;
              },
              init: () => {
                var a, i;
                t.value = le;
                for (const t in se) {
                  const r = se[t],
                    o = {
                      defaultBinaryKeybindings: {},
                      userBinaryKeybindings: {},
                    };
                  for (const e of r) {
                    const t = e.commandId,
                      a = "win32" in e ? e.win32.accelerator : e.accelerator,
                      n = "primary" in e ? e.primary : void 0;
                    if (!a || !t) continue;
                    const i = (0, de.sn)(a);
                    o.defaultBinaryKeybindings[i] = {
                      commandId: t,
                      keybinding: (0, de.xr)(i),
                      primary: n,
                    };
                  }
                  const l = e.value,
                    s = {
                      userBinaryKeybindings: Object.assign(
                        Object.assign(
                          {},
                          (null === (a = l[t]) || void 0 === a
                            ? void 0
                            : a.userBinaryKeybindings) || {},
                        ),
                        o.userBinaryKeybindings,
                      ),
                      defaultBinaryKeybindings: Object.assign(
                        Object.assign(
                          {},
                          (null === (i = l[t]) || void 0 === i
                            ? void 0
                            : i.defaultBinaryKeybindings) || {},
                        ),
                        o.defaultBinaryKeybindings,
                      ),
                    };
                  n.ZP.set(e.value, t, s);
                }
              },
              reset: () => {
                for (const t in e.value) e.value[t].userBinaryKeybindings = {};
              },
              setEnabled: (e) => {
                a.value = e;
              },
              restoreMemento: (t) => {
                if ("userBinaryKeybindings" in t) {
                  a("default", t.userBinaryKeybindings);
                }
                if ("groups" in t) {
                  const e = t.groups,
                    n = Object.keys(e);
                  for (const t of n) {
                    const n = e[t];
                    if ("userBinaryKeybindings" in n) {
                      a(t, n.userBinaryKeybindings);
                    }
                  }
                }
                function a(t, a) {
                  Object.keys(a).forEach((e) => {
                    const t = a[Number(e)];
                    t
                      ? t.commandId && (t.keybinding = (0, de.xr)(e))
                      : delete a[Number(e)];
                  }),
                    (e.value[t] = e.value[t] || {
                      defaultBinaryKeybindings: {},
                      userBinaryKeybindings: {},
                    }),
                    (e.value[t].userBinaryKeybindings = a);
                }
              },
              initCodeToKeyMap: (e) => {
                i.value = e;
              },
              binding: ({
                keybinding: t,
                commandId: a,
                primary: i,
                groupName: r = "default",
              }) => {
                const s = o({ keybinding: t, groupName: r });
                if (s && s !== a)
                  throw new Error(`Keybinding conflicted (${s} VS ${a}).`);
                const d = c();
                if (d && d.includes(t))
                  throw new Error("Keybinding forbit while binding");
                const u = l(a, r);
                u && m({ keybinding: u, groupName: r }),
                  (({
                    commandId: t,
                    primary: a,
                    keybinding: i,
                    groupName: r = "default",
                  }) => {
                    const o = (0, de.sn)(i);
                    (e.value[r] = e.value[r] || {
                      defaultBinaryKeybindings: {},
                      userBinaryKeybindings: {},
                    }),
                      n.ZP.set(e.value[r].userBinaryKeybindings, o, {
                        commandId: t,
                        primary: a,
                        keybinding: i,
                      });
                  })({ commandId: a, primary: i, keybinding: t, groupName: r });
              },
              unbinding: ({ keybinding: e, groupName: t = "default" }) => {
                if (!o({ keybinding: e, groupName: t }))
                  throw new Error(`Keybinding ${e} not exist.`);
                m({ keybinding: e, groupName: t });
              },
            };
          }),
          me = "map-shot",
          ve = (0, i.Q_)(me, () => {
            const e = (0, n.iH)(!0),
              t = (0, n.iH)(!0),
              a = (0, n.iH)("#D0D0D0"),
              i = (0, n.iH)(!0),
              r = (0, n.iH)(),
              o = (0, n.iH)(),
              l = (0, n.iH)("normal"),
              s = (0, n.Fl)(() => ({
                frame: e.value,
                shadow: t.value,
                frameColor: a.value,
                frameWidth: l.value,
                watermark: i.value,
              })),
              d = (0, n.Fl)(() => ({ rate: r.value, size: o.value })),
              c = (0, n.Fl)(() => {
                const n = {};
                return (
                  r.value && (n.screenshotRate = r.value),
                  o.value && (n.screenshotSize = o.value),
                  a.value && (n.modalFrameColor = a.value),
                  l.value && (n.modalFrameWidth = l.value),
                  e.value && (n.modalFrameChecked = e.value),
                  t.value && (n.modalShadowChecked = t.value),
                  i.value && (n.modalWatermarkChecked = i.value),
                  n
                );
              });
            return {
              screenshotRate: r,
              screenshotSize: o,
              modalFrameColor: a,
              modalFrameWidth: l,
              modalFrameChecked: e,
              modalShadowChecked: t,
              modalWatermarkChecked: i,
              memento: c,
              screenshot: d,
              modalOptions: s,
              restoreMemento: (n) => {
                "screenshotRate" in n && (r.value = n.screenshotRate),
                  "screenshotSize" in n && (o.value = n.screenshotSize),
                  "modalFrameColor" in n && (a.value = n.modalFrameColor),
                  "modalFrameWidth" in n && (l.value = n.modalFrameWidth),
                  "modalFrameChecked" in n && (e.value = n.modalFrameChecked),
                  "modalShadowChecked" in n && (t.value = n.modalShadowChecked),
                  "modalWatermarkChecked" in n &&
                    (i.value = n.modalWatermarkChecked);
              },
              updateScreenshot: (e) => {
                "rate" in e && (r.value = e.rate),
                  "size" in e && (o.value = e.size);
              },
              updateModalOptions: ({
                frame: n,
                shadow: r,
                watermark: o,
                frameColor: s,
                frameWidth: d,
              }) => {
                void 0 !== n && (e.value = n),
                  void 0 !== r && (t.value = r),
                  void 0 !== s && (a.value = s),
                  void 0 !== d && (l.value = d),
                  void 0 !== o && (i.value = o);
              },
            };
          }),
          pe = "notification",
          he = (0, i.Q_)(pe, () => {
            const e = (0, n.iH)({}),
              t = (0, n.iH)({}),
              a = (0, n.iH)(null),
              i = (0, n.iH)(!1),
              r = (0, n.iH)(null),
              o = (0, n.iH)(null),
              l = (0, n.iH)(null),
              s = (0, n.iH)(),
              d = (0, n.Fl)(() => {
                const t = {};
                return (
                  e.value && (t.events = e.value),
                  r.value && (t.firstStartTimestamp = r.value),
                  o.value && (t.startTimestamp1 = o.value),
                  l.value && (t.startTimestamp2 = l.value),
                  s.value && (t.startTimestamp3 = s.value),
                  t
                );
              });
            return {
              events: e,
              status: i,
              tempEvents: t,
              startTimestamp1: o,
              startTimestamp2: l,
              startTimestamp3: s,
              currentPromotion: a,
              firstStartTimestamp: r,
              memento: d,
              addTempEvents: (e) => {
                const a = Object.assign({}, t.value);
                for (const t of e) a[t.id] = t;
                t.value = Object.assign({}, a);
              },
              shiftTempEvent: (a) => {
                e.value[a] = t.value[a];
                let n = Object.keys(e.value);
                n.length > 50 &&
                  ((n = n.sort(
                    (t, a) => e.value[a].started_time - e.value[t].started_time,
                  )),
                  (n = n.slice(0, 50))),
                  (e.value = Object.assign({}, e.value)),
                  delete t.value[a],
                  (t.value = Object.assign({}, t.value));
              },
              restoreMemento: (t) => {
                "events" in t && (e.value = t.events),
                  "firstStartTimestamp" in t && (r.value = t.firstStartTimestamp),
                  "startTimestamp1" in t && (o.value = t.startTimestamp1),
                  "startTimestamp2" in t && (l.value = t.startTimestamp2),
                  "startTimestamp3" in t && (s.value = t.startTimestamp3);
              },
              setCurrentPromotion: (e) => {
                a.value = e;
              },
              updateStartTimestamp: () => {
                const e = Date.now();
                r.value || (r.value = e),
                  (o.value = l.value || e),
                  (l.value = s.value || e),
                  (s.value = e);
              },
              updateNotificationStatus: (e) => {
                i.value = e;
              },
            };
          }),
          ge = "pitch",
          fe = (0, i.Q_)(ge, () => {
            const e = (0, n.iH)("default"),
              t = (0, n.iH)(!1),
              a = (0, n.iH)("Auto"),
              i = (0, n.iH)(null),
              r = (0, n.iH)(!1),
              o = (0, n.iH)(!1),
              l = (0, n.Fl)(() => {
                const n = {};
                return (
                  e.value && (n.preferredThemeId = e.value),
                  t.value && (n.disableAnimation = t.value),
                  a.value && (n.aspectRatio = a.value),
                  r.value && (n.watermarkEnabled = r.value),
                  n
                );
              });
            return {
              preferredThemeId: e,
              disableAnimation: t,
              aspectRatio: a,
              updateTrigger: i,
              watermarkEnabled: r,
              showOnWindow: o,
              memento: l,
              updateSettings: (n) => {
                "preferredThemeId" in n && (e.value = n.preferredThemeId),
                  "disableAnimation" in n && (t.value = n.disableAnimation),
                  "aspectRatio" in n && (a.value = n.aspectRatio),
                  "watermarkEnabled" in n && (r.value = n.watermarkEnabled),
                  n && (i.value = n);
              },
              updateControls: (e) => {
                "showOnWindow" in e && (o.value = e.showOnWindow);
              },
              restoreMemento: (n) => {
                "preferredThemeId" in n && (e.value = n.preferredThemeId),
                  "disableAnimation" in n && (t.value = n.disableAnimation),
                  "aspectRatio" in n && (a.value = n.aspectRatio),
                  "watermarkEnabled" in n && (r.value = n.watermarkEnabled);
              },
              triggerUpdate: (e) => {
                i.value = e;
              },
            };
          }),
          we = "rate-us",
          ye = (0, i.Q_)(we, () => {
            const e = (0, n.iH)(0),
              t = (0, n.iH)(0),
              a = (0, n.iH)(!1),
              i = (0, n.iH)(0),
              r = (0, n.iH)(!1),
              o = (0, n.Fl)(() => a.value && e.value >= 500),
              l = (0, n.Fl)(() => {
                const n = {};
                return (
                  void 0 !== typeof e.value && (n.rateMasValue = e.value),
                  void 0 !== typeof t.value && (n.rateMasTimes = t.value),
                  void 0 !== typeof a.value && (n.rateMas = a.value),
                  n
                );
              });
            return {
              rateMas: a,
              tempStatus: r,
              rateMasValue: e,
              rateMasTimes: t,
              tempRateMasValue: i,
              memento: l,
              promptRateMas: o,
              updateRateMas: (e) => {
                a.value = e;
              },
              restoreMemento: (n) => {
                "rateMasValue" in n && (e.value = n.rateMasValue),
                  "rateMasTimes" in n && (t.value = n.rateMasTimes),
                  "rateMas" in n && (a.value = n.rateMas);
              },
              addRateMasValue: (n) => {
                if (!a.value) return;
                const o = 0 === t.value ? 10 * n : n;
                r.value ? (i.value += o) : (e.value += o);
              },
              updateTempStatus: (t) => {
                a.value &&
                  ((r.value = t), t || ((e.value += i.value), (i.value = 0)));
              },
              resetRateMasValue: () => {
                ++t.value, (e.value = 0);
              },
            };
          }),
          be = "themeEditor",
          Se = (0, i.Q_)(be, () => {
            const e = (0, n.iH)(!1),
              t = (0, n.iH)([]),
              a = (0, n.Fl)(() => {
                const e = {};
                return t.value && (e.customThemes = t.value), e;
              });
            return {
              isEditing: e,
              customThemes: t,
              memento: a,
              restoreMemento: (e) => {
                "customThemes" in e &&
                  Array.isArray(e.customThemes) &&
                  (t.value = e.customThemes);
              },
              saveCustomTheme: ({ id: e, name: a }) => {
                let n = t.value.findIndex((t) => t.id === e);
                n < 0
                  ? (t.value.unshift({
                      id: e,
                      name: a,
                      template: "map",
                      createdAt: Date.now(),
                    }),
                    (n = 0))
                  : (t.value[n].createdAt = Date.now());
              },
              renameCustomTheme: ({ id: e, name: a }) => {
                const i = t.value.findIndex((t) => t.id === e);
                i < 0 || n.ZP.set(t.value[i], "name", a);
              },
              removeCustomTheme: ({ id: e }) => {
                const a = t.value.findIndex((t) => t.id === e);
                a < 0 || t.value.splice(a, 1);
              },
              toggleEditingStatus: ({ isEditing: t }) => {
                e.value = t;
              },
            };
          }),
          Te = "theme",
          Ee = (0, i.Q_)(Te, () => {
            const e = (0, n.iH)([]),
              t = (0, n.iH)(),
              a = (0, n.iH)(),
              i = (0, n.iH)(!1),
              r = (0, n.iH)([]),
              o = (0, n.iH)(),
              l = (0, n.Fl)(() => {
                const n = {};
                return (
                  e.value.length > 0 && (n.favoriteColorThemeIds = e.value),
                  t.value && (n.lastUsedSkeletonId = t.value),
                  a.value && (n.lastUsedColorThemeId = a.value),
                  r.value.length > 0 && (n.smartColorThemes = r.value),
                  n
                );
              });
            return {
              smartColorThemes: r,
              lastColorThemeInfo: o,
              lastUsedSkeletonId: t,
              lastUsedColorThemeId: a,
              favoriteColorThemeIds: e,
              isSmartColorThemeEditing: i,
              memento: l,
              restoreMemento: (n) => {
                "favoriteColorThemeIds" in n &&
                  (e.value = n.favoriteColorThemeIds),
                  "lastUsedSkeletonId" in n && (t.value = n.lastUsedSkeletonId),
                  "lastUsedColorThemeId" in n &&
                    (a.value = n.lastUsedColorThemeId),
                  "smartColorThemes" in n && (r.value = n.smartColorThemes);
              },
              addSmartColorTheme: (e) => {
                if (
                  r.value &&
                  r.value
                    .map((e) => (null == e ? void 0 : e.id))
                    .includes(null == e ? void 0 : e.id)
                )
                  return;
                const t = {
                  id: e.id,
                  colorList: e.colorList,
                  idList: e.idList,
                  name: e.name,
                };
                r.value = [t, ...r.value];
              },
              addFavoriteColorTheme: (t) => {
                e.value.includes(t) || e.value.unshift(t);
              },
              removeSmartColorTheme: (e) => {
                r.value = r.value.filter(
                  (t) => (null == t ? void 0 : t.id) !== e,
                );
              },
              removeFavoriteColorTheme: (t) => {
                e.value = e.value.filter((e) => e !== t);
              },
              updateLastColorThemeInfo: (e) => {
                o.value = e;
              },
              changeLastUsedSkeletonId: (e) => {
                t.value = e;
              },
              changeLastUsedColorThemeId: (e) => {
                a.value = e;
              },
              changeSmartColorThemeEditingStatus: ({
                isSmartColorThemeEditing: e,
              }) => {
                i.value = e;
              },
            };
          }),
          Ce = "usage-reporter",
          Ie = (0, i.Q_)(Ce, () => {
            const e = (0, n.iH)(0),
              t = (0, n.iH)(),
              a = (0, n.iH)(),
              i = (0, n.iH)(),
              r = (0, n.iH)(0),
              o = (0, n.iH)([]),
              l = (0, n.iH)(),
              s = (0, n.iH)(),
              d = (0, n.iH)(),
              c = (0, n.iH)(),
              u = (0, n.iH)(),
              m = (0, n.iH)(),
              v = (0, n.iH)(),
              p = (0, n.iH)(),
              h = (0, n.iH)(),
              g = (0, n.iH)(),
              f = (0, n.iH)(),
              w = (0, n.iH)(),
              y = (0, n.iH)(),
              b = (0, n.Fl)(() => {
                const n = {};
                return (
                  e.value && (n.sessionCount = e.value),
                  t.value && (n.firstVisit = t.value),
                  a.value && (n.lastVisit = a.value),
                  i.value && (n.buildNumber = i.value),
                  r.value && (n.currentVersionSessionCount = r.value),
                  n
                );
              });
            return {
              res: s,
              arch: v,
              userID: f,
              events: o,
              platform: m,
              deviceId: c,
              appRegion: h,
              visitorId: l,
              lastVisit: a,
              osVersion: p,
              productId: w,
              firstVisit: t,
              appVersion: u,
              appLanguage: g,
              accountType: d,
              buildNumber: i,
              sessionCount: e,
              sourceOfPurchase: y,
              currentVersionSessionCount: r,
              memento: b,
              trackView: (e) => {
                o.value.push({
                  type: "pageview",
                  actionName: e.view.actionName,
                  date: e.view.date || new Date().toString(),
                });
              },
              trackEvent: ({ event: e } = {}) => {
                for (const t of o.value)
                  if (
                    t.eventAction === e.eventAction &&
                    null === t.eventName &&
                    Number.isInteger(t.eventValue) &&
                    Number.isInteger(e.eventValue)
                  )
                    return void (t.eventValue += e.eventValue);
                o.value.push({
                  type: "event",
                  eventCategory: e.eventCategory || "zen",
                  eventAction: e.eventAction,
                  eventName: e.eventName || null,
                  eventValue: e.eventValue || 1,
                  date: e.date || new Date().toString(),
                });
              },
              trackConfig: (e) => {
                "sourceOfPurchase" === e.config.name &&
                  (y.value = e.config.value);
              },
              cleanEvents: () => {
                o.value.length && (o.value = []);
              },
              concatEvents: (e) => {
                if (
                  e.events &&
                  e.events.length &&
                  ((o.value = o.value.concat(e.events)), o.value.length > 100)
                ) {
                  const e = o.value.length,
                    t = e - 100;
                  o.value = o.value.slice(t, e);
                }
              },
              restoreMemento: (n) => {
                "sessionCount" in n && (e.value = n.sessionCount),
                  "firstVisit" in n && (t.value = n.firstVisit),
                  "lastVisit" in n && (a.value = n.lastVisit),
                  "buildNumber" in n && (i.value = n.buildNumber),
                  "currentVersionSessionCount" in n &&
                    (r.value = n.currentVersionSessionCount);
              },
              updateProperties: (n) => {
                "sessionCount" in n && (e.value = n.sessionCount),
                  "firstVisit" in n && (t.value = n.firstVisit),
                  "lastVisit" in n && (a.value = n.lastVisit),
                  "buildNumber" in n && (i.value = n.buildNumber),
                  "currentVersionSessionCount" in n &&
                    (r.value = n.currentVersionSessionCount),
                  "events" in n && (o.value = n.events),
                  "visitorId" in n && (l.value = n.visitorId),
                  "res" in n && (s.value = n.res),
                  "accountType" in n && (d.value = n.accountType),
                  "deviceId" in n && (c.value = n.deviceId),
                  "appVersion" in n && (u.value = n.appVersion),
                  "platform" in n && (m.value = n.platform),
                  "arch" in n && (v.value = n.arch),
                  "osVersion" in n && (p.value = n.osVersion),
                  "appRegion" in n && (h.value = n.appRegion),
                  "appLanguage" in n && (g.value = n.appLanguage),
                  "userID" in n && (f.value = n.userID),
                  "productId" in n && (w.value = n.productId),
                  "sourceOfPurchase" in n && (y.value = n.sourceOfPurchase);
              },
            };
          }),
          Ae = {
            [s.F]: s.s,
            [d.G]: d.J,
            [F.J]: F.H,
            [L]: N,
            app: _,
            [P]: D,
            [x.S]: x.E,
            [H.J]: H.C,
            [M]: R,
            [K]: W,
            [$]: J,
            [X]: q,
            [Q]: Y,
            [ee]: te,
            [ae]: ne,
            [ie]: re,
            [ce]: ue,
            [me]: ve,
            [pe]: he,
            [ge]: fe,
            [we]: ye,
            [be]: Se,
            [Te]: Ee,
            [Ce]: Ie,
          },
          ke = (s.F, s.s, d.G, d.J, (e) => Ae[e] || ((e) => u.get(e))(e)),
          Oe = (e) => {
            return e in Ae || ((t = e), u.has(t));
            var t;
          };
      },
      86842: (e, t, a) => {
        "use strict";
        a.d(t, { C: () => l, J: () => o });
        var n = a(77412),
          i = a(2954),
          r = a(13908);
        const o = "l10n",
          l = (0, n.Q_)(o, () => {
            const e = (0, i.iH)({});
            return {
              translations: e,
              T: (t, ...a) => {
                const n = (0, r.E)();
                let i = a;
                if ("string" != typeof t) return;
                "$$" === t && i.length > 0 && ((t = i[0]), (i = i.slice(1)));
                const o = n.language;
                let l = (e.value[o] || {})[t];
                return (
                  l || (l = t),
                  i.length > 0 &&
                    (l = l.replace(
                      /\$(\d+)\b/g,
                      (e, t) => i[parseInt(t, 10) - 1] || e,
                    )),
                  l
                );
              },
              updateTranslations: (t, a) => {
                e.value = Object.assign(Object.assign({}, e.value), { [t]: a });
              },
            };
          });
      },
      13908: (e, t, a) => {
        "use strict";
        a.d(t, { E: () => l, S: () => o });
        var n = a(77412),
          i = a(2954),
          r = a(63111);
        const o = "preferences",
          l = (0, n.Q_)(o, () => {
            const e = (0, i.iH)(null),
              t = (0, i.iH)(null),
              a = (0, i.iH)(""),
              n = (0, i.iH)(""),
              o = (0, i.iH)(""),
              l = (0, i.iH)(""),
              s = (0, i.iH)(""),
              d = (0, i.iH)(""),
              c = (0, i.iH)(""),
              u = (0, i.iH)([]),
              m = (0, i.iH)([
                "xmind share",
                "xmind-share-of-cn",
                "blog",
                "facebook",
                "twitter",
                "pinterest",
                "email",
                "evernote",
                "biggerplate",
              ]),
              v = (0, i.iH)([]),
              p = (0, i.iH)("ASK_WHAT_TO_DO_EACH_TIME"),
              h = (0, i.iH)(!0),
              g = (0, i.iH)(20),
              f = (0, i.iH)("Default"),
              w = (0, i.iH)("en-US"),
              y = (0, i.iH)("Follow System"),
              b = (0, i.iH)(!0),
              S = (0, i.iH)(!0),
              T = (0, i.iH)(!1),
              E = (0, i.iH)("manual"),
              C = (0, i.iH)("not"),
              I = (0, i.iH)("default"),
              A = (0, i.iH)(!0),
              k = (0, i.iH)(!0),
              O = (0, i.Fl)(() => r.E7[e.value] || F.value),
              F = (0, i.Fl)(() => r.E7[t.value] || "en-US"),
              L = (0, i.Fl)(() => a.value || N.value),
              N = (0, i.Fl)(() => n.value || "default"),
              P = (0, i.Fl)(() => l.value || r._1),
              D = (0, i.Fl)(() => s.value || x.value),
              x = (0, i.Fl)(() => d.value || "100%"),
              _ = (0, i.Fl)(() => c.value || ""),
              H = (0, i.Fl)(() => (r.sv ? C.value : E.value)),
              M = (0, i.Fl)(() => {
                const i = {};
                return (
                  e.value && (i.language = e.value),
                  t.value && (i.systemLanguage = t.value),
                  a.value && (i.appearance = a.value),
                  n.value && (i.systemAppearance = n.value),
                  l.value && (i.toolbarStyle = l.value),
                  s.value && (i.initialZoomLevel = s.value),
                  c.value && (i.cjkFontFamily = c.value),
                  u.value.length > 0 && (i.ignoredWarnings = u.value),
                  v.value && (i.hiddenShareItems = v.value),
                  T.value && (i.autoLaunchQuickEntry = T.value),
                  void 0 !== S.value && (i.spellCheck = S.value),
                  void 0 !== b.value && (i.sendUsageData = b.value),
                  void 0 !== E.value && (i.autoUpdateType = E.value),
                  void 0 !== C.value && (i.autoUpdateTypeSME = C.value),
                  void 0 !== I.value && (i.defaultTheme = I.value),
                  void 0 !== A.value && (i.watermarkEnabled = A.value),
                  void 0 !== k.value && (i.isLaunchWinVisible = k.value),
                  i
                );
              });
            return {
              preferredLanguage: e,
              systemLanguage: t,
              preferredAppearance: a,
              systemAppearance: n,
              systemScrollbarSetting: o,
              preferredToolbarStyle: l,
              preferredInitialZoomLevel: s,
              systemInitialZoomLevel: d,
              preferredCJKFontFamily: c,
              ignoredWarnings: u,
              supportedShareItems: m,
              preferredHiddenShareItems: v,
              mapThemeChangeAction: p,
              exportWithWaterMask: h,
              maxUndo: g,
              CJKFont: f,
              lastLocale: w,
              theme: y,
              sendUsageData: b,
              spellCheck: S,
              autoLaunchQuickEntry: T,
              autoUpdateType: E,
              autoUpdateTypeSME: C,
              defaultTheme: I,
              watermarkEnabled: A,
              isLaunchWinVisible: k,
              language: O,
              defaultLanguage: F,
              appearance: L,
              defaultAppearance: N,
              toolbarStyle: P,
              initialZoomLevel: D,
              defaultInitialZoomLevel: x,
              cjkFontFamily: _,
              isWarningIgnored: (e) => u.value.includes(e),
              getAutoUpdateType: H,
              memento: M,
              restoreMemento: (i) => {
                "language" in i && (e.value = i.language),
                  "systemLanguage" in i && (t.value = i.systemLanguage),
                  "appearance" in i && (a.value = i.appearance),
                  "systemAppearance" in i && (n.value = i.systemAppearance),
                  "toolbarStyle" in i && (l.value = i.toolbarStyle),
                  "initialZoomLevel" in i && (s.value = i.initialZoomLevel),
                  "cjkFontFamily" in i && (c.value = i.cjkFontFamily),
                  "ignoredWarnings" in i &&
                    Array.isArray(i.ignoredWarnings) &&
                    (u.value = i.ignoredWarnings),
                  "hiddenShareItems" in i && (v.value = i.hiddenShareItems),
                  "autoLaunchQuickEntry" in i &&
                    (T.value = i.autoLaunchQuickEntry),
                  "sendUsageData" in i && (b.value = i.sendUsageData),
                  "spellCheck" in i && (S.value = i.spellCheck),
                  "autoUpdateType" in i && (E.value = i.autoUpdateType),
                  "autoUpdateTypeSME" in i && (C.value = i.autoUpdateTypeSME),
                  "defaultTheme" in i && (I.value = i.defaultTheme),
                  "watermarkEnabled" in i && (A.value = i.watermarkEnabled),
                  "isLaunchWinVisible" in i && (k.value = i.isLaunchWinVisible);
              },
              updatePreferences: (i) => {
                "preferredLanguage" in i && (e.value = i.preferredLanguage),
                  "systemLanguage" in i && (t.value = i.systemLanguage),
                  "preferredAppearance" in i && (a.value = i.preferredAppearance),
                  "systemAppearance" in i && (n.value = i.systemAppearance),
                  "preferredToolbarStyle" in i &&
                    (l.value = i.preferredToolbarStyle),
                  "preferredInitialZoomLevel" in i &&
                    (s.value = i.preferredInitialZoomLevel),
                  "systemInitialZoomLevel" in i &&
                    (d.value = i.systemInitialZoomLevel),
                  "preferredCJKFontFamily" in i &&
                    (c.value = i.preferredCJKFontFamily),
                  "preferredHiddenShareItems" in i &&
                    (v.value = i.preferredHiddenShareItems),
                  "autoLaunchQuickEntry" in i &&
                    (T.value = i.autoLaunchQuickEntry),
                  "systemScrollbarSetting" in i &&
                    (o.value = i.systemScrollbarSetting),
                  "sendUsageData" in i && (b.value = i.sendUsageData),
                  "spellCheck" in i && (S.value = i.spellCheck),
                  "defaultTheme" in i && (I.value = i.defaultTheme),
                  "watermarkEnabled" in i && (A.value = i.watermarkEnabled),
                  "autoUpdateType" in i &&
                    (r.sv
                      ? (C.value = i.autoUpdateType)
                      : (E.value = i.autoUpdateType)),
                  "isLaunchWinVisible" in i && (k.value = i.isLaunchWinVisible);
              },
              ignoreWarning: ({ warning: e }) => {
                u.value.includes(e) || (u.value = u.value.concat([e]));
              },
              resetIgnoredWarnings: () => {
                u.value = [];
              },
            };
          });
      },
      11975: (e, t, a) => {
        "use strict";
        a.d(t, { H: () => c, J: () => d });
        var n = a(77412),
          i = a(2954),
          r = a(78152),
          o = a(75425),
          l = a(31422),
          s = a(60880);
        const d = "windows",
          c = (0, n.Q_)(d, () => {
            const e = (0, i.iH)({}),
              t = (0, i.iH)(),
              a = (0, i.Fl)(() => {
                var e;
                const a = (0, r.F_)(t.value);
                return null !== (e = null == a ? void 0 : a().commands) &&
                  void 0 !== e
                  ? e
                  : [];
              }),
              n = (0, i.Fl)(() => {
                const e = (0, l.J)();
                return (0, o.Nb)(e.mainCommands.concat(a.value));
              }),
              d = (0, i.Fl)(() => {
                var e;
                const a = (0, r.F_)(t.value);
                return null !== (e = null == a ? void 0 : a().contexts) &&
                  void 0 !== e
                  ? e
                  : {};
              }),
              c = (0, i.Fl)(() => {
                const e = (0, s.s)();
                return Object.assign(Object.assign({}, e.mainContexts), d.value);
              });
            return {
              webContentsIdToWinId: e,
              addIdMapping: ({ wcId: t, winId: a }) => {
                e.value = Object.assign(Object.assign({}, e.value), { [t]: a });
              },
              deleteIdMapping: (t) => {
                delete e.value[t], (e.value = Object.assign({}, e.value));
              },
              focusedWinStoreModuleName: t,
              updateFocusedWinStoreModuleName: (e) => (t.value = e),
              contexts: d,
              aggregatedContexts: c,
              commands: a,
              aggregatedCommands: n,
            };
          });
      },
      96829: (e, t, a) => {
        "use strict";
        a.d(t, {
          $T: () => b,
          AI: () => v,
          SC: () => h,
          VR: () => u,
          WZ: () => S,
          ZT: () => T,
          _v: () => y,
          aq: () => g,
          hb: () => c,
          jp: () => m,
          rs: () => w,
          x: () => p,
        });
        a(6113);
        var n = a(52153),
          i = a.n(n),
          r = a(4433),
          o = a.n(r),
          l = a(63465),
          s = a.n(l),
          d = (a(98269), a(68214), a(11227));
        function c() {
          return "xxxyxxxxxxxyxxxxxxxxxyxxxx".replace(/[xy]/g, function (e) {
            const t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          });
        }
        function u(e) {
          return "string" == typeof e
            ? i()(e).toString(s())
            : i()(o().create(e)).toString(s());
        }
        function m(e) {
          const t = (e = e.toLowerCase()).charCodeAt(0);
          return t >= 48 && t <= 57
            ? t - 48
            : t >= 97 && t <= 122
            ? t - 97 + 10
            : -1;
        }
        function v(e, t = "RFC4648") {
          function a(e, t) {
            const a = e.indexOf(t);
            if (-1 === a) throw new Error("Invalid character found: " + t);
            return a;
          }
          let n;
          switch (t) {
            case "RFC3548":
            case "RFC4648":
              (n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),
                (e = e.replace(/=+$/, ""));
              break;
            case "RFC4648-HEX":
              (n = "0123456789ABCDEFGHIJKLMNOPQRSTUV"),
                (e = e.replace(/=+$/, ""));
              break;
            case "Crockford":
              (n = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"),
                (e = e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"));
              break;
            default:
              throw new Error("Unknown base32 variant: " + t);
          }
          const i = e.length;
          let r = 0,
            o = 0,
            l = 0;
          const s = new Uint8Array(((5 * i) / 8) | 0);
          for (let t = 0; t < i; t++)
            (o = (o << 5) | a(n, e[t])),
              (r += 5),
              r >= 8 && ((s[l++] = (o >>> (r - 8)) & 255), (r -= 8));
          return s.buffer;
        }
        function p(e) {
          return d.enabled(e);
        }
        global.process && d.enable(process.env.DEBUG);
        function h(e) {
          return "string" == typeof e
            ? e
            : {
                name: e.name,
                message: e.message,
                stack: e.stack,
                code: e.code,
                data: e.data,
              };
        }
        function g(e) {
          const t = new Error(e.message);
          return (
            (t.name = e.name),
            (t.stack = e.stack),
            (t.code = e.code),
            (t.data = e.data),
            t
          );
        }
        const f = /\B([A-Z])/g,
          w = (function (e) {
            const t = Object.create(null);
            return function (a) {
              return t[a] || (t[a] = e(a));
            };
          })((e) => e.replace(f, "-$1").toLowerCase());
        const y = (e) => new Promise((t) => setTimeout(t, e));
        function b(e) {
          return e;
        }
        function S(e) {
          return e;
        }
        function T() {}
      },
      20993: (e, t, a) => {
        "use strict";
        a.d(t, {
          DY: () => l,
          JC: () => i,
          fR: () => o,
          kI: () => s,
          l5: () => r,
        });
        var n = a(18621);
        const i = (e) => (0, n.L9)({ eventName: "Gallery", eventAction: e }),
          r = () =>
            (0, n.L9)({ eventAction: "insertTask", eventName: "insertTask" }),
          o = (e) => (0, n.L9)({ eventAction: "editTask", eventName: e }),
          l = () =>
            (0, n.L9)({ eventAction: "cancelTask", eventName: "cancelTask" }),
          s = (e) => (0, n.L9)({ eventAction: "highlightTask", eventName: e });
      },
      59474: (e, t, a) => {
        "use strict";
        a.d(t, { i: () => r });
        var n = a(77412),
          i = a(2954);
        const r = (0, n.Q_)("bootstrap", () => {
          const e = (0, i.iH)(!1),
            t = (0, i.iH)(0);
          return {
            ready: e,
            markReady: () => (e.value = !0),
            pendingJobs: t,
            startJob: () => (t.value += 1),
            endJob: () => (t.value -= 1),
          };
        });
      },
      65428: (e, t, a) => {
        "use strict";
        a.d(t, { r: () => s });
        var n = a(54856),
          i = a(77412),
          r = a(2954),
          o = a(90435),
          l = function (e, t, a, n) {
            return new (a || (a = Promise))(function (i, r) {
              function o(e) {
                try {
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof a
                      ? t
                      : new a(function (e) {
                          e(t);
                        })).then(o, l);
              }
              s((n = n.apply(e, t || [])).next());
            });
          };
        const s = (0, i.Q_)("fonts", () => {
          const e = (0, r.iH)(!1),
            t = (0, r.iH)({ systemFonts: {}, vanaFonts: {} });
          return {
            loaded: e,
            markLoaded: () => (e.value = !0),
            getLoadedFonts: () =>
              l(void 0, void 0, void 0, function* () {
                if (
                  !t.value ||
                  (Object.keys(t.value.systemFonts).length <= 0 &&
                    Object.keys(t.value.vanaFonts).length <= 0)
                ) {
                  const e = yield (0, o.he)(n.qz);
                  t.value = e;
                }
                return t.value;
              }),
          };
        });
      },
      2563: (e, t, a) => {
        "use strict";
        a.d(t, { O: () => r });
        var n = a(77412),
          i = a(2954);
        const r = (0, n.Q_)("renderer-app", () => {
          const e = (0, i.iH)(!1),
            t = (0, i.XI)([]),
            a = (0, i.XI)({}),
            n = (0, i.XI)([]);
          return {
            ignoreAppearanceChanged: e,
            updateIgnoreAppearance: (t) => {
              e.value = t;
            },
            builtinFontFamilies: t,
            updateBuiltinFontFamilies: (e) => (t.value = e),
            allFonts: a,
            updateAllFonts: (e) => (a.value = e),
            fontsForMindMap: n,
            updateFontsForMindMap: (e) => (n.value = e),
          };
        });
      },
      53775: (e, t, a) => {
        "use strict";
        a.d(t, { Ds: () => o, P2: () => l, SX: () => i, qJ: () => r });
        var n = function (e, t, a, n) {
          return new (a || (a = Promise))(function (i, r) {
            function o(e) {
              try {
                s(n.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof a
                    ? t
                    : new a(function (e) {
                        e(t);
                      })).then(o, l);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
        function i() {
          return n(this, void 0, void 0, function* () {
            yield new Promise((e) =>
              requestAnimationFrame(() => {
                requestAnimationFrame(e);
              }),
            );
          });
        }
        function r(e) {
          return n(this, void 0, void 0, function* () {
            return Promise.race([
              new Promise((e) =>
                requestAnimationFrame(() => {
                  requestAnimationFrame(e);
                }),
              ),
              new Promise((t) => setTimeout(t, null != e ? e : 200)),
            ]);
          });
        }
        function o(e, t = 300, a = !1) {
          let n;
          function i(...t) {
            (n = void 0), a || e.apply(this, t);
          }
          const r = function (...r) {
            void 0 !== n && clearTimeout(n),
              a && !n && e.apply(this, r),
              (n = setTimeout(i.bind(this, ...r), t));
          };
          return (
            (r.cancel = function () {
              void 0 !== n && (clearTimeout(n), (n = void 0));
            }),
            r
          );
        }
        function l(e, t = 300, a = !1) {
          let n,
            i,
            r,
            o = !1;
          function l() {
            (i = Date.now()),
              e.apply(this, r),
              void 0 !== n && (clearTimeout(n), (n = void 0));
          }
          const s = function (...e) {
            if (o) return;
            if (((r = e), a && !i)) return void l.apply(this);
            const s = Date.now(),
              d = s - (null != i ? i : s);
            d >= t
              ? l.apply(this)
              : void 0 === n && (n = setTimeout(l.bind(this), t - d));
          };
          return (
            (s.cancel = function (e = !0) {
              void 0 !== n && (clearTimeout(n), (n = void 0)),
                (i = void 0),
                (o = e);
            }),
            s
          );
        }
      },
    },
  ]);
  